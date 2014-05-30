(ns tamarack.view
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as string]
            [tamarack.util :as util]
            [tamarack.xhr :as xhr]
            [tamarack.state :as state]
            [tamarack.routes :as routes]
            [tamarack.components.chart :as chart]
            [tamarack.components.agg-table :as agg-table]
            [tamarack.components.breadcrumbs :as breadcrumbs]
            [tamarack.components.timeslice :as timeslice]))

(defn app-chart-url [app chart-type]
  (let [comps [ "/explorer-api/v1/applications"
                (:app-id app)
                "chart"
                (subs (str chart-type) 1)]]
    (string/join "/" comps)))

(defn app-endpoint-chart-url [app endpoint chart-type]
  (let [comps [ "/explorer-api/v1/applications"
                (:app-id app)
                "endpoints"
                endpoint
                "chart"
                (subs (str chart-type) 1)]]
    (string/join "/" comps)))


(defn application-endpoint-overview [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "AppEndpointOverview")

    om/IRender
    (render [_]
      (html
       [:div.app-endpoint-overview
        [:div.row [:div.col-md-12 [:h2 "Endpoint Overiew for \"" (:current-endpoint app) "\""]]]

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
                                                              :errs-per-req)}})]]]))))

(defn application-dashboard [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "AppDashboard")

    om/IRender
    (render [_]
      (html
       [:div.app-dashboard
        [:div.row [:div.col-md-12 [:h2 "Application Overview for " (-> app :current-app :display-name)]]]

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
                                                    :unit " ms"}})]]]))))

(defn all-apps [app owner]
  (letfn [(app-link-clicked [e row]
            (.preventDefault e)
            (routes/navigate-to routes/app-dashboard {:id (:name row)}))
          (render-row [row]
            (html
             [:tr {:key (:name row)}
              [:td [:a
                    {:href "#" :onClick #(app-link-clicked % row)}
                    (:display-name row)]]]))]
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
                  (om/get-state owner :applications))]]]])))))

(defn render-main [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "Main")

    om/IWillMount
    (will-mount [_]
      (.setInterval js/window
                    (partial state/update-timeslice (:timeslice app))
                    1000))

    om/IRender
    (render [_]
      (condp = (:view app)
        :app-endpoint-overview
        (om/build application-endpoint-overview app)
        
        :app-dashboard
        (om/build application-dashboard app)

        :all-apps
        (om/build all-apps app)))))

(defn render-debug [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "StateDebug")

    om/IRender
    (render [_]
      (html [:pre (pr-str app)]))))

(defn render-all []
  (om/root breadcrumbs/component state/app-state {:target (util/element-by-id "breadcrumb")})
  (om/root render-main state/app-state {:target (util/element-by-id "main-content")})

  (om/root timeslice/nav-label state/app-state
           {:target (util/element-by-id "timeslice-nav") :path [:timeslice]})
  (om/root timeslice/edit-tracking-now-duration state/app-state
           {:target (util/element-by-id "up-to-now-tab") :path [:timeslice]})
  (om/root timeslice/edit-date-range state/app-state
           {:target (util/element-by-id "date-range-tab") :path [:timeslice]})
  
  (om/root render-debug state/app-state {:target (util/element-by-id "debug-container")}))
