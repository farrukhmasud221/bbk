webpackJsonp([108],{"76dbff4d9651c62d94cb":function(b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.privateIdentityDashboardTraceInfoState={states:[{name:"top.gui.accountdashboard.gui.traceinfo",abstract:!0,params:{reload:!0},resolve:{viewsObj:["metaDataService","$stateParams",async function(b,c){var a=[{viewID:"168",panelType:"ReadOnlyView",operationId:"UI_accnoprivateidentities",heading:"BasicInformation",mappings:{v_AccountID:"AccountID"},updatePanel:["WF_Updprivateidlogrequest"],WF_Updprivateidlogrequest:{viewID:"3899",heading:"Update Log Request",operationId:"WF_Updprivateidlogrequest",panelType:"UpdateableReadOnlyView",Params:[{ViewParamId:61574,name:"v_TraceLevel",ctype:"number",min:1,max:"5",paramtype:"bigint",label:"v_TraceLevel",direction:"inout",validator:"",width:"auto"},{ViewParamId:61575,name:"v_LogDuration",ctype:"number",min:1,paramtype:"bigint",label:"v_LogDuration",direction:"inout",validator:"",width:"auto"}]}}];return await b.resolve(a,c),console.log("asd"),a}]}},{name:"top.gui.accountdashboard.gui.traceinfo.gui",url:"/TraceInfo",views:{"tabContent@top":{component:"detailComponent"}}}]}}});