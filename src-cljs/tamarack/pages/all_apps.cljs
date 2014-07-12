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
          {:href (app-url row) :onClick #(app-link-clicked % @row)}
          (:display-name row)]]]))

(defn- app-list->map [app-list]
  (reduce #(assoc %1 (:name %2) %2) {} app-list))

(defn- sorted-app-list [app-map]
  (sort-by :display-name (vals app-map)))

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
                       (om/update! app :all-apps (app-list->map res)))}))

    om/IRender
    (render [_]
      (html
       [:div.row
        [:div.col-md-8
         [:table.table.table-hover.table-striped
          [:thead [:tr [:th "Application"]]]
          [:tbody
           (->> app
                :all-apps
                sorted-app-list
                (map render-row))]]]]))))
