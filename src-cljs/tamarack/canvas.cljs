(ns tamarack.canvas
  (:require-macros [tamarack.canvas :refer [with-props]]))

(def ^:dynamic *ctx* nil)

(defn move-to [x y] (.moveTo *ctx* x y))
(defn line-to [x y] (.lineTo *ctx* x y))

(defn rect [x y w h] (.rect *ctx* x y w h))

(defn fill-text [text x y] (.fillText *ctx* text x y))

(defn stroke [] (.stroke *ctx*))
(defn fill [] (.fill *ctx*))

(defn draw-polygon [{:keys [fill points]}]
  (letfn [(draw-point [i [x y]]
            (if (= i 0)
              (move-to x y)
              (line-to x y)))]
    (with-props {:fill fill :begin-path true}
      (doall (map-indexed draw-point points))
      (when fill (tamarack.canvas/fill)))))
