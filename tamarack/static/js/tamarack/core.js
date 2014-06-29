// Compiled by ClojureScript 0.0-2227
goog.provide('tamarack.core');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('tamarack.history');
goog.require('tamarack.view');
goog.require('tamarack.view');
goog.require('goog.history.EventType');
goog.require('tamarack.routes');
goog.require('tamarack.state');
goog.require('tamarack.util');
goog.require('goog.History');
goog.require('goog.events');
goog.require('tamarack.util');
goog.require('tamarack.history');
goog.require('tamarack.state');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('tamarack.routes');
cljs.core.enable_console_print_BANG_.call(null);
tamarack.core.on_navigate = (function on_navigate(e){return tamarack.state.merge_state_BANG_.call(null,secretary.core.dispatch_BANG_.call(null,e.token));
});
tamarack.core.init_history = (function init_history(){goog.events.listen(tamarack.history.history,goog.history.EventType.NAVIGATE,tamarack.core.on_navigate);
return tamarack.history.history.setEnabled(true);
});
tamarack.core.main = (function main(){tamarack.state.init_state.call(null);
jQuery("#date-dropdown").on("click",(function (p1__7170_SHARP_){return p1__7170_SHARP_.stopPropagation();
}));
var tab_clicked = (function tab_clicked(e){e.preventDefault();
return (jQuery(e.target)["tab"]).call(null,"show");
});
jQuery("#date-dropdown .nav a").on("click",tab_clicked);
tamarack.core.init_history.call(null);
return tamarack.view.render_all.call(null);
});
goog.exportSymbol('tamarack.core.main', tamarack.core.main);

//# sourceMappingURL=core.js.map