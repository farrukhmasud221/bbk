webpackJsonp([110],{"6186cea15adad78ea6bc":function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.accountDashboardDevicesState={states:[{name:"top.gui.accountdashboard.gui.devices",abstract:!0,resolve:{viewsObj:["metaDataService","$stateParams",async function(b,c){var d=[{viewID:"9669",heading:"Logs",panelType:"ListView",operationId:"devices_f1",mappings:{v_AccountID:"AccountID"},gridOptions:{enableSorting:!0,paginationPageSizes:[10,20,50,100],paginationPageSize:10,data:null,enableScrollbars:!0,enableFiltering:!0,enableRowHeaderSelection:!1,columnDefs:[{name:"v_DeviceModel",label:"v_DeviceModel",cellTemplate:"<div><a ng-href=\"#!/DeviceDetail/{{row.entity.v_DeviceID}}\">{{grid.getCellValue(row, col)}}</a></div>",cellClass:"text-center",width:"*",enableCellEdit:!1},{name:"v_DevicePlatform",cellClass:"text-center",label:"v_DevicePlatform",width:"*",enableCellEdit:!1},{name:"v_DeviceVersion",cellClass:"text-center",label:"v_DeviceVersion",width:"*",enableCellEdit:!1},{name:"v_LastFailedVoucherAttempt",cellClass:"text-center",label:"v_LastFailedVoucherAttempt",width:"*",enableCellEdit:!1},{name:"v_NoOfIdentificationAttempts",cellClass:"text-center",label:"v_NoOfIdentificationAttempts",width:"*",enableCellEdit:!1}],onRegisterApi:null}}];return await b.resolve(d,c),d}]}},{name:"top.gui.accountdashboard.gui.devices.gui",url:"/Devices",views:{"tabContent@top":{component:"gridComponent"}}}]}}});