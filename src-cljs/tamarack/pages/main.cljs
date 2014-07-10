(ns tamarack.pages.main
  (:require [om.core :as om :include-macros true]
            [tamarack.state :as state]
            [tamarack.pages.app-endpoint-overview :as app-endpoint-overview]
            [tamarack.pages.app-dashboard :as app-dashboard]
            [tamarack.pages.all-apps :as all-apps]))

(defn page [app owner]
  (reify
    om/IDisplayName
    (display-name [_] "Main")

    om/IWillMount
    (will-mount [_]
      (.setInterval js/window
                    (partial state/update-timeslice (:timeslice app))
                    1000))

    om/IRender
    (render [_]
      (condp = (:view app)
        :app-endpoint-overview
        (om/build app-endpoint-overview/page app)
        
        :app-dashboard
        (om/build app-dashboard/page app)

        :all-apps
        (om/build all-apps/page app)))))
