// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
tamarack.util.elem_content_size = (function elem_content_size(elem){var style = window.getComputedStyle(elem,null);var pl = (function (){var or__3576__auto__ = parseInt(style.getPropertyValue("padding-left"),10);if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return 0;
}
})();var pr = (function (){var or__3576__auto__ = parseInt(style.getPropertyValue("padding-right"),10);if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return 0;
}
})();var pt = (function (){var or__3576__auto__ = parseInt(style.getPropertyValue("padding-top"),10);if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return 0;
}
})();var pb = (function (){var or__3576__auto__ = parseInt(style.getPropertyValue("padding-bottom"),10);if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return 0;
}
})();var cw = elem.clientWidth;var ch = elem.clientHeight;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cw - pl) - pr),((ch - pt) - pb)], null);
});
tamarack.util.minutes_between = (function minutes_between(from,to){var now = from;var minutes = cljs.core.PersistentVector.EMPTY;while(true){
if((now.getTime() > to.getTime()))
{return minutes;
} else
{{
var G__10527 = (new Date((60000 + now.getTime())));
var G__10528 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(minutes,now.getTime());
now = G__10527;
minutes = G__10528;
continue;
}
}
break;
}
});
tamarack.util.trunc_to_minute = (function trunc_to_minute(d){return (new Date((Math.round((d.getTime() / 60000)) * 60000)));
});
tamarack.util.subtract_seconds = (function subtract_seconds(d,s){return (new Date((d.getTime() - (s * 1000))));
});
tamarack.util.element_by_id = (function element_by_id(id){return document.getElementById(id);
});
tamarack.util.log = (function log(o){return console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([o], 0)));
});
tamarack.util.rpad = (function rpad(n,c,v){var s = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));var missing = (n - cljs.core.count(s));if((missing > 0))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s,missing){
return (function (_){return c;
});})(s,missing))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(missing))))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
} else
{return s;
}
});
tamarack.util.inst__GT_local_date_str = (function inst__GT_local_date_str(d){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tamarack.util.rpad(4,"0",d.getFullYear()),tamarack.util.rpad(2,"0",(1 + d.getMonth())),tamarack.util.rpad(2,"0",d.getDate())], null));
});
tamarack.util.inst__GT_local_time_str = (function inst__GT_local_time_str(d){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(":",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tamarack.util.rpad(2,"0",d.getHours()),tamarack.util.rpad(2,"0",d.getMinutes())], null));
});
tamarack.util.inst__GT_iso = (function inst__GT_iso(d){var iso_format = d.toISOString();var dot_pos = iso_format.indexOf(".");var part = iso_format.substr(0,dot_pos);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(part)+"Z");
});
tamarack.util.parse_date_time = (function parse_date_time(date_str,time_str){var vec__10533 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10529_SHARP_){return parseInt(p1__10529_SHARP_,10);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_str,"-"));var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10533,0,null);var mo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10533,1,null);var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10533,2,null);var vec__10534 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__10533,y,mo,d){
return (function (p1__10530_SHARP_){return parseInt(p1__10530_SHARP_,10);
});})(vec__10533,y,mo,d))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(time_str,":"));var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10534,0,null);var mi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10534,1,null);return (new Date(y,(mo - 1),d,h,mi));
});
tamarack.util.SHORT_MONTH_NAMES = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], null);
tamarack.util.timeslice__GT_str = (function timeslice__GT_str(p__10535){var map__10538 = p__10535;var map__10538__$1 = ((cljs.core.seq_QMARK_(map__10538))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10538):map__10538);var vec__10539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10538__$1,cljs.core.constant$keyword$157);var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10539,0,null);var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10539,1,null);var same_year = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from.getFullYear(),to.getFullYear());var same_month = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from.getMonth(),to.getMonth());var same_day = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from.getDate(),to.getDate());var same_date = (same_year) && (same_month) && (same_day);if(same_date)
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_local_date_str(from))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_local_time_str(from))+"\u2013"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_local_time_str(to)));
} else
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_local_date_str(from))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_local_time_str(from))+"\u2013"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_local_date_str(to))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.util.inst__GT_local_time_str(to)));
}
});
tamarack.util.round_to = (function round_to(places,n){var m = Math.pow(10,places);return (Math.round((n * m)) / m);
});
