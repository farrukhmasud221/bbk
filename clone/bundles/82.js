webpackJsonp([82],{"0d8d678ea4b3fd6ca492":function(b,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.agentDashboardFAQsState={states:[{name:"top.gui.agentdashboard.gui.faqs",abstract:!0,params:{reload:!0},resolve:{viewsObj:["metaDataService","$stateParams",async function(b,a){var c=[{viewID:"168",operationId:"UI_agents",mappings:{v_AgentID:"AgentID"},panelType:"ReadOnlyView",updatePanel:["TX_UpdDMAgentFAQ"],TX_UpdDMAgentFAQ:{operationId:"TX_UpdDMAgentFAQ",heading:"Faqs",panelType:"UpdateableReadOnlyView",Params:[{ViewParamId:72024,name:"v_AgentAppFAQs",ctype:"textarea",paramtype:"varchar",label:"v_AgentAppFaqs",direction:"inout",validator:"",width:"*"}]}}];return await b.resolve(c,a),c}]}},{name:"top.gui.agentdashboard.gui.faqs.gui",url:"/FAQs",views:{"tabContent@top":{component:"detailComponent"}}}]}}});