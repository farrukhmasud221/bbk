webpackJsonp([8],{"63f309cb9c4c476abcc7":function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.resellersdashboardAccountcdrsState={states:[{name:"top.gui.mediation_resellersdashboard.gui.accountcdrs",abstract:!0,params:{reload:!1},resolve:{viewsObj:["metaDataService","$stateParams",async function(b,c){var d=[{viewID:"1180",heading:"Accounts",panelType:"SearchView",operationId:"WF_getAccountCDRs",mappings:{v_AccNoPrivateIdentityID:"AccNoPrivateIdentityID"},Params:[{ViewParamId:71179,name:"StartDate",ctype:"datetime",paramtype:"varchar",label:"StartDate",direction:"in",validator:"",width:"*"},{ViewParamId:71183,name:"EndDate",ctype:"datetime",paramtype:"varchar",label:"EndDate",direction:"in",validator:"",width:"*"}],gridOptions:{enableSorting:!0,paginationPageSizes:[10,20,50,100],paginationPageSize:10,data:null,enableScrollbars:!0,enableFiltering:!0,enableRowHeaderSelection:!1,columnDefs:[{ViewColumnDefID:36391,name:"accessibility_cost",label:"accessibility_cost",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"connect_time",label:"connect_time",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"lrn_cld",label:"lrn_cld",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"disconnect_time",label:"disconnect_time",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"prefix",label:"prefix",width:"*",enableCellEdit:!1},{ViewColumnDefID:36391,name:"cost",label:"cost",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"result",label:"result",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"duration",label:"duration",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"interval_1",label:"interval_1",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"cli",label:"cli",width:"*",enableCellEdit:!1},{ViewColumnDefID:36391,name:"pdd1xx",label:"pdd1xx",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"cld",label:"cld",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"i_cdr",label:"i_cdr",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"call_id",label:"call_id",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"delay",label:"delay",width:"*",enableCellEdit:!1},{ViewColumnDefID:36391,name:"cld_in",label:"cld_in",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"i_call",label:"i_call",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"free_seconds",label:"free_seconds",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"post_call_surcharge",label:"post_call_surcharge",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"i_account",label:"i_account",width:"*",enableCellEdit:!1},{ViewColumnDefID:36391,name:"price_n",label:"price_n",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"grace_period",label:"grace_period",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"description",label:"description",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"interval_n",label:"interval_n",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"connect_fee",label:"connect_fee",width:"*",enableCellEdit:!1},{ViewColumnDefID:36391,name:"price_1",label:"price_1",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"cli_in",label:"cli_in",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"billed_duration",label:"billed_duration",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"country",label:"country",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"user_agent",label:"user_agent",width:"*",enableCellEdit:!1},{ViewColumnDefID:36388,name:"remote_ip",label:"remote_ip",width:"*",enableCellEdit:!1}]}}];return await b.resolve(d,c),d}]}},{name:"top.gui.mediation_resellersdashboard.gui.accountcdrs.gui",url:"/Accountcdrs",views:{"tabContent@top":{component:"formComponent"},"searchResult@top.gui.mediation_resellersdashboard.gui.accountcdrs.gui":{component:"gridComponent"}},deepStateRedirect:!0,sticky:!0}]}}});