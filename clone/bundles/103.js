webpackJsonp([103],{f4623a7e07cc476439a3:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.PaymentHistoryState={states:[{name:"top.gui.mediation_PaymentHistory",abstract:!0,params:{reload:!1},resolve:{viewsObj:["metaDataService","$stateParams",async function(b,c){var d=[{viewID:"1180",heading:"Wallet Payment History",panelType:"SearchView",operationId:"receiptsByUserName_f1",Params:[{ViewParamId:71178,name:"v_PrivateIdentity",ctype:"label",paramtype:"varchar",label:"UserName",direction:"in",validator:"",width:"auto",placeholder:"+1 (416) 123 xxxx",required:"true"}],gridOptions:{enableSorting:!0,paginationPageSizes:[10,20,50,100],paginationPageSize:50,data:null,enableScrollbars:!0,enableFiltering:!0,enableRowHeaderSelection:!1,columnDefs:[{ViewColumnDefID:36388,name:"v_UserName",cellClass:"text-center",label:"v_UserName",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"v_AmountCredited",cellClass:"text-center",label:"v_AmountCredited",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"v_PaymentModeName",cellClass:"text-center",label:"v_PaymentModeName",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"v_AmountTotal",cellClass:"text-center",label:"v_AmountTotal",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"v_DeferredCommission",cellClass:"text-center",label:"v_DeferredCommission",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"v_InsertTime",cellClass:"text-center",label:"v_TransactionTime",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"v_Remarks",cellClass:"text-center",label:"v_Remarks",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"v_UserName",cellClass:"text-center",label:"v_UserName",width:"*",enableCellEdit:!1}]}}];return await b.resolve(d,c),d}]}},{name:"top.gui.mediation_PaymentHistory.gui",url:"PaymentHistory",views:{"tabContent@top":{component:"formComponent"},"searchResult@top.gui.mediation_PaymentHistory.gui":{component:"gridComponent"}},deepStateRedirect:!0,sticky:!0}]}}});