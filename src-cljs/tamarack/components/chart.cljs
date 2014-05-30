(ns tamarack.components.chart
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [tamarack.canvas :as canvas :include-macros true]
            [tamarack.chart :as chart]
            [tamarack.util :as util]
            [tamarack.xhr :as xhr]))

(defn- draw-my-chart [app owner]
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

(defn- fetch-data [app owner data-url]
  (let [[from to] (-> app :timeslice :window)
        url (str data-url
                 "?from=" (util/inst->iso from)
                 "&to=" (util/inst->iso to))]
    (xhr/send-edn {:method :get
                   :url url
                   :on-complete
                   (fn [res]
                     (om/set-state! owner :data res))})))

(defn- refresh-canvas-size [owner]
  (let [canvas (.getDOMNode owner)
        parent (.-parentNode canvas)
        [elem-width _] (util/elem-content-size parent)
        elem-height (* elem-width 0.6)
        scale-factor (or (.-devicePixelRatio js/window) 1)]
    (.setAttribute canvas "style"
                   (str "width: " elem-width "px; "
                        "height: " elem-height "px; "))
    (.setAttribute canvas "width" (* scale-factor elem-width))
    (.setAttribute canvas "height" (* scale-factor elem-height))))

(defn component [app owner {:keys [data-url] :as opts}]
  (reify
    om/IDisplayName
    (display-name [_] "Chart")

    om/IWillMount
    (will-mount [_]
      (fetch-data app owner data-url))

    om/IWillUpdate
    (will-update [_ next-props next-state]
      (when-not (= (:timeslice next-props) (:timeslice app))
        (fetch-data next-props owner data-url)))
    
    om/IRender
    (render [_]
      (html [:canvas]))
    
    om/IDidMount
    (did-mount [_]
      (refresh-canvas-size owner)
      (draw-my-chart app owner))
    
    om/IDidUpdate
    (did-update [_ _ _]
      (draw-my-chart app owner))))
