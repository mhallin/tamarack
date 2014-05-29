(ns tamarack.view
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clojure.string :as string]
            [tamarack.util :as util]
            [tamarack.chart :as chart]
            [tamarack.xhr :as xhr]
            [tamarack.state :as state]
            [tamarack.routes :as routes]
            [goog.date.duration :as gduration]))

(defn with-grid-row [& es]
  (apply dom/div #js {:className "row"} es))

(defn with-grid-col [cols & es]
  (apply dom/div #js {:className (str "col-md-" cols)} es))

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
  (let [canvas-width 293
        canvas-height 180]
   (letfn [(draw-my-chart []
             (let [[from to] (-> app :timeslice :window)
                   canvas (.getDOMNode owner)
                   ctx (.getContext canvas "2d")]
               (when (= (.-devicePixelRatio js/window) 2)
                 (.setAttribute canvas "width" (* 2 canvas-width))
                 (.setAttribute canvas "height" (* 2 canvas-height))
                 (.setAttribute canvas "style" (str "width: " canvas-width "px;"
                                                    "height" canvas-height "px;"))
                 (.scale ctx 2 2))
               (chart/draw-data canvas ctx canvas-width canvas-height
                                (om/get-state owner :data)
                                from to)))
           (fetch-data [app]
             (let [[from to] (-> app :timeslice :window)
                   url (str data-url
                            "?from=" (util/inst->iso from)
                            "&to=" (util/inst->iso to))]
               (xhr/send-edn {:method :get
                              :url url
                              :on-complete
                              (fn [res]
                                (om/set-state! owner :data res))})))]
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
         (dom/canvas #js {:width (str canvas-width) :height (str canvas-height)}))
       
       om/IDidMount
       (did-mount [_] (draw-my-chart))
       
       om/IDidUpdate
       (did-update [_ _ _] (draw-my-chart))))))

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
            (dom/tr nil
                    (dom/td nil
                            (dom/a #js {:href "#" :onClick (partial goto-endpoint endpoint)}
                                   endpoint))
                    (dom/td #js {:className "num-col"}
                            (str (round-fn value) unit))))]
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
        (dom/table
         #js {:className "table table-hover table-striped table-condensed"}
         (apply dom/tbody nil
                (map render-row (om/get-state owner :data))))))))

(defn application-endpoint-overview [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "AppEndpointOverview")

    om/IRender
    (render [_]
      (dom/div #js {:className "app-endpoint-overview"}
               (with-grid-row
                 (with-grid-col 12
                   (dom/h2 nil "Application Endpoint Overview")))

               (with-grid-row
                 (with-grid-col 4
                   (dom/h3 nil "Time per request")
                   (om/build chart-component app
                             {:opts {:data-url (app-endpoint-chart-url (:current-app app)
                                                                       (:current-endpoint app)
                                                                       :ms-per-req)}}))

                 (with-grid-col 4
                   (dom/h3 nil "Requests per minute")
                   (om/build chart-component app
                             {:opts {:data-url (app-endpoint-chart-url (:current-app app)
                                                                       (:current-endpoint app)
                                                                       :reqs-per-min)}}))

                 (with-grid-col 4
                   (dom/h3 nil "Errors per request")
                   (om/build chart-component app
                             {:opts {:data-url (app-endpoint-chart-url (:current-app app)
                                                                       (:current-endpoint app)
                                                                       :reqs-per-min)}})))))))

