// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.state');
goog.require('cljs.core');
goog.require('tamarack.util');
goog.require('tamarack.util');
goog.require('om.core');
goog.require('om.core');
tamarack.state.app_state = cljs.core.atom.call(null,null);
tamarack.state.default_tracking_now_window_size = (60 * 30);
tamarack.state.timeslice_ending_now = (function timeslice_ending_now(window_size){var now = tamarack.util.subtract_seconds.call(null,(new Date()),(2 * 60));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tamarack.util.trunc_to_minute.call(null,tamarack.util.subtract_seconds.call(null,now,window_size)),tamarack.util.trunc_to_minute.call(null,now)], null);
});
tamarack.state.update_timeslice = (function update_timeslice(app){if(cljs.core.truth_(new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app))))
{return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"window","window",4521119586),tamarack.state.timeslice_ending_now.call(null,new cljs.core.Keyword(null,"window-size","window-size",2882473776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app))));
} else
{return null;
}
});
tamarack.state.track_now_BANG_ = (function track_now_BANG_(app,window_size){om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"window-size","window-size",2882473776),window_size);
om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786),true);
return tamarack.state.update_timeslice.call(null,app);
});
tamarack.state.merge_state_BANG_ = (function merge_state_BANG_(state){var old_app = new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tamarack.state.app_state));var new_app = new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(state);var merged_app = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"app-id","app-id",3897749433).cljs$core$IFn$_invoke$arity$1(old_app),new cljs.core.Keyword(null,"app-id","app-id",3897749433).cljs$core$IFn$_invoke$arity$1(new_app)))?cljs.core.merge.call(null,old_app,new_app):new_app);var state_SINGLEQUOTE_ = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-app","current-app",1613970239),merged_app);return cljs.core.swap_BANG_.call(null,tamarack.state.app_state,cljs.core.merge,state_SINGLEQUOTE_);
});
tamarack.state.init_state = (function init_state(){var window = tamarack.state.timeslice_ending_now.call(null,tamarack.state.default_tracking_now_window_size);var window_size = tamarack.state.default_tracking_now_window_size;return cljs.core.reset_BANG_.call(null,tamarack.state.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeslice","timeslice",1068799575),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"window","window",4521119586),window,new cljs.core.Keyword(null,"window-size","window-size",2882473776),window_size,new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786),true], null)], null));
});

//# sourceMappingURL=state.js.map