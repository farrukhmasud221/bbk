webpackJsonp([59],{"44fc120e91779e552ca9":function(b,c,d){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.resellersDashboardState={states:[{name:"top.gui.mediation_resellersdashboard",abstract:!0,params:{AccNoPrivateIdentityID:null},resolve:{viewsObj:["$stateParams","metaDataService","$state$",async function(b,c,d){var a={name:"ResellersDashboard",id:"ResellersDashboard",panelType:"TabsMenu",class:"nav nav-pills",heading:"Account Dashboard",Params:[{name:"Basic Information",id:"BasicInformation",url:"/ResellersDashboard/"+b.AccNoPrivateIdentityID+"/BasicInformation"},{name:"Login Status",id:"RegistrationStatus",url:"/ResellersDashboard/"+b.AccNoPrivateIdentityID+"/RegistrationStatus"},{name:"Account Info",id:"GetAccountInfo",url:"/ResellersDashboard/"+b.AccNoPrivateIdentityID+"/GetAccountInfo"},{name:"Payments List",id:"getPaymentsList",url:"/ResellersDashboard/"+b.AccNoPrivateIdentityID+"/getPaymentsList"},{name:"Payment By Voucher",id:"PaymentByVoucher",url:"/ResellersDashboard/"+b.AccNoPrivateIdentityID+"/PaymentByVoucher"},{name:"CDRs",id:"CDRs",url:"/ResellersDashboard/"+b.AccNoPrivateIdentityID+"/Accountcdrs"},{name:"Registrar Settings",id:"RegistrarSettings",url:"/ResellersDashboard/"+b.AccNoPrivateIdentityID+"/RegistrarSettings"},{name:"Trace Log Settings",id:"TraceInfo",url:"/ResellersDashboard/"+b.AccNoPrivateIdentityID+"/TraceInfo"},{name:"Trace Logs",id:"Logs",url:"/ResellersDashboard/"+b.AccNoPrivateIdentityID+"/Logs"},{name:"Account Credit",id:"AccountCredit",url:"/ResellersDashboard/"+b.AccNoPrivateIdentityID+"/AccountCredit"},{name:"Account Debit",id:"AccountDebit",url:"/ResellersDashboard/"+b.AccNoPrivateIdentityID+"/AccountDebit"},{name:"Change Password",id:"ChangePassword",url:"/ResellersDashboard/"+b.AccNoPrivateIdentityID+"/ChangePassword"}]};return await c.resolve(a,b,d),console.log("helllo angular"),console.log("myview",a.Params[15]),a}]},template:"\n           <div ui-view=\"topmenu\"></div>\n           <div ui-view=\"tabContent\" class=\"tab-content\"></div>\n       "},{name:"top.gui.mediation_resellersdashboard.gui",url:"ResellersDashboard/:AccNoPrivateIdentityID",views:{"topmenu@top":{component:"menuComponent"}},deepStateRedirect:{default:"top.gui.mediation_resellersdashboard.gui.basicinformation.gui",params:["AccNoPrivateIdentityID"]}},{name:"top.gui.mediation_resellersdashboard.gui.basicinformation.**",url:"/BasicInformation",lazyLoad:function(){return d.e(7).then(d.bind(null,"e17607bfdebc0549b5a7")).then(function(a){return a.resellersdashboardBasicInformationState})}},{name:"top.gui.mediation_resellersdashboard.gui.registrarsettings.**",url:"/RegistrarSettings",lazyLoad:function(){return d.e(3).then(d.bind(null,"49c932b44c96d876881a")).then(function(a){return a.resellersdashboardRegistrarSettingsState})}},{name:"top.gui.mediation_resellersdashboard.gui.traceinfo.**",url:"/TraceInfo",lazyLoad:function(){return d.e(2).then(d.bind(null,"57ebfd2734bea863f7ca")).then(function(a){return a.resellersdashboardTraceInfoState})}},{name:"top.gui.mediation_resellersdashboard.gui.getaccountinfo.**",url:"/GetAccountInfo",lazyLoad:function(){return d.e(61).then(d.bind(null,"7a79399568f48a04dc72")).then(function(a){return a.resellersdashboardGetAccountinfoState})}},{name:"top.gui.mediation_resellersdashboard.gui.getresellersRegistrationStatus.**",url:"/RegistrationStatus",lazyLoad:function(){return d.e(60).then(d.bind(null,"cb07853124c24e7b188b")).then(function(a){return a.resellersdashboardgetresellersRegistrationStatus})}},{name:"top.gui.mediation_resellersdashboard.gui.accountcdrs.**",url:"/Accountcdrs",lazyLoad:function(){return d.e(8).then(d.bind(null,"63f309cb9c4c476abcc7")).then(function(a){return a.resellersdashboardAccountcdrsState})}},{name:"top.gui.mediation_resellersdashboard.gui.getPaymentsList.**",url:"/getPaymentsList",lazyLoad:function(){return d.e(6).then(d.bind(null,"6654c52255e55a20bc76")).then(function(a){return a.resellersdashboardgetPaymentsList})}},{name:"top.gui.mediation_resellersdashboard.gui.paymentbyvoucher.**",url:"/PaymentByVoucher",lazyLoad:function(){return d.e(4).then(d.bind(null,"87ee04d06710661771e0")).then(function(a){return a.resellersdashboardPaymentByVoucherState})}},{name:"top.gui.mediation_resellersdashboard.gui.logs.**",url:"/Logs",lazyLoad:function(){return d.e(5).then(d.bind(null,"55f080cc124c6871923c")).then(function(a){return a.resellersdashboardLogsState})}},{name:"top.gui.mediation_resellersdashboard.gui.AccountCredit.**",url:"/AccountCredit",lazyLoad:function(){return d.e(11).then(d.bind(null,"ca9e500d108df0a8385d")).then(function(a){return a.resellersdashboardAccountCreditState})}},{name:"top.gui.mediation_resellersdashboard.gui.ChangePassword.**",url:"/ChangePassword",lazyLoad:function(){return d.e(9).then(d.bind(null,"c4c2740f4a15e4199cab")).then(function(a){return a.resellersdashboardChangePasswordState})}},{name:"top.gui.mediation_resellersdashboard.gui.AccountDebit.**",url:"/AccountDebit",lazyLoad:function(){return d.e(10).then(d.bind(null,"9c2546e1b330eccccc48")).then(function(a){return a.resellersdashboardAccountDebitState})}}]}}});