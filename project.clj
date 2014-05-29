(defproject tamarack "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2227"]
                 [org.clojure/core.async "0.1.298.0-2a82a1-alpha"]
                 [om "0.6.3"]
                 [compojure "1.1.8"]
                 [clj-json "0.5.3"]
                 [clj-time "0.7.0"]
                 [secretary "1.1.1"]
                 [org.mortbay.jetty/jetty "6.1.26"]
                 [korma "0.3.0-RC5"]
                 [org.postgresql/postgresql "9.2-1002-jdbc4"]
                 [ragtime "0.3.7"]
                 [sablono "0.2.17"]]

  :plugins [[lein-ring "0.8.10"]
            [lein-cljsbuild "1.0.3"]
            [lein-ancient "0.5.5"]
            [ragtime/ragtime.lein "0.3.7"]]

  :source-paths ["src-clj" "src-cljs"]

  :ring {:handler tamarack.handler/app
         :init tamarack.handler/init}

  :ragtime {:migrations ragtime.sql.files/migrations
            :database "jdbc:postgresql://localhost/tamarack"}

  :cljsbuild
  {:builds [{:id "tamarack"
             :source-paths ["src-cljs"]
             :compiler {:output-to "resources/public/static/js/tamarack-main.js"
                        :output-dir "resources/public/static/js"
                        :optimizations :none
                        :source-map true}}
            {:id "tamarack-release"
             :source-paths ["src-cljs"]
             :compiler {:output-to "resources/public/static/js-min/tamarack-main.js"
                        :output-dir "resources/public/static/js-min"
                        :optimizations :advanced
                        :pretty-print false
                        :preamble ["react/react.min.js"]
                        :externs ["react/externs/react.js"]}}]}

  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring-mock "0.1.5"]
                        [ring-serve "0.1.2"]
                        [midje "1.6.3"]]
         :plugins [[lein-midje "3.1.1"]]}
   :uberjar {:aot :all}})
