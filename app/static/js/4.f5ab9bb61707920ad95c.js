webpackJsonp([4],{"0Wsq":function(t,a){},lO7g:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("mtWM"),o=e.n(n),s={name:"Home",data:function(){return{data:[],search_data:[]}},methods:{getData:function(){var t=this;o.a.get("http://127.0.0.1:8001/flow/api/list/").then(function(a){t.data=a.data.data,console.log("成功"),console.log(a.data)}).catch(function(t){console.log(t)})}},mounted:function(){this.getData()}},c={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"input-mg"},[a("Input",{attrs:{search:"",autofocus:"",size:"large",placeholder:"输入样本编号"},on:{"on-enter":this.getData}})],1)},staticRenderFns:[]};var i=e("VU/8")(s,c,!1,function(t){e("0Wsq")},"data-v-357a021d",null);a.default=i.exports}});
//# sourceMappingURL=4.f5ab9bb61707920ad95c.js.map