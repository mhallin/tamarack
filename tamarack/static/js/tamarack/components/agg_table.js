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
tamarack.components.agg_table.fetch_data = (function fetch_data(app,owner,agg_type){var vec__6950 = new cljs.core.Keyword(null,"window","window",4521119586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeslice","timeslice",1068799575).cljs$core$IFn$_invoke$arity$1(app));var from = cljs.core.nth.call(null,vec__6950,0,null);var to = cljs.core.nth.call(null,vec__6950,1,null);var url = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/explorer-api/v1/applications",new cljs.core.Keyword(null,"app-id","app-id",3897749433).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(app)),"aggregate",cljs.core.subs.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(agg_type)),1)], null)))+"?from="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_iso.call(null,from))+"&to="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_iso.call(null,to)));return tamarack.xhr.send_edn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),url,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),((function (vec__6950,from,to,url){
return (function (res){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"data","data",1016980252),res);
});})(vec__6950,from,to,url))
], null));
});
tamarack.components.agg_table.endpoint_url = (function endpoint_url(app,endpoint){return tamarack.routes.url_of.call(null,tamarack.routes.app_endpoint_overview,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"app-id","app-id",3897749433).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(app)),new cljs.core.Keyword(null,"endpoint","endpoint",2755006727),endpoint], null));
});
tamarack.components.agg_table.goto_endpoint = (function goto_endpoint(app,endpoint,e){e.preventDefault();
return tamarack.routes.navigate_to.call(null,tamarack.routes.app_endpoint_overview,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"app-id","app-id",3897749433).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app))),new cljs.core.Keyword(null,"endpoint","endpoint",2755006727),endpoint], null));
});
tamarack.components.agg_table.render_row = (function render_row(app,round_fn,unit,p__6951){var vec__6954 = p__6951;var endpoint = cljs.core.nth.call(null,vec__6954,0,null);var value = cljs.core.nth.call(null,vec__6954,1,null);return React.DOM.tr({"key": endpoint},React.DOM.td(null,React.DOM.a({"href": tamarack.components.agg_table.endpoint_url.call(null,app,endpoint), "onClick": cljs.core.partial.call(null,tamarack.components.agg_table.goto_endpoint,app,endpoint)},sablono.interpreter.interpret.call(null,endpoint))),(function (){var attrs6955 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(round_fn.call(null,value))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs6955))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["num-col"], null)], null),attrs6955)):{"className": "num-col"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6955))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6955)], null))));
})());
});
tamarack.components.agg_table.component = (function component(app,owner,p__6956){var map__6962 = p__6956;var map__6962__$1 = ((cljs.core.seq_QMARK_.call(null,map__6962))?cljs.core.apply.call(null,cljs.core.hash_map,map__6962):map__6962);var opts = map__6962__$1;var unit = cljs.core.get.call(null,map__6962__$1,new cljs.core.Keyword(null,"unit","unit",1017498870));var round_fn = cljs.core.get.call(null,map__6962__$1,new cljs.core.Keyword(null,"round-fn","round-fn",1013703897));var agg_type = cljs.core.get.call(null,map__6962__$1,new cljs.core.Keyword(null,"agg-type","agg-type",2480317432));if(typeof tamarack.components.agg_table.t6963 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.components.agg_table.t6963 = (function (agg_type,round_fn,unit,opts,map__6962,p__6956,owner,app,component,meta6964){
this.agg_type = agg_type;
this.round_fn = round_fn;
this.unit = unit;
this.opts = opts;
this.map__6962 = map__6962;
this.p__6956 = p__6956;
this.owner = owner;
this.app = app;
this.component = component;
this.meta6964 = meta6964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.components.agg_table.t6963.cljs$lang$type = true;
tamarack.components.agg_table.t6963.cljs$lang$ctorStr = "tamarack.components.agg-table/t6963";
tamarack.components.agg_table.t6963.cljs$lang$ctorPrWriter = ((function (map__6962,map__6962__$1,opts,unit,round_fn,agg_type){
return (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write.call(null,writer__4144__auto__,"tamarack.components.agg-table/t6963");
});})(map__6962,map__6962__$1,opts,unit,round_fn,agg_type))
;
tamarack.components.agg_table.t6963.prototype.om$core$IRender$ = true;
tamarack.components.agg_table.t6963.prototype.om$core$IRender$render$arity$1 = ((function (map__6962,map__6962__$1,opts,unit,round_fn,agg_type){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.table({"className": "table table-hover table-striped table-condensed"},(function (){var attrs6966 = cljs.core.map.call(null,cljs.core.partial.call(null,tamarack.components.agg_table.render_row,self__.app,self__.round_fn,self__.unit),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"data","data",1016980252)));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs6966))?sablono.interpreter.attributes.call(null,attrs6966):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6966))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6966)], null))));
})());
});})(map__6962,map__6962__$1,opts,unit,round_fn,agg_type))
;
tamarack.components.agg_table.t6963.prototype.om$core$IWillUpdate$ = true;
tamarack.components.agg_table.t6963.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__6962,map__6962__$1,opts,unit,round_fn,agg_type){
return (function (_,next_props,next_state){var self__ = this;
var ___$1 = this;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"timeslice","timeslice",1068799575).cljs$core$IFn$_invoke$arity$1(next_props),new cljs.core.Keyword(null,"timeslice","timeslice",1068799575).cljs$core$IFn$_invoke$arity$1(self__.app)))
{return null;
} else
{return tamarack.components.agg_table.fetch_data.call(null,next_props,self__.owner,self__.agg_type);
}
});})(map__6962,map__6962__$1,opts,unit,round_fn,agg_type))
;
tamarack.components.agg_table.t6963.prototype.om$core$IWillMount$ = true;
tamarack.components.agg_table.t6963.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__6962,map__6962__$1,opts,unit,round_fn,agg_type){
return (function (_){var self__ = this;
var ___$1 = this;return tamarack.components.agg_table.fetch_data.call(null,self__.app,self__.owner,self__.agg_type);
});})(map__6962,map__6962__$1,opts,unit,round_fn,agg_type))
;
tamarack.components.agg_table.t6963.prototype.om$core$IDisplayName$ = true;
tamarack.components.agg_table.t6963.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__6962,map__6962__$1,opts,unit,round_fn,agg_type){
return (function (_){var self__ = this;
var ___$1 = this;return "AggregateTable";
});})(map__6962,map__6962__$1,opts,unit,round_fn,agg_type))
;
tamarack.components.agg_table.t6963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__6962,map__6962__$1,opts,unit,round_fn,agg_type){
return (function (_6965){var self__ = this;
var _6965__$1 = this;return self__.meta6964;
});})(map__6962,map__6962__$1,opts,unit,round_fn,agg_type))
;
tamarack.components.agg_table.t6963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__6962,map__6962__$1,opts,unit,round_fn,agg_type){
return (function (_6965,meta6964__$1){var self__ = this;
var _6965__$1 = this;return (new tamarack.components.agg_table.t6963(self__.agg_type,self__.round_fn,self__.unit,self__.opts,self__.map__6962,self__.p__6956,self__.owner,self__.app,self__.component,meta6964__$1));
});})(map__6962,map__6962__$1,opts,unit,round_fn,agg_type))
;
tamarack.components.agg_table.__GT_t6963 = ((function (map__6962,map__6962__$1,opts,unit,round_fn,agg_type){
return (function __GT_t6963(agg_type__$1,round_fn__$1,unit__$1,opts__$1,map__6962__$2,p__6956__$1,owner__$1,app__$1,component__$1,meta6964){return (new tamarack.components.agg_table.t6963(agg_type__$1,round_fn__$1,unit__$1,opts__$1,map__6962__$2,p__6956__$1,owner__$1,app__$1,component__$1,meta6964));
});})(map__6962,map__6962__$1,opts,unit,round_fn,agg_type))
;
}
return (new tamarack.components.agg_table.t6963(agg_type,round_fn,unit,opts,map__6962__$1,p__6956,owner,app,component,null));
});

//# sourceMappingURL=agg_table.js.map