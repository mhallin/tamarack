// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.components.timeslice');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('tamarack.routes');
goog.require('tamarack.state');
goog.require('goog.date.duration');
goog.require('tamarack.util');
goog.require('sablono.core');
goog.require('tamarack.util');
goog.require('tamarack.state');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.date.duration');
goog.require('tamarack.routes');
tamarack.components.timeslice.nav_label = (function nav_label(app,owner){if(typeof tamarack.components.timeslice.t10298 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.components.timeslice.t10298 = (function (owner,app,nav_label,meta10299){
this.owner = owner;
this.app = app;
this.nav_label = nav_label;
this.meta10299 = meta10299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.components.timeslice.t10298.cljs$lang$type = true;
tamarack.components.timeslice.t10298.cljs$lang$ctorStr = "tamarack.components.timeslice/t10298";
tamarack.components.timeslice.t10298.cljs$lang$ctorPrWriter = (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write(writer__4144__auto__,"tamarack.components.timeslice/t10298");
});
tamarack.components.timeslice.t10298.prototype.om$core$IRender$ = true;
tamarack.components.timeslice.t10298.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1(self__.app)))
{return React.DOM.span(null,"Last ",sablono.interpreter.interpret(goog.date.duration.format((1000 * cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(self__.app))))," ",React.DOM.b({"className": "caret"}));
} else
{var attrs10303 = tamarack.util.timeslice__GT_str(self__.app);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.span,((cljs.core.map_QMARK_(attrs10303))?sablono.interpreter.attributes(attrs10303):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs10303))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.b({"className": "caret"})], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs10303),React.DOM.b({"className": "caret"})], null))));
}
});
tamarack.components.timeslice.t10298.prototype.om$core$IDisplayName$ = true;
tamarack.components.timeslice.t10298.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "TimesliceNav";
});
tamarack.components.timeslice.t10298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10300){var self__ = this;
var _10300__$1 = this;return self__.meta10299;
});
tamarack.components.timeslice.t10298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10300,meta10299__$1){var self__ = this;
var _10300__$1 = this;return (new tamarack.components.timeslice.t10298(self__.owner,self__.app,self__.nav_label,meta10299__$1));
});
tamarack.components.timeslice.__GT_t10298 = (function __GT_t10298(owner__$1,app__$1,nav_label__$1,meta10299){return (new tamarack.components.timeslice.t10298(owner__$1,app__$1,nav_label__$1,meta10299));
});
}
return (new tamarack.components.timeslice.t10298(owner,app,nav_label,null));
});
tamarack.components.timeslice.edit_date_range = (function edit_date_range(app,owner){var refresh_timeslice = (function refresh_timeslice(){var new_from = tamarack.util.parse_date_time(om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$260),om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$261));var new_to = tamarack.util.parse_date_time(om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$262),om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$263));om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$230,false);
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(app,cljs.core.constant$keyword$157,((function (new_from,new_to){
return (function (p__10331){var vec__10332 = p__10331;var old_from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10332,0,null);var old_to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10332,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3576__auto__ = new_from;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return old_from;
}
})(),(function (){var or__3576__auto__ = new_to;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return old_to;
}
})()], null);
});})(new_from,new_to))
);
});
var handle_change = (function handle_change(key,e){om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,key,e.target.value);
refresh_timeslice();
return tamarack.routes.refresh_timeslice();
});
if(typeof tamarack.components.timeslice.t10333 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.components.timeslice.t10333 = (function (handle_change,refresh_timeslice,owner,app,edit_date_range,meta10334){
this.handle_change = handle_change;
this.refresh_timeslice = refresh_timeslice;
this.owner = owner;
this.app = app;
this.edit_date_range = edit_date_range;
this.meta10334 = meta10334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.components.timeslice.t10333.cljs$lang$type = true;
tamarack.components.timeslice.t10333.cljs$lang$ctorStr = "tamarack.components.timeslice/t10333";
tamarack.components.timeslice.t10333.cljs$lang$ctorPrWriter = (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write(writer__4144__auto__,"tamarack.components.timeslice/t10333");
});
tamarack.components.timeslice.t10333.prototype.om$core$IRender$ = true;
tamarack.components.timeslice.t10333.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.form({"className": "form-horizontal", "role": "form"},React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-3 control-label"},"From"),React.DOM.div({"className": "col-sm-5"},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"className": "form-control", "type": "date", "value": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$260), "onChange": cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.handle_change,cljs.core.constant$keyword$260)}) : sablono.interpreter.input.call(null,{"className": "form-control", "type": "date", "value": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$260), "onChange": cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.handle_change,cljs.core.constant$keyword$260)}))),React.DOM.div({"className": "col-sm-3"},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"className": "form-control", "type": "time", "value": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$261), "onChange": cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.handle_change,cljs.core.constant$keyword$261)}) : sablono.interpreter.input.call(null,{"className": "form-control", "type": "time", "value": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$261), "onChange": cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.handle_change,cljs.core.constant$keyword$261)})))),React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-3 control-label"},"To"),React.DOM.div({"className": "col-sm-5"},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"className": "form-control", "type": "date", "value": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$262), "onChange": cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.handle_change,cljs.core.constant$keyword$260)}) : sablono.interpreter.input.call(null,{"className": "form-control", "type": "date", "value": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$262), "onChange": cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.handle_change,cljs.core.constant$keyword$260)}))),React.DOM.div({"className": "col-sm-3"},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"className": "form-control", "type": "time", "value": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$263), "onChange": cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.handle_change,cljs.core.constant$keyword$261)}) : sablono.interpreter.input.call(null,{"className": "form-control", "type": "time", "value": om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$263), "onChange": cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.handle_change,cljs.core.constant$keyword$261)})))));
});
tamarack.components.timeslice.t10333.prototype.om$core$IDisplayName$ = true;
tamarack.components.timeslice.t10333.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "TimesliceTab";
});
tamarack.components.timeslice.t10333.prototype.om$core$IInitState$ = true;
tamarack.components.timeslice.t10333.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map__10340 = self__.app;var map__10340__$1 = ((cljs.core.seq_QMARK_(map__10340))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10340):map__10340);var vec__10341 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10340__$1,cljs.core.constant$keyword$157);var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10341,0,null);var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10341,1,null);return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$260,tamarack.util.inst__GT_local_date_str(from),cljs.core.constant$keyword$261,tamarack.util.inst__GT_local_time_str(from),cljs.core.constant$keyword$262,tamarack.util.inst__GT_local_date_str(to),cljs.core.constant$keyword$263,tamarack.util.inst__GT_local_time_str(to)], null);
});
tamarack.components.timeslice.t10333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10335){var self__ = this;
var _10335__$1 = this;return self__.meta10334;
});
tamarack.components.timeslice.t10333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10335,meta10334__$1){var self__ = this;
var _10335__$1 = this;return (new tamarack.components.timeslice.t10333(self__.handle_change,self__.refresh_timeslice,self__.owner,self__.app,self__.edit_date_range,meta10334__$1));
});
tamarack.components.timeslice.__GT_t10333 = (function __GT_t10333(handle_change__$1,refresh_timeslice__$1,owner__$1,app__$1,edit_date_range__$1,meta10334){return (new tamarack.components.timeslice.t10333(handle_change__$1,refresh_timeslice__$1,owner__$1,app__$1,edit_date_range__$1,meta10334));
});
}
return (new tamarack.components.timeslice.t10333(handle_change,refresh_timeslice,owner,app,edit_date_range,null));
});
tamarack.components.timeslice.edit_tracking_now_duration = (function edit_tracking_now_duration(app,owner){var choices = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,60),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [30,60,120,180,300,720,1440,2880,7200], null));var update_window_size = ((function (choices){
return (function (e){tamarack.state.track_now_BANG_(app,(e.target.value | 0));
return tamarack.routes.refresh_timeslice();
});})(choices))
;if(typeof tamarack.components.timeslice.t10349 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.components.timeslice.t10349 = (function (update_window_size,choices,owner,app,edit_tracking_now_duration,meta10350){
this.update_window_size = update_window_size;
this.choices = choices;
this.owner = owner;
this.app = app;
this.edit_tracking_now_duration = edit_tracking_now_duration;
this.meta10350 = meta10350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.components.timeslice.t10349.cljs$lang$type = true;
tamarack.components.timeslice.t10349.cljs$lang$ctorStr = "tamarack.components.timeslice/t10349";
tamarack.components.timeslice.t10349.cljs$lang$ctorPrWriter = ((function (choices,update_window_size){
return (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write(writer__4144__auto__,"tamarack.components.timeslice/t10349");
});})(choices,update_window_size))
;
tamarack.components.timeslice.t10349.prototype.om$core$IRender$ = true;
tamarack.components.timeslice.t10349.prototype.om$core$IRender$render$arity$1 = ((function (choices,update_window_size){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.form({"className": "form-horizontal", "role": "form"},React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-3 control-label"},"Show last"),React.DOM.div({"className": "col-sm-5"},React.DOM.select({"className": "form-control", "onChange": self__.update_window_size, "value": (cljs.core.truth_(cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1(self__.app))?cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(self__.app):-1)},React.DOM.option({"disabled": true, "value": -1},"(choose one)"),sablono.interpreter.interpret(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1,choices,update_window_size){
return (function (v){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$145,v,cljs.core.constant$keyword$221,v], null),goog.date.duration.format((1000 * v))], null);
});})(___$1,choices,update_window_size))
,self__.choices))))));
});})(choices,update_window_size))
;
tamarack.components.timeslice.t10349.prototype.om$core$IDisplayName$ = true;
tamarack.components.timeslice.t10349.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (choices,update_window_size){
return (function (_){var self__ = this;
var ___$1 = this;return "TimeWindowSizeTab";
});})(choices,update_window_size))
;
tamarack.components.timeslice.t10349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (choices,update_window_size){
return (function (_10351){var self__ = this;
var _10351__$1 = this;return self__.meta10350;
});})(choices,update_window_size))
;
tamarack.components.timeslice.t10349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (choices,update_window_size){
return (function (_10351,meta10350__$1){var self__ = this;
var _10351__$1 = this;return (new tamarack.components.timeslice.t10349(self__.update_window_size,self__.choices,self__.owner,self__.app,self__.edit_tracking_now_duration,meta10350__$1));
});})(choices,update_window_size))
;
tamarack.components.timeslice.__GT_t10349 = ((function (choices,update_window_size){
return (function __GT_t10349(update_window_size__$1,choices__$1,owner__$1,app__$1,edit_tracking_now_duration__$1,meta10350){return (new tamarack.components.timeslice.t10349(update_window_size__$1,choices__$1,owner__$1,app__$1,edit_tracking_now_duration__$1,meta10350));
});})(choices,update_window_size))
;
}
return (new tamarack.components.timeslice.t10349(update_window_size,choices,owner,app,edit_tracking_now_duration,null));
});
