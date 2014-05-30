(ns tamarack.components.agg-table
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as string]
            [tamarack.util :as util]
            [tamarack.xhr :as xhr]
            [tamarack.routes :as routes]))

(defn component [app owner {:keys [agg-type round-fn unit] :as opts}]
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