(defn application-dashboard [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "AppDashboard")

    om/IRender
    (render [_]
      (dom/div #js {:className "app-dashboard"}
               (with-grid-row
                 (with-grid-col 12
                   (dom/h2 nil "Application Overview")))
               
               (with-grid-row
                 (with-grid-col 4
                   (dom/h3 nil "Time per request")
                   (om/build chart-component app {:opts {:data-url (app-chart-url (:current-app app)
                                                                                  :ms-per-req)}}))

                 (with-grid-col 4
                   (dom/h3 nil "Requests per minute")
                   (om/build chart-component app {:opts {:data-url (app-chart-url (:current-app app)
                                                                                  :reqs-per-min)}}))

                 (with-grid-col 4
                   (dom/h3 nil "Errors per request")
                   (om/build chart-component app {:opts {:data-url (app-chart-url (:current-app app)
                                                                                  :errs-per-req)}})))

               (with-grid-row
                 (with-grid-col 4
                   (dom/h3 nil "Slowest endpoints")
                   (om/build agg-table-component app {:opts {:agg-type :ms-per-req
                                                             :round-fn (partial util/round-to 2)
                                                             :unit " ms"}}))

                 (with-grid-col 4
                   (dom/h3 nil "Most requested endpoints")
                   (om/build agg-table-component app {:opts {:agg-type :reqs-per-min
                                                             :round-fn (partial util/round-to 2)
                                                             :unit " rpm"}}))

                 (with-grid-col 4
                   (dom/h3 nil "Endpoints taking most time")
                   (om/build agg-table-component app {:opts {:agg-type :total-time
                                                             :round-fn (partial util/round-to 2)
                                                             :unit " ms"}})))))))

(defn all-apps [app owner]
  (letfn [(app-link-clicked [e row]
            (.preventDefault e)
            (routes/navigate-to routes/app-dashboard {:id (:name row)}))
          (render-row [row]
            (dom/tr nil
                    (dom/td nil
                            (dom/a #js {:href "#"
                                        :onClick #(app-link-clicked % row)}
                                   (:display-name row)))))]
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
        (let [rows (map render-row (om/get-state owner :applications))]
          (with-grid-row
            (with-grid-col 8
              (dom/table #js {:className "table table-hover table-striped"}
                         (dom/thead nil
                                    (dom/tr nil
                                            (dom/th nil "Application")))
                         (apply dom/tbody nil rows)))))))))

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
                  (dom/li (if is-active #js {:className "active"} nil)
                          (if is-active
                            title
                            (dom/a #js {:href "#" :onClick (partial goto-location url)} title)))))]
          (apply dom/ol #js {:className "breadcrumb"}
                 (map-indexed make-location-elem location-list)))))))

(defn render-timeslice-nav [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "TimesliceNav")

    om/IRender
    (render [_]
      (if (:tracking-now app)
        (dom/span nil
                  "Last " (gduration/format (* 1000 (:window-size app))) " "
                  (dom/b #js {:className "caret"}))
        (dom/span nil
                  (util/timeslice->str app)
                  (dom/b #js {:className "caret"}))))))

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
        (dom/form
         #js {:className "form-horizontal" :role "form"}
         (dom/div
          #js {:className "form-group"}
          (dom/label #js {:className "col-sm-3 control-label"} "From")
          (dom/div
           #js {:className "col-sm-5"}
           (dom/input #js {:type "date" :className "form-control"
                           :value (om/get-state owner :from-date-str)
                           :onChange (partial handle-change :from-date-str)}))
          (dom/div
           #js {:className "col-sm-3"}
           (dom/input #js {:type "time" :className "form-control"
                           :value (om/get-state owner :from-time-str)
                           :onChange (partial handle-change :from-time-str)})))
         (dom/div
          #js {:className "form-group"}
          (dom/label #js {:className "col-sm-3 control-label"} "To")
          (dom/div
           #js {:className "col-sm-5"}
           (dom/input #js {:type "date" :className "form-control"
                           :value (om/get-state owner :to-date-str)
                           :onChange (partial handle-change :to-date-str)}))
          (dom/div
           #js {:className "col-sm-3"}
           (dom/input #js {:type "time" :className "form-control"
                           :value (om/get-state owner :to-time-str)
                           :onChange (partial handle-change :to-time-str)}))))))))

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
        (dom/form
         #js {:className "form-horizontal" :role "form"}
         (dom/div
          #js {:className "form-group"}
          (dom/label #js {:className "col-sm-3 control-label"} "Show last")
          (dom/div
           #js {:className "col-sm-5"}
           (apply dom/select
                  #js {:className "form-control"
                       :onChange update-window-size
                       :value (if (:tracking-now app) (:window-size app) -1)}
                  (dom/option #js {:disabled true :value -1} "(choose one)")
                  (map #(dom/option #js {:value %1}
                                    (gduration/format (* 1000 %1)))
                       choices)))))))))

(defn render-debug [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "StateDebug")

    om/IRender
    (render [_]
      (dom/pre nil (pr-str app)))))

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
