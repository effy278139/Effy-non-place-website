(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-notice-bar-notice-bar"],{"07f9":function(t,e,n){var i=n("95bd");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0a7a8b68",i,!0,{sourceMap:!1,shadowMode:!1})},"20e2":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-card[data-v-44c0d81e]{margin:10px;padding:0 8px;border-radius:4px;overflow:hidden;font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;background-color:#fff;flex:1}.uni-card .uni-card__cover[data-v-44c0d81e]{position:relative;margin-top:10px;flex-direction:row;overflow:hidden;border-radius:4px}.uni-card .uni-card__cover .uni-card__cover-image[data-v-44c0d81e]{flex:1;vertical-align:middle}.uni-card .uni-card__header[data-v-44c0d81e]{display:flex;border-bottom:1px #ebeef5 solid;flex-direction:row;align-items:center;padding:10px;overflow:hidden}.uni-card .uni-card__header .uni-card__header-box[data-v-44c0d81e]{display:flex;flex:1;flex-direction:row;align-items:center;overflow:hidden}.uni-card .uni-card__header .uni-card__header-avatar[data-v-44c0d81e]{width:40px;height:40px;overflow:hidden;border-radius:5px;margin-right:10px}.uni-card .uni-card__header .uni-card__header-avatar .uni-card__header-avatar-image[data-v-44c0d81e]{flex:1;width:40px;height:40px}.uni-card .uni-card__header .uni-card__header-content[data-v-44c0d81e]{display:flex;flex-direction:column;justify-content:center;flex:1;overflow:hidden}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-title[data-v-44c0d81e]{font-size:15px;color:#3a3a3a}.uni-card .uni-card__header .uni-card__header-content .uni-card__header-content-subtitle[data-v-44c0d81e]{font-size:12px;margin-top:5px;color:#909399}.uni-card .uni-card__header .uni-card__header-extra[data-v-44c0d81e]{line-height:12px}.uni-card .uni-card__header .uni-card__header-extra .uni-card__header-extra-text[data-v-44c0d81e]{font-size:12px;color:#909399}.uni-card .uni-card__content[data-v-44c0d81e]{padding:10px;font-size:14px;color:#6a6a6a;line-height:22px}.uni-card .uni-card__actions[data-v-44c0d81e]{font-size:12px}.uni-card--border[data-v-44c0d81e]{border:1px solid #ebeef5}.uni-card--shadow[data-v-44c0d81e]{position:relative;box-shadow:0 0 6px 1px hsla(0,0%,64.7%,.2)}.uni-card--full[data-v-44c0d81e]{margin:0;border-left-width:0;border-left-width:0;border-radius:0}.uni-card--full[data-v-44c0d81e]:after{border-radius:0}.uni-ellipsis[data-v-44c0d81e]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),t.exports=e},"3c82":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick:function(t){this.$emit("click",t)}}};e.default=i},"3e32":function(t,e,n){"use strict";var i=n("07f9"),a=n.n(i);a.a},"42e4":function(t,e,n){var i=n("20e2");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7a3b07a4",i,!0,{sourceMap:!1,shadowMode:!1})},"4acc":function(t,e,n){"use strict";n.r(e);var i=n("6ddd"),a=n("e5c4");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("798d");var r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"52a816e0",null,!1,i["a"],void 0);e["default"]=c.exports},"4d28":function(t,e,n){"use strict";n.r(e);var i=n("88f9"),a=n("b440");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("6ad0");var r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"44c0d81e",null,!1,i["a"],void 0);e["default"]=c.exports},"57c4":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a9e3"),n("d401"),n("d3b7"),n("25f0"),n("ac1f"),n("14d9"),n("3ca3"),n("ddb0");var i={name:"UniNoticeBar",emits:["click","getmore","close"],props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#FFF9EA"},speed:{type:Number,default:100},color:{type:String,default:"#FF9A43"},fontSize:{type:Number,default:14},moreColor:{type:String,default:"#FF9A43"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:t,elIdBox:e,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},computed:{isShowGetMore:function(){return!0===this.showGetMore||"true"===this.showGetMore},isShowClose:function(){return(!0===this.showClose||"true"===this.showClose)&&(!1===this.showGetMore||"false"===this.showGetMore)}},mounted:function(){var t=this;this.$nextTick((function(){t.initSize()}))},methods:{initSize:function(){var t=this;if(this.scrollable){var e=[],n=new Promise((function(e,n){uni.createSelectorQuery().in(t).select("#".concat(t.elId)).boundingClientRect().exec((function(n){t.textWidth=n[0].width,e()}))})),i=new Promise((function(e,n){uni.createSelectorQuery().in(t).select("#".concat(t.elIdBox)).boundingClientRect().exec((function(n){t.boxWidth=n[0].width,e()}))}));e.push(n),e.push(i),Promise.all(e).then((function(){t.animationDuration="".concat(t.textWidth/t.speed,"s"),t.animationDelay="-".concat(t.boxWidth/t.speed,"s"),setTimeout((function(){t.animationPlayState="running"}),1e3)}))}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};e.default=i},"6ad0":function(t,e,n){"use strict";var i=n("42e4"),a=n.n(i);a.a},"6c9b":function(t,e,n){var i=n("eaaf");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("79cda8da",i,!0,{sourceMap:!1,shadowMode:!1})},"6ddd":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section"},[n("v-uni-view",{staticClass:"uni-section-header",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.type?n("v-uni-view",{staticClass:"uni-section-header__decoration",class:t.type}):t._t("decoration"),n("v-uni-view",{staticClass:"uni-section-header__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle},style:{"font-size":t.titleFontSize,color:t.titleColor}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-section-header__content-sub",style:{"font-size":t.subTitleFontSize,color:t.subTitleColor}},[t._v(t._s(t.subTitle))]):t._e()],1),n("v-uni-view",{staticClass:"uni-section-header__slot-right"},[t._t("right")],2)],2),n("v-uni-view",{staticClass:"uni-section-content",style:{padding:t._padding}},[t._t("default")],2)],1)},a=[]},"798d":function(t,e,n){"use strict";var i=n("6c9b"),a=n.n(i);a.a},"7d20":function(t,e,n){"use strict";n.r(e);var i=n("9dcf"),a=n("9e7b");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("3e32");var r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"f7f905ca",null,!1,i["a"],void 0);e["default"]=c.exports},8447:function(t,e,n){"use strict";n.r(e);var i=n("8fd3"),a=n("e8db");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("d2d8");var r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"0ed41684",null,!1,i["a"],void 0);e["default"]=c.exports},"88f9":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-card",class:{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border},style:{margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}},[t._t("cover",[t.cover?n("v-uni-view",{staticClass:"uni-card__cover"},[n("v-uni-image",{staticClass:"uni-card__cover-image",attrs:{mode:"widthFix",src:t.cover},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("cover")}}})],1):t._e()]),t._t("title",[t.title||t.extra?n("v-uni-view",{staticClass:"uni-card__header"},[n("v-uni-view",{staticClass:"uni-card__header-box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("title")}}},[t.thumbnail?n("v-uni-view",{staticClass:"uni-card__header-avatar"},[n("v-uni-image",{staticClass:"uni-card__header-avatar-image",attrs:{src:t.thumbnail,mode:"aspectFit"}})],1):t._e(),n("v-uni-view",{staticClass:"uni-card__header-content"},[n("v-uni-text",{staticClass:"uni-card__header-content-title uni-ellipsis"},[t._v(t._s(t.title))]),t.title&&t.subTitle?n("v-uni-text",{staticClass:"uni-card__header-content-subtitle uni-ellipsis"},[t._v(t._s(t.subTitle))]):t._e()],1)],1),n("v-uni-view",{staticClass:"uni-card__header-extra",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("extra")}}},[n("v-uni-text",{staticClass:"uni-card__header-extra-text"},[t._v(t._s(t.extra))])],1)],1):t._e()]),n("v-uni-view",{staticClass:"uni-card__content",style:{padding:t.padding},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("content")}}},[t._t("default")],2),n("v-uni-view",{staticClass:"uni-card__actions",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick("actions")}}},[t._t("actions")],2)],2)},a=[]},"8fd3":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniIcons:n("670e").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"uni-noticebar",style:{backgroundColor:t.backgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[!0===t.showIcon||"true"===t.showIcon?n("uni-icons",{staticClass:"uni-noticebar-icon",attrs:{type:"sound",color:t.color,size:1.5*t.fontSize}}):t._e(),n("v-uni-view",{ref:"textBox",staticClass:"uni-noticebar__content-wrapper",class:{"uni-noticebar__content-wrapper--scrollable":t.scrollable,"uni-noticebar__content-wrapper--single":!t.scrollable&&(t.single||t.moreText)},style:{height:t.scrollable?1.5*t.fontSize+"px":"auto"}},[n("v-uni-view",{staticClass:"uni-noticebar__content",class:{"uni-noticebar__content--scrollable":t.scrollable,"uni-noticebar__content--single":!t.scrollable&&(t.single||t.moreText)},attrs:{id:t.elIdBox}},[n("v-uni-text",{ref:"animationEle",staticClass:"uni-noticebar__content-text",class:{"uni-noticebar__content-text--scrollable":t.scrollable,"uni-noticebar__content-text--single":!t.scrollable&&(t.single||t.showGetMore)},style:{color:t.color,fontSize:t.fontSize+"px",lineHeight:1.5*t.fontSize+"px",width:t.wrapWidth+"px",animationDuration:t.animationDuration,"-webkit-animationDuration":t.animationDuration,animationPlayState:t.webviewHide?"paused":t.animationPlayState,"-webkit-animationPlayState":t.webviewHide?"paused":t.animationPlayState,animationDelay:t.animationDelay,"-webkit-animationDelay":t.animationDelay},attrs:{id:t.elId}},[t._v(t._s(t.text))])],1)],1),t.isShowGetMore?n("v-uni-view",{staticClass:"uni-noticebar__more uni-cursor-point",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickMore.apply(void 0,arguments)}}},[t.moreText.length>0?n("v-uni-text",{style:{color:t.moreColor,fontSize:t.fontSize+"px"}},[t._v(t._s(t.moreText))]):n("uni-icons",{attrs:{type:"right",color:t.moreColor,size:1.1*t.fontSize}})],1):t._e(),t.isShowClose?n("v-uni-view",{staticClass:"uni-noticebar-close uni-cursor-point"},[n("uni-icons",{attrs:{type:"closeempty",color:t.color,size:1.1*t.fontSize},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}})],1):t._e()],1):t._e()},o=[]},"95bd":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-f7f905ca]{position:absolute;left:0;right:0;top:0;bottom:0}',""]),t.exports=e},"9a25":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding:function(){return"string"===typeof this.padding?this.padding:this.padding?"10px":""}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},"9dcf":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniCard:n("4d28").default,uniSection:n("4acc").default,uniNoticeBar:n("8447").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("uni-card",{attrs:{"is-full":!0,"is-shadow":!1}},[n("v-uni-text",{staticClass:"uni-h6"},[t._v("通告栏组件多用于系统通知，广告通知等场景，可自定义图标，颜色，展现方式等。")])],1),n("uni-section",{attrs:{title:"多行显示",type:"line"}},[n("uni-notice-bar",{attrs:{text:"uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}})],1),n("uni-section",{attrs:{title:"单行显示",subTitle:"使用 single 属性单行显示通知",type:"line"}},[n("uni-notice-bar",{attrs:{single:!0,text:"uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}})],1),n("uni-section",{attrs:{title:"显示图标",subTitle:"使用 show-icon 属性显示左侧小喇叭图标",type:"line"}},[n("uni-notice-bar",{attrs:{"show-icon":!0,text:"uni-app发布，开发一次、7端覆盖！"}})],1),n("uni-section",{attrs:{title:"文字滚动",subTitle:"使用 scrollable 属性使通告滚动,此时 single 属性将失效,始终单行显示",type:"line"}},[n("uni-notice-bar",{attrs:{"show-icon":!0,scrollable:!0,text:"uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}})],1),n("uni-section",{attrs:{title:"查看更多",subTitle:"使用 show-get-more 显示更多,此时 single 属性将失效,始终单行显示,如不配置 more-text 属性 ,将显示箭头图标",type:"line"}},[n("uni-notice-bar",{attrs:{"show-get-more":!0,"show-icon":!0,text:"年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！"},on:{getmore:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)}}}),n("uni-notice-bar",{attrs:{"show-get-more":!0,"show-icon":!0,"more-text":"查看更多",text:"年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！"},on:{getmore:function(e){arguments[0]=e=t.$handleEvent(e),t.getMore.apply(void 0,arguments)}}})],1),n("uni-section",{attrs:{title:"修改颜色",type:"line"}},[n("uni-notice-bar",{attrs:{single:!0,color:"#2979FF","background-color":"#EAF2FF",text:"uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"}})],1),n("uni-section",{attrs:{title:"关闭按钮",subTitle:"使用 show-close 属性,可关闭通知",type:"line"}},[n("uni-notice-bar",{attrs:{"show-close":!0,single:!0,text:"HBuilderX 1.0正式发布！uni-app实现里程碑突破实现里程碑突破！"}})],1)],1)},o=[]},"9e7b":function(t,e,n){"use strict";n.r(e);var i=n("a796"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},a796:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},data:function(){return{}},created:function(){},methods:{getMore:function(){uni.showToast({title:"点击查看更多",icon:"none"})}}};e.default=i},b440:function(t,e,n){"use strict";n.r(e);var i=n("3c82"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},c3c7:function(t,e,n){var i=n("cf6c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("487020b3",i,!0,{sourceMap:!1,shadowMode:!1})},cf6c:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-noticebar[data-v-0ed41684]{display:flex;width:100%;box-sizing:border-box;flex-direction:row;align-items:center;padding:10px 12px;margin-bottom:10px}.uni-cursor-point[data-v-0ed41684]{cursor:pointer}.uni-noticebar-close[data-v-0ed41684]{margin-left:8px;margin-right:5px}.uni-noticebar-icon[data-v-0ed41684]{margin-right:5px}.uni-noticebar__content-wrapper[data-v-0ed41684]{flex:1;flex-direction:column;overflow:hidden}.uni-noticebar__content-wrapper--single[data-v-0ed41684]{line-height:18px}.uni-noticebar__content-wrapper--single[data-v-0ed41684],\n.uni-noticebar__content-wrapper--scrollable[data-v-0ed41684]{flex-direction:row}.uni-noticebar__content-wrapper--scrollable[data-v-0ed41684]{position:relative}.uni-noticebar__content--scrollable[data-v-0ed41684]{flex:1;display:block;overflow:hidden}.uni-noticebar__content--single[data-v-0ed41684]{display:flex;flex:none;width:100%;justify-content:center}.uni-noticebar__content-text[data-v-0ed41684]{font-size:14px;line-height:18px;word-break:break-all}.uni-noticebar__content-text--single[data-v-0ed41684]{display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.uni-noticebar__content-text--scrollable[data-v-0ed41684]{position:absolute;display:block;height:18px;line-height:18px;white-space:nowrap;padding-left:100%;-webkit-animation:notice-data-v-0ed41684 10s 0s linear infinite both;animation:notice-data-v-0ed41684 10s 0s linear infinite both;-webkit-animation-play-state:paused;animation-play-state:paused}.uni-noticebar__more[data-v-0ed41684]{display:inline-flex;flex-direction:row;flex-wrap:nowrap;align-items:center;padding-left:5px}@-webkit-keyframes notice-data-v-0ed41684{100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes notice-data-v-0ed41684{100%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}',""]),t.exports=e},d2d8:function(t,e,n){"use strict";var i=n("c3c7"),a=n.n(i);a.a},e5c4:function(t,e,n){"use strict";n.r(e);var i=n("9a25"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},e8db:function(t,e,n){"use strict";n.r(e);var i=n("57c4"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},eaaf:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-section[data-v-52a816e0]{background-color:#fff}.uni-section .uni-section-header[data-v-52a816e0]{position:relative;display:flex;flex-direction:row;align-items:center;padding:12px 10px;font-weight:400}.uni-section .uni-section-header__decoration[data-v-52a816e0]{margin-right:6px;background-color:#2979ff}.uni-section .uni-section-header__decoration.line[data-v-52a816e0]{width:4px;height:12px;border-radius:10px}.uni-section .uni-section-header__decoration.circle[data-v-52a816e0]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px}.uni-section .uni-section-header__decoration.square[data-v-52a816e0]{width:8px;height:8px}.uni-section .uni-section-header__content[data-v-52a816e0]{display:flex;flex-direction:column;flex:1;color:#333}.uni-section .uni-section-header__content .distraction[data-v-52a816e0]{flex-direction:row;align-items:center}.uni-section .uni-section-header__content-sub[data-v-52a816e0]{margin-top:2px}.uni-section .uni-section-header__slot-right[data-v-52a816e0]{font-size:14px}.uni-section .uni-section-content[data-v-52a816e0]{font-size:14px}',""]),t.exports=e}}]);