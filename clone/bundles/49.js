webpackJsonp([49],{"52d75345b92bb12d5bed":function(b,a){"use strict";function c(b,a,c){return a in b?Object.defineProperty(b,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):b[a]=c,b}Object.defineProperty(a,"__esModule",{value:!0}),a.privateIdentityDashboardAddWalletBalanceState={states:[{name:"top.gui.mediation_privateidentitydashboard.gui.AddWalletBalance",abstract:!0,params:{reload:!0},resolve:{viewsObj:["metaDataService","$stateParams",async function(b,a){var d,e=[(d={viewID:"168",panelType:"ReadOnlyView",operationId:"UI_accnoprivateidentities",heading:"BasicInformation",mappings:{v_AccNoPrivateIdentityID:"AccNoPrivateIdentityID"}},c(d,"panelType","ReadOnlyView"),c(d,"updatePanel",["WF_UpdPrivateIDPassword"]),c(d,"WF_UpdPrivateIDPassword",{viewID:"3899",label:"Add Payment",heading:"Add Wallet Balance",mappings:{v_AccNoPrivateIdentityID:"AccNoPrivateIdentityID"},operationId:"WF_AddBalanceSale",buttonLabel:"Add Wallet Balance",panelType:"UpdateableReadOnlyView",Params:[{ViewParamId:72024,name:"v_UserName",ctype:"readonly",paramtype:"varchar",label:"v_UserName",direction:"inout",validator:"",width:"*"},{ViewParamId:61575,name:"v_Amount",ctype:"label",paramtype:"varchar",label:"v_Amount",direction:"in",validator:"",width:"auto",required:"true"},{ViewParamId:61575,name:"v_CommissionIn",ctype:"label",paramtype:"varchar",label:"v_CommissionIn",direction:"in",validator:"",width:"auto",required:"true"},{ViewParamId:61575,name:"v_Remarks",ctype:"textarea",paramtype:"varchar",label:"v_Remarks",direction:"in",validator:"",width:"auto"}]}),d)];return await b.resolve(e,a),e}]}},{name:"top.gui.mediation_privateidentitydashboard.gui.AddWalletBalance.gui",url:"/AddWalletBalance",views:{"tabContent@top":{component:"detailComponent"}}}]}}});