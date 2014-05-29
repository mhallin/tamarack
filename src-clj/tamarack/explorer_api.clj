(ns tamarack.explorer-api
  (:require [clojure.edn :as edn]
            [compojure.core :refer [defroutes GET]]
            [tamarack.model :as model]
            [clj-time.format :as time-format]
            [clj-time.coerce :as time-coerce]))

(def USEC->MSEC (/ 1 1000))

(defn str->uuid [s]
  (java.util.UUID/fromString s))

(defn edn-response [data]
  {:status 200
   :headers {"Content-Type" "application/edn; charset=UTF-8"}
   :body (pr-str data)})

(defn applications []
  (edn-response (model/applications)))

(defn application-info [app-name]
  (edn-response (model/application-info app-name)))

(def chart-map
  {:ms-per-req (fn [{tot :request-count time :total-time}]
                 (if (zero? tot) nil (float (* (/ time tot) USEC->MSEC))))
   :reqs-per-min :request-count
   :errs-per-req (fn [{tot :request-count errs :error-count}] (if (zero? tot) nil (float (/ errs tot))))
   :total-time #(-> % :total-time (* USEC->MSEC))})

(defn application-chart [app-name chart-type from to]
  (let [data (model/sensor-data-by-minute app-name from to)
        mapper (chart-map chart-type)]
   (edn-response (into {} (for [d data] [(time-coerce/to-long (:timestamp d)) (mapper (:sensor-data d))])))))

(defn aggregate-db-data [mapper agg val]
  (let [endpoint (:endpoint val)
        new-val (mapper val)
        [agg-tot agg-count] (or (agg endpoint) [0 0])]
    (merge agg {endpoint [(+ agg-tot new-val) (+ agg-count 1)]})))

(defn application-aggregate [app-name chart-type from to limit]
  (let [data (model/sensor-data-by-endpoint-by-minute app-name from to)
        mapper #((chart-map chart-type) (:sensor-data %))
        aggregate (reduce (partial aggregate-db-data mapper) {} data)
        aggregate-avg (map (fn [[k [v n]]] [k (/ v n)]) aggregate)
        sorted-aggregate (sort-by (fn [[_ v]] (- v)) aggregate-avg)]
    (edn-response sorted-aggregate)))

(defn application-endpoint-chart [app-name endpoint chart-type from to]
  (let [data (model/endpoint-sensor-data-by-minute app-name endpoint from to)
        mapper (chart-map chart-type)]
    (edn-response (into {} (for [d data] [(time-coerce/to-long (:timestamp d)) (mapper (:sensor-data d))])))))

(defroutes routes
  (GET "/applications" [] (applications))
  (GET "/applications/:app-name" {{app-name :app-name} :params}
       (application-info app-name))
  (GET "/applications/:app-name/chart/:type" {{app-name :app-name type :type from :from to :to} :params}
       (application-chart app-name
                          (keyword type)
                          (time-format/parse model/timestamp-format from)
                          (time-format/parse model/timestamp-format to)))
  (GET "/applications/:app-name/aggregate/:type" {{app-name :app-name type :type from :from to :to limit :limit} :params}
       (application-aggregate app-name
                              (keyword type)
                              (time-format/parse model/timestamp-format from)
                              (time-format/parse model/timestamp-format to)
                              (if limit (Integer. limit) nil)))
  (GET "/applications/:app-name/endpoints/:endpoint/chart/:type"
       {{app-name :app-name endpoint :endpoint type :type from :from to :to} :params}
       (application-endpoint-chart app-name
                                   endpoint
                                   (keyword type)
                                   (time-format/parse model/timestamp-format from)
                                   (time-format/parse model/timestamp-format to))))
