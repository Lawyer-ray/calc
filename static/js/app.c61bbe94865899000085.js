webpackJsonp([1],{"+eho":function(e,t){},"0UCl":function(e,t){},"9M+g":function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("b-row",{staticClass:"justify-content-md-center"},[t("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"","img-width":"444"}},[t("b-carousel-slide",{attrs:{"img-src":"../static/calcover.jpg"}})],1)],1)],1)},staticRenderFns:[]};var n={name:"forminfo",data:function(){return{dismissSecs:60,dismissCountDown:0,showDismissibleAlert:!1,area:"",tudibuchangfee:null,anzhibuzhufee:null,finalfee:"",selected:null,message:"",value2:[],province:null,city:null,district:null,street:null,options2:[{value:null,text:"请选择"},{value:"a",text:"耕地"},{value:"b",text:"园地"},{value:"c",text:"林地"},{value:"d",text:"牧草地"},{value:"e",text:"养捕水面"},{value:"f",text:"农田水利设施用地"}],areaOptions:[{value:"广东省",label:"广东省",children:[{value:"广州市",label:"广州市",children:[{value:"越秀区",label:"越秀区",children:[{value:"白云街道",label:"白云街道"},{value:"黄花岗街道",label:"黄花岗街道"},{value:"北京街道",label:"北京街道"},{value:"大东街道",label:"大东街道"},{value:"大塘街道",label:"大塘街道"},{value:"登峰街道",label:"登峰街道"},{value:"东山街道",label:"东山街道"},{value:"光塔街道",label:"光塔街道"},{value:"洪桥街道",label:"洪桥街道"},{value:"华乐街道",label:"华乐街道"}]},{value:"海珠区",label:"海珠区",children:[{value:"赤岗街道",label:"赤岗街道"},{value:"新港街道",label:"新港街道"},{value:"滨江街道",label:"滨江街道"},{value:"凤阳街道",label:"凤阳街道"},{value:"龙凤街道",label:"龙凤街道"},{value:"沙园街道",label:"沙园街道"},{value:"江海街道",label:"江海街道"}]}]}]}]}},methods:{changeProvince:function(){this.city=null,this.district=null,this.street=null},changeCity:function(){this.district=null,this.street=null},changeDistrict:function(){this.street=null},countDownChanged:function(e){this.showDismissibleAlert=!1,"越秀区"==this.value2[0]?(this.tudibuchangfee=parseFloat((25.5*this.area).toFixed(2)),this.anzhibuzhufee=parseFloat((25.5*this.area).toFixed(2)),this.finalfee=this.tudibuchangfee+this.anzhibuzhufee,this.dismissCountDown=e):(this.tudibuchangfee=parseFloat((25.09*this.area).toFixed(2)),this.anzhibuzhufee=parseFloat((25.09*this.area).toFixed(2)),this.finalfee=this.tudibuchangfee+this.anzhibuzhufee,this.dismissCountDown=e)},showAlert:function(){this.area&&this.selected?(this.dismissCountDown=this.dismissSecs,console.log()):""==this.value?(this.message="请选择征地范围！",this.showDismissibleAlert=!0):""==this.selected?(this.message="请选择土地类型！",this.showDismissibleAlert=!0):""==this.area?(this.message="要记得填面积！",this.showDismissibleAlert=!0):(this.message="啥都没填，算不出来？",this.showDismissibleAlert=!0)},handleChange:function(e){console.log(e)},onReset:function(e){e.preventDefault(),this.value2="",this.area="",this.selected=null}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-row",{staticClass:"mt-3 mb-3"},[s("b-col",{attrs:{xl:"8","offset-xl":"2"}},[s("b-alert",{attrs:{show:e.dismissCountDown,dismissible:"",variant:"success"},on:{dismissed:function(t){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[s("p",[e._v("土地补偿费："+e._s(e.tudibuchangfee)+"万元")]),e._v(" "),s("p",[e._v("安置补助费："+e._s(e.anzhibuzhufee)+"万元")]),e._v(" "),s("p",[e._v("\n        合计："),s("strong",[e._v(e._s(e.finalfee)+"万元")])]),e._v(" "),s("p",[e._v("\n        计算依据："),s("a",{attrs:{href:"../../static/fee.jpeg",target:"_blank"}},[e._v("《广州市征收农用地区区片综合地价表》(点击查看)")])]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("钱拿少了？")]),e._v(" "),s("p",[e._v("马上联系 ☎ 福律阁土地诉讼团队：")]),e._v(" "),s("a",{attrs:{href:"tel:18802035347"}},[e._v("188 0203 5347")]),e._v(" "),s("b-progress",{attrs:{variant:"warning",max:e.dismissSecs,value:e.dismissCountDown,height:"6px"}})],1),e._v(" "),s("b-alert",{attrs:{variant:"danger",dismissible:""},model:{value:e.showDismissibleAlert,callback:function(t){e.showDismissibleAlert=t},expression:"showDismissibleAlert"}},[e._v("\n      "+e._s(e.message)+"\n    ")]),e._v(" "),s("b-form-group",{attrs:{id:"input-group-1",label:"请选择征地范围："}},[s("el-select",{attrs:{placeholder:"--选择省份--"},on:{change:e.changeProvince},model:{value:e.province,callback:function(t){e.province=t},expression:"province"}},e._l(e.areaOptions,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e}})}),1),e._v(" "),e.province&&e.province.children?s("el-select",{attrs:{placeholder:"--选择城市--"},on:{change:e.changeCity},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}},e._l(e.province.children,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e}})}),1):e._e(),e._v(" "),e.city&&e.city.children?s("el-select",{attrs:{placeholder:"--选择区县--"},on:{change:e.changeDistrict},model:{value:e.district,callback:function(t){e.district=t},expression:"district"}},e._l(e.city.children,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e}})}),1):e._e(),e._v(" "),e.district&&e.district.children?s("el-select",{attrs:{placeholder:"--选择街道--"},model:{value:e.street,callback:function(t){e.street=t},expression:"street"}},e._l(e.district.children,function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e}})}),1):e._e()],1),e._v(" "),s("b-form-group",{attrs:{id:"input-group-3",label:"请选择土地类型：","label-for":"input-2"}},[s("b-form-select",{attrs:{options:e.options2,required:""},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),s("b-form-group",{attrs:{id:"input-group-2",label:"请输入征收面积（亩）：","label-for":"input-2",description:"1亩≈666.7㎡"}},[s("b-form-input",{attrs:{id:"input-2",placeholder:"精确到小数点后两位",required:"",type:"number"},model:{value:e.area,callback:function(t){e.area=t},expression:"area"}})],1),e._v(" "),s("b-form",{on:{reset:e.onReset}},[s("b-button",{attrs:{variant:"success",block:""},on:{click:e.showAlert}},[e._v("立即计算征地补偿标准")]),e._v(" "),s("b-button",{attrs:{variant:"outline-secondary",block:"",type:"reset"}},[e._v("重新填写")])],1)],1)],1)},staticRenderFns:[]};var a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("b-alert",{attrs:{show:e.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(t){e.dismissCountDown=0},"dismiss-count-down":e.countDownChanged}},[s("p",[e._v("This alert will dismiss after "+e._s(e.dismissCountDown)+" seconds...")]),e._v(" "),s("b-progress",{attrs:{variant:"warning",max:e.dismissSecs,value:e.dismissCountDown,height:"4px"}})],1),e._v(" "),s("b-button",{staticClass:"m-1",attrs:{variant:"info"},on:{click:e.showAlert}},[e._v("\n    Show alert with count-down timer\n  ")])],1)},staticRenderFns:[]};var r={name:"App",components:{Banner:s("VU/8")({name:"Banner"},i,!1,function(e){s("tY2l")},"data-v-439d7c20",null).exports,forminfo:s("VU/8")(n,l,!1,function(e){s("0UCl")},"data-v-dfdba6a4",null).exports,Alert:s("VU/8")({name:"Alert",data:function(){return{dismissSecs:10,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged:function(e){this.dismissCountDown=e},showAlert:function(){this.dismissCountDown=this.dismissSecs}}},a,!1,function(e){s("+eho")},"data-v-6512e911",null).exports}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{},[t("Banner")],1),this._v(" "),t("b-container",[t("forminfo")],1)],1)},staticRenderFns:[]};var u=s("VU/8")(r,o,!1,function(e){s("jSC7")},null,null).exports,c=s("7+uW"),d=s("Tqaz"),h=(s("Jmt5"),s("9M+g"),s("zL8q")),v=s.n(h);s("tvR6");c.default.config.productionTip=!1,c.default.use(d.a),c.default.use(d.b),c.default.use(v.a),new c.default({el:"#app",components:{App:u},template:"<App/>"})},jSC7:function(e,t){},tY2l:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.c61bbe94865899000085.js.map