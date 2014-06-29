// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.view');
goog.require('cljs.core');
goog.require('tamarack.components.debug');
goog.require('tamarack.components.timeslice');
goog.require('tamarack.pages.main');
goog.require('tamarack.components.breadcrumbs');
goog.require('tamarack.state');
goog.require('tamarack.util');
goog.require('tamarack.util');
goog.require('tamarack.components.debug');
goog.require('tamarack.state');
goog.require('om.core');
goog.require('om.core');
goog.require('tamarack.components.breadcrumbs');
goog.require('tamarack.pages.main');
goog.require('tamarack.components.timeslice');
tamarack.view.render_all = (function render_all(){om.core.root.call(null,tamarack.components.breadcrumbs.component,tamarack.state.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),tamarack.util.element_by_id.call(null,"breadcrumb")], null));
om.core.root.call(null,tamarack.pages.main.page,tamarack.state.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),tamarack.util.element_by_id.call(null,"main-content")], null));
om.core.root.call(null,tamarack.components.timeslice.nav_label,tamarack.state.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),tamarack.util.element_by_id.call(null,"timeslice-nav"),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeslice","timeslice",1068799575)], null)], null));
om.core.root.call(null,tamarack.components.timeslice.edit_tracking_now_duration,tamarack.state.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),tamarack.util.element_by_id.call(null,"up-to-now-tab"),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeslice","timeslice",1068799575)], null)], null));
om.core.root.call(null,tamarack.components.timeslice.edit_date_range,tamarack.state.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),tamarack.util.element_by_id.call(null,"date-range-tab"),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeslice","timeslice",1068799575)], null)], null));
return om.core.root.call(null,tamarack.components.debug.component,tamarack.state.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),tamarack.util.element_by_id.call(null,"debug-container")], null));
});

//# sourceMappingURL=view.js.map