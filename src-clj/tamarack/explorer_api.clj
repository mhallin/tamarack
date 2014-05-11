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

(defn application-info [app-id]
  (edn-response (model/application-info app-id)))

(def chart-map
  {:ms-per-req (fn [{tot :requests time :total_time}]
                 (if (zero? tot) nil (float (* (/ time tot) USEC->MSEC))))
   :reqs-per-min :requests
   :errs-per-req (fn [{tot :requests errs :errors}] (if (zero? tot) nil (float (/ errs tot))))
   :total-time #(-> % :total_time (* USEC->MSEC))})

(defn application-chart [app-id chart-type from to]
  (let [data (model/request-data-by-minute app-id from to)
        mapper (chart-map chart-type)]
    (edn-response (into {} (for [d data] [(time-coerce/to-long (:timestamp d)) (mapper d)])))))

(defn aggregate-db-data [mapper agg val]
  (let [endpoint (:endpoint val)
        new-val (mapper val)
        [agg-tot agg-count] (or (agg endpoint) [0 0])]
    (merge agg {endpoint [(+ agg-tot new-val) (+ agg-count 1)]})))

(defn application-aggregate [app-id chart-type from to limit]
  (let [data (model/request-endpoint-data-by-minute app-id from to)
        mapper (chart-map chart-type)
        aggregate (reduce (partial aggregate-db-data mapper) {} data)
        aggregate-avg (map (fn [[k [v n]]] [k (/ v n)]) aggregate)
        sorted-aggregate (sort-by (fn [[_ v]] (- v)) aggregate-avg)]
    (edn-response sorted-aggregate)))

(defn application-endpoint-chart [app-id endpoint chart-type from to]
  (let [data (model/request-single-endpoint-data-by-minute app-id endpoint from to)
        mapper (chart-map chart-type)]
    (edn-response (into {} (for [d data] [(time-coerce/to-long (:timestamp d)) (mapper d)])))))

(defroutes routes
  (GET "/applications" [] (applications))
  (GET "/applications/:uuid" {{uuid :uuid} :params}
       (application-info (str->uuid uuid)))
  (GET "/applications/:uuid/chart/:type" {{uuid :uuid type :type from :from to :to} :params}
       (application-chart (str->uuid uuid)
                          (keyword type)
                          (time-format/parse model/timestamp-format from)
                          (time-format/parse model/timestamp-format to)))
  (GET "/applications/:uuid/aggregate/:type" {{uuid :uuid type :type from :from to :to limit :limit} :params}
       (application-aggregate (str->uuid uuid)
                              (keyword type)
                              (time-format/parse model/timestamp-format from)
                              (time-format/parse model/timestamp-format to)
                              (if limit (Integer. limit) nil)))
  (GET "/applications/:uuid/endpoints/:endpoint/chart/:type"
       {{uuid :uuid endpoint :endpoint type :type from :from to :to} :params}
       (application-endpoint-chart (str->uuid uuid)
                                   endpoint
                                   (keyword type)
                                   (time-format/parse model/timestamp-format from)
                                   (time-format/parse model/timestamp-format to))))
