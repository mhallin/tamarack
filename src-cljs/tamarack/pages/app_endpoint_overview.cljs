(ns tamarack.pages.app-endpoint-overview
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as string]
            [tamarack.components.chart :as chart]))

(defn app-endpoint-chart-url [app endpoint chart-type]
  (let [comps [ "/explorer-api/v1/applications"
                (:name app)
                "endpoints"
                endpoint
                "chart"
                (subs (str chart-type) 1)]]
    (string/join "/" comps)))

(defn page [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "AppEndpointOverview")

    om/IRender
    (render [_]
      (html
       [:div.app-endpoint-overview
        [:div.row [:div.col-md-12 [:h2 "Endpoint Overiew for \"" (:current-endpoint app) "\""]]]

        [:div.row
         [:div.col-md-9
          [:div.row
           [:div.col-md-4
            [:h3 "Time per Request"]
            (om/build chart/component app
                      {:opts {:data-url (app-endpoint-chart-url (:current-app app)
                                                                (:current-endpoint app)
                                                                :ms-per-req)}})]
           [:div.col-md-4
            [:h3 "Requests per Minute"]
            (om/build chart/component app
                      {:opts {:data-url (app-endpoint-chart-url (:current-app app)
                                                                (:current-endpoint app)
                                                                :reqs-per-min)}})]
           [:div.col-md-4
            [:h3 "Errors per Request"]
            (om/build chart/component app
                      {:opts {:data-url (app-endpoint-chart-url (:current-app app)
                                                                (:current-endpoint app)
                                                                :errs-per-req)}})]]]]]))))
