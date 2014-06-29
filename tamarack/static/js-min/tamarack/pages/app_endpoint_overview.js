// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.pages.app_endpoint_overview');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('tamarack.components.app_navbar');
goog.require('tamarack.components.chart');
goog.require('clojure.string');
goog.require('tamarack.components.app_navbar');
goog.require('tamarack.components.chart');
tamarack.pages.app_endpoint_overview.app_endpoint_chart_url = (function app_endpoint_chart_url(app,endpoint,chart_type){var comps = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/explorer-api/v1/applications",cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(app),"endpoints",endpoint,"chart",cljs.core.subs.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(chart_type)),1)], null);return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",comps);
});
tamarack.pages.app_endpoint_overview.page = (function page(app,owner){if(typeof tamarack.pages.app_endpoint_overview.t10489 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.pages.app_endpoint_overview.t10489 = (function (owner,app,page,meta10490){
this.owner = owner;
this.app = app;
this.page = page;
this.meta10490 = meta10490;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.pages.app_endpoint_overview.t10489.cljs$lang$type = true;
tamarack.pages.app_endpoint_overview.t10489.cljs$lang$ctorStr = "tamarack.pages.app-endpoint-overview/t10489";
tamarack.pages.app_endpoint_overview.t10489.cljs$lang$ctorPrWriter = (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write(writer__4144__auto__,"tamarack.pages.app-endpoint-overview/t10489");
});
tamarack.pages.app_endpoint_overview.t10489.prototype.om$core$IRender$ = true;
tamarack.pages.app_endpoint_overview.t10489.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "app-endpoint-overview"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},React.DOM.h2(null,"Endpoint Overiew for \"",sablono.interpreter.interpret(cljs.core.constant$keyword$250.cljs$core$IFn$_invoke$arity$1(self__.app)),"\""))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-9"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-4"},React.DOM.h3(null,"Time per Request"),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(tamarack.components.chart.component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$224,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,tamarack.pages.app_endpoint_overview.app_endpoint_chart_url(cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$250.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$265)], null)], null)))),React.DOM.div({"className": "col-md-4"},React.DOM.h3(null,"Requests per Minute"),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(tamarack.components.chart.component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$224,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,tamarack.pages.app_endpoint_overview.app_endpoint_chart_url(cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$250.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$266)], null)], null)))),React.DOM.div({"className": "col-md-4"},React.DOM.h3(null,"Errors per Request"),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(tamarack.components.chart.component,self__.app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$224,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,tamarack.pages.app_endpoint_overview.app_endpoint_chart_url(cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$250.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$267)], null)], null)))))),(function (){var attrs10498 = om.core.build.cljs$core$IFn$_invoke$arity$2(tamarack.components.app_navbar.component,self__.app);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs10498))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$162,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-md-3"], null)], null),attrs10498], 0))):{"className": "col-md-3"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs10498))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs10498)], null))));
})()));
});
tamarack.pages.app_endpoint_overview.t10489.prototype.om$core$IDisplayName$ = true;
tamarack.pages.app_endpoint_overview.t10489.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "AppEndpointOverview";
});
tamarack.pages.app_endpoint_overview.t10489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10491){var self__ = this;
var _10491__$1 = this;return self__.meta10490;
});
tamarack.pages.app_endpoint_overview.t10489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10491,meta10490__$1){var self__ = this;
var _10491__$1 = this;return (new tamarack.pages.app_endpoint_overview.t10489(self__.owner,self__.app,self__.page,meta10490__$1));
});
tamarack.pages.app_endpoint_overview.__GT_t10489 = (function __GT_t10489(owner__$1,app__$1,page__$1,meta10490){return (new tamarack.pages.app_endpoint_overview.t10489(owner__$1,app__$1,page__$1,meta10490));
});
}
return (new tamarack.pages.app_endpoint_overview.t10489(owner,app,page,null));
});
