(ns tamarack.history
  (:require [goog.events :as events])
  (:import goog.History
           goog.history.EventType))

(def history (History.))
