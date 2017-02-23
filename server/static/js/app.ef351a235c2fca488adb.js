webpackJsonp([2,0],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var r=n(7),o=a(r),i=n(270),s=a(i);n(283),n(214),n(207),n(231),n(230),n(225);var l=n(295),c=a(l),d=n(147),u=a(d),f=n(72),h=a(f);o.default.use(s.default),new o.default({el:"#app",template:"<App/>",components:{App:c.default},render:function(t){return t(c.default)},router:u.default,store:h.default})},72:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),o=a(r),i=n(318),s=a(i),l=n(148),c=a(l),d=n(149),u=a(d);o.default.use(s.default);var f=new s.default.Store({state:{lockScreen:!0,timeRecords:[]},mutations:u.default,actions:c.default});e.default=f},147:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),o=a(r),i=n(317),s=a(i),l=n(296),c=a(l),d=n(298),u=a(d),f=n(300),h=a(f),p=n(305),m=a(p),v=n(304),y=a(v),w=n(72),_=a(w);o.default.use(s.default);var g=new s.default({mode:"history",routes:[{path:"/auth",component:c.default},{path:"/main",component:u.default,children:[{path:"management",component:h.default},{path:"timeline",component:m.default},{path:"time-slide",component:y.default},{path:"",redirect:"timeline"}]},{path:"/",redirect:"/auth"}]});g.beforeEach(function(t,e,n){"/"===t.path?n("/auth"):"/auth"!==t.path||_.default.state.lockScreen?"/auth"!==t.path&&_.default.state.lockScreen?n("/auth"):n():n("/main")}),e.default=g},148:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(129),o=a(r);e.default={unlockScreen:function(t,e){var n=t.commit;return o.default.post("/api/check",{password:e}).then(function(t){return!(t&&200===t.status&&!t.data.err)||(n("UNLOCK"),!1)})},addRecord:function(t,e){var n=t.commit;return o.default.post("/api/add",e).then(function(t){return!(t&&200===t.status&&!t.data.err)||(n("UPDATE_RECORD",e),!1)})},fatchData:function(t){var e=t.commit;o.default.get("/api/records").then(function(t){200===t.status&&e("FATCH_DATA",t.data)})}}},149:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(73),o=a(r),i=n(32),s=a(i),l=s.default;e.default={UNLOCK:function(t){t.lockScreen=!1},LOCK:function(t){t.lockScreen=!0},UPDATE_RECORD:function(t,e){var n=!0,a=!1,r=void 0;try{for(var i,s=(0,o.default)(t.timeRecords);!(n=(i=s.next()).done);n=!0){var c=i.value;if(l(c.year)===l(e.year)&&l(c.month)===l(e.month)&&l(c.date)===l(e.date))return void(c.items=e.items)}}catch(t){a=!0,r=t}finally{try{!n&&s.return&&s.return()}finally{if(a)throw r}}t.timeRecords.push(e),t.timeRecords.sort(function(t,e){var n=new Date(t.year+"-"+t.month+"-"+t.date),a=new Date(e.year+"-"+e.month+"-"+e.date);return n.getTime()<a.getTime()?1:n.getTime()>a.getTime()?-1:0})},FATCH_DATA:function(t,e){t.timeRecords=e}}},150:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},151:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(297),o=a(r);e.default={name:"auth",components:{StarFlow:o.default},data:function(){return{password:"",disabled:!0,errorTip:""}},methods:{setTip:function(t){var e=this;this.errorTip=t,this.disabled=!1,setTimeout(function(){e.disabled=!0,e.errorTip=""},1500)},signin:function(){var t=this;this.password?this.$store.dispatch("unlockScreen",this.password).then(function(e){e?t.setTip("密码错误"):t.$router.replace("/main")}):this.setTip("密码不能为空")}}}},152:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(73),o=a(r),i=n(163),s=a(i),l=n(164),c=a(l),d=function(){function t(e,n){(0,s.default)(this,t),this.initProperties(e,n)}return(0,c.default)(t,[{key:"initProperties",value:function(t,e){this.position={x:Math.random()*t,y:100*Math.random()+e},this.alpha=.5+.3*Math.random(),this.scale=.1+.3*Math.random(),this.velocity=1.5*Math.random()}},{key:"move",value:function(){this.position.y-=this.velocity,this.alpha-=.001}}]),t}(),u=function(){function t(){var e=this;(0,s.default)(this,t),this.width=window.innerWidth,this.height=window.innerHeight,this.canvas=document.querySelector("#star-flow"),this.canvas.width=this.width,this.canvas.height=this.height,this.ctx=this.canvas.getContext("2d"),this.stars=[];for(var n=0;n<.5*this.width;++n)this.stars.push(new d(this.width,this.height));window.addEventListener("resize",function(){e.width=window.innerWidth,e.height=window.innerHeight,e.canvas.width=e.width,e.canvas.height=e.height})}return(0,c.default)(t,[{key:"flowing",value:function(){this.ctx.clearRect(0,0,this.width,this.height);var t=!0,e=!1,n=void 0;try{for(var a,r=(0,o.default)(this.stars);!(t=(a=r.next()).done);t=!0){var i=a.value;i.alpha<=0&&i.initProperties(this.width,this.height),i.move(),this.ctx.beginPath(),this.ctx.arc(i.position.x,i.position.y,10*i.scale,0,2*Math.PI,!1),this.ctx.fillStyle="rgba(255, 255, 255, "+i.alpha+")",this.ctx.fill()}}catch(t){e=!0,n=t}finally{try{!t&&r.return&&r.return()}finally{if(e)throw n}}window.requestAnimationFrame(this.flowing.bind(this))}}]),t}();e.default={name:"star-flow",mounted:function(){(new u).flowing()}}},153:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"main",methods:{lockScreen:function(){this.$store.commit("LOCK"),this.$router.replace("/auth")}},created:function(){0===this.$store.state.timeRecords.length&&this.$store.dispatch("fatchData")}}},154:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"edit-time-record",data:function(){return{date:"",dialogVisible:!1,dialogContent:"",records:[{content:"",time:"0.1",type:"学习"}]}},methods:{handleCommand:function(t){t=t.split("-"),this.records[t[1]].type=t[0]},addRecord:function(){this.records.push({content:"",time:"0.1",type:"学习"})},removeRecord:function(){this.records.length<2||this.records.pop()},submitRecords:function(){var t=this;if(""===this.date)return this.dialogVisible=!0,void(this.dialogContent="请选择日期");var e=[];if(this.records.forEach(function(t){t.content&&e.push(t)}),0===e.length)return this.dialogVisible=!0,void(this.dialogContent="请输入相应的事项记录");var n=new Date(this.date);this.$store.dispatch("addRecord",{year:n.getFullYear(),month:n.getMonth()+1,date:n.getDate(),day:n.getDay(),items:e}).then(function(e){t.dialogVisible=!0,t.dialogContent=e?"提交失败":"提交成功",e||(t.records=[{content:"",time:"0.1",type:"学习"}])})}}}},155:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(299),o=a(r),i=n(301),s=a(i),l=n(302),c=a(l),d=n(303),u=a(d);e.default={name:"management",components:{EditTimeRecord:o.default,TimeAnalysisByType:s.default,TimeAnalysisPerMonth:c.default,TimeAnalysisPerYear:u.default}}},156:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(162),o=a(r),i=n(48),s=a(i),l=n(32),c=a(l),d=n(3),u=a(d);e.default={name:"time-analysis-by-type",data:function(){return{month:this.format(new Date((new Date).getTime()-864e5))}},mounted:function(){this.drawChart()},computed:{chartData:function(){var t=this;"string"!=typeof this.month&&(this.month=this.format(this.month));var e={"学习":{value:0,name:"学习",itemStyle:{normal:{color:"#c5ef84"}}},"工作":{value:0,name:"工作",itemStyle:{normal:{color:"#f9ba2c"}}},"运动":{value:0,name:"运动",itemStyle:{normal:{color:"#3aecf5"}}},"休闲":{value:0,name:"休闲",itemStyle:{normal:{color:"#68f53a"}}},"娱乐":{value:0,name:"娱乐",itemStyle:{normal:{color:"#e0a6f3"}}},"其他":{value:0,name:"其他",itemStyle:{normal:{color:"#e0a6a3"}}}};return this.$store.state.timeRecords.filter(function(e){return(0,c.default)(e.year)===(0,c.default)(t.month.split("-")[0])&&(0,c.default)(e.month)===(0,c.default)(t.month.split("-")[1])}).forEach(function(t){t.items.forEach(function(t){e[t.type].value+=(0,s.default)(t.time)})}),e=(0,o.default)(e),e.forEach(function(t){return t.value=t.value.toFixed(1)}),e},totalTime:function(){var t=0;return this.chartData.forEach(function(e){return t+=(0,s.default)(e.value)}),t.toFixed(1)}},methods:{format:function(t){var e=t.getMonth()+1;return e<10&&(e="0"+e),t.getFullYear()+"-"+e},drawChart:function(t){var e={title:{text:"分类时间统计",subtext:"单位：小时",x:"center",textStyle:{color:"white"},subtextStyle:{color:"white"}},tooltip:{trigger:"item",formatter:"{b} : {c} 小时 ({d}%)"},legend:{orient:"vertical",left:"5%",top:"5%",data:["学习","工作","运动","休闲","娱乐","其他"],textStyle:{color:"white"}},series:[{name:"时间比重",type:"pie",radius:"60%",center:["50%","60%"],data:this.chartData,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},n=u.default.init(document.querySelector("#pie-chart"));n.setOption(e)}}}},157:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(48),o=a(r),i=n(32),s=a(i),l=n(3),c=a(l);e.default={name:"time-analysis-per-month",data:function(){return{month:this.format(new Date((new Date).getTime()-864e5))}},mounted:function(){this.drawChart()},computed:{chartData:function(){var t=this;"string"!=typeof this.month&&(this.month=this.format(this.month));var e=new Array(31).fill(0);this.$store.state.timeRecords.filter(function(e){return(0,s.default)(e.year)===(0,s.default)(t.month.split("-")[0])&&(0,s.default)(e.month)===(0,s.default)(t.month.split("-")[1])}).forEach(function(t){t.items.forEach(function(n){e[(0,s.default)(t.date)-1]+=(0,o.default)(n.time)})});for(var n=0;n<e.length;++n)e[n]=e[n].toFixed(1);return e},totalTime:function(){var t=0;return this.chartData.forEach(function(e){return t+=(0,o.default)(e)}),t.toFixed(1)}},methods:{format:function(t){var e=t.getMonth()+1;return e<10&&(e="0"+e),t.getFullYear()+"-"+e},drawChart:function(){var t={title:{text:"月份时间统计",subtext:"单位：小时",x:"2%",textStyle:{color:"white"},subtextStyle:{color:"white"}},tooltip:{trigger:"item",formatter:"{c} 小时"},xAxis:{data:new Array(31).fill(0).map(function(t,e){return e+1}),axisLabel:{interval:0,textStyle:{color:"white"}},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{max:24,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"white"}}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{normal:{color:new c.default.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#ff4949"},{offset:.5,color:"#f7ba2a"},{offset:1,color:"#13ce66"}])},emphasis:{color:new c.default.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fb1111"},{offset:.7,color:"#efac0d"},{offset:1,color:"#02d45f"}])}},data:this.chartData}]},e=c.default.init(document.querySelector("#bar-chart-month"));e.setOption(t)}}}},158:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(48),o=a(r),i=n(32),s=a(i),l=n(3),c=a(l);e.default={name:"time-analysis-per-year",data:function(){return{year:new Date((new Date).getTime()-864e5).getFullYear().toString()}},mounted:function(){this.drawChart()},computed:{chartData:function(){var t=this;"string"!=typeof this.year&&(this.year=this.year.getFullYear().toString());var e=new Array(12).fill(0);this.$store.state.timeRecords.filter(function(e){return(0,s.default)(e.year)===(0,s.default)(t.year)}).forEach(function(t){t.items.forEach(function(n){e[(0,s.default)(t.month)-1]+=(0,o.default)(n.time)})});for(var n=0;n<e.length;++n)e[n]=e[n].toFixed(1);return e},totalTime:function(){var t=0;return this.chartData.forEach(function(e){return t+=(0,o.default)(e)}),t.toFixed(1)}},methods:{drawChart:function(){var t={title:{text:"年份时间统计",subtext:"单位：小时",x:"2%",textStyle:{color:"white"},subtextStyle:{color:"white"}},tooltip:{trigger:"item",formatter:"{c} 小时"},xAxis:{data:new Array(12).fill(0).map(function(t,e){return e+1}),axisLabel:{interval:0,textStyle:{color:"white"}},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{max:800,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"white"}}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{normal:{color:new c.default.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#ff4949"},{offset:.5,color:"#f7ba2a"},{offset:1,color:"#13ce66"}])},emphasis:{color:new c.default.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fb1111"},{offset:.7,color:"#efac0d"},{offset:1,color:"#02d45f"}])}},data:this.chartData}]},e=c.default.init(document.querySelector("#bar-chart-year"));e.setOption(t)}}}},159:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"time-slide",data:function(){return{days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]}}}},160:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"timeline",data:function(){return{iconBg:["iconbg-turqoise","iconbg-black","iconbg-brown","iconbg-indigo","iconbg-purple","iconbg-grey","iconbg-blue","iconbg-red","iconbg-orange","iconbg-opal","iconbg-green","iconbg-pink"],days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]}}}},283:function(t,e){},284:function(t,e){},285:function(t,e){},286:function(t,e){},287:function(t,e){},288:function(t,e){},289:function(t,e){},290:function(t,e){},291:function(t,e){},292:function(t,e){},293:function(t,e){},295:function(t,e,n){var a,r;n(289),a=n(150);var o=n(312);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=a},296:function(t,e,n){var a,r;n(292),a=n(151);var o=n(315);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=a},297:function(t,e,n){var a,r;a=n(152);var o=n(307);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=a},298:function(t,e,n){var a,r;n(287),a=n(153);var o=n(310);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=a},299:function(t,e,n){var a,r;n(293),a=n(154);var o=n(316);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=a},300:function(t,e,n){var a,r;n(290),a=n(155);var o=n(313);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=a},301:function(t,e,n){var a,r;n(286),a=n(156);var o=n(309);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=a},302:function(t,e,n){var a,r;n(284),a=n(157);var o=n(306);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=a},303:function(t,e,n){var a,r;n(288),a=n(158);var o=n(311);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=a},304:function(t,e,n){var a,r;n(291),a=n(159);var o=n(314);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=a},305:function(t,e,n){var a,r;n(285),a=n(160);var o=n(308);r=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(r=a=a.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=a},306:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"time-analysis-per-month"}},[n("el-card",[n("div",{attrs:{id:"bar-chart-month"}}),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:7,offset:1}},[n("el-date-picker",{directives:[{name:"model",rawName:"v-model",value:t.month,expression:"month"}],attrs:{type:"month",placeholder:"选择月份"},domProps:{value:t.month},on:{change:t.drawChart,input:function(e){t.month=e}}})],1),n("el-col",{attrs:{span:6,offset:2}},[n("el-input",{attrs:{value:"Total: "+t.totalTime,disabled:!0,placeholder:"Total:"}})],1),n("el-col",{attrs:{span:6,offset:1}},[n("el-input",{attrs:{value:"AVG: "+(t.totalTime/t.chartData.filter(function(t){return 0!==Number.parseInt(t)}).length).toFixed(1),disabled:!0,placeholder:"AVG:"}})],1)],1)],1)],1)},staticRenderFns:[]}},307:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{attrs:{id:"star-flow"}})},staticRenderFns:[]}},308:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"timeline"}},[n("div",{staticClass:"timeline-wrapper"},[n("div",{staticClass:"timeline"},t._l(this.$store.state.timeRecords,function(e,a){return n("div",{staticClass:"timeline-records"},[n("div",{staticClass:"side-info"},[n("span",{staticClass:"year"},[t._v(t._s(e.year))])]),n("div",{staticClass:"timeline-icon",class:t.iconBg[Number.parseInt(a%12)]},[n("div",{staticClass:"month"},[t._v(t._s(e.month)+" 月"),n("span",{staticClass:"date"},[t._v(t._s(e.date))])])]),n("div",{staticClass:"timeline-content"},[n("h2",{staticClass:"day"},[t._v(t._s(t.days[e.day]))]),n("div",{staticClass:"details"},t._l(e.items,function(e,a){return n("p",[t._v(t._s(a+1+". "+e.content+", "+e.time+"h."))])}))])])}))])])},staticRenderFns:[]}},309:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"time-analysis-by-type"}},[n("el-card",[n("div",{attrs:{id:"pie-chart"}}),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8,offset:2}},[n("el-date-picker",{directives:[{name:"model",rawName:"v-model",value:t.month,expression:"month"}],attrs:{type:"month",placeholder:"选择月份"},domProps:{value:t.month},on:{change:t.drawChart,input:function(e){t.month=e}}})],1),n("el-col",{attrs:{span:8,offset:4}},[n("el-input",{attrs:{value:"Total: "+t.totalTime,disabled:!0,placeholder:"Total:"}})],1)],1)],1)],1)},staticRenderFns:[]}},310:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("div",{attrs:{id:"header"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:1,offset:1}},[n("i",{staticClass:"el-icon-time",attrs:{id:"logo"}})]),n("el-col",{attrs:{span:2,offset:12}},[n("router-link",{staticClass:"header-item",attrs:{to:"timeline","active-class":"header-item-active"}},[t._v("时光轴")])],1),n("el-col",{attrs:{span:2}},[n("router-link",{staticClass:"header-item",attrs:{to:"time-slide","active-class":"header-item-active"}},[t._v("时光展")])],1),n("el-col",{attrs:{span:2}},[n("router-link",{staticClass:"header-item",attrs:{to:"management","active-class":"header-item-active"}},[t._v("管理")])],1),n("el-col",{attrs:{span:2}},[n("span",{staticClass:"header-item",on:{click:t.lockScreen}},[t._v("锁屏")])])],1)],1),n("div",{attrs:{id:"body"}},[n("router-view")],1)])},staticRenderFns:[]}},311:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"time-analysis-per-year"}},[n("el-card",[n("div",{attrs:{id:"bar-chart-year"}}),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:7,offset:1}},[n("el-date-picker",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],attrs:{type:"year",placeholder:"选择年份"},domProps:{value:t.year},on:{change:t.drawChart,input:function(e){t.year=e}}})],1),n("el-col",{attrs:{span:6,offset:2}},[n("el-input",{attrs:{value:"Total: "+t.totalTime,disabled:!0,placeholder:"Total:"}})],1),n("el-col",{attrs:{span:6,offset:1}},[n("el-input",{attrs:{value:"AVG: "+(t.totalTime/t.chartData.filter(function(t){return 0!==Number.parseInt(t)}).length).toFixed(1),disabled:!0,placeholder:"AVG:"}})],1)],1)],1)],1)},staticRenderFns:[]}},312:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)},staticRenderFns:[]}},313:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"management"}},[n("div",{attrs:{id:"content-wrapper"}},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:12,offset:1}},[n("time-analysis-per-month"),n("time-analysis-per-year")],1),n("el-col",{attrs:{span:10}},[n("time-analysis-by-type"),n("edit-time-record")],1)],1)],1)])},staticRenderFns:[]}},314:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"time-slide"}},t._l(t.$store.state.timeRecords,function(e,a){return n("div",{staticClass:"slide",class:"slide-bg-"+Number.parseInt(a%10)},[n("div",{staticClass:"record-info"},[n("h2",[t._v(t._s(e.year+"年"+e.month+"月"+e.date+"日"))]),n("h3",[t._v(t._s(t.days[e.day]))]),t._l(e.items,function(e,a){return n("p",[t._v(t._s(a+1+". "+e.content+", "+e.time+"h."))])})],2)])}))},staticRenderFns:[]}},315:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"auth"}},[n("star-flow"),n("div",{attrs:{id:"auth-input"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8,offset:8}},[n("el-tooltip",{attrs:{disabled:t.disabled,content:t.errorTip,placement:"bottom-start",effect:"light"}},[n("el-input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"请输入密码",type:"password"},domProps:{value:t.password},on:{input:function(e){t.password=e}}},[n("template",{slot:"append"},[n("el-button",{on:{click:t.signin}},[t._v("Go")])],1)],2)],1)],1)],1)],1)],1)},staticRenderFns:[]}},316:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"edit-time-record"}},[n("el-card",[n("el-row",{attrs:{gutter:5}},[n("el-col",{attrs:{span:6}},[n("h3",[t._v("编辑时间记录")])]),n("el-col",{attrs:{span:8,offset:6}},[n("el-date-picker",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{id:"edit-time-record-date",type:"date",placeholder:"选择日期",editable:!1},domProps:{value:t.date},on:{input:function(e){t.date=e}}})],1)],1),t._l(t.records,function(e,a){return n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:1}},[n("span",[t._v(t._s(a+1)+".")])]),n("el-col",{attrs:{span:14}},[n("el-input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"record.content"}],attrs:{id:"content",placeholder:"内容"},domProps:{value:e.content},on:{input:function(t){e.content=t}}})],1),n("el-col",{attrs:{span:4}},[n("el-input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"record.time"}],attrs:{type:"number",step:.1,min:.1,max:24},domProps:{value:e.time},on:{input:function(n){e.time=t._n(n)},blur:function(e){t.$forceUpdate()}}})],1),n("el-col",{attrs:{span:4,offset:1}},[n("el-dropdown",{on:{command:t.handleCommand}},[n("span",[t._v(t._s(e.type)+" "),n("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),n("el-dropdown-menu",{slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"学习-"+a}},[t._v("学习")]),n("el-dropdown-item",{attrs:{command:"工作-"+a}},[t._v("工作")]),n("el-dropdown-item",{attrs:{command:"休闲-"+a}},[t._v("休闲")]),n("el-dropdown-item",{attrs:{command:"娱乐-"+a}},[t._v("娱乐")]),n("el-dropdown-item",{attrs:{command:"运动-"+a}},[t._v("运动")]),n("el-dropdown-item",{attrs:{command:"其他-"+a}},[t._v("其他")])],1)],1)],1)],1)}),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:3,offset:7}},[n("el-tooltip",{attrs:{content:"添加条目",placement:"top"}},[n("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.addRecord}})],1)],1),n("el-col",{attrs:{span:3}},[n("el-tooltip",{attrs:{content:"删除条目",placement:"top"}},[n("el-button",{attrs:{type:"primary",icon:"minus"},on:{click:t.removeRecord}})],1)],1),n("el-col",{attrs:{span:3}},[n("el-tooltip",{attrs:{content:"提交记录",placement:"top"}},[n("el-button",{attrs:{type:"primary",icon:"check"},on:{click:t.submitRecords}})],1)],1)],1)],2),n("el-dialog",{directives:[{name:"model",rawName:"v-model",value:t.dialogVisible,expression:"dialogVisible"}],attrs:{title:"提示:",size:"tiny"},domProps:{value:t.dialogVisible},on:{input:function(e){t.dialogVisible=e}}},[n("span",[t._v(t._s(t.dialogContent))]),n("span",{slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("确定")])],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=app.ef351a235c2fca488adb.js.map