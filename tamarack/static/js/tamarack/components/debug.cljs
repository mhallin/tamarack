(ns tamarack.components.debug
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]))

(defn component [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "StateDebug")

    om/IRender
    (render [_]
      (html [:pre (pr-str app)]))))
