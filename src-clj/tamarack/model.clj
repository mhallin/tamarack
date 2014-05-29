(ns tamarack.model
  (:require [clj-time.core :as time]
            [clj-time.format :as time-format]
            [clj-time.coerce :as time-coerce]
            [clj-time.periodic :as time-periodic]
            [clojure.walk :refer [stringify-keys]]
            [tamarack.util :as util])
  (:use korma.core
        korma.db))

(defonce timestamp-date-format (time-format/formatters :date))
(defonce timestamp-format (time-format/formatters :date-time-no-ms))

(defentity application)

(defentity request-by-minute
  (table :request_by_minute))

(defentity request-endpoint-by-minute
  (table :request_endpoint_by_minute))

(defn init []
  (defdb db (postgres {:db "tamarack"})))

(defmacro with-lock [entity mode & body]
  `(let [modes# {:exclusive "EXCLUSIVE"}
         mode-str# (modes# ~mode)
         table# (:table ~entity)]
     (assert mode-str# "Unknown lock mode")
     (transaction
      (exec-raw [(str "LOCK TABLE " table# " IN " mode-str# " MODE")])
      (do ~@body))))

(defn app-name->id [app-name]
  (with-lock application :exclusive
    (let [existing (or (first (select application (where {:name app-name})))
                       (insert application (values {:name app-name :display_name app-name})))]
      (:id existing))))

(defn prepare-global-minute-data [app-id timestamp]
  (with-lock request-by-minute :exclusive
    (let [sql-timestamp (time-coerce/to-sql-time timestamp)
          existing (select request-by-minute
                           (where {:app_id app-id :timestamp sql-timestamp}))]
      (when (empty? existing)
        (exec-raw ["INSERT INTO request_by_minute VALUES (?, ?, '', ?, ?)"
                   [app-id (time-coerce/to-sql-time timestamp) 0 0]])))))

(defn prepare-endpoint-minute-data [app-id timestamp endpoint]
  (with-lock request-endpoint-by-minute :exclusive
    (let [sql-timestamp (time-coerce/to-sql-time timestamp)
          existing (select request-endpoint-by-minute
                           (where {:app_id app-id
                                   :timestamp sql-timestamp
                                   :endpoint endpoint}))]
      (when (empty? existing)
        (exec-raw ["INSERT INTO request_endpoint_by_minute VALUES (?, ?, ?, '', ?, ?)"
                   [app-id endpoint (time-coerce/to-sql-time timestamp) 0 0]])))))

(defn prepare-minute-data [app-id timestamp endpoint]
  (prepare-global-minute-data app-id timestamp)
  (prepare-endpoint-minute-data app-id timestamp endpoint))

(defn increment-minute-data [app-id timestamp endpoint request-count error-count]
  (let [sql-timestamp (time-coerce/to-sql-time timestamp)]
    (transaction
     (exec-raw ["UPDATE request_by_minute
                   SET request_count = request_count + ?,
                       error_count = error_count + ?
                  WHERE app_id = ? AND timestamp = ?"
                [request-count error-count app-id sql-timestamp]])
     (exec-raw ["UPDATE request_endpoint_by_minute
                   SET request_count = request_count + ?,
                       error_count = error_count + ?
                  WHERE app_id = ? AND timestamp = ? AND endpoint = ?"
                [request-count error-count app-id sql-timestamp endpoint]]))))

(defn increment-minute-sensor-value [app-id timestamp endpoint key val]
  (let [sql-timestamp (time-coerce/to-sql-time timestamp)]
    (transaction
     (exec-raw ["UPDATE request_by_minute
                SET sensor_data = incr_key(sensor_data, ?, ?)
                WHERE app_id = ? AND timestamp = ?"
                [key val app-id sql-timestamp]])
     (exec-raw ["UPDATE request_endpoint_by_minute
                SET sensor_data = incr_key(sensor_data, ?, ?)
                WHERE app_id = ? AND timestamp = ? AND endpoint = ?"
                [key val app-id sql-timestamp endpoint]]))))

(defn process-minute-data [app-name timestamp-str endpoint request-count error-count sensor-data]
  (let [timestamp (time-format/parse timestamp-format timestamp-str)
        app-id (app-name->id app-name)]
    (prepare-minute-data app-id timestamp endpoint)
    (increment-minute-data app-id timestamp endpoint request-count error-count)
    (doseq [[key val] (stringify-keys sensor-data)]
      (increment-minute-sensor-value app-id timestamp endpoint key val))))

(defn sensor-data-by-minute [app-name from to]
  (let [sql-from (time-coerce/to-sql-time from)
        sql-to (time-coerce/to-sql-time to)
        app-id (app-name->id app-name)
        query (select request-by-minute
                      (where (and (>= :timestamp sql-from)
                                  (<= :timestamp sql-to)
                                  (= :app_id app-id))))]
    (map (fn [row]
           {:timestamp (:timestamp row)
            :request-count (:request_count row)
            :error-count (:error_count row)
            :sensor-data (-> row :sensor_data util/db->clj util/db->sensor-data)})
         query)))

(defn sensor-data-by-endpoint-by-minute [app-name from to]
  (let [sql-from (time-coerce/to-sql-time from)
        sql-to (time-coerce/to-sql-time to)
        app-id (app-name->id app-name)
        query (select request-endpoint-by-minute
                      (where (and (>= :timestamp sql-from)
                                  (<= :timestamp sql-to)
                                  (= :app_id app-id))))]
    (map (fn [row]
           {:timestamp (:timestamp row)
            :endpoint (:endpoint row)
            :request-count (:request_count row)
            :error-count (:error_count row)
            :sensor-data (-> row :sensor_data util/db->clj util/db->sensor-data)})
         query)))

(defn endpoint-sensor-data-by-minute [app-name endpoint from to]
  (let [sql-from (time-coerce/to-sql-time from)
        sql-to (time-coerce/to-sql-time to)
        app-id (app-name->id app-name)
        query (select request-endpoint-by-minute
                      (where (and (>= :timestamp sql-from)
                                  (<= :timestamp sql-to)
                                  (= :app_id app-id)
                                  (= :endpoint endpoint))))]
    (map (fn [row]
           {:timestamp (:timestamp row)
            :request-count (:request_count row)
            :error-count (:error_count row)
            :sensor-data (-> row :sensor_data util/db->clj util/db->sensor-data)})
         query)))

(defn applications []
  (map util/db->clj
       (select application
               (order :display_name))))

(defn application-info [app-name]
  (if-let [app (first (select application (where {:name app-name})))]
    (util/db->clj app)))
