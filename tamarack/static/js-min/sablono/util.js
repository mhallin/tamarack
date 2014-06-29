// Compiled by ClojureScript 0.0-2227
goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('goog.Uri');
sablono.util._STAR_base_url_STAR_ = null;
sablono.util.ToString = (function (){var obj11725 = {};return obj11725;
})();
sablono.util.to_str = (function to_str(x){if((function (){var and__3564__auto__ = x;if(and__3564__auto__)
{return x.sablono$util$ToString$to_str$arity$1;
} else
{return and__3564__auto__;
}
})())
{return x.sablono$util$ToString$to_str$arity$1(x);
} else
{var x__4203__auto__ = (((x == null))?null:x);return (function (){var or__3576__auto__ = (sablono.util.to_str[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (sablono.util.to_str["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("ToString.to-str",x);
}
}
})().call(null,x);
}
});
sablono.util.ToURI = (function (){var obj11727 = {};return obj11727;
})();
sablono.util.to_uri = (function to_uri(x){if((function (){var and__3564__auto__ = x;if(and__3564__auto__)
{return x.sablono$util$ToURI$to_uri$arity$1;
} else
{return and__3564__auto__;
}
})())
{return x.sablono$util$ToURI$to_uri$arity$1(x);
} else
{var x__4203__auto__ = (((x == null))?null:x);return (function (){var or__3576__auto__ = (sablono.util.to_uri[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (sablono.util.to_uri["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("ToURI.to-uri",x);
}
}
})().call(null,x);
}
});
/**
* Converts its arguments into a string using to-str.
* @param {...*} var_args
*/
sablono.util.as_str = (function() { 
var as_str__delegate = function (xs){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.to_str,xs));
};
var as_str = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return as_str__delegate.call(this,xs);};
as_str.cljs$lang$maxFixedArity = 0;
as_str.cljs$lang$applyTo = (function (arglist__11728){
var xs = cljs.core.seq(arglist__11728);
return as_str__delegate(xs);
});
as_str.cljs$core$IFn$_invoke$arity$variadic = as_str__delegate;
return as_str;
})()
;
/**
* Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
*/
sablono.util.camel_case = (function camel_case(k){if(cljs.core.truth_(k))
{var vec__11730 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(k),/-/);var first_word = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11730,0,null);var words = cljs.core.nthnext(vec__11730,1);if((cljs.core.empty_QMARK_(words)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("aria",first_word)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("data",first_word)))
{return k;
} else
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words),first_word)));
}
} else
{return null;
}
});
/**
* Converts all HTML attributes to their DOM equivalents.
*/
sablono.util.html_to_dom_attrs = (function html_to_dom_attrs(attrs){var dom_attrs = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.zipmap(cljs.core.keys(attrs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.camel_case,cljs.core.keys(attrs))),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$162,cljs.core.constant$keyword$164,cljs.core.constant$keyword$163,cljs.core.constant$keyword$165], null)], 0));return clojure.set.rename_keys(attrs,dom_attrs);
});
/**
* Removes all map entries where the value of the entry is empty.
*/
sablono.util.compact_map = (function compact_map(m){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);if(cljs.core.empty_QMARK_(v))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else
{return m__$1;
}
}),m,cljs.core.keys(m));
});
/**
* Like clojure.core/merge but concatenate :class entries.
* @param {...*} var_args
*/
sablono.util.merge_with_class = (function() { 
var merge_with_class__delegate = function (maps){var classes = cljs.core.vec(cljs.core.remove(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__11731_SHARP_){if(cljs.core.list_QMARK_(p1__11731_SHARP_))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11731_SHARP_], null);
} else
{if(cljs.core.sequential_QMARK_(p1__11731_SHARP_))
{return p1__11731_SHARP_;
} else
{if(cljs.core.constant$keyword$140)
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11731_SHARP_], null);
} else
{return null;
}
}
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$162,maps))));var maps__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,maps);if(cljs.core.empty_QMARK_(classes))
{return maps__$1;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(maps__$1,cljs.core.constant$keyword$162,classes);
}
};
var merge_with_class = function (var_args){
var maps = null;if (arguments.length > 0) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return merge_with_class__delegate.call(this,maps);};
merge_with_class.cljs$lang$maxFixedArity = 0;
merge_with_class.cljs$lang$applyTo = (function (arglist__11732){
var maps = cljs.core.seq(arglist__11732);
return merge_with_class__delegate(maps);
});
merge_with_class.cljs$core$IFn$_invoke$arity$variadic = merge_with_class__delegate;
return merge_with_class;
})()
;
/**
* Strip the # and . characters from the beginning of `s`.
*/
sablono.util.strip_css = (function strip_css(s){if(cljs.core.truth_(s))
{return clojure.string.replace(s,/^[.#]/,"");
} else
{return null;
}
});
/**
* Match `s` as a CSS tag and return a vector of tag name, CSS id and
* CSS classes.
*/
sablono.util.match_tag = (function match_tag(s){var matches = cljs.core.re_seq(/[#.]?[^#.]+/,cljs.core.name(s));var vec__11736 = ((cljs.core.empty_QMARK_(matches))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(("Can't match CSS tag: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$166,s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst(matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):((cljs.core.constant$keyword$141)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(matches),cljs.core.rest(matches)], null):null)));var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11736,0,null);var names = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11736,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.strip_css,cljs.core.filter(((function (matches,vec__11736,tag_name,names){
return (function (p1__11733_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(p1__11733_SHARP_));
});})(matches,vec__11736,tag_name,names))
,names))),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(sablono.util.strip_css,cljs.core.filter(((function (matches,vec__11736,tag_name,names){
return (function (p1__11734_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",cljs.core.first(p1__11734_SHARP_));
});})(matches,vec__11736,tag_name,names))
,names)))], null);
});
/**
* Ensure an element vector is of the form [tag-name attrs content].
*/
sablono.util.normalize_element = (function normalize_element(p__11737){var vec__11740 = p__11737;var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11740,0,null);var content = cljs.core.nthnext(vec__11740,1);if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string')))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)+" is not a valid element name."),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$166,tag,cljs.core.constant$keyword$167,content], null));
} else
{}
var vec__11741 = sablono.util.match_tag(tag);var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11741,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11741,1,null);var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11741,2,null);var tag_attrs = sablono.util.compact_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$168,id,cljs.core.constant$keyword$162,class$], null));var map_attrs = cljs.core.first(content);if(cljs.core.map_QMARK_(map_attrs))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([tag_attrs,map_attrs], 0)),cljs.core.next(content)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
/**
* Join the `classes` with a whitespace.
*/
sablono.util.join_classes = (function join_classes(classes){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.flatten(classes));
});
/**
* Returns the React function to render `tag` as a symbol.
*/
sablono.util.react_symbol = (function react_symbol(tag){return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",("React.DOM."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(tag))));
});
/**
* Same as `react-symbol` but wrap input and text elements.
*/
sablono.util.react_fn = (function react_fn(tag){var dom_fn = sablono.util.react_symbol(tag);if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$169,null,cljs.core.constant$keyword$170,null], null), null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag)))
{return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("sablono.interpreter",cljs.core.name(tag));
} else
{return dom_fn;
}
});
/**
* Returns a regular expression that matches the HTML attribute `attr`
* and it's value.
*/
sablono.util.attr_pattern = (function attr_pattern(attr){return cljs.core.re_pattern(("\\s+"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))+"\\s*=\\s*['\"][^\"']+['\"]"));
});
/**
* Strip the HTML attribute `attr` and it's value from the string `s`.
*/
sablono.util.strip_attr = (function strip_attr(s,attr){if(cljs.core.truth_(s))
{return clojure.string.replace(s,sablono.util.attr_pattern(attr),"");
} else
{return null;
}
});
/**
* Strip the outer HTML tag from the string `s`.
*/
sablono.util.strip_outer = (function strip_outer(s){if(cljs.core.truth_(s))
{return clojure.string.replace(clojure.string.replace(s,/^\s*<[^>]+>\s*/,""),/\s*<\/[^>]+>\s*$/,"");
} else
{return null;
}
});
(sablono.util.ToString["_"] = true);
(sablono.util.to_str["_"] = (function (x){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
}));
(sablono.util.ToString["number"] = true);
(sablono.util.to_str["number"] = (function (x){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
}));
(sablono.util.ToString["null"] = true);
(sablono.util.to_str["null"] = (function (_){return "";
}));
goog.Uri.prototype.sablono$util$ToString$ = true;
goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){var x__$1 = this;if(cljs.core.truth_((function (){var or__3576__auto__ = x__$1.hasDomain();if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return ((x__$1.getPath() == null)) || (cljs.core.not(cljs.core.re_matches(/^\/.*/,x__$1.getPath())));
}
})()))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1));
} else
{var base = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util._STAR_base_url_STAR_));if(cljs.core.truth_(cljs.core.re_matches(/.*\/$/,base)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(base,0,(cljs.core.count(base) - 1)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1));
}
}
});
cljs.core.Keyword.prototype.sablono$util$ToString$ = true;
cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){var x__$1 = this;return cljs.core.name(x__$1);
});
(sablono.util.ToURI["_"] = true);
(sablono.util.to_uri["_"] = (function (x){return (new goog.Uri((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
}));
goog.Uri.prototype.sablono$util$ToURI$ = true;
goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){var x__$1 = this;return x__$1;
});
