webpackJsonp([1],{"+skl":function(t,e){},"/Zw8":function(t,e){},"0Wsq":function(t,e){},"3voI":function(t,e){},"9VWG":function(t,e){},CYft:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),o={data:function(){return{hostIP:"http://"+this.$store.state.hostIp+"/login/"}},methods:{See:function(t){window.location.href=t}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout",attrs:{id:"app"}},[n("Layout",[n("Header",{style:{position:"fixed",width:"100%"}},[n("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"1"}},[n("div",{staticClass:"layout-logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{id:"mglogo",src:a("VLZ+")}})])],1),t._v(" "),n("div",{staticClass:"layout-nav"},[n("MenuItem",{attrs:{name:"1",to:"/samlist"}},[t._v("\n                        总览\n                    ")]),t._v(" "),n("MenuItem",{attrs:{name:"2",to:"/editsam/viewsam"}},[t._v("\n                        流转中\n                    ")]),t._v(" "),n("MenuItem",{attrs:{name:"3",to:"/uploadfile"}},[t._v("\n                        文件上传\n                    ")])],1)])],1),t._v(" "),n("Content",{style:{margin:"88px 20px 0",background:"#fff",minHeight:"600px"}},[n("router-view")],1),t._v(" "),n("Footer",{staticClass:"layout-footer-center"},[t._v("© MyGene")])],1)],1)},staticRenderFns:[]};var r=a("VU/8")(o,i,!1,function(t){a("kcaU")},"data-v-2910be6e",null).exports,s=a("/ocq"),l=a("mtWM"),c=a.n(l),d={name:"Home",data:function(){return{data:[],search_data:[]}},methods:{getData:function(){var t=this;c.a.get("http://127.0.0.1:8001/flow/api/list/").then(function(e){t.data=e.data.data,console.log("成功"),console.log(e.data)}).catch(function(t){console.log(t)})}},mounted:function(){this.getData()}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-mg"},[e("Input",{attrs:{search:"",autofocus:"",size:"large",placeholder:"输入样本编号"},on:{"on-enter":this.getData}})],1)},staticRenderFns:[]};var m=a("VU/8")(d,u,!1,function(t){a("0Wsq")},"data-v-357a021d",null).exports,h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("Form",{ref:"formInline",attrs:{model:t.formInline,rules:t.ruleInline}},[a("FormItem",{attrs:{prop:"user"}},[a("Input",{attrs:{type:"text",placeholder:"用户名"},model:{value:t.formInline.user,callback:function(e){t.$set(t.formInline,"user",e)},expression:"formInline.user"}},[a("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),t._v(" "),a("FormItem",{attrs:{prop:"password"}},[a("Input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.formInline.password,callback:function(e){t.$set(t.formInline,"password",e)},expression:"formInline.password"}},[a("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleSubmit("formInline")}}},[t._v("登录")])],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")({name:"Register",data:function(){return{formInline:{user:"",password:""},ruleInline:{user:[{required:!0,message:"请填写用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{type:"string",min:6,message:"密码长度要大于6位数",trigger:"blur"}]}}},methods:{handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){t?e.$Message.success("登录成功"):e.$Message.error("登录失败")})}}},h,!1,function(t){a("CYft")},"data-v-3cdd3aba",null).exports,f=a("BTaQ"),y=a.n(f),v=(a("+skl"),{name:"SamList",data:function(){var t=this;return{hostIP:"http://"+this.$store.state.hostIp,filter_mg:[],edit_stat:!1,input_value:[],columns:[{type:"selection",width:60,align:"center",fixed:"left"},{title:"状态",key:"状态",width:120,sortable:!0},{title:"患者姓名",key:"患者姓名",width:120,sortable:!0},{title:"检测项目",key:"检测项目",width:120,sortable:!0},{title:"肿瘤",key:"病理诊断",width:120,sortable:!0},{title:"申请单号",key:"申请单号",width:150,sortable:!0,fixed:"left"},{title:"迈景编号",key:"迈景编号",width:120,sortable:!0,fixed:"left"},{title:"样本类型",key:"样本类型",width:120,sortable:!0},{title:"收样日期",key:"收样日期",width:120,sortable:!0},{title:"流转开始日期",key:"流转开始日期",width:150,sortable:!0},{title:"提取完成日期",key:"提取完成日期",width:150,sortable:!0},{title:"建库完成日期",key:"建库完成日期",width:150,sortable:!0},{title:"实际上机日期",key:"实际上机日期",width:150,sortable:!0},{title:"上机倒计时",key:"上机倒计时",width:150,sortable:!0,render:function(e,a){return e("div",t.calDays(a.row.流转开始日期,4)+"天")}},{title:"测序完成日期",key:"测序完成日期",width:150,sortable:!0},{title:"生信完成日期",key:"生信完成日期",width:150,sortable:!0},{title:"生信倒计时",key:"生信倒计时",width:150,sortable:!0,render:function(e,a){var n=0;return n="b"===a.row.type?11:9,e("div",t.calDays(a.row.流转开始日期,n)+"天")}},{title:"报告完成时间",key:"报告完成时间",width:150,sortable:!0},{title:"报告倒计时",key:"报告倒计时",width:150,sortable:!0,render:function(e,a){var n=0;return n="b"===a.row.type?13:10,e("div",t.calDays(a.row.流转开始日期,n)+"天")}},{title:"审核完成时间",key:"审核完成时间",width:150,sortable:!0},{title:"审核倒计时",key:"审核倒计时",width:150,sortable:!0,render:function(e,a){var n=0;return n="b"===a.row.type?14:11,e("div",t.calDays(a.row.流转开始日期,n)+"天")}},{title:"备注",key:"备注",width:120,sortable:!0},{title:"预计完成时间",key:"预计完成时间",width:150,fixed:"right",sortable:!0,sortType:"desc"}],data:[],my_selection:"",loading:!1}},computed:{list_s:function(){return this.$store.state.list_select},filename:function(){var t=new Date;return t.getFullYear()+"_"+(t.getMonth()+1)+"_"+t.getDate()+"_575流转"}},methods:{getApiData:function(){var t=this;this.loading=!0;var e="http://"+this.$store.state.hostIp+"/flow/api/list/";c.a.get(e).then(function(e){t.data=e.data.data,t.filter_mg=e.data.filter_mg,t.loading=!1,console.log("成功"),console.log(e.data.filter_mg)}).catch(function(t){console.log(t)})},getSelecVal:function(t){console.log(t),this.my_selection.push(t)},getAllVal:function(t){console.log(t),this.my_selection.push(t)},delVal:function(t){this.my_selection=t},Submit:function(){var t="http://"+this.$store.state.hostIp+"/flow/api/list/flow/";this.axios.post(t,{selection:this.my_selection}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},SubmitFlask:function(){this.Submit()},show:function(t){this.$router.push({path:"/snvlist/"+this.data[t].Sample_name}),console.log(this.data[t].Sample_name)},chEditStat:function(){this.edit_stat?this.edit_stat=!1:this.edit_stat=!0},mySlect:function(){this.Submit(),this.$store.commit("addSelect",this.my_selection),console.log(this.list_s)},exportData:function(){this.$refs.table.exportCsv({filename:this.filename,data:this.my_selection,columns:this.columns})},strToDate:function(t){return new Date(Date.parse(t.replace(/\./g,"/")))},calDays:function(t,e){var a=t;a=new Date(Date.parse(a.replace(/\./g,"/")));var n=(new Date).getTime()-a.getTime();return e-parseInt(n/864e5)}},mounted:function(){this.getApiData(),this.$store.commit("addSelect","")}}),g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Button",{attrs:{type:"primary"},on:{click:t.getApiData}},[t._v("刷新")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.exportData}},[t._v("导出")]),t._v(" "),a("Table",{ref:"table",attrs:{stripe:"",columns:t.columns,loading:t.loading,height:"600",data:t.data,size:"small"},on:{"on-selection-change":t.delVal}})],1)},staticRenderFns:[]};var _=a("VU/8")(v,g,!1,function(t){a("9VWG")},"data-v-323c1153",null).exports,w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Steps",{staticStyle:{margin:"auto"},attrs:{current:0,size:"small"}},[a("Step",{attrs:{title:"提取"}}),t._v(" "),a("Step",{attrs:{title:"建库"}}),t._v(" "),a("Step",{attrs:{title:"测序"}}),t._v(" "),a("Step",{attrs:{title:"生信"}}),a("Step",{attrs:{title:"报告"}}),a("Step",{attrs:{title:"审核"}})],1),t._v(" "),a("Form",{attrs:{model:t.formItem,"label-width":80}},[a("FormItem",{staticStyle:{width:"200px"},attrs:{label:"提取"}},[a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm",placeholder:"Select date and time(Excluding seconds)"}})],1),t._v(" "),a("FormItem",{attrs:{label:"Checkbox"}},[a("CheckboxGroup",{model:{value:t.formItem.checkbox,callback:function(e){t.$set(t.formItem,"checkbox",e)},expression:"formItem.checkbox"}},[a("Checkbox",{attrs:{label:"Eat"}}),t._v(" "),a("Checkbox",{attrs:{label:"Sleep"}}),t._v(" "),a("Checkbox",{attrs:{label:"Run"}}),t._v(" "),a("Checkbox",{attrs:{label:"Movie"}})],1)],1)],1),t._v(" "),a("p",[t._v(t._s(t.count))]),t._v(" "),a("Button",{on:{click:t.add}},[t._v("+1")])],1)},staticRenderFns:[]},b=a("VU/8")({name:"FormUpdata",data:function(){return{formItem:{input:"",select:"",radio:"male",checkbox:[],switch:!0,date:"",time:"",slider:[20,50],textarea:""}}},methods:{add:function(){this.$store.commit("add")}},computed:{count:function(){return this.$store.state.count}}},w,!1,null,null,null).exports,I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("Upload",{attrs:{multiple:"",type:"drag",action:"http://192.168.1.109/flow/api/updata/"}},[e("div",{staticStyle:{padding:"20px 0"}},[e("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),this._v(" "),e("p",[this._v("点击或拖拽到此处上传")])],1)])},staticRenderFns:[]},k=a("VU/8")({name:"UploadFile",data:function(){return{hostIP:"http://"+this.$store.state.hostIp+"/flow/api/updata/"}}},I,!1,null,null,null).exports,x=a("mvHQ"),D=a.n(x),S={name:"EditSam",data:function(){var t=this;return{current_this:0,hahw:"right",columns1:[{title:"实际提取完成时间",key:"实际提取完成时间",width:150,render:function(e,a){var n=t;return t.edit_status[t.current_this].distill?e("div",[e("DatePicker",{props:{placeholder:a.row.实际提取完成时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd",required:!0},on:{"on-change":function(t){n.list_s[a.index].实际提取完成时间=t}}})]):e("div",a.row.实际提取完成时间)}},{title:"实际建库开始时间",key:"实际建库开始时间",width:150,render:function(e,a){var n=t;return t.edit_status[t.current_this].build?e("div",[e("DatePicker",{props:{placeholder:a.row.实际建库开始时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){n.list_s[a.index].实际建库开始时间=t}}})]):e("div",a.row.实际建库开始时间)}},{title:"实际建库完成时间",key:"实际建库完成时间",width:150,render:function(e,a){var n=t;return a.row.实际建库完成时间?e("div",[e("div",{style:{display:"inline"}},a.row.实际建库完成时间),e("Button",{props:{shape:"circle",icon:"ios-create-outline"},style:{display:"inline"},on:{click:function(){a.row.实际建库完成时间=""}}})]):e("div",[e("DatePicker",{props:{placeholder:n.list_s[a.index].实际建库完成时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){n.list_s[a.index].实际建库完成时间=t,n.list_s[a.index].状态="建库完成"}}})])}},{title:"实际测序完成时间",key:"实际测序完成时间",width:150,render:function(e,a){var n=t;return t.edit_status[t.current_this].seq?e("div",[e("DatePicker",{props:{placeholder:a.row.实际测序完成时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){n.list_s[a.index].实际测序完成时间=t}}})]):e("div",a.row.实际测序完成时间)}},{title:"实际生信完成时间",key:"实际生信完成时间",width:150,render:function(e,a){var n=t;return t.edit_status[t.current_this].analysis?e("div",[e("DatePicker",{props:{placeholder:a.row.实际生信完成时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){n.list_s[a.index].实际生信完成时间=t}}})]):e("div",a.row.实际生信完成时间)}},{title:"实际报告完成时间",key:"实际报告完成时间",width:150,render:function(e,a){var n=t;return t.edit_status[t.current_this].report?e("div",[e("DatePicker",{props:{placeholder:a.row.实际报告完成时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){n.list_s[a.index].实际报告完成时间=t}}})]):e("div",a.row.实际报告完成时间)}},{title:"实际审核完成时间",key:"实际审核完成时间",width:150,render:function(e,a){var n=t;return t.edit_status[t.current_this].check?e("div",[e("DatePicker",{props:{placeholder:a.row.实际审核完成时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){n.list_s[a.index].实际审核完成时间=t}}})]):e("div",a.row.实际审核完成时间)}},{title:"最终优先度",key:"最终优先度",width:150,render:function(e,a){var n=t;return t.edit_status[t.current_this].final?e("div",[e("Select",{props:{value:a.row.最终优先度},on:{"on-change":function(t){n.list_s[a.index].最终优先度=t}}},[{name:"S",value:"S"},{name:"A",value:"A"},{name:"B",value:"B"},{name:"C",value:"C"},{name:"D",value:"D"}].map(function(t){return e("Option",{props:{value:t.value}},t.name)}))]):e("div",a.row.最终优先度)}},{title:"备注",key:"备注",width:150,render:function(e,a){var n=t;return t.edit_status[t.current_this].note?e("div",[e("Input",{props:{placeholder:a.row.备注},on:{"on-blur":function(t){n.list_s[a.index].备注=event.target.value}}})]):e("div",a.row.备注)}},{title:"患者姓名",key:"患者姓名",width:120,sortable:!0},{title:"检测项目",key:"检测项目",width:120,sortable:!0},{title:"肿瘤",key:"肿瘤",width:150,sortable:!0},{title:"申请单号",key:"申请单号",width:150,sortable:!0},{title:"迈景编号",key:"迈景编号",width:120,fixed:"left",sortable:!0},{title:"类型",key:"类型",width:80,sortable:!0},{title:"收样时间",key:"收样时间",width:150,sortable:!0},{title:"是否时间点前",key:"是否时间点前",width:150,sortable:!0},{title:"周几",key:"周几",width:80,sortable:!0},{title:"预计优先度",key:"预计优先度",width:150,sortable:!0},{title:"预计完成时间",key:"预计完成时间",width:150,sortable:!0},{title:"预计提取完成时间",key:"预计提取完成时间",width:150,sortable:!0},{title:"预计建库完成时间",key:"预计建库完成时间",width:150,sortable:!0},{title:"预计测序完成时间",key:"预计测序完成时间",width:150,sortable:!0},{title:"预计生信完成时间",key:"预计生信完成时间",width:150,sortable:!0},{title:"预计报告完成时间",key:"预计报告完成时间",width:150,sortable:!0},{title:"预计审核完成时间",key:"预计审核完成时间",width:150,sortable:!0}],data1:[],loading:!1}},computed:{list_s:function(){return this.data1},key:function(){return this.$route.fullPath},edit_status:function(){return{0:{distill:!0},1:{build:!0},2:{seq:!0},3:{analysis:!0},4:{report:!0},5:{check:!0},6:{final:!0},7:{note:!0}}}},methods:{getApiData:function(){var t=this;this.loading=!0;var e="http://"+this.$store.state.hostIp+"/flow/api/flowing/";this.axios.get(e).then(function(e){t.data1=e.data.data,t.filter_mg=e.data.filter_mg,t.loading=!1,console.log("成功"),console.log(e.data.data)}).catch(function(t){console.log(t)})},Submit:function(){var t="http://"+this.$store.state.hostIp+"/flow/api/review/";this.axios.post(t,{data:JSON.parse(localStorage.getItem("select_list"))}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},Submit1:function(){var t="http://"+this.$store.state.hostIp+"/flow/api/submit1/";this.axios.post(t,{data:JSON.parse(localStorage.getItem("select_list"))}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},show:function(t){this.$router.push({path:"/snvlist/"+this.data[t].Sample_name}),console.log(this.data[t].Sample_name)},currentAdd:function(){this.current_this<7?this.current_this++:this.current_this=0},setVal:function(){localStorage.setItem("select_list",D()(this.list_s)),this.Submit1(),this.currentAdd(),console.log(this.edit_status[this.current_this].build)},saveData:function(){localStorage.setItem("select_list",D()(this.list_s)),this.Submit1()},setDate:function(){localStorage.setItem("select_list",D()(this.list_s)),this.Submit(),localStorage.removeItem("select_list"),this.$store.state.list_select=[],this.$router.push({path:"/samlist/"})},exportData:function(){this.$refs.table.exportCsv({filename:"575流转"})},toUrl:function(t){console.log(t),this.$router.push({name:"StepSam",params:{step:t}})}},mounted:function(){this.getApiData(),console.log(this.path)}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Menu",{attrs:{mode:"horizontal","active-name":"1"},on:{"on-select":t.toUrl}},[a("MenuItem",{attrs:{name:"1",to:"/editsam/viewsam"}},[t._v("\n          预览\n      ")]),t._v(" "),a("MenuItem",{attrs:{name:"distill"}},[t._v("\n          提取\n      ")]),t._v(" "),a("MenuItem",{attrs:{name:"build"}},[t._v("\n          建库\n      ")]),t._v(" "),a("MenuItem",{attrs:{name:"run"}},[t._v("\n          上机\n      ")]),t._v(" "),a("MenuItem",{attrs:{name:"seq"}},[t._v("\n          测序\n      ")]),t._v(" "),a("MenuItem",{attrs:{name:"analysis"}},[t._v("\n          生信\n      ")]),t._v(" "),a("MenuItem",{attrs:{name:"report"}},[t._v("\n          报告\n      ")]),t._v(" "),a("MenuItem",{attrs:{name:"check"}},[t._v("\n          审核\n      ")]),t._v(" "),a("MenuItem",{attrs:{name:"note"}},[t._v("\n          备注\n      ")])],1),t._v(" "),a("br"),t._v(" "),a("Content",{style:{margin:"0 20px 0",background:"#fff",minHeight:"500px"}},[a("router-view",{key:t.key})],1)],1)},staticRenderFns:[]};var M=a("VU/8")(S,$,!1,function(t){a("3voI")},"data-v-6be277fc",null).exports,F={data:function(){return{data2:[],targetKeys3:[],listStyle:{width:"600px",height:"400px"}}},computed:{data3:function(){return this.getData()}},methods:{getApiData:function(){var t=this;this.loading=!0;var e="http://"+this.$store.state.hostIp+"/flow/api/flowing/";this.axios.get(e).then(function(e){t.data2=e.data.data,t.filter_mg=e.data.filter_mg,t.loading=!1,console.log("成功"),console.log(e.data.data_b)}).catch(function(t){console.log(t)})},getData:function(){for(var t=[],e=0;e<this.data2.length;e++)t.push({key:e+1,label:this.data2[e]["迈景编号"]});return console.log(t),t},showData:function(){console.log(this.data3)},handleChange3:function(t){console.log(t),this.targetKeys3=t},render3:function(t){return t.label},calDays:function(t,e){var a=t;a=new Date(Date.parse(a.replace(/\./g,"/")));var n=(new Date).getTime()-a.getTime();return e-parseInt(n/864e5)},calDays1:function(t,e){var a=t;a=new Date(Date.parse(a.replace(/\./g,"/")));var n=e,o=(n=new Date(Date.parse(n.replace(/\./g,"/")))).getTime()-a.getTime();return parseInt(o/864e5)},dates:function(t){return parseInt(-this.calDays(t.流转开始日期,0)/this.calDays1(t.流转开始日期,t.预计完成时间)*100)}},mounted:function(){this.getApiData()}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Row",t._l(t.data2,function(e){return a("Col",{key:e.id,attrs:{span:"6"}},[a("div",{staticStyle:{background:"#eee",padding:"20px"}},[a("Card",{attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.申请单号)+"－－－"+t._s(e.迈景编号))]),t._v(" "),a("p",[a("b",[t._v("流转开始日期")]),t._v(": "+t._s(e.流转开始日期))]),t._v(" "),a("p",[a("b",[t._v("预计报告完成日期")]),t._v(": "+t._s(e.预计完成时间))]),t._v(" "),a("p",[a("b",[t._v("当前状态:")]),t._v(" "+t._s(e.状态))]),t._v(" "),a("Progress",{attrs:{percent:t.dates(e),status:"active"}})],1)],1)])}),1)],1)},staticRenderFns:[]},T=a("VU/8")(F,C,!1,null,null,null).exports,V={data:function(){var t=this;return{listStyle:{width:"600px",height:"400px"},my_selection:[],list_title:{distill:[10,20],build:[11,20],run:[12,13],seq:[14,20],analysis:[15,16],report:[17,18],check:[19,20],note:[21,20]},columns4:[{type:"selection",width:60,align:"center",fixed:"left"},{title:"状态",key:"状态",width:120,sortable:!0},{title:"患者姓名",key:"患者姓名",width:120,sortable:!0},{title:"检测项目",key:"检测项目",width:120,sortable:!0},{title:"肿瘤",key:"病理诊断",width:120,sortable:!0},{title:"申请单号",key:"申请单号",width:150,sortable:!0,fixed:"left"},{title:"迈景编号",key:"迈景编号",width:120,sortable:!0,fixed:"left"},{title:"样本类型",key:"样本类型",width:120,sortable:!0},{title:"收样日期",key:"收样日期",width:120,sortable:!0},{title:"流转开始日期",key:"流转开始日期",width:150,sortable:!0},{title:"提取完成日期",key:"提取完成日期",width:150,sortable:!0,render:function(e,a){var n=t;return e("div",[e("DatePicker",{props:{placeholder:n.data5[a.index].提取完成日期,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){n.data5[a.index].提取完成日期=t,n.data5[a.index].状态="提取完成"}}})])}},{title:"建库完成日期",key:"建库完成日期",width:150,sortable:!0,render:function(e,a){var n=t;return e("div",[e("DatePicker",{props:{placeholder:n.data5[a.index].建库完成日期,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){n.data5[a.index].建库完成日期=t,n.data5[a.index].状态="建库完成"}}})])}},{title:"实际上机日期",key:"实际上机日期",width:150,sortable:!0,render:function(e,a){var n=t;return e("div",[e("DatePicker",{props:{placeholder:n.data5[a.index].实际上机日期,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){n.data5[a.index].实际上机日期=t,n.data5[a.index].状态="上机完成"}}})])}},{title:"上机倒计时",key:"上机倒计时",width:150,sortable:!0,render:function(e,a){return e("div",t.calDays(a.row.流转开始日期,4)+"天")}},{title:"测序完成日期",key:"测序完成日期",width:150,sortable:!0,render:function(e,a){var n=t;return e("div",[e("DatePicker",{props:{placeholder:n.data5[a.index].测序完成日期,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){n.data5[a.index].测序完成日期=t,n.data5[a.index].状态="测序完成"}}})])}},{title:"生信完成日期",key:"生信完成日期",width:150,sortable:!0,render:function(e,a){var n=t;return e("div",[e("DatePicker",{props:{placeholder:n.data5[a.index].生信完成日期,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){n.data5[a.index].生信完成日期=t,n.data5[a.index].状态="生信完成"}}})])}},{title:"生信倒计时",key:"生信倒计时",width:150,sortable:!0,render:function(e,a){var n=0;return n="b"===a.row.type?11:9,e("div",t.calDays(a.row.流转开始日期,n)+"天")}},{title:"报告完成时间",key:"报告完成时间",width:150,sortable:!0,render:function(e,a){var n=t;return e("div",[e("DatePicker",{props:{placeholder:n.data5[a.index].报告完成时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){n.data5[a.index].报告完成时间=t,n.data5[a.index].状态="报告完成"}}})])}},{title:"报告倒计时",key:"报告倒计时",width:150,sortable:!0,render:function(e,a){var n=0;return n="b"===a.row.type?13:10,e("div",t.calDays(a.row.流转开始日期,n)+"天")}},{title:"审核完成时间",key:"审核完成时间",width:150,sortable:!0,render:function(e,a){var n=t;return e("div",[e("DatePicker",{props:{placeholder:n.data5[a.index].审核完成时间,type:"date",style:"width: 150px",format:"yyyy.MM.dd"},on:{"on-change":function(t){n.data5[a.index].审核完成时间=t,n.data5[a.index].状态="审核完成"}}})])}},{title:"审核倒计时/天",key:"审核倒计时",width:150,sortable:!0,sortType:"asc",render:function(e,a){var n=0;return n="b"===a.row.type?14:11,e("div",t.calDays(a.row.流转开始日期,n))}},{title:"备注",key:"备注",width:120,sortable:!0,render:function(e,a){var n=t;return e("div",[e("Input",{props:{placeholder:n.data5[a.index].备注,type:"text",style:"width: 150px"},on:{"on-change":function(t){n.data5[a.index].审核完成时间=t}}})])}},{title:"预计完成时间",key:"预计完成时间",width:150,fixed:"right",sortable:!0,sortType:"desc"}],columns5:[],data_distill:[],data_all:[],loading:!1}},computed:{data5:function(){return this.data_all.distill}},watch:{$route:"myColumns"},methods:{getApiData:function(){var t=this;this.loading=!0;var e="http://"+this.$store.state.hostIp+"/flow/api/flowing/";this.axios.get(e).then(function(e){t.data_distill=e.data.distill,t.filter_mg=e.data.filter_mg,t.data_all=e.data,t.loading=!1,console.log("成功"),console.log(e.data.data_b)}).catch(function(t){console.log(t)})},Submit1:function(){var t="http://"+this.$store.state.hostIp+"/flow/api/submit1/";this.axios.post(t,{data:JSON.parse(localStorage.getItem("select_list"))}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},delVal:function(){var t=this.$route.params.step;console.log(t),localStorage.setItem("select_list",D()(this.my_selection)),this.Submit1()},myColumns:function(){var t=this.$route.params.step,e=this.columns4;this.columns5=[],e[this.list_title[t][0]].fixed="right",e[this.list_title[t][1]].fixed="right",this.columns5=e,console.log(this.list_title[t][0])},calDays:function(t,e){var a=t;a=new Date(Date.parse(a.replace(/\./g,"/")));var n=(new Date).getTime()-a.getTime();return e-parseInt(n/864e5)},selSam:function(t){this.my_selection=t},handleRender:function(t){var e=this;this.$Modal.confirm({title:"终止"+t+"的流转",onOk:function(){e.$Message.info("点击了确定")},onCancel:function(){},render:function(a){return a("Input",{props:{value:t.终止原因,type:"textarea",clearable:!0,autofocus:!0,placeholder:"请填写终止原因"},on:{input:function(t){e.value=t}}})}})}},mounted:function(){this.getApiData(),this.myColumns(),console.log(this.$route.params.step);var t=this.$route.params.step;console.log(this.list_title[t])}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Table",{ref:"table",attrs:{stripe:"",columns:this.columns5,loading:this.loading,height:"550",data:this.data5,size:"small"},on:{"on-selection-change":this.selSam}}),this._v(" "),e("Button",{attrs:{type:"primary"},on:{click:this.delVal}},[this._v("保存")])],1)},staticRenderFns:[]},P=a("VU/8")(V,A,!1,null,null,null).exports,U={name:"SamList",data:function(){var t=this;return{hostIP:"http://"+this.$store.state.hostIp,filter_mg:[],edit_stat:!1,input_value:[],columns:[{type:"selection",width:60,align:"center",fixed:"left"},{title:"状态",key:"状态",width:120,sortable:!0},{title:"患者姓名",key:"患者姓名",width:120,sortable:!0},{title:"检测项目",key:"检测项目",width:120,sortable:!0},{title:"肿瘤",key:"病理诊断",width:120,sortable:!0},{title:"申请单号",key:"申请单号",width:150,sortable:!0,fixed:"left"},{title:"迈景编号",key:"迈景编号",width:120,sortable:!0,fixed:"left",render:function(e,a){return e("div",[e("div",{on:{click:function(){t.$router.push({name:"EditAdmin",params:{mgcode:a.row.迈景编号}}),t.$Message.info("点击了"+a.row.迈景编号)}}},a.row.迈景编号)])}},{title:"样本类型",key:"样本类型",width:120,sortable:!0},{title:"收样日期",key:"收样日期",width:120,sortable:!0},{title:"流转开始日期",key:"流转开始日期",width:150,sortable:!0},{title:"提取完成日期",key:"提取完成日期",width:150,sortable:!0},{title:"建库完成日期",key:"建库完成日期",width:150,sortable:!0},{title:"实际上机日期",key:"实际上机日期",width:150,sortable:!0},{title:"上机倒计时",key:"上机倒计时",width:150,sortable:!0,render:function(e,a){return e("div",t.calDays(a.row.流转开始日期,4)+"天")}},{title:"测序完成日期",key:"测序完成日期",width:150,sortable:!0},{title:"生信完成日期",key:"生信完成日期",width:150,sortable:!0},{title:"生信倒计时",key:"生信倒计时",width:150,sortable:!0,render:function(e,a){var n=0;return n="b"===a.row.type?11:9,e("div",t.calDays(a.row.流转开始日期,n)+"天")}},{title:"报告完成时间",key:"报告完成时间",width:150,sortable:!0},{title:"报告倒计时",key:"报告倒计时",width:150,sortable:!0,render:function(e,a){var n=0;return n="b"===a.row.type?13:10,e("div",t.calDays(a.row.流转开始日期,n)+"天")}},{title:"审核完成时间",key:"审核完成时间",width:150,sortable:!0},{title:"审核倒计时",key:"审核倒计时",width:150,sortable:!0,render:function(e,a){var n=0;return n="b"===a.row.type?14:11,e("div",t.calDays(a.row.流转开始日期,n)+"天")}},{title:"备注",key:"备注",width:120,sortable:!0},{title:"预计完成时间",key:"预计完成时间",width:150,fixed:"right",sortable:!0,sortType:"desc"}],data:[],my_selection:"",loading:!1}},computed:{list_s:function(){return this.data}},methods:{getApiData:function(){var t=this;this.loading=!0;var e="http://"+this.$store.state.hostIp+"/flow/api/list/";c.a.get(e).then(function(e){t.data=e.data.data,t.filter_mg=e.data.filter_mg,t.loading=!1,console.log("成功"),console.log(e.data.filter_mg)}).catch(function(t){console.log(t)})},getSelecVal:function(t){console.log(t),this.my_selection.push(t)},getAllVal:function(t){console.log(t),this.my_selection.push(t)},delVal:function(t){this.my_selection=t},Submit:function(){var t="http://"+this.$store.state.hostIp+"/flow/api/list/flow/";this.axios.post(t,{selection:this.my_selection}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},delSelect:function(){var t="http://"+this.$store.state.hostIp+"/flow/api/list/del/";this.axios.post(t,{selection:this.my_selection}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},show:function(t){this.$router.push({path:"/snvlist/"+this.data[t].Sample_name}),console.log(this.data[t].Sample_name)},mySlect:function(){var t=this;this.$Modal.confirm({title:"确定删除所选样本",onOk:function(){t.$Message.info("成功删除,点击刷新"),t.delSelect()},onCancel:function(){t.$Message.info("取消删除")}})},runSlect:function(){var t=this;this.$Modal.confirm({title:"确定开始流转所选样本",onOk:function(){t.$Message.info("开始流转,点击流转中查看"),t.Submit()},onCancel:function(){t.$Message.info("取消流转")}})},exportData:function(){this.$refs.table.exportCsv({filename:"575流转"})},strToDate:function(t){return new Date(Date.parse(t.replace(/\./g,"/")))},calDays:function(t,e){var a=t;a=new Date(Date.parse(a.replace(/\./g,"/")));var n=(new Date).getTime()-a.getTime();return e-parseInt(n/864e5)}},mounted:function(){this.getApiData(),this.$store.commit("addSelect","")}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Button",{attrs:{type:"primary"},on:{click:t.runSlect}},[t._v("开始流转")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.mySlect}},[t._v("删除")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.getApiData}},[t._v("刷新")]),t._v(" "),a("Button",{attrs:{type:"primary",to:"/add"}},[t._v("新增")]),t._v(" "),a("Table",{ref:"table",attrs:{stripe:"",columns:t.columns,loading:t.loading,height:"600",data:t.list_s,size:"small"},on:{"on-selection-change":t.delVal}})],1)},staticRenderFns:[]};var E=a("VU/8")(U,R,!1,function(t){a("TrKj")},"data-v-00b25a08",null).exports,B={data:function(){return{data:[]}},computed:{formItem:function(){return this.data[0]},myDate:function(){return{"收样日期":this.data[0].收样日期,"流转开始日期":this.data[0].流转开始日期}}},methods:{getData:function(){var t=this,e="http://"+this.$store.state.hostIp+"/flow/api/list/"+this.$route.params.mgcode;c.a.get(e).then(function(e){t.data=e.data.data,t.filter_mg=e.data.filter_mg,t.loading=!1,console.log("成功"),console.log(e.data.data[0].患者姓名)}).catch(function(t){console.log(t)})},Submit1:function(){var t="http://"+this.$store.state.hostIp+"/flow/api/submit1/";this.formItem.收样日期=this.dateToString(this.myDate.收样日期),this.formItem.流转开始日期=this.dateToString(this.myDate.流转开始日期),this.axios.post(t,{data:this.formItem}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},submit:function(){this.Submit1(),this.$Message.info("提交成功")},dateToString:function(t){if(t instanceof Date){var e=t.getFullYear(),a=(t.getMonth()+1).toString(),n=t.getDate().toString();return 1===a.length&&(a="0"+a),1===n.length&&(n="0"+n),e+"."+a+"."+n}return t},back:function(){this.$router.go(-1)}},mounted:function(){this.getData()}},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"my-form"}},[a("Form",{attrs:{model:t.formItem,"label-width":100}},[a("FormItem",{attrs:{label:"患者姓名"}},[a("Input",{attrs:{placeholder:t.formItem.患者姓名},model:{value:t.formItem.患者姓名,callback:function(e){t.$set(t.formItem,"患者姓名",e)},expression:"formItem.患者姓名"}})],1),t._v(" "),a("FormItem",{attrs:{label:"检测项目"}},[a("Select",{attrs:{placeholder:t.formItem.检测项目},model:{value:t.formItem.检测项目,callback:function(e){t.$set(t.formItem,"检测项目",e)},expression:"formItem.检测项目"}},[a("Option",{attrs:{value:"575"}},[t._v("575")])],1)],1),t._v(" "),a("FormItem",{attrs:{label:"肿瘤"}},[a("Input",{attrs:{placeholder:t.formItem.病理诊断},model:{value:t.formItem.病理诊断,callback:function(e){t.$set(t.formItem,"病理诊断",e)},expression:"formItem.病理诊断"}})],1),t._v(" "),a("FormItem",{attrs:{label:"申请单号"}},[a("Input",{attrs:{placeholder:t.formItem.申请单号},model:{value:t.formItem.申请单号,callback:function(e){t.$set(t.formItem,"申请单号",e)},expression:"formItem.申请单号"}})],1),t._v(" "),a("FormItem",{attrs:{label:"迈景编号"}},[a("Input",{attrs:{placeholder:t.formItem.迈景编号},model:{value:t.formItem.迈景编号,callback:function(e){t.$set(t.formItem,"迈景编号",e)},expression:"formItem.迈景编号"}})],1),t._v(" "),a("FormItem",{attrs:{label:"样本类型"}},[a("Input",{attrs:{placeholder:t.formItem.样本类型},model:{value:t.formItem.样本类型,callback:function(e){t.$set(t.formItem,"样本类型",e)},expression:"formItem.样本类型"}})],1),t._v(" "),a("FormItem",{attrs:{label:"收样日期"}},[a("DatePicker",{attrs:{type:"date",format:"yyyy.MM.dd",placeholder:"收样日期"},model:{value:t.myDate.收样日期,callback:function(e){t.$set(t.myDate,"收样日期",e)},expression:"myDate.收样日期"}})],1),t._v(" "),a("FormItem",{attrs:{label:"流转开始日期"}},[a("DatePicker",{attrs:{type:"date",format:"yyyy.MM.dd",placeholder:"流转开始日期"},model:{value:t.myDate.流转开始日期,callback:function(e){t.$set(t.myDate,"流转开始日期",e)},expression:"myDate.流转开始日期"}})],1),t._v(" "),a("FormItem",{attrs:{label:"备注"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:t.formItem.备注},model:{value:t.formItem.备注,callback:function(e){t.$set(t.formItem,"备注",e)},expression:"formItem.备注"}})],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")]),t._v(" "),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:t.back}},[t._v("取消")])],1)],1)],1)},staticRenderFns:[]};var q=a("VU/8")(B,O,!1,function(t){a("jh31")},"data-v-c6b8db9c",null).exports,z={data:function(){return{data:[],myData:{"患者姓名":"","检测项目":"","病理诊断":"","申请单号":"","迈景编号":"","样本类型":"","收样日期":"","流转开始日期":"","备注":""}}},computed:{myDate:function(){return{"收样日期":"","流转开始日期":""}},formItem:function(){return this.myData}},methods:{getData:function(){var t=this,e="http://"+this.$store.state.hostIp+"/flow/api/list/"+this.$route.params.mgcode;c.a.get(e).then(function(e){t.data=e.data.data,t.filter_mg=e.data.filter_mg,t.loading=!1,console.log("成功"),console.log(e.data.data[0].患者姓名)}).catch(function(t){console.log(t)})},AddSam:function(){var t="http://"+this.$store.state.hostIp+"/flow/api/addsam/";this.formItem.收样日期=this.dateToString(this.myDate.收样日期),this.formItem.流转开始日期=this.dateToString(this.myDate.流转开始日期),this.axios.post(t,{data:this.formItem}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},submit:function(){this.AddSam(),console.log(this.myDate.收样日期)},dateToString:function(t){var e=t.getFullYear(),a=(t.getMonth()+1).toString(),n=t.getDate().toString();return 1===a.length&&(a="0"+a),1===n.length&&(n="0"+n),e+"."+a+"."+n}},mounted:function(){console.log("hah")}},H={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"my-form"}},[a("Form",{attrs:{model:t.formItem,"label-width":100}},[a("FormItem",{attrs:{label:"患者姓名"}},[a("Input",{attrs:{placeholder:t.formItem.患者姓名},model:{value:t.formItem.患者姓名,callback:function(e){t.$set(t.formItem,"患者姓名",e)},expression:"formItem.患者姓名"}})],1),t._v(" "),a("FormItem",{attrs:{label:"检测项目"}},[a("Select",{attrs:{placeholder:t.formItem.检测项目},model:{value:t.formItem.检测项目,callback:function(e){t.$set(t.formItem,"检测项目",e)},expression:"formItem.检测项目"}},[a("Option",{attrs:{value:"575"}},[t._v("575")])],1)],1),t._v(" "),a("FormItem",{attrs:{label:"肿瘤"}},[a("Input",{attrs:{placeholder:t.formItem.病理诊断},model:{value:t.formItem.病理诊断,callback:function(e){t.$set(t.formItem,"病理诊断",e)},expression:"formItem.病理诊断"}})],1),t._v(" "),a("FormItem",{attrs:{label:"申请单号"}},[a("Input",{attrs:{placeholder:t.formItem.申请单号},model:{value:t.formItem.申请单号,callback:function(e){t.$set(t.formItem,"申请单号",e)},expression:"formItem.申请单号"}})],1),t._v(" "),a("FormItem",{attrs:{label:"迈景编号"}},[a("Input",{attrs:{placeholder:t.formItem.迈景编号},model:{value:t.formItem.迈景编号,callback:function(e){t.$set(t.formItem,"迈景编号",e)},expression:"formItem.迈景编号"}})],1),t._v(" "),a("FormItem",{attrs:{label:"样本类型"}},[a("Input",{attrs:{placeholder:t.formItem.样本类型},model:{value:t.formItem.样本类型,callback:function(e){t.$set(t.formItem,"样本类型",e)},expression:"formItem.样本类型"}})],1),t._v(" "),a("FormItem",{attrs:{label:"收样日期"}},[a("DatePicker",{attrs:{type:"date",format:"yyyy.MM.dd",placeholder:"收样日期"},model:{value:t.myDate.收样日期,callback:function(e){t.$set(t.myDate,"收样日期",e)},expression:"myDate.收样日期"}})],1),t._v(" "),a("FormItem",{attrs:{label:"流转开始日期"}},[a("DatePicker",{attrs:{type:"date",format:"yyyy.MM.dd",placeholder:"流转开始日期"},model:{value:t.myDate.流转开始日期,callback:function(e){t.$set(t.myDate,"流转开始日期",e)},expression:"myDate.流转开始日期"}})],1),t._v(" "),a("FormItem",{attrs:{label:"备注"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:t.formItem.备注},model:{value:t.formItem.备注,callback:function(e){t.$set(t.formItem,"备注",e)},expression:"formItem.备注"}})],1),t._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")]),t._v(" "),a("Button",{staticStyle:{"margin-left":"8px"}},[t._v("取消")])],1)],1)],1)},staticRenderFns:[]};var L=a("VU/8")(z,H,!1,function(t){a("/Zw8")},"data-v-0cbdffa2",null).exports;n.default.use(y.a),n.default.use(s.a);var N=new s.a({routes:[{path:"/",name:"Home",component:m},{path:"/register",name:" Register",component:p},{path:"/samlist",name:"SamList",component:_},{path:"/formupdata",name:"FormUpdata",component:b},{path:"/uploadfile",name:"UploadFile",component:k},{path:"/editsam",name:"EditSam",component:M,children:[{path:"viewsam",name:"ViewSam",component:T},{path:"stepsam/:step",name:"StepSam",component:P}]},{path:"/login",name:"Login",component:p},{path:"/admin",name:"DataAdmin",component:E},{path:"/add",name:"AddAdmin",component:L},{path:"/edit/:mgcode",name:"EditAdmin",component:q}]}),W=a("Rf8U"),Y=a.n(W),j=a("NYxO");n.default.use(j.a);var Z=new j.a.Store({state:{count:100,hostIp:"192.168.1.109",list_select:[]},mutations:{add:function(t){t.count++},dec:function(t){t.count--},addSelect:function(t,e){t.list_select=e,localStorage.setItem("select_list",D()(e))}}}),G=a("UnSZ"),J=a.n(G);n.default.use(Y.a,c.a),n.default.use(J.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:N,store:Z,components:{App:r},template:"<App/>"})},TrKj:function(t,e){},"VLZ+":function(t,e,a){t.exports=a.p+"static/img/mg.eac93f6.png"},jh31:function(t,e){},kcaU:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a505da4a74bd0f552516.js.map