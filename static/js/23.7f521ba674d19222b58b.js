webpackJsonp([23],{BbF8:function(t,o){},opK3:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=e("3cXf"),r=e.n(a),n=e("rVsN"),d=e.n(n),i={components:{AddGoods:e("ozpw").a},data:function(){var t=this;return{warehouseArr:[],typeArr:[],departmentArr:[],provideModal:!1,provideForm:{date:(new Date).toLocaleDateString(),warehouse:"",type:"",department:"",leader:""},applyDepartArr:[],goodsCols:[{type:"index",title:"序号",align:"center",width:65,key:"sortNum"},{title:"物品名称",align:"center",key:"name"},{title:"物品编码",align:"center",key:"code"},{title:"物品分类",align:"center",key:"classify"},{title:"品牌",align:"center",key:"brand"},{title:"规格/型号",align:"center",key:"model"},{title:"单位",align:"center",key:"unit"},{title:"当前库存",align:"center",key:"currentInventory",render:function(o,e){return o("div",[o("span",{class:"zd-common-primary-c zd-common-cp",on:{click:function(o){o.stopPropagation(),t.showInventoryModal(e.index)}}},e.row.currentInventory)])}},{title:"出库数量",align:"center",slot:"number",key:"number",renderHeader:function(t,o){return t("div",[t("span",{class:"zd-cm-required"},"出库数量")])}},{title:"金额",align:"center",slot:"amount",key:"amount"}],formGoodsData:{attrData:[]},provideRemarkForm:{remark:""},ruleValidate:{date:[{required:!0,type:"date",message:"不能为空",trigger:"change"}],warehouse:[{required:!0,message:"不能为空",trigger:"change"}],type:[{required:!0,message:"不能为空",trigger:"change"}]},saveLoading:!1,leaderArr:[],loading:!1,date:"",addGoodsIndex:null,addGoodsId:null,addGoodsModal:!1,delId:"",delIndex:"",code:"",editId:"",editOrderNO:"",goodsName:"",outNumber:null,inventoryModal:!1,inventoryCols:[{type:"index",title:"序号",align:"center",width:65,key:"sortNum"},{title:"入库日期",align:"center",key:"date",width:110},{title:"入库单号",align:"center",key:"orderNO",width:140},{title:"入库价格",align:"center",key:"price",width:100},{title:"剩余数量",align:"center",key:"surplusNum",width:100},{title:"本次出库数量",align:"center",slot:"outNum",key:"outNum"},{title:"金额",align:"center",slot:"amount",key:"amount"}],inventoryData:{attrData:[]},tmpInventory:[],subInvArr:[]}},computed:{userName:function(){return this.$store.state.userName}},created:function(){var t=this;this.getOutKindList().then(function(o){var e=o.data;t.typeArr=e,e.length>0&&(t.provideForm.type=e[0].code)}),this.getDepartment().then(function(o){t.departmentArr=o.data}),this.getChargedStoreRoom().then(function(o){var e=o.data;t.warehouseArr=e,e.length>0&&(t.provideForm.warehouse=e[0].id)});var o=new Date;this.date=o.getFullYear()+"-"+this.fillZero(o.getMonth()+1)+"-"+this.fillZero(o.getDate()),this.$store.dispatch("getBaseInfo").then(function(o){t.remoteMethod(o.userName),t.provideForm.leader=o.userId})},methods:{changeDate:function(t){this.provideForm.date=t},toOut:function(){this.$router.push({path:"/out"})},handleSummary:function(t){var o=t.columns,e=t.data,a={};return o.forEach(function(t,o){var r=t.key;if(0!==o){var n=e.map(function(t){return Number(t[r])});if(n.every(function(t){return isNaN(t)})||8!==o&&9!==o)a[r]={key:r,value:""};else{var d=n.reduce(function(t,o){var e=Number(o);return isNaN(e)?t:t+o},0);a[r]={key:r,value:d}}}else a[r]={key:r,value:"合计"}}),a},remoteMethod:function(t){var o=this;this.selectLeader(t).then(function(t){o.leaderArr=t.data})},addGoodsHandle:function(){if(""!==this.provideForm.warehouse){this.addGoodsModal=!0;var t=this.formGoodsData.attrData,o=[];t.map(function(t){o.push(t.id)}),this.$refs.child.getKind("1"),this.$refs.child.selectedArr=t.slice(),this.$refs.child.selectedArrId=o}else this.postWarningTip("请先选择出库仓库")},saveGoodsHandle:function(){this.addGoodsModal=!1,this.formGoodsData.attrData=this.$refs.child.selectedArr.slice(),this.getInventoryByParam(this.$refs.child.selectedArrId.join(","),this.provideForm.warehouse)},getCurrIndex:function(t){var o=this,e=!1,a=[];if(this.tmpInventory.map(function(r){if(r.id===o.formGoodsData.attrData[t].id)for(var n=0;n<r.arr.length;n++)if(null!==r.arr[n].outNum){a=r.arr,e=!0;break}}),e){var r=null;a.map(function(t){null!==t.outNum&&(r+=t.amount)}),this.formGoodsData.attrData[t].amount=r}else this.getGoodsList(this.formGoodsData.attrData[t].id,this.provideForm.warehouse).then(function(e){var a=e.data,r=null,n=o.formGoodsData.attrData[t].number;if(null!==n){for(var d=0;d<a.length;d++){if(a[d].inventory>=n){r+=parseFloat(a[d].unitPrice)*n;break}n-=a[d].inventory,r+=parseFloat(a[d].unitPrice)*a[d].inventory}o.formGoodsData.attrData[t].amount=r}else o.formGoodsData.attrData[t].amount=null})},getGoodsByCodeHandle:function(){""!==this.code?this.getGoodsByCode(this.code):this.postWarningTip("请输入物品编码进行添加")},getGoodsByCode:function(t){var o=this,e=this.formGoodsData.attrData.map(function(t){return t.id});this.getGoodsInfoByUseType("1","","",t).then(function(t){t.data.map(function(t){e.indexOf(t.id)<0&&(o.formGoodsData.attrData.push({id:t.id,name:t.name,code:t.code,classify:t.goodsKind,brand:t.brand,model:t.size,unit:t.unit,number:null,currentInventory:null,price:null,amount:null,priceList:[]}),o.getInventoryByParam(t.id,o.provideForm.warehouse))}),o.code=""})},getInventoryByParam:function(t,o){var e=this;BaseAxios({method:"post",url:"/sr/storeroomData!getInventoryByParam.action",data:{goodsInfoIds:t,warehouseId:o}}).then(function(t){var o=t.data,a=function(t){e.formGoodsData.attrData.map(function(a){a.id===t&&e.$set(a,"currentInventory",o[t].inventory)})};for(var r in o)a(r)}).catch(function(t){e.postErrorTip("请求失败"),console.log(t)})},getGoodsListInWarehouse:function(t,o){var e=this;this.getGoodsList(t,o).then(function(t){e.inventoryData.attrData=[];var o=t.data;if(null!==e.outNumber)for(var a=e.outNumber,r=0;r<o.length;r++){var n=null,d=o[r];d.inventory>=a?(n=a,a=0):(n=d.inventory,a-=d.inventory),e.inventoryData.attrData.push({id:d.recordGoodsId,recordKind:d.recordKind,date:d.date,orderNO:d.num,price:d.unitPrice,surplusNum:d.inventory,outNum:0===n?null:n,amount:0!==n&&null!==n?d.unitPrice*n:null})}else o.map(function(t){e.inventoryData.attrData.push({id:t.recordGoodsId,recordKind:t.recordKind,date:t.date,orderNO:t.num,price:t.unitPrice,surplusNum:t.inventory,outNum:0===t.outNum?null:t.outNum,amount:null})})})},getGoodsList:function(t,o){return new d.a(function(e,a){BaseAxios({method:"post",url:"/sr/storeroomData!getGoodsListInWarehouse.action",data:{goodsInfoId:t,warehouseId:o}}).then(function(t){e(t)})}).catch(function(t){reject(t)})},showInventoryModal:function(t){var o=this,e=!1,a=[];if(this.addGoodsIndex=t,this.inventoryModal=!0,this.addGoodsId=this.formGoodsData.attrData[t].id,this.goodsName=this.formGoodsData.attrData[t].name,this.outNumber=this.formGoodsData.attrData[t].number,null===this.outNumber)this.tmpInventory.map(function(t,e){t.id===o.addGoodsId&&o.tmpInventory.splice(e,1)});else for(var n=JSON.parse(r()(this.tmpInventory)),d=0;d<n.length;d++)if(n[d].id===this.addGoodsId){e=!0,a=n[d].arr;break}e?this.inventoryData.attrData=a:this.getGoodsListInWarehouse(this.formGoodsData.attrData[t].id,this.provideForm.warehouse)},handleInventorySummary:function(t){var o=t.columns,e=t.data,a={};return o.forEach(function(t,o){var r=t.key;if(0!==o){var n=e.map(function(t){return Number(t[r])});if(n.every(function(t){return isNaN(t)})||4!==o&&5!==o&&6!==o)a[r]={key:r,value:""};else{var d=n.reduce(function(t,o){var e=Number(o);return isNaN(e)?t:t+o},0);a[r]={key:r,value:d}}}else a[r]={key:r,value:"合计"}}),a},cancelInventoryModal:function(){this.inventoryModal=!1,this.$refs.inventoryData.resetFields()},confirmInventoryModal:function(){for(var t=this,o=this.inventoryData.attrData,e=!1,a=0;a<o.length;a++)if(null!==o[a].outNum){e=!0;break}if(e){this.tmpInventory.map(function(o,e){o.id===t.addGoodsId&&t.tmpInventory.splice(e,1)}),this.tmpInventory.push({id:this.addGoodsId,arr:o});var r=null;o.map(function(t){r+=t.outNum}),this.formGoodsData.attrData[this.addGoodsIndex].number=r}else this.formGoodsData.attrData[this.addGoodsIndex].number=null,this.tmpInventory.map(function(o,e){o.id===t.addGoodsId&&t.tmpInventory.splice(e,1)});this.getCurrIndex(this.addGoodsIndex),this.inventoryModal=!1},calcAmount:function(t){this.inventoryData.attrData[t].amount=this.inventoryData.attrData[t].price*this.inventoryData.attrData[t].outNum},saveOrUpdateIntoWarehouseRecord:function(t,o,e,a,r,n,d,i,s){var m=this,l=!0,c=!0,u={};this.subInvArr=[],u["warehouseRecord.date"]=t,u["warehouseRecord.warehouse.id"]=o,u["warehouseRecord.outKind"]=e,""!==a&&(u["warehouseRecord.department.id"]=a),""!==r&&(u["warehouseRecord.buyer.id"]=r),u["warehouseRecord.note"]=n,u["warehouseRecord.code"]=i,u["warehouseRecord.id"]=s,this.tmpInventory.length>0?(l=!1,this.tmpInventory.map(function(t){d.map(function(o,e){o.id===t.id?t.arr.map(function(t){null!==t.outNum&&m.subInvArr.push({id:t.id,recordKind:t.recordKind,outNum:t.outNum})}):m.getGoodsList(o.id,m.provideForm.warehouse).then(function(t){var e=t.data;if(null!==o.number){var a=o.number;e.map(function(t){var o=null;t.inventory>=a?(o=a,a=0):(o=t.inventory,a-=t.inventory),m.subInvArr.push({id:t.recordGoodsId,recordKind:t.recordKind,outNum:0===o?null:o})})}m.subInvArr.map(function(t,o){null!==t.outNum&&(u["outGoodsVOs["+o+"].recordGoodsId"]=t.id,u["outGoodsVOs["+o+"].count"]=t.outNum,u["outGoodsVOs["+o+"].recordKind"]=t.recordKind)})}),e===d.length-1&&(l=!0)})})):(c=!1,d.map(function(t,o){m.getGoodsList(t.id,m.provideForm.warehouse).then(function(o){var e=o.data;if(null!==t.number){var a=t.number;e.map(function(t){var o=null;t.inventory>=a?(o=a,a=0):(o=t.inventory,a-=t.inventory),m.subInvArr.push({id:t.recordGoodsId,recordKind:t.recordKind,outNum:0===o?null:o})})}m.subInvArr.map(function(t,o){null!==t.outNum&&(u["outGoodsVOs["+o+"].recordGoodsId"]=t.id,u["outGoodsVOs["+o+"].count"]=t.outNum,u["outGoodsVOs["+o+"].recordKind"]=t.recordKind)})}),o===d.length-1&&(c=!0)})),l&&c&&setTimeout(function(){BaseAxios({method:"post",url:"/sr/storeroomData!saveOrUpdateOutWarehouseRecord.action",data:u}).then(function(t){m.saveLoading=!1,m.toOut()}).catch(function(t){m.saveLoading=!1,m.postErrorTip("请求失败"),console.log(t)})},500)},handleSubmit:function(){var t=!1,o=!1;if(this.$refs.provideForm.validate(function(o){o&&(t=!0)}),this.formGoodsData.attrData.length<=0)this.postWarningTip("请添加物品");else if(this.$refs.formGoodsData.validate(function(t){t&&(o=!0)}),t&&o){this.saveLoading=!0;var e=new Date(this.provideForm.date),a=e.getFullYear()+"-"+this.fillZero(e.getMonth()+1)+"-"+this.fillZero(e.getDate());this.saveOrUpdateIntoWarehouseRecord(a,this.provideForm.warehouse,this.provideForm.type,this.provideForm.department,this.provideForm.leader,this.provideRemarkForm.remark,this.formGoodsData.attrData,this.editOrderNO,this.editId)}},clickRowHandle:function(t,o){window.event.stopPropagation(),this.delId===t.id?(this.delId="",this.delIndex=""):(this.delId=t.id,this.delIndex=o)},rowClassName:function(t,o){return this.delId===t.id?"demo-table-info-row":""},delRowHandle:function(){if(""===this.delIndex)return this.postWarningTip("请选择删除的物品");if(this.formGoodsData.attrData.splice(this.delIndex,1),this.$refs.child.selectedArrId.indexOf(this.delId)>-1){var t=this.$refs.child.selectedArrId.indexOf(this.delId);this.$refs.child.selectedArr.splice(t,1),this.$refs.child.selectedArrId.splice(t,1)}}},mounted:function(){}},s=e("W5g0");var m=function(t){e("BbF8")},l=Object(s.a)(i,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"zd-common-component"},[e("Form",{ref:"provideForm",staticClass:"zd-cm-applyForm",attrs:{model:t.provideForm,rules:t.ruleValidate,"label-width":80,inline:""}},[e("FormItem",{attrs:{label:"出库日期：",prop:"date"}},[e("DatePicker",{staticClass:"zd-common-input-h38 zd-common-w150 zd-common-mr10",attrs:{editable:!1,type:"date",format:"yyyy-MM-dd",placeholder:"出库日期"},model:{value:t.provideForm.date,callback:function(o){t.$set(t.provideForm,"date",o)},expression:"provideForm.date"}})],1),t._v(" "),e("FormItem",{attrs:{label:"出库仓库：",prop:"warehouse"}},[e("Select",{staticClass:"zd-common-input-h38 zd-common-w150 zd-common-mr10",attrs:{placeholder:"选择出库仓库"},model:{value:t.provideForm.warehouse,callback:function(o){t.$set(t.provideForm,"warehouse",o)},expression:"provideForm.warehouse"}},t._l(t.warehouseArr,function(o){return e("Option",{key:o.id,attrs:{value:o.id}},[t._v(t._s(o.name))])}),1)],1),t._v(" "),e("FormItem",{attrs:{label:"出库类型：",prop:"type"}},[e("Select",{staticClass:"zd-common-input-h38 zd-common-w150 zd-common-mr10",attrs:{placeholder:"选择出库类型"},model:{value:t.provideForm.type,callback:function(o){t.$set(t.provideForm,"type",o)},expression:"provideForm.type"}},t._l(t.typeArr,function(o){return e("Option",{key:o.code,attrs:{value:o.code}},[t._v(t._s(o.name))])}),1)],1),t._v(" "),e("FormItem",{attrs:{label:"部门：",prop:"department","label-width":40}},[e("Select",{staticClass:"zd-common-input-h38 zd-common-w200 zd-common-mr10",attrs:{placeholder:"选择领用部门"},model:{value:t.provideForm.department,callback:function(o){t.$set(t.provideForm,"department",o)},expression:"provideForm.department"}},t._l(t.departmentArr,function(o){return e("Option",{key:o.id,attrs:{value:o.id}},[t._v(t._s(o.name))])}),1)],1),t._v(" "),e("FormItem",{attrs:{label:"领用人：",prop:"leader","label-width":50}},[e("Select",{ref:"leader",staticClass:"zd-common-input-h38 zd-common-w150 zd-common-fl",attrs:{placeholder:"请输入领用人",filterable:"",remote:"","remote-method":t.remoteMethod,loading:t.loading},model:{value:t.provideForm.leader,callback:function(o){t.$set(t.provideForm,"leader",o)},expression:"provideForm.leader"}},t._l(t.leaderArr,function(o){return e("Option",{key:o.id,attrs:{value:o.id}},[t._v(t._s(o.name))])}),1)],1)],1),t._v(" "),e("div",{staticClass:"zd-common-black-b zd-common-pt5 zd-common-pb5 zd-common-pl20"},[e("Button",{staticClass:"zd-common-mr10 zd-common-h32 zd-common-lh8",attrs:{type:"default"},on:{click:t.addGoodsHandle}},[t._v("\n      添加\n    ")]),t._v(" "),e("Button",{staticClass:"zd-common-mr10 zd-common-h32 zd-common-lh8",attrs:{type:"default"},on:{click:t.delRowHandle}},[t._v("\n      删除\n    ")]),t._v(" "),e("Input",{staticClass:"zd-cm-w220 zd-common-input-h32",attrs:{placeholder:"请输入物品编码，按Enter添加",maxlength:50},nativeOn:{keyup:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:t.getGoodsByCodeHandle(o)}},model:{value:t.code,callback:function(o){t.code=o},expression:"code"}})],1),t._v(" "),e("Form",{ref:"formGoodsData",staticClass:"zd-common-mt10",attrs:{model:t.formGoodsData}},[e("Table",{staticClass:"zd-common-overflow-v",attrs:{border:"",columns:t.goodsCols,data:t.formGoodsData.attrData,"show-summary":"","summary-method":t.handleSummary,"row-class-name":t.rowClassName},on:{"on-row-click":t.clickRowHandle},scopedSlots:t._u([{key:"number",fn:function(o){o.row;var a=o.index;return t.formGoodsData.attrData[a].currentInventory>0?[e("Form-item",{staticClass:"zd-common-mt24",attrs:{prop:"attrData."+a+".number",rules:{required:!0,type:"number",message:"不能为空",trigger:"blur"}}},[e("InputNumber",{attrs:{max:t.formGoodsData.attrData[a].currentInventory,min:1,precision:0,placeholder:"数量"},on:{"on-change":function(o){return t.getCurrIndex(a)}},model:{value:t.formGoodsData.attrData[a].number,callback:function(o){t.$set(t.formGoodsData.attrData[a],"number",o)},expression:"formGoodsData.attrData[index].number"}})],1)]:void 0}},{key:"amount",fn:function(o){o.row;var e=o.index;return[t._v("\n        "+t._s(t.formGoodsData.attrData[e].amount)+"\n      ")]}}],null,!0)})],1),t._v(" "),e("div",{staticClass:"zd-common-mt10 zd-common-clearFix"},[e("span",{staticClass:"zd-common-fl"},[t._v("制单人："+t._s(t.userName))]),t._v(" "),e("span",{staticClass:"zd-common-fl zd-common-ml20"},[t._v("制单日期："+t._s(t.date))])]),t._v(" "),e("Form",{ref:"provideRemarkForm",staticClass:"zd-common-mt20",attrs:{model:t.provideRemarkForm}},[e("FormItem",{staticClass:"zd-common-mb0",attrs:{label:"备注："}},[e("Input",{staticClass:"zd-common-fl",staticStyle:{width:"826px"},attrs:{placeholder:"备注",maxlength:100,type:"textarea",autosize:{minRows:5,maxRows:5}},model:{value:t.provideRemarkForm.remark,callback:function(o){t.$set(t.provideRemarkForm,"remark","string"==typeof o?o.trim():o)},expression:"provideRemarkForm.remark"}})],1)],1),t._v(" "),e("div",{staticClass:"zd-common-modal-footer zd-common-pt30",attrs:{slot:"footer"},slot:"footer"},[e("Button",{staticClass:"zd-common-mr35 zd-common-w100 zd-common-h32 zd-common-lh8",attrs:{type:"primary",loading:t.saveLoading},on:{click:t.handleSubmit}},[t.saveLoading?e("span",[t._v("正在保存...")]):e("span",[t._v("确定")])]),t._v(" "),e("Button",{staticClass:"zd-common-w100 zd-common-h32 zd-common-lh8",on:{click:t.toOut}},[t._v("取消")])],1),t._v(" "),e("Modal",{attrs:{"mask-closable":!1,width:1200},model:{value:t.addGoodsModal,callback:function(o){t.addGoodsModal=o},expression:"addGoodsModal"}},[e("h3",{staticClass:"zd-common-modal-header",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("物品档案")])]),t._v(" "),e("add-goods",{ref:"child"}),t._v(" "),e("div",{staticClass:"zd-common-modal-footer zd-common-pt10",attrs:{slot:"footer"},slot:"footer"},[e("div",{staticClass:"zd-common-modal-footer zd-common-pt10",attrs:{slot:"footer"},slot:"footer"},[e("Button",{staticClass:"zd-common-mr35 zd-common-w100 zd-common-h32 zd-common-lh8",attrs:{type:"primary"},on:{click:t.saveGoodsHandle}},[t._v("确定")]),t._v(" "),e("Button",{staticClass:"zd-common-w100 zd-common-h32 zd-common-lh8",on:{click:function(o){t.addGoodsModal=!1}}},[t._v("取消")])],1)])],1),t._v(" "),e("Modal",{attrs:{"mask-closable":!1,width:920},on:{"on-cancel":t.cancelInventoryModal},model:{value:t.inventoryModal,callback:function(o){t.inventoryModal=o},expression:"inventoryModal"}},[e("h3",{staticClass:"zd-common-modal-header",attrs:{slot:"header"},slot:"header"},[e("span",[t._v(t._s(t.goodsName))])]),t._v(" "),e("div",{staticClass:"zd-common-tr"},[e("i",{staticClass:"zd-common-fs12 zd-common-font-style zd-common-des-font-c"},[t._v("系统默认按照先入先出的原则自动分配出库数量")])]),t._v(" "),e("div",{staticClass:"zd-common-h400 zd-common-mt10"},[e("vue-scroll",[e("Form",{ref:"inventoryData",attrs:{model:t.inventoryData}},[e("Table",{staticClass:"zd-common-overflow-v zd-cm-out-table",attrs:{border:"",columns:t.inventoryCols,data:t.inventoryData.attrData,"show-summary":"","summary-method":t.handleInventorySummary},scopedSlots:t._u([{key:"outNum",fn:function(o){o.row;var a=o.index;return t.inventoryData.attrData[a].surplusNum>0?[e("Form-item",{staticClass:"zd-common-mt24"},[e("InputNumber",{attrs:{max:t.inventoryData.attrData[a].surplusNum,min:1,precision:0,placeholder:"数量"},on:{"on-change":function(o){return t.calcAmount(a)}},model:{value:t.inventoryData.attrData[a].outNum,callback:function(o){t.$set(t.inventoryData.attrData[a],"outNum",o)},expression:"inventoryData.attrData[index].outNum"}})],1)]:void 0}},{key:"amount",fn:function(o){o.row;var e=o.index;return[t._v("\n              "+t._s(t.inventoryData.attrData[e].amount)+"\n            ")]}}],null,!0)})],1)],1)],1),t._v(" "),e("div",{staticClass:"zd-common-modal-footer zd-common-pt10",attrs:{slot:"footer"},slot:"footer"},[e("Button",{staticClass:"zd-common-mr35 zd-common-w100 zd-common-h32 zd-common-lh8",attrs:{type:"primary"},on:{click:t.confirmInventoryModal}},[t._v("确定")]),t._v(" "),e("Button",{staticClass:"zd-common-w100 zd-common-h32 zd-common-lh8",on:{click:t.cancelInventoryModal}},[t._v("取消")])],1)])],1)},[],!1,m,"data-v-60ee3d0e",null);o.default=l.exports}});
//# sourceMappingURL=23.7f521ba674d19222b58b.js.map