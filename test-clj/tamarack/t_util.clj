(ns tamarack.t-util
  (:require [tamarack.util :refer [key->keyword
                                   external-json->internal-json
                                   db->clj
                                   db->sensor-data]])
  (:use midje.sweet))


(fact "key->keyword should create nice Clojure keywords from strings"
      (key->keyword "key") => :key
      (key->keyword "full_name") => :full-name
      (key->keyword "full-name") => :full-name)

(fact "internal JSON data should have its map keys converted to keywords"
      (external-json->internal-json {"full_name" "test"}) => {:full-name "test"})

(fact "database column names in a map should be converted to keywords"
      (db->clj {:full_name "test"}) => {:full-name "test"})

(fact "sensor reading values should be converted to integers"
      (db->sensor-data {:sql "123"}) => {:sql 123})
