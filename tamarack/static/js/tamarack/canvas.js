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
tamarack.canvas.draw_polygon = (function draw_polygon(p__4956){var map__4971 = p__4956;var map__4971__$1 = ((cljs.core.seq_QMARK_.call(null,map__4971))?cljs.core.apply.call(null,cljs.core.hash_map,map__4971):map__4971);var points = cljs.core.get.call(null,map__4971__$1,new cljs.core.Keyword(null,"points","points",4326117461));var fill = cljs.core.get.call(null,map__4971__$1,new cljs.core.Keyword(null,"fill","fill",1017047285));var draw_point = ((function (map__4971,map__4971__$1,points,fill){
return (function draw_point(i,p__4975){var vec__4977 = p__4975;var x = cljs.core.nth.call(null,vec__4977,0,null);var y = cljs.core.nth.call(null,vec__4977,1,null);if(cljs.core._EQ_.call(null,i,0))
{return tamarack.canvas.move_to.call(null,x,y);
} else
{return tamarack.canvas.line_to.call(null,x,y);
}
});})(map__4971,map__4971__$1,points,fill))
;
var map__4984 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",1017047285),fill,new cljs.core.Keyword(null,"begin-path","begin-path",2079785531),true], null);var map__4984__$1 = ((cljs.core.seq_QMARK_.call(null,map__4984))?cljs.core.apply.call(null,cljs.core.hash_map,map__4984):map__4984);var stroke4979 = cljs.core.get.call(null,map__4984__$1,new cljs.core.Keyword(null,"stroke","stroke",4416891306));var begin_path4980 = cljs.core.get.call(null,map__4984__$1,new cljs.core.Keyword(null,"begin-path","begin-path",2079785531));var font4983 = cljs.core.get.call(null,map__4984__$1,new cljs.core.Keyword(null,"font","font",1017053121));var line_dash4982 = cljs.core.get.call(null,map__4984__$1,new cljs.core.Keyword(null,"line-dash","line-dash",3466145085));var fill4978 = cljs.core.get.call(null,map__4984__$1,new cljs.core.Keyword(null,"fill","fill",1017047285));var line_width4981 = cljs.core.get.call(null,map__4984__$1,new cljs.core.Keyword(null,"line-width","line-width",4036697631));tamarack.canvas._STAR_ctx_STAR_.save();
if(cljs.core.truth_(fill4978))
{tamarack.canvas._STAR_ctx_STAR_.fillStyle = fill4978;
} else
{}
if(cljs.core.truth_(stroke4979))
{tamarack.canvas._STAR_ctx_STAR_.strokeStyle = stroke4979;
} else
{}
if(cljs.core.truth_(begin_path4980))
{tamarack.canvas._STAR_ctx_STAR_.beginPath();
} else
{}
if(cljs.core.truth_(line_width4981))
{tamarack.canvas._STAR_ctx_STAR_.lineWidth = line_width4981;
} else
{}
if(cljs.core.truth_(line_dash4982))
{tamarack.canvas._STAR_ctx_STAR_.setLineDash(line_dash4982);
} else
{}
if(cljs.core.truth_(font4983))
{tamarack.canvas._STAR_ctx_STAR_.font = font4983;
} else
{}
cljs.core.doall.call(null,cljs.core.map_indexed.call(null,draw_point,points));
if(cljs.core.truth_(fill))
{tamarack.canvas.fill.call(null);
} else
{}
return tamarack.canvas._STAR_ctx_STAR_.restore();
});

//# sourceMappingURL=canvas.js.map