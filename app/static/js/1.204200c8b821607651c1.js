webpackJsonp([1],{"6p3G":function(t,e){},FG7Y:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"SamList",data:function(){var t=this;return{hostIP:"http://"+this.$store.state.hostIp,filter_mg:[],data_all:[],val:"",my_data:[],edit_stat:!1,input_value:[],total:0,columns:[{type:"selection",width:60,align:"center",fixed:"left"},{title:"状态",key:"状态",width:120,sortable:!0},{title:"患者姓名",key:"患者姓名",width:120,sortable:!0},{title:"检测项目",key:"检测项目",width:120,sortable:!0},{title:"肿瘤",key:"病理诊断",width:120,sortable:!0},{title:"申请单号",key:"申请单号",width:150,sortable:!0,fixed:"left"},{title:"迈景编号",key:"迈景编号",width:120,sortable:!0,fixed:"left",render:function(e,a){return e("div",[e("div",{on:{click:function(){t.$router.push({name:"EditAdmin",params:{mgcode:a.row.迈景编号}}),t.$Message.info("点击了"+a.row.迈景编号)}}},a.row.迈景编号)])}},{title:"样本类型",key:"样本类型",width:120,sortable:!0},{title:"收样日期",key:"收样日期",width:120,sortable:!0},{title:"流转开始日期",key:"流转开始日期",width:150,sortable:!0},{title:"提取完成日期",key:"提取完成日期",width:150,sortable:!0},{title:"建库完成日期",key:"建库完成日期",width:150,sortable:!0},{title:"实际上机日期",key:"实际上机日期",width:150,sortable:!0},{title:"上机倒计时",key:"上机倒计时",width:150,sortable:!0,render:function(e,a){return e("div",t.calDays(a.row.流转开始日期,4)+"天")}},{title:"测序完成日期",key:"测序完成日期",width:150,sortable:!0},{title:"生信完成日期",key:"生信完成日期",width:150,sortable:!0},{title:"生信倒计时",key:"生信倒计时",width:150,sortable:!0,render:function(e,a){var i=0;return i="b"===a.row.type?11:9,e("div",t.calDays(a.row.流转开始日期,i)+"天")}},{title:"报告完成时间",key:"报告完成时间",width:150,sortable:!0},{title:"报告倒计时",key:"报告倒计时",width:150,sortable:!0,render:function(e,a){var i=0;return i="b"===a.row.type?13:10,e("div",t.calDays(a.row.流转开始日期,i)+"天")}},{title:"审核完成时间",key:"审核完成时间",width:150,sortable:!0},{title:"审核倒计时",key:"审核倒计时",width:150,sortable:!0,render:function(e,a){var i=0;return i="b"===a.row.type?14:11,e("div",t.calDays(a.row.流转开始日期,i)+"天")}},{title:"备注",key:"备注",width:120,sortable:!0},{title:"预计完成时间",key:"预计完成时间",width:150,fixed:"right",sortable:!0,sortType:"desc"}],data:[],my_selection:"",loading:!1}},computed:{list_s:function(){return this.val?this.my_data:this.data}},methods:{getAllData:function(){var t=this,e="http://"+this.$store.state.hostIp+"/flow/api/list";this.axios.get(e).then(function(e){t.data_all=e.data.data}).catch(function(t){console.log(t)})},getApiData:function(t){var e=this;this.loading=!0;var a="http://"+this.$store.state.hostIp+"/flow/api/list/page/"+t;this.axios.get(a).then(function(t){e.data=t.data.data,e.total=t.data.total,e.loading=!1,console.log("成功"),console.log(t.data.data)}).catch(function(t){console.log(t)})},setPage:function(t){this.page=t,this.getApiData(t)},getSelecVal:function(t){console.log(t),this.my_selection.push(t)},getAllVal:function(t){console.log(t),this.my_selection.push(t)},delVal:function(t){this.my_selection=t},Submit:function(){var t="http://"+this.$store.state.hostIp+"/flow/api/list/flow/";this.axios.post(t,{selection:this.my_selection}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},delSelect:function(){var t="http://"+this.$store.state.hostIp+"/flow/api/list/del/";this.axios.post(t,{selection:this.my_selection}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},show:function(t){this.$router.push({path:"/snvlist/"+this.data[t].Sample_name}),console.log(this.data[t].Sample_name)},mySlect:function(){var t=this;this.$Modal.confirm({title:"确定删除所选样本",onOk:function(){t.$Message.info("成功删除,点击刷新"),t.delSelect()},onCancel:function(){t.$Message.info("取消删除")}})},runSlect:function(){var t=this;this.$Modal.confirm({title:"确定开始流转所选样本",onOk:function(){t.$Message.info("开始流转,点击流转中查看"),t.Submit()},onCancel:function(){t.$Message.info("取消流转")}})},exportData:function(){this.$refs.table.exportCsv({filename:"575流转"})},strToDate:function(t){return new Date(Date.parse(t.replace(/\./g,"/")))},calDays:function(t,e){var a=t;a=new Date(Date.parse(a.replace(/\./g,"/")));var i=(new Date).getTime()-a.getTime(),o=parseInt(i/864e5);return e-o>0?e-o:0},remoteMethod1:function(t){this.my_data=""!==t?this.data.filter(function(e){return e.迈景编号.toLowerCase().indexOf(t.toLowerCase())>-1}):this.list_s}},mounted:function(){this.getApiData(1),this.getAllData(),this.$store.commit("addSelect","")}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",{attrs:{id:"top-bar"}},[a("Button",{attrs:{type:"primary"},on:{click:t.runSlect}},[t._v("开始流转")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.mySlect}},[t._v("删除")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.getApiData(1)}}},[t._v("刷新")]),t._v(" "),a("Button",{attrs:{type:"primary",to:"/add"}},[t._v("新增")]),t._v(" "),a("Input",{attrs:{id:"input-search",search:"",placeholder:"输入迈景编号"},on:{"on-search":t.remoteMethod1},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1),t._v(" "),a("Table",{ref:"table",attrs:{stripe:"",columns:t.columns,loading:t.loading,height:"600",data:t.list_s,size:"small"},on:{"on-selection-change":t.delVal}}),t._v(" "),a("Page",{attrs:{total:t.total,size:"small","page-size":15,"show-elevator":""},on:{"on-change":t.setPage}})],1)},staticRenderFns:[]};var n=a("VU/8")(i,o,!1,function(t){a("6p3G")},"data-v-b862c408",null);e.default=n.exports}});
//# sourceMappingURL=1.204200c8b821607651c1.js.map