(ns tamarack.view
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as string]
            [tamarack.util :as util]
            [tamarack.chart :as chart]
            [tamarack.xhr :as xhr]
            [tamarack.state :as state]
            [tamarack.routes :as routes]
            [tamarack.canvas :as canvas :include-macros true]
            [goog.date.duration :as gduration]))

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

(defn chart-component [app owner {:keys [data-url] :as opts}]
  (letfn [(draw-my-chart []
            (let [[from to] (-> app :timeslice :window)
                  canvas (.getDOMNode owner)
                  canvas-width (.-clientWidth canvas)
                  canvas-height (.-clientHeight canvas)
                  ctx (.getContext canvas "2d")
                  scale-factor (or (.-devicePixelRatio js/window) 1)]
              (canvas/with-canvas canvas
                (canvas/with-scale scale-factor scale-factor
                  (chart/draw-data ctx canvas-width canvas-height
                                   (om/get-state owner :data)
                                   from to)
                  (.restore ctx)))))
          (fetch-data [app]
            (let [[from to] (-> app :timeslice :window)
                  url (str data-url
                           "?from=" (util/inst->iso from)
                           "&to=" (util/inst->iso to))]
              (xhr/send-edn {:method :get
                             :url url
                             :on-complete
                             (fn [res]
                               (om/set-state! owner :data res))})))
          (refresh-canvas-size []
            (let [canvas (.getDOMNode owner)
                  parent (.-parentNode canvas)
                  [elem-width _] (util/elem-content-size parent)
                  elem-height (* elem-width 0.6)
                  scale-factor (or (.-devicePixelRatio js/window) 1)]
              (.setAttribute canvas "style"
                             (str "width: " elem-width "px; "
                                  "height: " elem-height "px; "))
              (.setAttribute canvas "width" (* scale-factor elem-width))
              (.setAttribute canvas "height" (* scale-factor elem-height))))]
    (reify
      om/IDisplayName
      (display-name [_] "Chart")

      om/IWillMount
      (will-mount [_]
        (fetch-data app))

      om/IWillUpdate
      (will-update [_ next-props next-state]
        (when-not (= (:timeslice next-props) (:timeslice app))
          (fetch-data next-props)))
      
      om/IRender
      (render [_]
        (html [:canvas]))
      
      om/IDidMount
      (did-mount [_]
        (refresh-canvas-size)
        (draw-my-chart))
      
      om/IDidUpdate
      (did-update [_ _ _] (draw-my-chart)))))

