(ns tamarack.util
  (:require [clojure.string :as string]))

(defn elem-content-size [elem]
  (let [style (.getComputedStyle js/window elem nil)
        pl (or (js/parseInt (.getPropertyValue style "padding-left") 10) 0)
        pr (or (js/parseInt (.getPropertyValue style "padding-right") 10) 0)
        pt (or (js/parseInt (.getPropertyValue style "padding-top") 10) 0)
        pb (or (js/parseInt (.getPropertyValue style "padding-bottom") 10) 0)
        cw (.-clientWidth elem)
        ch (.-clientHeight elem)]
    [(- cw pl pr)
     (- ch pt pb)]))

(defn minutes-between [from to]
  (loop [now from
         minutes []]
    (if (> (.getTime now) (.getTime to))
      minutes
      (recur (js/Date. (+ 60000 (.getTime now)))
             (conj minutes (.getTime now))))))

(defn trunc-to-minute [d]
  (js/Date. (* (.round js/Math (/ (.getTime d) 60000)) 60000)))

(defn subtract-seconds [d s]
  (js/Date. (- (.getTime d) (* s 1000))))

(defn element-by-id [id]
  (.getElementById js/document id))

(defn log [o]
  (.log js/console (pr-str o)))

(defn rpad [n c v]
  (let [s (str v)
        missing (- n (count s))]
    (if (> missing 0)
      (str (string/join (map (fn [_] c) (range missing)))
           s)
      s)))

(defn inst->local-date-str [d]
  (string/join "-"
               [(rpad 4 "0" (.getFullYear d))
                (rpad 2 "0" (+ 1 (.getMonth d)))
                (rpad 2 "0" (.getDate d))]))

(defn inst->local-time-str [d]
  (string/join ":"
               [(rpad 2 "0" (.getHours d))
                (rpad 2 "0" (.getMinutes d))]))

(defn inst->iso [d]
  (let [iso-format (.toISOString d)
        dot-pos (.indexOf iso-format ".")
        part (.substr iso-format 0 dot-pos)]
    (str part "Z")))

(defn parse-date-time [date-str time-str]
  (let [[y mo d] (map #(js/parseInt % 10) (string/split date-str "-"))
        [h mi] (map #(js/parseInt % 10) (string/split time-str ":"))]
    (js/Date. y (- mo 1) d h mi)))

(def SHORT-MONTH-NAMES ["Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dec"])

(defn timeslice->str [{[from to] :window}]
  (let [same-year (= (.getFullYear from) (.getFullYear to))
        same-month (= (.getMonth from) (.getMonth to))
        same-day (= (.getDate from) (.getDate to))
        same-date (and same-year same-month same-day)]
    (if same-date
      (str (inst->local-date-str from) " " (inst->local-time-str from) "–"
           (inst->local-time-str to))
      (str (inst->local-date-str from) " " (inst->local-time-str from) "–"
           (inst->local-date-str to) " " (inst->local-time-str to)))))

(defn round-to [places n]
  (let [m (.pow js/Math 10 places)]
    (/ (.round js/Math (* n m)) m)))
