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
var G__11612__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__11611 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11611,0,null);var body = cljs.core.nthnext(vec__11611,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__11612 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__11612__delegate.call(this,args);};
G__11612.cljs$lang$maxFixedArity = 0;
G__11612.cljs$lang$applyTo = (function (arglist__11613){
var args = cljs.core.seq(arglist__11613);
return G__11612__delegate(args);
});
G__11612.cljs$core$IFn$_invoke$arity$variadic = G__11612__delegate;
return G__11612;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4301__auto__ = (function iter__11618(s__11619){return (new cljs.core.LazySeq(null,(function (){var s__11619__$1 = s__11619;while(true){
var temp__4126__auto__ = cljs.core.seq(s__11619__$1);if(temp__4126__auto__)
{var s__11619__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__11619__$2))
{var c__4299__auto__ = cljs.core.chunk_first(s__11619__$2);var size__4300__auto__ = cljs.core.count(c__4299__auto__);var b__11621 = cljs.core.chunk_buffer(size__4300__auto__);if((function (){var i__11620 = 0;while(true){
if((i__11620 < size__4300__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4299__auto__,i__11620);cljs.core.chunk_append(b__11621,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__11622 = (i__11620 + 1);
i__11620 = G__11622;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__11621),iter__11618(cljs.core.chunk_rest(s__11619__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__11621),null);
}
} else
{var args = cljs.core.first(s__11619__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__11618(cljs.core.rest(s__11619__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4301__auto__(arglists);
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
var include_css__delegate = function (styles){var iter__4301__auto__ = (function iter__11627(s__11628){return (new cljs.core.LazySeq(null,(function (){var s__11628__$1 = s__11628;while(true){
var temp__4126__auto__ = cljs.core.seq(s__11628__$1);if(temp__4126__auto__)
{var s__11628__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__11628__$2))
{var c__4299__auto__ = cljs.core.chunk_first(s__11628__$2);var size__4300__auto__ = cljs.core.count(c__4299__auto__);var b__11630 = cljs.core.chunk_buffer(size__4300__auto__);if((function (){var i__11629 = 0;while(true){
if((i__11629 < size__4300__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4299__auto__,i__11629);cljs.core.chunk_append(b__11630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$172,"text/css",cljs.core.constant$keyword$173,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$174,"stylesheet"], null)], null));
{
var G__11631 = (i__11629 + 1);
i__11629 = G__11631;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__11630),iter__11627(cljs.core.chunk_rest(s__11628__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__11630),null);
}
} else
{var style = cljs.core.first(s__11628__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$172,"text/css",cljs.core.constant$keyword$173,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$174,"stylesheet"], null)], null),iter__11627(cljs.core.rest(s__11628__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4301__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__11632){
var styles = cljs.core.seq(arglist__11632);
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
sablono.core.include_react = (function include_react(){return sablono.core.include_js("http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to11633 = (function() { 
var link_to11633__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$173,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to11633 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to11633__delegate.call(this,url,content);};
link_to11633.cljs$lang$maxFixedArity = 1;
link_to11633.cljs$lang$applyTo = (function (arglist__11634){
var url = cljs.core.first(arglist__11634);
var content = cljs.core.rest(arglist__11634);
return link_to11633__delegate(url,content);
});
link_to11633.cljs$core$IFn$_invoke$arity$variadic = link_to11633__delegate;
return link_to11633;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to11633);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to11635 = (function() { 
var mail_to11635__delegate = function (e_mail,p__11636){var vec__11638 = p__11636;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11638,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$173,("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3576__auto__ = content;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to11635 = function (e_mail,var_args){
var p__11636 = null;if (arguments.length > 1) {
  p__11636 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to11635__delegate.call(this,e_mail,p__11636);};
mail_to11635.cljs$lang$maxFixedArity = 1;
mail_to11635.cljs$lang$applyTo = (function (arglist__11639){
var e_mail = cljs.core.first(arglist__11639);
var p__11636 = cljs.core.rest(arglist__11639);
return mail_to11635__delegate(e_mail,p__11636);
});
mail_to11635.cljs$core$IFn$_invoke$arity$variadic = mail_to11635__delegate;
return mail_to11635;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to11635);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list11640 = (function unordered_list11640(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,(function (){var iter__4301__auto__ = (function iter__11645(s__11646){return (new cljs.core.LazySeq(null,(function (){var s__11646__$1 = s__11646;while(true){
var temp__4126__auto__ = cljs.core.seq(s__11646__$1);if(temp__4126__auto__)
{var s__11646__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__11646__$2))
{var c__4299__auto__ = cljs.core.chunk_first(s__11646__$2);var size__4300__auto__ = cljs.core.count(c__4299__auto__);var b__11648 = cljs.core.chunk_buffer(size__4300__auto__);if((function (){var i__11647 = 0;while(true){
if((i__11647 < size__4300__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4299__auto__,i__11647);cljs.core.chunk_append(b__11648,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,x], null));
{
var G__11649 = (i__11647 + 1);
i__11647 = G__11649;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__11648),iter__11645(cljs.core.chunk_rest(s__11646__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__11648),null);
}
} else
{var x = cljs.core.first(s__11646__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,x], null),iter__11645(cljs.core.rest(s__11646__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4301__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list11640);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list11650 = (function ordered_list11650(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$178,(function (){var iter__4301__auto__ = (function iter__11655(s__11656){return (new cljs.core.LazySeq(null,(function (){var s__11656__$1 = s__11656;while(true){
var temp__4126__auto__ = cljs.core.seq(s__11656__$1);if(temp__4126__auto__)
{var s__11656__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__11656__$2))
{var c__4299__auto__ = cljs.core.chunk_first(s__11656__$2);var size__4300__auto__ = cljs.core.count(c__4299__auto__);var b__11658 = cljs.core.chunk_buffer(size__4300__auto__);if((function (){var i__11657 = 0;while(true){
if((i__11657 < size__4300__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4299__auto__,i__11657);cljs.core.chunk_append(b__11658,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,x], null));
{
var G__11659 = (i__11657 + 1);
i__11657 = G__11659;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__11658),iter__11655(cljs.core.chunk_rest(s__11656__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__11658),null);
}
} else
{var x = cljs.core.first(s__11656__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$177,x], null),iter__11655(cljs.core.rest(s__11656__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4301__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list11650);
/**
* Create an image element.
*/
sablono.core.image11660 = (function() {
var image11660 = null;
var image11660__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$179,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$180,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image11660__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$179,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$180,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$181,alt], null)], null);
});
image11660 = function(src,alt){
switch(arguments.length){
case 1:
return image11660__1.call(this,src);
case 2:
return image11660__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image11660.cljs$core$IFn$_invoke$arity$1 = image11660__1;
image11660.cljs$core$IFn$_invoke$arity$2 = image11660__2;
return image11660;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image11660);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__11661_SHARP_,p2__11662_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11661_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__11662_SHARP_)+"]");
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__11663_SHARP_,p2__11664_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__11663_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__11664_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$170,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$172,type,cljs.core.constant$keyword$182,sablono.core.make_name(name),cljs.core.constant$keyword$168,sablono.core.make_id(name),cljs.core.constant$keyword$145,value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field11665 = (function() {
var color_field11665 = null;
var color_field11665__1 = (function (name__5788__auto__){return color_field11665.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var color_field11665__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__5788__auto__,value__5789__auto__);
});
color_field11665 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return color_field11665__1.call(this,name__5788__auto__);
case 2:
return color_field11665__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field11665.cljs$core$IFn$_invoke$arity$1 = color_field11665__1;
color_field11665.cljs$core$IFn$_invoke$arity$2 = color_field11665__2;
return color_field11665;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field11665);
/**
* Creates a date input field.
*/
sablono.core.date_field11666 = (function() {
var date_field11666 = null;
var date_field11666__1 = (function (name__5788__auto__){return date_field11666.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var date_field11666__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__5788__auto__,value__5789__auto__);
});
date_field11666 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return date_field11666__1.call(this,name__5788__auto__);
case 2:
return date_field11666__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field11666.cljs$core$IFn$_invoke$arity$1 = date_field11666__1;
date_field11666.cljs$core$IFn$_invoke$arity$2 = date_field11666__2;
return date_field11666;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field11666);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field11667 = (function() {
var datetime_field11667 = null;
var datetime_field11667__1 = (function (name__5788__auto__){return datetime_field11667.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var datetime_field11667__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__5788__auto__,value__5789__auto__);
});
datetime_field11667 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return datetime_field11667__1.call(this,name__5788__auto__);
case 2:
return datetime_field11667__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field11667.cljs$core$IFn$_invoke$arity$1 = datetime_field11667__1;
datetime_field11667.cljs$core$IFn$_invoke$arity$2 = datetime_field11667__2;
return datetime_field11667;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field11667);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field11668 = (function() {
var datetime_local_field11668 = null;
var datetime_local_field11668__1 = (function (name__5788__auto__){return datetime_local_field11668.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var datetime_local_field11668__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__5788__auto__,value__5789__auto__);
});
datetime_local_field11668 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return datetime_local_field11668__1.call(this,name__5788__auto__);
case 2:
return datetime_local_field11668__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field11668.cljs$core$IFn$_invoke$arity$1 = datetime_local_field11668__1;
datetime_local_field11668.cljs$core$IFn$_invoke$arity$2 = datetime_local_field11668__2;
return datetime_local_field11668;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field11668);
/**
* Creates a email input field.
*/
sablono.core.email_field11669 = (function() {
var email_field11669 = null;
var email_field11669__1 = (function (name__5788__auto__){return email_field11669.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var email_field11669__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__5788__auto__,value__5789__auto__);
});
email_field11669 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return email_field11669__1.call(this,name__5788__auto__);
case 2:
return email_field11669__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field11669.cljs$core$IFn$_invoke$arity$1 = email_field11669__1;
email_field11669.cljs$core$IFn$_invoke$arity$2 = email_field11669__2;
return email_field11669;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field11669);
/**
* Creates a file input field.
*/
sablono.core.file_field11670 = (function() {
var file_field11670 = null;
var file_field11670__1 = (function (name__5788__auto__){return file_field11670.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var file_field11670__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__5788__auto__,value__5789__auto__);
});
file_field11670 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return file_field11670__1.call(this,name__5788__auto__);
case 2:
return file_field11670__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field11670.cljs$core$IFn$_invoke$arity$1 = file_field11670__1;
file_field11670.cljs$core$IFn$_invoke$arity$2 = file_field11670__2;
return file_field11670;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field11670);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field11671 = (function() {
var hidden_field11671 = null;
var hidden_field11671__1 = (function (name__5788__auto__){return hidden_field11671.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var hidden_field11671__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__5788__auto__,value__5789__auto__);
});
hidden_field11671 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return hidden_field11671__1.call(this,name__5788__auto__);
case 2:
return hidden_field11671__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field11671.cljs$core$IFn$_invoke$arity$1 = hidden_field11671__1;
hidden_field11671.cljs$core$IFn$_invoke$arity$2 = hidden_field11671__2;
return hidden_field11671;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field11671);
/**
* Creates a month input field.
*/
sablono.core.month_field11672 = (function() {
var month_field11672 = null;
var month_field11672__1 = (function (name__5788__auto__){return month_field11672.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var month_field11672__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__5788__auto__,value__5789__auto__);
});
month_field11672 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return month_field11672__1.call(this,name__5788__auto__);
case 2:
return month_field11672__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field11672.cljs$core$IFn$_invoke$arity$1 = month_field11672__1;
month_field11672.cljs$core$IFn$_invoke$arity$2 = month_field11672__2;
return month_field11672;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field11672);
/**
* Creates a number input field.
*/
sablono.core.number_field11673 = (function() {
var number_field11673 = null;
var number_field11673__1 = (function (name__5788__auto__){return number_field11673.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var number_field11673__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__5788__auto__,value__5789__auto__);
});
number_field11673 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return number_field11673__1.call(this,name__5788__auto__);
case 2:
return number_field11673__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field11673.cljs$core$IFn$_invoke$arity$1 = number_field11673__1;
number_field11673.cljs$core$IFn$_invoke$arity$2 = number_field11673__2;
return number_field11673;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field11673);
/**
* Creates a password input field.
*/
sablono.core.password_field11674 = (function() {
var password_field11674 = null;
var password_field11674__1 = (function (name__5788__auto__){return password_field11674.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var password_field11674__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__5788__auto__,value__5789__auto__);
});
password_field11674 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return password_field11674__1.call(this,name__5788__auto__);
case 2:
return password_field11674__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field11674.cljs$core$IFn$_invoke$arity$1 = password_field11674__1;
password_field11674.cljs$core$IFn$_invoke$arity$2 = password_field11674__2;
return password_field11674;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field11674);
/**
* Creates a range input field.
*/
sablono.core.range_field11675 = (function() {
var range_field11675 = null;
var range_field11675__1 = (function (name__5788__auto__){return range_field11675.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var range_field11675__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__5788__auto__,value__5789__auto__);
});
range_field11675 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return range_field11675__1.call(this,name__5788__auto__);
case 2:
return range_field11675__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field11675.cljs$core$IFn$_invoke$arity$1 = range_field11675__1;
range_field11675.cljs$core$IFn$_invoke$arity$2 = range_field11675__2;
return range_field11675;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field11675);
/**
* Creates a search input field.
*/
sablono.core.search_field11676 = (function() {
var search_field11676 = null;
var search_field11676__1 = (function (name__5788__auto__){return search_field11676.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var search_field11676__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__5788__auto__,value__5789__auto__);
});
search_field11676 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return search_field11676__1.call(this,name__5788__auto__);
case 2:
return search_field11676__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field11676.cljs$core$IFn$_invoke$arity$1 = search_field11676__1;
search_field11676.cljs$core$IFn$_invoke$arity$2 = search_field11676__2;
return search_field11676;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field11676);
/**
* Creates a tel input field.
*/
sablono.core.tel_field11677 = (function() {
var tel_field11677 = null;
var tel_field11677__1 = (function (name__5788__auto__){return tel_field11677.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var tel_field11677__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__5788__auto__,value__5789__auto__);
});
tel_field11677 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return tel_field11677__1.call(this,name__5788__auto__);
case 2:
return tel_field11677__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field11677.cljs$core$IFn$_invoke$arity$1 = tel_field11677__1;
tel_field11677.cljs$core$IFn$_invoke$arity$2 = tel_field11677__2;
return tel_field11677;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field11677);
/**
* Creates a text input field.
*/
sablono.core.text_field11678 = (function() {
var text_field11678 = null;
var text_field11678__1 = (function (name__5788__auto__){return text_field11678.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var text_field11678__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__5788__auto__,value__5789__auto__);
});
text_field11678 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return text_field11678__1.call(this,name__5788__auto__);
case 2:
return text_field11678__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field11678.cljs$core$IFn$_invoke$arity$1 = text_field11678__1;
text_field11678.cljs$core$IFn$_invoke$arity$2 = text_field11678__2;
return text_field11678;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field11678);
/**
* Creates a time input field.
*/
sablono.core.time_field11679 = (function() {
var time_field11679 = null;
var time_field11679__1 = (function (name__5788__auto__){return time_field11679.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var time_field11679__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__5788__auto__,value__5789__auto__);
});
time_field11679 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return time_field11679__1.call(this,name__5788__auto__);
case 2:
return time_field11679__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field11679.cljs$core$IFn$_invoke$arity$1 = time_field11679__1;
time_field11679.cljs$core$IFn$_invoke$arity$2 = time_field11679__2;
return time_field11679;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field11679);
/**
* Creates a url input field.
*/
sablono.core.url_field11680 = (function() {
var url_field11680 = null;
var url_field11680__1 = (function (name__5788__auto__){return url_field11680.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var url_field11680__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__5788__auto__,value__5789__auto__);
});
url_field11680 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return url_field11680__1.call(this,name__5788__auto__);
case 2:
return url_field11680__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field11680.cljs$core$IFn$_invoke$arity$1 = url_field11680__1;
url_field11680.cljs$core$IFn$_invoke$arity$2 = url_field11680__2;
return url_field11680;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field11680);
/**
* Creates a week input field.
*/
sablono.core.week_field11681 = (function() {
var week_field11681 = null;
var week_field11681__1 = (function (name__5788__auto__){return week_field11681.cljs$core$IFn$_invoke$arity$2(name__5788__auto__,null);
});
var week_field11681__2 = (function (name__5788__auto__,value__5789__auto__){return sablono.core.input_field_STAR_((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__5788__auto__,value__5789__auto__);
});
week_field11681 = function(name__5788__auto__,value__5789__auto__){
switch(arguments.length){
case 1:
return week_field11681__1.call(this,name__5788__auto__);
case 2:
return week_field11681__2.call(this,name__5788__auto__,value__5789__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field11681.cljs$core$IFn$_invoke$arity$1 = week_field11681__1;
week_field11681.cljs$core$IFn$_invoke$arity$2 = week_field11681__2;
return week_field11681;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field11681);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box11682 = (function() {
var check_box11682 = null;
var check_box11682__1 = (function (name){return check_box11682.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box11682__2 = (function (name,checked_QMARK_){return check_box11682.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box11682__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$170,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$172,"checkbox",cljs.core.constant$keyword$182,sablono.core.make_name(name),cljs.core.constant$keyword$168,sablono.core.make_id(name),cljs.core.constant$keyword$145,value,cljs.core.constant$keyword$183,checked_QMARK_], null)], null);
});
check_box11682 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box11682__1.call(this,name);
case 2:
return check_box11682__2.call(this,name,checked_QMARK_);
case 3:
return check_box11682__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box11682.cljs$core$IFn$_invoke$arity$1 = check_box11682__1;
check_box11682.cljs$core$IFn$_invoke$arity$2 = check_box11682__2;
check_box11682.cljs$core$IFn$_invoke$arity$3 = check_box11682__3;
return check_box11682;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box11682);
/**
* Creates a radio button.
*/
sablono.core.radio_button11683 = (function() {
var radio_button11683 = null;
var radio_button11683__1 = (function (group){return radio_button11683.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button11683__2 = (function (group,checked_QMARK_){return radio_button11683.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button11683__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$170,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$172,"radio",cljs.core.constant$keyword$182,sablono.core.make_name(group),cljs.core.constant$keyword$168,sablono.core.make_id((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))))),cljs.core.constant$keyword$145,value,cljs.core.constant$keyword$183,checked_QMARK_], null)], null);
});
radio_button11683 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button11683__1.call(this,group);
case 2:
return radio_button11683__2.call(this,group,checked_QMARK_);
case 3:
return radio_button11683__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button11683.cljs$core$IFn$_invoke$arity$1 = radio_button11683__1;
radio_button11683.cljs$core$IFn$_invoke$arity$2 = radio_button11683__2;
radio_button11683.cljs$core$IFn$_invoke$arity$3 = radio_button11683__3;
return radio_button11683;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button11683);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options11684 = (function() {
var select_options11684 = null;
var select_options11684__1 = (function (coll){return select_options11684.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options11684__2 = (function (coll,selected){var iter__4301__auto__ = (function iter__11693(s__11694){return (new cljs.core.LazySeq(null,(function (){var s__11694__$1 = s__11694;while(true){
var temp__4126__auto__ = cljs.core.seq(s__11694__$1);if(temp__4126__auto__)
{var s__11694__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__11694__$2))
{var c__4299__auto__ = cljs.core.chunk_first(s__11694__$2);var size__4300__auto__ = cljs.core.count(c__4299__auto__);var b__11696 = cljs.core.chunk_buffer(size__4300__auto__);if((function (){var i__11695 = 0;while(true){
if((i__11695 < size__4300__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4299__auto__,i__11695);cljs.core.chunk_append(b__11696,((cljs.core.sequential_QMARK_(x))?(function (){var vec__11699 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11699,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11699,1,null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11699,2,null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$184,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,text], null),select_options11684.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$145,val,cljs.core.constant$keyword$187,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$188,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$187,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__11701 = (i__11695 + 1);
i__11695 = G__11701;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__11696),iter__11693(cljs.core.chunk_rest(s__11694__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__11696),null);
}
} else
{var x = cljs.core.first(s__11694__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__11700 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11700,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11700,1,null);var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11700,2,null);var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$184,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,text], null),select_options11684.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$145,val,cljs.core.constant$keyword$187,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.constant$keyword$188,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$186,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$187,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__11693(cljs.core.rest(s__11694__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4301__auto__(coll);
});
select_options11684 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options11684__1.call(this,coll);
case 2:
return select_options11684__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options11684.cljs$core$IFn$_invoke$arity$1 = select_options11684__1;
select_options11684.cljs$core$IFn$_invoke$arity$2 = select_options11684__2;
return select_options11684;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options11684);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down11702 = (function() {
var drop_down11702 = null;
var drop_down11702__2 = (function (name,options){return drop_down11702.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down11702__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$189,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$182,sablono.core.make_name(name),cljs.core.constant$keyword$168,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down11702 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down11702__2.call(this,name,options);
case 3:
return drop_down11702__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down11702.cljs$core$IFn$_invoke$arity$2 = drop_down11702__2;
drop_down11702.cljs$core$IFn$_invoke$arity$3 = drop_down11702__3;
return drop_down11702;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down11702);
/**
* Creates a text area element.
*/
sablono.core.text_area11703 = (function() {
var text_area11703 = null;
var text_area11703__1 = (function (name){return text_area11703.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area11703__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$169,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$182,sablono.core.make_name(name),cljs.core.constant$keyword$168,sablono.core.make_id(name),cljs.core.constant$keyword$145,value], null)], null);
});
text_area11703 = function(name,value){
switch(arguments.length){
case 1:
return text_area11703__1.call(this,name);
case 2:
return text_area11703__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area11703.cljs$core$IFn$_invoke$arity$1 = text_area11703__1;
text_area11703.cljs$core$IFn$_invoke$arity$2 = text_area11703__2;
return text_area11703;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area11703);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label11704 = (function label11704(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$185,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$165,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label11704);
/**
* Creates a submit button.
*/
sablono.core.submit_button11705 = (function submit_button11705(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$170,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$172,"submit",cljs.core.constant$keyword$145,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button11705);
/**
* Creates a form reset button.
*/
sablono.core.reset_button11706 = (function reset_button11706(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$170,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$172,"reset",cljs.core.constant$keyword$145,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button11706);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to11707 = (function() { 
var form_to11707__delegate = function (p__11708,body){var vec__11710 = p__11708;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11710,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11710,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$190,null,cljs.core.constant$keyword$191,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$192,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$193,method_str,cljs.core.constant$keyword$194,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$192,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$193,"POST",cljs.core.constant$keyword$194,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to11707 = function (p__11708,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to11707__delegate.call(this,p__11708,body);};
form_to11707.cljs$lang$maxFixedArity = 1;
form_to11707.cljs$lang$applyTo = (function (arglist__11711){
var p__11708 = cljs.core.first(arglist__11711);
var body = cljs.core.rest(arglist__11711);
return form_to11707__delegate(p__11708,body);
});
form_to11707.cljs$core$IFn$_invoke$arity$variadic = form_to11707__delegate;
return form_to11707;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to11707);
