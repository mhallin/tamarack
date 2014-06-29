// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.canvas');
goog.require('cljs.core');
tamarack.canvas._STAR_ctx_STAR_ = null;
tamarack.canvas.move_to = (function move_to(x,y){return tamarack.canvas._STAR_ctx_STAR_.moveTo(x,y);
});
tamarack.canvas.line_to = (function line_to(x,y){return tamarack.canvas._STAR_ctx_STAR_.lineTo(x,y);
});
tamarack.canvas.rect = (function rect(x,y,w,h){return tamarack.canvas._STAR_ctx_STAR_.rect(x,y,w,h);
});
tamarack.canvas.fill_text = (function fill_text(text,x,y){return tamarack.canvas._STAR_ctx_STAR_.fillText(text,x,y);
});
tamarack.canvas.stroke = (function stroke(){return tamarack.canvas._STAR_ctx_STAR_.stroke();
});
tamarack.canvas.fill = (function fill(){return tamarack.canvas._STAR_ctx_STAR_.fill();
});
tamarack.canvas.draw_polygon = (function draw_polygon(p__9500){var map__9515 = p__9500;var map__9515__$1 = ((cljs.core.seq_QMARK_(map__9515))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9515):map__9515);var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9515__$1,cljs.core.constant$keyword$150);var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9515__$1,cljs.core.constant$keyword$151);var draw_point = ((function (map__9515,map__9515__$1,points,fill){
return (function draw_point(i,p__9519){var vec__9521 = p__9519;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9521,0,null);var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9521,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,0))
{return tamarack.canvas.move_to(x,y);
} else
{return tamarack.canvas.line_to(x,y);
}
});})(map__9515,map__9515__$1,points,fill))
;
var map__9528 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$151,fill,cljs.core.constant$keyword$152,true], null);var map__9528__$1 = ((cljs.core.seq_QMARK_(map__9528))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9528):map__9528);var fill9522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9528__$1,cljs.core.constant$keyword$151);var line_dash9526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9528__$1,cljs.core.constant$keyword$153);var begin_path9524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9528__$1,cljs.core.constant$keyword$152);var stroke9523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9528__$1,cljs.core.constant$keyword$156);var line_width9525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9528__$1,cljs.core.constant$keyword$154);var font9527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9528__$1,cljs.core.constant$keyword$155);tamarack.canvas._STAR_ctx_STAR_.save();
if(cljs.core.truth_(fill9522))
{tamarack.canvas._STAR_ctx_STAR_.fillStyle = fill9522;
} else
{}
if(cljs.core.truth_(stroke9523))
{tamarack.canvas._STAR_ctx_STAR_.strokeStyle = stroke9523;
} else
{}
if(cljs.core.truth_(begin_path9524))
{tamarack.canvas._STAR_ctx_STAR_.beginPath();
} else
{}
if(cljs.core.truth_(line_width9525))
{tamarack.canvas._STAR_ctx_STAR_.lineWidth = line_width9525;
} else
{}
if(cljs.core.truth_(line_dash9526))
{tamarack.canvas._STAR_ctx_STAR_.setLineDash(line_dash9526);
} else
{}
if(cljs.core.truth_(font9527))
{tamarack.canvas._STAR_ctx_STAR_.font = font9527;
} else
{}
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed(draw_point,points));
if(cljs.core.truth_(fill))
{tamarack.canvas.fill();
} else
{}
return tamarack.canvas._STAR_ctx_STAR_.restore();
});
