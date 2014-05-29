(ns tamarack.util
  (:require [clj-json.core :as json]
            [clojure.string :as string]
            [clojure.walk :as walk]
            [clojure.set :as set]))

(defn key->keyword [str]
  (keyword (string/replace str "_" "-")))

(defn external-json->internal-json [x]
  (cond (map? x)
        (into {} (for [[k v] x]
                   [(key->keyword k) (external-json->internal-json v)]))

        (vector? x)
        (mapv external-json->internal-json x)

        :else
        x))

(defn str->json [str]
  (external-json->internal-json (json/parse-string str)))

(defn json->str [data]
  (json/generate-string data))

(defn db->clj [x]
  (cond (or (map? x) (instance? java.util.HashMap x))
        (into {} (for [[k v] (walk/stringify-keys x)]
                   [(key->keyword k) (db->clj v)]))

        (vector? x)
        (mapv db->clj x)

        (seq? x)
        (map db->clj x)

        :else
        x))

(defn db->sensor-data [x]
  (cond (or (map? x) (instance? java.util.HashMap x))
        (into {} (for [[k v] x] [k (java.lang.Integer/parseInt v)]))

        (vector? x)
        (mapv db->sensor-data x)

        (seq? x)
        (map db->sensor-data x)

        :else
        x))
