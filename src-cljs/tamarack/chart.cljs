(ns tamarack.chart
  (:require [tamarack.util :as util]
            [tamarack.canvas :as canvas :include-macros true]
            [clojure.string :as string]
            [goog.string :as gs]
            [goog.string.format :as gformat]))

(def MAIN-FONT "\"Source Sans Pro\",\"Helvetica Neue\",Helvetica,Arial,sans-serif")

(defn- all-keys-in-data [data]
  (sort (set (mapcat keys (vals data)))))

(def key-colors
  ["rgba(46, 198, 255, 0.850)"
   "rgba(112, 191, 64, 0.850)"
   "rgba(255, 170, 65, 0.850)"
   "rgba(252, 89, 55, 0.900)"
   "rgba(88, 98, 195, 0.850)"])

(def key-names
  {:sql "SQL"
   :template-render "Template"
   :request-count "Requests"
   :error-count "Errors"})

(defn readable-keyword [key]
  (let [name (subs (str key) 1)
        words (string/split name "-")
        cap-words (map string/capitalize words)]
    (string/join " " cap-words)))

(defn key->str [key]
  (or (key-names key)
      (readable-keyword key)))

(defn make-base-levels [key-order data]
  (letfn [(incremental-sum [sensor-data]
            (first (reduce (fn [[acc sum] [key val]]
                             [(assoc acc key sum)
                              (+ sum val)])
                           [{} 0]
                           (map (fn [key] [key (sensor-data key)]) key-order))))]
    (zipmap (keys data)
            (map incremental-sum (vals data)))))

(defn draw-data [ctx canvas-width canvas-height data from to]
  (let [margin-left 40
        margin-right 30
        margin-top 20
        margin-bottom 40
        width (- canvas-width margin-left margin-right)
        height (- canvas-height margin-top margin-bottom)
        all-keys (all-keys-in-data data)

        minutes (util/minutes-between from to)
        base-levels (make-base-levels all-keys data)
        max-data (apply max 0 (map (fn [[_ v]] (reduce + 0 (vals v))) data))
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

      (letfn [(draw-single-point [key i t]
                (let [x (* i step-width)
                      y (- height (* (+ (key (base-levels t)) (key (data t))) step-height))]
                  [x y]))
              (draw-inverse-point [key i t]
                (let [x (* (- (count minutes) i 1) step-width)
                      y (- height (* (key (base-levels t)) step-height))]
                  [x y]))]
        (doseq [[key color] (map vector all-keys (cycle key-colors))]
          (let [polygon {:fill color
                         :points (concat (map-indexed (partial draw-single-point key) minutes)
                                         (map-indexed (partial draw-inverse-point key) (reverse minutes)))}]
            (canvas/draw-polygon polygon))))

      (doseq [[key color index] (map vector all-keys
                                     (cycle key-colors)
                                     (range))]
        (let [x (- (* index 61) (/ margin-left 2))
              y (+ height 15)]
          (canvas/with-props {:begin-path true :fill color}
            (canvas/rect x y 12 12)
            (canvas/fill))
          (canvas/with-props {:begin-path true
                              :fill "rgb(117, 117, 117)"
                              :font (str "10px " MAIN-FONT)}
            (canvas/fill-text (key->str key)
                              (+ x 16)
                              (+ y 10))))))))

