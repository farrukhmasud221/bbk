webpackJsonp([98],{"051dc24ece4c5d51be6a":function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.TransactionLedgerHistoryState={states:[{name:"top.gui.mediation_TransactionLedgerHistory",abstract:!0,params:{reload:!1},resolve:{viewsObj:["metaDataService","$stateParams",async function(b,c){var d=[{viewID:"1180",heading:"ALL Transaction Report",panelType:"SearchView",operationId:"GU_transactionsledgerByUsrName",Params:[{ViewParamId:71178,name:"v_PrivateIdentity",ctype:"Number",paramtype:"varchar",label:"UserName",direction:"in",validator:"",width:"auto",placeholder:"+1 (416) 123 xxxx",required:"true"}],gridOptions:{enableSorting:!0,paginationPageSizes:[10,20,50,100],paginationPageSize:100,data:null,enableScrollbars:!0,enableFiltering:!0,enableRowHeaderSelection:!1,columnDefs:[{ViewColumnDefID:36388,name:"Amount",cellClass:"text-center",label:"Amount",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"Balance",cellClass:"text-center",label:"Balance",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"Commission",cellClass:"text-center",label:"Commission",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"Description",cellClass:"text-center",label:"Description",width:"*",enableCellEdit:!1},{ViewColumnDefID:36391,name:"Profit",cellClass:"text-center",label:"Profit",width:"auto",enableCellEdit:!1}]}}];await b.resolve(d,c);var a=d[0].gridOptions.data;return null!==a&&void 0!==a?(console.log("found object"),a.forEach(function(a){console.log("helo",a)})):(console.log("Object is null"),console.log("Now the object is : ",d)),d}]}},{name:"top.gui.mediation_TransactionLedgerHistory.gui",url:"TransactionLedgerHistory",views:{"tabContent@top":{component:"formComponent"},"searchResult@top.gui.mediation_TransactionLedgerHistory.gui":{component:"gridComponent"}},deepStateRedirect:!0,sticky:!0}]}}});