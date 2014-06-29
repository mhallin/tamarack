// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.components.app_navbar');
goog.require('cljs.core');
goog.require('tamarack.routes');
goog.require('tamarack.routes');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
tamarack.components.app_navbar.sidebar_links = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-dashboard","app-dashboard",3494823258),"Overview",tamarack.routes.app_dashboard], null)], null);
tamarack.components.app_navbar.link_click_handler = (function link_click_handler(app,route,e){e.preventDefault();
return tamarack.routes.navigate_to.call(null,tamarack.routes.app_dashboard,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)))], null));
});
tamarack.components.app_navbar.render_sidebar_link = (function render_sidebar_link(app,p__6967){var vec__6969 = p__6967;var view = cljs.core.nth.call(null,vec__6969,0,null);var label = cljs.core.nth.call(null,vec__6969,1,null);var route = cljs.core.nth.call(null,vec__6969,2,null);var url = tamarack.routes.url_of.call(null,tamarack.routes.app_dashboard,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(app))], null));var handler = cljs.core.partial.call(null,tamarack.components.app_navbar.link_click_handler,app,route);var active_class = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"view","view",1017523735).cljs$core$IFn$_invoke$arity$1(app),view))?"active":"");return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.list-group-item","a.list-group-item",4173634069),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",1017115293),url,new cljs.core.Keyword(null,"onClick","onClick",3956969051),handler,new cljs.core.Keyword(null,"class","class",1108647146),active_class], null),label], null);
});
tamarack.components.app_navbar.component = (function component(app,owner){if(typeof tamarack.components.app_navbar.t6975 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.components.app_navbar.t6975 = (function (owner,app,component,meta6976){
this.owner = owner;
this.app = app;
this.component = component;
this.meta6976 = meta6976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.components.app_navbar.t6975.cljs$lang$type = true;
tamarack.components.app_navbar.t6975.cljs$lang$ctorStr = "tamarack.components.app-navbar/t6975";
tamarack.components.app_navbar.t6975.cljs$lang$ctorPrWriter = (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write.call(null,writer__4144__auto__,"tamarack.components.app-navbar/t6975");
});
tamarack.components.app_navbar.t6975.prototype.om$core$IRender$ = true;
tamarack.components.app_navbar.t6975.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "panel panel-default"},(function (){var attrs6978 = new cljs.core.Keyword(null,"display-name","display-name",2582814760).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"current-app","current-app",1613970239).cljs$core$IFn$_invoke$arity$1(self__.app));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs6978))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-heading"], null)], null),attrs6978)):{"className": "panel-heading"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6978))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6978)], null))));
})(),(function (){var attrs6979 = cljs.core.map.call(null,cljs.core.partial.call(null,tamarack.components.app_navbar.render_sidebar_link,self__.app),tamarack.components.app_navbar.sidebar_links);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs6979))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list-group"], null)], null),attrs6979)):{"className": "list-group"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs6979))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs6979)], null))));
})());
});
tamarack.components.app_navbar.t6975.prototype.om$core$IDisplayName$ = true;
tamarack.components.app_navbar.t6975.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "AppNavbar";
});
tamarack.components.app_navbar.t6975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6977){var self__ = this;
var _6977__$1 = this;return self__.meta6976;
});
tamarack.components.app_navbar.t6975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6977,meta6976__$1){var self__ = this;
var _6977__$1 = this;return (new tamarack.components.app_navbar.t6975(self__.owner,self__.app,self__.component,meta6976__$1));
});
tamarack.components.app_navbar.__GT_t6975 = (function __GT_t6975(owner__$1,app__$1,component__$1,meta6976){return (new tamarack.components.app_navbar.t6975(owner__$1,app__$1,component__$1,meta6976));
});
}
return (new tamarack.components.app_navbar.t6975(owner,app,component,null));
});

//# sourceMappingURL=app_navbar.js.map