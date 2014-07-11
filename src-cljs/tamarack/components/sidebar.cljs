(ns tamarack.components.sidebar
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(defn all-apps-items []
  (html
   [:ol
    [:li.active
     [:a {:href "#"} "Applications"]]
    [:li
     [:a {:href "#"} "Teams"]]]))

(defn component [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "Sidebar")

    om/IRender
    (render [_]
      :all-apps
      (all-apps-items))))
