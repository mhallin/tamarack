// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.components.agg_table');
goog.require('cljs.core');
goog.require('tamarack.xhr');
goog.require('sablono.core');
goog.require('tamarack.routes');
goog.require('tamarack.util');
goog.require('sablono.core');
goog.require('tamarack.util');
goog.require('tamarack.xhr');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('tamarack.routes');
tamarack.components.agg_table.fetch_data = (function fetch_data(app,owner,agg_type){var vec__10213 = cljs.core.constant$keyword$157.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(app));var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10213,0,null);var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10213,1,null);var url = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/explorer-api/v1/applications",cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(app)),"aggregate",cljs.core.subs.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(agg_type)),1)], null)))+"?from="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_iso(from))+"&to="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_iso(to)));return tamarack.xhr.send_edn(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$193,cljs.core.constant$keyword$190,cljs.core.constant$keyword$199,url,cljs.core.constant$keyword$197,((function (vec__10213,from,to,url){
return (function (res){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$198,res);
});})(vec__10213,from,to,url))
], null));
});
tamarack.components.agg_table.endpoint_url = (function endpoint_url(app,endpoint){return tamarack.routes.url_of.cljs$core$IFn$_invoke$arity$2(tamarack.routes.app_endpoint_overview,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$168,cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(app)),cljs.core.constant$keyword$249,endpoint], null));
});
tamarack.components.agg_table.goto_endpoint = (function goto_endpoint(app,endpoint,e){e.preventDefault();
return tamarack.routes.navigate_to.cljs$core$IFn$_invoke$arity$2(tamarack.routes.app_endpoint_overview,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$168,cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app))),cljs.core.constant$keyword$249,endpoint], null));
});
tamarack.components.agg_table.render_row = (function render_row(app,round_fn,unit,p__10214){var vec__10217 = p__10214;var endpoint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10217,0,null);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10217,1,null);return React.DOM.tr({"key": endpoint},React.DOM.td(null,React.DOM.a({"href": tamarack.components.agg_table.endpoint_url(app,endpoint), "onClick": cljs.core.partial.cljs$core$IFn$_invoke$arity$3(tamarack.components.agg_table.goto_endpoint,app,endpoint)},sablono.interpreter.interpret(endpoint))),(function (){var attrs10218 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((round_fn.cljs$core$IFn$_invoke$arity$1 ? round_fn.cljs$core$IFn$_invoke$arity$1(value) : round_fn.call(null,value)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs10218))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$162,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["num-col"], null)], null),attrs10218], 0))):{"className": "num-col"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs10218))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs10218)], null))));
})());
});
tamarack.components.agg_table.component = (function component(app,owner,p__10219){var map__10225 = p__10219;var map__10225__$1 = ((cljs.core.seq_QMARK_(map__10225))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10225):map__10225);var opts = map__10225__$1;var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10225__$1,cljs.core.constant$keyword$252);var round_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10225__$1,cljs.core.constant$keyword$253);var agg_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10225__$1,cljs.core.constant$keyword$254);if(typeof tamarack.components.agg_table.t10226 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.components.agg_table.t10226 = (function (agg_type,round_fn,unit,opts,map__10225,p__10219,owner,app,component,meta10227){
this.agg_type = agg_type;
this.round_fn = round_fn;
this.unit = unit;
this.opts = opts;
this.map__10225 = map__10225;
this.p__10219 = p__10219;
this.owner = owner;
this.app = app;
this.component = component;
this.meta10227 = meta10227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.components.agg_table.t10226.cljs$lang$type = true;
tamarack.components.agg_table.t10226.cljs$lang$ctorStr = "tamarack.components.agg-table/t10226";
tamarack.components.agg_table.t10226.cljs$lang$ctorPrWriter = ((function (map__10225,map__10225__$1,opts,unit,round_fn,agg_type){
return (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write(writer__4144__auto__,"tamarack.components.agg-table/t10226");
});})(map__10225,map__10225__$1,opts,unit,round_fn,agg_type))
;
tamarack.components.agg_table.t10226.prototype.om$core$IRender$ = true;
tamarack.components.agg_table.t10226.prototype.om$core$IRender$render$arity$1 = ((function (map__10225,map__10225__$1,opts,unit,round_fn,agg_type){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.table({"className": "table table-hover table-striped table-condensed"},(function (){var attrs10229 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(tamarack.components.agg_table.render_row,self__.app,self__.round_fn,self__.unit),om.core.get_state.cljs$core$IFn$_invoke$arity$2(self__.owner,cljs.core.constant$keyword$198));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs10229))?sablono.interpreter.attributes(attrs10229):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs10229))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs10229)], null))));
})());
});})(map__10225,map__10225__$1,opts,unit,round_fn,agg_type))
;
tamarack.components.agg_table.t10226.prototype.om$core$IWillUpdate$ = true;
tamarack.components.agg_table.t10226.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__10225,map__10225__$1,opts,unit,round_fn,agg_type){
return (function (_,next_props,next_state){var self__ = this;
var ___$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(next_props),cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(self__.app)))
{return null;
} else
{return tamarack.components.agg_table.fetch_data(next_props,self__.owner,self__.agg_type);
}
});})(map__10225,map__10225__$1,opts,unit,round_fn,agg_type))
;
tamarack.components.agg_table.t10226.prototype.om$core$IWillMount$ = true;
tamarack.components.agg_table.t10226.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__10225,map__10225__$1,opts,unit,round_fn,agg_type){
return (function (_){var self__ = this;
var ___$1 = this;return tamarack.components.agg_table.fetch_data(self__.app,self__.owner,self__.agg_type);
});})(map__10225,map__10225__$1,opts,unit,round_fn,agg_type))
;
tamarack.components.agg_table.t10226.prototype.om$core$IDisplayName$ = true;
tamarack.components.agg_table.t10226.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__10225,map__10225__$1,opts,unit,round_fn,agg_type){
return (function (_){var self__ = this;
var ___$1 = this;return "AggregateTable";
});})(map__10225,map__10225__$1,opts,unit,round_fn,agg_type))
;
tamarack.components.agg_table.t10226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10225,map__10225__$1,opts,unit,round_fn,agg_type){
return (function (_10228){var self__ = this;
var _10228__$1 = this;return self__.meta10227;
});})(map__10225,map__10225__$1,opts,unit,round_fn,agg_type))
;
tamarack.components.agg_table.t10226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10225,map__10225__$1,opts,unit,round_fn,agg_type){
return (function (_10228,meta10227__$1){var self__ = this;
var _10228__$1 = this;return (new tamarack.components.agg_table.t10226(self__.agg_type,self__.round_fn,self__.unit,self__.opts,self__.map__10225,self__.p__10219,self__.owner,self__.app,self__.component,meta10227__$1));
});})(map__10225,map__10225__$1,opts,unit,round_fn,agg_type))
;
tamarack.components.agg_table.__GT_t10226 = ((function (map__10225,map__10225__$1,opts,unit,round_fn,agg_type){
return (function __GT_t10226(agg_type__$1,round_fn__$1,unit__$1,opts__$1,map__10225__$2,p__10219__$1,owner__$1,app__$1,component__$1,meta10227){return (new tamarack.components.agg_table.t10226(agg_type__$1,round_fn__$1,unit__$1,opts__$1,map__10225__$2,p__10219__$1,owner__$1,app__$1,component__$1,meta10227));
});})(map__10225,map__10225__$1,opts,unit,round_fn,agg_type))
;
}
return (new tamarack.components.agg_table.t10226(agg_type,round_fn,unit,opts,map__10225__$1,p__10219,owner,app,component,null));
});
