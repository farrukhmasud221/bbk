webpackJsonp([86],{d1a9123486bd15aafde1:function(b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.agentDashboardCodecsState={states:[{name:"top.gui.agentdashboard.gui.codec",abstract:!0,params:{reload:!0},resolve:{viewsObj:["metaDataService","$stateParams",async function(b,c){var a=[{viewID:"168",operationId:"UI_agents",mappings:{v_AgentID:"AgentID"},panelType:"ReadOnlyView",updatePanel:["TX_UpdDMASupportedAudioCodec"],TX_UpdDMASupportedAudioCodec:{operationId:"TX_UpdDMASupportedAudioCodec",heading:"Codec",panelType:"ReadOnlyView",Params:[{ViewParamId:72024,name:"v_SupportedAudioCodec",ctype:"textarea",paramtype:"varchar",label:"SupportedAudioCodec",direction:"inout",validator:"",width:"*"}]}}];await b.resolve(a,c),console.log(a[0].TX_UpdDMASupportedAudioCodec.Params[0]);var e=a[0].TX_UpdDMASupportedAudioCodec.Params[0].value.split(",");return a[0].TX_UpdDMASupportedAudioCodec.Params.pop(),e.forEach(function(b){console.log(b);a[0].TX_UpdDMASupportedAudioCodec.Params.push({ViewParamId:72024,ctype:"textarea",direction:"inout",label:b,name:"v_"+b,paramtype:"varchar",validator:"",value:"Enabled",width:"*"})}),a}]}},{name:"top.gui.agentdashboard.gui.codec.gui",url:"/Codecs",views:{"tabContent@top":{component:"detailComponent"}}}]}}});