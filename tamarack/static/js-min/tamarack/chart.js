// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.chart');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('tamarack.util');
goog.require('goog.string.format');
goog.require('tamarack.util');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('tamarack.canvas');
goog.require('tamarack.canvas');
goog.require('clojure.string');
tamarack.chart.MAIN_FONT = "\"Source Sans Pro\",\"Helvetica Neue\",Helvetica,Arial,sans-serif";
tamarack.chart.all_keys_in_data = (function all_keys_in_data(data){return cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys,cljs.core.vals(data))));
});
tamarack.chart.key_colors = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rgba(46, 198, 255, 0.850)","rgba(112, 191, 64, 0.850)","rgba(255, 170, 65, 0.850)","rgba(252, 89, 55, 0.900)","rgba(88, 98, 195, 0.850)"], null);
tamarack.chart.key_names = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$158,"SQL",cljs.core.constant$keyword$159,"Template",cljs.core.constant$keyword$160,"Requests",cljs.core.constant$keyword$161,"Errors"], null);
tamarack.chart.readable_keyword = (function readable_keyword(key){var name = cljs.core.subs.cljs$core$IFn$_invoke$arity$2((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)),1);var words = clojure.string.split.cljs$core$IFn$_invoke$arity$2(name,"-");var cap_words = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,words);return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cap_words);
});
tamarack.chart.key__GT_str = (function key__GT_str(key){var or__3576__auto__ = (tamarack.chart.key_names.cljs$core$IFn$_invoke$arity$1 ? tamarack.chart.key_names.cljs$core$IFn$_invoke$arity$1(key) : tamarack.chart.key_names.call(null,key));if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return tamarack.chart.readable_keyword(key);
}
});
tamarack.chart.make_base_levels = (function make_base_levels(key_order,data){var incremental_sum = (function incremental_sum(sensor_data){return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__9574,p__9575){var vec__9576 = p__9574;var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9576,0,null);var sum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9576,1,null);var vec__9577 = p__9575;var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9577,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9577,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,sum),(sum + val)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,0], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(sensor_data.cljs$core$IFn$_invoke$arity$1 ? sensor_data.cljs$core$IFn$_invoke$arity$1(key) : sensor_data.call(null,key))], null);
}),key_order)));
});
return cljs.core.zipmap(cljs.core.keys(data),cljs.core.map.cljs$core$IFn$_invoke$arity$2(incremental_sum,cljs.core.vals(data)));
});
tamarack.chart.draw_data = (function draw_data(ctx,canvas_width,canvas_height,data,from,to){var margin_left = 40;var margin_right = 30;var margin_top = 20;var margin_bottom = 40;var width = ((canvas_width - margin_left) - margin_right);var height = ((canvas_height - margin_top) - margin_bottom);var all_keys = tamarack.chart.all_keys_in_data(data);var minutes = tamarack.util.minutes_between(from,to);var base_levels = tamarack.chart.make_base_levels(all_keys,data);var max_data = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (margin_left,margin_right,margin_top,margin_bottom,width,height,all_keys,minutes,base_levels){
return (function (p__9634){var vec__9635 = p__9634;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9635,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9635,1,null);return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0,cljs.core.vals(v));
});})(margin_left,margin_right,margin_top,margin_bottom,width,height,all_keys,minutes,base_levels))
,data));var total_minutes = (cljs.core.count(minutes) - 1);var step_width = (width / total_minutes);var step_height = (((max_data === 0))?0:(height / max_data));var y_ticks = 5;var map__9642_9690 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$151,"#fff"], null);var map__9642_9691__$1 = ((cljs.core.seq_QMARK_(map__9642_9690))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9642_9690):map__9642_9690);var fill9636_9692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9642_9691__$1,cljs.core.constant$keyword$151);var stroke9637_9693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9642_9691__$1,cljs.core.constant$keyword$156);var line_width9639_9694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9642_9691__$1,cljs.core.constant$keyword$154);var font9641_9695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9642_9691__$1,cljs.core.constant$keyword$155);var line_dash9640_9696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9642_9691__$1,cljs.core.constant$keyword$153);var begin_path9638_9697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9642_9691__$1,cljs.core.constant$keyword$152);tamarack.canvas._STAR_ctx_STAR_.save();
if(cljs.core.truth_(fill9636_9692))
{tamarack.canvas._STAR_ctx_STAR_.fillStyle = fill9636_9692;
} else
{}
if(cljs.core.truth_(stroke9637_9693))
{tamarack.canvas._STAR_ctx_STAR_.strokeStyle = stroke9637_9693;
} else
{}
if(cljs.core.truth_(begin_path9638_9697))
{tamarack.canvas._STAR_ctx_STAR_.beginPath();
} else
{}
if(cljs.core.truth_(line_width9639_9694))
{tamarack.canvas._STAR_ctx_STAR_.lineWidth = line_width9639_9694;
} else
{}
if(cljs.core.truth_(line_dash9640_9696))
{tamarack.canvas._STAR_ctx_STAR_.setLineDash(line_dash9640_9696);
} else
{}
if(cljs.core.truth_(font9641_9695))
{tamarack.canvas._STAR_ctx_STAR_.font = font9641_9695;
} else
{}
ctx.fillRect(0,0,canvas_width,canvas_height);
tamarack.canvas._STAR_ctx_STAR_.restore();
tamarack.canvas._STAR_ctx_STAR_.save();
tamarack.canvas._STAR_ctx_STAR_.translate(margin_left,margin_top);
var map__9649_9698 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$152,true,cljs.core.constant$keyword$156,"rgb(187, 187, 187)",cljs.core.constant$keyword$151,"rgb(117, 117, 117)",cljs.core.constant$keyword$154,0.5,cljs.core.constant$keyword$153,[2,2],cljs.core.constant$keyword$155,("10px "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.chart.MAIN_FONT))], null);var map__9649_9699__$1 = ((cljs.core.seq_QMARK_(map__9649_9698))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9649_9698):map__9649_9698);var fill9643_9700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9649_9699__$1,cljs.core.constant$keyword$151);var stroke9644_9701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9649_9699__$1,cljs.core.constant$keyword$156);var begin_path9645_9702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9649_9699__$1,cljs.core.constant$keyword$152);var font9648_9703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9649_9699__$1,cljs.core.constant$keyword$155);var line_dash9647_9704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9649_9699__$1,cljs.core.constant$keyword$153);var line_width9646_9705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9649_9699__$1,cljs.core.constant$keyword$154);tamarack.canvas._STAR_ctx_STAR_.save();
if(cljs.core.truth_(fill9643_9700))
{tamarack.canvas._STAR_ctx_STAR_.fillStyle = fill9643_9700;
} else
{}
if(cljs.core.truth_(stroke9644_9701))
{tamarack.canvas._STAR_ctx_STAR_.strokeStyle = stroke9644_9701;
} else
{}
if(cljs.core.truth_(begin_path9645_9702))
{tamarack.canvas._STAR_ctx_STAR_.beginPath();
} else
{}
if(cljs.core.truth_(line_width9646_9705))
{tamarack.canvas._STAR_ctx_STAR_.lineWidth = line_width9646_9705;
} else
{}
if(cljs.core.truth_(line_dash9647_9704))
{tamarack.canvas._STAR_ctx_STAR_.setLineDash(line_dash9647_9704);
} else
{}
if(cljs.core.truth_(font9648_9703))
{tamarack.canvas._STAR_ctx_STAR_.font = font9648_9703;
} else
{}
var n__4432__auto___9706 = (((step_height === 0))?1:y_ticks);var tick_idx_9707 = 0;while(true){
if((tick_idx_9707 < n__4432__auto___9706))
{var tick_val_9708 = (tick_idx_9707 * (max_data / (y_ticks - 1)));var tick_y_9709 = Math.round((height - (tick_val_9708 * step_height)));var tick_val_round_9710 = goog.string.format("%.2f",tick_val_9708);var text_measure_9711 = ctx.measureText(tick_val_round_9710);var text_width_9712 = (text_measure_9711["width"]);var text_x_9713 = ((0 - text_width_9712) - 8);var text_y_9714 = (tick_y_9709 + 3);tamarack.canvas.move_to(0.5,(0.5 + tick_y_9709));
tamarack.canvas.line_to((0.5 + width),(0.5 + tick_y_9709));
tamarack.canvas.fill_text(tick_val_round_9710,text_x_9713,text_y_9714);
{
var G__9715 = (tick_idx_9707 + 1);
tick_idx_9707 = G__9715;
continue;
}
} else
{}
break;
}
tamarack.canvas.stroke();
tamarack.canvas._STAR_ctx_STAR_.restore();
var draw_single_point = ((function (margin_left,margin_right,margin_top,margin_bottom,width,height,all_keys,minutes,base_levels,max_data,total_minutes,step_width,step_height,y_ticks){
return (function draw_single_point(key,i,t){var x = (i * step_width);var y = (height - (((key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1((base_levels.cljs$core$IFn$_invoke$arity$1 ? base_levels.cljs$core$IFn$_invoke$arity$1(t) : base_levels.call(null,t))) : key.call(null,(base_levels.cljs$core$IFn$_invoke$arity$1 ? base_levels.cljs$core$IFn$_invoke$arity$1(t) : base_levels.call(null,t)))) + (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1((data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(t) : data.call(null,t))) : key.call(null,(data.cljs$core$IFn$_invoke$arity$1 ? data.cljs$core$IFn$_invoke$arity$1(t) : data.call(null,t))))) * step_height));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});})(margin_left,margin_right,margin_top,margin_bottom,width,height,all_keys,minutes,base_levels,max_data,total_minutes,step_width,step_height,y_ticks))
;
var draw_inverse_point = ((function (margin_left,margin_right,margin_top,margin_bottom,width,height,all_keys,minutes,base_levels,max_data,total_minutes,step_width,step_height,y_ticks){
return (function draw_inverse_point(key,i,t){var x = (((cljs.core.count(minutes) - i) - 1) * step_width);var y = (height - ((key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1((base_levels.cljs$core$IFn$_invoke$arity$1 ? base_levels.cljs$core$IFn$_invoke$arity$1(t) : base_levels.call(null,t))) : key.call(null,(base_levels.cljs$core$IFn$_invoke$arity$1 ? base_levels.cljs$core$IFn$_invoke$arity$1(t) : base_levels.call(null,t)))) * step_height));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});})(margin_left,margin_right,margin_top,margin_bottom,width,height,all_keys,minutes,base_levels,max_data,total_minutes,step_width,step_height,y_ticks))
;
var seq__9650_9716 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,all_keys,cljs.core.cycle(tamarack.chart.key_colors)));var chunk__9651_9717 = null;var count__9652_9718 = 0;var i__9653_9719 = 0;while(true){
if((i__9653_9719 < count__9652_9718))
{var vec__9654_9720 = chunk__9651_9717.cljs$core$IIndexed$_nth$arity$2(null,i__9653_9719);var key_9721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9654_9720,0,null);var color_9722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9654_9720,1,null);var polygon_9723 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$151,color_9722,cljs.core.constant$keyword$150,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(draw_single_point,key_9721),minutes),cljs.core.map_indexed(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(draw_inverse_point,key_9721),cljs.core.reverse(minutes)))], null);tamarack.canvas.draw_polygon(polygon_9723);
{
var G__9724 = seq__9650_9716;
var G__9725 = chunk__9651_9717;
var G__9726 = count__9652_9718;
var G__9727 = (i__9653_9719 + 1);
seq__9650_9716 = G__9724;
chunk__9651_9717 = G__9725;
count__9652_9718 = G__9726;
i__9653_9719 = G__9727;
continue;
}
} else
{var temp__4126__auto___9728 = cljs.core.seq(seq__9650_9716);if(temp__4126__auto___9728)
{var seq__9650_9729__$1 = temp__4126__auto___9728;if(cljs.core.chunked_seq_QMARK_(seq__9650_9729__$1))
{var c__4332__auto___9730 = cljs.core.chunk_first(seq__9650_9729__$1);{
var G__9731 = cljs.core.chunk_rest(seq__9650_9729__$1);
var G__9732 = c__4332__auto___9730;
var G__9733 = cljs.core.count(c__4332__auto___9730);
var G__9734 = 0;
seq__9650_9716 = G__9731;
chunk__9651_9717 = G__9732;
count__9652_9718 = G__9733;
i__9653_9719 = G__9734;
continue;
}
} else
{var vec__9655_9735 = cljs.core.first(seq__9650_9729__$1);var key_9736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9655_9735,0,null);var color_9737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9655_9735,1,null);var polygon_9738 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$151,color_9737,cljs.core.constant$keyword$150,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(draw_single_point,key_9736),minutes),cljs.core.map_indexed(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(draw_inverse_point,key_9736),cljs.core.reverse(minutes)))], null);tamarack.canvas.draw_polygon(polygon_9738);
{
var G__9739 = cljs.core.next(seq__9650_9729__$1);
var G__9740 = null;
var G__9741 = 0;
var G__9742 = 0;
seq__9650_9716 = G__9739;
chunk__9651_9717 = G__9740;
count__9652_9718 = G__9741;
i__9653_9719 = G__9742;
continue;
}
}
} else
{}
}
break;
}
var seq__9656_9743 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,all_keys,cljs.core.cycle(tamarack.chart.key_colors),cljs.core.range.cljs$core$IFn$_invoke$arity$0()));var chunk__9657_9744 = null;var count__9658_9745 = 0;var i__9659_9746 = 0;while(true){
if((i__9659_9746 < count__9658_9745))
{var vec__9660_9747 = chunk__9657_9744.cljs$core$IIndexed$_nth$arity$2(null,i__9659_9746);var key_9748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9660_9747,0,null);var color_9749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9660_9747,1,null);var index_9750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9660_9747,2,null);var x_9751 = ((index_9750 * 61) - (margin_left / 2));var y_9752 = (height + 15);var map__9667_9753 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$152,true,cljs.core.constant$keyword$151,color_9749], null);var map__9667_9754__$1 = ((cljs.core.seq_QMARK_(map__9667_9753))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9667_9753):map__9667_9753);var fill9661_9755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9667_9754__$1,cljs.core.constant$keyword$151);var font9666_9756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9667_9754__$1,cljs.core.constant$keyword$155);var begin_path9663_9757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9667_9754__$1,cljs.core.constant$keyword$152);var line_dash9665_9758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9667_9754__$1,cljs.core.constant$keyword$153);var line_width9664_9759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9667_9754__$1,cljs.core.constant$keyword$154);var stroke9662_9760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9667_9754__$1,cljs.core.constant$keyword$156);tamarack.canvas._STAR_ctx_STAR_.save();
if(cljs.core.truth_(fill9661_9755))
{tamarack.canvas._STAR_ctx_STAR_.fillStyle = fill9661_9755;
} else
{}
if(cljs.core.truth_(stroke9662_9760))
{tamarack.canvas._STAR_ctx_STAR_.strokeStyle = stroke9662_9760;
} else
{}
if(cljs.core.truth_(begin_path9663_9757))
{tamarack.canvas._STAR_ctx_STAR_.beginPath();
} else
{}
if(cljs.core.truth_(line_width9664_9759))
{tamarack.canvas._STAR_ctx_STAR_.lineWidth = line_width9664_9759;
} else
{}
if(cljs.core.truth_(line_dash9665_9758))
{tamarack.canvas._STAR_ctx_STAR_.setLineDash(line_dash9665_9758);
} else
{}
if(cljs.core.truth_(font9666_9756))
{tamarack.canvas._STAR_ctx_STAR_.font = font9666_9756;
} else
{}
tamarack.canvas.rect(x_9751,y_9752,12,12);
tamarack.canvas.fill();
tamarack.canvas._STAR_ctx_STAR_.restore();
var map__9674_9761 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$152,true,cljs.core.constant$keyword$151,"rgb(117, 117, 117)",cljs.core.constant$keyword$155,("10px "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.chart.MAIN_FONT))], null);var map__9674_9762__$1 = ((cljs.core.seq_QMARK_(map__9674_9761))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9674_9761):map__9674_9761);var stroke9669_9763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9674_9762__$1,cljs.core.constant$keyword$156);var fill9668_9764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9674_9762__$1,cljs.core.constant$keyword$151);var font9673_9765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9674_9762__$1,cljs.core.constant$keyword$155);var line_width9671_9766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9674_9762__$1,cljs.core.constant$keyword$154);var line_dash9672_9767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9674_9762__$1,cljs.core.constant$keyword$153);var begin_path9670_9768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9674_9762__$1,cljs.core.constant$keyword$152);tamarack.canvas._STAR_ctx_STAR_.save();
if(cljs.core.truth_(fill9668_9764))
{tamarack.canvas._STAR_ctx_STAR_.fillStyle = fill9668_9764;
} else
{}
if(cljs.core.truth_(stroke9669_9763))
{tamarack.canvas._STAR_ctx_STAR_.strokeStyle = stroke9669_9763;
} else
{}
if(cljs.core.truth_(begin_path9670_9768))
{tamarack.canvas._STAR_ctx_STAR_.beginPath();
} else
{}
if(cljs.core.truth_(line_width9671_9766))
{tamarack.canvas._STAR_ctx_STAR_.lineWidth = line_width9671_9766;
} else
{}
if(cljs.core.truth_(line_dash9672_9767))
{tamarack.canvas._STAR_ctx_STAR_.setLineDash(line_dash9672_9767);
} else
{}
if(cljs.core.truth_(font9673_9765))
{tamarack.canvas._STAR_ctx_STAR_.font = font9673_9765;
} else
{}
tamarack.canvas.fill_text(tamarack.chart.key__GT_str(key_9748),(x_9751 + 16),(y_9752 + 10));
tamarack.canvas._STAR_ctx_STAR_.restore();
{
var G__9769 = seq__9656_9743;
var G__9770 = chunk__9657_9744;
var G__9771 = count__9658_9745;
var G__9772 = (i__9659_9746 + 1);
seq__9656_9743 = G__9769;
chunk__9657_9744 = G__9770;
count__9658_9745 = G__9771;
i__9659_9746 = G__9772;
continue;
}
} else
{var temp__4126__auto___9773 = cljs.core.seq(seq__9656_9743);if(temp__4126__auto___9773)
{var seq__9656_9774__$1 = temp__4126__auto___9773;if(cljs.core.chunked_seq_QMARK_(seq__9656_9774__$1))
{var c__4332__auto___9775 = cljs.core.chunk_first(seq__9656_9774__$1);{
var G__9776 = cljs.core.chunk_rest(seq__9656_9774__$1);
var G__9777 = c__4332__auto___9775;
var G__9778 = cljs.core.count(c__4332__auto___9775);
var G__9779 = 0;
seq__9656_9743 = G__9776;
chunk__9657_9744 = G__9777;
count__9658_9745 = G__9778;
i__9659_9746 = G__9779;
continue;
}
} else
{var vec__9675_9780 = cljs.core.first(seq__9656_9774__$1);var key_9781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9675_9780,0,null);var color_9782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9675_9780,1,null);var index_9783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9675_9780,2,null);var x_9784 = ((index_9783 * 61) - (margin_left / 2));var y_9785 = (height + 15);var map__9682_9786 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$152,true,cljs.core.constant$keyword$151,color_9782], null);var map__9682_9787__$1 = ((cljs.core.seq_QMARK_(map__9682_9786))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9682_9786):map__9682_9786);var line_width9679_9788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9682_9787__$1,cljs.core.constant$keyword$154);var fill9676_9789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9682_9787__$1,cljs.core.constant$keyword$151);var begin_path9678_9790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9682_9787__$1,cljs.core.constant$keyword$152);var stroke9677_9791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9682_9787__$1,cljs.core.constant$keyword$156);var line_dash9680_9792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9682_9787__$1,cljs.core.constant$keyword$153);var font9681_9793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9682_9787__$1,cljs.core.constant$keyword$155);tamarack.canvas._STAR_ctx_STAR_.save();
if(cljs.core.truth_(fill9676_9789))
{tamarack.canvas._STAR_ctx_STAR_.fillStyle = fill9676_9789;
} else
{}
if(cljs.core.truth_(stroke9677_9791))
{tamarack.canvas._STAR_ctx_STAR_.strokeStyle = stroke9677_9791;
} else
{}
if(cljs.core.truth_(begin_path9678_9790))
{tamarack.canvas._STAR_ctx_STAR_.beginPath();
} else
{}
if(cljs.core.truth_(line_width9679_9788))
{tamarack.canvas._STAR_ctx_STAR_.lineWidth = line_width9679_9788;
} else
{}
if(cljs.core.truth_(line_dash9680_9792))
{tamarack.canvas._STAR_ctx_STAR_.setLineDash(line_dash9680_9792);
} else
{}
if(cljs.core.truth_(font9681_9793))
{tamarack.canvas._STAR_ctx_STAR_.font = font9681_9793;
} else
{}
tamarack.canvas.rect(x_9784,y_9785,12,12);
tamarack.canvas.fill();
tamarack.canvas._STAR_ctx_STAR_.restore();
var map__9689_9794 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$152,true,cljs.core.constant$keyword$151,"rgb(117, 117, 117)",cljs.core.constant$keyword$155,("10px "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.chart.MAIN_FONT))], null);var map__9689_9795__$1 = ((cljs.core.seq_QMARK_(map__9689_9794))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9689_9794):map__9689_9794);var line_width9686_9796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9689_9795__$1,cljs.core.constant$keyword$154);var font9688_9797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9689_9795__$1,cljs.core.constant$keyword$155);var stroke9684_9798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9689_9795__$1,cljs.core.constant$keyword$156);var line_dash9687_9799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9689_9795__$1,cljs.core.constant$keyword$153);var fill9683_9800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9689_9795__$1,cljs.core.constant$keyword$151);var begin_path9685_9801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9689_9795__$1,cljs.core.constant$keyword$152);tamarack.canvas._STAR_ctx_STAR_.save();
if(cljs.core.truth_(fill9683_9800))
{tamarack.canvas._STAR_ctx_STAR_.fillStyle = fill9683_9800;
} else
{}
if(cljs.core.truth_(stroke9684_9798))
{tamarack.canvas._STAR_ctx_STAR_.strokeStyle = stroke9684_9798;
} else
{}
if(cljs.core.truth_(begin_path9685_9801))
{tamarack.canvas._STAR_ctx_STAR_.beginPath();
} else
{}
if(cljs.core.truth_(line_width9686_9796))
{tamarack.canvas._STAR_ctx_STAR_.lineWidth = line_width9686_9796;
} else
{}
if(cljs.core.truth_(line_dash9687_9799))
{tamarack.canvas._STAR_ctx_STAR_.setLineDash(line_dash9687_9799);
} else
{}
if(cljs.core.truth_(font9688_9797))
{tamarack.canvas._STAR_ctx_STAR_.font = font9688_9797;
} else
{}
tamarack.canvas.fill_text(tamarack.chart.key__GT_str(key_9781),(x_9784 + 16),(y_9785 + 10));
tamarack.canvas._STAR_ctx_STAR_.restore();
{
var G__9802 = cljs.core.next(seq__9656_9774__$1);
var G__9803 = null;
var G__9804 = 0;
var G__9805 = 0;
seq__9656_9743 = G__9802;
chunk__9657_9744 = G__9803;
count__9658_9745 = G__9804;
i__9659_9746 = G__9805;
continue;
}
}
} else
{}
}
break;
}
return tamarack.canvas._STAR_ctx_STAR_.restore();
});
