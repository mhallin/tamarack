(ns tamarack.model
  (:require [clj-time.core :as time]
            [clj-time.format :as time-format]
            [clj-time.coerce :as time-coerce]
            [clj-time.periodic :as time-periodic]
            [qbits.alia :as alia]
            [qbits.hayt :as hayt]
            [tamarack.util :as util]))

(defonce timestamp-date-format (time-format/formatters :date))
(defonce timestamp-format (time-format/formatters :date-time-no-ms))

(def session (atom nil))

(defn uuid []
  (java.util.UUID/randomUUID))

(defn app-name->id [app-name]
  (let [select-query (hayt/select :application
                                  (hayt/columns :app_id)
                                  (hayt/where {:app_name app-name}))
        select-result (alia/execute @session select-query)]
    (if (empty? select-result)
      (let [app-id (uuid)
            insert-query (hayt/insert :application
                                      (hayt/values
                                       {:app_name app-name
                                        :app_id app-id
                                        :display_name app-name}))]
        (alia/execute @session insert-query)
        app-id)
      (:app_id (first select-result)))))

(defn timestamp-without-minute [timestamp]
  (time-coerce/from-long (* (long (/ (time-coerce/to-long timestamp)
                                     60000))
                            60000)))

(defn timestamp-date-part [timestamp]
  (time-format/unparse timestamp-date-format timestamp))

(defn dates-between [from to]
  (let [interval (time/interval from (time/plus to (time/hours 24)))]
    (map timestamp-date-part
         (take-while (partial time/within? interval)
                     (time-periodic/periodic-seq from (time/hours 24))))))

(defn process-request-data [app-id data]
  (let [{errors :errors
         requests :requests
         total-time :total-time
         timestamp-str :timestamp} data
         timestamp (time-format/parse timestamp-format timestamp-str)
         timestamp-minute (timestamp-without-minute timestamp)

         base-where-clause {:app_id app-id
                            :timestamp (time-coerce/to-long timestamp-minute)
                            :date_part (timestamp-date-part timestamp-minute)}
         sensors {"errors" errors
                  "requests" requests
                  "total_time" total-time}]
    (doseq [[sensor-key value] sensors]
      (let [where-clause (assoc base-where-clause :sensor_key sensor-key)
            query (hayt/update :request_by_minute
                               (hayt/set-columns {:value (hayt/inc-by value)})
                               (hayt/where where-clause))]
        (alia/execute @session query)))))

(defn process-endpoint-data [app-id data]
  (let [{errors :errors
         requests :requests
         total-time :total-time
         endpoint :endpoint
         timestamp-str :timestamp} data
         timestamp (time-format/parse timestamp-format timestamp-str)
         timestamp-minute (timestamp-without-minute timestamp)

         base-minute-filter {:app_id app-id
                             :endpoint endpoint
                             :timestamp (time-coerce/to-long timestamp-minute)
                             :date_part (timestamp-date-part timestamp-minute)}

         sensors {"errors" errors
                  "requests" requests
                  "total_time" total-time}]
    (doseq [[sensor-key value] sensors]
      (let [where-clause (hayt/where (assoc base-minute-filter :sensor_key sensor-key))
            inc-column (hayt/set-columns {:value (hayt/inc-by value)})

            query-minute-agg (hayt/update :request_endpoint_by_minute_for_agg
                                          inc-column where-clause)
            query-minute (hayt/update :request_endpoint_by_minute
                                      inc-column where-clause)]
        (alia/execute @session query-minute-agg)
        (alia/execute @session query-minute)))))

(defn request-data-by-minute [app-id from to]
  (let [from-long (time-coerce/to-long from)
        to-long (time-coerce/to-long to)
        query (hayt/select :request_by_minute
                           (hayt/columns :timestamp :sensor_key :value)
                           (hayt/where [[= :app_id app-id]
                                        [:in :date_part (dates-between from to)]
                                        [>= :timestamp from-long]
                                        [<= :timestamp to-long]]))]
    (map (fn [[timestamp props]] (assoc props :timestamp timestamp))
         (reduce (fn [accumulator
                      {timestamp :timestamp
                       sensor-key :sensor_key
                       value :value}]
                   (assoc-in accumulator [timestamp (util/key->keyword sensor-key)] value))
                 {}
                 (alia/execute @session query)))))

(defn request-endpoint-data-by-minute [app-id from to]
  (let [from-long (time-coerce/to-long from)
        to-long (time-coerce/to-long to)
        query (hayt/select :request_endpoint_by_minute_for_agg
                           (hayt/columns :timestamp :endpoint :sensor_key :value)
                           (hayt/where [[= :app_id app-id]
                                        [:in :date_part (dates-between from to)]
                                        [>= :timestamp from-long]
                                        [<= :timestamp to-long]]))]
    (mapcat (fn [[timestamp endpoints]]
              (map (fn [[endpoint data]]
                     (-> data
                         (assoc :timestamp timestamp)
                         (assoc :endpoint endpoint)))
                   endpoints))
            (reduce (fn [accumulator
                         {timestamp :timestamp
                          endpoint :endpoint
                          sensor-key :sensor_key
                          value :value}]
                      (assoc-in accumulator [timestamp
                                             endpoint
                                             (util/key->keyword sensor-key)] value))
                    {}
                    (alia/execute @session query)))))

(defn request-single-endpoint-data-by-minute [app-id endpoint from to]
  (let [from-long (time-coerce/to-long from)
        to-long (time-coerce/to-long to)
        query (hayt/select :request_endpoint_by_minute
                           (hayt/columns :timestamp :sensor_key :value)
                           (hayt/where [[= :app_id app-id]
                                        [:in :date_part (dates-between from to)]
                                        [= :endpoint endpoint]
                                        [>= :timestamp from-long]
                                        [<= :timestamp to-long]]))]
    (map (fn [[timestamp props]] (assoc props :timestamp timestamp))
         (reduce (fn [accumulator
                      {timestamp :timestamp
                       sensor-key :sensor_key
                       value :value}]
                   (assoc-in accumulator [timestamp (util/key->keyword sensor-key)] value))
                 {}
                 (alia/execute @session query)))))

(defn applications []
  (let [query (hayt/select :application)]
    (sort-by :app-name (util/db->clj (alia/execute @session query)))))

(defn application-info [app-id]
  (let [query (hayt/select :application
                           (hayt/where {:app_id app-id}))]
    (first (util/db->clj (alia/execute @session query)))))

(defn init []
  (let [cluster (alia/cluster {:contact-points ["127.0.0.1"]})]
    (reset! session (alia/connect cluster))
    (alia/execute @session (hayt/use-keyspace :tamarack))))
