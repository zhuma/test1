webpackJsonp([5],{"5jNX":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("SbLc"),n=o("fYFQ"),s=o.n(n),i=(o("Kmkn"),{components:{Treeselect:s.a,GoodDetail:a.a},data:function(){var t=this;return{columns:[{type:"index",align:"center",title:"序号",width:65},{title:"出库单号",align:"center",key:"orderNO",width:140},{title:"物品名称",align:"center",key:"name",render:function(e,o){return e("div",[e("span",{class:"zd-common-primary-c zd-common-cp",on:{click:function(){t.showDetail(o.row.id)}}},o.row.name)])}},{title:"数量",align:"center",key:"number"},{title:"金额",align:"center",key:"amount"},{title:"出库仓库",align:"center",key:"warehouse"},{title:"领用人",align:"center",key:"user"},{title:"校区",align:"center",key:"school"},{title:"部门",align:"center",key:"department"},{title:"出库类型",align:"center",key:"type"},{title:"出库日期",align:"center",key:"date"},{title:"制单人",align:"center",key:"orderPerson"},{title:"制单日期",align:"center",key:"orderDate"}],data:[],pageSize:10,pageNum:1,total:0,selectLoading:!1,dateOptions:this.dateRange,date:"",startDate:"",endDate:"",schoolDepart:null,schoolDepartArr:[],departTreeOptions:[],leaderArr:[],leader:"",loading:!1,name:"",isHigh:!1,warehouseArr:[],warehouse:"",kind:null,kindIdArr:[],treeOptions:[],type:"",typeArr:[],orderNO:"",normalizer:function(t){return{id:t.id,label:t.name,children:t.children}},inventoryModal:!1,saveLoading:!1,allDetail:{}}},created:function(){var t=this;this.getOutKindList().then(function(e){t.typeArr=e.data}),this.getChargedStoreRoom().then(function(e){t.warehouseArr=e.data}),this.getDepartmentTree().then(function(e){t.departTreeOptions=e.data}),this.getKind();var e=new Date,o=new Date;o.setTime(o.getTime()-2592e6),this.date=[o,e];var a=e.toLocaleDateString().split("/"),n=o.toLocaleDateString().split("/");this.endDate=a[0]+"-"+this.fillZero(a[1])+"-"+this.fillZero(a[2]),this.startDate=n[0]+"-"+this.fillZero(n[1])+"-"+this.fillZero(n[2]),this.outWarehouseStatistics(this.pageNum,this.pageSize,this.startDate,this.endDate,this.schoolDepartArr.join(","),this.leader,this.name,this.warehouse,this.type,this.kindIdArr.join(","),this.orderNO)},methods:{remoteMethod:function(t){var e=this;this.selectLeader(t).then(function(t){e.leaderArr=t.data})},changeDate:function(t){this.startDate=t[0],this.endDate=t[1]},onSelect:function(t,e){this.kindIdArr=t},onSelectDepart:function(t,e){this.schoolDepartArr=t,console.log(t)},getKind:function(){var t=this;this.treeOptions=[],this.getGoodsKindTree().then(function(e){t.treeOptions=e.data})},showHigh:function(){this.isHigh=!this.isHigh},showDetail:function(t){this.inventoryModal=!0,this.goodsStatisticsDetail(t)},goodsStatisticsDetail:function(t){var e=this;BaseAxios({method:"post",url:"/sr/storeroomData!getGoodsInfoDetail.action",data:{id:t}}).then(function(t){e.allDetail=t.data}).catch(function(t){e.postErrorTip("请求失败"),console.log(t)})},outWarehouseStatistics:function(t,e,o,a,n,s,i,r,c,l,m){var d=this;this.data=[],BaseAxios({method:"post",url:" /sr/storeroomData!outWarehouseStatistics.action",data:{pageNum:t,pageSize:e,startDate:o,endDate:a,departmentIds:n,userIds:s,goodsName:i,warehouseIds:r,kind:c,goodsKindIds:l,num:m}}).then(function(t){var e=t.data;e&&e.list.length>0&&e.list.map(function(t){d.data.push({id:t.goodsInfoId,orderNO:t.num,name:t.goodsInfoName,number:t.count,amount:t.totalPrice,warehouse:t.warehouseName,type:t.outKind,date:t.date,user:t.buyName,orderPerson:t.userName,orderDate:t.productDate,school:t.schoolName,department:t.departmentName})}),d.total=e.totalCount,d.selectLoading=!1}).catch(function(t){d.selectLoading=!1,d.postErrorTip("请求失败"),console.log(t)})},changePage:function(t){this.pageNum=t,this.outWarehouseStatistics(this.pageNum,this.pageSize,this.startDate,this.endDate,this.schoolDepartArr.join(","),this.leader,this.name,this.warehouse,this.type,this.kindIdArr.join(","),this.orderNO)},changePageSize:function(t){this.pageSize=t,this.outWarehouseStatistics(this.pageNum,this.pageSize,this.startDate,this.endDate,this.schoolDepartArr.join(","),this.leader,this.name,this.warehouse,this.type,this.kindIdArr.join(","),this.orderNO)},selectHandle:function(){this.selectLoading=!0,this.outWarehouseStatistics(this.pageNum,this.pageSize,this.startDate,this.endDate,this.schoolDepartArr.join(","),this.leader,this.name,this.warehouse,this.type,this.kindIdArr.join(","),this.orderNO)},exportHandle:function(){location.href=this.serverPath+"/sr/storeroomData!exportIntoWarehouseStatistics.action?warehouseIds="+this.warehouse+"&goodsKindIds="+this.kindIdArr.join(",")+"&goodsName="+this.name+"&startDate="+this.startDate+"&endDate="+this.endDate+"&type="+this.type}},mounted:function(){}}),r=o("W5g0");var c=function(t){o("XZfB")},l=Object(r.a)(i,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"zd-common-component"},[o("div",{staticClass:"zd-common-clearFix"},[o("Button",{staticClass:"zd-common-fl zd-common-pl11 zd-common-pr11 zd-common-mr10 zd-cm-res-fl",attrs:{type:"primary"},on:{click:t.exportHandle}},[o("Icon",{staticClass:"zd-common-fs18 zd-common-mr5 zd-common-fl",attrs:{type:"ios-open-outline"}}),t._v("导出\n    ")],1),t._v(" "),o("div",{staticClass:"zd-common-fr zd-cm-res-fr"},[o("div",{staticClass:"zd-common-clearFix zd-cm-res-fr"},[o("DatePicker",{staticClass:"zd-common-input-h38 zd-common-fl zd-common-mr10 zd-cm-w220",attrs:{editable:!1,type:"daterange",options:t.dateOptions,placeholder:"日期"},on:{"on-change":t.changeDate},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),t._v(" "),o("div",{staticClass:"zd-common-w200 zd-common-fl zd-common-mr10"},[o("treeselect",{attrs:{valueConsistsOf:"ALL",multiple:!0,options:t.departTreeOptions,normalizer:t.normalizer,limit:1,limitText:t.limitHandle,noOptionsText:"暂无数据",clearable:!1,placeholder:"选择校区部门"},on:{close:t.onSelectDepart},model:{value:t.schoolDepart,callback:function(e){t.schoolDepart=e},expression:"schoolDepart"}})],1),t._v(" "),o("Select",{ref:"purchaser",staticClass:"zd-common-input-h38 zd-common-w150 zd-common-fl zd-common-mr10",attrs:{placeholder:"领用人",filterable:"",remote:"","remote-method":t.remoteMethod,loading:t.loading},model:{value:t.leader,callback:function(e){t.leader=e},expression:"leader"}},t._l(t.leaderArr,function(e){return o("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])}),1),t._v(" "),o("Input",{staticClass:"zd-common-input-h38 zd-common-w200 zd-common-fl zd-common-mr10",attrs:{placeholder:"物品名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),o("Button",{staticClass:"zd-common-fl zd-common-mr10",attrs:{type:"primary",loading:t.selectLoading},on:{click:t.selectHandle}},[t.selectLoading?o("span",[t._v("正在查询...")]):o("span",[t._v("查询")])]),t._v(" "),o("Button",{staticClass:"zd-common-fl",attrs:{type:"primary"},on:{click:t.showHigh}},[t._v("\n          高级查询\n          "),t.isHigh?o("Icon",{staticClass:"zd-common-fs18 zd-common-fr zd-common-mt1",attrs:{type:"md-arrow-dropup"}}):o("Icon",{staticClass:"zd-common-fs18 zd-common-fr zd-common-mt1",attrs:{type:"md-arrow-dropdown"}})],1)],1),t._v(" "),t.isHigh?o("div",{staticClass:"zd-common-mt10"},[o("Select",{staticClass:"zd-common-input-h38 zd-common-w200 zd-common-fl zd-common-mr10",attrs:{clearable:!0,placeholder:"全部出库仓库"},model:{value:t.warehouse,callback:function(e){t.warehouse=e},expression:"warehouse"}},t._l(t.warehouseArr,function(e){return o("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.name))])}),1),t._v(" "),o("Select",{staticClass:"zd-common-w150 zd-common-mr10 zd-common-input-h38 zd-common-fl",attrs:{clearable:"",placeholder:"选择出库类型"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.typeArr,function(e){return o("Option",{key:e.code,attrs:{value:e.code}},[t._v(t._s(e.name))])}),1),t._v(" "),o("div",{staticClass:"zd-cm-tree zd-common-w300 zd-common-fl zd-common-mr10"},[o("treeselect",{attrs:{multiple:!0,options:t.treeOptions,normalizer:t.normalizer,limit:2,limitText:t.limitHandle,noOptionsText:"暂无数据",clearable:!1,placeholder:"选择物品分类"},on:{close:t.onSelect},model:{value:t.kind,callback:function(e){t.kind=e},expression:"kind"}})],1),t._v(" "),o("Input",{staticClass:"zd-common-input-h38 zd-common-w150 zd-common-fl zd-common-mr10",attrs:{placeholder:"出库单号"},model:{value:t.orderNO,callback:function(e){t.orderNO=e},expression:"orderNO"}})],1):t._e()])],1),t._v(" "),o("div",{staticClass:"zd-common-mt16"},[o("Table",{ref:"currentRowTable",attrs:{border:"",columns:t.columns,data:t.data}}),t._v(" "),o("div",{staticClass:"zd-common-tc zd-common-mt20"},[o("Page",{attrs:{total:t.total,current:t.pageNum,"page-size":t.pageSize,"show-sizer":"","show-elevator":"","show-total":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)],1),t._v(" "),o("Modal",{attrs:{"mask-closable":!1,width:600},model:{value:t.inventoryModal,callback:function(e){t.inventoryModal=e},expression:"inventoryModal"}},[o("h3",{staticClass:"zd-common-modal-header",attrs:{slot:"header"},slot:"header"},[o("span",[t._v("出库详情 - "+t._s(t.allDetail.name))])]),t._v(" "),o("good-detail",{attrs:{allDetail:t.allDetail}}),t._v(" "),o("div",{attrs:{slot:"footer"},slot:"footer"})],1)],1)},[],!1,c,"data-v-9543fbcc",null);e.default=l.exports},A31T:function(t,e){},SbLc:function(t,e,o){"use strict";var a={props:{allDetail:{type:Object}}},n=o("W5g0");var s=function(t){o("A31T")},i=Object(n.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"zd-common-clearFix zd-common-lh30"},[o("li",{staticClass:"zd-common-fl zd-common-wp50 zd-common-mb10"},[o("span",{staticClass:"zd-common-w100 zd-common-dib zd-common-tr"},[t._v("物品名称：")]),o("span",{staticClass:"zd-common-font-weight"},[t._v(t._s(t.allDetail.name))])]),t._v(" "),o("li",{staticClass:"zd-common-fl zd-common-wp50 zd-common-mb10"},[o("span",{staticClass:"zd-common-w100 zd-common-dib zd-common-tr"},[t._v("物品编码：")]),o("span",{staticClass:"zd-common-font-weight"},[t._v(t._s(t.allDetail.code))])]),t._v(" "),o("li",{staticClass:"zd-common-fl zd-common-wp50 zd-common-mb10"},[o("span",{staticClass:"zd-common-w100 zd-common-dib zd-common-tr"},[t._v("物品分类：")]),o("span",{staticClass:"zd-common-font-weight"},[t._v(t._s(t.allDetail.goodsKindName))])]),t._v(" "),o("li",{staticClass:"zd-common-fl zd-common-wp50 zd-common-mb10"},[o("span",{staticClass:"zd-common-w100 zd-common-dib zd-common-tr"},[t._v("品牌：")]),o("span",{staticClass:"zd-common-font-weight"},[t._v(t._s(t.allDetail.brand))])]),t._v(" "),o("li",{staticClass:"zd-common-fl zd-common-wp50 zd-common-mb10"},[o("span",{staticClass:"zd-common-w100 zd-common-dib zd-common-tr"},[t._v("规格 / 型号：")]),o("span",{staticClass:"zd-common-font-weight"},[t._v(t._s(t.allDetail.size))])]),t._v(" "),o("li",{staticClass:"zd-common-fl zd-common-wp50 zd-common-mb10"},[o("span",{staticClass:"zd-common-w100 zd-common-dib zd-common-tr"},[t._v("单位：")]),o("span",{staticClass:"zd-common-font-weight"},[t._v(t._s(t.allDetail.unit))])]),t._v(" "),o("li",{staticClass:"zd-common-fl zd-common-wp50 zd-common-mb10"},[o("span",{staticClass:"zd-common-w100 zd-common-dib zd-common-tr"},[t._v("最高库存：")]),o("span",{staticClass:"zd-common-font-weight"},[t._v(t._s(t.allDetail.maxInventory))])]),t._v(" "),o("li",{staticClass:"zd-common-fl zd-common-wp50 zd-common-mb10"},[o("span",{staticClass:"zd-common-w100 zd-common-dib zd-common-tr"},[t._v("最低库存：")]),o("span",{staticClass:"zd-common-font-weight"},[t._v(t._s(t.allDetail.minInventory))])])])},[],!1,s,"data-v-982c0dd6",null);e.a=i.exports},XZfB:function(t,e){}});
//# sourceMappingURL=5.7350529693a2171cf717.js.map