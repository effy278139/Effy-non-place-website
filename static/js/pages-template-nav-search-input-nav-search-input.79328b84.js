(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-search-input-nav-search-input"],{"2f40":function(i,n,t){var e=t("a6cd");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var a=t("4f06").default;a("1c629fe2",e,!0,{sourceMap:!1,shadowMode:!1})},a210:function(i,n,t){"use strict";t("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{showSwiper:!1,imgUrls:["https://web-assets.dcloud.net.cn/unidoc/zh/muwu.jpg","https://web-assets.dcloud.net.cn/unidoc/zh/cbd.jpg"]}},onNavigationBarSearchInputClicked:function(i){console.log("事件执行了"),uni.navigateTo({url:"/pages/template/nav-search-input/detail/detail"})},onNavigationBarButtonTap:function(){uni.showModal({title:"提示",content:"用户点击了功能按钮，这里仅做展示。",success:function(i){i.confirm&&console.log("用户点击了确定")}})}};n.default=e},a6cd:function(i,n,t){var e=t("24fb");n=e(!1),n.push([i.i,"uni-image[data-v-79ba6630],\r\nuni-swiper[data-v-79ba6630],\r\n.img-view[data-v-79ba6630]{width:%?750?%;width:100%;height:%?500?%}.page-section-title[data-v-79ba6630]{margin-top:%?50?%}",""]),i.exports=n},c1d3:function(i,n,t){"use strict";var e=t("2f40"),a=t.n(e);a.a},dd10:function(i,n,t){"use strict";t.d(n,"b",(function(){return e})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){}));var e=function(){var i=this,n=i.$createElement,t=i._self._c||n;return t("v-uni-view",{staticClass:"page"},[t("v-uni-swiper",{attrs:{"indicator-dots":"true"}},i._l(i.imgUrls,(function(i,n){return t("v-uni-swiper-item",{key:n},[t("v-uni-image",{attrs:{src:i}})],1)})),1),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"uni-title"},[t("v-uni-view",[i._v("本示例为导航栏带搜索框完整功能演示，主要演示有：")]),t("v-uni-view",[i._v("1. 导航栏为 transparent 模式，向上滑动页面，导航栏会从透明变为实色。")]),t("v-uni-view",[i._v("2. 点击搜索框跳转到搜索页面。")]),t("v-uni-view",[i._v("3. 点击导航栏右侧按钮实现关联操作。")]),t("v-uni-view",[i._v("4. 搜索页面为提示词搜索，输入内容实时显示关联词。")]),t("v-uni-view",[i._v("5. 搜索结果根据搜索内容高亮显示文字。")]),t("v-uni-view",[i._v("6. 点击搜索列表或者软键盘搜索按钮，会将结果保存到搜索历史列表。")]),t("v-uni-view",[i._v("7. 点击删除图标，清空历史搜索列表。")]),t("v-uni-view",[i._v("Tips")]),t("v-uni-view",[i._v("1. 本示例目前仅支持 App 端")]),t("v-uni-view",[i._v("2. 所有示例均为演示使用，具体逻辑需要自己实现。")])],1)],1),t("v-uni-view",{staticStyle:{height:"1000rpx"}})],1)},a=[]},e1b6:function(i,n,t){"use strict";t.r(n);var e=t("a210"),a=t.n(e);for(var u in e)["default"].indexOf(u)<0&&function(i){t.d(n,i,(function(){return e[i]}))}(u);n["default"]=a.a},ecba:function(i,n,t){"use strict";t.r(n);var e=t("dd10"),a=t("e1b6");for(var u in a)["default"].indexOf(u)<0&&function(i){t.d(n,i,(function(){return a[i]}))}(u);t("c1d3");var v=t("f0c5"),c=Object(v["a"])(a["default"],e["b"],e["c"],!1,null,"79ba6630",null,!1,e["a"],void 0);n["default"]=c.exports}}]);