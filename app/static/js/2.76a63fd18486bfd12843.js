webpackJsonp([2],{PLF6:function(t,e){},"S1K/":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("mtWM"),l=i.n(a),o={name:"SamList",data:function(){var t=this;return{hostIP:"http://"+this.$store.state.hostIp,filter_mg:[],edit_stat:!1,input_value:[],columns:[{type:"selection",width:60,align:"center",fixed:"left"},{title:"状态",key:"状态",width:120,sortable:!0},{title:"患者姓名",key:"患者姓名",width:120,sortable:!0},{title:"检测项目",key:"检测项目",width:120,sortable:!0},{title:"肿瘤",key:"病理诊断",width:120,sortable:!0},{title:"申请单号",key:"申请单号",width:150,sortable:!0,fixed:"left"},{title:"迈景编号",key:"迈景编号",width:120,sortable:!0,fixed:"left"},{title:"样本类型",key:"样本类型",width:120,sortable:!0},{title:"收样日期",key:"收样日期",width:120,sortable:!0},{title:"流转开始日期",key:"流转开始日期",width:150,sortable:!0},{title:"提取完成日期",key:"提取完成日期",width:150,sortable:!0},{title:"建库完成日期",key:"建库完成日期",width:150,sortable:!0},{title:"实际上机日期",key:"实际上机日期",width:150,sortable:!0},{title:"上机倒计时",key:"上机倒计时",width:150,sortable:!0,render:function(e,i){return e("div",t.calDays(i.row.流转开始日期,4)+"天")}},{title:"测序完成日期",key:"测序完成日期",width:150,sortable:!0},{title:"生信完成日期",key:"生信完成日期",width:150,sortable:!0},{title:"生信倒计时",key:"生信倒计时",width:150,sortable:!0,render:function(e,i){var a=0;return a="b"===i.row.type?11:9,e("div",t.calDays(i.row.流转开始日期,a)+"天")}},{title:"报告完成时间",key:"报告完成时间",width:150,sortable:!0},{title:"报告倒计时",key:"报告倒计时",width:150,sortable:!0,render:function(e,i){var a=0;return a="b"===i.row.type?13:10,e("div",t.calDays(i.row.流转开始日期,a)+"天")}},{title:"审核完成时间",key:"审核完成时间",width:150,sortable:!0},{title:"审核倒计时",key:"审核倒计时",width:150,sortable:!0,render:function(e,i){var a=0;return a="b"===i.row.type?14:11,e("div",t.calDays(i.row.流转开始日期,a)+"天")}},{title:"备注",key:"备注",width:120,sortable:!0},{title:"预计完成时间",key:"预计完成时间",width:150,fixed:"right",sortable:!0,sortType:"desc"}],data:[],my_selection:"",loading:!1}},computed:{list_s:function(){return this.$store.state.list_select},filename:function(){var t=new Date;return t.getFullYear()+"_"+(t.getMonth()+1)+"_"+t.getDate()+"_575流转"}},methods:{getApiData:function(){var t=this;this.loading=!0;var e="http://"+this.$store.state.hostIp+"/flow/api/list/";l.a.get(e).then(function(e){t.data=e.data.data,t.filter_mg=e.data.filter_mg,t.loading=!1,console.log("成功"),console.log(e.data.filter_mg)}).catch(function(t){console.log(t)})},getSelecVal:function(t){console.log(t),this.my_selection.push(t)},getAllVal:function(t){console.log(t),this.my_selection.push(t)},delVal:function(t){this.my_selection=t},Submit:function(){var t="http://"+this.$store.state.hostIp+"/flow/api/list/flow/";this.axios.post(t,{selection:this.my_selection}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},SubmitFlask:function(){this.Submit()},show:function(t){this.$router.push({path:"/snvlist/"+this.data[t].Sample_name}),console.log(this.data[t].Sample_name)},chEditStat:function(){this.edit_stat?this.edit_stat=!1:this.edit_stat=!0},mySlect:function(){this.Submit(),this.$store.commit("addSelect",this.my_selection),console.log(this.list_s)},exportData:function(){this.$refs.table.exportCsv({filename:this.filename,data:this.my_selection,columns:this.columns})},strToDate:function(t){return new Date(Date.parse(t.replace(/\./g,"/")))},calDays:function(t,e){var i=t;i=new Date(Date.parse(i.replace(/\./g,"/")));var a=(new Date).getTime()-i.getTime(),l=parseInt(a/864e5);return e-l>0?e-l:0}},mounted:function(){this.getApiData(),this.$store.commit("addSelect","")}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Button",{attrs:{type:"primary"},on:{click:t.getApiData}},[t._v("刷新")]),t._v(" "),i("Button",{attrs:{type:"primary"},on:{click:t.exportData}},[t._v("导出")]),t._v(" "),i("Table",{ref:"table",attrs:{stripe:"",columns:t.columns,loading:t.loading,height:"600",data:t.data,size:"small"},on:{"on-selection-change":t.delVal}})],1)},staticRenderFns:[]};var n=i("VU/8")(o,s,!1,function(t){i("PLF6")},"data-v-7a7c41f2",null);e.default=n.exports}});
//# sourceMappingURL=2.76a63fd18486bfd12843.js.map