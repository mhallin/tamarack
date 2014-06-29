(defproject tamarack "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2234"]
                 [om "0.6.4"]
                 [secretary "1.2.0"]
                 [sablono "0.2.17"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src-cljs"]

  :cljsbuild
  {:builds [{:id "tamarack"
             :source-paths ["src-cljs"]
             :compiler {:output-to "resources/public/static/js/tamarack-main.js"
                        :output-dir "resources/public/static/js"
                        :optimizations :none
                        :source-map true
                        :pretty-print true}}
            {:id "tamarack-release"
             :source-paths ["src-cljs"]
             :compiler {:output-to "resources/public/static/js-min/tamarack-main.js"
                        :output-dir "resources/public/static/js-min"
                        :optimizations :advanced
                        :pretty-print false
                        :preamble ["react/react.min.js"]
                        :externs ["react/externs/react.js"]}}
            {:id "tamarack-tests"
             :source-paths ["src-cljs" "test-cljs"]
             :compiler {:output-to "target/out/tamarack-tests.js"
                        :output-dir "target/out"
                        :optimizations :whitespace
                        :pretty-print true
                        :preamble ["react/react.min.js"]}}]}

  :profiles
  {:dev {:dependencies [[im.chit/purnam.test "0.4.3"]]}
   :uberjar {:aot :all}})
