webpackJsonp([83],{efc68c1b25a664780344:function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.agentDashboardEventLogBitMaskState={states:[{name:"top.gui.agentdashboard.gui.eventlogbitmask",abstract:!0,params:{reload:!0},resolve:{viewsObj:["metaDataService","$stateParams",async function(b,a){var c=[{viewID:"168",operationId:"UI_agents",mappings:{v_AgentID:"AgentID"},panelType:"ReadOnlyView",updatePanel:["TX_UpdAgentEventLogBitMask"],TX_UpdAgentEventLogBitMask:{operationId:"TX_UpdAgentEventLogBitMask",heading:"Event Log BitMask",panelType:"UpdateableReadOnlyView",Params:[{ViewParamId:72024,name:"v_EventLogBitMask",ctype:"number",max:"61",paramtype:"varchar",label:"v_EventLogBitMask",direction:"inout",validator:"",width:"*"}]}}];await b.resolve(c,a);var d=function(b,a){for(var c="";a--;)c+=1&b>>a;return c}(c[0].data.v_EventLogBitMask,4),e=Array.from(d.toString());console.log("array",d);for(var f=e.length,g=0;g<f;g++)console.log(e[g]);return c[0].data.BinaryEventLogBitMask=e,c}]}},{name:"top.gui.agentdashboard.gui.eventlogbitmask.gui",url:"/EventLogBitMask",views:{"tabContent@top":{component:"detailComponent"}}}]}}});