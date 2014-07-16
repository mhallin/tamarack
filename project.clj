(defproject tamarack "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2268"]
                 [om "0.6.5"]
                 [secretary "1.2.0"]
                 [sablono "0.2.18"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src-cljs"]

  :cljsbuild
  {:builds [{:id "tamarack"
             :source-paths ["src-cljs"]
             :compiler {:output-to "tamarack/static/js-out/tamarack-main.js"
                        :output-dir "tamarack/static/js-out"
                        :optimizations :none
                        :source-map true
                        :pretty-print true}}
            {:id "tamarack-release"
             :source-paths ["src-cljs"]
             :compiler {:output-to "tamarack/static/js-out/tamarack-main.min.js"
                        :optimizations :simple
                        :pretty-print false
                        :externs ["node_modules/react-externs/externs.js"
                                  "externs/jQuery.limited-externs.js"]}}
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
