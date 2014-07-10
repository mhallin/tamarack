(ns tamarack.components.sidebar
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(defn all-apps-items []
  (html
   [:ol
    [:li.active
     [:a {:href "#"} [:i.fa.fa-cubes] "Applications"]]
    [:li
     [:a {:href "#"} [:i.fa.fa-group] "Teams"]]]))

(defn component [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "Sidebar")

    om/IRender
    (render [_]
      :all-apps
      (all-apps-items))))
