(ns tamarack.state
  (:require [om.core :as om :include-macros true]
            [tamarack.util :as util]))

(def app-state (atom nil))

(def default-tracking-now-window-size (* 60 30))

(defn timeslice-ending-now [window-size]
  (let [now (util/subtract-seconds (js/Date.) (* 5 60))]
    [(util/trunc-to-minute (util/subtract-seconds now window-size))
     (util/trunc-to-minute now)]))

(defn update-timeslice [app]
  (when (:tracking-now @app)
    (om/update! app :window (timeslice-ending-now (:window-size @app)))))

(defn track-now! [app window-size]
  (om/update! app :window-size window-size)
  (om/update! app :tracking-now true)
  (update-timeslice app))

(defn merge-state! [state]
  (swap! app-state merge state))

(defn init-state []
  (let [window (timeslice-ending-now default-tracking-now-window-size)
        window-size default-tracking-now-window-size]
    (reset! app-state {:timeslice {:window window
                                   :window-size window-size
                                   :tracking-now true}})))
