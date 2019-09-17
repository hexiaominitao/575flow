webpackJsonp([12],{xjxC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),i=a.n(n),l={data:function(){var t=this;return{total:0,page:0,listStyle:{width:"600px",height:"400px"},my_selection:[],list_title:{distill:[10,20],build:[11,20],run:[12,13],seq:[14,20],analysis:[15,16],report:[17,18],check:[19,20],note:[21,20]},columns4:[{type:"selection",width:60,align:"center",fixed:"left"},{title:"状态",key:"状态",width:120,sortable:!0},{title:"患者姓名",slot:"患者姓名",width:120,sortable:!0},{title:"检测项目",key:"检测项目",width:120,sortable:!0},{title:"肿瘤",key:"病理诊断",width:120,sortable:!0},{title:"申请单号",key:"申请单号",width:150,sortable:!0,fixed:"left"},{title:"迈景编号",key:"迈景编号",width:120,sortable:!0,fixed:"left"},{title:"样本类型",key:"样本类型",width:120,sortable:!0},{title:"收样日期",key:"收样日期",width:120,sortable:!0},{title:"流转开始日期",key:"流转开始日期",width:150,sortable:!0},{title:"提取完成日期",slot:"提取完成日期",width:150,sortable:!0},{title:"建库完成日期",slot:"建库完成日期",width:150,sortable:!0},{title:"实际上机日期",slot:"实际上机日期",width:150,sortable:!0},{title:"上机倒计时",key:"上机倒计时",width:150,sortable:!0,render:function(e,a){return e("div",t.calDays(a.row.流转开始日期,4)+"天")}},{title:"测序完成日期",key:"测序完成日期",width:150,sortable:!0},{title:"生信完成日期",slot:"生信完成日期",width:150,sortable:!0},{title:"生信倒计时",key:"生信倒计时",width:150,sortable:!0,render:function(e,a){var n=0;return n="b"===a.row.type?11:9,e("div",t.calDays(a.row.流转开始日期,n)+"天")}},{title:"报告完成时间",slot:"报告完成时间",width:150,sortable:!0},{title:"报告倒计时",key:"报告倒计时",width:150,sortable:!0,render:function(e,a){var n=0;return n="b"===a.row.type?13:10,e("div",t.calDays(a.row.流转开始日期,n)+"天")}},{title:"审核完成时间",slot:"审核完成时间",width:150,sortable:!0},{title:"审核倒计时/天",key:"审核倒计时",width:150,sortable:!0,render:function(e,a){var n=0;return n="b"===a.row.type?14:11,e("div",t.calDays(a.row.流转开始日期,n))}},{title:"备注",key:"备注",width:120,sortable:!0},{title:"预计完成时间",key:"预计完成时间",width:150,fixed:"right",sortable:!0,sortType:"desc"}],columns5:[],data_distill:[],data_all:[],loading:!1}},computed:{data5:function(){return this.data_all.data},current_val:function(){var t=this.$route.params.step;return this.columns4[this.list_title[t][0]].title}},watch:{$route:"myColumns"},methods:{getApiData:function(t){var e=this;this.loading=!0;var a="http://"+this.$store.state.hostIp+"/flow/api/flowing/"+t;this.axios.get(a).then(function(t){e.data_all=t.data.data,e.total=t.data.total,e.loading=!1,console.log("成功"),console.log(t.data.data)}).catch(function(t){console.log(t)})},setPage:function(t){this.page=t,this.getApiData(t)},Submit1:function(){var t=this,e="http://"+this.$store.state.hostIp+"/flow/api/submit1/";this.axios.post(e,{data:JSON.parse(localStorage.getItem("select_list"))}).then(function(e){t.$Message.info("保存成功!")}).catch(function(t){console.log(t)})},delVal:function(){var t=this.$route.params.step;console.log(t),localStorage.setItem("select_list",i()(this.my_selection)),this.Submit1()},myColumns:function(){var t=this.$route.params.step,e=this.columns4;this.columns5=[],e[this.list_title[t][0]].fixed="right",e[this.list_title[t][1]].fixed="right",this.columns5=e,console.log(this.list_title[t][0])},calDays:function(t,e){var a=t;a=new Date(Date.parse(a.replace(/\./g,"/")));var n=(new Date).getTime()-a.getTime(),i=parseInt(n/864e5);return e-i>0?e-i:0},selSam:function(t){this.my_selection=t},saveDate_distill:function(t,e){this.data_all[t].提取完成日期=e,this.data_all[t].状态="提取完成"},saveDate_build:function(t,e){this.data_all[t].建库完成日期=e,this.data_all[t].状态="提取完成"},saveDate_run:function(t,e){this.data_all[t].实际上机日期=e,this.data_all[t].状态="上机完成"},saveDate_seq:function(t,e){this.data_all[t].测序完成日期=e,this.data_all[t].状态="测序完成"},saveDate_analysis:function(t,e){this.data_all[t].生信完成日期=e,this.data_all[t].状态="生信完成"},saveDate_report:function(t,e){this.data_all[t].报告完成时间=e,this.data_all[t].状态="报告完成"},saveDate_check:function(t,e){this.data_all[t].审核完成时间=e,this.data_all[t].状态="审核完成"},saveDate_note:function(t,e){this.data_all[t].备注=e},handleRender:function(t){var e=this;this.$Modal.confirm({title:"终止"+t+"的流转",onOk:function(){e.$Message.info("点击了确定")},onCancel:function(){},render:function(a){return a("Input",{props:{value:t.终止原因,type:"textarea",clearable:!0,autofocus:!0,placeholder:"请填写终止原因"},on:{input:function(t){e.value=t}}})}})}},mounted:function(){this.getApiData(1),this.myColumns()}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Table",{ref:"table",attrs:{stripe:"",columns:t.columns5,loading:t.loading,height:"550",data:t.data_all,size:"small"},on:{"on-selection-change":t.selSam},scopedSlots:t._u([{key:"患者姓名",fn:function(e){var n=e.row;return[a("strong",[t._v(t._s(n.患者姓名))])]}},{key:"提取完成日期",fn:function(e){var n=e.row,i=e.index;return[a("DatePicker",{attrs:{format:"yyyy.MM.dd",type:"date",placeholder:n.提取完成日期},on:{"on-change":function(e){return t.saveDate_distill(i,e)}}})]}},{key:"建库完成日期",fn:function(e){var n=e.row,i=e.index;return[a("DatePicker",{attrs:{format:"yyyy.MM.dd",type:"date",placeholder:n.建库完成日期},on:{"on-change":function(e){return t.saveDate_build(i,e)}}})]}},{key:"实际上机日期",fn:function(e){var n=e.row,i=e.index;return[a("DatePicker",{attrs:{format:"yyyy.MM.dd",type:"date",placeholder:n.实际上机日期},on:{"on-change":function(e){return t.saveDate_run(i,e)}}})]}},{key:"测序完成日期",fn:function(e){var n=e.row,i=e.index;return[a("DatePicker",{attrs:{format:"yyyy.MM.dd",type:"date",placeholder:n.测序完成日期},on:{"on-change":function(e){return t.saveDate_seq(i,e)}}})]}},{key:"生信完成日期",fn:function(e){var n=e.row,i=e.index;return[a("DatePicker",{attrs:{format:"yyyy.MM.dd",type:"date",placeholder:n.生信完成日期},on:{"on-change":function(e){return t.saveDate_analysis(i,e)}}})]}},{key:"报告完成时间",fn:function(e){var n=e.row,i=e.index;return[a("DatePicker",{attrs:{format:"yyyy.MM.dd",type:"date",placeholder:n.报告完成时间},on:{"on-change":function(e){return t.saveDate_report(i,e)}}})]}},{key:"审核完成时间",fn:function(e){var n=e.row,i=e.index;return[a("DatePicker",{attrs:{format:"yyyy.MM.dd",type:"date",placeholder:n.审核完成时间},on:{"on-change":function(e){return t.saveDate_check(i,e)}}})]}}])}),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.delVal}},[t._v("保存")]),a("Page",{attrs:{total:t.total,size:"small","page-size":15,"show-elevator":""},on:{"on-change":t.setPage}})],1)},staticRenderFns:[]},r=a("VU/8")(l,o,!1,null,null,null);e.default=r.exports}});
//# sourceMappingURL=12.a5165ef40e4dde526d61.js.map