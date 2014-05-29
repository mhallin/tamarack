(ns tamarack.chart
  (:require [tamarack.util :as util]
            [tamarack.canvas :as canvas :include-macros true]
            [goog.string :as gs]
            [goog.string.format :as gformat]))

(def MAIN-FONT "\"Source Sans Pro\",\"Helvetica Neue\",Helvetica,Arial,sans-serif")

(defn draw-data [ctx canvas-width canvas-height data from to]
  (let [margin-left 40
        margin-right 30
        margin-top 20
        margin-bottom 20
        width (- canvas-width margin-left margin-right)
        height (- canvas-height margin-top margin-bottom)

        minutes (util/minutes-between from to)
        max-data (apply max 0 (map (fn [[_ v]] v) data))
        total-minutes (- (count minutes) 1)
        step-width (/ width total-minutes)
        step-height (if (zero? max-data) 0 (/ height max-data))

        y-ticks 5]
    (canvas/with-props {:fill "#fff"}
      (.fillRect ctx 0 0 canvas-width canvas-height))

    (canvas/with-translate margin-left margin-top
      (canvas/with-props {:begin-path true
                          :stroke "rgb(187, 187, 187)"
                          :fill "rgb(117, 117, 117)"
                          :line-width 0.5
                          :line-dash #js [2 2]
                          :font (str "10px " MAIN-FONT)}
        (dotimes [tick-idx (if (zero? step-height) 1 y-ticks)]
          (let [tick-val (* tick-idx (/ max-data (- y-ticks 1)))
                tick-y (.round js/Math (- height (* tick-val step-height)))
                tick-val-round (gs/format "%.2f" tick-val)
                text-measure (.measureText ctx tick-val-round)
                text-width (aget text-measure "width")
                text-x (- 0 text-width 8)
                text-y (+ tick-y 3)]
            (canvas/move-to 0.5 (+ 0.5 tick-y))
            (canvas/line-to (+ 0.5 width) (+ 0.5 tick-y))
            (canvas/fill-text tick-val-round text-x text-y)))
        (canvas/stroke))

      (canvas/with-props {:begin-path true
                          :fill "rgba(46, 198, 255, 0.850)"}
        (canvas/move-to 0 height)

        (letfn [(draw-single-point [i t]
                  (when data
                    (canvas/line-to (* i step-width)
                                    (- height (* (data t) step-height)))))]
          (doall (map-indexed draw-single-point minutes)))

        (canvas/line-to width height)
        (canvas/fill)))))

