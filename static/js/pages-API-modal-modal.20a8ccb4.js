(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-modal-modal"],{"19d1":function(n,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return e}));var e={pageHead:a("1cda").default},i=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:n.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.modalTap.apply(void 0,arguments)}}},[n._v("有标题的modal")]),a("v-uni-button",{attrs:{type:"default"},on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.noTitlemodalTap.apply(void 0,arguments)}}},[n._v("无标题的modal")])],1)],1)],1)},o=[]},"27b8":function(n,t,a){"use strict";a.r(t);var e=a("a7bd"),i=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(n){a.d(t,n,(function(){return e[n]}))}(o);t["default"]=i.a},a7bd:function(n,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{title:"modal",modalHidden:!0,modalHidden2:!0}},methods:{modalTap:function(n){uni.showModal({title:"弹窗标题",content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",showCancel:!1,confirmText:"确定"})},noTitlemodalTap:function(n){uni.showModal({content:"弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",confirmText:"确定",cancelText:"取消"})}}};t.default=e},e6a8:function(n,t,a){"use strict";a.r(t);var e=a("19d1"),i=a("27b8");for(var o in i)["default"].indexOf(o)<0&&function(n){a.d(t,n,(function(){return i[n]}))}(o);var u=a("f0c5"),d=Object(u["a"])(i["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],void 0);t["default"]=d.exports}}]);