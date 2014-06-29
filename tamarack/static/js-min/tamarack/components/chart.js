// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.components.chart');
goog.require('cljs.core');
goog.require('tamarack.xhr');
goog.require('sablono.core');
goog.require('tamarack.util');
goog.require('tamarack.chart');
goog.require('sablono.core');
goog.require('tamarack.util');
goog.require('tamarack.xhr');
goog.require('tamarack.canvas');
goog.require('tamarack.canvas');
goog.require('om.core');
goog.require('om.core');
goog.require('tamarack.chart');
tamarack.components.chart.draw_my_chart = (function draw_my_chart(app,owner){var vec__10261 = cljs.core.constant$keyword$157.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(app));var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10261,0,null);var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10261,1,null);var canvas = owner.getDOMNode();var canvas_width = canvas.clientWidth;var canvas_height = canvas.clientHeight;var ctx = canvas.getContext("2d");var scale_factor = (function (){var or__3576__auto__ = window.devicePixelRatio;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return 1;
}
})();var _STAR_ctx_STAR_10262 = tamarack.canvas._STAR_ctx_STAR_;try{tamarack.canvas._STAR_ctx_STAR_ = canvas.getContext("2d");
tamarack.canvas._STAR_ctx_STAR_.save();
tamarack.canvas._STAR_ctx_STAR_.scale(scale_factor,scale_factor);
tamarack.chart.draw_data(ctx,canvas_width,canvas_height,om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$198),from,to);
ctx.restore();
return tamarack.canvas._STAR_ctx_STAR_.restore();
}finally {tamarack.canvas._STAR_ctx_STAR_ = _STAR_ctx_STAR_10262;
}});
tamarack.components.chart.fetch_data = (function fetch_data(app,owner,data_url){var vec__10264 = cljs.core.constant$keyword$157.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(app));var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10264,0,null);var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10264,1,null);var url = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_url)+"?from="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_iso(from))+"&to="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_iso(to)));return tamarack.xhr.send_edn(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$193,cljs.core.constant$keyword$190,cljs.core.constant$keyword$199,url,cljs.core.constant$keyword$197,((function (vec__10264,from,to,url){
return (function (res){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$198,res);
});})(vec__10264,from,to,url))
], null));
});
tamarack.components.chart.refresh_canvas_size = (function refresh_canvas_size(owner){var canvas = owner.getDOMNode();var parent = canvas.parentNode;var vec__10266 = tamarack.util.elem_content_size(parent);var elem_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10266,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10266,1,null);var elem_height = (elem_width * 0.6);var scale_factor = (function (){var or__3576__auto__ = window.devicePixelRatio;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return 1;
}
})();canvas.setAttribute("style",("width: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(elem_width)+"px; height: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(elem_height)+"px; "));
canvas.setAttribute("width",(scale_factor * elem_width));
return canvas.setAttribute("height",(scale_factor * elem_height));
});
tamarack.components.chart.component = (function component(app,owner,p__10267){var map__10274 = p__10267;var map__10274__$1 = ((cljs.core.seq_QMARK_(map__10274))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10274):map__10274);var opts = map__10274__$1;var data_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10274__$1,cljs.core.constant$keyword$259);if(typeof tamarack.components.chart.t10275 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.components.chart.t10275 = (function (data_url,opts,map__10274,p__10267,owner,app,component,meta10276){
this.data_url = data_url;
this.opts = opts;
this.map__10274 = map__10274;
this.p__10267 = p__10267;
this.owner = owner;
this.app = app;
this.component = component;
this.meta10276 = meta10276;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.components.chart.t10275.cljs$lang$type = true;
tamarack.components.chart.t10275.cljs$lang$ctorStr = "tamarack.components.chart/t10275";
tamarack.components.chart.t10275.cljs$lang$ctorPrWriter = ((function (map__10274,map__10274__$1,opts,data_url){
return (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write(writer__4144__auto__,"tamarack.components.chart/t10275");
});})(map__10274,map__10274__$1,opts,data_url))
;
tamarack.components.chart.t10275.prototype.om$core$IDidUpdate$ = true;
tamarack.components.chart.t10275.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__10274,map__10274__$1,opts,data_url){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return tamarack.components.chart.draw_my_chart(self__.app,self__.owner);
});})(map__10274,map__10274__$1,opts,data_url))
;
tamarack.components.chart.t10275.prototype.om$core$IDidMount$ = true;
tamarack.components.chart.t10275.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__10274,map__10274__$1,opts,data_url){
return (function (_){var self__ = this;
var ___$1 = this;tamarack.components.chart.refresh_canvas_size(self__.owner);
return tamarack.components.chart.draw_my_chart(self__.app,self__.owner);
});})(map__10274,map__10274__$1,opts,data_url))
;
tamarack.components.chart.t10275.prototype.om$core$IRender$ = true;
tamarack.components.chart.t10275.prototype.om$core$IRender$render$arity$1 = ((function (map__10274,map__10274__$1,opts,data_url){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.canvas(null);
});})(map__10274,map__10274__$1,opts,data_url))
;
tamarack.components.chart.t10275.prototype.om$core$IWillUpdate$ = true;
tamarack.components.chart.t10275.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__10274,map__10274__$1,opts,data_url){
return (function (_,next_props,next_state){var self__ = this;
var ___$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(next_props),cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(self__.app)))
{return null;
} else
{return tamarack.components.chart.fetch_data(next_props,self__.owner,self__.data_url);
}
});})(map__10274,map__10274__$1,opts,data_url))
;
tamarack.components.chart.t10275.prototype.om$core$IWillMount$ = true;
tamarack.components.chart.t10275.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__10274,map__10274__$1,opts,data_url){
return (function (_){var self__ = this;
var ___$1 = this;return tamarack.components.chart.fetch_data(self__.app,self__.owner,self__.data_url);
});})(map__10274,map__10274__$1,opts,data_url))
;
tamarack.components.chart.t10275.prototype.om$core$IDisplayName$ = true;
tamarack.components.chart.t10275.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__10274,map__10274__$1,opts,data_url){
return (function (_){var self__ = this;
var ___$1 = this;return "Chart";
});})(map__10274,map__10274__$1,opts,data_url))
;
tamarack.components.chart.t10275.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10274,map__10274__$1,opts,data_url){
return (function (_10277){var self__ = this;
var _10277__$1 = this;return self__.meta10276;
});})(map__10274,map__10274__$1,opts,data_url))
;
tamarack.components.chart.t10275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10274,map__10274__$1,opts,data_url){
return (function (_10277,meta10276__$1){var self__ = this;
var _10277__$1 = this;return (new tamarack.components.chart.t10275(self__.data_url,self__.opts,self__.map__10274,self__.p__10267,self__.owner,self__.app,self__.component,meta10276__$1));
});})(map__10274,map__10274__$1,opts,data_url))
;
tamarack.components.chart.__GT_t10275 = ((function (map__10274,map__10274__$1,opts,data_url){
return (function __GT_t10275(data_url__$1,opts__$1,map__10274__$2,p__10267__$1,owner__$1,app__$1,component__$1,meta10276){return (new tamarack.components.chart.t10275(data_url__$1,opts__$1,map__10274__$2,p__10267__$1,owner__$1,app__$1,component__$1,meta10276));
});})(map__10274,map__10274__$1,opts,data_url))
;
}
return (new tamarack.components.chart.t10275(data_url,opts,map__10274__$1,p__10267,owner,app,component,null));
});
