webpackJsonp([1],{"+skl":function(t,e){},"0Wsq":function(t,e){},"7sef":function(t,e){},K7BK:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s={data:function(){return{hostIP:"http://"+this.$store.state.hostIp+"/login/"}},methods:{See:function(t){window.location.href=t}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Layout",[a("Header",{style:{position:"fixed",width:"100%"}},[a("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"1"}},[a("div",{staticClass:"layout-logo"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{id:"mglogo",src:i("VLZ+")}})])],1),t._v(" "),a("div",{staticClass:"layout-nav"},[a("MenuItem",{attrs:{name:"1"}},[a("Icon",{attrs:{type:"ios-navigate"}}),t._v(" "),a("router-link",{attrs:{to:"/samlist"}},[t._v("总览")])],1),t._v(" "),a("MenuItem",{attrs:{name:"2"}},[a("Icon",{attrs:{type:"ios-keypad"}}),t._v(" "),a("router-link",{attrs:{to:"/editsam"}},[t._v("流转中")])],1),t._v(" "),a("MenuItem",{attrs:{name:"3"}},[a("Icon",{attrs:{type:"ios-analytics"}}),t._v(" "),a("router-link",{attrs:{to:"/uploadfile"}},[t._v("文件上传")])],1),t._v(" "),a("MenuItem",{attrs:{name:"4"}},[a("Icon",{attrs:{type:"ios-paper"}}),t._v(" "),a("a",{on:{click:function(e){return t.See(t.hostIP)}}},[t._v("用户")])],1)],1)])],1),t._v(" "),a("Content",{style:{margin:"88px 20px 0",background:"#fff",minHeight:"600px"}},[a("router-view")],1),t._v(" "),a("Footer",{staticClass:"layout-footer-center"},[t._v("© MyGene")])],1)],1)},staticRenderFns:[]};var o=i("VU/8")(s,n,!1,function(t){i("s8Cm")},"data-v-671cb62c",null).exports,r=i("/ocq"),l=i("mtWM"),c=i.n(l),d={name:"Home",data:function(){return{data:[],search_data:[]}},methods:{getData:function(){var t=this;c.a.get("http://127.0.0.1:8001/flow/api/list/").then(function(e){t.data=e.data.data,console.log("成功"),console.log(e.data)}).catch(function(t){console.log(t)})}},mounted:function(){this.getData()}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-mg"},[e("Input",{attrs:{search:"",autofocus:"",size:"large",placeholder:"输入样本编号"},on:{"on-enter":this.getData}})],1)},staticRenderFns:[]};var h=i("VU/8")(d,u,!1,function(t){i("0Wsq")},"data-v-357a021d",null).exports,p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline,inline:""}},[i("FormItem",{attrs:{prop:"user"}},[i("Input",{attrs:{type:"text",placeholder:"Username"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}},[i("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),t._v(" "),i("FormItem",{attrs:{prop:"password"}},[i("Input",{attrs:{type:"password",placeholder:"Password"},model:{value:t.formInline.password,callback:function(e){t.$set(t.formInline,"password",e)},expression:"formInline.password"}},[i("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),t._v(" "),i("FormItem",[i("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formInline")}}},[t._v("Signin")])],1)],1)},staticRenderFns:[]},m=i("VU/8")({name:"Register",data:function(){return{formInline:{user:"",password:""},ruleInline:{user:[{required:!0,message:"Please fill in the user name",trigger:"blur"}],password:[{required:!0,message:"Please fill in the password.",trigger:"blur"},{type:"string",min:6,message:"The password length cannot be less than 6 bits",trigger:"blur"}]}}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){t?e.$Message.success("Success!"):e.$Message.error("Fail!")})}}},p,!1,null,null,null).exports,f=i("BTaQ"),y=i.n(f),_=(i("+skl"),{name:"SamList",data:function(){var t=this;return{hostIP:"http://"+this.$store.state.hostIp,filter_mg:[],edit_stat:!1,input_value:[],columns:[{type:"selection",width:60,align:"center"},{title:"状态",key:"状态",width:120,sortable:!0},{title:"患者姓名",key:"患者姓名",width:120,sortable:!0,props:["value"],render:function(e,i){return t.edit_stat?e("div",[e("Input",{props:{placeholder:i.row.患者姓名}})]):e("div",i.row.患者姓名)}},{title:"检测项目",key:"检测项目",width:120,sortable:!0},{title:"肿瘤",key:"肿瘤",width:150,sortable:!0},{title:"申请单号",key:"申请单号",width:150,sortable:!0},{title:"迈景编号",key:"迈景编号",width:120,fixed:"left",sortable:!0},{title:"类型",key:"类型",width:80,sortable:!0},{title:"收样时间",key:"收样时间",width:150,sortable:!0},{title:"是否时间点前",key:"是否时间点前",width:150,sortable:!0},{title:"周几",key:"周几",width:80,sortable:!0},{title:"预计优先度",key:"预计优先度",width:150,sortable:!0},{title:"预计完成时间",key:"预计完成时间",width:150,sortable:!0},{title:"实际提取完成时间",key:"实际提取完成时间",width:150,sortable:!0},{title:"预计提取完成时间",key:"预计提取完成时间",width:150,sortable:!0},{title:"实际建库开始时间",key:"实际建库开始时间",width:150,sortable:!0},{title:"实际建库完成时间",key:"实际建库完成时间",width:150,sortable:!0},{title:"预计建库完成时间",key:"预计建库完成时间",width:150,sortable:!0},{title:"实际测序完成时间",key:"实际测序完成时间",width:150,sortable:!0},{title:"预计测序完成时间",key:"预计测序完成时间",width:150,sortable:!0},{title:"实际生信完成时间",key:"实际生信完成时间",width:150,sortable:!0},{title:"预计生信完成时间",key:"预计生信完成时间",width:150,sortable:!0},{title:"实际报告完成时间",key:"实际报告完成时间",width:150,sortable:!0},{title:"预计报告完成时间",key:"预计报告完成时间",width:150,sortable:!0},{title:"实际审核完成时间",key:"实际审核完成时间",width:150,sortable:!0},{title:"预计审核完成时间",key:"预计审核完成时间",width:150,sortable:!0},{title:"最终优先度",key:"最终优先度",width:150,sortable:!0},{title:"备注",key:"备注",width:150,sortable:!0}],data:[],my_selection:"",loading:!1}},computed:{list_s:function(){return this.$store.state.list_select}},methods:{getApiData:function(){var t=this;this.loading=!0;var e="http://"+this.$store.state.hostIp+"/flow/api/list/";c.a.get(e).then(function(e){t.data=e.data.data,t.filter_mg=e.data.filter_mg,t.loading=!1,console.log("成功"),console.log(e.data.filter_mg)}).catch(function(t){console.log(t)})},getSelecVal:function(t){console.log(t),this.my_selection.push(t)},getAllVal:function(t){console.log(t),this.my_selection.push(t)},delVal:function(t){this.my_selection=t},Submit:function(){var t="http://"+this.$store.state.hostIp+"/flow/api/list/flow/";this.axios.post(t,{selection:this.my_selection}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},SubmitFlask:function(){this.Submit()},show:function(t){this.$router.push({path:"/snvlist/"+this.data[t].Sample_name}),console.log(this.data[t].Sample_name)},chEditStat:function(){this.edit_stat?this.edit_stat=!1:this.edit_stat=!0},mySlect:function(){this.Submit(),this.$store.commit("addSelect",this.my_selection),this.$router.push({path:"/editsam"}),console.log(this.list_s)},exportData:function(){this.$refs.table.exportCsv({filename:"575流转"})}},mounted:function(){this.getApiData(),this.$store.commit("addSelect","")}}),v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Button",{attrs:{type:"primary"},on:{click:t.mySlect}},[t._v("开始流转")]),t._v(" "),i("Button",{attrs:{type:"primary"},on:{click:t.getApiData}},[t._v("刷新")]),t._v(" "),i("Button",{attrs:{type:"primary"},on:{click:t.exportData}},[t._v("导出")]),t._v(" "),i("Table",{ref:"table",attrs:{columns:t.columns,loading:t.loading,height:"600",data:t.data,size:"small"},on:{"on-selection-change":t.delVal}})],1)},staticRenderFns:[]};var w=i("VU/8")(_,v,!1,function(t){i("7sef")},"data-v-27c72c8a",null).exports,g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Steps",{staticStyle:{margin:"auto"},attrs:{current:0,size:"small"}},[i("Step",{attrs:{title:"提取"}}),t._v(" "),i("Step",{attrs:{title:"建库"}}),t._v(" "),i("Step",{attrs:{title:"测序"}}),t._v(" "),i("Step",{attrs:{title:"生信"}}),i("Step",{attrs:{title:"报告"}}),i("Step",{attrs:{title:"审核"}})],1),t._v(" "),i("Form",{attrs:{model:t.formItem,"label-width":80}},[i("FormItem",{staticStyle:{width:"200px"},attrs:{label:"提取"}},[i("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm",placeholder:"Select date and time(Excluding seconds)"}})],1),t._v(" "),i("FormItem",{attrs:{label:"Checkbox"}},[i("CheckboxGroup",{model:{value:t.formItem.checkbox,callback:function(e){t.$set(t.formItem,"checkbox",e)},expression:"formItem.checkbox"}},[i("Checkbox",{attrs:{label:"Eat"}}),t._v(" "),i("Checkbox",{attrs:{label:"Sleep"}}),t._v(" "),i("Checkbox",{attrs:{label:"Run"}}),t._v(" "),i("Checkbox",{attrs:{label:"Movie"}})],1)],1)],1),t._v(" "),i("p",[t._v(t._s(t.count))]),t._v(" "),i("Button",{on:{click:t.add}},[t._v("+1")])],1)},staticRenderFns:[]},k=i("VU/8")({name:"FormUpdata",data:function(){return{formItem:{input:"",select:"",radio:"male",checkbox:[],switch:!0,date:"",time:"",slider:[20,50],textarea:""}}},methods:{add:function(){this.$store.commit("add")}},computed:{count:function(){return this.$store.state.count}}},g,!1,null,null,null).exports,b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Upload",{attrs:{multiple:"",type:"drag",action:"http://192.168.1.109/flow/api/updata/"}},[e("div",{staticStyle:{padding:"20px 0"}},[e("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),this._v(" "),e("p",[this._v("点击或拖拽到此处上传")])],1)])},staticRenderFns:[]},S=i("VU/8")({name:"UploadFile",data:function(){return{hostIP:"http://"+this.$store.state.hostIp+"/flow/api/updata/"}}},b,!1,null,null,null).exports,x=i("mvHQ"),I=i.n(x),$={name:"EditSam",data:function(){var t=this;return{current_this:0,hahw:"right",columns1:[{title:"实际提取完成时间",key:"实际提取完成时间",width:150,render:function(e,i){var a=t;return t.edit_status[t.current_this].distill?e("div",[e("DatePicker",{props:{placeholder:i.row.实际提取完成时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd",required:!0},on:{"on-change":function(t){a.list_s[i.index].实际提取完成时间=t}}})]):e("div",i.row.实际提取完成时间)}},{title:"实际建库开始时间",key:"实际建库开始时间",width:150,render:function(e,i){var a=t;return t.edit_status[t.current_this].build?e("div",[e("DatePicker",{props:{placeholder:i.row.实际建库开始时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){a.list_s[i.index].实际建库开始时间=t}}})]):e("div",i.row.实际建库开始时间)}},{title:"实际建库完成时间",key:"实际建库完成时间",width:150,render:function(e,i){var a=t;return t.edit_status[t.current_this].build?e("div",[e("DatePicker",{props:{placeholder:i.row.实际建库完成时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){a.list_s[i.index].实际建库完成时间=t}}})]):e("div",i.row.实际建库完成时间)}},{title:"实际测序完成时间",key:"实际测序完成时间",width:150,render:function(e,i){var a=t;return t.edit_status[t.current_this].seq?e("div",[e("DatePicker",{props:{placeholder:i.row.实际测序完成时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){a.list_s[i.index].实际测序完成时间=t}}})]):e("div",i.row.实际测序完成时间)}},{title:"实际生信完成时间",key:"实际生信完成时间",width:150,render:function(e,i){var a=t;return t.edit_status[t.current_this].analysis?e("div",[e("DatePicker",{props:{placeholder:i.row.实际生信完成时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){a.list_s[i.index].实际生信完成时间=t}}})]):e("div",i.row.实际生信完成时间)}},{title:"实际报告完成时间",key:"实际报告完成时间",width:150,render:function(e,i){var a=t;return t.edit_status[t.current_this].report?e("div",[e("DatePicker",{props:{placeholder:i.row.实际报告完成时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){a.list_s[i.index].实际报告完成时间=t}}})]):e("div",i.row.实际报告完成时间)}},{title:"实际审核完成时间",key:"实际审核完成时间",width:150,render:function(e,i){var a=t;return t.edit_status[t.current_this].check?e("div",[e("DatePicker",{props:{placeholder:i.row.实际审核完成时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){a.list_s[i.index].实际审核完成时间=t}}})]):e("div",i.row.实际审核完成时间)}},{title:"最终优先度",key:"最终优先度",width:150,render:function(e,i){var a=t;return t.edit_status[t.current_this].final?e("div",[e("Select",{props:{value:i.row.最终优先度},on:{"on-change":function(t){a.list_s[i.index].最终优先度=t}}},[{name:"S",value:"S"},{name:"A",value:"A"},{name:"B",value:"B"},{name:"C",value:"C"},{name:"D",value:"D"}].map(function(t){return e("Option",{props:{value:t.value}},t.name)}))]):e("div",i.row.最终优先度)}},{title:"备注",key:"备注",width:150,render:function(e,i){var a=t;return t.edit_status[t.current_this].note?e("div",[e("Input",{props:{placeholder:i.row.备注},on:{"on-blur":function(t){a.list_s[i.index].备注=event.target.value}}})]):e("div",i.row.备注)}},{title:"患者姓名",key:"患者姓名",width:120,sortable:!0},{title:"检测项目",key:"检测项目",width:120,sortable:!0},{title:"肿瘤",key:"肿瘤",width:150,sortable:!0},{title:"申请单号",key:"申请单号",width:150,sortable:!0},{title:"迈景编号",key:"迈景编号",width:120,fixed:"left",sortable:!0},{title:"类型",key:"类型",width:80,sortable:!0},{title:"收样时间",key:"收样时间",width:150,sortable:!0},{title:"是否时间点前",key:"是否时间点前",width:150,sortable:!0},{title:"周几",key:"周几",width:80,sortable:!0},{title:"预计优先度",key:"预计优先度",width:150,sortable:!0},{title:"预计完成时间",key:"预计完成时间",width:150,sortable:!0},{title:"预计提取完成时间",key:"预计提取完成时间",width:150,sortable:!0},{title:"预计建库完成时间",key:"预计建库完成时间",width:150,sortable:!0},{title:"预计测序完成时间",key:"预计测序完成时间",width:150,sortable:!0},{title:"预计生信完成时间",key:"预计生信完成时间",width:150,sortable:!0},{title:"预计报告完成时间",key:"预计报告完成时间",width:150,sortable:!0},{title:"预计审核完成时间",key:"预计审核完成时间",width:150,sortable:!0}],data1:[],loading:!1}},computed:{list_s:function(){return this.data1},edit_status:function(){return{0:{distill:!0},1:{build:!0},2:{seq:!0},3:{analysis:!0},4:{report:!0},5:{check:!0},6:{final:!0},7:{note:!0}}}},methods:{getApiData:function(){var t=this;this.loading=!0;var e="http://"+this.$store.state.hostIp+"/flow/api/flowing/";this.axios.get(e).then(function(e){t.data1=e.data.data,t.filter_mg=e.data.filter_mg,t.loading=!1,console.log("成功"),console.log(e.data.data)}).catch(function(t){console.log(t)})},Submit:function(){var t="http://"+this.$store.state.hostIp+"/flow/api/review/";this.axios.post(t,{data:JSON.parse(localStorage.getItem("select_list"))}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},Submit1:function(){var t="http://"+this.$store.state.hostIp+"/flow/api/submit1/";this.axios.post(t,{data:JSON.parse(localStorage.getItem("select_list"))}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},show:function(t){this.$router.push({path:"/snvlist/"+this.data[t].Sample_name}),console.log(this.data[t].Sample_name)},setVal:function(){localStorage.setItem("select_list",I()(this.list_s)),this.Submit1(),this.current_this<7?this.current_this++:this.current_this=0,console.log(this.edit_status[this.current_this].build)},setDate:function(){localStorage.setItem("select_list",I()(this.list_s)),this.Submit(),localStorage.removeItem("select_list"),this.$store.state.list_select=[],this.$router.push({path:"/samlist/"})},exportData:function(){this.$refs.table.exportCsv({filename:"575流转"})}},mounted:function(){this.getApiData(),console.log(this.path)}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Steps",{staticStyle:{margin:"auto 50px"},attrs:{current:t.current_this,size:"small"}},[i("Step",{attrs:{title:"提取"}}),t._v(" "),i("Step",{attrs:{title:"建库"}}),t._v(" "),i("Step",{attrs:{title:"测序"}}),t._v(" "),i("Step",{attrs:{title:"生信"}}),t._v(" "),i("Step",{attrs:{title:"报告"}}),t._v(" "),i("Step",{attrs:{title:"审核"}}),t._v(" "),i("Step",{attrs:{title:"最终优先度"}}),t._v(" "),i("Step",{attrs:{title:"备注"}})],1),t._v(" "),i("Button",{attrs:{type:"primary"},on:{click:t.getApiData}},[t._v("刷新")]),t._v(" "),i("Table",{ref:"table",attrs:{columns:t.columns1,loading:t.loading,height:"550",data:t.list_s,size:"small"}}),t._v(" "),0!==t.current_this?i("Button",{attrs:{type:"primary"},on:{click:function(e){t.current_this--}}},[t._v("上一步")]):t._e(),t._v(" "),7!==t.current_this?i("Button",{attrs:{type:"primary"},on:{click:t.setVal}},[t._v("下一步")]):t._e(),t._v(" "),7===t.current_this?i("Button",{attrs:{type:"primary"},on:{click:t.setDate}},[t._v("提交")]):t._e()],1)},staticRenderFns:[]};var D=i("VU/8")($,M,!1,function(t){i("K7BK")},"data-v-fd5f855c",null).exports;a.default.use(y.a),a.default.use(r.a);var F=new r.a({routes:[{path:"/",name:"Home",component:h},{path:"/register",name:" Register",component:m},{path:"/samlist",name:"SamList",component:w},{path:"/formupdata",name:"FormUpdata",component:k},{path:"/uploadfile",name:"UploadFile",component:S},{path:"/editsam",name:"EditSam",component:D}]}),C=i("Rf8U"),P=i.n(C),U=i("NYxO");a.default.use(U.a);var V=new U.a.Store({state:{count:100,hostIp:"192.168.1.109",list_select:[]},mutations:{add:function(t){t.count++},dec:function(t){t.count--},addSelect:function(t,e){t.list_select=e,localStorage.setItem("select_list",I()(e))}}}),B=i("UnSZ"),E=i.n(B);a.default.use(P.a,c.a),a.default.use(E.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:F,store:V,components:{App:o},template:"<App/>"})},"VLZ+":function(t,e,i){t.exports=i.p+"static/img/mg.eac93f6.png"},s8Cm:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.2b0086aa3dbae44ed65a.js.map