// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.components.app_navbar');
goog.require('cljs.core');
goog.require('tamarack.routes');
goog.require('tamarack.routes');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
tamarack.components.app_navbar.sidebar_links = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$248,"Overview",tamarack.routes.app_dashboard], null)], null);
tamarack.components.app_navbar.link_click_handler = (function link_click_handler(app,route,e){e.preventDefault();
return tamarack.routes.navigate_to.cljs$core$IFn$_invoke$arity$2(tamarack.routes.app_dashboard,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$168,cljs.core.constant$keyword$182.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)))], null));
});
tamarack.components.app_navbar.render_sidebar_link = (function render_sidebar_link(app,p__10230){var vec__10232 = p__10230;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10232,0,null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10232,1,null);var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10232,2,null);var url = tamarack.routes.url_of.cljs$core$IFn$_invoke$arity$2(tamarack.routes.app_dashboard,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$168,cljs.core.constant$keyword$182.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(app))], null));var handler = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(tamarack.components.app_navbar.link_click_handler,app,route);var active_class = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(app),view))?"active":"");return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$255,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$173,url,cljs.core.constant$keyword$256,handler,cljs.core.constant$keyword$162,active_class], null),label], null);
});
tamarack.components.app_navbar.component = (function component(app,owner){if(typeof tamarack.components.app_navbar.t10238 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.components.app_navbar.t10238 = (function (owner,app,component,meta10239){
this.owner = owner;
this.app = app;
this.component = component;
this.meta10239 = meta10239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.components.app_navbar.t10238.cljs$lang$type = true;
tamarack.components.app_navbar.t10238.cljs$lang$ctorStr = "tamarack.components.app-navbar/t10238";
tamarack.components.app_navbar.t10238.cljs$lang$ctorPrWriter = (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write(writer__4144__auto__,"tamarack.components.app-navbar/t10238");
});
tamarack.components.app_navbar.t10238.prototype.om$core$IRender$ = true;
tamarack.components.app_navbar.t10238.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "panel panel-default"},(function (){var attrs10241 = cljs.core.constant$keyword$257.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(self__.app));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs10241))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$162,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["panel-heading"], null)], null),attrs10241], 0))):{"className": "panel-heading"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs10241))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs10241)], null))));
})(),(function (){var attrs10242 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tamarack.components.app_navbar.render_sidebar_link,self__.app),tamarack.components.app_navbar.sidebar_links);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs10242))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$162,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["list-group"], null)], null),attrs10242], 0))):{"className": "list-group"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs10242))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs10242)], null))));
})());
});
tamarack.components.app_navbar.t10238.prototype.om$core$IDisplayName$ = true;
tamarack.components.app_navbar.t10238.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "AppNavbar";
});
tamarack.components.app_navbar.t10238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10240){var self__ = this;
var _10240__$1 = this;return self__.meta10239;
});
tamarack.components.app_navbar.t10238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10240,meta10239__$1){var self__ = this;
var _10240__$1 = this;return (new tamarack.components.app_navbar.t10238(self__.owner,self__.app,self__.component,meta10239__$1));
});
tamarack.components.app_navbar.__GT_t10238 = (function __GT_t10238(owner__$1,app__$1,component__$1,meta10239){return (new tamarack.components.app_navbar.t10238(owner__$1,app__$1,component__$1,meta10239));
});
}
return (new tamarack.components.app_navbar.t10238(owner,app,component,null));
});