(defn agg-table-component [app owner {:keys [agg-type round-fn unit] :as opts}]
  (letfn [(fetch-data [app]
            (let [[from to] (-> app :timeslice :window)
                  url (str (string/join "/"
                                        [ "/explorer-api/v1/applications"
                                          (-> app :current-app :app-id)
                                          "aggregate"
                                          (subs (str agg-type) 1)])
                           "?from=" (util/inst->iso from)
                           "&to=" (util/inst->iso to))]
              (xhr/send-edn {:method :get
                             :url url
                             :on-complete
                             (fn [res]
                               (om/set-state! owner :data res))})))

          (goto-endpoint [endpoint e]
            (.preventDefault e)
            (routes/navigate-to routes/app-endpoint-overview
                                {:id (-> @app :current-app :app-id)
                                 :endpoint endpoint}))

          (render-row [[endpoint value]]
            (html
             [:tr {:key endpoint}
              [:td [:a
                    {:href "#" :onClick (partial goto-endpoint endpoint)}
                    endpoint]]
              [:td.num-col (str (round-fn value) unit)]]))]
    (reify
      om/IDisplayName
      (display-name [_] "AggregateTable")

      om/IWillMount
      (will-mount [_]
        (fetch-data app))

      om/IWillUpdate
      (will-update [_ next-props next-state]
        (when-not (= (:timeslice next-props) (:timeslice app))
          (fetch-data next-props)))

      om/IRender
      (render [_]
        (html
         [:table.table.table-hover.table-striped.table-condensed
          [:tbody (map render-row (om/get-state owner :data))]])))))

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
          (om/build chart-component app
                    {:opts {:data-url (app-endpoint-chart-url (:current-app app)
                                                              (:current-endpoint app)
                                                              :ms-per-req)}})]
         [:div.col-md-4
          [:h3 "Requests per Minute"]
          (om/build chart-component app
                    {:opts {:data-url (app-endpoint-chart-url (:current-app app)
                                                              (:current-endpoint app)
                                                              :reqs-per-min)}})]
         [:div.col-md-4
          [:h3 "Errors per Request"]
          (om/build chart-component app
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
          (om/build chart-component app
                    {:opts {:data-url (app-chart-url (:current-app app) :ms-per-req)}})]
         [:div.col-md-4
          [:h3 "Requests per Minute"]
          (om/build chart-component app
                    {:opts {:data-url (app-chart-url (:current-app app) :reqs-per-min)}})]
         [:div.col-md-4
          [:h3 "Errors per Request"]
          (om/build chart-component app
                    {:opts {:data-url (app-chart-url (:current-app app) :errs-per-req)}})]]

        [:div.row
         [:div.col-md-4
          [:h3 "Slowest Endpoints"]
          (om/build agg-table-component app {:opts {:agg-type :ms-per-req
                                                    :round-fn (partial util/round-to 2)
                                                    :unit " ms"}})]
         [:div.col-md-4
          [:h3 "Most Requested Endpoints"]
          (om/build agg-table-component app {:opts {:agg-type :reqs-per-min
                                                    :round-fn (partial util/round-to 2)
                                                    :unit " rpm"}})]
         [:div.col-md-4
          [:h3 "Endpoints Taking Most Time"]
          (om/build agg-table-component app {:opts {:agg-type :total-time
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

(defn render-breadcrumbs [app owner]
  (letfn [(make-location-list []
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

          (goto-location [url e]
            (.preventDefault e)
            (apply routes/navigate-to url))

          (fetch-app-name-if-missing [app]
            (when (and (-> app :current-app) (not (-> app :current-app :display-name)))
              (xhr/send-edn {:method :get
                             :url (str "/explorer-api/v1/applications/" (-> app :current-app :app-id))
                             :on-complete
                             (fn [res]
                               (om/transact! app :current-app (partial merge res)))})))]
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
        (let [location-list (make-location-list)
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
          (html [:ol.breadcrumb (map-indexed make-location-elem location-list)]))))))

(defn render-timeslice-nav [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "TimesliceNav")

    om/IRender
    (render [_]
      (html
       (if (:tracking-now app)
         [:span
          "Last " (gduration/format (* 1000 (:window-size app))) " "
          [:b.caret]]
         [:span
          (util/timeslice->str app)
          [:b.caret]])))))

(defn render-timeslice-tab [app owner]
  (letfn [(refresh-timeslice []
            (let [new-from (util/parse-date-time (om/get-state owner :from-date-str)
                                                 (om/get-state owner :from-time-str))
                  new-to (util/parse-date-time (om/get-state owner :to-date-str)
                                               (om/get-state owner :to-time-str))]
              (om/update! app :tracking-now false)
              (om/transact! app :window
                            (fn [[old-from old-to]]
                              [(or new-from old-from)
                               (or new-to old-to)]))))

          (handle-change [key e]
            (om/set-state! owner key (-> e .-target .-value))
            (refresh-timeslice)
            (routes/refresh-timeslice))]
    (reify
      om/IInitState
      (init-state [_]
        (let [{[from to] :window} app]
          {:from-date-str (util/inst->local-date-str from)
           :from-time-str (util/inst->local-time-str from)
           :to-date-str (util/inst->local-date-str to)
           :to-time-str (util/inst->local-time-str to)}))

      om/IDisplayName
      (display-name [_] "TimesliceTab")

      om/IRender
      (render [_]
        (html
         [:form.form-horizontal {:role "form"}

          [:div.form-group
           [:label.col-sm-3.control-label "From"]
           [:div.col-sm-5
            [:input.form-control {:type "date"
                                  :value (om/get-state owner :from-date-str)
                                  :onChange (partial handle-change :from-date-str)}]]
           [:div.col-sm-3
            [:input.form-control {:type "time"
                                  :value (om/get-state owner :from-time-str)
                                  :onChange (partial handle-change :from-time-str)}]]]

          [:div.form-group
           [:label.col-sm-3.control-label "To"]
           [:div.col-sm-5
            [:input.form-control {:type "date"
                                  :value (om/get-state owner :to-date-str)
                                  :onChange (partial handle-change :from-date-str)}]]
           [:div.col-sm-3
            [:input.form-control {:type "time"
                                  :value (om/get-state owner :to-time-str)
                                  :onChange (partial handle-change :from-time-str)}]]]])))))

(defn render-window-size-tab [app owner]
  (let [choices (map (partial * 60)
                     [30 60 120 180 300 720 1440 2880 7200])

        update-window-size
        (fn [e]
          (state/track-now! app (-> e .-target .-value int))
          (routes/refresh-timeslice))]
    (reify
      om/IDisplayName
      (display-name [_] "TimeWindowSizeTab")

      om/IRender
      (render [_]
        (html
         [:form.form-horizontal {:role "form"}
          [:div.form-group
           [:label.col-sm-3.control-label "Show last"]
           [:div.col-sm-5
            [:select.form-control
             {:onChange update-window-size
              :value (if (:tracking-now app) (:window-size app) -1)}
             [:option {:disabled true :value -1} "(choose one)"]
             (map (fn [v] [:option {:value v :key v} (gduration/format (* 1000 v))])
                  choices)]]]])))))

(defn render-debug [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "StateDebug")

    om/IRender
    (render [_]
      (html [:pre (pr-str app)]))))

(defn render-all []
  (om/root render-breadcrumbs state/app-state {:target (util/element-by-id "breadcrumb")})
  (om/root render-main state/app-state {:target (util/element-by-id "main-content")})
  (om/root render-timeslice-nav state/app-state {:target (util/element-by-id "timeslice-nav")
                                                 :path [:timeslice]})
  (om/root render-window-size-tab state/app-state {:target (util/element-by-id "up-to-now-tab")
                                                   :path [:timeslice]})
  (om/root render-timeslice-tab state/app-state {:target (util/element-by-id "date-range-tab")
                                                 :path [:timeslice]})
  (om/root render-debug state/app-state {:target (util/element-by-id "debug-container")}))
