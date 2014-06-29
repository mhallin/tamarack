// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('tamarack.state');
goog.require('tamarack.state');
goog.require('tamarack.history');
goog.require('tamarack.history');
goog.require('secretary.core');
goog.require('secretary.core');
goog.require('clojure.string');
goog.require('clojure.string');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),"#");
tamarack.routes.merge_query_params = (function merge_query_params(query_params,state){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786).cljs$core$IFn$_invoke$arity$1(query_params),"false"))
{var from = (new Date(new cljs.core.Keyword(null,"from","from",1017056028).cljs$core$IFn$_invoke$arity$1(query_params)));var to = (new Date(new cljs.core.Keyword(null,"to","to",1013907949).cljs$core$IFn$_invoke$arity$1(query_params)));var timeslice = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"window","window",4521119586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from,to], null),new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786),false], null);return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeslice","timeslice",1068799575),timeslice], null),state);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786).cljs$core$IFn$_invoke$arity$1(query_params),"true"))
{var window_size = parseInt(new cljs.core.Keyword(null,"last","last",1017218568).cljs$core$IFn$_invoke$arity$1(query_params),10);var window = tamarack.state.timeslice_ending_now.call(null,window_size);var timeslice = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"window","window",4521119586),window,new cljs.core.Keyword(null,"window-size","window-size",2882473776),window_size,new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786),true], null);return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"timeslice","timeslice",1068799575),timeslice], null),state);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return state;
} else
{return null;
}
}
}
});
var action__6931__auto___7250 = (function (params__6932__auto__){if(cljs.core.map_QMARK_.call(null,params__6932__auto__))
{var map__7248 = params__6932__auto__;var map__7248__$1 = ((cljs.core.seq_QMARK_.call(null,map__7248))?cljs.core.apply.call(null,cljs.core.hash_map,map__7248):map__7248);var query_params = cljs.core.get.call(null,map__7248__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));return tamarack.routes.merge_query_params.call(null,query_params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1017523735),new cljs.core.Keyword(null,"all-apps","all-apps",2765439632),new cljs.core.Keyword(null,"current-app","current-app",1613970239),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__6932__auto__))
{var vec__7249 = params__6932__auto__;var query_params = cljs.core.nth.call(null,vec__7249,0,null);return tamarack.routes.merge_query_params.call(null,query_params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1017523735),new cljs.core.Keyword(null,"all-apps","all-apps",2765439632),new cljs.core.Keyword(null,"current-app","current-app",1613970239),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__6931__auto___7250);
/**
* @param {...*} var_args
*/
tamarack.routes.all_apps = ((function (action__6931__auto___7250){
return (function() { 
var all_apps__delegate = function (args__6930__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__6930__auto__);
};
var all_apps = function (var_args){
var args__6930__auto__ = null;if (arguments.length > 0) {
  args__6930__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return all_apps__delegate.call(this,args__6930__auto__);};
all_apps.cljs$lang$maxFixedArity = 0;
all_apps.cljs$lang$applyTo = (function (arglist__7251){
var args__6930__auto__ = cljs.core.seq(arglist__7251);
return all_apps__delegate(args__6930__auto__);
});
all_apps.cljs$core$IFn$_invoke$arity$variadic = all_apps__delegate;
return all_apps;
})()
;})(action__6931__auto___7250))
;
var action__6931__auto___7254 = (function (params__6932__auto__){if(cljs.core.map_QMARK_.call(null,params__6932__auto__))
{var map__7252 = params__6932__auto__;var map__7252__$1 = ((cljs.core.seq_QMARK_.call(null,map__7252))?cljs.core.apply.call(null,cljs.core.hash_map,map__7252):map__7252);var query_params = cljs.core.get.call(null,map__7252__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var id = cljs.core.get.call(null,map__7252__$1,new cljs.core.Keyword(null,"id","id",1013907597));return tamarack.routes.merge_query_params.call(null,query_params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1017523735),new cljs.core.Keyword(null,"app-dashboard","app-dashboard",3494823258),new cljs.core.Keyword(null,"current-app","current-app",1613970239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-id","app-id",3897749433),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__6932__auto__))
{var vec__7253 = params__6932__auto__;var id = cljs.core.nth.call(null,vec__7253,0,null);var query_params = cljs.core.nth.call(null,vec__7253,1,null);return tamarack.routes.merge_query_params.call(null,query_params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"view","view",1017523735),new cljs.core.Keyword(null,"app-dashboard","app-dashboard",3494823258),new cljs.core.Keyword(null,"current-app","current-app",1613970239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-id","app-id",3897749433),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/applications/:id",action__6931__auto___7254);
/**
* @param {...*} var_args
*/
tamarack.routes.app_dashboard = ((function (action__6931__auto___7254){
return (function() { 
var app_dashboard__delegate = function (args__6930__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/applications/:id",args__6930__auto__);
};
var app_dashboard = function (var_args){
var args__6930__auto__ = null;if (arguments.length > 0) {
  args__6930__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return app_dashboard__delegate.call(this,args__6930__auto__);};
app_dashboard.cljs$lang$maxFixedArity = 0;
app_dashboard.cljs$lang$applyTo = (function (arglist__7255){
var args__6930__auto__ = cljs.core.seq(arglist__7255);
return app_dashboard__delegate(args__6930__auto__);
});
app_dashboard.cljs$core$IFn$_invoke$arity$variadic = app_dashboard__delegate;
return app_dashboard;
})()
;})(action__6931__auto___7254))
;
var action__6931__auto___7258 = (function (params__6932__auto__){if(cljs.core.map_QMARK_.call(null,params__6932__auto__))
{var map__7256 = params__6932__auto__;var map__7256__$1 = ((cljs.core.seq_QMARK_.call(null,map__7256))?cljs.core.apply.call(null,cljs.core.hash_map,map__7256):map__7256);var query_params = cljs.core.get.call(null,map__7256__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var endpoint = cljs.core.get.call(null,map__7256__$1,new cljs.core.Keyword(null,"endpoint","endpoint",2755006727));var id = cljs.core.get.call(null,map__7256__$1,new cljs.core.Keyword(null,"id","id",1013907597));return tamarack.routes.merge_query_params.call(null,query_params,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),new cljs.core.Keyword(null,"app-endpoint-overview","app-endpoint-overview",4188672375),new cljs.core.Keyword(null,"current-app","current-app",1613970239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-id","app-id",3897749433),id], null),new cljs.core.Keyword(null,"current-endpoint","current-endpoint",2158816987),endpoint], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__6932__auto__))
{var vec__7257 = params__6932__auto__;var id = cljs.core.nth.call(null,vec__7257,0,null);var endpoint = cljs.core.nth.call(null,vec__7257,1,null);var query_params = cljs.core.nth.call(null,vec__7257,2,null);return tamarack.routes.merge_query_params.call(null,query_params,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),new cljs.core.Keyword(null,"app-endpoint-overview","app-endpoint-overview",4188672375),new cljs.core.Keyword(null,"current-app","current-app",1613970239),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-id","app-id",3897749433),id], null),new cljs.core.Keyword(null,"current-endpoint","current-endpoint",2158816987),endpoint], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/applications/:id/:endpoint",action__6931__auto___7258);
/**
* @param {...*} var_args
*/
tamarack.routes.app_endpoint_overview = ((function (action__6931__auto___7258){
return (function() { 
var app_endpoint_overview__delegate = function (args__6930__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/applications/:id/:endpoint",args__6930__auto__);
};
var app_endpoint_overview = function (var_args){
var args__6930__auto__ = null;if (arguments.length > 0) {
  args__6930__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return app_endpoint_overview__delegate.call(this,args__6930__auto__);};
app_endpoint_overview.cljs$lang$maxFixedArity = 0;
app_endpoint_overview.cljs$lang$applyTo = (function (arglist__7259){
var args__6930__auto__ = cljs.core.seq(arglist__7259);
return app_endpoint_overview__delegate(args__6930__auto__);
});
app_endpoint_overview.cljs$core$IFn$_invoke$arity$variadic = app_endpoint_overview__delegate;
return app_endpoint_overview;
})()
;})(action__6931__auto___7258))
;
tamarack.routes.timeslice_query_params = (function timeslice_query_params(){var timeslice = new cljs.core.Keyword(null,"timeslice","timeslice",1068799575).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tamarack.state.app_state));var vec__7261 = new cljs.core.Keyword(null,"window","window",4521119586).cljs$core$IFn$_invoke$arity$1(timeslice);var from = cljs.core.nth.call(null,vec__7261,0,null);var to = cljs.core.nth.call(null,vec__7261,1,null);if(cljs.core.truth_(new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786).cljs$core$IFn$_invoke$arity$1(timeslice)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last","last",1017218568),new cljs.core.Keyword(null,"window-size","window-size",2882473776).cljs$core$IFn$_invoke$arity$1(timeslice),new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786),true], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1017056028),from.toISOString(),new cljs.core.Keyword(null,"to","to",1013907949),to.toISOString(),new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786),false], null);
}
});
tamarack.routes.remove_default_query_params = (function remove_default_query_params(params){var remove_tracking_now = (function remove_tracking_now(params__$1){if(cljs.core.truth_(new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786).cljs$core$IFn$_invoke$arity$1(params__$1)))
{return cljs.core.dissoc.call(null,params__$1,new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786));
} else
{return params__$1;
}
});
var remove_window_size = (function remove_window_size(params__$1){if(cljs.core._EQ_.call(null,tamarack.state.default_tracking_now_window_size,new cljs.core.Keyword(null,"last","last",1017218568).cljs$core$IFn$_invoke$arity$1(params__$1)))
{return cljs.core.dissoc.call(null,params__$1,new cljs.core.Keyword(null,"last","last",1017218568));
} else
{return params__$1;
}
});
var remove_conflicting = (function remove_conflicting(params__$1){if((new cljs.core.Keyword(null,"tracking-now","tracking-now",3423796786).cljs$core$IFn$_invoke$arity$1(params__$1) == null))
{return cljs.core.dissoc.call(null,params__$1,new cljs.core.Keyword(null,"from","from",1017056028),new cljs.core.Keyword(null,"to","to",1013907949));
} else
{return cljs.core.dissoc.call(null,params__$1,new cljs.core.Keyword(null,"last","last",1017218568));
}
});
return cljs.core.comp.call(null,remove_conflicting,remove_tracking_now,remove_window_size).call(null,params);
});
tamarack.routes.remove_route_defaults = (function remove_route_defaults(route){return cljs.core.update_in.call(null,route,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757)], null),tamarack.routes.remove_default_query_params);
});
tamarack.routes.cleanup_query_params = (function cleanup_query_params(route){if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"query-params","query-params",1080249757).cljs$core$IFn$_invoke$arity$1(route)))
{return cljs.core.dissoc.call(null,route,new cljs.core.Keyword(null,"query-params","query-params",1080249757));
} else
{return route;
}
});
tamarack.routes.url_of = (function() {
var url_of = null;
var url_of__1 = (function (route){return url_of.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
});
var url_of__2 = (function (route,arg){return route.call(null,tamarack.routes.cleanup_query_params.call(null,tamarack.routes.remove_route_defaults.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),tamarack.routes.timeslice_query_params.call(null)], null),arg))));
});
url_of = function(route,arg){
switch(arguments.length){
case 1:
return url_of__1.call(this,route);
case 2:
return url_of__2.call(this,route,arg);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_of.cljs$core$IFn$_invoke$arity$1 = url_of__1;
url_of.cljs$core$IFn$_invoke$arity$2 = url_of__2;
return url_of;
})()
;
tamarack.routes.navigate_to = (function() {
var navigate_to = null;
var navigate_to__1 = (function (route){return navigate_to.call(null,route,cljs.core.PersistentArrayMap.EMPTY);
});
var navigate_to__2 = (function (route,arg){var url = tamarack.routes.url_of.call(null,route,arg);return tamarack.history.history.setToken(cljs.core.subs.call(null,url,1));
});
navigate_to = function(route,arg){
switch(arguments.length){
case 1:
return navigate_to__1.call(this,route);
case 2:
return navigate_to__2.call(this,route,arg);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
navigate_to.cljs$core$IFn$_invoke$arity$1 = navigate_to__1;
navigate_to.cljs$core$IFn$_invoke$arity$2 = navigate_to__2;
return navigate_to;
})()
;
tamarack.routes.refresh_timeslice = (function refresh_timeslice(){var token = tamarack.history.history.getToken();var qpos = token.indexOf("?");var vec__7263 = ((cljs.core._EQ_.call(null,qpos,-1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,""], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,token,0,qpos),cljs.core.subs.call(null,token,(qpos + 1))], null));var path = cljs.core.nth.call(null,vec__7263,0,null);var query_string = cljs.core.nth.call(null,vec__7263,1,null);var query_params = secretary.core.decode_query_params.call(null,query_string);var new_query_params = tamarack.routes.remove_default_query_params.call(null,cljs.core.merge.call(null,query_params,tamarack.routes.timeslice_query_params.call(null)));var new_query_string = secretary.core.encode_query_params.call(null,new_query_params);var token__$1 = ((cljs.core.empty_QMARK_.call(null,new_query_string))?path:clojure.string.join.call(null,"?",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,new_query_string], null)));return tamarack.history.history.setToken(token__$1);
});

//# sourceMappingURL=routes.js.map