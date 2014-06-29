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
tamarack.components.chart.draw_my_chart = (function draw_my_chart(app,owner){var vec__6998 = new cljs.core.Keyword(null,"window","window",4521119586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeslice","timeslice",1068799575).cljs$core$IFn$_invoke$arity$1(app));var from = cljs.core.nth.call(null,vec__6998,0,null);var to = cljs.core.nth.call(null,vec__6998,1,null);var canvas = owner.getDOMNode();var canvas_width = canvas.clientWidth;var canvas_height = canvas.clientHeight;var ctx = canvas.getContext("2d");var scale_factor = (function (){var or__3576__auto__ = window.devicePixelRatio;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return 1;
}
})();var _STAR_ctx_STAR_6999 = tamarack.canvas._STAR_ctx_STAR_;try{tamarack.canvas._STAR_ctx_STAR_ = canvas.getContext("2d");
tamarack.canvas._STAR_ctx_STAR_.save();
tamarack.canvas._STAR_ctx_STAR_.scale(scale_factor,scale_factor);
tamarack.chart.draw_data.call(null,ctx,canvas_width,canvas_height,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"data","data",1016980252)),from,to);
ctx.restore();
return tamarack.canvas._STAR_ctx_STAR_.restore();
}finally {tamarack.canvas._STAR_ctx_STAR_ = _STAR_ctx_STAR_6999;
}});
tamarack.components.chart.fetch_data = (function fetch_data(app,owner,data_url){var vec__7001 = new cljs.core.Keyword(null,"window","window",4521119586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"timeslice","timeslice",1068799575).cljs$core$IFn$_invoke$arity$1(app));var from = cljs.core.nth.call(null,vec__7001,0,null);var to = cljs.core.nth.call(null,vec__7001,1,null);var url = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_url)+"?from="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_iso.call(null,from))+"&to="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_iso.call(null,to)));return tamarack.xhr.send_edn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),url,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),((function (vec__7001,from,to,url){
return (function (res){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"data","data",1016980252),res);
});})(vec__7001,from,to,url))
], null));
});
tamarack.components.chart.refresh_canvas_size = (function refresh_canvas_size(owner){var canvas = owner.getDOMNode();var parent = canvas.parentNode;var vec__7003 = tamarack.util.elem_content_size.call(null,parent);var elem_width = cljs.core.nth.call(null,vec__7003,0,null);var _ = cljs.core.nth.call(null,vec__7003,1,null);var elem_height = (elem_width * 0.6);var scale_factor = (function (){var or__3576__auto__ = window.devicePixelRatio;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return 1;
}
})();canvas.setAttribute("style",("width: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(elem_width)+"px; height: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(elem_height)+"px; "));
canvas.setAttribute("width",(scale_factor * elem_width));
return canvas.setAttribute("height",(scale_factor * elem_height));
});
tamarack.components.chart.component = (function component(app,owner,p__7004){var map__7011 = p__7004;var map__7011__$1 = ((cljs.core.seq_QMARK_.call(null,map__7011))?cljs.core.apply.call(null,cljs.core.hash_map,map__7011):map__7011);var opts = map__7011__$1;var data_url = cljs.core.get.call(null,map__7011__$1,new cljs.core.Keyword(null,"data-url","data-url",2801809470));if(typeof tamarack.components.chart.t7012 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.components.chart.t7012 = (function (data_url,opts,map__7011,p__7004,owner,app,component,meta7013){
this.data_url = data_url;
this.opts = opts;
this.map__7011 = map__7011;
this.p__7004 = p__7004;
this.owner = owner;
this.app = app;
this.component = component;
this.meta7013 = meta7013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.components.chart.t7012.cljs$lang$type = true;
tamarack.components.chart.t7012.cljs$lang$ctorStr = "tamarack.components.chart/t7012";
tamarack.components.chart.t7012.cljs$lang$ctorPrWriter = ((function (map__7011,map__7011__$1,opts,data_url){
return (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write.call(null,writer__4144__auto__,"tamarack.components.chart/t7012");
});})(map__7011,map__7011__$1,opts,data_url))
;
tamarack.components.chart.t7012.prototype.om$core$IDidUpdate$ = true;
tamarack.components.chart.t7012.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__7011,map__7011__$1,opts,data_url){
return (function (_,___$1,___$2){var self__ = this;
var ___$3 = this;return tamarack.components.chart.draw_my_chart.call(null,self__.app,self__.owner);
});})(map__7011,map__7011__$1,opts,data_url))
;
tamarack.components.chart.t7012.prototype.om$core$IDidMount$ = true;
tamarack.components.chart.t7012.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__7011,map__7011__$1,opts,data_url){
return (function (_){var self__ = this;
var ___$1 = this;tamarack.components.chart.refresh_canvas_size.call(null,self__.owner);
return tamarack.components.chart.draw_my_chart.call(null,self__.app,self__.owner);
});})(map__7011,map__7011__$1,opts,data_url))
;
tamarack.components.chart.t7012.prototype.om$core$IRender$ = true;
tamarack.components.chart.t7012.prototype.om$core$IRender$render$arity$1 = ((function (map__7011,map__7011__$1,opts,data_url){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.canvas(null);
});})(map__7011,map__7011__$1,opts,data_url))
;
tamarack.components.chart.t7012.prototype.om$core$IWillUpdate$ = true;
tamarack.components.chart.t7012.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__7011,map__7011__$1,opts,data_url){
return (function (_,next_props,next_state){var self__ = this;
var ___$1 = this;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"timeslice","timeslice",1068799575).cljs$core$IFn$_invoke$arity$1(next_props),new cljs.core.Keyword(null,"timeslice","timeslice",1068799575).cljs$core$IFn$_invoke$arity$1(self__.app)))
{return null;
} else
{return tamarack.components.chart.fetch_data.call(null,next_props,self__.owner,self__.data_url);
}
});})(map__7011,map__7011__$1,opts,data_url))
;
tamarack.components.chart.t7012.prototype.om$core$IWillMount$ = true;
tamarack.components.chart.t7012.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__7011,map__7011__$1,opts,data_url){
return (function (_){var self__ = this;
var ___$1 = this;return tamarack.components.chart.fetch_data.call(null,self__.app,self__.owner,self__.data_url);
});})(map__7011,map__7011__$1,opts,data_url))
;
tamarack.components.chart.t7012.prototype.om$core$IDisplayName$ = true;
tamarack.components.chart.t7012.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__7011,map__7011__$1,opts,data_url){
return (function (_){var self__ = this;
var ___$1 = this;return "Chart";
});})(map__7011,map__7011__$1,opts,data_url))
;
tamarack.components.chart.t7012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__7011,map__7011__$1,opts,data_url){
return (function (_7014){var self__ = this;
var _7014__$1 = this;return self__.meta7013;
});})(map__7011,map__7011__$1,opts,data_url))
;
tamarack.components.chart.t7012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__7011,map__7011__$1,opts,data_url){
return (function (_7014,meta7013__$1){var self__ = this;
var _7014__$1 = this;return (new tamarack.components.chart.t7012(self__.data_url,self__.opts,self__.map__7011,self__.p__7004,self__.owner,self__.app,self__.component,meta7013__$1));
});})(map__7011,map__7011__$1,opts,data_url))
;
tamarack.components.chart.__GT_t7012 = ((function (map__7011,map__7011__$1,opts,data_url){
return (function __GT_t7012(data_url__$1,opts__$1,map__7011__$2,p__7004__$1,owner__$1,app__$1,component__$1,meta7013){return (new tamarack.components.chart.t7012(data_url__$1,opts__$1,map__7011__$2,p__7004__$1,owner__$1,app__$1,component__$1,meta7013));
});})(map__7011,map__7011__$1,opts,data_url))
;
}
return (new tamarack.components.chart.t7012(data_url,opts,map__7011__$1,p__7004,owner,app,component,null));
});

//# sourceMappingURL=chart.js.map