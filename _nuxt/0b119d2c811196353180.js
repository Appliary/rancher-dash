(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{2400:function(e,n,t){"use strict";t.r(n);t(2),t(3),t(4),t(5),t(25),t(188),t(90);var o=t(34),r=t(2740),l=t.n(r),f=t(2410),c=t.n(f),d=(t(2741),t(2743),t(2744),t(2745),t(2747),t(2749),t(2751),t(2752),t(2753),t(2755),t(2756),t(2757),t(2759),t(2761),t(2763),t(2764),t(28));function v(e,n){return/\bcomment\b/.test(e.getTokenTypeAt(c.a.Pos(n,0)))}function m(e,n){var text=e.getLine(n).substr(1);return-1===text.search(/\S/)?-1:c.a.countColumn(text,null,e.getOption("tabSize"))}function h(e,n){var text=e.getLine(n),t=text.match(/(\s*(-\s+)?)(\S.*)/);if(!t)return-1;var o=t[1].length;return text=Object(d.u)("",o)+t[3],/\bcomment\b/.test(e.getTokenTypeAt(c.a.Pos(n,o+1)))?-1:c.a.countColumn(text,null,e.getOption("tabSize"))}o.default.use(l.a),n.default=l.a,c.a.registerHelper("fold","indent",(function(e,n){var t=h(e,n.line);if(!(t<0)){for(var o=null,i=n.line+1,r=e.lastLine();i<=r;++i){var l=h(e,i);if(-1===l);else{if(!(l>t))break;o=i}}return o?{from:c.a.Pos(n.line,e.getLine(n.line).length),to:c.a.Pos(o,e.getLine(o).length)}:void 0}})),c.a.defineExtension("foldLinesMatching",(function(e){var n=this;this.operation((function(){for(var i=n.firstLine(),t=n.lastLine();i<=t;i++){n.getLine(i).match(e)&&n.foldCode(c.a.Pos(i,0),null,"fold")}}))})),c.a.registerHelper("fold","yamlcomments",(function(e,n){if(v(e,n.line)){var t=m(e,n.line);if(!(t<0)){for(var o=null,i=n.line+1,r=e.lastLine();i<=r&&v(e,i);++i){var l=m(e,i);if(-1===l);else{if(!(l>t))break;o=i}}return o?{from:c.a.Pos(n.line,e.getLine(n.line).length),to:c.a.Pos(o,e.getLine(o).length)}:void 0}}}))}}]);
//# sourceMappingURL=0b119d2c811196353180.js.map