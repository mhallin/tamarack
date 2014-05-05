(ns tamarack.receiver-api
  (:require [compojure.core :refer [defroutes POST GET]]
            [tamarack.model :as model]
            [tamarack.util :as util]))

(defn handle-request-data [body-stream]
  (let [body (util/str->json (slurp body-stream))
        {app-name :app-name data :data endpoints :endpoints} body
        app-id (model/app-name->id app-name)]
    (doall (map #(model/process-request-data app-id %1) data))
    (doall (map #(model/process-endpoint-data app-id %1) endpoints))
    {:status 200
     :headers {"Conttent-Type" "application/json; charset=UTF-8"}
     :body (util/json->str {:status :ok})}))

(defroutes routes
  (POST "/request-data" {body :body} (handle-request-data body)))
