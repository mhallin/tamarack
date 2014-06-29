// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.pages.main');
goog.require('cljs.core');
goog.require('tamarack.pages.all_apps');
goog.require('tamarack.pages.app_endpoint_overview');
goog.require('tamarack.pages.app_endpoint_overview');
goog.require('tamarack.pages.all_apps');
goog.require('sablono.core');
goog.require('tamarack.state');
goog.require('sablono.core');
goog.require('tamarack.state');
goog.require('tamarack.pages.app_dashboard');
goog.require('om.core');
goog.require('om.core');
goog.require('tamarack.pages.app_dashboard');
tamarack.pages.main.page = (function page(app,owner){if(typeof tamarack.pages.main.t10505 !== 'undefined')
{} else
{
/**
* @constructor
*/
tamarack.pages.main.t10505 = (function (owner,app,page,meta10506){
this.owner = owner;
this.app = app;
this.page = page;
this.meta10506 = meta10506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
tamarack.pages.main.t10505.cljs$lang$type = true;
tamarack.pages.main.t10505.cljs$lang$ctorStr = "tamarack.pages.main/t10505";
tamarack.pages.main.t10505.cljs$lang$ctorPrWriter = (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write(writer__4144__auto__,"tamarack.pages.main/t10505");
});
tamarack.pages.main.t10505.prototype.om$core$IRender$ = true;
tamarack.pages.main.t10505.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var pred__10508 = cljs.core._EQ_;var expr__10509 = cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(self__.app);if(cljs.core.truth_((pred__10508.cljs$core$IFn$_invoke$arity$2 ? pred__10508.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$251,expr__10509) : pred__10508.call(null,cljs.core.constant$keyword$251,expr__10509))))
{return om.core.build.cljs$core$IFn$_invoke$arity$2(tamarack.pages.app_endpoint_overview.page,self__.app);
} else
{if(cljs.core.truth_((pred__10508.cljs$core$IFn$_invoke$arity$2 ? pred__10508.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$248,expr__10509) : pred__10508.call(null,cljs.core.constant$keyword$248,expr__10509))))
{return om.core.build.cljs$core$IFn$_invoke$arity$2(tamarack.pages.app_dashboard.page,self__.app);
} else
{if(cljs.core.truth_((pred__10508.cljs$core$IFn$_invoke$arity$2 ? pred__10508.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$247,expr__10509) : pred__10508.call(null,cljs.core.constant$keyword$247,expr__10509))))
{return om.core.build.cljs$core$IFn$_invoke$arity$2(tamarack.pages.all_apps.page,self__.app);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__10509))));
}
}
}
});
tamarack.pages.main.t10505.prototype.om$core$IWillMount$ = true;
tamarack.pages.main.t10505.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return window.setInterval(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(tamarack.state.update_timeslice,cljs.core.constant$keyword$234.cljs$core$IFn$_invoke$arity$1(self__.app)),1000);
});
tamarack.pages.main.t10505.prototype.om$core$IDisplayName$ = true;
tamarack.pages.main.t10505.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "Main";
});
tamarack.pages.main.t10505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10507){var self__ = this;
var _10507__$1 = this;return self__.meta10506;
});
tamarack.pages.main.t10505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10507,meta10506__$1){var self__ = this;
var _10507__$1 = this;return (new tamarack.pages.main.t10505(self__.owner,self__.app,self__.page,meta10506__$1));
});
tamarack.pages.main.__GT_t10505 = (function __GT_t10505(owner__$1,app__$1,page__$1,meta10506){return (new tamarack.pages.main.t10505(owner__$1,app__$1,page__$1,meta10506));
});
}
return (new tamarack.pages.main.t10505(owner,app,page,null));
});
