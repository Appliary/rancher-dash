(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{2527:function(n,e,r){var content=r(2707);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,r(21).default)("cf59a9bc",content,!0,{sourceMap:!0})},2706:function(n,e,r){"use strict";r(2527)},2707:function(n,e,r){var o=r(20)(!0);o.push([n.i,'.clearfix[data-v-7929f69c]:after,.clearfix[data-v-7929f69c]:before{content:" ";display:table}.clearfix[data-v-7929f69c]:after{clear:both}.list-unstyled[data-v-7929f69c]{margin:0;padding:0;list-style-type:none}.no-select[data-v-7929f69c]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.no-resize[data-v-7929f69c]{resize:none}.hand[data-v-7929f69c]{cursor:pointer;cursor:hand}.fixed[data-v-7929f69c]{table-layout:fixed}.clip[data-v-7929f69c]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.clip[data-v-7929f69c],.force-wrap[data-v-7929f69c]{word-wrap:break-word}.force-wrap[data-v-7929f69c]{white-space:normal}.bordered-section[data-v-7929f69c]{border-bottom:1px solid var(--border);margin-bottom:20px;padding-bottom:20px}.section-divider[data-v-7929f69c]{margin-bottom:20px;margin-top:20px}.pipelines[data-v-7929f69c]{display:flex}.pipelines .embed-pipelines[data-v-7929f69c]{flex:1}',"",{version:3,sources:["webpack://shell/pages/c/_cluster/legacy/project/pipelines.vue"],names:[],mappings:"AAyME,mEAEE,WAAA,CACA,aAAA,CAEF,iCACE,UAAA,CAsDJ,gCAjDE,QAAA,CACA,SAAA,CACA,oBAAA,CAgDF,4BA5CE,wBAAA,CACA,qBAAA,CACA,oBAAA,CACA,gBAAA,CA0CF,4BAtCE,WAAA,CAuCF,uBAnCE,cAAA,CACA,WAAA,CAmCF,wBA/BE,kBAAA,CAgCF,uBA5BE,sBAAA,CACA,eAAA,CACA,kBACA,CA0BF,oDA1BE,oBAKA,CAqBF,6BArBE,kBAAA,CAsBF,mCAlBE,qCAAA,CACA,kBAAA,CACA,mBAAA,CAiBF,kCAbE,kBAAA,CACA,eAAA,CAyKF,4BACE,YAAA,CAEA,6CACE,MAAA",sourcesContent:["$header-font: 'Poppins', sans-serif;\n$body-font: 'Lato', arial, helvetica, sans-serif;\n$mono-font: 'Roboto Mono', monospace;\n\n$max-width: 1440px !default;\n$min-width: 75% !default;\n$input-height: 61px;\n$unlabeled-input-height: 40px;\n\n$input-padding-lg: 18px;\n$input-padding-sm: 10px;\n$input-line-height: 18px;\n\n$column-gutter: 1.75%;\n\n$sideways-tabs-width: 200px;\n\n$array-list-remove-margin: 75px;\n\n$z-indexes: (\n  zero: 0,\n  default: 1,\n  overContent: 2,\n  hoverOverContent: 3,\n\n  mainHeader: 12,\n\n  tableGroup: 10,\n  fixedTableHeader: 11,\n\n  modalOverlay: 20,\n  modalContent: 21,\n\n  tooltip: 30,\n\n  dropdownOverlay: 40,\n  dropdownContent: 41,\n\n  loadingOverlay: 50,\n  loadingContent: 51\n);\n\n// Usage Example:\n// @media only screen and (min-width: map-get($breakpoints, '--viewport-*')) {\n// }\n$breakpoints: (\n  '--viewport-4':  480px, // Phone\n  '--viewport-7':  768px, // Tablet\n  '--viewport-9':  992px, // Laptop/Desktop\n  '--viewport-12': 1281px, // Desktop\n);\n\n$font-size-h2: 21px;\n\n/*\n * Global spacing variables\n */\n$space-s: 10px;\n$space-m: 20px;\n$space-l: 40px;\n///Computes the \"brightness\" of a color\n@use \"sass:math\";\n\n@function brightness($color) {\n  @if type-of($color) == color {\n    @return math.div(red($color) * 0.299 + green($color) * 0.587 + blue($color) * 0.114, 255) * 100%;\n  }\n  @else {\n    @return unquote(\"brightness(#{$color})\");\n  }\n}\n\n\n///Select the more readable foreground color for a given background color.\n@function contrast-color($color, $dark: $contrasted-dark, $light: $contrasted-light) {\n  @if $color == null {\n    @return null;\n  }\n  @else {\n    $color-brightness: brightness($color);\n    $dark-text-brightness: brightness($dark);\n    $light-text-brightness: brightness($light);\n    @return if(abs($color-brightness - $light-text-brightness) > abs($color-brightness - $dark-text-brightness), $light, $dark);\n  }\n}\n\n@function add-z-index($key, $value) {\n  @return map-merge($z-indexes, ($key: $value));\n}\n\n@function z-index($key) {\n  @if map-has-key($z-indexes, $key) {\n    @return map-get($z-indexes, $key);\n  }\n\n  @warn \"Unknown key `#{$key}` in $z-indexes\";\n  @return null;\n}\n\n// _decimal.scss | MIT License | gist.github.com/terkel/4373420\n\n// Round a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @param  {String} [$mode:round] (round|ceil|floor) How to round a number\n// @return {Number} A rounded number\n// @example\n//     decimal-round(0.333)    => 0\n//     decimal-round(0.333, 1) => 0.3\n//     decimal-round(0.333, 2) => 0.33\n//     decimal-round(0.666)    => 1\n//     decimal-round(0.666, 1) => 0.7\n//     decimal-round(0.666, 2) => 0.67\n//\n@function decimal-round ($number, $digits: 0, $mode: round) {\n  $n: 1;\n  // $number must be a number\n  @if type-of($number) != number {\n      @warn '#{ $number } is not a number.';\n      @return $number;\n  }\n  // $digits must be a unitless number\n  @if type-of($digits) != number {\n      @warn '#{ $digits } is not a number.';\n      @return $number;\n  } @else if not unitless($digits) {\n      @warn '#{ $digits } has a unit.';\n      @return $number;\n  }\n  @for $i from 1 through $digits {\n      $n: $n * 10;\n  }\n  @if $mode == round {\n      @return math.div(round($number * $n), $n);\n  } @else if $mode == ceil {\n      @return math.div(ceil($number * $n), $n);\n  } @else if $mode == floor {\n      @return math.div(floor($number * $n), $n);\n  } @else {\n      @warn '#{ $mode } is undefined keyword.';\n      @return $number;\n  }\n}\n\n// Ceil a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @return {Number} A ceiled number\n// @example\n//     decimal-ceil(0.333)    => 1\n//     decimal-ceil(0.333, 1) => 0.4\n//     decimal-ceil(0.333, 2) => 0.34\n//     decimal-ceil(0.666)    => 1\n//     decimal-ceil(0.666, 1) => 0.7\n//     decimal-ceil(0.666, 2) => 0.67\n//\n@function decimal-ceil ($number, $digits: 0) {\n  @return decimal-round($number, $digits, ceil);\n}\n\n// Floor a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @return {Number} A floored number\n// @example\n//     decimal-floor(0.333)    => 0\n//     decimal-floor(0.333, 1) => 0.3\n//     decimal-floor(0.333, 2) => 0.33\n//     decimal-floor(0.666)    => 0\n//     decimal-floor(0.666, 1) => 0.6\n//     decimal-floor(0.666, 2) => 0.66\n//\n@function decimal-floor ($number, $digits: 0) {\n  @return decimal-round($number, $digits, floor);\n}\n\n@function sizzle-gradient($color) {\n  $angle: 135deg;\n  $startPos: 0%;\n  $start: 0.3;\n  $middlePos: 110px;\n  $middle: 0.1;\n  $endPos: 100%;\n  $end: 0;\n\n  @return transparent linear-gradient(#{$angle},\n      #{rgba($color, $start)} #{$startPos},\n      #{rgba($color, $middle)} #{$middlePos},\n      #{rgba($color, $end)} #{$endPos}\n  ) 0% 0% no-repeat padding-box;\n}\n\n// -----------------------------------------------------------------------------\n// This file contains all application-wide Sass mixins.\n// -----------------------------------------------------------------------------\n\n/// Clear inner floats\n@mixin clearfix() {\n  &:before,\n  &:after {\n    content: \" \"; // 1\n    display: table; // 2\n  }\n  &:after {\n    clear: both;\n  }\n}\n\n@mixin list-unstyled {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n@mixin no-select {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n@mixin no-resize {\n  resize : none;\n}\n\n@mixin hand {\n  cursor : pointer;\n  cursor : hand;\n}\n\n@mixin fixed {\n  table-layout : fixed;\n}\n\n@mixin clip {\n  text-overflow : ellipsis;\n  overflow      : hidden;\n  white-space   : nowrap;\n  word-wrap     : break-word;\n}\n\n@mixin force-wrap {\n  word-wrap : break-word;\n  white-space: normal;\n}\n\n@mixin bordered-section {\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n}\n\n@mixin section-divider {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.clearfix         { @include clearfix; }\n.list-unstyled    { @include list-unstyled }\n.no-select        { @include no-select }\n.no-resize        { @include no-resize }\n.hand             { @include hand }\n.fixed            { @include fixed }\n.clip             { @include clip }\n.force-wrap       { @include force-wrap }\n.bordered-section { @include bordered-section }\n.section-divider  { @include section-divider }\n\n/// Sets the specified background color and calculates a dark or light contrasted text color.\n@mixin contrasted($background-color, $dark: $contrasted-dark, $light: $contrasted-light) {\n  color: contrast-color($background-color, $dark, $light);\n\n  &:hover {\n    text-decoration: underline;\n    color: var(--body-text);\n  }\n}\n\n/// Sets base color and darkens bg on hover\n@mixin bg-lighten($bg) {\n  background: $bg;\n  * {\n    background:lighten($bg,20%);\n  }\n}\n\n@mixin link-color($color, $hover) {\n  @if not($hover) {\n    $hover: $color;\n  }\n\n  color: $color;\n\n  &:hover\n   {\n    text-decoration: underline;\n    color: $hover;\n  }\n}\n\n@mixin icon-rotate($degrees, $rotation) {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=#{$rotation});\n  -webkit-transform: rotate($degrees);\n      -ms-transform: rotate($degrees);\n          transform: rotate($degrees);\n}\n\n@mixin icon-flip($horiz, $vert, $rotation) {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=#{$rotation});\n  -webkit-transform: scale($horiz, $vert);\n      -ms-transform: scale($horiz, $vert);\n          transform: scale($horiz, $vert);\n}\n\n@mixin input-status-color {\n  &, &.focused {\n    &.success {\n      border: solid 1px var(--success);\n      input, .selected {\n        color: var(--success);\n      }\n\n      .vs__actions:after {\n        color: var(--success);\n      }\n    }\n\n    &.warning {\n      border: solid 1px var(--warning);\n      input, .selected {\n        color: var(--warning);\n      }\n\n      .vs__actions:after {\n        color: var(--warning);\n      }\n    }\n\n    &.error {\n      border: solid 1px var(--error);\n\n      > label {\n        color: var(--error);\n      }\n\n      .vs__actions:after {\n        color: var(--error);\n      }\n    }\n  }\n}\n\n@mixin form-focus {\n  // Focus for form like elements (not to be confused with basic :focus style)\n  outline: none;\n  border-color: var(--outline);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.pipelines {\n  display: flex;\n\n  .embed-pipelines {\n    flex: 1;\n  }\n}\n"],sourceRoot:""}]),n.exports=o},2906:function(n,e,r){"use strict";r.r(e);r(2),r(3),r(4),r(5),r(25),r(51),r(39),r(16);var o=r(329),t=r(70),l=r(55),d=r(66),c={pipelines:"pipeline/pipelines",configuration:"pipeline"},m={components:{EmberPage:o.a,Tabbed:t.a,Tab:l.a},data:function(){return{activeTab:null}},computed:{pipelinesPage:function(){var n=Object(d.project)(this.$store.getters);if(n&&this.activeTab){var e=n.id.replace("/",":"),r=c[this.activeTab];return"/p/".concat(e,"/").concat(r)}return""}},methods:{tabChanged:function(n){this.activeTab=n.tab.name},intercept:function(n){"authenticated.project.pipeline.settings"===n&&this.$refs.tabs.select("configuration")}}},$=(r(2706),r(1)),component=Object($.a)(m,(function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"pipelines"},[r("Tabbed",{ref:"tabs",attrs:{"use-hash":!1,"no-content":!0},on:{changed:n.tabChanged}},[r("Tab",{attrs:{name:"pipelines","label-key":"legacy.pipelines",weight:3}}),n._v(" "),r("Tab",{attrs:{name:"configuration","label-key":"legacy.configuration",weight:2}})],1),n._v(" "),r("div",{staticClass:"embed-pipelines",attrs:{id:"legacy-pipelines"}},[n.pipelinesPage?r("EmberPage",{attrs:{inline:"legacy-pipelines",src:n.pipelinesPage,"force-inline-reuse":!0},on:{"before-nav":n.intercept}}):n._e()],1)],1)}),[],!1,null,"7929f69c",null);e.default=component.exports}}]);
//# sourceMappingURL=772fd73fc0a96fbb5335.js.map