webpackJsonp([100],{"861d852b49fd2e465902":function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.SignUpAttempts={states:[{name:"top.gui.mediation_SignUpAttempts",abstract:!0,params:{reload:!1},resolve:{viewsObj:["metaDataService","$stateParams",async function(a,b){var c=[{viewID:"1180",heading:"Signup Attempts",panelType:"ListView",operationId:"LS_publicidentitiesUv",gridOptions:{enableSorting:!0,paginationPageSizes:[10,20,50,100],paginationPageSize:50,data:null,enableScrollbars:!0,enableFiltering:!0,enableRowHeaderSelection:!1,columnDefs:[{ViewColumnDefID:36396,name:"v_PublicIdentity",cellClass:"text-center",label:"v_UserName",cellTemplate:"<div><a ng-href=\"#!/UnvarifiedDetail/{{row.entity.v_PublicIdentityID}}\">{{grid.getCellValue(row, col)}}</a></div>",width:"*",enableCellEdit:!1},{ViewColumnDefID:36396,name:"v_RandomString",cellClass:"text-center",label:"v_RandomString",width:"*",enableCellEdit:!1}]}}];return await a.resolve(c,b),console.log("hey"+JSON.stringify(c)),c}]}},{name:"top.gui.mediation_SignUpAttempts.gui",url:"SignUpAttempts",views:{"tabContent@top":{component:"gridComponent"}},deepStateRedirect:!0}]}}});