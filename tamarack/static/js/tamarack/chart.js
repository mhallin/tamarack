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
tamarack.chart.all_keys_in_data = (function all_keys_in_data(data){return cljs.core.sort.call(null,cljs.core.set.call(null,cljs.core.mapcat.call(null,cljs.core.keys,cljs.core.vals.call(null,data))));
});
tamarack.chart.key_colors = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rgba(46, 198, 255, 0.850)","rgba(112, 191, 64, 0.850)","rgba(255, 170, 65, 0.850)","rgba(252, 89, 55, 0.900)","rgba(88, 98, 195, 0.850)"], null);
tamarack.chart.key_names = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sql","sql",1014018368),"SQL",new cljs.core.Keyword(null,"template-render","template-render",2613687739),"Template",new cljs.core.Keyword(null,"request-count","request-count",1313661891),"Requests",new cljs.core.Keyword(null,"error-count","error-count",3044115580),"Errors"], null);
tamarack.chart.readable_keyword = (function readable_keyword(key){var name = cljs.core.subs.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)),1);var words = clojure.string.split.call(null,name,"-");var cap_words = cljs.core.map.call(null,clojure.string.capitalize,words);return clojure.string.join.call(null," ",cap_words);
});
tamarack.chart.key__GT_str = (function key__GT_str(key){var or__3576__auto__ = tamarack.chart.key_names.call(null,key);if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return tamarack.chart.readable_keyword.call(null,key);
}
});
tamarack.chart.make_base_levels = (function make_base_levels(key_order,data){var incremental_sum = (function incremental_sum(sensor_data){return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__5030,p__5031){var vec__5032 = p__5030;var acc = cljs.core.nth.call(null,vec__5032,0,null);var sum = cljs.core.nth.call(null,vec__5032,1,null);var vec__5033 = p__5031;var key = cljs.core.nth.call(null,vec__5033,0,null);var val = cljs.core.nth.call(null,vec__5033,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,acc,key,sum),(sum + val)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,0], null),cljs.core.map.call(null,(function (key){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,sensor_data.call(null,key)], null);
}),key_order)));
});
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,data),cljs.core.map.call(null,incremental_sum,cljs.core.vals.call(null,data)));
});
tamarack.chart.draw_data = (function draw_data(ctx,canvas_width,canvas_height,data,from,to){var margin_left = 40;var margin_right = 30;var margin_top = 20;var margin_bottom = 40;var width = ((canvas_width - margin_left) - margin_right);var height = ((canvas_height - margin_top) - margin_bottom);var all_keys = tamarack.chart.all_keys_in_data.call(null,data);var minutes = tamarack.util.minutes_between.call(null,from,to);var base_levels = tamarack.chart.make_base_levels.call(null,all_keys,data);var max_data = cljs.core.apply.call(null,cljs.core.max,0,cljs.core.map.call(null,((function (margin_left,margin_right,margin_top,margin_bottom,width,height,all_keys,minutes,base_levels){
return (function (p__5090){var vec__5091 = p__5090;var _ = cljs.core.nth.call(null,vec__5091,0,null);var v = cljs.core.nth.call(null,vec__5091,1,null);return cljs.core.reduce.call(null,cljs.core._PLUS_,0,cljs.core.vals.call(null,v));
});})(margin_left,margin_right,margin_top,margin_bottom,width,height,all_keys,minutes,base_levels))
,data));var total_minutes = (cljs.core.count.call(null,minutes) - 1);var step_width = (width / total_minutes);var step_height = (((max_data === 0))?0:(height / max_data));var y_ticks = 5;var map__5098_5146 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",1017047285),"#fff"], null);var map__5098_5147__$1 = ((cljs.core.seq_QMARK_.call(null,map__5098_5146))?cljs.core.apply.call(null,cljs.core.hash_map,map__5098_5146):map__5098_5146);var fill5092_5148 = cljs.core.get.call(null,map__5098_5147__$1,new cljs.core.Keyword(null,"fill","fill",1017047285));var line_width5095_5149 = cljs.core.get.call(null,map__5098_5147__$1,new cljs.core.Keyword(null,"line-width","line-width",4036697631));var stroke5093_5150 = cljs.core.get.call(null,map__5098_5147__$1,new cljs.core.Keyword(null,"stroke","stroke",4416891306));var font5097_5151 = cljs.core.get.call(null,map__5098_5147__$1,new cljs.core.Keyword(null,"font","font",1017053121));var line_dash5096_5152 = cljs.core.get.call(null,map__5098_5147__$1,new cljs.core.Keyword(null,"line-dash","line-dash",3466145085));var begin_path5094_5153 = cljs.core.get.call(null,map__5098_5147__$1,new cljs.core.Keyword(null,"begin-path","begin-path",2079785531));tamarack.canvas._STAR_ctx_STAR_.save();
if(cljs.core.truth_(fill5092_5148))
{tamarack.canvas._STAR_ctx_STAR_.fillStyle = fill5092_5148;
} else
{}
if(cljs.core.truth_(stroke5093_5150))
{tamarack.canvas._STAR_ctx_STAR_.strokeStyle = stroke5093_5150;
} else
{}
if(cljs.core.truth_(begin_path5094_5153))
{tamarack.canvas._STAR_ctx_STAR_.beginPath();
} else
{}
if(cljs.core.truth_(line_width5095_5149))
{tamarack.canvas._STAR_ctx_STAR_.lineWidth = line_width5095_5149;
} else
{}
if(cljs.core.truth_(line_dash5096_5152))
{tamarack.canvas._STAR_ctx_STAR_.setLineDash(line_dash5096_5152);
} else
{}
if(cljs.core.truth_(font5097_5151))
{tamarack.canvas._STAR_ctx_STAR_.font = font5097_5151;
} else
{}
ctx.fillRect(0,0,canvas_width,canvas_height);
tamarack.canvas._STAR_ctx_STAR_.restore();
tamarack.canvas._STAR_ctx_STAR_.save();
tamarack.canvas._STAR_ctx_STAR_.translate(margin_left,margin_top);
var map__5105_5154 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"begin-path","begin-path",2079785531),true,new cljs.core.Keyword(null,"stroke","stroke",4416891306),"rgb(187, 187, 187)",new cljs.core.Keyword(null,"fill","fill",1017047285),"rgb(117, 117, 117)",new cljs.core.Keyword(null,"line-width","line-width",4036697631),0.5,new cljs.core.Keyword(null,"line-dash","line-dash",3466145085),[2,2],new cljs.core.Keyword(null,"font","font",1017053121),("10px "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.chart.MAIN_FONT))], null);var map__5105_5155__$1 = ((cljs.core.seq_QMARK_.call(null,map__5105_5154))?cljs.core.apply.call(null,cljs.core.hash_map,map__5105_5154):map__5105_5154);var fill5099_5156 = cljs.core.get.call(null,map__5105_5155__$1,new cljs.core.Keyword(null,"fill","fill",1017047285));var stroke5100_5157 = cljs.core.get.call(null,map__5105_5155__$1,new cljs.core.Keyword(null,"stroke","stroke",4416891306));var font5104_5158 = cljs.core.get.call(null,map__5105_5155__$1,new cljs.core.Keyword(null,"font","font",1017053121));var line_dash5103_5159 = cljs.core.get.call(null,map__5105_5155__$1,new cljs.core.Keyword(null,"line-dash","line-dash",3466145085));var line_width5102_5160 = cljs.core.get.call(null,map__5105_5155__$1,new cljs.core.Keyword(null,"line-width","line-width",4036697631));var begin_path5101_5161 = cljs.core.get.call(null,map__5105_5155__$1,new cljs.core.Keyword(null,"begin-path","begin-path",2079785531));tamarack.canvas._STAR_ctx_STAR_.save();
if(cljs.core.truth_(fill5099_5156))
{tamarack.canvas._STAR_ctx_STAR_.fillStyle = fill5099_5156;
} else
{}
if(cljs.core.truth_(stroke5100_5157))
{tamarack.canvas._STAR_ctx_STAR_.strokeStyle = stroke5100_5157;
} else
{}
if(cljs.core.truth_(begin_path5101_5161))
{tamarack.canvas._STAR_ctx_STAR_.beginPath();
} else
{}
if(cljs.core.truth_(line_width5102_5160))
{tamarack.canvas._STAR_ctx_STAR_.lineWidth = line_width5102_5160;
} else
{}
if(cljs.core.truth_(line_dash5103_5159))
{tamarack.canvas._STAR_ctx_STAR_.setLineDash(line_dash5103_5159);
} else
{}
if(cljs.core.truth_(font5104_5158))
{tamarack.canvas._STAR_ctx_STAR_.font = font5104_5158;
} else
{}
var n__4432__auto___5162 = (((step_height === 0))?1:y_ticks);var tick_idx_5163 = 0;while(true){
if((tick_idx_5163 < n__4432__auto___5162))
{var tick_val_5164 = (tick_idx_5163 * (max_data / (y_ticks - 1)));var tick_y_5165 = Math.round((height - (tick_val_5164 * step_height)));var tick_val_round_5166 = goog.string.format("%.2f",tick_val_5164);var text_measure_5167 = ctx.measureText(tick_val_round_5166);var text_width_5168 = (text_measure_5167["width"]);var text_x_5169 = ((0 - text_width_5168) - 8);var text_y_5170 = (tick_y_5165 + 3);tamarack.canvas.move_to.call(null,0.5,(0.5 + tick_y_5165));
tamarack.canvas.line_to.call(null,(0.5 + width),(0.5 + tick_y_5165));
tamarack.canvas.fill_text.call(null,tick_val_round_5166,text_x_5169,text_y_5170);
{
var G__5171 = (tick_idx_5163 + 1);
tick_idx_5163 = G__5171;
continue;
}
} else
{}
break;
}
tamarack.canvas.stroke.call(null);
tamarack.canvas._STAR_ctx_STAR_.restore();
var draw_single_point = ((function (margin_left,margin_right,margin_top,margin_bottom,width,height,all_keys,minutes,base_levels,max_data,total_minutes,step_width,step_height,y_ticks){
return (function draw_single_point(key,i,t){var x = (i * step_width);var y = (height - ((key.call(null,base_levels.call(null,t)) + key.call(null,data.call(null,t))) * step_height));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});})(margin_left,margin_right,margin_top,margin_bottom,width,height,all_keys,minutes,base_levels,max_data,total_minutes,step_width,step_height,y_ticks))
;
var draw_inverse_point = ((function (margin_left,margin_right,margin_top,margin_bottom,width,height,all_keys,minutes,base_levels,max_data,total_minutes,step_width,step_height,y_ticks){
return (function draw_inverse_point(key,i,t){var x = (((cljs.core.count.call(null,minutes) - i) - 1) * step_width);var y = (height - (key.call(null,base_levels.call(null,t)) * step_height));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});})(margin_left,margin_right,margin_top,margin_bottom,width,height,all_keys,minutes,base_levels,max_data,total_minutes,step_width,step_height,y_ticks))
;
var seq__5106_5172 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,all_keys,cljs.core.cycle.call(null,tamarack.chart.key_colors)));var chunk__5107_5173 = null;var count__5108_5174 = 0;var i__5109_5175 = 0;while(true){
if((i__5109_5175 < count__5108_5174))
{var vec__5110_5176 = cljs.core._nth.call(null,chunk__5107_5173,i__5109_5175);var key_5177 = cljs.core.nth.call(null,vec__5110_5176,0,null);var color_5178 = cljs.core.nth.call(null,vec__5110_5176,1,null);var polygon_5179 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",1017047285),color_5178,new cljs.core.Keyword(null,"points","points",4326117461),cljs.core.concat.call(null,cljs.core.map_indexed.call(null,cljs.core.partial.call(null,draw_single_point,key_5177),minutes),cljs.core.map_indexed.call(null,cljs.core.partial.call(null,draw_inverse_point,key_5177),cljs.core.reverse.call(null,minutes)))], null);tamarack.canvas.draw_polygon.call(null,polygon_5179);
{
var G__5180 = seq__5106_5172;
var G__5181 = chunk__5107_5173;
var G__5182 = count__5108_5174;
var G__5183 = (i__5109_5175 + 1);
seq__5106_5172 = G__5180;
chunk__5107_5173 = G__5181;
count__5108_5174 = G__5182;
i__5109_5175 = G__5183;
continue;
}
} else
{var temp__4126__auto___5184 = cljs.core.seq.call(null,seq__5106_5172);if(temp__4126__auto___5184)
{var seq__5106_5185__$1 = temp__4126__auto___5184;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5106_5185__$1))
{var c__4332__auto___5186 = cljs.core.chunk_first.call(null,seq__5106_5185__$1);{
var G__5187 = cljs.core.chunk_rest.call(null,seq__5106_5185__$1);
var G__5188 = c__4332__auto___5186;
var G__5189 = cljs.core.count.call(null,c__4332__auto___5186);
var G__5190 = 0;
seq__5106_5172 = G__5187;
chunk__5107_5173 = G__5188;
count__5108_5174 = G__5189;
i__5109_5175 = G__5190;
continue;
}
} else
{var vec__5111_5191 = cljs.core.first.call(null,seq__5106_5185__$1);var key_5192 = cljs.core.nth.call(null,vec__5111_5191,0,null);var color_5193 = cljs.core.nth.call(null,vec__5111_5191,1,null);var polygon_5194 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",1017047285),color_5193,new cljs.core.Keyword(null,"points","points",4326117461),cljs.core.concat.call(null,cljs.core.map_indexed.call(null,cljs.core.partial.call(null,draw_single_point,key_5192),minutes),cljs.core.map_indexed.call(null,cljs.core.partial.call(null,draw_inverse_point,key_5192),cljs.core.reverse.call(null,minutes)))], null);tamarack.canvas.draw_polygon.call(null,polygon_5194);
{
var G__5195 = cljs.core.next.call(null,seq__5106_5185__$1);
var G__5196 = null;
var G__5197 = 0;
var G__5198 = 0;
seq__5106_5172 = G__5195;
chunk__5107_5173 = G__5196;
count__5108_5174 = G__5197;
i__5109_5175 = G__5198;
continue;
}
}
} else
{}
}
break;
}
var seq__5112_5199 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,all_keys,cljs.core.cycle.call(null,tamarack.chart.key_colors),cljs.core.range.call(null)));var chunk__5113_5200 = null;var count__5114_5201 = 0;var i__5115_5202 = 0;while(true){
if((i__5115_5202 < count__5114_5201))
{var vec__5116_5203 = cljs.core._nth.call(null,chunk__5113_5200,i__5115_5202);var key_5204 = cljs.core.nth.call(null,vec__5116_5203,0,null);var color_5205 = cljs.core.nth.call(null,vec__5116_5203,1,null);var index_5206 = cljs.core.nth.call(null,vec__5116_5203,2,null);var x_5207 = ((index_5206 * 61) - (margin_left / 2));var y_5208 = (height + 15);var map__5123_5209 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"begin-path","begin-path",2079785531),true,new cljs.core.Keyword(null,"fill","fill",1017047285),color_5205], null);var map__5123_5210__$1 = ((cljs.core.seq_QMARK_.call(null,map__5123_5209))?cljs.core.apply.call(null,cljs.core.hash_map,map__5123_5209):map__5123_5209);var begin_path5119_5211 = cljs.core.get.call(null,map__5123_5210__$1,new cljs.core.Keyword(null,"begin-path","begin-path",2079785531));var font5122_5212 = cljs.core.get.call(null,map__5123_5210__$1,new cljs.core.Keyword(null,"font","font",1017053121));var line_width5120_5213 = cljs.core.get.call(null,map__5123_5210__$1,new cljs.core.Keyword(null,"line-width","line-width",4036697631));var stroke5118_5214 = cljs.core.get.call(null,map__5123_5210__$1,new cljs.core.Keyword(null,"stroke","stroke",4416891306));var fill5117_5215 = cljs.core.get.call(null,map__5123_5210__$1,new cljs.core.Keyword(null,"fill","fill",1017047285));var line_dash5121_5216 = cljs.core.get.call(null,map__5123_5210__$1,new cljs.core.Keyword(null,"line-dash","line-dash",3466145085));tamarack.canvas._STAR_ctx_STAR_.save();
if(cljs.core.truth_(fill5117_5215))
{tamarack.canvas._STAR_ctx_STAR_.fillStyle = fill5117_5215;
} else
{}
if(cljs.core.truth_(stroke5118_5214))
{tamarack.canvas._STAR_ctx_STAR_.strokeStyle = stroke5118_5214;
} else
{}
if(cljs.core.truth_(begin_path5119_5211))
{tamarack.canvas._STAR_ctx_STAR_.beginPath();
} else
{}
if(cljs.core.truth_(line_width5120_5213))
{tamarack.canvas._STAR_ctx_STAR_.lineWidth = line_width5120_5213;
} else
{}
if(cljs.core.truth_(line_dash5121_5216))
{tamarack.canvas._STAR_ctx_STAR_.setLineDash(line_dash5121_5216);
} else
{}
if(cljs.core.truth_(font5122_5212))
{tamarack.canvas._STAR_ctx_STAR_.font = font5122_5212;
} else
{}
tamarack.canvas.rect.call(null,x_5207,y_5208,12,12);
tamarack.canvas.fill.call(null);
tamarack.canvas._STAR_ctx_STAR_.restore();
var map__5130_5217 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"begin-path","begin-path",2079785531),true,new cljs.core.Keyword(null,"fill","fill",1017047285),"rgb(117, 117, 117)",new cljs.core.Keyword(null,"font","font",1017053121),("10px "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.chart.MAIN_FONT))], null);var map__5130_5218__$1 = ((cljs.core.seq_QMARK_.call(null,map__5130_5217))?cljs.core.apply.call(null,cljs.core.hash_map,map__5130_5217):map__5130_5217);var line_dash5128_5219 = cljs.core.get.call(null,map__5130_5218__$1,new cljs.core.Keyword(null,"line-dash","line-dash",3466145085));var line_width5127_5220 = cljs.core.get.call(null,map__5130_5218__$1,new cljs.core.Keyword(null,"line-width","line-width",4036697631));var font5129_5221 = cljs.core.get.call(null,map__5130_5218__$1,new cljs.core.Keyword(null,"font","font",1017053121));var fill5124_5222 = cljs.core.get.call(null,map__5130_5218__$1,new cljs.core.Keyword(null,"fill","fill",1017047285));var begin_path5126_5223 = cljs.core.get.call(null,map__5130_5218__$1,new cljs.core.Keyword(null,"begin-path","begin-path",2079785531));var stroke5125_5224 = cljs.core.get.call(null,map__5130_5218__$1,new cljs.core.Keyword(null,"stroke","stroke",4416891306));tamarack.canvas._STAR_ctx_STAR_.save();
if(cljs.core.truth_(fill5124_5222))
{tamarack.canvas._STAR_ctx_STAR_.fillStyle = fill5124_5222;
} else
{}
if(cljs.core.truth_(stroke5125_5224))
{tamarack.canvas._STAR_ctx_STAR_.strokeStyle = stroke5125_5224;
} else
{}
if(cljs.core.truth_(begin_path5126_5223))
{tamarack.canvas._STAR_ctx_STAR_.beginPath();
} else
{}
if(cljs.core.truth_(line_width5127_5220))
{tamarack.canvas._STAR_ctx_STAR_.lineWidth = line_width5127_5220;
} else
{}
if(cljs.core.truth_(line_dash5128_5219))
{tamarack.canvas._STAR_ctx_STAR_.setLineDash(line_dash5128_5219);
} else
{}
if(cljs.core.truth_(font5129_5221))
{tamarack.canvas._STAR_ctx_STAR_.font = font5129_5221;
} else
{}
tamarack.canvas.fill_text.call(null,tamarack.chart.key__GT_str.call(null,key_5204),(x_5207 + 16),(y_5208 + 10));
tamarack.canvas._STAR_ctx_STAR_.restore();
{
var G__5225 = seq__5112_5199;
var G__5226 = chunk__5113_5200;
var G__5227 = count__5114_5201;
var G__5228 = (i__5115_5202 + 1);
seq__5112_5199 = G__5225;
chunk__5113_5200 = G__5226;
count__5114_5201 = G__5227;
i__5115_5202 = G__5228;
continue;
}
} else
{var temp__4126__auto___5229 = cljs.core.seq.call(null,seq__5112_5199);if(temp__4126__auto___5229)
{var seq__5112_5230__$1 = temp__4126__auto___5229;if(cljs.core.chunked_seq_QMARK_.call(null,seq__5112_5230__$1))
{var c__4332__auto___5231 = cljs.core.chunk_first.call(null,seq__5112_5230__$1);{
var G__5232 = cljs.core.chunk_rest.call(null,seq__5112_5230__$1);
var G__5233 = c__4332__auto___5231;
var G__5234 = cljs.core.count.call(null,c__4332__auto___5231);
var G__5235 = 0;
seq__5112_5199 = G__5232;
chunk__5113_5200 = G__5233;
count__5114_5201 = G__5234;
i__5115_5202 = G__5235;
continue;
}
} else
{var vec__5131_5236 = cljs.core.first.call(null,seq__5112_5230__$1);var key_5237 = cljs.core.nth.call(null,vec__5131_5236,0,null);var color_5238 = cljs.core.nth.call(null,vec__5131_5236,1,null);var index_5239 = cljs.core.nth.call(null,vec__5131_5236,2,null);var x_5240 = ((index_5239 * 61) - (margin_left / 2));var y_5241 = (height + 15);var map__5138_5242 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"begin-path","begin-path",2079785531),true,new cljs.core.Keyword(null,"fill","fill",1017047285),color_5238], null);var map__5138_5243__$1 = ((cljs.core.seq_QMARK_.call(null,map__5138_5242))?cljs.core.apply.call(null,cljs.core.hash_map,map__5138_5242):map__5138_5242);var line_width5135_5244 = cljs.core.get.call(null,map__5138_5243__$1,new cljs.core.Keyword(null,"line-width","line-width",4036697631));var font5137_5245 = cljs.core.get.call(null,map__5138_5243__$1,new cljs.core.Keyword(null,"font","font",1017053121));var line_dash5136_5246 = cljs.core.get.call(null,map__5138_5243__$1,new cljs.core.Keyword(null,"line-dash","line-dash",3466145085));var fill5132_5247 = cljs.core.get.call(null,map__5138_5243__$1,new cljs.core.Keyword(null,"fill","fill",1017047285));var stroke5133_5248 = cljs.core.get.call(null,map__5138_5243__$1,new cljs.core.Keyword(null,"stroke","stroke",4416891306));var begin_path5134_5249 = cljs.core.get.call(null,map__5138_5243__$1,new cljs.core.Keyword(null,"begin-path","begin-path",2079785531));tamarack.canvas._STAR_ctx_STAR_.save();
if(cljs.core.truth_(fill5132_5247))
{tamarack.canvas._STAR_ctx_STAR_.fillStyle = fill5132_5247;
} else
{}
if(cljs.core.truth_(stroke5133_5248))
{tamarack.canvas._STAR_ctx_STAR_.strokeStyle = stroke5133_5248;
} else
{}
if(cljs.core.truth_(begin_path5134_5249))
{tamarack.canvas._STAR_ctx_STAR_.beginPath();
} else
{}
if(cljs.core.truth_(line_width5135_5244))
{tamarack.canvas._STAR_ctx_STAR_.lineWidth = line_width5135_5244;
} else
{}
if(cljs.core.truth_(line_dash5136_5246))
{tamarack.canvas._STAR_ctx_STAR_.setLineDash(line_dash5136_5246);
} else
{}
if(cljs.core.truth_(font5137_5245))
{tamarack.canvas._STAR_ctx_STAR_.font = font5137_5245;
} else
{}
tamarack.canvas.rect.call(null,x_5240,y_5241,12,12);
tamarack.canvas.fill.call(null);
tamarack.canvas._STAR_ctx_STAR_.restore();
var map__5145_5250 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"begin-path","begin-path",2079785531),true,new cljs.core.Keyword(null,"fill","fill",1017047285),"rgb(117, 117, 117)",new cljs.core.Keyword(null,"font","font",1017053121),("10px "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tamarack.chart.MAIN_FONT))], null);var map__5145_5251__$1 = ((cljs.core.seq_QMARK_.call(null,map__5145_5250))?cljs.core.apply.call(null,cljs.core.hash_map,map__5145_5250):map__5145_5250);var line_width5142_5252 = cljs.core.get.call(null,map__5145_5251__$1,new cljs.core.Keyword(null,"line-width","line-width",4036697631));var stroke5140_5253 = cljs.core.get.call(null,map__5145_5251__$1,new cljs.core.Keyword(null,"stroke","stroke",4416891306));var font5144_5254 = cljs.core.get.call(null,map__5145_5251__$1,new cljs.core.Keyword(null,"font","font",1017053121));var fill5139_5255 = cljs.core.get.call(null,map__5145_5251__$1,new cljs.core.Keyword(null,"fill","fill",1017047285));var begin_path5141_5256 = cljs.core.get.call(null,map__5145_5251__$1,new cljs.core.Keyword(null,"begin-path","begin-path",2079785531));var line_dash5143_5257 = cljs.core.get.call(null,map__5145_5251__$1,new cljs.core.Keyword(null,"line-dash","line-dash",3466145085));tamarack.canvas._STAR_ctx_STAR_.save();
if(cljs.core.truth_(fill5139_5255))
{tamarack.canvas._STAR_ctx_STAR_.fillStyle = fill5139_5255;
} else
{}
if(cljs.core.truth_(stroke5140_5253))
{tamarack.canvas._STAR_ctx_STAR_.strokeStyle = stroke5140_5253;
} else
{}
if(cljs.core.truth_(begin_path5141_5256))
{tamarack.canvas._STAR_ctx_STAR_.beginPath();
} else
{}
if(cljs.core.truth_(line_width5142_5252))
{tamarack.canvas._STAR_ctx_STAR_.lineWidth = line_width5142_5252;
} else
{}
if(cljs.core.truth_(line_dash5143_5257))
{tamarack.canvas._STAR_ctx_STAR_.setLineDash(line_dash5143_5257);
} else
{}
if(cljs.core.truth_(font5144_5254))
{tamarack.canvas._STAR_ctx_STAR_.font = font5144_5254;
} else
{}
tamarack.canvas.fill_text.call(null,tamarack.chart.key__GT_str.call(null,key_5237),(x_5240 + 16),(y_5241 + 10));
tamarack.canvas._STAR_ctx_STAR_.restore();
{
var G__5258 = cljs.core.next.call(null,seq__5112_5230__$1);
var G__5259 = null;
var G__5260 = 0;
var G__5261 = 0;
seq__5112_5199 = G__5258;
chunk__5113_5200 = G__5259;
count__5114_5201 = G__5260;
i__5115_5202 = G__5261;
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

//# sourceMappingURL=chart.js.map