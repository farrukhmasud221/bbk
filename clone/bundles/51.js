webpackJsonp([51],{"1f4595233a3a1c1ac145":function(b,c){"use strict";function d(b,c,a){return c in b?Object.defineProperty(b,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):b[c]=a,b}Object.defineProperty(c,"__esModule",{value:!0}),c.privateIdentityDashboardAccountCreditState={states:[{name:"top.gui.mediation_privateidentitydashboard.gui.AccountCredit",abstract:!0,params:{reload:!0},resolve:{viewsObj:["metaDataService","$stateParams",async function(b,c){var a,e=[(a={viewID:"168",panelType:"ReadOnlyView",operationId:"WF_getAccountInfo",heading:"BasicInformation",mappings:{v_AccNoPrivateIdentityID:"AccNoPrivateIdentityID"}},d(a,"panelType","ReadOnlyView"),d(a,"updatePanel",["WF_AccountCredit"]),d(a,"WF_AccountCredit",{viewID:"3899",label:"Account Credit",heading:"Account Credit",mappings:{v_AccNoPrivateIdentityID:"AccNoPrivateIdentityID"},operationId:"WF_AccountCredit",buttonLabel:"Add payment",panelType:"UpdateableReadOnlyView",Params:[{ViewParamId:72024,name:"Username",ctype:"readonly",paramtype:"varchar",label:"Username",direction:"inout",validator:"",width:"*"},{ViewParamId:72024,name:"balance",ctype:"readonly",paramtype:"varchar",label:"Account Balance",direction:"inout",validator:"",width:"*"},{ViewParamId:61575,name:"CreditAmount",ctype:"number",max:"20",paramtype:"varchar",label:"Credit Amount",direction:"in",validator:"",width:"auto",required:"true"}]}),a)];return await b.resolve(e,c),console.log("viewsObj",e),e[0].WF_AccountCredit.Params[1].value.startsWith("-")?(e[0].WF_AccountCredit.Params[1].value=e[0].WF_AccountCredit.Params[1].value.substring(1),console.log(e[0].WF_AccountCredit.Params[1].value)):0==e[0].WF_AccountCredit.Params[1].value?e[0].WF_AccountCredit.Params[1].value=e[0].WF_AccountCredit.Params[1].value:e[0].WF_AccountCredit.Params[1].value="-"+e[0].WF_AccountCredit.Params[1].value,e[0].WF_AccountCredit.Params[1].value="$ "+(+e[0].WF_AccountCredit.Params[1].value).toFixed(2),e}]}},{name:"top.gui.mediation_privateidentitydashboard.gui.AccountCredit.gui",url:"/AccountCredit",views:{"tabContent@top":{component:"detailComponent"}}}]}}});