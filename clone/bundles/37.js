webpackJsonp([37],{"9c7494008c0bba796373":function(b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.privateIdentityDashboardRegistrarSettingsState={states:[{name:"top.gui.mediation_privateidentitydashboard.gui.registrarsettings",abstract:!0,params:{reload:!0},resolve:{viewsObj:["metaDataService","$stateParams",async function(b,c){var a=[{viewID:"168",operationId:"UI_accnoprivateidentities",mappings:{v_AccNoPrivateIdentityID:"AccNoPrivateIdentityID"},panelType:"ReadOnlyView",updatePanel:["TX_UpdPrivateIDSIPRegistrar"],TX_UpdPrivateIDSIPRegistrar:{operationId:"TX_UpdPrivateIDSIPRegistrar",heading:"Password",panelType:"UpdateableReadOnlyView",Params:[{ViewParamId:72024,name:"v_SIPRegistrarIP",ctype:"readonly",paramtype:"varchar",label:"v_SIPRegistrarIP",direction:"inout",validator:"",width:"*"},{ViewParamId:72025,name:"v_SIPRegistrarPort",ctype:"label",paramtype:"varchar",label:"v_SIPRegistrarPort",direction:"inout",validator:"",width:"*"}]}}];return await b.resolve(a,c),console.log("asd"),a}]}},{name:"top.gui.mediation_privateidentitydashboard.gui.registrarsettings.gui",url:"/RegistrarSettings",views:{"tabContent@top":{component:"detailComponent"}}}]}}});