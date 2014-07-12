(ns tamarack.pages.app-dashboard
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as string]
            [tamarack.util :as util]
            [tamarack.components.chart :as chart]
            [tamarack.components.agg-table :as agg-table]))

(defn app-chart-url [app chart-type]
  (let [comps [ "/explorer-api/v1/applications"
                (:name app)
                "chart"
                (subs (str chart-type) 1)]]
    (string/join "/" comps)))

(defn page [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "AppDashboard")

    om/IRender
    (render [_]
      (html
       [:div.app-dashboard
        [:div.row [:div.col-md-12 [:h2 "Application Overview for " (-> app :current-app :display-name)]]]
        [:div.row
         [:div.col-md-12
          [:div.row
           [:div.col-md-4
            [:h3 "Time per Request"]
            (om/build chart/component app
                      {:opts {:data-url (app-chart-url (:current-app app) :ms-per-req)}})]
           [:div.col-md-4
            [:h3 "Requests per Minute"]
            (om/build chart/component app
                      {:opts {:data-url (app-chart-url (:current-app app) :reqs-per-min)}})]
           [:div.col-md-4
            [:h3 "Errors per Request"]
            (om/build chart/component app
                      {:opts {:data-url (app-chart-url (:current-app app) :errs-per-req)}})]]

          [:div.row
           [:div.col-md-4
            [:h3 "Slowest Endpoints"]
            (om/build agg-table/component app {:opts {:agg-type :ms-per-req
                                                      :round-fn (partial util/round-to 2)
                                                      :unit " ms"}})]
           [:div.col-md-4
            [:h3 "Most Requested Endpoints"]
            (om/build agg-table/component app {:opts {:agg-type :reqs-per-min
                                                      :round-fn (partial util/round-to 2)
                                                      :unit " rpm"}})]
           [:div.col-md-4
            [:h3 "Endpoints Taking Most Time"]
            (om/build agg-table/component app {:opts {:agg-type :total-time
                                                      :round-fn (partial util/round-to 2)
                                                      :unit " ms"}})]]]]]))))
