(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-space-space"],{"068d":function(a,t,n){"use strict";n.r(t);var i=n("c34c"),e=n("537e");for(var s in e)["default"].indexOf(s)<0&&function(a){n.d(t,a,(function(){return e[a]}))}(s);n("f542");var c=n("f0c5"),u=Object(c["a"])(e["default"],i["b"],i["c"],!1,null,"5b5456e3",null,!1,i["a"],void 0);t["default"]=u.exports},"3cc1":function(a,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7"),n("159b"),n("99af");t.default={data:function(){return{paddingClass:"uni-pa-5",marginClass:"uni-ma-5",formData:{margin:["t","r","l","b"],marginSize:"5",padding:["t","r","l","b"],paddingSize:"5"},directionData:[{value:"t",text:"上"},{value:"r",text:"右"},{value:"b",text:"下"},{value:"l",text:"左"}],sizeData:[{value:"0",text:"0"},{value:"2",text:"4px"},{value:"5",text:"10px"},{value:"10",text:"20px"}]}},onLoad:function(){},methods:{change:function(a,t){var n=this,i=this.formData,e=i.margin,s=i.marginSize,c=i.padding,u=i.paddingSize;this.marginClass="",this.paddingClass="",e.forEach((function(a){n.marginClass+="uni-m".concat(a,"-").concat(s," ")})),c.forEach((function(a){n.marginClass+="uni-p".concat(a,"-").concat(u," ")}))}}}},"479c":function(a,t,n){var i=n("7a30");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);var e=n("4f06").default;e("5d4c606e",i,!0,{sourceMap:!1,shadowMode:!1})},"537e":function(a,t,n){"use strict";n.r(t);var i=n("3cc1"),e=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(a){n.d(t,a,(function(){return i[a]}))}(s);t["default"]=e.a},"7a30":function(a,t,n){var i=n("24fb");t=i(!1),t.push([a.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.header[data-v-5b5456e3]{display:flex;flex-direction:row;flex-wrap:wrap}.margin[data-v-5b5456e3]{display:flex;height:200px;margin:10px;overflow:hidden;border-radius:5px;border:1px #eee solid;box-sizing:border-box}.margin-item[data-v-5b5456e3]{display:flex;flex:1}.box[data-v-5b5456e3]{display:flex;align-items:center;justify-content:center;flex:1}.actions[data-v-5b5456e3]{display:flex;flex-direction:row;align-items:center}.action-label[data-v-5b5456e3]{flex-shrink:0;width:70px;margin-left:10px;margin-right:10px;font-size:12px}',""]),a.exports=t},c34c:function(a,t,n){"use strict";n.d(t,"b",(function(){return e})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i}));var i={uniCard:n("4d28").default,uniSection:n("4acc").default,uniDataCheckbox:n("4783").default},e=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("uni-card",{attrs:{"is-shadow":!1,"is-full":!0}},[n("v-uni-view",{staticClass:"header"},[n("v-uni-text",{staticClass:"uni-h6"},[a._v("使用间距辅助类对元素快速应用")]),n("v-uni-text",{staticClass:"uni-primary uni-px-3 uni-h6"},[a._v("margin")]),n("v-uni-text",{staticClass:"uni-h6"},[a._v("或")]),n("v-uni-text",{staticClass:"uni-primary uni-px-3 uni-h6"},[a._v("padding")]),n("v-uni-text",{staticClass:"uni-h6"},[a._v("样式， 范围是从 0 到 16。")])],1),n("v-uni-view",{staticClass:"header uni-mt-5"},[n("v-uni-text",{staticClass:"uni-h6"},[a._v("规则为")]),n("v-uni-text",{staticClass:"uni-primary uni-pl-3 uni-h6"},[a._v("uni-${property}${direction}-${size}")])],1),n("v-uni-view",{staticClass:"uni-mt-5"},[n("v-uni-text",{staticClass:"uni-h6"},[a._v("各值的含义请参考文档")])],1)],1),n("uni-section",{attrs:{title:"效果展示",type:"line"}},[n("v-uni-view",{staticClass:"margin"},[n("v-uni-view",{staticClass:"margin-item uni-border-4-bg",class:[a.paddingClass,a.marginClass]},[n("v-uni-view",{staticClass:"box uni-primary-bg"},[n("v-uni-text",{staticClass:"uni-white uni-body"},[a._v("通过下面的选项控制边距")])],1)],1)],1),n("v-uni-view",{staticClass:"actions uni-mt-10"},[n("v-uni-text",{staticClass:"action-label"},[a._v("外边距")]),n("uni-data-checkbox",{attrs:{multiple:!0,localdata:a.directionData},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.change(t,1)}},model:{value:a.formData.margin,callback:function(t){a.$set(a.formData,"margin",t)},expression:"formData.margin"}})],1),n("v-uni-view",{staticClass:"actions uni-mt-3 uni-mb-10"},[n("v-uni-text",{staticClass:"action-label"},[a._v("外边距大小")]),n("uni-data-checkbox",{attrs:{localdata:a.sizeData},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.change(t,1)}},model:{value:a.formData.marginSize,callback:function(t){a.$set(a.formData,"marginSize",t)},expression:"formData.marginSize"}})],1),n("v-uni-view",{staticClass:"actions"},[n("v-uni-text",{staticClass:"action-label"},[a._v("内边距")]),n("uni-data-checkbox",{attrs:{multiple:!0,localdata:a.directionData},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.change(t,2)}},model:{value:a.formData.padding,callback:function(t){a.$set(a.formData,"padding",t)},expression:"formData.padding"}})],1),n("v-uni-view",{staticClass:"actions uni-mt-3 uni-mb-10"},[n("v-uni-text",{staticClass:"action-label"},[a._v("内边距大小")]),n("uni-data-checkbox",{attrs:{localdata:a.sizeData},on:{change:function(t){arguments[0]=t=a.$handleEvent(t),a.change(t,3)}},model:{value:a.formData.paddingSize,callback:function(t){a.$set(a.formData,"paddingSize",t)},expression:"formData.paddingSize"}})],1)],1)],1)},s=[]},f542:function(a,t,n){"use strict";var i=n("479c"),e=n.n(i);e.a}}]);