webpackJsonp([88],{"1bcc6716168718d6f674":function(b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.accountDashboardVPNSettingsState={states:[{name:"top.gui.accountdashboard.gui.vpnsettings",abstract:!0,params:{reload:!0},resolve:{viewsObj:["metaDataService","$stateParams",async function(b,c){var a=[{viewID:"168",heading:"VPN Settings",operationId:"UI_accounts",mappings:{v_AccountID:"AccountID"},panelType:"ReadOnlyView",Params:[{ViewParamId:72024,name:"v_VPNServerInfo",ctype:"label",paramtype:"varchar",label:"v_VPNServerInfo",direction:"inout",validator:"",width:"*"}]}];return await b.resolve(a,c),console.log(a),a}]}},{name:"top.gui.accountdashboard.gui.vpnsettings.gui",url:"/VPNSettings",views:{"tabContent@top":{component:"detailComponent"}}}]}}});