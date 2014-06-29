// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.state');
goog.require('cljs.core');
goog.require('tamarack.util');
goog.require('tamarack.util');
goog.require('om.core');
goog.require('om.core');
tamarack.state.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tamarack.state.default_tracking_now_window_size = (60 * 30);
tamarack.state.timeslice_ending_now = (function timeslice_ending_now(window_size){var now = tamarack.util.subtract_seconds((new Date()),(2 * 60));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tamarack.util.trunc_to_minute(tamarack.util.subtract_seconds(now,window_size)),tamarack.util.trunc_to_minute(now)], null);
});
tamarack.state.update_timeslice = (function update_timeslice(app){if(cljs.core.truth_(cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app))))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$157,tamarack.state.timeslice_ending_now(cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app))));
} else
{return null;
}
});
tamarack.state.track_now_BANG_ = (function track_now_BANG_(app,window_size){om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$231,window_size);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$230,true);
return tamarack.state.update_timeslice(app);
});
tamarack.state.merge_state_BANG_ = (function merge_state_BANG_(state){var old_app = cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tamarack.state.app_state));var new_app = cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(state);var merged_app = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(old_app),cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(new_app)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([old_app,new_app], 0)):new_app);var state_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.constant$keyword$232,merged_app);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tamarack.state.app_state,cljs.core.merge,state_SINGLEQUOTE_);
});
tamarack.state.init_state = (function init_state(){var window = tamarack.state.timeslice_ending_now(tamarack.state.default_tracking_now_window_size);var window_size = tamarack.state.default_tracking_now_window_size;return cljs.core.reset_BANG_(tamarack.state.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$157,window,cljs.core.constant$keyword$231,window_size,cljs.core.constant$keyword$230,true], null)], null));
});
