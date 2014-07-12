(ns tamarack.state
  (:require [om.core :as om :include-macros true]
            [clojure.string :as string]
            [tamarack.util :as util]
            [tamarack.xhr :as xhr]))

(def app-state (atom nil))

(def default-tracking-now-window-size (* 60 30))

(defn timeslice-ending-now [window-size]
  (let [now (util/subtract-seconds (js/Date.) (* 2 60))]
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
  (let [new-app (:current-app state)
        known-apps (:all-apps @app-state)
        known-app (if (and known-apps new-app)
                    ((:all-apps @app-state) (:name new-app))
                    new-app)
        state' (assoc state :current-app known-app)]
    (when (and new-app (nil? (:display-name known-app)))
      (let [url (string/join "/" [ "/explorer-api/v1/applications"
                                   (:name known-app) ])]
        (xhr/send-edn {:method :get
                       :url url
                       :on-complete
                       (fn [res]
                         (swap! app-state merge {:current-app res}))})))
    (swap! app-state merge state')))

(defn init-state []
  (let [window (timeslice-ending-now default-tracking-now-window-size)
        window-size default-tracking-now-window-size]
    (reset! app-state {:timeslice {:window window
                                   :window-size window-size
                                   :tracking-now true}})))
