// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.xhr');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cljs.reader');
goog.require('cljs.reader');
tamarack.xhr.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1014006472),"GET",new cljs.core.Keyword(null,"put","put",1014015617),"PUT",new cljs.core.Keyword(null,"post","post",1017351186),"POST",new cljs.core.Keyword(null,"delete","delete",3973413149),"DELETE"], null);
tamarack.xhr.send_edn = (function send_edn(p__7055){var map__7057 = p__7055;var map__7057__$1 = ((cljs.core.seq_QMARK_.call(null,map__7057))?cljs.core.apply.call(null,cljs.core.hash_map,map__7057):map__7057);var on_complete = cljs.core.get.call(null,map__7057__$1,new cljs.core.Keyword(null,"on-complete","on-complete",2943599833));var data = cljs.core.get.call(null,map__7057__$1,new cljs.core.Keyword(null,"data","data",1016980252));var url = cljs.core.get.call(null,map__7057__$1,new cljs.core.Keyword(null,"url","url",1014020321));var method = cljs.core.get.call(null,map__7057__$1,new cljs.core.Keyword(null,"method","method",4231316563));var xhr = (new goog.net.XhrIo());goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__7057,map__7057__$1,on_complete,data,url,method){
return (function (e){return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
});})(xhr,map__7057,map__7057__$1,on_complete,data,url,method))
);
return xhr.send(url,tamarack.xhr.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Accept": "application/edn"});
});

//# sourceMappingURL=xhr.js.map