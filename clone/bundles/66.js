webpackJsonp([66],{"1dfcb61eea4263ea5673":function(b,c,d){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.privateIdentityDashboardState={states:[{name:"top.gui.mediation_privateidentitydashboard",abstract:!0,params:{AccNoPrivateIdentityID:null},resolve:{viewsObj:["$stateParams","metaDataService","$state$",async function(b,c,d){var a={name:"PrivateIdentityDashboard",id:"PrivateIdentityDashboard",panelType:"TabsMenu",class:"nav nav-pills",heading:"Account Dashboard",Params:[{name:"Basic Information",id:"BasicInformation",url:"/PrivateIdentityDashboard/"+b.AccNoPrivateIdentityID+"/BasicInformation"},{name:"Login Status",id:"getPrivateIdentityRegistrationStatus",url:"/PrivateIdentityDashboard/"+b.AccNoPrivateIdentityID+"/getPrivateIdentityRegistrationStatus"},{name:"Account Info",id:"GetAccountInfo",url:"/PrivateIdentityDashboard/"+b.AccNoPrivateIdentityID+"/GetAccountInfo"},{name:"Payments List",id:"getPaymentsList",url:"/PrivateIdentityDashboard/"+b.AccNoPrivateIdentityID+"/getPaymentsList"},{name:"Payment By Voucher",id:"PaymentByVoucher",url:"/PrivateIdentityDashboard/"+b.AccNoPrivateIdentityID+"/PaymentByVoucher"},{name:"CDRs",id:"CDRs",url:"/PrivateIdentityDashboard/"+b.AccNoPrivateIdentityID+"/Accountcdrs"},{name:"Registrar Settings",id:"RegistrarSettings",url:"/PrivateIdentityDashboard/"+b.AccNoPrivateIdentityID+"/RegistrarSettings"},{name:"Audio Codec",id:"AudioCodec",url:"/PrivateIdentityDashboard/"+b.AccNoPrivateIdentityID+"/AudioCodec"},{name:"Trace Log Settings",id:"TraceInfo",url:"/PrivateIdentityDashboard/"+b.AccNoPrivateIdentityID+"/TraceInfo"},{name:"Trace Logs",id:"Logs",url:"/PrivateIdentityDashboard/"+b.AccNoPrivateIdentityID+"/Logs"},{name:"Account Credit",id:"AccountCredit",url:"/PrivateIdentityDashboard/"+b.AccNoPrivateIdentityID+"/AccountCredit"},{name:"Account Debit",id:"AccountDebit",url:"/PrivateIdentityDashboard/"+b.AccNoPrivateIdentityID+"/AccountDebit"},{name:"Change Password",id:"ChangePassword",url:"/PrivateIdentityDashboard/"+b.AccNoPrivateIdentityID+"/ChangePassword"},{name:"Convert to Reseller Account",id:"ResellerAccount",url:"/PrivateIdentityDashboard/"+b.AccNoPrivateIdentityID+"/ResellerAccount"}]};return await c.resolve(a,b,d),console.log("helllo angular"),console.log("myview",a.Params[15]),a}]},template:"\n           <div ui-view=\"topmenu\"></div>\n           <div ui-view=\"tabContent\" class=\"tab-content\"></div>\n       "},{name:"top.gui.mediation_privateidentitydashboard.gui",url:"PrivateIdentityDashboard/:AccNoPrivateIdentityID",views:{"topmenu@top":{component:"menuComponent"}},deepStateRedirect:{default:"top.gui.mediation_privateidentitydashboard.gui.basicinformation.gui",params:["AccNoPrivateIdentityID"]}},{name:"top.gui.mediation_privateidentitydashboard.gui.basicinformation.**",url:"/BasicInformation",lazyLoad:function(){return d.e(42).then(d.bind(null,"5b062c3c67f39727774c")).then(function(a){return a.privateIdentityDashboardBasicInformationState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.registrarsettings.**",url:"/RegistrarSettings",lazyLoad:function(){return d.e(37).then(d.bind(null,"9c7494008c0bba796373")).then(function(a){return a.privateIdentityDashboardRegistrarSettingsState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.AudioCodec.**",url:"/AudioCodec",lazyLoad:function(){return d.e(48).then(d.bind(null,"122c76cd0c288fe216c3")).then(function(a){return a.privateIdentityDashboardAudioCodecState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.vpnsettings.**",url:"/VPNSettings",lazyLoad:function(){return d.e(35).then(d.bind(null,"abb5111d20ad7674a60b")).then(function(a){return a.privateIdentityDashboardVPNSettingsState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.paymentsettings.**",url:"/PaymentSettings",lazyLoad:function(){return d.e(38).then(d.bind(null,"eda58162b2c1f65c0747")).then(function(a){return a.privateIdentityDashboardPaymentSettingsState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.traceinfo.**",url:"/TraceInfo",lazyLoad:function(){return d.e(36).then(d.bind(null,"d80629592bccf6a143f6")).then(function(a){return a.privateIdentityDashboardTraceInfoState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.getaccountinfo.**",url:"/GetAccountInfo",lazyLoad:function(){return d.e(67).then(d.bind(null,"0e382a1de06e7f26fc5d")).then(function(a){return a.privateidentityDashboardGetAccountinfoState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.getPrivateIdentityRegistrationStatus.**",url:"/getPrivateIdentityRegistrationStatus",lazyLoad:function(){return d.e(68).then(d.bind(null,"330bf41acdb8a9a01474")).then(function(a){return a.privateidentityDashboardgetPrivateIdentityRegistrationStatusState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.accountcdrs.**",url:"/Accountcdrs",lazyLoad:function(){return d.e(43).then(d.bind(null,"981d49dd9f75b79cb3d3")).then(function(a){return a.privateidentityDashboardAccountcdrsState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.getPaymentsList.**",url:"/getPaymentsList",lazyLoad:function(){return d.e(41).then(d.bind(null,"6da4ec7b98accb2501a7")).then(function(a){return a.privateidentityDashboardgetPaymentsList})}},{name:"top.gui.mediation_privateidentitydashboard.gui.paymentbyvoucher.**",url:"/PaymentByVoucher",lazyLoad:function(){return d.e(39).then(d.bind(null,"0d7ed1c5bbe5b00d131c")).then(function(a){return a.privateIdentityDashboardPaymentByVoucherState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.logs.**",url:"/Logs",lazyLoad:function(){return d.e(40).then(d.bind(null,"30f7f0a7e99f3443face")).then(function(a){return a.privateIdentityDashboardLogsState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.AccountCredit.**",url:"/AccountCredit",lazyLoad:function(){return d.e(51).then(d.bind(null,"1f4595233a3a1c1ac145")).then(function(a){return a.privateIdentityDashboardAccountCreditState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.ChangePassword.**",url:"/ChangePassword",lazyLoad:function(){return d.e(47).then(d.bind(null,"37e504d55fa6d56be81d")).then(function(a){return a.privateIdentityDashboardChangePasswordState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.ResellerAccount.**",url:"/ResellerAccount",lazyLoad:function(){return d.e(45).then(d.bind(null,"17707844dc8e70dff4e0")).then(function(a){return a.privateIdentityDashboardResellerAccountState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.AddWalletBalance.**",url:"/AddWalletBalance",lazyLoad:function(){return d.e(49).then(d.bind(null,"52d75345b92bb12d5bed")).then(function(a){return a.privateIdentityDashboardAddWalletBalanceState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.DeductWalletBalance.**",url:"/DeductWalletBalance",lazyLoad:function(){return d.e(46).then(d.bind(null,"917369f3451f642a75a5")).then(function(a){return a.privateIdentityDashboardDeductWalletBalanceState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.TransactionHistory.**",url:"/TransactionHistory",lazyLoad:function(){return d.e(44).then(d.bind(null,"c4b5be61b6d88b63421b")).then(function(a){return a.privateIdentityDashboardTransactionHistoryState})}},{name:"top.gui.mediation_privateidentitydashboard.gui.AccountDebit.**",url:"/AccountDebit",lazyLoad:function(){return d.e(50).then(d.bind(null,"dafd0fd485ab9cd1ac07")).then(function(a){return a.privateIdentityDashboardAccountDebitState})}}]}}});