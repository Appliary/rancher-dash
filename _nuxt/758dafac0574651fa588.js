(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{2529:function(n,e,r){var content=r(2711);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,r(21).default)("11b7b493",content,!0,{sourceMap:!0})},2710:function(n,e,r){"use strict";r(2529)},2711:function(n,e,r){var t=r(20)(!0);t.push([n.i,'.clearfix[data-v-4f4c9b71]:after,.clearfix[data-v-4f4c9b71]:before{content:" ";display:table}.clearfix[data-v-4f4c9b71]:after{clear:both}.list-unstyled[data-v-4f4c9b71]{margin:0;padding:0;list-style-type:none}.no-select[data-v-4f4c9b71]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.no-resize[data-v-4f4c9b71]{resize:none}.hand[data-v-4f4c9b71]{cursor:pointer;cursor:hand}.fixed[data-v-4f4c9b71]{table-layout:fixed}.clip[data-v-4f4c9b71]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.clip[data-v-4f4c9b71],.force-wrap[data-v-4f4c9b71]{word-wrap:break-word}.force-wrap[data-v-4f4c9b71]{white-space:normal}.bordered-section[data-v-4f4c9b71]{border-bottom:1px solid var(--border);margin-bottom:20px;padding-bottom:20px}.section-divider[data-v-4f4c9b71]{margin-bottom:20px;margin-top:20px}.project-namespaces[data-v-4f4c9b71]  .project-name{line-height:30px}.project-namespaces[data-v-4f4c9b71]  .project-bar{display:flex;flex-direction:row;justify-content:space-between}.project-namespaces[data-v-4f4c9b71]  .project-bar.has-description .right{margin-top:5px}.project-namespaces[data-v-4f4c9b71]  .project-bar.has-description .group-tab,.project-namespaces[data-v-4f4c9b71]  .project-bar.has-description .group-tab:after{height:50px}.project-namespaces[data-v-4f4c9b71]  .project-bar.has-description .group-tab:after{right:-20px}.project-namespaces[data-v-4f4c9b71]  .project-bar.has-description .group-tab .description{margin-top:-20px}',"",{version:3,sources:["webpack://shell/components/ExplorerProjectsNamespaces.vue"],names:[],mappings:"AAyME,mEAEE,WAAA,CACA,aAAA,CAEF,iCACE,UAAA,CAsDJ,gCAjDE,QAAA,CACA,SAAA,CACA,oBAAA,CAgDF,4BA5CE,wBAAA,CACA,qBAAA,CACA,oBAAA,CACA,gBAAA,CA0CF,4BAtCE,WAAA,CAuCF,uBAnCE,cAAA,CACA,WAAA,CAmCF,wBA/BE,kBAAA,CAgCF,uBA5BE,sBAAA,CACA,eAAA,CACA,kBACA,CA0BF,oDA1BE,oBAKA,CAqBF,6BArBE,kBAAA,CAsBF,mCAlBE,qCAAA,CACA,kBAAA,CACA,mBAAA,CAiBF,kCAbE,kBAAA,CACA,eAAA,CA6dE,oDACE,gBAAA,CAGF,mDACE,YAAA,CACA,kBAAA,CACA,6BAAA,CAGE,0EACE,cAAA,CAGA,kKACI,WAAA,CAGJ,oFACI,WAAA,CAGJ,2FACI,gBAAA",sourcesContent:["$header-font: 'Poppins', sans-serif;\n$body-font: 'Lato', arial, helvetica, sans-serif;\n$mono-font: 'Roboto Mono', monospace;\n\n$max-width: 1440px !default;\n$min-width: 75% !default;\n$input-height: 61px;\n$unlabeled-input-height: 40px;\n\n$input-padding-lg: 18px;\n$input-padding-sm: 10px;\n$input-line-height: 18px;\n\n$column-gutter: 1.75%;\n\n$sideways-tabs-width: 200px;\n\n$array-list-remove-margin: 75px;\n\n$z-indexes: (\n  zero: 0,\n  default: 1,\n  overContent: 2,\n  hoverOverContent: 3,\n\n  mainHeader: 12,\n\n  tableGroup: 10,\n  fixedTableHeader: 11,\n\n  modalOverlay: 20,\n  modalContent: 21,\n\n  tooltip: 30,\n\n  dropdownOverlay: 40,\n  dropdownContent: 41,\n\n  loadingOverlay: 50,\n  loadingContent: 51\n);\n\n// Usage Example:\n// @media only screen and (min-width: map-get($breakpoints, '--viewport-*')) {\n// }\n$breakpoints: (\n  '--viewport-4':  480px, // Phone\n  '--viewport-7':  768px, // Tablet\n  '--viewport-9':  992px, // Laptop/Desktop\n  '--viewport-12': 1281px, // Desktop\n);\n\n$font-size-h2: 21px;\n\n/*\n * Global spacing variables\n */\n$space-s: 10px;\n$space-m: 20px;\n$space-l: 40px;\n///Computes the \"brightness\" of a color\n@use \"sass:math\";\n\n@function brightness($color) {\n  @if type-of($color) == color {\n    @return math.div(red($color) * 0.299 + green($color) * 0.587 + blue($color) * 0.114, 255) * 100%;\n  }\n  @else {\n    @return unquote(\"brightness(#{$color})\");\n  }\n}\n\n\n///Select the more readable foreground color for a given background color.\n@function contrast-color($color, $dark: $contrasted-dark, $light: $contrasted-light) {\n  @if $color == null {\n    @return null;\n  }\n  @else {\n    $color-brightness: brightness($color);\n    $dark-text-brightness: brightness($dark);\n    $light-text-brightness: brightness($light);\n    @return if(abs($color-brightness - $light-text-brightness) > abs($color-brightness - $dark-text-brightness), $light, $dark);\n  }\n}\n\n@function add-z-index($key, $value) {\n  @return map-merge($z-indexes, ($key: $value));\n}\n\n@function z-index($key) {\n  @if map-has-key($z-indexes, $key) {\n    @return map-get($z-indexes, $key);\n  }\n\n  @warn \"Unknown key `#{$key}` in $z-indexes\";\n  @return null;\n}\n\n// _decimal.scss | MIT License | gist.github.com/terkel/4373420\n\n// Round a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @param  {String} [$mode:round] (round|ceil|floor) How to round a number\n// @return {Number} A rounded number\n// @example\n//     decimal-round(0.333)    => 0\n//     decimal-round(0.333, 1) => 0.3\n//     decimal-round(0.333, 2) => 0.33\n//     decimal-round(0.666)    => 1\n//     decimal-round(0.666, 1) => 0.7\n//     decimal-round(0.666, 2) => 0.67\n//\n@function decimal-round ($number, $digits: 0, $mode: round) {\n  $n: 1;\n  // $number must be a number\n  @if type-of($number) != number {\n      @warn '#{ $number } is not a number.';\n      @return $number;\n  }\n  // $digits must be a unitless number\n  @if type-of($digits) != number {\n      @warn '#{ $digits } is not a number.';\n      @return $number;\n  } @else if not unitless($digits) {\n      @warn '#{ $digits } has a unit.';\n      @return $number;\n  }\n  @for $i from 1 through $digits {\n      $n: $n * 10;\n  }\n  @if $mode == round {\n      @return math.div(round($number * $n), $n);\n  } @else if $mode == ceil {\n      @return math.div(ceil($number * $n), $n);\n  } @else if $mode == floor {\n      @return math.div(floor($number * $n), $n);\n  } @else {\n      @warn '#{ $mode } is undefined keyword.';\n      @return $number;\n  }\n}\n\n// Ceil a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @return {Number} A ceiled number\n// @example\n//     decimal-ceil(0.333)    => 1\n//     decimal-ceil(0.333, 1) => 0.4\n//     decimal-ceil(0.333, 2) => 0.34\n//     decimal-ceil(0.666)    => 1\n//     decimal-ceil(0.666, 1) => 0.7\n//     decimal-ceil(0.666, 2) => 0.67\n//\n@function decimal-ceil ($number, $digits: 0) {\n  @return decimal-round($number, $digits, ceil);\n}\n\n// Floor a number to specified digits.\n//\n// @param  {Number} $number A number to round\n// @param  {Number} [$digits:0] Digits to output\n// @return {Number} A floored number\n// @example\n//     decimal-floor(0.333)    => 0\n//     decimal-floor(0.333, 1) => 0.3\n//     decimal-floor(0.333, 2) => 0.33\n//     decimal-floor(0.666)    => 0\n//     decimal-floor(0.666, 1) => 0.6\n//     decimal-floor(0.666, 2) => 0.66\n//\n@function decimal-floor ($number, $digits: 0) {\n  @return decimal-round($number, $digits, floor);\n}\n\n@function sizzle-gradient($color) {\n  $angle: 135deg;\n  $startPos: 0%;\n  $start: 0.3;\n  $middlePos: 110px;\n  $middle: 0.1;\n  $endPos: 100%;\n  $end: 0;\n\n  @return transparent linear-gradient(#{$angle},\n      #{rgba($color, $start)} #{$startPos},\n      #{rgba($color, $middle)} #{$middlePos},\n      #{rgba($color, $end)} #{$endPos}\n  ) 0% 0% no-repeat padding-box;\n}\n\n// -----------------------------------------------------------------------------\n// This file contains all application-wide Sass mixins.\n// -----------------------------------------------------------------------------\n\n/// Clear inner floats\n@mixin clearfix() {\n  &:before,\n  &:after {\n    content: \" \"; // 1\n    display: table; // 2\n  }\n  &:after {\n    clear: both;\n  }\n}\n\n@mixin list-unstyled {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n@mixin no-select {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n@mixin no-resize {\n  resize : none;\n}\n\n@mixin hand {\n  cursor : pointer;\n  cursor : hand;\n}\n\n@mixin fixed {\n  table-layout : fixed;\n}\n\n@mixin clip {\n  text-overflow : ellipsis;\n  overflow      : hidden;\n  white-space   : nowrap;\n  word-wrap     : break-word;\n}\n\n@mixin force-wrap {\n  word-wrap : break-word;\n  white-space: normal;\n}\n\n@mixin bordered-section {\n  border-bottom: 1px solid var(--border);\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n}\n\n@mixin section-divider {\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.clearfix         { @include clearfix; }\n.list-unstyled    { @include list-unstyled }\n.no-select        { @include no-select }\n.no-resize        { @include no-resize }\n.hand             { @include hand }\n.fixed            { @include fixed }\n.clip             { @include clip }\n.force-wrap       { @include force-wrap }\n.bordered-section { @include bordered-section }\n.section-divider  { @include section-divider }\n\n/// Sets the specified background color and calculates a dark or light contrasted text color.\n@mixin contrasted($background-color, $dark: $contrasted-dark, $light: $contrasted-light) {\n  color: contrast-color($background-color, $dark, $light);\n\n  &:hover {\n    text-decoration: underline;\n    color: var(--body-text);\n  }\n}\n\n/// Sets base color and darkens bg on hover\n@mixin bg-lighten($bg) {\n  background: $bg;\n  * {\n    background:lighten($bg,20%);\n  }\n}\n\n@mixin link-color($color, $hover) {\n  @if not($hover) {\n    $hover: $color;\n  }\n\n  color: $color;\n\n  &:hover\n   {\n    text-decoration: underline;\n    color: $hover;\n  }\n}\n\n@mixin icon-rotate($degrees, $rotation) {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=#{$rotation});\n  -webkit-transform: rotate($degrees);\n      -ms-transform: rotate($degrees);\n          transform: rotate($degrees);\n}\n\n@mixin icon-flip($horiz, $vert, $rotation) {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=#{$rotation});\n  -webkit-transform: scale($horiz, $vert);\n      -ms-transform: scale($horiz, $vert);\n          transform: scale($horiz, $vert);\n}\n\n@mixin input-status-color {\n  &, &.focused {\n    &.success {\n      border: solid 1px var(--success);\n      input, .selected {\n        color: var(--success);\n      }\n\n      .vs__actions:after {\n        color: var(--success);\n      }\n    }\n\n    &.warning {\n      border: solid 1px var(--warning);\n      input, .selected {\n        color: var(--warning);\n      }\n\n      .vs__actions:after {\n        color: var(--warning);\n      }\n    }\n\n    &.error {\n      border: solid 1px var(--error);\n\n      > label {\n        color: var(--error);\n      }\n\n      .vs__actions:after {\n        color: var(--error);\n      }\n    }\n  }\n}\n\n@mixin form-focus {\n  // Focus for form like elements (not to be confused with basic :focus style)\n  outline: none;\n  border-color: var(--outline);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.project-namespaces {\r\n  & ::v-deep {\r\n    .project-name {\r\n      line-height: 30px;\r\n    }\r\n\r\n    .project-bar {\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n\r\n      &.has-description {\r\n        .right {\r\n          margin-top: 5px;\r\n        }\r\n        .group-tab {\r\n          &, &::after {\r\n              height: 50px;\r\n          }\r\n\r\n          &::after {\r\n              right: -20px;\r\n          }\r\n\r\n          .description {\r\n              margin-top: -20px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],sourceRoot:""}]),n.exports=t},2864:function(n,e,r){"use strict";r.r(e);r(2),r(3),r(4),r(5),r(37),r(17),r(38),r(52),r(61),r(50),r(64),r(45);var t=r(76),o=r(22),c=r(7),l=r(6),d=(r(16),r(42),r(46),r(15),r(10),r(33),r(49),r(140),r(39),r(25),r(68),r(19),r(18),r(59),r(26),r(30)),m=r(72),f=r(12),h=r(11),A=r(0),v=r(35),$=r(9),j=r(170),x=r(44),w=r(764),y=r(114);function C(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,e){if(!n)return;if("string"==typeof n)return P(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(n,e)}(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var i=0,t=function(){};return{s:t,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return c=n.done,n},e:function(n){l=!0,o=n},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function P(n,e){(null==e||e>n.length)&&(e=n.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=n[i];return r}function k(object,n){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),e.push.apply(e,r)}return e}function N(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(c.a)(n,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(source,e))}))}return n}var O={name:"ListProjectNamespace",components:{Loading:v.a,Masthead:j.a,MoveModal:w.a,ResourceTable:m.a},props:{createProjectLocationOverride:{type:Object,default:function(){return null}},createNamespaceLocationOverride:{type:Object,default:function(){return null}}},fetch:function(){var n=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.$store.getters.currentStore(A.y),n.schema=n.$store.getters["".concat(r,"/schemaFor")](A.y),n.projectSchema=n.$store.getters["management/schemaFor"](A.v.PROJECT),n.schema){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,n.$store.dispatch("".concat(r,"/findAll"),{type:A.y});case 7:return n.namespaces=e.sent,e.next=10,n.$store.dispatch("management/findAll",{type:A.v.PROJECT,opt:{force:!0}});case 10:n.projects=e.sent;case 11:case"end":return e.stop()}}),e)})))()},data:function(){return{schema:null,namespaces:[],projects:[],projectSchema:null,MANAGEMENT:A.v,VIRTUAL_TYPES:A.R,defaultCreateProjectLocation:{name:"c-cluster-product-resource-create",params:{product:this.$store.getters.currentProduct.name,resource:A.v.PROJECT}}}},computed:N(N({},Object(d.b)(["currentCluster","currentProduct"])),{},{isNamespaceCreatable:function(){var n;return((null===(n=this.schema)||void 0===n?void 0:n.collectionMethods)||[]).includes("POST")},headers:function(){return[f.tb,f.U,"none"===this.groupPreference?{name:"project",label:"Project",value:"project.nameDisplay",sort:["projectNameSort","nameSort"]}:null,f.b].filter((function(n){return n}))},projectIdsWithNamespaces:function(){var n=this.rows.map((function(n){return n.projectId})).filter((function(n){return n}));return Object(h.m)(n)},clusterProjects:function(){var n=this.currentCluster.id;return this.$store.getters["management/all"](A.v.PROJECT).filter((function(e){return e.spec.clusterName===n}))},projectsWithoutNamespaces:function(){var n=this;return this.activeProjects.filter((function(e){return!n.projectIdsWithNamespaces.find((function(n){var r;return null==e||null===(r=e.id)||void 0===r?void 0:r.endsWith("/".concat(n))}))}))},rowsWithFakeNamespaces:function(){var n=this.projectsWithoutNamespaces.map((function(n){var e;return{groupByLabel:"resourceTable.groupLabel.notInAProject".concat("-",n.id),isFake:!0,mainRowKey:n.id,nameDisplay:null===(e=n.spec)||void 0===e?void 0:e.displayName,project:n,availableActions:[]}}));return this.showMockNotInProjectGroup&&n.push({groupByLabel:this.t("resourceTable.groupLabel.notInAProject"),mainRowKey:"fake-empty"}),[].concat(Object(o.a)(this.rows),Object(o.a)(n))},createProjectLocation:function(){return this.createProjectLocationOverride||this.defaultCreateProjectLocation},groupPreference:Object(x.mapPref)(x.GROUP_RESOURCES),activeNamespaceFilters:function(){return this.$store.getters.activeNamespaceFilters},activeProjectFilters:function(){var n,e={},r=C(this.activeNamespaceFilters);try{for(r.s();!(n=r.n()).done;){var o=n.value.split("://",2),c=Object(t.a)(o,2),l=c[0],d=c[1];"project"===l&&(e[d]=!0)}}catch(n){r.e(n)}finally{r.f()}return e},activeProjects:function(){var n=this;return this.$store.getters.activeNamespaceFilters.includes(y.b)&&0===Object.keys(this.activeProjectFilters).length?[]:this.userIsFilteringForSpecificNamespaceOrProject()?this.clusterProjects.filter((function(e){var r=e.id.split("/")[1];return!!n.activeProjectFilters[r]})):this.clusterProjects},activeNamespaces:function(){var n=this.$store.getters.namespaces();return this.namespaces.filter((function(e){return!!n[e.metadata.name]}))},filteredRows:function(){return"none"===this.groupPreference?this.rows:this.rowsWithFakeNamespaces},rows:function(){var n=this;return this.$store.getters["prefs/get"](x.ALL_NAMESPACES)?this.activeNamespaces:this.activeNamespaces.filter((function(e){var r,t=n.$store.getters.systemNamespaces.includes(e.metadata.name),o=e.isSystem||e.isFleetManaged||t;return null===(r=n.currentProduct)||void 0===r||!r.hideSystemResources||!o}))},canSeeProjectlessNamespaces:function(){return this.currentCluster.canUpdate},showMockNotInProjectGroup:function(){if(!this.canSeeProjectlessNamespaces)return!1;var n=!this.rows.some((function(n){return!n.project}));return!this.userIsFilteringForSpecificNamespaceOrProject()&&n},notInProjectKey:function(){return this.$store.getters["i18n/t"]("resourceTable.groupLabel.notInAProject")}}),methods:{userIsFilteringForSpecificNamespaceOrProject:function(){for(var n=this.$store.getters.namespaceFilters,i=0;i<n.length;i++){var e=n[i].split("://")[0];if("ns"===e||"project"===e)return!0}return!1},slotName:function(n){return"main-row:".concat(n.id)},createNamespaceLocation:function(n){var e=n.rows[0].project,r=this.createNamespaceLocationOverride?N({},this.createNamespaceLocationOverride):{name:"c-cluster-product-resource-create",params:{product:this.$store.getters.currentProduct.name,resource:A.y}};return r.query=Object(c.a)({},$.x,null==e?void 0:e.metadata.name),r},showProjectAction:function(n,e){var r=e.rows[0].project;this.$store.commit("action-menu/show",{resources:[r],elem:n.target})},showProjectActionButton:function(n){return!!n.rows[0].project},projectLabel:function(n){var e,r=n.rows[0];return r.isFake?this.t("resourceTable.groupLabel.project",{name:null===(e=r.project)||void 0===e?void 0:e.nameDisplay},!0):r.groupByLabel},projectDescription:function(n){var e=n.rows[0].project;return null==e?void 0:e.description},clearSelection:function(){this.$refs.table.clearSelection()},sortGenerationFn:function(){return Object(m.b)(this.schema,this.$store)+(this.showMockNotInProjectGroup?"-mock":"")}}},E=(r(2710),r(1)),_={components:{ExplorerProjectsNamespaces:Object(E.a)(O,(function(){var n=this,e=n.$createElement,r=n._self._c||e;return n.$fetchState.pending||!n.currentCluster?r("Loading"):r("div",{staticClass:"project-namespaces"},[r("Masthead",{attrs:{schema:n.projectSchema,"type-display":n.t("projectNamespaces.label"),resource:n.MANAGEMENT.PROJECT,"favorite-resource":n.VIRTUAL_TYPES.PROJECT_NAMESPACES,"create-location":n.createProjectLocation,"create-button-label":n.t("projectNamespaces.createProject")}}),n._v(" "),r("ResourceTable",n._g(n._b({ref:"table",staticClass:"table",attrs:{schema:n.schema,headers:n.headers,rows:n.filteredRows,groupable:!0,"sort-generation-fn":n.sortGenerationFn,"group-tooltip":"resourceTable.groupBy.project","key-field":"_key"},scopedSlots:n._u([{key:"group-by",fn:function(e){return[r("div",{staticClass:"project-bar",class:{"has-description":n.projectDescription(e.group)}},[r("div",{directives:[{name:"trim-whitespace",rawName:"v-trim-whitespace"}],staticClass:"group-tab"},[r("div",{staticClass:"project-name",domProps:{innerHTML:n._s(n.projectLabel(e.group))}}),n._v(" "),n.projectDescription(e.group)?r("div",{staticClass:"description text-muted text-small"},[n._v("\n            "+n._s(n.projectDescription(e.group))+"\n          ")]):n._e()]),n._v(" "),r("div",{staticClass:"right"},[n.isNamespaceCreatable&&(n.canSeeProjectlessNamespaces||e.group.key!==n.notInProjectKey)?r("n-link",{staticClass:"create-namespace btn btn-sm role-secondary mr-5",attrs:{to:n.createNamespaceLocation(e.group)}},[n._v("\n            "+n._s(n.t("projectNamespaces.createNamespace"))+"\n          ")]):n._e(),n._v(" "),r("button",{staticClass:"project-action btn btn-sm role-multi-action actions mr-10",class:{invisible:!n.showProjectActionButton(e.group)},attrs:{type:"button"},on:{click:function(r){return n.showProjectAction(r,e.group)}}},[r("i",{staticClass:"icon icon-actions"})])],1)])]}},{key:"cell:project",fn:function(e){var t=e.row;return[t.project?r("span",[n._v(n._s(t.project.nameDisplay))]):r("span",{staticClass:"text-muted"},[n._v("–")])]}},n._l(n.projectsWithoutNamespaces,(function(e){return{key:n.slotName(e),fn:function(){return[r("tr",{key:e.id,staticClass:"main-row"},[r("td",{staticClass:"empty text-center",attrs:{colspan:"5"}},[n._v("\n          "+n._s(n.t("projectNamespaces.noNamespaces"))+"\n        ")])])]},proxy:!0}})),{key:"main-row:fake-empty",fn:function(){return[r("tr",{staticClass:"main-row"},[r("td",{staticClass:"empty text-center",attrs:{colspan:"5"}},[n._v("\n          "+n._s(n.t("projectNamespaces.noProjectNoNamespaces"))+"\n        ")])])]},proxy:!0}],null,!0)},"ResourceTable",n.$attrs,!1),n.$listeners)),n._v(" "),r("MoveModal",{on:{moving:n.clearSelection}})],1)}),[],!1,null,"4f4c9b71",null).exports}},S=Object(E.a)(_,(function(){var n=this,e=n.$createElement;return(n._self._c||e)("ExplorerProjectsNamespaces",n._b({},"ExplorerProjectsNamespaces",n.$attrs,!1))}),[],!1,null,null,null);e.default=S.exports}}]);
//# sourceMappingURL=758dafac0574651fa588.js.map