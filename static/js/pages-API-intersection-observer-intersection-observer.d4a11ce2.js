(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-intersection-observer-intersection-observer"],{"074a":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".scroll-view[data-v-2a824598]{height:%?400?%;background:#fff;border:1px solid #ccc;box-sizing:border-box}.scroll-area[data-v-2a824598]{height:%?1300?%;display:flex;flex-direction:column;align-items:center}.notice[data-v-2a824598]{margin-top:%?150?%;margin:%?150?% 0 %?400?% 0}.ball[data-v-2a824598]{width:%?200?%;height:%?200?%;background:#4cd964;border-radius:50%}",""]),t.exports=e},"1af2":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=null,n={data:function(){return{appear:!1,title:"intersectionObserver"}},onReady:function(){var t=this;i=uni.createIntersectionObserver(this),i.relativeTo(".scroll-view").observe(".ball",(function(e){e.intersectionRatio>0&&!t.appear?t.appear=!0:!e.intersectionRatio>0&&t.appear&&(t.appear=!1)}))},onUnload:function(){i&&i.disconnect()}};e.default=n},"21c8":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var i={pageHead:a("1cda").default},n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",[e("page-head",{attrs:{title:this.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[this._v(this._s(this.appear?"小球出现":"小球消失"))]),e("v-uni-scroll-view",{staticClass:"scroll-view",attrs:{"scroll-y":!0}},[e("v-uni-view",{staticClass:"scroll-area"},[e("v-uni-text",{staticClass:"notice"},[this._v("向下滚动让小球出现")]),e("v-uni-view",{staticClass:"ball"})],1)],1)],1)],1)},r=[]},"42e3":function(t,e,a){var i=a("074a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("07ca0f79",i,!0,{sourceMap:!1,shadowMode:!1})},5394:function(t,e,a){"use strict";a.r(e);var i=a("21c8"),n=a("627be");for(var r in n)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("85ef");var s=a("f0c5"),o=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"2a824598",null,!1,i["a"],void 0);e["default"]=o.exports},"627be":function(t,e,a){"use strict";a.r(e);var i=a("1af2"),n=a.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"85ef":function(t,e,a){"use strict";var i=a("42e3"),n=a.n(i);n.a}}]);