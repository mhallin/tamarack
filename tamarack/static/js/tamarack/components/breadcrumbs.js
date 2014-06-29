// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.components.breadcrumbs');
goog.require('cljs.core');
goog.require('tamarack.xhr');
goog.require('tamarack.xhr');
goog.require('tamarack.routes');
goog.require('tamarack.routes');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
tamarack.components.breadcrumbs.make_location_list = (function make_location_list(app){var pred__6983 = cljs.core._EQ_;var expr__6984 = new cljs.core.Keyword(null,"view","view",1017523735).cljs$core$IFn$_invoke$arity$1(app);if(cljs.core.truth_(pred__6983.call(null,new cljs.core.Keyword(null,"app-endpoint-overview","app-endpoint-overview",4188672375),expr__6984)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),"Applications",new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tamarack.routes.all_apps], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"display-name","display-name",2582814760).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(app)),new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tamarack.routes.app_dashboard,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"app-id","app-id",3897749433).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(app))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"current-endpoint","current-endpoint",2158816987).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tamarack.routes.app_endpoint_overview,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"app-id","app-id",3897749433).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(app)),new cljs.core.Keyword(null,"endpoint","endpoint",2755006727),new cljs.core.Keyword(null,"current-endpoint","current-endpoint",2158816987).cljs$core$IFn$_invoke$arity$1(app)], null)], null)], null)], null);
} else
{if(cljs.core.truth_(pred__6983.call(null,new cljs.core.Keyword(null,"app-dashboard","app-dashboard",3494823258),expr__6984)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),"Applications",new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tamarack.routes.all_apps], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"display-name","display-name",2582814760).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(app)),new cljs.core.Keyword(null,"url","url",1014020321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tamarack.routes.app_dashboard,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"app-id","app-id",3897749433).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(app))], null)], null)], null)], null);
} else
{if(cljs.core.truth_(pred__6983.call(null,new cljs.core.Keyword(null,"all-apps","all-apps",2765439632),expr__6984)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),"Applications",new cljs.core.Keyword(null,"url","url",1014020321),tamarack.routes.all_apps.call(null)], null)], null);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6984))));
}
}
}
});
tamarack.components.breadcrumbs.goto_location = (function goto_location(url,e){e.preventDefault();
return cljs.core.apply.call(null,tamarack.routes.navigate_to,url);
});
tamarack.components.breadcrumbs.fetch_app_name_if_missing = (function fetch_app_name_if_missing(app){if(cljs.core.truth_((function (){var and__3564__auto__ = new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(app);if(cljs.core.truth_(and__3564__auto__))
{return cljs.core.not.call(null,new cljs.core.Keyword(null,"display-name","display-name",2582814760).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(app)));
} else
{return and__3564__auto__;
}
})()))
{return tamarack.xhr.send_edn.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),("/explorer-api/v1/applications/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"app-id","app-id",3897749433).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(app)))),new cljs.core.Keyword(null,"on-complete","on-complete",2943599833),(function (res){return om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"current-app","current-app",1613970239),cljs.core.partial.call(null,cljs.core.merge,res));
})], null));
} else
{return null;
}
});
tamarack.components.breadcrumbs.component = (function component(app,owner){if(typeof tamarack.components.breadcrumbs.t6991 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.components.breadcrumbs.t6991 = (function (owner,app,component,meta6992){
this.owner = owner;
this.app = app;
this.component = component;
this.meta6992 = meta6992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.components.breadcrumbs.t6991.cljs$lang$type = true;
tamarack.components.breadcrumbs.t6991.cljs$lang$ctorStr = "tamarack.components.breadcrumbs/t6991";
tamarack.components.breadcrumbs.t6991.cljs$lang$ctorPrWriter = (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write.call(null,writer__4144__auto__,"tamarack.components.breadcrumbs/t6991");
});
tamarack.components.breadcrumbs.t6991.prototype.om$core$IRender$ = true;
tamarack.components.breadcrumbs.t6991.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var location_list = tamarack.components.breadcrumbs.make_location_list.call(null,self__.app);var make_location_elem = ((function (location_list,___$1){
return (function (i,loc){var is_active = cljs.core._EQ_.call(null,(i + 1),cljs.core.count.call(null,location_list));var map__6994 = loc;var map__6994__$1 = ((cljs.core.seq_QMARK_.call(null,map__6994))?cljs.core.apply.call(null,cljs.core.hash_map,map__6994):map__6994);var url = cljs.core.get.call(null,map__6994__$1,new cljs.core.Keyword(null,"url","url",1014020321));var title = cljs.core.get.call(null,map__6994__$1,new cljs.core.Keyword(null,"title","title",1124275658));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),((is_active)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"active"], null):null),((is_active)?title:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"onClick","onClick",3956969051),cljs.core.partial.call(null,tamarack.components.breadcrumbs.goto_location,url)], null),title], null))], null);
});})(location_list,___$1))
;var attrs6995 = cljs.core.map_indexed.call(null,make_location_elem,location_list);return cljs.core.apply.call(null,React.DOM.ol,((cljs.core.map_QMARK_.call(null,attrs6995))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["breadcrumb"], null)], null),attrs6995)):{"className": "breadcrumb"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6995))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6995)], null))));
});
tamarack.components.breadcrumbs.t6991.prototype.om$core$IWillUpdate$ = true;
tamarack.components.breadcrumbs.t6991.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,next_props,___$1){var self__ = this;
var ___$2 = this;return tamarack.components.breadcrumbs.fetch_app_name_if_missing.call(null,next_props);
});
tamarack.components.breadcrumbs.t6991.prototype.om$core$IWillMount$ = true;
tamarack.components.breadcrumbs.t6991.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return tamarack.components.breadcrumbs.fetch_app_name_if_missing.call(null,self__.app);
});
tamarack.components.breadcrumbs.t6991.prototype.om$core$IDisplayName$ = true;
tamarack.components.breadcrumbs.t6991.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "Breadcrumbs";
});
tamarack.components.breadcrumbs.t6991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6993){var self__ = this;
var _6993__$1 = this;return self__.meta6992;
});
tamarack.components.breadcrumbs.t6991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6993,meta6992__$1){var self__ = this;
var _6993__$1 = this;return (new tamarack.components.breadcrumbs.t6991(self__.owner,self__.app,self__.component,meta6992__$1));
});
tamarack.components.breadcrumbs.__GT_t6991 = (function __GT_t6991(owner__$1,app__$1,component__$1,meta6992){return (new tamarack.components.breadcrumbs.t6991(owner__$1,app__$1,component__$1,meta6992));
});
}
return (new tamarack.components.breadcrumbs.t6991(owner,app,component,null));
});

//# sourceMappingURL=breadcrumbs.js.map