(ns tamarack.pages.all-apps
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as string]
            [tamarack.routes :as routes]
            [tamarack.xhr :as xhr]))

(defn- app-url [row]
  (routes/url-of routes/app-dashboard {:id (:name row)}))

(defn- app-link-clicked [e row]
  (.preventDefault e)
  (routes/navigate-to routes/app-dashboard {:id (:name row)}))

(defn- render-row [row]
  (html
   [:tr {:key (:name row)}
    [:td [:a
          {:href (app-url row) :onClick #(app-link-clicked % row)}
          (:display-name row)]]]))

(defn page [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "AllApps")

    om/IWillMount
    (will-mount [_]
      (xhr/send-edn {:method :get
                     :url "/explorer-api/v1/applications"
                     :on-complete
                     (fn [res]
                       (om/set-state! owner :applications res))}))

    om/IRender
    (render [_]
      (html
       [:div.row
        [:div.col-md-8
         [:table.table.table-hover.table-striped
          [:thead [:tr [:th "Application"]]]
          [:tbody
           (map render-row
                (om/get-state owner :applications))]]]]))))
