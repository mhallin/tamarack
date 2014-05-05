(ns tamarack.handler
  (:use compojure.core)
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :refer [file-response]]
            [tamarack.receiver-api :as receiver-api]
            [tamarack.explorer-api :as explorer-api]))

(defn index-page []
  (file-response "index.html" {:root "resources/templates"}))

(defroutes app-routes
  (context "/receiver-api/v1" [] receiver-api/routes)
  (context "/explorer-api/v1" [] explorer-api/routes)
  (GET "/" [] (index-page))
  (route/files "/" {:root "resources/public"})
  (route/not-found "Not Found"))

(def app
  (handler/site app-routes))
