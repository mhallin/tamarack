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
                      {:view :app-dashboard :current-app {:name id}}))

(defroute app-endpoint-overview "/applications/:id/:endpoint" [id endpoint query-params]
  (merge-query-params query-params
                      {:view :app-endpoint-overview
                       :current-app {:name id}
                       :current-endpoint endpoint}))

(defn timeslice-query-params []
  (let [timeslice (-> @state/app-state :timeslice)
        [from to] (:window timeslice)]
    (if (:tracking-now timeslice)
      {:last (:window-size timeslice) :tracking-now true}
      {:from (.toISOString from) :to (.toISOString to) :tracking-now false})))

(defn remove-default-query-params [params]
  (letfn [(remove-tracking-now [params]
            (if (:tracking-now params)
              (dissoc params :tracking-now)
              params))
          (remove-window-size [params]
            (if (= state/default-tracking-now-window-size (:last params))
              (dissoc params :last)
              params))
          (remove-conflicting [params]
            (if (nil? (:tracking-now params))
              (dissoc params :from :to)
              (dissoc params :last)))]
    ((comp remove-conflicting remove-tracking-now remove-window-size)
     params)))

(defn remove-route-defaults [route]
  (update-in route [:query-params] remove-default-query-params))

(defn cleanup-query-params [route]
  (if (-> route :query-params empty?)
    (dissoc route :query-params)
    route))

(defn url-of
  ([route arg]
     (->> arg
          (merge {:query-params (timeslice-query-params)})
          remove-route-defaults
          cleanup-query-params
          route))
  ([route]
     (url-of route {})))

(defn navigate-to
  ([route arg]
     (let [url (url-of route arg)]
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
        new-query-params (remove-default-query-params
                          (merge query-params (timeslice-query-params)))
        new-query-string (secretary/encode-query-params new-query-params)
        token (if (empty? new-query-string)
                path
                (string/join "?" [path new-query-string]))]
    (.setToken history/history token)))
