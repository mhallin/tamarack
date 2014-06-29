// Compiled by ClojureScript 0.0-2227
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__8349__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__8348 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__8348,0,null);var body = cljs.core.nthnext.call(null,vec__8348,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__8349 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8349__delegate.call(this,args);};
G__8349.cljs$lang$maxFixedArity = 0;
G__8349.cljs$lang$applyTo = (function (arglist__8350){
var args = cljs.core.seq(arglist__8350);
return G__8349__delegate(args);
});
G__8349.cljs$core$IFn$_invoke$arity$variadic = G__8349__delegate;
return G__8349;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4301__auto__ = (function iter__8355(s__8356){return (new cljs.core.LazySeq(null,(function (){var s__8356__$1 = s__8356;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8356__$1);if(temp__4126__auto__)
{var s__8356__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8356__$2))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,s__8356__$2);var size__4300__auto__ = cljs.core.count.call(null,c__4299__auto__);var b__8358 = cljs.core.chunk_buffer.call(null,size__4300__auto__);if((function (){var i__8357 = 0;while(true){
if((i__8357 < size__4300__auto__))
{var args = cljs.core._nth.call(null,c__4299__auto__,i__8357);cljs.core.chunk_append.call(null,b__8358,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__8359 = (i__8357 + 1);
i__8357 = G__8359;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8358),iter__8355.call(null,cljs.core.chunk_rest.call(null,s__8356__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8358),null);
}
} else
{var args = cljs.core.first.call(null,s__8356__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__8355.call(null,cljs.core.rest.call(null,s__8356__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4301__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4301__auto__ = (function iter__8364(s__8365){return (new cljs.core.LazySeq(null,(function (){var s__8365__$1 = s__8365;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8365__$1);if(temp__4126__auto__)
{var s__8365__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8365__$2))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,s__8365__$2);var size__4300__auto__ = cljs.core.count.call(null,c__4299__auto__);var b__8367 = cljs.core.chunk_buffer.call(null,size__4300__auto__);if((function (){var i__8366 = 0;while(true){
if((i__8366 < size__4300__auto__))
{var style = cljs.core._nth.call(null,c__4299__auto__,i__8366);cljs.core.chunk_append.call(null,b__8367,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__8368 = (i__8366 + 1);
i__8366 = G__8368;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8367),iter__8364.call(null,cljs.core.chunk_rest.call(null,s__8365__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8367),null);
}
} else
{var style = cljs.core.first.call(null,s__8365__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__8364.call(null,cljs.core.rest.call(null,s__8365__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4301__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__8369){
var styles = cljs.core.seq(arglist__8369);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to8370 = (function() { 
var link_to8370__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to8370 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to8370__delegate.call(this,url,content);};
link_to8370.cljs$lang$maxFixedArity = 1;
link_to8370.cljs$lang$applyTo = (function (arglist__8371){
var url = cljs.core.first(arglist__8371);
var content = cljs.core.rest(arglist__8371);
return link_to8370__delegate(url,content);
});
link_to8370.cljs$core$IFn$_invoke$arity$variadic = link_to8370__delegate;
return link_to8370;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to8370);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to8372 = (function() { 
var mail_to8372__delegate = function (e_mail,p__8373){var vec__8375 = p__8373;var content = cljs.core.nth.call(null,vec__8375,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3576__auto__ = content;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to8372 = function (e_mail,var_args){
var p__8373 = null;if (arguments.length > 1) {
  p__8373 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to8372__delegate.call(this,e_mail,p__8373);};
mail_to8372.cljs$lang$maxFixedArity = 1;
mail_to8372.cljs$lang$applyTo = (function (arglist__8376){
var e_mail = cljs.core.first(arglist__8376);
var p__8373 = cljs.core.rest(arglist__8376);
return mail_to8372__delegate(e_mail,p__8373);
});
mail_to8372.cljs$core$IFn$_invoke$arity$variadic = mail_to8372__delegate;
return mail_to8372;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to8372);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list8377 = (function unordered_list8377(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4301__auto__ = (function iter__8382(s__8383){return (new cljs.core.LazySeq(null,(function (){var s__8383__$1 = s__8383;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8383__$1);if(temp__4126__auto__)
{var s__8383__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8383__$2))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,s__8383__$2);var size__4300__auto__ = cljs.core.count.call(null,c__4299__auto__);var b__8385 = cljs.core.chunk_buffer.call(null,size__4300__auto__);if((function (){var i__8384 = 0;while(true){
if((i__8384 < size__4300__auto__))
{var x = cljs.core._nth.call(null,c__4299__auto__,i__8384);cljs.core.chunk_append.call(null,b__8385,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__8386 = (i__8384 + 1);
i__8384 = G__8386;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8385),iter__8382.call(null,cljs.core.chunk_rest.call(null,s__8383__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8385),null);
}
} else
{var x = cljs.core.first.call(null,s__8383__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__8382.call(null,cljs.core.rest.call(null,s__8383__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4301__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list8377);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list8387 = (function ordered_list8387(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4301__auto__ = (function iter__8392(s__8393){return (new cljs.core.LazySeq(null,(function (){var s__8393__$1 = s__8393;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8393__$1);if(temp__4126__auto__)
{var s__8393__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8393__$2))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,s__8393__$2);var size__4300__auto__ = cljs.core.count.call(null,c__4299__auto__);var b__8395 = cljs.core.chunk_buffer.call(null,size__4300__auto__);if((function (){var i__8394 = 0;while(true){
if((i__8394 < size__4300__auto__))
{var x = cljs.core._nth.call(null,c__4299__auto__,i__8394);cljs.core.chunk_append.call(null,b__8395,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__8396 = (i__8394 + 1);
i__8394 = G__8396;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8395),iter__8392.call(null,cljs.core.chunk_rest.call(null,s__8393__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8395),null);
}
} else
{var x = cljs.core.first.call(null,s__8393__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__8392.call(null,cljs.core.rest.call(null,s__8393__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4301__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list8387);
/**
* Create an image element.
*/
sablono.core.image8397 = (function() {
var image8397 = null;
var image8397__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image8397__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image8397 = function(src,alt){
switch(arguments.length){
case 1:
return image8397__1.call(this,src);
case 2:
return image8397__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image8397.cljs$core$IFn$_invoke$arity$1 = image8397__1;
image8397.cljs$core$IFn$_invoke$arity$2 = image8397__2;
return image8397;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image8397);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__8398_SHARP_,p2__8399_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8398_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__8399_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__8400_SHARP_,p2__8401_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8400_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__8401_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field8402 = (function() {
var color_field8402 = null;
var color_field8402__1 = (function (name__5788__auto__){return color_field8402.call(null,name__5788__auto__,null);
});
var color_field8402__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__5788__auto__,value__5789__auto__);
});
color_field8402 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return color_field8402__1.call(this,name__5788__auto__);
case 2:
return color_field8402__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field8402.cljs$core$IFn$_invoke$arity$1 = color_field8402__1;
color_field8402.cljs$core$IFn$_invoke$arity$2 = color_field8402__2;
return color_field8402;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field8402);
/**
* Creates a date input field.
*/
sablono.core.date_field8403 = (function() {
var date_field8403 = null;
var date_field8403__1 = (function (name__5788__auto__){return date_field8403.call(null,name__5788__auto__,null);
});
var date_field8403__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__5788__auto__,value__5789__auto__);
});
date_field8403 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return date_field8403__1.call(this,name__5788__auto__);
case 2:
return date_field8403__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field8403.cljs$core$IFn$_invoke$arity$1 = date_field8403__1;
date_field8403.cljs$core$IFn$_invoke$arity$2 = date_field8403__2;
return date_field8403;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field8403);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field8404 = (function() {
var datetime_field8404 = null;
var datetime_field8404__1 = (function (name__5788__auto__){return datetime_field8404.call(null,name__5788__auto__,null);
});
var datetime_field8404__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__5788__auto__,value__5789__auto__);
});
datetime_field8404 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return datetime_field8404__1.call(this,name__5788__auto__);
case 2:
return datetime_field8404__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field8404.cljs$core$IFn$_invoke$arity$1 = datetime_field8404__1;
datetime_field8404.cljs$core$IFn$_invoke$arity$2 = datetime_field8404__2;
return datetime_field8404;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field8404);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field8405 = (function() {
var datetime_local_field8405 = null;
var datetime_local_field8405__1 = (function (name__5788__auto__){return datetime_local_field8405.call(null,name__5788__auto__,null);
});
var datetime_local_field8405__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__5788__auto__,value__5789__auto__);
});
datetime_local_field8405 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return datetime_local_field8405__1.call(this,name__5788__auto__);
case 2:
return datetime_local_field8405__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field8405.cljs$core$IFn$_invoke$arity$1 = datetime_local_field8405__1;
datetime_local_field8405.cljs$core$IFn$_invoke$arity$2 = datetime_local_field8405__2;
return datetime_local_field8405;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field8405);
/**
* Creates a email input field.
*/
sablono.core.email_field8406 = (function() {
var email_field8406 = null;
var email_field8406__1 = (function (name__5788__auto__){return email_field8406.call(null,name__5788__auto__,null);
});
var email_field8406__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__5788__auto__,value__5789__auto__);
});
email_field8406 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return email_field8406__1.call(this,name__5788__auto__);
case 2:
return email_field8406__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field8406.cljs$core$IFn$_invoke$arity$1 = email_field8406__1;
email_field8406.cljs$core$IFn$_invoke$arity$2 = email_field8406__2;
return email_field8406;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field8406);
/**
* Creates a file input field.
*/
sablono.core.file_field8407 = (function() {
var file_field8407 = null;
var file_field8407__1 = (function (name__5788__auto__){return file_field8407.call(null,name__5788__auto__,null);
});
var file_field8407__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__5788__auto__,value__5789__auto__);
});
file_field8407 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return file_field8407__1.call(this,name__5788__auto__);
case 2:
return file_field8407__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field8407.cljs$core$IFn$_invoke$arity$1 = file_field8407__1;
file_field8407.cljs$core$IFn$_invoke$arity$2 = file_field8407__2;
return file_field8407;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field8407);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field8408 = (function() {
var hidden_field8408 = null;
var hidden_field8408__1 = (function (name__5788__auto__){return hidden_field8408.call(null,name__5788__auto__,null);
});
var hidden_field8408__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__5788__auto__,value__5789__auto__);
});
hidden_field8408 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return hidden_field8408__1.call(this,name__5788__auto__);
case 2:
return hidden_field8408__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field8408.cljs$core$IFn$_invoke$arity$1 = hidden_field8408__1;
hidden_field8408.cljs$core$IFn$_invoke$arity$2 = hidden_field8408__2;
return hidden_field8408;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field8408);
/**
* Creates a month input field.
*/
sablono.core.month_field8409 = (function() {
var month_field8409 = null;
var month_field8409__1 = (function (name__5788__auto__){return month_field8409.call(null,name__5788__auto__,null);
});
var month_field8409__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__5788__auto__,value__5789__auto__);
});
month_field8409 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return month_field8409__1.call(this,name__5788__auto__);
case 2:
return month_field8409__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field8409.cljs$core$IFn$_invoke$arity$1 = month_field8409__1;
month_field8409.cljs$core$IFn$_invoke$arity$2 = month_field8409__2;
return month_field8409;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field8409);
/**
* Creates a number input field.
*/
sablono.core.number_field8410 = (function() {
var number_field8410 = null;
var number_field8410__1 = (function (name__5788__auto__){return number_field8410.call(null,name__5788__auto__,null);
});
var number_field8410__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__5788__auto__,value__5789__auto__);
});
number_field8410 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return number_field8410__1.call(this,name__5788__auto__);
case 2:
return number_field8410__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field8410.cljs$core$IFn$_invoke$arity$1 = number_field8410__1;
number_field8410.cljs$core$IFn$_invoke$arity$2 = number_field8410__2;
return number_field8410;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field8410);
/**
* Creates a password input field.
*/
sablono.core.password_field8411 = (function() {
var password_field8411 = null;
var password_field8411__1 = (function (name__5788__auto__){return password_field8411.call(null,name__5788__auto__,null);
});
var password_field8411__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__5788__auto__,value__5789__auto__);
});
password_field8411 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return password_field8411__1.call(this,name__5788__auto__);
case 2:
return password_field8411__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field8411.cljs$core$IFn$_invoke$arity$1 = password_field8411__1;
password_field8411.cljs$core$IFn$_invoke$arity$2 = password_field8411__2;
return password_field8411;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field8411);
/**
* Creates a range input field.
*/
sablono.core.range_field8412 = (function() {
var range_field8412 = null;
var range_field8412__1 = (function (name__5788__auto__){return range_field8412.call(null,name__5788__auto__,null);
});
var range_field8412__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__5788__auto__,value__5789__auto__);
});
range_field8412 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return range_field8412__1.call(this,name__5788__auto__);
case 2:
return range_field8412__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field8412.cljs$core$IFn$_invoke$arity$1 = range_field8412__1;
range_field8412.cljs$core$IFn$_invoke$arity$2 = range_field8412__2;
return range_field8412;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field8412);
/**
* Creates a search input field.
*/
sablono.core.search_field8413 = (function() {
var search_field8413 = null;
var search_field8413__1 = (function (name__5788__auto__){return search_field8413.call(null,name__5788__auto__,null);
});
var search_field8413__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__5788__auto__,value__5789__auto__);
});
search_field8413 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return search_field8413__1.call(this,name__5788__auto__);
case 2:
return search_field8413__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field8413.cljs$core$IFn$_invoke$arity$1 = search_field8413__1;
search_field8413.cljs$core$IFn$_invoke$arity$2 = search_field8413__2;
return search_field8413;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field8413);
/**
* Creates a tel input field.
*/
sablono.core.tel_field8414 = (function() {
var tel_field8414 = null;
var tel_field8414__1 = (function (name__5788__auto__){return tel_field8414.call(null,name__5788__auto__,null);
});
var tel_field8414__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__5788__auto__,value__5789__auto__);
});
tel_field8414 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return tel_field8414__1.call(this,name__5788__auto__);
case 2:
return tel_field8414__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field8414.cljs$core$IFn$_invoke$arity$1 = tel_field8414__1;
tel_field8414.cljs$core$IFn$_invoke$arity$2 = tel_field8414__2;
return tel_field8414;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field8414);
/**
* Creates a text input field.
*/
sablono.core.text_field8415 = (function() {
var text_field8415 = null;
var text_field8415__1 = (function (name__5788__auto__){return text_field8415.call(null,name__5788__auto__,null);
});
var text_field8415__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__5788__auto__,value__5789__auto__);
});
text_field8415 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return text_field8415__1.call(this,name__5788__auto__);
case 2:
return text_field8415__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field8415.cljs$core$IFn$_invoke$arity$1 = text_field8415__1;
text_field8415.cljs$core$IFn$_invoke$arity$2 = text_field8415__2;
return text_field8415;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field8415);
/**
* Creates a time input field.
*/
sablono.core.time_field8416 = (function() {
var time_field8416 = null;
var time_field8416__1 = (function (name__5788__auto__){return time_field8416.call(null,name__5788__auto__,null);
});
var time_field8416__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__5788__auto__,value__5789__auto__);
});
time_field8416 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return time_field8416__1.call(this,name__5788__auto__);
case 2:
return time_field8416__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field8416.cljs$core$IFn$_invoke$arity$1 = time_field8416__1;
time_field8416.cljs$core$IFn$_invoke$arity$2 = time_field8416__2;
return time_field8416;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field8416);
/**
* Creates a url input field.
*/
sablono.core.url_field8417 = (function() {
var url_field8417 = null;
var url_field8417__1 = (function (name__5788__auto__){return url_field8417.call(null,name__5788__auto__,null);
});
var url_field8417__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__5788__auto__,value__5789__auto__);
});
url_field8417 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return url_field8417__1.call(this,name__5788__auto__);
case 2:
return url_field8417__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field8417.cljs$core$IFn$_invoke$arity$1 = url_field8417__1;
url_field8417.cljs$core$IFn$_invoke$arity$2 = url_field8417__2;
return url_field8417;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field8417);
/**
* Creates a week input field.
*/
sablono.core.week_field8418 = (function() {
var week_field8418 = null;
var week_field8418__1 = (function (name__5788__auto__){return week_field8418.call(null,name__5788__auto__,null);
});
var week_field8418__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__5788__auto__,value__5789__auto__);
});
week_field8418 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return week_field8418__1.call(this,name__5788__auto__);
case 2:
return week_field8418__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field8418.cljs$core$IFn$_invoke$arity$1 = week_field8418__1;
week_field8418.cljs$core$IFn$_invoke$arity$2 = week_field8418__2;
return week_field8418;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field8418);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box8419 = (function() {
var check_box8419 = null;
var check_box8419__1 = (function (name){return check_box8419.call(null,name,null);
});
var check_box8419__2 = (function (name,checked_QMARK_){return check_box8419.call(null,name,checked_QMARK_,"true");
});
var check_box8419__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box8419 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box8419__1.call(this,name);
case 2:
return check_box8419__2.call(this,name,checked_QMARK_);
case 3:
return check_box8419__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box8419.cljs$core$IFn$_invoke$arity$1 = check_box8419__1;
check_box8419.cljs$core$IFn$_invoke$arity$2 = check_box8419__2;
check_box8419.cljs$core$IFn$_invoke$arity$3 = check_box8419__3;
return check_box8419;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box8419);
/**
* Creates a radio button.
*/
sablono.core.radio_button8420 = (function() {
var radio_button8420 = null;
var radio_button8420__1 = (function (group){return radio_button8420.call(null,group,null);
});
var radio_button8420__2 = (function (group,checked_QMARK_){return radio_button8420.call(null,group,checked_QMARK_,"true");
});
var radio_button8420__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button8420 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button8420__1.call(this,group);
case 2:
return radio_button8420__2.call(this,group,checked_QMARK_);
case 3:
return radio_button8420__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button8420.cljs$core$IFn$_invoke$arity$1 = radio_button8420__1;
radio_button8420.cljs$core$IFn$_invoke$arity$2 = radio_button8420__2;
radio_button8420.cljs$core$IFn$_invoke$arity$3 = radio_button8420__3;
return radio_button8420;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button8420);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options8421 = (function() {
var select_options8421 = null;
var select_options8421__1 = (function (coll){return select_options8421.call(null,coll,null);
});
var select_options8421__2 = (function (coll,selected){var iter__4301__auto__ = (function iter__8430(s__8431){return (new cljs.core.LazySeq(null,(function (){var s__8431__$1 = s__8431;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8431__$1);if(temp__4126__auto__)
{var s__8431__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8431__$2))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,s__8431__$2);var size__4300__auto__ = cljs.core.count.call(null,c__4299__auto__);var b__8433 = cljs.core.chunk_buffer.call(null,size__4300__auto__);if((function (){var i__8432 = 0;while(true){
if((i__8432 < size__4300__auto__))
{var x = cljs.core._nth.call(null,c__4299__auto__,i__8432);cljs.core.chunk_append.call(null,b__8433,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__8436 = x;var text = cljs.core.nth.call(null,vec__8436,0,null);var val = cljs.core.nth.call(null,vec__8436,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__8436,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options8421.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__8438 = (i__8432 + 1);
i__8432 = G__8438;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8433),iter__8430.call(null,cljs.core.chunk_rest.call(null,s__8431__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8433),null);
}
} else
{var x = cljs.core.first.call(null,s__8431__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__8437 = x;var text = cljs.core.nth.call(null,vec__8437,0,null);var val = cljs.core.nth.call(null,vec__8437,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__8437,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options8421.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__8430.call(null,cljs.core.rest.call(null,s__8431__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4301__auto__.call(null,coll);
});
select_options8421 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options8421__1.call(this,coll);
case 2:
return select_options8421__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options8421.cljs$core$IFn$_invoke$arity$1 = select_options8421__1;
select_options8421.cljs$core$IFn$_invoke$arity$2 = select_options8421__2;
return select_options8421;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options8421);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down8439 = (function() {
var drop_down8439 = null;
var drop_down8439__2 = (function (name,options){return drop_down8439.call(null,name,options,null);
});
var drop_down8439__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down8439 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down8439__2.call(this,name,options);
case 3:
return drop_down8439__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down8439.cljs$core$IFn$_invoke$arity$2 = drop_down8439__2;
drop_down8439.cljs$core$IFn$_invoke$arity$3 = drop_down8439__3;
return drop_down8439;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down8439);
/**
* Creates a text area element.
*/
sablono.core.text_area8440 = (function() {
var text_area8440 = null;
var text_area8440__1 = (function (name){return text_area8440.call(null,name,null);
});
var text_area8440__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area8440 = function(name,value){
switch(arguments.length){
case 1:
return text_area8440__1.call(this,name);
case 2:
return text_area8440__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area8440.cljs$core$IFn$_invoke$arity$1 = text_area8440__1;
text_area8440.cljs$core$IFn$_invoke$arity$2 = text_area8440__2;
return text_area8440;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area8440);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label8441 = (function label8441(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label8441);
/**
* Creates a submit button.
*/
sablono.core.submit_button8442 = (function submit_button8442(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button8442);
/**
* Creates a form reset button.
*/
sablono.core.reset_button8443 = (function reset_button8443(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button8443);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to8444 = (function() { 
var form_to8444__delegate = function (p__8445,body){var vec__8447 = p__8445;var method = cljs.core.nth.call(null,vec__8447,0,null);var action = cljs.core.nth.call(null,vec__8447,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to8444 = function (p__8445,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to8444__delegate.call(this,p__8445,body);};
form_to8444.cljs$lang$maxFixedArity = 1;
form_to8444.cljs$lang$applyTo = (function (arglist__8448){
var p__8445 = cljs.core.first(arglist__8448);
var body = cljs.core.rest(arglist__8448);
return form_to8444__delegate(p__8445,body);
});
form_to8444.cljs$core$IFn$_invoke$arity$variadic = form_to8444__delegate;
return form_to8444;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to8444);

//# sourceMappingURL=core.js.map