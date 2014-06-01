(ns tamarack.t-util
  (:require [tamarack.util :refer [round-to
                                   inst->iso
                                   rpad
                                   trunc-to-minute
                                   minutes-between]]
            [purnam.test :refer-macros [fact]]))

(fact "minutes-between should return all minute timestamps between to dates, inclusive"
      (minutes-between #inst "2014-06-01T12:13:00.000-00:00"
                       #inst "2014-06-01T12:18:00.000-00:00")
      => [(.getTime #inst "2014-06-01T12:13:00.000-00:00")
          (.getTime #inst "2014-06-01T12:14:00.000-00:00")
          (.getTime #inst "2014-06-01T12:15:00.000-00:00")
          (.getTime #inst "2014-06-01T12:16:00.000-00:00")
          (.getTime #inst "2014-06-01T12:17:00.000-00:00")
          (.getTime #inst "2014-06-01T12:18:00.000-00:00")])

(fact "trunc-to-minute should truncate a date to the previous minute"
      (trunc-to-minute #inst "2014-06-01T12:13:15.123-00:00")
      => #inst "2014-06-01T12:13:00.000-00:00")

(fact "rpad should right-pad a string to a given length"
      (rpad 5 " " "123") => "  123"
      (rpad 3 "0" "2") => "002")

(fact "inst->iso should take a date and return a UTC ISO string from it"
      (inst->iso #inst "2014-06-01T12:13:00.000-00:00")
      => "2014-06-01T12:13:00Z")

(fact "round-to should round to a number of decimal places"
      (round-to 2 0.12345) => 0.12
      (round-to 2 120) => 120)
