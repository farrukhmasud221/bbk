webpackJsonp([53],{f39f0be540738af9a24c:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.mediationOperationcustomercdrsState={states:[{name:"top.gui.mediation_operation_customercdrs",abstract:!0,params:{reload:!1},resolve:{viewsObj:["metaDataService","$stateParams",async function(a,b){var c=[{viewID:"1180",heading:"Customer CDRs",panelType:"ListView",operationId:"WF_getcustomerCDRs",Params:[{ViewParamId:75119,name:"v_ID",ctype:"label",paramtype:"bigint",label:"ID",direction:"out",validator:"",width:"auto"}],gridOptions:{enableSorting:!0,paginationPageSizes:[10,20,50,100],paginationPageSize:10,data:null,enableScrollbars:!0,enableFiltering:!0,enableRowHeaderSelection:!1,columnDefs:[{ViewColumnDefID:36388,name:"connect_time",label:"connect_time",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"disconnect_time",label:"disconnect_time",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"prefix",label:"prefix",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36391,name:"cost",label:"cost",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"duration",label:"duration",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"interval_1",label:"interval_1",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"cli",label:"cli",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36391,name:"pdd1xx",label:"pdd1xx",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"cld",label:"cld",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"i_cdr",label:"i_cdr",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"call_id",label:"call_id",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"delay",label:"delay",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36391,name:"cld_in",label:"cld_in",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"i_call",label:"i_call",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"i_account",label:"i_account",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36391,name:"price_n",label:"price_n",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"description",label:"description",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"interval_n",label:"interval_n",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36391,name:"price_1",label:"price_1",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"cli_in",label:"cli_in",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"billed_duration",label:"billed_duration",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"country",label:"country",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"user_agent",label:"user_agent",cellClass:"text-center",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"remote_ip",label:"remote_ip",cellClass:"text-center",width:"*",enableCellEdit:!1}]}}];return await a.resolve(c,b),c}]}},{name:"top.gui.mediation_operation_customercdrs.gui",url:"customercdrs",views:{"tabContent@top":{component:"gridComponent"}}}]}}});