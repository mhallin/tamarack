(ns tamarack.components.breadcrumbs
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [tamarack.routes :as routes]
            [tamarack.xhr :as xhr]))

(defn- make-location-list [app]
  (condp = (:view app)
    :app-endpoint-overview [{:title "Applications" :url [routes/all-apps]}
                            {:title (-> app :current-app :display-name)
                             :url [routes/app-dashboard {:id (-> app :current-app :app-id)}]}
                            {:title (:current-endpoint app)
                             :url [routes/app-endpoint-overview
                                   {:id (-> app :current-app :app-id)
                                    :endpoint (:current-endpoint app)}]}]
    
    :app-dashboard [{:title "Applications" :url [routes/all-apps]}
                    {:title (-> app :current-app :display-name)
                     :url [routes/app-dashboard {:id (-> app :current-app :app-id)}]}]
    
    :all-apps [{:title "Applications" :url (routes/all-apps)}]))

(defn- goto-location [url e]
  (.preventDefault e)
  (apply routes/navigate-to url))

(defn- fetch-app-name-if-missing [app]
  (when (and (-> app :current-app) (not (-> app :current-app :display-name)))
    (xhr/send-edn {:method :get
                   :url (str "/explorer-api/v1/applications/" (-> app :current-app :app-id))
                   :on-complete
                   (fn [res]
                     (om/transact! app :current-app (partial merge res)))})))

(defn component [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "Breadcrumbs")

    om/IWillMount
    (will-mount [_]
      (fetch-app-name-if-missing app))

    om/IWillUpdate
    (will-update [_ next-props _]
      (fetch-app-name-if-missing next-props))

    om/IRender
    (render [_]
      (let [location-list (make-location-list app)
            make-location-elem
            (fn [i loc]
              (let [is-active (= (+ i 1) (count location-list))
                    {url :url title :title} loc]
                [:li (if is-active {:class "active"} nil)
                 (if is-active
                   title
                   [:a
                    {:href "#" :onClick (partial goto-location url)}
                    title])]))]
        (html [:ol.breadcrumb (map-indexed make-location-elem location-list)])))))
