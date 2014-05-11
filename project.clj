(defproject tamarack "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2202"]
                 [org.clojure/core.async "0.1.298.0-2a82a1-alpha"]
                 [om "0.6.2"]
                 [compojure "1.1.6"]
                 [clj-json "0.5.3"]
                 [clj-time "0.7.0"]
                 [cc.qbits/alia "2.0.0-rc1"]
                 [cc.qbits/hayt "2.0.0-beta4"]
                 [org.slf4j/slf4j-simple "1.7.7"]
                 [net.jpountz.lz4/lz4 "1.2.0"]
                 [org.xerial.snappy/snappy-java "1.1.1-M1"]
                 [com.cemerick/piggieback "0.1.3"]
                 [secretary "1.1.0"]
                 [org.mortbay.jetty/jetty "6.1.26"]]

  :plugins [[lein-ring "0.8.10"]
            [lein-cljsbuild "1.0.3"]]

  :source-paths ["src-clj" "src-cljs"]

  :ring {:handler tamarack.handler/app
         :init tamarack.handler/init}

  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

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
                        [ring-serve "0.1.2"]]}
   :uberjar {:aot :all}})
