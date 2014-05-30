(ns tamarack.components.timeslice
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [goog.date.duration :as gduration]
            [tamarack.util :as util]
            [tamarack.state :as state]
            [tamarack.routes :as routes]))

(defn nav-label [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "TimesliceNav")

    om/IRender
    (render [_]
      (html
       (if (:tracking-now app)
         [:span
          "Last " (gduration/format (* 1000 (:window-size app))) " "
          [:b.caret]]
         [:span
          (util/timeslice->str app)
          [:b.caret]])))))

(defn edit-date-range [app owner]
  (letfn [(refresh-timeslice []
            (let [new-from (util/parse-date-time (om/get-state owner :from-date-str)
                                                 (om/get-state owner :from-time-str))
                  new-to (util/parse-date-time (om/get-state owner :to-date-str)
                                               (om/get-state owner :to-time-str))]
              (om/update! app :tracking-now false)
              (om/transact! app :window
                            (fn [[old-from old-to]]
                              [(or new-from old-from)
                               (or new-to old-to)]))))

          (handle-change [key e]
            (om/set-state! owner key (-> e .-target .-value))
            (refresh-timeslice)
            (routes/refresh-timeslice))]
    (reify
      om/IInitState
      (init-state [_]
        (let [{[from to] :window} app]
          {:from-date-str (util/inst->local-date-str from)
           :from-time-str (util/inst->local-time-str from)
           :to-date-str (util/inst->local-date-str to)
           :to-time-str (util/inst->local-time-str to)}))

      om/IDisplayName
      (display-name [_] "TimesliceTab")

      om/IRender
      (render [_]
        (html
         [:form.form-horizontal {:role "form"}

          [:div.form-group
           [:label.col-sm-3.control-label "From"]
           [:div.col-sm-5
            [:input.form-control {:type "date"
                                  :value (om/get-state owner :from-date-str)
                                  :onChange (partial handle-change :from-date-str)}]]
           [:div.col-sm-3
            [:input.form-control {:type "time"
                                  :value (om/get-state owner :from-time-str)
                                  :onChange (partial handle-change :from-time-str)}]]]

          [:div.form-group
           [:label.col-sm-3.control-label "To"]
           [:div.col-sm-5
            [:input.form-control {:type "date"
                                  :value (om/get-state owner :to-date-str)
                                  :onChange (partial handle-change :from-date-str)}]]
           [:div.col-sm-3
            [:input.form-control {:type "time"
                                  :value (om/get-state owner :to-time-str)
                                  :onChange (partial handle-change :from-time-str)}]]]])))))

(defn edit-tracking-now-duration [app owner]
  (let [choices (map (partial * 60)
                     [30 60 120 180 300 720 1440 2880 7200])

        update-window-size
        (fn [e]
          (state/track-now! app (-> e .-target .-value int))
          (routes/refresh-timeslice))]
    (reify
      om/IDisplayName
      (display-name [_] "TimeWindowSizeTab")

      om/IRender
      (render [_]
        (html
         [:form.form-horizontal {:role "form"}
          [:div.form-group
           [:label.col-sm-3.control-label "Show last"]
           [:div.col-sm-5
            [:select.form-control
             {:onChange update-window-size
              :value (if (:tracking-now app) (:window-size app) -1)}
             [:option {:disabled true :value -1} "(choose one)"]
             (map (fn [v] [:option {:value v :key v} (gduration/format (* 1000 v))])
                  choices)]]]])))))
