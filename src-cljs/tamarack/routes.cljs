(ns tamarack.routes
  (:require [clojure.string :as string]
            [secretary.core :as secretary :include-macros true :refer [defroute]]
            [tamarack.history :as history]
            [tamarack.state :as state])
  (:import goog.History))

(secretary/set-config! :prefix "#")

(defn merge-query-params [query-params state]
  (cond (= (:tracking-now query-params) "false")
        (let [from (-> query-params :from js/Date.)
              to (-> query-params :to js/Date.)
              timeslice {:window [from to]
                         :tracking-now false}]
          (merge {:timeslice timeslice} state))

        (= (:tracking-now query-params) "true")
        (let [window-size (js/parseInt (:last query-params) 10)
              window (state/timeslice-ending-now window-size)
              timeslice {:window window
                         :window-size window-size
                         :tracking-now true}]
          (merge {:timeslice timeslice} state))

        :else
        state))

(defroute all-apps "/" [query-params]
  (merge-query-params query-params
                      {:view :all-apps :current-app nil}))

(defroute app-dashboard "/applications/:id" [id query-params]
  (merge-query-params query-params
                      {:view :app-dashboard :current-app {:app-id (UUID. id)}}))

(defn timeslice-query-params []
  (let [timeslice (-> @state/app-state :timeslice)
        [from to] (:window timeslice)]
    (if (:tracking-now timeslice)
      {:last (:window-size timeslice) :tracking-now true}
      {:from (.toISOString from) :to (.toISOString to) :tracking-now false})))

(defn navigate-to
  ([route arg]
     (let [url (route (merge {:query-params (timeslice-query-params)} arg))]
       (.setToken history/history (subs url 1))))
  ([route]
     (navigate-to route {})))

(defn refresh-timeslice []
  (let [token (.getToken history/history)
        qpos (.indexOf token "?")
        [path query-string] (if (= qpos -1)
                              [token ""]
                              [(subs token 0 qpos) (subs token (+ qpos 1))])
        query-params (secretary/decode-query-params query-string)
        new-query-params (merge query-params (timeslice-query-params))
        new-query-string (secretary/encode-query-params new-query-params)
        token (string/join "?" [path new-query-string])]
    (.setToken history/history token)))
