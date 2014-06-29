// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.xhr');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('cljs.reader');
tamarack.xhr.meths = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$190,"GET",cljs.core.constant$keyword$195,"PUT",cljs.core.constant$keyword$191,"POST",cljs.core.constant$keyword$196,"DELETE"], null);
tamarack.xhr.send_edn = (function send_edn(p__8314){var map__8316 = p__8314;var map__8316__$1 = ((cljs.core.seq_QMARK_(map__8316))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8316):map__8316);var on_complete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8316__$1,cljs.core.constant$keyword$197);var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8316__$1,cljs.core.constant$keyword$198);var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8316__$1,cljs.core.constant$keyword$199);var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8316__$1,cljs.core.constant$keyword$193);var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__8316,map__8316__$1,on_complete,data,url,method){
return (function (e){return (on_complete.cljs$core$IFn$_invoke$arity$1 ? on_complete.cljs$core$IFn$_invoke$arity$1(cljs.reader.read_string(xhr.getResponseText())) : on_complete.call(null,cljs.reader.read_string(xhr.getResponseText())));
});})(xhr,map__8316,map__8316__$1,on_complete,data,url,method))
);
return xhr.send(url,(tamarack.xhr.meths.cljs$core$IFn$_invoke$arity$1 ? tamarack.xhr.meths.cljs$core$IFn$_invoke$arity$1(method) : tamarack.xhr.meths.call(null,method)),(cljs.core.truth_(data)?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data], 0)):null),{"Accept": "application/edn"});
});
