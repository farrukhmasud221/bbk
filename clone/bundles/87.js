webpackJsonp([87],{a7747f3990686188e8eb:function(b,a,c){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.accountDashboardState={states:[{name:"top.gui.accountdashboard",abstract:!0,params:{AccountID:null},resolve:{viewsObj:["$stateParams","metaDataService","$state$",async function(b,a,c){var d={name:"AccountDashboard",id:"AccountDashboard",panelType:"TabsMenu",class:"nav nav-tabs",heading:"Account Dashboard",Params:[{name:"Basic Information",id:"BasicInformation",url:"/AccountDashboard/"+b.AccountID+"/BasicInformation"},{name:"Account Identification",id:"AccountIdentification",url:"/AccountDashboard/"+b.AccountID+"/AccountIdentification"},{name:"User Name",id:"UserName",url:"/AccountDashboard/"+b.AccountID+"/UserName"},{name:"Email",id:"Email",url:"/AccountDashboard/"+b.AccountID+"/Email"},{name:"Registrar",id:"Registrar",url:"/AccountDashboard/"+b.AccountID+"/Registrar"},{name:"VPN Settings",id:"VPNSettings",url:"/AccountDashboard/"+b.AccountID+"/VPNSettings"},{name:"Payment Settings",id:"PaymentSettings",url:"/AccountDashboard/"+b.AccountID+"/PaymentSettings"},{name:"Trace Info",id:"TraceInfo",url:"/AccountDashboard/"+b.AccountID+"/TraceInfo"},{name:"Logs",id:"Logs",url:"/AccountDashboard/"+b.AccountID+"/Logs"},{name:"PayPal Payments",id:"PayPalPayments",url:"/AccountDashboard/"+b.AccountID+"/PayPalPayments"},{name:"Devices",id:"Devices",url:"/AccountDashboard/"+b.AccountID+"/Devices"}]};return await a.resolve(d,b,c),d}]}},{name:"top.gui.accountdashboard.gui",url:"AccountDashboard/:AccountID",views:{"topmenu@top":{component:"menuComponent"}},deepStateRedirect:{default:"top.gui.accountdashboard.gui.basicinformation.gui",params:["AccountID"]}},{name:"top.gui.accountdashboard.gui.basicinformation.**",url:"/BasicInformation",lazyLoad:function(){return c.e(95).then(c.bind(null,"b147e1f4f0959fbcd9b9")).then(function(b){return b.accountDashboardBasicInformationState})}},{name:"top.gui.accountdashboard.gui.accountidentification.**",url:"/AccountIdentification",lazyLoad:function(){return c.e(96).then(c.bind(null,"e49651cf62f20c6012d6")).then(function(b){return b.accountDashboardAccountIdentificationState})}},{name:"top.gui.accountdashboard.gui.username.**",url:"/UserName",lazyLoad:function(){return c.e(89).then(c.bind(null,"b5683388533b7ed7cb1b")).then(function(b){return b.accountDashboardUserNameState})}},{name:"top.gui.accountdashboard.gui.devices.**",url:"/Devices",lazyLoad:function(){return c.e(110).then(c.bind(null,"6186cea15adad78ea6bc")).then(function(b){return b.accountDashboardDevicesState})}},{name:"top.gui.accountdashboard.gui.email.**",url:"/Email",lazyLoad:function(){return c.e(94).then(c.bind(null,"9f7494250203ff6985f5")).then(function(b){return b.accountDashboardEmailState})}},{name:"top.gui.accountdashboard.gui.registrar.**",url:"/Registrar",lazyLoad:function(){return c.e(90).then(c.bind(null,"5ac8a3d31f26fa01ecf7")).then(function(b){return b.accountDashboardRegistrarState})}},{name:"top.gui.accountdashboard.gui.vpnsettings.**",url:"/VPNSettings",lazyLoad:function(){return c.e(88).then(c.bind(null,"1bcc6716168718d6f674")).then(function(b){return b.accountDashboardVPNSettingsState})}},{name:"top.gui.accountdashboard.gui.paymentsettings.**",url:"/PaymentSettings",lazyLoad:function(){return c.e(92).then(c.bind(null,"1627261ea8118f4a40a1")).then(function(b){return b.accountDashboardPaymentSettingsState})}},{name:"top.gui.accountdashboard.gui.password.**",url:"/Password",lazyLoad:function(){return c.e(93).then(c.bind(null,"0f5b290af373694cc211")).then(function(b){return b.accountDashboardPasswordState})}},{name:"top.gui.accountdashboard.gui.traceinfo.**",url:"/TraceInfo",lazyLoad:function(){return c.e(108).then(c.bind(null,"76dbff4d9651c62d94cb")).then(function(b){return b.privateIdentityDashboardTraceInfoState})}},{name:"top.gui.accountdashboard.gui.logs.**",url:"/Logs",lazyLoad:function(){return c.e(109).then(c.bind(null,"790fe4db7c07d9698049")).then(function(b){return b.accountDashboardLogsState})}},{name:"top.gui.accountdashboard.gui.paypalpayments.**",url:"/PayPalPayments",lazyLoad:function(){return c.e(91).then(c.bind(null,"92ff5a41771fb0809eb4")).then(function(b){return b.accountDashboardPayPalPaymentsState})}}]}}});