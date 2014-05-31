(ns tamarack.components.app-navbar
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [tamarack.routes :as routes]))

(def sidebar-links
  [[:app-dashboard "Overview" routes/app-dashboard]])

(defn- link-click-handler [app route e]
  (.preventDefault e)
  (routes/navigate-to routes/app-dashboard {:id (-> @app :current-app :name)}))

(defn- render-sidebar-link [app [view label route]]
  (let [url (routes/url-of routes/app-dashboard {:id (-> app :current-app :name)})
        handler (partial link-click-handler app route)
        active-class (if (= (:view app) view) "active" "")]
    [:a.list-group-item {:href url :onClick handler :class active-class} label]))

(defn component [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "AppNavbar")

    om/IRender
    (render [_]
      (html
       [:div.panel.panel-default
        [:div.panel-heading (-> app :current-app :display-name)]
        [:div.list-group
         (map (partial render-sidebar-link app) sidebar-links)]]))))
