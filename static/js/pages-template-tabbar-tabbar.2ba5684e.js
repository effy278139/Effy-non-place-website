(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-tabbar-tabbar"],{"18d8":function(t,e,i){"use strict";i.r(e);var a=i("aaf9"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},3125:function(t,e,i){"use strict";i.r(e);var a=i("bc41"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"42fb":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tabs"},[i("v-uni-scroll-view",{staticClass:"scroll-h",attrs:{id:"tab-bar","scroll-x":!0,"show-scrollbar":!1,"scroll-into-view":t.scrollInto}},t._l(t.tabBars,(function(e,a){return i("v-uni-view",{key:e.id,staticClass:"uni-tab-item",attrs:{id:e.id,"data-current":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabtap.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-tab-item-title",class:t.tabIndex==a?"uni-tab-item-title-active":""},[t._v(t._s(e.name))])],1)})),1),i("v-uni-view",{staticClass:"line-h"}),i("v-uni-swiper",{staticClass:"swiper-box",staticStyle:{flex:"1"},attrs:{current:t.tabIndex,duration:300},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabchange.apply(void 0,arguments)}}},t._l(t.newsList,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"swiper-item"},[i("v-uni-scroll-view",{staticClass:"scroll-v list",attrs:{enableBackToTop:"true","scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore(a)}}},[t._l(e.data,(function(e,n){return i("v-uni-view",{key:e.id},[i("media-item",{attrs:{options:e},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close(a,n)},click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}})],1)})),e.isLoading||e.data.length>4?i("v-uni-view",{staticClass:"loading-more"},[i("v-uni-text",{staticClass:"loading-more-text"},[t._v(t._s(e.loadingText))])],1):t._e()],2)],1)})),1)],1)},n=[]},"441d":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"\nuni-page-body[data-v-67148e5e]{width:100%;min-height:100%;display:flex}\n.tabs[data-v-67148e5e]{flex:1;flex-direction:column;overflow:hidden;background-color:#fff;\nheight:100vh\n}.scroll-h[data-v-67148e5e]{width:%?750?%;\nwidth:100%;\nheight:%?80?%;flex-direction:row;\nwhite-space:nowrap\n\n        /* flex-wrap: nowrap; */\n        /* border-color: #cccccc;\n\t\tborder-bottom-style: solid;\n\t\tborder-bottom-width: 1px; */}.line-h[data-v-67148e5e]{height:%?1?%;background-color:#ccc}.uni-tab-item[data-v-67148e5e]{\ndisplay:inline-block;\nflex-wrap:nowrap;padding-left:%?34?%;padding-right:%?34?%}.uni-tab-item-title[data-v-67148e5e]{color:#555;font-size:%?30?%;height:%?80?%;line-height:%?80?%;flex-wrap:nowrap;\nwhite-space:nowrap\n}.uni-tab-item-title-active[data-v-67148e5e]{color:#007aff}.swiper-box[data-v-67148e5e]{flex:1}.swiper-item[data-v-67148e5e]{flex:1;flex-direction:row}.scroll-v[data-v-67148e5e]{flex:1;\nflex-direction:column;\nwidth:%?750?%;width:100%}.update-tips[data-v-67148e5e]{position:absolute;left:0;top:41px;right:0;padding-top:5px;padding-bottom:5px;background-color:#fddd9b;align-items:center;justify-content:center;text-align:center}.update-tips-text[data-v-67148e5e]{font-size:14px;color:#fff}.refresh[data-v-67148e5e]{width:%?750?%;width:100%;height:64px;justify-content:center}.refresh-view[data-v-67148e5e]{flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center}.refresh-icon[data-v-67148e5e]{width:30px;height:30px;transition-duration:.5s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:15px 15px;transform-origin:15px 15px}.refresh-icon-active[data-v-67148e5e]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.loading-icon[data-v-67148e5e]{width:20px;height:20px;margin-right:5px;color:#999}.loading-text[data-v-67148e5e]{margin-left:2px;font-size:16px;color:#999}.loading-more[data-v-67148e5e]{align-items:center;justify-content:center;padding-top:10px;padding-bottom:10px;text-align:center}.loading-more-text[data-v-67148e5e]{font-size:%?28?%;color:#999}",""]),t.exports=e},"49c8":function(t,e,i){var a=i("441d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("5144a59f",a,!0,{sourceMap:!1,shadowMode:!1})},"54e7":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".view[data-v-26d73a36]{flex-direction:column}.flex-row[data-v-26d73a36]{flex-direction:row}.flex-col[data-v-26d73a36]{flex-direction:column}.list-cell[data-v-26d73a36]{width:%?750?%;padding:0 %?30?%}.uni-list-cell-hover[data-v-26d73a36]{background-color:#eee}.media-item[data-v-26d73a36]{position:relative;flex:1;flex-direction:column;\n\t\t/* border-bottom-width: 1rpx;\n\t\tborder-bottom-style: solid;\n\t\tborder-bottom-color: #ebebeb; */padding:%?20?% %?30?% %?21?% %?30?%}.media-item-hover[data-v-26d73a36]{background-color:#eee}.media-item-line[data-v-26d73a36]{position:absolute;left:%?30?%;right:%?30?%;bottom:0;height:%?1?%;background-color:#ebebeb}.media-image-right[data-v-26d73a36]{flex-direction:row}.media-image-left[data-v-26d73a36]{flex-direction:row-reverse}.media-title[data-v-26d73a36]{flex:1}.media-title[data-v-26d73a36]{lines:3;text-overflow:ellipsis;font-size:%?30?%;color:#555}.media-title2[data-v-26d73a36]{flex:1;margin-top:%?6?%;line-height:%?40?%}.image-section[data-v-26d73a36]{margin-top:%?20?%;flex-direction:row;justify-content:space-between}.image-section-right[data-v-26d73a36]{margin-top:%?0?%;margin-left:%?10?%;width:%?225?%;height:%?146?%}.image-section-left[data-v-26d73a36]{margin-top:%?0?%;margin-right:%?10?%;width:%?225?%;height:%?146?%}.image-list1[data-v-26d73a36]{width:%?690?%;height:%?481?%}.image-list2[data-v-26d73a36]{width:%?225?%;height:%?146?%}.image-list3[data-v-26d73a36]{width:%?225?%;\nwidth:30%;\nheight:%?146?%;\nheight:146px\n}.media-info[data-v-26d73a36]{flex-direction:row;align-items:center}.info-text[data-v-26d73a36]{margin-right:%?20?%;color:#999;font-size:%?24?%}.media-foot[data-v-26d73a36]{margin-top:%?25?%;flex-direction:row;align-items:center;justify-content:space-between}.max-close-view[data-v-26d73a36]{position:relative;align-items:center;flex-direction:row;width:%?40?%;height:%?30?%;line-height:%?30?%;border-width:%?1?%;border-style:solid;border-color:#aaa;border-radius:4px;justify-content:center;text-align:center}.close-l[data-v-26d73a36]{position:absolute;width:%?18?%;height:%?1?%;background-color:#aaa}.close-h[data-v-26d73a36]{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close-v[data-v-26d73a36]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}",""]),t.exports=e},6928:function(t,e,i){"use strict";i.r(e);var a=i("71fd"),n=i("3125");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("cd7d");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"26d73a36",null,!1,a["a"],void 0);e["default"]=r.exports},"71fd":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.options.title?i("v-uni-view",{staticClass:"media-item view",attrs:{"hover-class":"media-item-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"view",style:{flexDirection:1===t.options.article_type||2===t.options.article_type?2===t.options.article_type?"row":"row-reverse":"column"}},[i("v-uni-text",{staticClass:"media-title",class:{"media-title2":1===t.options.article_type||2===t.options.article_type}},[t._v(t._s(t.options.title))]),t.options.image_list||t.options.image_url?i("v-uni-view",{staticClass:"image-section flex-row",class:{"image-section-right":2===t.options.article_type,"image-section-left":1===t.options.article_type},style:{flexDirection:"row"}},[t.options.image_url?i("v-uni-image",{staticClass:"image-list1",class:{"image-list2":1===t.options.article_type||2===t.options.article_type},attrs:{src:t.options.image_url}}):t._e(),t._l(t.options.image_list,(function(e,a){return t.options.image_list?i("v-uni-image",{key:a,staticClass:"image-list3",attrs:{src:e.url}}):t._e()}))],2):t._e()],1),i("v-uni-view",{staticClass:"media-foot flex-row",staticStyle:{"flex-direction":"row"}},[i("v-uni-view",{staticClass:"media-info flex-row",staticStyle:{"flex-direction":"row"}},[i("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.options.source))]),i("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.options.comment_count)+"条评论")]),i("v-uni-text",{staticClass:"info-text"},[t._v(t._s(t.options.datetime))])],1),i("v-uni-view",{staticClass:"max-close-view",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"close-l close-h"}),i("v-uni-view",{staticClass:"close-l close-v"})],1)],1),i("v-uni-view",{staticClass:"media-item-line",staticStyle:{position:"absolute"}})],1):t._e()},n=[]},7224:function(t,e,i){var a=i("54e7");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("67a008ba",a,!0,{sourceMap:!1,shadowMode:!1})},aaf9:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("d3b7"),i("159b"),i("14d9"),i("99af"),i("a434"),i("c975"),i("d401"),i("25f0");var n=a(i("6928")),o={data0:{datetime:"40分钟前",article_type:0,title:"uni-app行业峰会频频亮相，开发者反响热烈!",source:"DCloud",comment_count:639},data1:{datetime:"一天前",article_type:1,title:"DCloud完成B2轮融资，uni-app震撼发布!",image_url:"https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg",source:"DCloud",comment_count:11395},data2:{datetime:"一天前",article_type:2,title:"中国技术界小奇迹：HBuilder开发者突破200万",image_url:"https://web-assets.dcloud.net.cn/unidoc/zh/muwu-samll.jpg",source:"DCloud",comment_count:11395},data3:{article_type:3,image_list:[{url:"https://web-assets.dcloud.net.cn/unidoc/zh/cbd%20-small.jpg",width:563,height:316},{url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b4cd3000-517d-11eb-a16f-5b3e54966275.jpg",width:641,height:360},{url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg",width:640,height:360}],datetime:"5分钟前",title:"uni-app 支持使用 npm 安装第三方包，生态更趋丰富",source:"DCloud",comment_count:11},data4:{datetime:"2小时前",article_type:4,title:"uni-app 支持原生小程序自定义组件，更开放、更自由",image_url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b2e201d0-517d-11eb-8a36-ebb87efcf8c0.jpg",source:"DCloud",comment_count:69}},s={components:{mediaItem:n.default},data:function(){return{newsList:[],cacheTab:[],tabIndex:0,tabBars:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"体育",id:"tiyu"},{name:"热点",id:"redian"},{name:"财经",id:"caijing"},{name:"娱乐",id:"yule"},{name:"军事",id:"junshi"},{name:"历史",id:"lishi"},{name:"本地",id:"bendi"}],scrollInto:"",showTips:!1,navigateFlag:!1,pulling:!1,refreshIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="}},onLoad:function(){var t=this;setTimeout((function(){t.tabBars.forEach((function(e){t.newsList.push({data:[],isLoading:!1,refreshText:"",loadingText:"加载更多..."})})),t.getList(0)}),350)},methods:{getList:function(t){for(var e=this.newsList[t],i=[],a=1;a<=10;a++){var n=Object.assign({},o["data"+Math.floor(5*Math.random())]);n.id=this.newGuid(),i.push(n)}e.data=e.data.concat(i)},goDetail:function(t){var e=this;this.navigateFlag||(this.navigateFlag=!0,uni.navigateTo({url:"./detail/detail?title="+t.title}),setTimeout((function(){e.navigateFlag=!1}),200))},close:function(t,e){var i=this;uni.showModal({content:"是否删除本条信息？",success:function(a){a.confirm&&i.newsList[t].data.splice(e,1)}})},loadMore:function(t){var e=this;setTimeout((function(){e.getList(e.tabIndex)}),500)},ontabtap:function(t){var e=t.target.dataset.current||t.currentTarget.dataset.current;this.switchTab(e)},ontabchange:function(t){var e=t.target.current||t.detail.current;this.switchTab(e)},switchTab:function(t){if(0===this.newsList[t].data.length&&this.getList(t),this.tabIndex!==t){if(this.newsList[this.tabIndex].data.length>100){var e=this.cacheTab.indexOf(this.tabIndex);e<0&&this.cacheTab.push(this.tabIndex)}if(this.tabIndex=t,this.scrollInto=this.tabBars[t].id,this.cacheTab.length>3){var i=this.cacheTab[0];this.clearTabData(i),this.cacheTab.splice(0,1)}}},clearTabData:function(t){this.newsList[t].data.length=0,this.newsList[t].loadingText="加载更多..."},refreshData:function(){},onrefresh:function(t){var e=this,i=this.newsList[this.tabIndex];i.refreshFlag&&(i.refreshing=!0,i.refreshText="正在刷新...",setTimeout((function(){e.refreshData(),e.pulling=!0,i.refreshing=!1,i.refreshFlag=!1,i.refreshText="已刷新",setTimeout((function(){e.pulling=!1}),500)}),2e3))},onpullingdown:function(t){var e=this.newsList[this.tabIndex];e.refreshing||this.pulling||(Math.abs(t.pullingDistance)>Math.abs(t.viewHeight)?(e.refreshFlag=!0,e.refreshText="释放立即刷新"):(e.refreshFlag=!1,e.refreshText="下拉可以刷新"))},newGuid:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return(t()+t()+"-"+t()+"-4"+t().substr(0,3)+"-"+t()+"-"+t()+t()+t()).toUpperCase()}}};e.default=s},bc41:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{options:{type:Object,default:function(t){return{}}}},methods:{click:function(){this.$emit("click")},close:function(t){this.$emit("close")}}};e.default=a},cd7d:function(t,e,i){"use strict";var a=i("7224"),n=i.n(a);n.a},d3d0:function(t,e,i){"use strict";var a=i("49c8"),n=i.n(a);n.a},f574:function(t,e,i){"use strict";i.r(e);var a=i("42fb"),n=i("18d8");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("d3d0");var s=i("f0c5"),r=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"67148e5e",null,!1,a["a"],void 0);e["default"]=r.exports}}]);