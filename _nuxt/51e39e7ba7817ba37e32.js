(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{2925:function(e,t,r){"use strict";r.r(t);var c=r(6),n=(r(2),r(3),r(4),r(5),r(16),r(26),r(72)),o=r(12),l=r(0),d=r(35),h=r(170),m={name:"ListNamespace",components:{Loading:d.a,Masthead:h.a,ResourceTable:n.a},props:{},fetch:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$store.getters.currentStore(l.y),e.schema=e.$store.getters["".concat(r,"/schemaFor")](l.y),t.next=4,e.$store.dispatch("".concat(r,"/findAll"),{type:l.y});case 4:e.rows=t.sent;case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{rows:[],schema:null,NAMESPACE:l.y,VIRTUAL_TYPES:l.R}},computed:{headers:function(){return[o.tb,o.U,o.b]},createLocation:function(){return{name:"c-cluster-product-resource-create",params:{product:this.$store.getters.currentProduct.name,resource:l.y}}}}},f=r(1),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.$fetchState.pending?r("Loading"):r("div",[r("Masthead",{attrs:{schema:e.schema,resource:e.NAMESPACE,"favorite-resource":e.VIRTUAL_TYPES.NAMESPACE,"create-location":e.createLocation}}),e._v(" "),r("ResourceTable",e._g(e._b({attrs:{schema:e.schema,headers:e.headers,rows:e.rows,groupable:!1,"group-tooltip":"resourceTable.groupBy.project","key-field":"_key"},scopedSlots:e._u([{key:"cell:project",fn:function(t){var c=t.row;return[c.project?r("span",[e._v(e._s(c.project.nameDisplay))]):r("span",{staticClass:"text-muted"},[e._v("–")])]}}])},"ResourceTable",e.$attrs,!1),e.$listeners))],1)}),[],!1,null,null,null);t.default=component.exports}}]);
//# sourceMappingURL=51e39e7ba7817ba37e32.js.map