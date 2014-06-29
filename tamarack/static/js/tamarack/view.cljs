(ns tamarack.view
  (:require [om.core :as om]
            [tamarack.util :as util]
            [tamarack.state :as state]
            [tamarack.components.debug :as debug]
            [tamarack.components.breadcrumbs :as breadcrumbs]
            [tamarack.components.timeslice :as timeslice]
            [tamarack.pages.main :as main]))

(defn render-all []
  (om/root breadcrumbs/component state/app-state {:target (util/element-by-id "breadcrumb")})
  (om/root main/page state/app-state {:target (util/element-by-id "main-content")})

  (om/root timeslice/nav-label state/app-state
           {:target (util/element-by-id "timeslice-nav") :path [:timeslice]})
  (om/root timeslice/edit-tracking-now-duration state/app-state
           {:target (util/element-by-id "up-to-now-tab") :path [:timeslice]})
  (om/root timeslice/edit-date-range state/app-state
           {:target (util/element-by-id "date-range-tab") :path [:timeslice]})
  
  (om/root debug/component state/app-state {:target (util/element-by-id "debug-container")}))
