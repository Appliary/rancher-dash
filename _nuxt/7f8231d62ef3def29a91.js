(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{2518:function(n,e,r){var content=r(2686);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,r(21).default)("a6f1750e",content,!0,{sourceMap:!0})},2685:function(n,e,r){"use strict";r(2518)},2686:function(n,e,r){var t=r(20)(!0);t.push([n.i,'.clearfix[data-v-c7a7f328]:after,.clearfix[data-v-c7a7f328]:before{content:" ";display:table}.clearfix[data-v-c7a7f328]:after{clear:both}.list-unstyled[data-v-c7a7f328]{margin:0;padding:0;list-style-type:none}.no-select[data-v-c7a7f328]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.no-resize[data-v-c7a7f328]{resize:none}.hand[data-v-c7a7f328]{cursor:pointer;cursor:hand}.fixed[data-v-c7a7f328]{table-layout:fixed}.clip[data-v-c7a7f328]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.clip[data-v-c7a7f328],.force-wrap[data-v-c7a7f328]{word-wrap:break-word}.force-wrap[data-v-c7a7f328]{white-space:normal}.bordered-section[data-v-c7a7f328]{border-bottom:1px solid var(--border);margin-bottom:20px;padding-bottom:20px}.section-divider[data-v-c7a7f328]{margin-bottom:20px;margin-top:20px}.header[data-v-c7a7f328]{display:flex}.header H1[data-v-c7a7f328]{flex:1}',"",{version:3,sources:["webpack://shell/pages/c/_cluster/monitoring/route-receiver/index.vue"],names:[],mappings:"AAyME,mEAEE,WAAA,CACA,aAAA,CAEF,iCACE,UAAA,CAsDJ,gCAjDE,QAAA,CACA,SAAA,CACA,oBAAA,CAgDF,4BA5CE,wBAAA,CACA,qBAAA,CACA,oBAAA,CACA,gBAAA,CA0CF,4BAtCE,WAAA,CAuCF,uBAnCE,cAAA,CACA,WAAA,CAmCF,wBA/BE,kBAAA,CAgCF,uBA5BE,sBAAA,CACA,eAAA,CACA,kBACA,CA0BF,oDA1BE,oBAKA,CAqBF,6BArBE,kBAAA,CAsBF,mCAlBE,qCAAA,CACA,kBAAA,CACA,mBAAA,CAiBF,kCAbE,kBAAA,CACA,eAAA,CAkNF,yBACE,YAAA,CACA,4BACE,MAAA",sourcesContent:["$header-font: 'Poppins', sans-serif;\n$body-font: 'Lato', arial, helvetica, sans-serif;\n$mono-font: 'Roboto Mono', monospace;\n\n$max-width: 1440px !default;\n$min-width: 75% !default;\n$input-height: 61px;\n$unlabeled-input-height: 40px;\n\n$input-padding-lg: 18px;\n$input-padding-sm: 10px;\n$input-line-height: 18px;\n\n$column-gutter: 1.75%;\n\n$sideways-tabs-width: 200px;\n\n$array-list-remove-margin: 75px;\n\n$z-indexes: (\n  zero: 0,\n  default: 1,\n  overContent: 2,\n  hoverOverContent: 3,\n\n  mainHeader: 12,\n\n  tableGroup: 10,\n  fixedTableHeader: 11,\n\n  modalOverlay: 20,\n  modalContent: 21,\n\n  tooltip: 30,\n\n  dropdownOverlay: 40,\n  dropdownContent: 41,\n\n  loadingOverlay: 50,\n  loadingContent: 51\n);\n\n// Usage Example:\n// @media only screen and (min-width: map-get($breakpoints, '--viewport-*')) {\n// }\n$breakpoints: (\n  '--viewport-4':  480px, // Phone\n  '--viewport-7':  768px, // Tablet\n  '--viewport-9':  992px, // Laptop/Desktop\n  '--viewport-12': 1281px, // Desktop\n);\n\n$font-size-h2: 21px;\n\n/*\n * Global spacing variables\n */\n$space-s: 10px;\n$space-m: 20px;\n$space-l: 40px;\n///Computes the \"brightness\" of a color\n@use \"sass:math\";\n\n@function brightness($color) {\n  @if type-of($color) == color {\n    @return math.div(red($color) * 0.299 + green($color) * 0.587 + blue($color) * 0.114, 255) * 100%;\n  }\n  @else {\n    @return unquote(\"brightness(#{$color})\");\n  }\n}\n\n\n///Select the more readable foreground color for a given background color.\n@function contrast-color($color, $dark: $contrasted-dark, $light: $contrasted-light) {\n  @if $color == null {\n    @return null;\n  }\n  @else {\n    $color-brightness: brightness($color);\n    $dark-text-brightness: brightness($dark);\n    $light-text-brightness: brightness($light);\n    @return if(abs($color-brightness - $light-text-brightness) > abs($color-brightness - $dark-text-brightness), $light, $dark);\n  }\n}\n\n@function add-z-index($key, $value) {\n  @return map-merge($z-indexes, ($key: $value));\n}\n\n@function z-index($key) {\n  @if map-has-key($z-indexes, $key) {\n    @return map-get($z-indexes, $key);\n  }\n\n  @warn \"Unknown key `#{$key}` in $z-indexes\";\n  @return null;\n}\n\n// _decimal.scss | MIT License | gist.github.com/terkel/4373420\n\n// Round a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @param  {String} [$mode:round] (round|ceil|floor) How to round a number\n// @return {Number} A rounded number\n// @example\n//     decimal-round(0.333)    => 0\n//     decimal-round(0.333, 1) => 0.3\n//     decimal-round(0.333, 2) => 0.33\n//     decimal-round(0.666)    => 1\n//     decimal-round(0.666, 1) => 0.7\n//     decimal-round(0.666, 2) => 0.67\n//\n@function decimal-round ($number, $digits: 0, $mode: round) {\n  $n: 1;\n  // $number must be a number\n  @if type-of($number) != number {\n      @warn '#{ $number } is not a number.';\n      @return $number;\n  }\n  // $digits must be a unitless number\n  @if type-of($digits) != number {\n      @warn '#{ $digits } is not a number.';\n      @return $number;\n  } @else if not unitless($digits) {\n      @warn '#{ $digits } has a unit.';\n      @return $number;\n  }\n  @for $i from 1 through $digits {\n      $n: $n * 10;\n  }\n  @if $mode == round {\n      @return math.div(round($number * $n), $n);\n  } @else if $mode == ceil {\n      @return math.div(ceil($number * $n), $n);\n  } @else if $mode == floor {\n      @return math.div(floor($number * $n), $n);\n  } @else {\n      @warn '#{ $mode } is undefined keyword.';\n      @return $number;\n  }\n}\n\n// Ceil a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @return {Number} A ceiled number\n// @example\n//     decimal-ceil(0.333)    => 1\n//     decimal-ceil(0.333, 1) => 0.4\n//     decimal-ceil(0.333, 2) => 0.34\n//     decimal-ceil(0.666)    => 1\n//     decimal-ceil(0.666, 1) => 0.7\n//     decimal-ceil(0.666, 2) => 0.67\n//\n@function decimal-ceil ($number, $digits: 0) {\n  @return decimal-round($number, $digits, ceil);\n}\n\n// Floor a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @return {Number} A floored number\n// @example\n//     decimal-floor(0.333)    => 0\n//     decimal-floor(0.333, 1) => 0.3\n//     decimal-floor(0.333, 2) => 0.33\n//     decimal-floor(0.666)    => 0\n//     decimal-floor(0.666, 1) => 0.6\n//     decimal-floor(0.666, 2) => 0.66\n//\n@function decimal-floor ($number, $digits: 0) {\n  @return decimal-round($number, $digits, floor);\n}\n\n@function sizzle-gradient($color) {\n  $angle: 135deg;\n  $startPos: 0%;\n  $start: 0.3;\n  $middlePos: 110px;\n  $middle: 0.1;\n  $endPos: 100%;\n  $end: 0;\n\n  @return transparent linear-gradient(#{$angle},\n      #{rgba($color, $start)} #{$startPos},\n      #{rgba($color, $middle)} #{$middlePos},\n      #{rgba($color, $end)} #{$endPos}\n  ) 0% 0% no-repeat padding-box;\n}\n\n// -----------------------------------------------------------------------------\n// This file contains all application-wide Sass mixins.\n// -----------------------------------------------------------------------------\n\n/// Clear inner floats\n@mixin clearfix() {\n  &:before,\n  &:after {\n    content: \" \"; // 1\n    display: table; // 2\n  }\n  &:after {\n    clear: both;\n  }\n}\n\n@mixin list-unstyled {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n@mixin no-select {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n@mixin no-resize {\n  resize : none;\n}\n\n@mixin hand {\n  cursor : pointer;\n  cursor : hand;\n}\n\n@mixin fixed {\n  table-layout : fixed;\n}\n\n@mixin clip {\n  text-overflow : ellipsis;\n  overflow      : hidden;\n  white-space   : nowrap;\n  word-wrap     : break-word;\n}\n\n@mixin force-wrap {\n  word-wrap : break-word;\n  white-space: normal;\n}\n\n@mixin bordered-section {\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n}\n\n@mixin section-divider {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.clearfix         { @include clearfix; }\n.list-unstyled    { @include list-unstyled }\n.no-select        { @include no-select }\n.no-resize        { @include no-resize }\n.hand             { @include hand }\n.fixed            { @include fixed }\n.clip             { @include clip }\n.force-wrap       { @include force-wrap }\n.bordered-section { @include bordered-section }\n.section-divider  { @include section-divider }\n\n/// Sets the specified background color and calculates a dark or light contrasted text color.\n@mixin contrasted($background-color, $dark: $contrasted-dark, $light: $contrasted-light) {\n  color: contrast-color($background-color, $dark, $light);\n\n  &:hover {\n    text-decoration: underline;\n    color: var(--body-text);\n  }\n}\n\n/// Sets base color and darkens bg on hover\n@mixin bg-lighten($bg) {\n  background: $bg;\n  * {\n    background:lighten($bg,20%);\n  }\n}\n\n@mixin link-color($color, $hover) {\n  @if not($hover) {\n    $hover: $color;\n  }\n\n  color: $color;\n\n  &:hover\n   {\n    text-decoration: underline;\n    color: $hover;\n  }\n}\n\n@mixin icon-rotate($degrees, $rotation) {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=#{$rotation});\n  -webkit-transform: rotate($degrees);\n      -ms-transform: rotate($degrees);\n          transform: rotate($degrees);\n}\n\n@mixin icon-flip($horiz, $vert, $rotation) {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=#{$rotation});\n  -webkit-transform: scale($horiz, $vert);\n      -ms-transform: scale($horiz, $vert);\n          transform: scale($horiz, $vert);\n}\n\n@mixin input-status-color {\n  &, &.focused {\n    &.success {\n      border: solid 1px var(--success);\n      input, .selected {\n        color: var(--success);\n      }\n\n      .vs__actions:after {\n        color: var(--success);\n      }\n    }\n\n    &.warning {\n      border: solid 1px var(--warning);\n      input, .selected {\n        color: var(--warning);\n      }\n\n      .vs__actions:after {\n        color: var(--warning);\n      }\n    }\n\n    &.error {\n      border: solid 1px var(--error);\n\n      > label {\n        color: var(--error);\n      }\n\n      .vs__actions:after {\n        color: var(--error);\n      }\n    }\n  }\n}\n\n@mixin form-focus {\n  // Focus for form like elements (not to be confused with basic :focus style)\n  outline: none;\n  border-color: var(--outline);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.header{\n  display: flex;\n  H1{\n    flex: 1;\n  }\n}\n"],sourceRoot:""}]),n.exports=t},2900:function(n,e,r){"use strict";r.r(e);r(19),r(18),r(15),r(10),r(37),r(17),r(38);var t=r(7),o=r(6),c=(r(2),r(3),r(4),r(5),r(26),r(72)),l=r(35),d=r(70),m=r(55),f=r(41),$=r(0),A=r(164),h=r(9);function v(object,n){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),e.push.apply(e,r)}return e}function x(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(t.a)(n,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(source,e))}))}return n}var w={name:"ListRoute",components:{Banner:f.a,Loading:l.a,ResourceTable:c.a,Tab:m.a,Tabbed:d.a},fetch:function(){var n=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.routeSchema=n.$store.getters["cluster/schemaFor"]($.x.SPOOFED.ROUTE),n.receiverSchema=n.$store.getters["cluster/schemaFor"]($.x.SPOOFED.RECEIVER),r=n.$store.dispatch("cluster/findAll",{type:$.x.SPOOFED.ROUTE}),e.next=5,n.$store.dispatch("cluster/findAll",{type:$.x.SPOOFED.RECEIVER});case 5:return n.receivers=e.sent,e.next=8,Object(A.f)(n.$store.dispatch);case 8:if(o=e.sent,!Object(A.a)(o)){e.next=17;break}return n.$store.dispatch("type-map/configureType",{match:$.x.SPOOFED.ROUTE,isCreatable:!0}),e.next=14,r;case 14:n.routes=e.sent,e.next=20;break;case 17:n.$store.dispatch("type-map/configureType",{match:$.x.SPOOFED.ROUTE,isCreatable:!1}),n.secretTo=x({},o.detailLocation),n.secretTo.query=Object(t.a)({},h.s,h.L);case 20:case"end":return e.stop()}}),e)})))()},data:function(){return{routes:[],receivers:[],secretTo:null,routeSchema:null,receiverSchema:null,initTab:this.$route.query.resource||$.x.SPOOFED.RECEIVER}},computed:{createRoute:function(){var n,e,r=(null===(n=this.$refs)||void 0===n||null===(e=n.tabs)||void 0===e?void 0:e.activeTabName)||this.routeSchema.id;return{name:"c-cluster-monitoring-route-receiver-create",params:{cluster:this.$route.params.cluster},query:{resource:r}}}}},C=(r(2685),r(1)),component=Object(C.a)(w,(function(){var n=this,e=n.$createElement,r=n._self._c||e;return n.$fetchState.pending?r("Loading"):r("div",[r("div",{staticClass:"row header mb-10"},[r("h1",[n._v("  "+n._s(n.t("monitoring.routesAndReceivers")))]),n._v(" "),r("div",[r("button",{staticClass:"btn btn-lg role-primary float right",on:{click:function(e){return n.$router.push(n.createRoute)}}},[n._v("\n        "+n._s(n.t("resourceList.head.create"))+"\n      ")])])]),n._v(" "),r("div",{staticClass:"row"},[r("Banner",{attrs:{color:"info",label:n.t("monitoring.alertmanagerConfig.deprecationWarning")}})],1),n._v(" "),r("Tabbed",{ref:"tabs",attrs:{"default-tab":n.initTab}},[r("Tab",{attrs:{name:n.routeSchema.id,label:n.$store.getters["type-map/labelFor"](n.routeSchema,2)}},[n.secretTo?r("div",[n._v("\n        We don't support the current route format stored in alertmanager.yaml. Click\n        "),r("nuxt-link",{attrs:{to:n.secretTo}},[n._v("\n          here\n        ")]),n._v(" to update manually.\n      ")],1):r("ResourceTable",{attrs:{schema:n.routeSchema,rows:n.routes}})],1),n._v(" "),r("Tab",{attrs:{name:n.receiverSchema.id,label:n.$store.getters["type-map/labelFor"](n.receiverSchema,2)}},[r("ResourceTable",{attrs:{schema:n.receiverSchema,rows:n.receivers}})],1)],1)],1)}),[],!1,null,"c7a7f328",null);e.default=component.exports}}]);
//# sourceMappingURL=7f8231d62ef3def29a91.js.map