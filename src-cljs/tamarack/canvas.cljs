(ns tamarack.canvas
  (:require-macros [tamarack.canvas :refer [with-canvas]]))

(def ^:dynamic *ctx* nil)

(defn move-to [x y] (.moveTo *ctx* x y))
(defn line-to [x y] (.lineTo *ctx* x y))

(defn fill-text [text x y] (.fillText *ctx* text x y))

(defn stroke [] (.stroke *ctx*))
(defn fill [] (.fill *ctx*))
