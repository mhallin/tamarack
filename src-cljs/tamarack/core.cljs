(ns tamarack.core
  (:require [tamarack.state :as state]
            [tamarack.view :as view]
            [tamarack.routes :as routes]
            [tamarack.util :as util]
            [tamarack.history :as history]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [goog.events :as events])
  (:import goog.History
           goog.history.EventType))

(enable-console-print!)

(defn- on-navigate [e]
  (-> e .-token secretary/dispatch! state/merge-state!))

(defn init-history []
  (goog.events/listen history/history EventType/NAVIGATE on-navigate)
  (.setEnabled history/history true))

(defn ^:export main []
  (state/init-state)

  (.on (js/jQuery "#date-dropdown") "click" #(.stopPropagation %))

  (letfn [(tab-clicked [e]
            (.preventDefault e)
            (.tab (js/jQuery (.-target e)) "show"))]
    (.on (js/jQuery "#date-dropdown .nav a") "click" tab-clicked))

  (init-history)

  (view/render-all))
