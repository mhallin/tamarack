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
tamarack.components.timeslice.nav_label = (function nav_label(app,owner){if(typeof tamarack.components.timeslice.t7035 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.components.timeslice.t7035 = (function (owner,app,nav_label,meta7036){
this.owner = owner;
this.app = app;
this.nav_label = nav_label;
this.meta7036 = meta7036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.components.timeslice.t7035.cljs$lang$type = true;
tamarack.components.timeslice.t7035.cljs$lang$ctorStr = "tamarack.components.timeslice/t7035";
tamarack.components.timeslice.t7035.cljs$lang$ctorPrWriter = (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write.call(null,writer__4144__auto__,"tamarack.components.timeslice/t7035");
});
tamarack.components.timeslice.t7035.prototype.om$core$IRender$ = true;
tamarack.components.timeslice.t7035.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786).cljs$core$IFn$_invoke$arity$1(self__.app)))
{return React.DOM.span(null,"Last ",sablono.interpreter.interpret.call(null,goog.date.duration.format((1000 * new cljs.core.Keyword(null,"window-size","window-size",2882473776).cljs$core$IFn$_invoke$arity$1(self__.app))))," ",React.DOM.b({"className": "caret"}));
} else
{var attrs7040 = tamarack.util.timeslice__GT_str.call(null,self__.app);return cljs.core.apply.call(null,React.DOM.span,((cljs.core.map_QMARK_.call(null,attrs7040))?sablono.interpreter.attributes.call(null,attrs7040):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs7040))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.b({"className": "caret"})], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs7040),React.DOM.b({"className": "caret"})], null))));
}
});
tamarack.components.timeslice.t7035.prototype.om$core$IDisplayName$ = true;
tamarack.components.timeslice.t7035.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "TimesliceNav";
});
tamarack.components.timeslice.t7035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7037){var self__ = this;
var _7037__$1 = this;return self__.meta7036;
});
tamarack.components.timeslice.t7035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7037,meta7036__$1){var self__ = this;
var _7037__$1 = this;return (new tamarack.components.timeslice.t7035(self__.owner,self__.app,self__.nav_label,meta7036__$1));
});
tamarack.components.timeslice.__GT_t7035 = (function __GT_t7035(owner__$1,app__$1,nav_label__$1,meta7036){return (new tamarack.components.timeslice.t7035(owner__$1,app__$1,nav_label__$1,meta7036));
});
}
return (new tamarack.components.timeslice.t7035(owner,app,nav_label,null));
});
tamarack.components.timeslice.edit_date_range = (function edit_date_range(app,owner){var refresh_timeslice = (function refresh_timeslice(){var new_from = tamarack.util.parse_date_time.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"from-date-str","from-date-str",3204381127)),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"from-time-str","from-time-str",3629233510)));var new_to = tamarack.util.parse_date_time.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"to-date-str","to-date-str",4743306774)),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"to-time-str","to-time-str",873191861)));om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786),false);
return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"window","window",4521119586),((function (new_from,new_to){
return (function (p__7068){var vec__7069 = p__7068;var old_from = cljs.core.nth.call(null,vec__7069,0,null);var old_to = cljs.core.nth.call(null,vec__7069,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__3576__auto__ = new_from;if(cljs.core.truth_(or__3576__auto__))
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
var handle_change = (function handle_change(key,e){om.core.set_state_BANG_.call(null,owner,key,e.target.value);
refresh_timeslice.call(null);
return tamarack.routes.refresh_timeslice.call(null);
});
if(typeof tamarack.components.timeslice.t7070 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.components.timeslice.t7070 = (function (handle_change,refresh_timeslice,owner,app,edit_date_range,meta7071){
this.handle_change = handle_change;
this.refresh_timeslice = refresh_timeslice;
this.owner = owner;
this.app = app;
this.edit_date_range = edit_date_range;
this.meta7071 = meta7071;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.components.timeslice.t7070.cljs$lang$type = true;
tamarack.components.timeslice.t7070.cljs$lang$ctorStr = "tamarack.components.timeslice/t7070";
tamarack.components.timeslice.t7070.cljs$lang$ctorPrWriter = (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write.call(null,writer__4144__auto__,"tamarack.components.timeslice/t7070");
});
tamarack.components.timeslice.t7070.prototype.om$core$IRender$ = true;
tamarack.components.timeslice.t7070.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.form({"className": "form-horizontal", "role": "form"},React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-3 control-label"},"From"),React.DOM.div({"className": "col-sm-5"},sablono.interpreter.input.call(null,{"className": "form-control", "type": "date", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"from-date-str","from-date-str",3204381127)), "onChange": cljs.core.partial.call(null,self__.handle_change,new cljs.core.Keyword(null,"from-date-str","from-date-str",3204381127))})),React.DOM.div({"className": "col-sm-3"},sablono.interpreter.input.call(null,{"className": "form-control", "type": "time", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"from-time-str","from-time-str",3629233510)), "onChange": cljs.core.partial.call(null,self__.handle_change,new cljs.core.Keyword(null,"from-time-str","from-time-str",3629233510))}))),React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-3 control-label"},"To"),React.DOM.div({"className": "col-sm-5"},sablono.interpreter.input.call(null,{"className": "form-control", "type": "date", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"to-date-str","to-date-str",4743306774)), "onChange": cljs.core.partial.call(null,self__.handle_change,new cljs.core.Keyword(null,"from-date-str","from-date-str",3204381127))})),React.DOM.div({"className": "col-sm-3"},sablono.interpreter.input.call(null,{"className": "form-control", "type": "time", "value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"to-time-str","to-time-str",873191861)), "onChange": cljs.core.partial.call(null,self__.handle_change,new cljs.core.Keyword(null,"from-time-str","from-time-str",3629233510))}))));
});
tamarack.components.timeslice.t7070.prototype.om$core$IDisplayName$ = true;
tamarack.components.timeslice.t7070.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "TimesliceTab";
});
tamarack.components.timeslice.t7070.prototype.om$core$IInitState$ = true;
tamarack.components.timeslice.t7070.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var map__7077 = self__.app;var map__7077__$1 = ((cljs.core.seq_QMARK_.call(null,map__7077))?cljs.core.apply.call(null,cljs.core.hash_map,map__7077):map__7077);var vec__7078 = cljs.core.get.call(null,map__7077__$1,new cljs.core.Keyword(null,"window","window",4521119586));var from = cljs.core.nth.call(null,vec__7078,0,null);var to = cljs.core.nth.call(null,vec__7078,1,null);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from-date-str","from-date-str",3204381127),tamarack.util.inst__GT_local_date_str.call(null,from),new cljs.core.Keyword(null,"from-time-str","from-time-str",3629233510),tamarack.util.inst__GT_local_time_str.call(null,from),new cljs.core.Keyword(null,"to-date-str","to-date-str",4743306774),tamarack.util.inst__GT_local_date_str.call(null,to),new cljs.core.Keyword(null,"to-time-str","to-time-str",873191861),tamarack.util.inst__GT_local_time_str.call(null,to)], null);
});
tamarack.components.timeslice.t7070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7072){var self__ = this;
var _7072__$1 = this;return self__.meta7071;
});
tamarack.components.timeslice.t7070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7072,meta7071__$1){var self__ = this;
var _7072__$1 = this;return (new tamarack.components.timeslice.t7070(self__.handle_change,self__.refresh_timeslice,self__.owner,self__.app,self__.edit_date_range,meta7071__$1));
});
tamarack.components.timeslice.__GT_t7070 = (function __GT_t7070(handle_change__$1,refresh_timeslice__$1,owner__$1,app__$1,edit_date_range__$1,meta7071){return (new tamarack.components.timeslice.t7070(handle_change__$1,refresh_timeslice__$1,owner__$1,app__$1,edit_date_range__$1,meta7071));
});
}
return (new tamarack.components.timeslice.t7070(handle_change,refresh_timeslice,owner,app,edit_date_range,null));
});
tamarack.components.timeslice.edit_tracking_now_duration = (function edit_tracking_now_duration(app,owner){var choices = cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core._STAR_,60),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [30,60,120,180,300,720,1440,2880,7200], null));var update_window_size = ((function (choices){
return (function (e){tamarack.state.track_now_BANG_.call(null,app,(e.target.value | 0));
return tamarack.routes.refresh_timeslice.call(null);
});})(choices))
;if(typeof tamarack.components.timeslice.t7086 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.components.timeslice.t7086 = (function (update_window_size,choices,owner,app,edit_tracking_now_duration,meta7087){
this.update_window_size = update_window_size;
this.choices = choices;
this.owner = owner;
this.app = app;
this.edit_tracking_now_duration = edit_tracking_now_duration;
this.meta7087 = meta7087;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.components.timeslice.t7086.cljs$lang$type = true;
tamarack.components.timeslice.t7086.cljs$lang$ctorStr = "tamarack.components.timeslice/t7086";
tamarack.components.timeslice.t7086.cljs$lang$ctorPrWriter = ((function (choices,update_window_size){
return (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write.call(null,writer__4144__auto__,"tamarack.components.timeslice/t7086");
});})(choices,update_window_size))
;
tamarack.components.timeslice.t7086.prototype.om$core$IRender$ = true;
tamarack.components.timeslice.t7086.prototype.om$core$IRender$render$arity$1 = ((function (choices,update_window_size){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.form({"className": "form-horizontal", "role": "form"},React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-3 control-label"},"Show last"),React.DOM.div({"className": "col-sm-5"},React.DOM.select({"className": "form-control", "onChange": self__.update_window_size, "value": (cljs.core.truth_(new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786).cljs$core$IFn$_invoke$arity$1(self__.app))?new cljs.core.Keyword(null,"window-size","window-size",2882473776).cljs$core$IFn$_invoke$arity$1(self__.app):-1)},React.DOM.option({"disabled": true, "value": -1},"(choose one)"),sablono.interpreter.interpret.call(null,cljs.core.map.call(null,((function (___$1,choices,update_window_size){
return (function (v){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),v,new cljs.core.Keyword(null,"key","key",1014010321),v], null),goog.date.duration.format((1000 * v))], null);
});})(___$1,choices,update_window_size))
,self__.choices))))));
});})(choices,update_window_size))
;
tamarack.components.timeslice.t7086.prototype.om$core$IDisplayName$ = true;
tamarack.components.timeslice.t7086.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (choices,update_window_size){
return (function (_){var self__ = this;
var ___$1 = this;return "TimeWindowSizeTab";
});})(choices,update_window_size))
;
tamarack.components.timeslice.t7086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (choices,update_window_size){
return (function (_7088){var self__ = this;
var _7088__$1 = this;return self__.meta7087;
});})(choices,update_window_size))
;
tamarack.components.timeslice.t7086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (choices,update_window_size){
return (function (_7088,meta7087__$1){var self__ = this;
var _7088__$1 = this;return (new tamarack.components.timeslice.t7086(self__.update_window_size,self__.choices,self__.owner,self__.app,self__.edit_tracking_now_duration,meta7087__$1));
});})(choices,update_window_size))
;
tamarack.components.timeslice.__GT_t7086 = ((function (choices,update_window_size){
return (function __GT_t7086(update_window_size__$1,choices__$1,owner__$1,app__$1,edit_tracking_now_duration__$1,meta7087){return (new tamarack.components.timeslice.t7086(update_window_size__$1,choices__$1,owner__$1,app__$1,edit_tracking_now_duration__$1,meta7087));
});})(choices,update_window_size))
;
}
return (new tamarack.components.timeslice.t7086(update_window_size,choices,owner,app,edit_tracking_now_duration,null));
});

//# sourceMappingURL=timeslice.js.map