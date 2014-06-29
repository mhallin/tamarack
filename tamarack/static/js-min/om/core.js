// Compiled by ClojureScript 0.0-2227
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_read_enabled_STAR_ = false;
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core.IDisplayName = (function (){var obj11773 = {};return obj11773;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core.display_name[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core.display_name["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj11775 = {};return obj11775;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core.init_state[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core.init_state["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj11777 = {};return obj11777;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core.should_update[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core.should_update["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj11779 = {};return obj11779;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core.will_mount[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core.will_mount["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj11781 = {};return obj11781;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core.did_mount[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core.did_mount["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj11783 = {};return obj11783;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core.will_unmount[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core.will_unmount["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj11785 = {};return obj11785;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core.will_update[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core.will_update["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj11787 = {};return obj11787;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core.did_update[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core.did_update["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj11789 = {};return obj11789;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core.will_receive_props[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core.will_receive_props["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj11791 = {};return obj11791;
})();
om.core.render = (function render(this$){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core.render[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core.render["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderState = (function (){var obj11793 = {};return obj11793;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core.render_state[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core.render_state["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.IOmSwap = (function (){var obj11795 = {};return obj11795;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IGetState = (function (){var obj11797 = {};return obj11797;
})();
om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IGetState$_get_state$arity$1;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$1(this$);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core._get_state[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._get_state["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IGetState$_get_state$arity$2;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core._get_state[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._get_state["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;
om.core.IGetRenderState = (function (){var obj11799 = {};return obj11799;
})();
om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core._get_render_state[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._get_render_state["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core._get_render_state[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._get_render_state["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;
om.core.ISetState = (function (){var obj11801 = {};return obj11801;
})();
om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___2 = (function (this$,val){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$2;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$2(this$,val);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,val);
}
});
var _set_state_BANG___3 = (function (this$,ks,val){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,ks,val);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._set_state_BANG_["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val);
}
});
_set_state_BANG_ = function(this$,ks,val){
switch(arguments.length){
case 2:
return _set_state_BANG___2.call(this,this$,ks);
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = _set_state_BANG___2;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
return _set_state_BANG_;
})()
;
om.core.IRenderQueue = (function (){var obj11803 = {};return obj11803;
})();
om.core._get_queue = (function _get_queue(this$){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core._get_queue[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._get_queue["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});
om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._queue_render_BANG_["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});
om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){if((function (){var and__3564__auto__ = this$;if(and__3564__auto__)
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else
{return and__3564__auto__;
}
})())
{return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else
{var x__4203__auto__ = (((this$ == null))?null:this$);return (function (){var or__3576__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._empty_queue_BANG_["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});
om.core.IValue = (function (){var obj11805 = {};return obj11805;
})();
om.core._value = (function _value(x){if((function (){var and__3564__auto__ = x;if(and__3564__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__3564__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__4203__auto__ = (((x == null))?null:x);return (function (){var or__3576__auto__ = (om.core._value[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._value["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj11807 = {};return obj11807;
})();
om.core._path = (function _path(cursor){if((function (){var and__3564__auto__ = cursor;if(and__3564__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3564__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4203__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3576__auto__ = (om.core._path[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._path["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__3564__auto__ = cursor;if(and__3564__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__3564__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__4203__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3576__auto__ = (om.core._state[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._state["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj11809 = {};return obj11809;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__3564__auto__ = value;if(and__3564__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__3564__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__4203__auto__ = (((value == null))?null:value);return (function (){var or__3576__auto__ = (om.core._to_cursor[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._to_cursor["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__3564__auto__ = value;if(and__3564__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__3564__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__4203__auto__ = (((value == null))?null:value);return (function (){var or__3576__auto__ = (om.core._to_cursor[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._to_cursor["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.ICursorDerive = (function (){var obj11811 = {};return obj11811;
})();
om.core._derive = (function _derive(cursor,derived,state,path){if((function (){var and__3564__auto__ = cursor;if(and__3564__auto__)
{return cursor.om$core$ICursorDerive$_derive$arity$4;
} else
{return and__3564__auto__;
}
})())
{return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else
{var x__4203__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3576__auto__ = (om.core._derive[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._derive["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});
(om.core.ICursorDerive["_"] = true);
(om.core._derive["_"] = (function (this$,derived,state,path){return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path) : om.core.to_cursor.call(null,derived,state,path));
}));
om.core.path = (function path(cursor){return om.core._path(cursor);
});
om.core.value = (function value(cursor){return om.core._value(cursor);
});
om.core.state = (function state(cursor){return om.core._state(cursor);
});
om.core.ITransact = (function (){var obj11813 = {};return obj11813;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__3564__auto__ = cursor;if(and__3564__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__3564__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__4203__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3576__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._transact_BANG_["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj11815 = {};return obj11815;
})();
om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){if((function (){var and__3564__auto__ = x;if(and__3564__auto__)
{return x.om$core$INotify$_listen_BANG_$arity$3;
} else
{return and__3564__auto__;
}
})())
{return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else
{var x__4203__auto__ = (((x == null))?null:x);return (function (){var or__3576__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._listen_BANG_["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});
om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){if((function (){var and__3564__auto__ = x;if(and__3564__auto__)
{return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else
{return and__3564__auto__;
}
})())
{return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else
{var x__4203__auto__ = (((x == null))?null:x);return (function (){var or__3576__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._unlisten_BANG_["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});
om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){if((function (){var and__3564__auto__ = x;if(and__3564__auto__)
{return x.om$core$INotify$_notify_BANG_$arity$3;
} else
{return and__3564__auto__;
}
})())
{return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else
{var x__4203__auto__ = (((x == null))?null:x);return (function (){var or__3576__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4203__auto__)]);if(or__3576__auto__)
{return or__3576__auto__;
} else
{var or__3576__auto____$1 = (om.core._notify_BANG_["_"]);if(or__3576__auto____$1)
{return or__3576__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = cljs.core.deref(state);var path = cljs.core.into((om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(cursor) : om.core.path.call(null,cursor)),korks);var ret = (((function (){var G__11817 = state;if(G__11817)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11817.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__11817.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__11817);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__11817);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):((cljs.core.constant$keyword$140)?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f):null)));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$200))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$201,path,cljs.core.constant$keyword$202,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$203,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),path),cljs.core.constant$keyword$204,old_state,cljs.core.constant$keyword$205,cljs.core.deref(state)], null);if(!((tag == null)))
{return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(cursor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$166,tag)) : om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$166,tag)));
} else
{return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(cursor,tx_data) : om.core.notify_STAR_.call(null,cursor,tx_data));
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__11819 = x;if(G__11819)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11819.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__11819.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__11819);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__11819);
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_(c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_11821 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(node) : c.call(null,node));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11821;
}})();
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{if(cljs.core.empty_QMARK_(korks))
{return get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else
{if(cljs.core.constant$keyword$140)
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{return null;
}
}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4126__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var pending_state = temp__4126__auto__;var G__11823 = state;(G__11823["__om_prev_state"] = (state["__om_state"]));
(G__11823["__om_state"] = pending_state);
(G__11823["__om_pending_state"] = null);
return G__11823;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__3576__auto__ = props;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return owner.props;
}
})();var temp__4126__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4126__auto__))
{var props_state = temp__4126__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3576__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state], 0)));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$206,cljs.core.constant$keyword$207,cljs.core.constant$keyword$208,cljs.core.constant$keyword$209,cljs.core.constant$keyword$210,cljs.core.constant$keyword$211,cljs.core.constant$keyword$212,cljs.core.constant$keyword$213,cljs.core.constant$keyword$214,cljs.core.constant$keyword$215],[(function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);if((function (){var G__11824 = c;if(G__11824)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11824.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__11824.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__11824);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__11824);
}
})())
{var state_11851 = this$.state;var _STAR_read_enabled_STAR_11825_11852 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3576__auto__ = (state_11851["__om_prev_state"]);if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return (state_11851["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11825_11852;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__11826 = c;if(G__11826)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11826.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__11826.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__11826);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__11826);
}
})())
{var _STAR_read_enabled_STAR_11827 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11827;
}} else
{return null;
}
}),(function (next_props){var this$ = this;var c = om.core.children(this$);if((function (){var G__11828 = c;if(G__11828)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11828.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__11828.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__11828);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__11828);
}
})())
{var _STAR_read_enabled_STAR_11829 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_receive_props(c,om.core.get_props({"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11829;
}} else
{return null;
}
}),(function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_11830 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children(this$);om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);
if((function (){var G__11831 = c;if(G__11831)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11831.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__11831.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__11831);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__11831);
}
})())
{return om.core.should_update(c,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value((props["__om_cursor"])),om.core._value((next_props["__om_cursor"]))))
{return true;
} else
{if(!(((state["__om_pending_state"]) == null)))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{if(cljs.core.constant$keyword$140)
{return false;
} else
{return null;
}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11830;
}}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var _STAR_read_enabled_STAR_11832 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__11833 = c;if(G__11833)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11833.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__11833.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__11833);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__11833);
}
})())
{var _STAR_parent_STAR_11834 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_11835 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_11836 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render(c);
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_11836;
om.core._STAR_state_STAR_ = _STAR_state_STAR_11835;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_11834;
}} else
{if((function (){var G__11837 = c;if(G__11837)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11837.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__11837.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__11837);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__11837);
}
})())
{var _STAR_parent_STAR_11838 = om.core._STAR_parent_STAR_;var _STAR_state_STAR_11839 = om.core._STAR_state_STAR_;var _STAR_instrument_STAR_11840 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_state_STAR_ = (props["__om_app_state"]);
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_11840;
om.core._STAR_state_STAR_ = _STAR_state_STAR_11839;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_11838;
}} else
{if(cljs.core.constant$keyword$140)
{return c;
} else
{return null;
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11832;
}}),(function (next_props,next_state){var this$ = this;var c_11853 = om.core.children(this$);if((function (){var G__11841 = c_11853;if(G__11841)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11841.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__11841.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__11841);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__11841);
}
})())
{var state_11854 = this$.state;var _STAR_read_enabled_STAR_11842_11855 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_11853,om.core.get_props({"props": next_props}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11842_11855;
}} else
{}
return om.core.merge_pending_state(this$);
}),(function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var istate = (function (){var or__3576__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = cljs.core.constant$keyword$216.cljs$core$IFn$_invoke$arity$1(istate);var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.constant$keyword$216),(((function (){var G__11843 = c;if(G__11843)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11843.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__11843.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__11843);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__11843);
}
})())?(function (){var _STAR_read_enabled_STAR_11844 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11844;
}})():null)], 0)), "__om_id": (function (){var or__3576__auto__ = id;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};(props["__om_init_state"] = null);
return ret;
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__11845 = c;if(G__11845)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11845.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__11845.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__11845);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__11845);
}
})())
{var _STAR_read_enabled_STAR_11846 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11846;
}} else
{return null;
}
}),(function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__11847 = c;if(G__11847)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11847.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__11847.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__11847);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__11847);
}
})())
{var _STAR_read_enabled_STAR_11848 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.display_name(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11848;
}} else
{return null;
}
}),(function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_11856 = om.core.children(this$);if((function (){var G__11849 = c_11856;if(G__11849)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11849.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__11849.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__11849);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__11849);
}
})())
{var _STAR_read_enabled_STAR_11850_11857 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_11856);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11850_11857;
}} else
{}
return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){var x11861 = obj;x11861.om$core$IGetState$ = true;
x11861.om$core$IGetState$_get_state$arity$1 = ((function (x11861){
return (function (this$){var this$__$1 = this;var state = this$__$1.state;var or__3576__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return (state["__om_state"]);
}
});})(x11861))
;
x11861.om$core$IGetState$_get_state$arity$2 = ((function (x11861){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x11861))
;
x11861.om$core$IGetRenderState$ = true;
x11861.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x11861){
return (function (this$){var this$__$1 = this;return (this$__$1.state["__om_state"]);
});})(x11861))
;
x11861.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x11861){
return (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x11861))
;
x11861.om$core$ISetState$ = true;
x11861.om$core$ISetState$_set_state_BANG_$arity$2 = ((function (x11861){
return (function (this$,val){var this$__$1 = this;var _STAR_read_enabled_STAR_11862 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var app_state = (props["__om_app_state"]);(this$__$1.state["__om_pending_state"] = val);
if((app_state == null))
{return null;
} else
{return om.core._queue_render_BANG_(app_state,this$__$1);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11862;
}});})(x11861))
;
x11861.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x11861){
return (function (this$,ks,val){var this$__$1 = this;var _STAR_read_enabled_STAR_11863 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var state = this$__$1.state;var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);var app_state = (props["__om_app_state"]);(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));
if((app_state == null))
{return null;
} else
{return om.core._queue_render_BANG_(app_state,this$__$1);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11863;
}});})(x11861))
;
return x11861;
});
om.core.Pure = React.createClass(om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods)));
om.core.pure = (function pure(obj){return (new om.core.Pure(obj));
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2158397195;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write(writer__4144__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,not_found);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,not_found)))
{return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer(self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_(self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count(self__.value) > 0))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__11865){var vec__11866 = p__11865;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11866,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11866,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.MapCursor.prototype.call = (function() {
var G__11867 = null;
var G__11867__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__11867__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__11867 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__11867__2.call(this,self__,k);
case 3:
return G__11867__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__11867;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args11864){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11864)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2175181595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4143__auto__,writer__4144__auto__,opt__4145__auto__){return cljs.core._write(writer__4144__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((n < cljs.core._count(self__.value)))
{return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else
{return not_found;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer(self__.value,writer,opts);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count(self__.value);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_(self__.value,k);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count(self__.value) > 0))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else
{return null;
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});
om.core.IndexedCursor.prototype.call = (function() {
var G__11869 = null;
var G__11869__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__11869__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__11869 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__11869__2.call(this,self__,k);
case 3:
return G__11869__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__11869;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args11868){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11868)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),self__.path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x11871 = cljs.core.clone(val);x11871.cljs$core$IEquiv$ = true;
x11871.cljs$core$IEquiv$_equiv$arity$2 = ((function (x11871){
return (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
} else
{throw (new Error(("Cannot manipulate cursor outside of render phase, only om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")));
}
});})(x11871))
;
x11871.om$core$ITransact$ = true;
x11871.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x11871){
return (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x11871))
;
x11871.om$core$ICursor$ = true;
x11871.om$core$ICursor$_path$arity$1 = ((function (x11871){
return (function (_){var ___$1 = this;return path;
});})(x11871))
;
x11871.om$core$ICursor$_state$arity$1 = ((function (x11871){
return (function (_){var ___$1 = this;return state;
});})(x11871))
;
x11871.cljs$core$IDeref$ = true;
x11871.cljs$core$IDeref$_deref$arity$1 = ((function (x11871){
return (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),path);
} else
{throw (new Error(("Cannot deref cursor during render phase: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$__$1))));
}
});})(x11871))
;
return x11871;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_(val))
{return val;
} else
{if((function (){var G__11874 = val;if(G__11874)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11874.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__11874.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__11874);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__11874);
}
})())
{return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else
{if(cljs.core.indexed_QMARK_(val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_(val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__11875 = val;if(G__11875)
{var bit__4226__auto__ = (G__11875.cljs$lang$protocol_mask$partition1$ & 8192);if((bit__4226__auto__) || (G__11875.cljs$core$ICloneable$))
{return true;
} else
{if((!G__11875.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__11875);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__11875);
}
})())
{return om.core.to_cursor_STAR_(val,state,path);
} else
{if(cljs.core.constant$keyword$140)
{return val;
} else
{return null;
}
}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state(cursor);return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),state));
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__11880 = cljs.core.seq(cljs.core.deref(om.core.refresh_set));var chunk__11881 = null;var count__11882 = 0;var i__11883 = 0;while(true){
if((i__11883 < count__11882))
{var f = chunk__11881.cljs$core$IIndexed$_nth$arity$2(null,i__11883);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11884 = seq__11880;
var G__11885 = chunk__11881;
var G__11886 = count__11882;
var G__11887 = (i__11883 + 1);
seq__11880 = G__11884;
chunk__11881 = G__11885;
count__11882 = G__11886;
i__11883 = G__11887;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__11880);if(temp__4126__auto__)
{var seq__11880__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__11880__$1))
{var c__4332__auto__ = cljs.core.chunk_first(seq__11880__$1);{
var G__11888 = cljs.core.chunk_rest(seq__11880__$1);
var G__11889 = c__4332__auto__;
var G__11890 = cljs.core.count(c__4332__auto__);
var G__11891 = 0;
seq__11880 = G__11888;
chunk__11881 = G__11889;
count__11882 = G__11890;
i__11883 = G__11891;
continue;
}
} else
{var f = cljs.core.first(seq__11880__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__11892 = cljs.core.next(seq__11880__$1);
var G__11893 = null;
var G__11894 = 0;
var G__11895 = 0;
seq__11880 = G__11892;
chunk__11881 = G__11893;
count__11882 = G__11894;
i__11883 = G__11895;
continue;
}
}
} else
{return null;
}
}
break;
}
});
om.core.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_QMARK_ = (function valid_QMARK_(m){return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.constant$keyword$217,null,cljs.core.constant$keyword$218,null,cljs.core.constant$keyword$219,null,cljs.core.constant$keyword$220,null,cljs.core.constant$keyword$221,null,cljs.core.constant$keyword$222,null,cljs.core.constant$keyword$223,null,cljs.core.constant$keyword$224,null,cljs.core.constant$keyword$225,null,cljs.core.constant$keyword$226,null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(om.core.valid_QMARK_(m))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose(", ",cljs.core.keys(m))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid?","valid?",1830611324,null),new cljs.core.Symbol(null,"m","m",-1640531418,null))], 0))))));
}
if((m == null))
{var shared = (function (){var or__3576__auto__ = cljs.core.constant$keyword$226.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();var ctor = (function (){var or__3576__auto__ = cljs.core.constant$keyword$217.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return om.core.pure;
}
})();var pure__5892__auto__ = (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1({"children": ((function (shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_11900 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11900;
}});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_shared": shared, "__om_cursor": cursor}) : ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_11900 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11900;
}});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_shared": shared, "__om_cursor": cursor}));pure__5892__auto__.constructor = goog.getUid(f);
return pure__5892__auto__;
} else
{if(cljs.core.constant$keyword$140)
{var map__11901 = m;var map__11901__$1 = ((cljs.core.seq_QMARK_(map__11901))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11901):map__11901);var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11901__$1,cljs.core.constant$keyword$224);var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11901__$1,cljs.core.constant$keyword$222);var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11901__$1,cljs.core.constant$keyword$223);var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11901__$1,cljs.core.constant$keyword$221);var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$218);var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(temp__4124__auto__))
{var i = temp__4124__auto__;return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(cursor,i) : dataf.call(null,cursor,i));
} else
{return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(cursor) : dataf.call(null,cursor));
}
})():cursor);var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$220));var shared = (function (){var or__3576__auto__ = cljs.core.constant$keyword$226.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();var ctor = (function (){var or__3576__auto__ = cljs.core.constant$keyword$217.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return om.core.pure;
}
})();var pure__5892__auto__ = (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1({"__om_shared": shared, "__om_index": cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_, "__om_app_state": om.core._STAR_state_STAR_, "key": rkey, "__om_init_state": init_state, "children": (((opts == null))?((function (map__11901,map__11901__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_11902 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,this$) : f.call(null,cursor_SINGLEQUOTE_,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11902;
}});})(map__11901,map__11901__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__11901,map__11901__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_11903 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cursor_SINGLEQUOTE_,this$,opts) : f.call(null,cursor_SINGLEQUOTE_,this$,opts));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11903;
}});})(map__11901,map__11901__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_instrument": om.core._STAR_instrument_STAR_, "__om_state": state}) : ctor.call(null,{"__om_shared": shared, "__om_index": cljs.core.constant$keyword$225.cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_, "__om_app_state": om.core._STAR_state_STAR_, "key": rkey, "__om_init_state": init_state, "children": (((opts == null))?((function (map__11901,map__11901__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_11902 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,this$) : f.call(null,cursor_SINGLEQUOTE_,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11902;
}});})(map__11901,map__11901__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__11901,map__11901__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){var _STAR_read_enabled_STAR_11903 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cursor_SINGLEQUOTE_,this$,opts) : f.call(null,cursor_SINGLEQUOTE_,this$,opts));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11903;
}});})(map__11901,map__11901__$1,opts,init_state,state,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_instrument": om.core._STAR_instrument_STAR_, "__om_state": state}));pure__5892__auto__.constructor = goog.getUid(f);
return pure__5892__auto__;
} else
{return null;
}
}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a cursor, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument will be
* the cursor and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* cursor - an ICursor instance
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :ctor       - a function that invokes a React component constructor
* that will back the Om component, defaults to pure.
* 
* Example:
* 
* (build list-of-gadgets cursor
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,cursor){return build.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build__3 = (function (f,cursor,m){if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = (function (){var _STAR_read_enabled_STAR_11905 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,m) : om.core._STAR_instrument_STAR_.call(null,f,cursor,m));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_11905;
}})();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$227))
{return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}
});
build = function(f,cursor,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,cursor);
case 3:
return build__3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of cursors, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$225,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){if((function (){var G__11914 = state;if(G__11914)
{var bit__4226__auto__ = null;if(cljs.core.truth_((function (){var or__3576__auto__ = bit__4226__auto__;if(cljs.core.truth_(or__3576__auto__))
{return or__3576__auto__;
} else
{return G__11914.om$core$INotify$;
}
})()))
{return true;
} else
{if((!G__11914.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__11914);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.INotify,G__11914);
}
})())
{} else
{var listeners_11922 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var render_queue_11923 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);var x11915_11924 = state;x11915_11924.om$core$IRenderQueue$ = true;
x11915_11924.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x11915_11924,listeners_11922,render_queue_11923){
return (function (this$){var this$__$1 = this;return cljs.core.deref(render_queue_11923);
});})(x11915_11924,listeners_11922,render_queue_11923))
;
x11915_11924.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x11915_11924,listeners_11922,render_queue_11923){
return (function (this$,c){var this$__$1 = this;if(cljs.core.contains_QMARK_(cljs.core.deref(render_queue_11923),c))
{return null;
} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_11923,cljs.core.conj,c);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x11915_11924,listeners_11922,render_queue_11923))
;
x11915_11924.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x11915_11924,listeners_11922,render_queue_11923){
return (function (this$){var this$__$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_11923,cljs.core.empty);
});})(x11915_11924,listeners_11922,render_queue_11923))
;
x11915_11924.om$core$INotify$ = true;
x11915_11924.om$core$INotify$_listen_BANG_$arity$3 = ((function (x11915_11924,listeners_11922,render_queue_11923){
return (function (this$,key__$1,tx_listen__$1){var this$__$1 = this;if((tx_listen__$1 == null))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_11922,cljs.core.assoc,key__$1,tx_listen__$1);
}
return this$__$1;
});})(x11915_11924,listeners_11922,render_queue_11923))
;
x11915_11924.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x11915_11924,listeners_11922,render_queue_11923){
return (function (this$,key__$1){var this$__$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_11922,cljs.core.dissoc,key__$1);
return this$__$1;
});})(x11915_11924,listeners_11922,render_queue_11923))
;
x11915_11924.om$core$INotify$_notify_BANG_$arity$3 = ((function (x11915_11924,listeners_11922,render_queue_11923){
return (function (this$,tx_data,root_cursor){var this$__$1 = this;if((tx_listen == null))
{} else
{var seq__11916_11925 = cljs.core.seq(cljs.core.deref(listeners_11922));var chunk__11917_11926 = null;var count__11918_11927 = 0;var i__11919_11928 = 0;while(true){
if((i__11919_11928 < count__11918_11927))
{var vec__11920_11929 = chunk__11917_11926.cljs$core$IIndexed$_nth$arity$2(null,i__11919_11928);var __11930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11920_11929,0,null);var f_11931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11920_11929,1,null);(f_11931.cljs$core$IFn$_invoke$arity$2 ? f_11931.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_11931.call(null,tx_data,root_cursor));
{
var G__11932 = seq__11916_11925;
var G__11933 = chunk__11917_11926;
var G__11934 = count__11918_11927;
var G__11935 = (i__11919_11928 + 1);
seq__11916_11925 = G__11932;
chunk__11917_11926 = G__11933;
count__11918_11927 = G__11934;
i__11919_11928 = G__11935;
continue;
}
} else
{var temp__4126__auto___11936 = cljs.core.seq(seq__11916_11925);if(temp__4126__auto___11936)
{var seq__11916_11937__$1 = temp__4126__auto___11936;if(cljs.core.chunked_seq_QMARK_(seq__11916_11937__$1))
{var c__4332__auto___11938 = cljs.core.chunk_first(seq__11916_11937__$1);{
var G__11939 = cljs.core.chunk_rest(seq__11916_11937__$1);
var G__11940 = c__4332__auto___11938;
var G__11941 = cljs.core.count(c__4332__auto___11938);
var G__11942 = 0;
seq__11916_11925 = G__11939;
chunk__11917_11926 = G__11940;
count__11918_11927 = G__11941;
i__11919_11928 = G__11942;
continue;
}
} else
{var vec__11921_11943 = cljs.core.first(seq__11916_11937__$1);var __11944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11921_11943,0,null);var f_11945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11921_11943,1,null);(f_11945.cljs$core$IFn$_invoke$arity$2 ? f_11945.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_11945.call(null,tx_data,root_cursor));
{
var G__11946 = cljs.core.next(seq__11916_11937__$1);
var G__11947 = null;
var G__11948 = 0;
var G__11949 = 0;
seq__11916_11925 = G__11946;
chunk__11917_11926 = G__11947;
count__11918_11927 = G__11948;
i__11919_11928 = G__11949;
continue;
}
}
} else
{}
}
break;
}
}
return this$__$1;
});})(x11915_11924,listeners_11922,render_queue_11923))
;
}
return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){return om.core._unlisten_BANG_(state,key);
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__11950){var map__11965 = p__11950;var map__11965__$1 = ((cljs.core.seq_QMARK_(map__11965))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11965):map__11965);var options = map__11965__$1;var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11965__$1,cljs.core.constant$keyword$219);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11965__$1,cljs.core.constant$keyword$201);var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11965__$1,cljs.core.constant$keyword$228);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11965__$1,cljs.core.constant$keyword$229);if(!((target == null)))
{} else
{throw (new Error(("Assert failed: No target specified to om.core/root\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"target","target",1773529930,null)))], 0))))));
}
var roots_SINGLEQUOTE__11979 = cljs.core.deref(om.core.roots);if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__11979,target))
{cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__11979,target).call(null);
} else
{}
var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();var state = (((function (){var G__11966 = value;if(G__11966)
{var bit__4226__auto__ = (G__11966.cljs$lang$protocol_mask$partition1$ & 16384);if((bit__4226__auto__) || (G__11966.cljs$core$IAtom$))
{return true;
} else
{if((!G__11966.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__11966);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__11966);
}
})())?value:cljs.core.atom.cljs$core$IFn$_invoke$arity$1(value));var state__$1 = om.core.setup(state,watch_key,tx_listen);var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$229,cljs.core.array_seq([cljs.core.constant$keyword$228,cljs.core.constant$keyword$201], 0));var rootf = ((function (watch_key,state,state__$1,m,map__11965,map__11965__$1,options,instrument,path,tx_listen,target){
return (function rootf(){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref(state__$1);var cursor = (((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path));om.dom.render((function (){var _STAR_instrument_STAR_11973 = om.core._STAR_instrument_STAR_;var _STAR_state_STAR_11974 = om.core._STAR_state_STAR_;try{om.core._STAR_instrument_STAR_ = instrument;
om.core._STAR_state_STAR_ = state__$1;
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_state_STAR_ = _STAR_state_STAR_11974;
om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_11973;
}})(),target);
var queue = om.core._get_queue(state__$1);if(cljs.core.empty_QMARK_(queue))
{return null;
} else
{var seq__11975_11980 = cljs.core.seq(queue);var chunk__11976_11981 = null;var count__11977_11982 = 0;var i__11978_11983 = 0;while(true){
if((i__11978_11983 < count__11977_11982))
{var c_11984 = chunk__11976_11981.cljs$core$IIndexed$_nth$arity$2(null,i__11978_11983);if(cljs.core.truth_(c_11984.isMounted()))
{c_11984.forceUpdate();
} else
{}
{
var G__11985 = seq__11975_11980;
var G__11986 = chunk__11976_11981;
var G__11987 = count__11977_11982;
var G__11988 = (i__11978_11983 + 1);
seq__11975_11980 = G__11985;
chunk__11976_11981 = G__11986;
count__11977_11982 = G__11987;
i__11978_11983 = G__11988;
continue;
}
} else
{var temp__4126__auto___11989 = cljs.core.seq(seq__11975_11980);if(temp__4126__auto___11989)
{var seq__11975_11990__$1 = temp__4126__auto___11989;if(cljs.core.chunked_seq_QMARK_(seq__11975_11990__$1))
{var c__4332__auto___11991 = cljs.core.chunk_first(seq__11975_11990__$1);{
var G__11992 = cljs.core.chunk_rest(seq__11975_11990__$1);
var G__11993 = c__4332__auto___11991;
var G__11994 = cljs.core.count(c__4332__auto___11991);
var G__11995 = 0;
seq__11975_11980 = G__11992;
chunk__11976_11981 = G__11993;
count__11977_11982 = G__11994;
i__11978_11983 = G__11995;
continue;
}
} else
{var c_11996 = cljs.core.first(seq__11975_11990__$1);if(cljs.core.truth_(c_11996.isMounted()))
{c_11996.forceUpdate();
} else
{}
{
var G__11997 = cljs.core.next(seq__11975_11990__$1);
var G__11998 = null;
var G__11999 = 0;
var G__12000 = 0;
seq__11975_11980 = G__11997;
chunk__11976_11981 = G__11998;
count__11977_11982 = G__11999;
i__11978_11983 = G__12000;
continue;
}
}
} else
{}
}
break;
}
return om.core._empty_queue_BANG_(state__$1);
}
});})(watch_key,state,state__$1,m,map__11965,map__11965__$1,options,instrument,path,tx_listen,target))
;cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,m,rootf,map__11965,map__11965__$1,options,instrument,path,tx_listen,target){
return (function (_,___$1,___$2,___$3){if(cljs.core.contains_QMARK_(cljs.core.deref(om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(om.core.render_all);
} else
{return setTimeout(om.core.render_all,16);
}
}
});})(watch_key,state,state__$1,m,rootf,map__11965,map__11965__$1,options,instrument,path,tx_listen,target))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,m,rootf,map__11965,map__11965__$1,options,instrument,path,tx_listen,target){
return (function (){cljs.core.remove_watch(state__$1,watch_key);
om.core.tear_down(state__$1,watch_key);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,m,rootf,map__11965,map__11965__$1,options,instrument,path,tx_listen,target))
);
return rootf();
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:((cljs.core.constant$keyword$140)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null):null)));return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){var temp__4126__auto__ = owner.refs;if(cljs.core.truth_(temp__4126__auto__))
{var refs = temp__4126__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,v);
});
var set_state_BANG___3 = (function (owner,korks,v){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,ks,v);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner)) : f.call(null,om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner))));
});
var update_state_BANG___3 = (function (owner,korks,f){return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks)) : f.call(null,om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks))));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});
var get_render_state__2 = (function (owner,korks){var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
/**
* Returns true if in the React render phase.
*/
om.core.rendering_QMARK_ = (function rendering_QMARK_(){return om.core._STAR_read_enabled_STAR_ === true;
});
