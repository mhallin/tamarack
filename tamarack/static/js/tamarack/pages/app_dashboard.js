// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.pages.app_dashboard');
goog.require('cljs.core');
goog.require('tamarack.components.agg_table');
goog.require('sablono.core');
goog.require('tamarack.util');
goog.require('sablono.core');
goog.require('tamarack.util');
goog.require('tamarack.components.agg_table');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('tamarack.components.app_navbar');
goog.require('tamarack.components.chart');
goog.require('clojure.string');
goog.require('tamarack.components.app_navbar');
goog.require('tamarack.components.chart');
tamarack.pages.app_dashboard.app_chart_url = (function app_chart_url(app,chart_type){var comps = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/explorer-api/v1/applications",new cljs.core.Keyword(null,"app-id","app-id",3897749433).cljs$core$IFn$_invoke$arity$1(app),"chart",cljs.core.subs.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart_type)),1)], null);return clojure.string.join.call(null,"/",comps);
});
tamarack.pages.app_dashboard.page = (function page(app,owner){if(typeof tamarack.pages.app_dashboard.t7200 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.pages.app_dashboard.t7200 = (function (owner,app,page,meta7201){
this.owner = owner;
this.app = app;
this.page = page;
this.meta7201 = meta7201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.pages.app_dashboard.t7200.cljs$lang$type = true;
tamarack.pages.app_dashboard.t7200.cljs$lang$ctorStr = "tamarack.pages.app-dashboard/t7200";
tamarack.pages.app_dashboard.t7200.cljs$lang$ctorPrWriter = (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write.call(null,writer__4144__auto__,"tamarack.pages.app-dashboard/t7200");
});
tamarack.pages.app_dashboard.t7200.prototype.om$core$IRender$ = true;
tamarack.pages.app_dashboard.t7200.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "app-dashboard"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},React.DOM.h2(null,"Application Overview for ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"display-name","display-name",2582814760).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(self__.app)))))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-9"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-4"},React.DOM.h3(null,"Time per Request"),sablono.interpreter.interpret.call(null,om.core.build.call(null,tamarack.components.chart.component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-url","data-url",2801809470),tamarack.pages.app_dashboard.app_chart_url.call(null,new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"ms-per-req","ms-per-req",4101432889))], null)], null)))),React.DOM.div({"className": "col-md-4"},React.DOM.h3(null,"Requests per Minute"),sablono.interpreter.interpret.call(null,om.core.build.call(null,tamarack.components.chart.component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-url","data-url",2801809470),tamarack.pages.app_dashboard.app_chart_url.call(null,new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"reqs-per-min","reqs-per-min",4042441436))], null)], null)))),React.DOM.div({"className": "col-md-4"},React.DOM.h3(null,"Errors per Request"),sablono.interpreter.interpret.call(null,om.core.build.call(null,tamarack.components.chart.component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data-url","data-url",2801809470),tamarack.pages.app_dashboard.app_chart_url.call(null,new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"errs-per-req","errs-per-req",4577293377))], null)], null))))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-4"},React.DOM.h3(null,"Slowest Endpoints"),sablono.interpreter.interpret.call(null,om.core.build.call(null,tamarack.components.agg_table.component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"agg-type","agg-type",2480317432),new cljs.core.Keyword(null,"ms-per-req","ms-per-req",4101432889),new cljs.core.Keyword(null,"round-fn","round-fn",1013703897),cljs.core.partial.call(null,tamarack.util.round_to,2),new cljs.core.Keyword(null,"unit","unit",1017498870)," ms"], null)], null)))),React.DOM.div({"className": "col-md-4"},React.DOM.h3(null,"Most Requested Endpoints"),sablono.interpreter.interpret.call(null,om.core.build.call(null,tamarack.components.agg_table.component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"agg-type","agg-type",2480317432),new cljs.core.Keyword(null,"reqs-per-min","reqs-per-min",4042441436),new cljs.core.Keyword(null,"round-fn","round-fn",1013703897),cljs.core.partial.call(null,tamarack.util.round_to,2),new cljs.core.Keyword(null,"unit","unit",1017498870)," rpm"], null)], null)))),React.DOM.div({"className": "col-md-4"},React.DOM.h3(null,"Endpoints Taking Most Time"),sablono.interpreter.interpret.call(null,om.core.build.call(null,tamarack.components.agg_table.component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"agg-type","agg-type",2480317432),new cljs.core.Keyword(null,"total-time","total-time",4557305640),new cljs.core.Keyword(null,"round-fn","round-fn",1013703897),cljs.core.partial.call(null,tamarack.util.round_to,2),new cljs.core.Keyword(null,"unit","unit",1017498870)," ms"], null)], null)))))),(function (){var attrs7215 = om.core.build.call(null,tamarack.components.app_navbar.component,self__.app);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs7215))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-3"], null)], null),attrs7215)):{"className": "col-md-3"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs7215))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs7215)], null))));
})()));
});
tamarack.pages.app_dashboard.t7200.prototype.om$core$IDisplayName$ = true;
tamarack.pages.app_dashboard.t7200.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "AppDashboard";
});
tamarack.pages.app_dashboard.t7200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7202){var self__ = this;
var _7202__$1 = this;return self__.meta7201;
});
tamarack.pages.app_dashboard.t7200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7202,meta7201__$1){var self__ = this;
var _7202__$1 = this;return (new tamarack.pages.app_dashboard.t7200(self__.owner,self__.app,self__.page,meta7201__$1));
});
tamarack.pages.app_dashboard.__GT_t7200 = (function __GT_t7200(owner__$1,app__$1,page__$1,meta7201){return (new tamarack.pages.app_dashboard.t7200(owner__$1,app__$1,page__$1,meta7201));
});
}
return (new tamarack.pages.app_dashboard.t7200(owner,app,page,null));
});

//# sourceMappingURL=app_dashboard.js.map