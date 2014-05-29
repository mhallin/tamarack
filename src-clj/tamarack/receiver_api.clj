(ns tamarack.receiver-api
  (:require [compojure.core :refer [defroutes POST GET]]
            [tamarack.model :as model]
            [tamarack.util :as util]))

;;; Process JSON from Collector:
;;
;; {
;;   "app_name": app_name
;;   "by_minute": [
;;     {
;;       "timestamp": timestamp,
;;       "endpoint": endpoint,
;;       "sensor_data": {
;;         sensor_key: sensor_value
;;       }
;;     }
;;   ]
;; }
;;
;; 1. Find app_id from app_name
;; 2. Update/insert request_endpoint_by_minute
;; 3. Update/insert request_by_minute
(defn handle-request-data [body-stream]
  (let [body (util/str->json (slurp body-stream))]
    (doseq [minute-data (:by-minute body)]
      (model/process-minute-data (:app-name body)
                                 (:timestamp minute-data)
                                 (:endpoint minute-data)
                                 (:request-count minute-data)
                                 (:error-count minute-data)
                                 (:sensor-data minute-data)))
    {:status 200
     :headers {"Content-Type" "application/json; charset=UTF-8"}
     :body (util/json->str {:status :ok})}))

(defroutes routes
  (POST "/request-data" {body :body} (handle-request-data body)))
