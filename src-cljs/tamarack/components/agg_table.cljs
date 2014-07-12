(ns tamarack.components.agg-table
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as string]
            [tamarack.util :as util]
            [tamarack.xhr :as xhr]
            [tamarack.routes :as routes]))

(defn- fetch-data [app owner agg-type]
  (let [[from to] (-> app :timeslice :window)
        url (str (string/join "/"
                              [ "/explorer-api/v1/applications"
                                (-> app :current-app :name)
                                "aggregate"
                                (subs (str agg-type) 1)])
                 "?from=" (util/inst->iso from)
                 "&to=" (util/inst->iso to))]
    (xhr/send-edn {:method :get
                   :url url
                   :on-complete
                   (fn [res]
                     (om/set-state! owner :data res))})))

(defn- endpoint-url [app endpoint]
  (routes/url-of routes/app-endpoint-overview
                 {:id (-> app :current-app :name) :endpoint endpoint}))

(defn- goto-endpoint [app endpoint e]
  (.preventDefault e)
  (routes/navigate-to routes/app-endpoint-overview
                      {:id (-> @app :current-app :name) :endpoint endpoint}))

(defn- render-row [app round-fn unit [endpoint value]]
  (html
   [:tr {:key endpoint}
    [:td [:a
          {:href (endpoint-url app endpoint)
           :onClick (partial goto-endpoint app endpoint)}
          endpoint]]
    [:td.num-col (str (round-fn value) unit)]]))

(defn component [app owner {:keys [agg-type round-fn unit] :as opts}]
  (reify
    om/IDisplayName
    (display-name [_] "AggregateTable")

    om/IWillMount
    (will-mount [_]
      (fetch-data app owner agg-type))

    om/IWillUpdate
    (will-update [_ next-props next-state]
      (when-not (= (:timeslice next-props) (:timeslice app))
        (fetch-data next-props owner agg-type)))

    om/IRender
    (render [_]
      (html
       [:table.table.table-hover.table-striped.table-condensed
        [:tbody (map (partial render-row app round-fn unit)
                     (om/get-state owner :data))]]))))
