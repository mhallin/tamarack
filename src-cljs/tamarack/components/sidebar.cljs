(ns tamarack.components.sidebar
  (:require [om.core :as om :include-macros true]
            [clojure.string :as string]
            [sablono.core :as html :refer-macros [html]]))

(defn- all-apps-items []
  (html
   [:ol
    [:li.active
     [:a {:href "#"} "Applications"]]]))

(defn- app-items [view app]
  (html
   [:ol
    [:li {:class (when (= view :app-dashboard) "active")}
     [:a {:href (string/join "/" [ "#/applications" (:name app)])} "Dashboard"]]]))

(defn component [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "Sidebar")

    om/IRender
    (render [_]
      (case (:view app)
        :all-apps (all-apps-items)

        (:app-dashboard :app-endpoint-overview)
        (app-items (:view app) (:current-app app))
        
        (html [:ol])))))
