(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-global-global"],{"0d9d":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".button[data-v-ad68d0e6]{margin:%?30?%;color:#007aff}.text[data-v-ad68d0e6]{margin-left:%?30?%}",""]),t.exports=e},"1bf8":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"pa"},[n("v-uni-view",{staticClass:"uni-divider"},[n("v-uni-view",{staticClass:"uni-divider__content"},[t._v("globalData")]),n("v-uni-view",{staticClass:"uni-divider__line"})],1),n("v-uni-text",{staticClass:"text"},[t._v("globalData中text的值: "+t._s(t.gd.test))]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setGD()}}},[t._v("修改上述值为123")]),n("v-uni-view",{staticClass:"uni-divider"},[n("v-uni-view",{staticClass:"uni-divider__content"},[t._v("vuex")]),n("v-uni-view",{staticClass:"uni-divider__line"})],1),n("v-uni-text",{staticClass:"text"},[t._v("vuex中hasLogin的值: "+t._s(t.testvuex))]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setVUEX(!0)}}},[t._v("修改上述值为true")]),n("v-uni-button",{staticClass:"button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setVUEX(!1)}}},[t._v("修改上述值为false")])],1)},i=[]},5185:function(t,e,n){var a=n("0d9d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("572e3702",a,!0,{sourceMap:!1,shadowMode:!1})},a8bd:function(t,e,n){"use strict";var a=n("5185"),i=n.n(a);i.a},c135:function(t,e,n){"use strict";n.r(e);var a=n("1bf8"),i=n("df95");for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);n("a8bd");var u=n("f0c5"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"ad68d0e6",null,!1,a["a"],void 0);e["default"]=o.exports},df95:function(t,e,n){"use strict";n.r(e);var a=n("e725"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(s);e["default"]=i.a},e725:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4");var i=a(n("5530")),s=n("26cb"),u={data:function(){return{gd:{}}},computed:(0,i.default)({},(0,s.mapState)(["testvuex"])),methods:(0,i.default)((0,i.default)((0,i.default)({},(0,s.mapMutations)(["setTestTrue"])),(0,s.mapMutations)(["setTestFalse"])),{},{setGD:function(){this.gd.test="123"},setVUEX:function(t){t?this.setTestTrue(this.$store.state):this.setTestFalse(this.$store.state)}}),onShow:function(){this.gd=getApp().globalData}};e.default=u}}]);