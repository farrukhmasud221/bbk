export const siptrunkDashboardState = {
    states: [{
        name: "top.gui.operation_siptrunkdashboard",
        abstract: true,
        params: { SIPTrunkID: null },
        resolve: {
            viewsObj: ["$stateParams", 'metaDataService', '$state$', async function ($stateParams, metaDataService, $state$) {
                let viewsObj = {
                    name: "siptrunk",
                    id: "siptrunk",
                    "panelType": "TabsMenu",
                    "class": "nav nav-tabs",
                    "heading":"SipTrunks",

                    Params: [
                     //   { name: "Account Dashboard", id: "", url: "//" + $stateParams.AccNoPrivateIdentityID + "/" },
                       
                        

                       // { name: "Basic Information", id: "BasicInformation", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/BasicInformation" },
                       // { name: "Login Status", id: "RegistrationStatus", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/RegistrationStatus" },
                       // { name: "Account Info", id: "GetAccountInfo", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/GetAccountInfo" },
                       // { name: "Payments List", id: "getPaymentsList", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/getPaymentsList" },
                       // { name: "Payment By Voucher", id: "PaymentByVoucher", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/PaymentByVoucher" },
                       // { name: "CDRs", id: "CDRs", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/Accountcdrs" },
                       // { name: "Registrar Settings", id: "RegistrarSettings", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/RegistrarSettings" },
                        //{ name: "VPN Settings", id: "VPNSettings", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/VPNSettings" },
                        //             // { name: "Payment Settings", id: "PaymentSettings", url: "/ResellerAccountDashboard/" + $stateParams.AccNoPrivateIdentityID + "/PaymentSettings" },
                       // { name: "Trace Log Settings", id: "TraceInfo", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/TraceInfo" },
                        //{ name: "Trace Logs", id: "Logs", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/Logs" },
                        //{ name: "Account Credit", id: "AccountCredit", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/AccountCredit" },
                        //{ name: "Account Debit", id: "AccountDebit", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/AccountDebit" },

                        { name: "Basic", id: "basic", url: "/siptrunks/" + $stateParams.SIPTrunkID + "/basic" },
                        { name: "Pop Name", id: "popname", url: "/siptrunks/" + $stateParams.SIPTrunkID + "/popname" },
                        { name: "CLI Rules", id: "CLIRules", url: "/siptrunks/" + $stateParams.SIPTrunkID + "/CLIRules" },
                        { name: "SIPTrunk Dialing Extension", id: "SIPTrunkDialingExtension", url: "/siptrunks/" + $stateParams.SIPTrunkID + "/SIPTrunkDialingExtension" },
                        { name: "SIP Trunk Forwarding IPs", id: "SIPTrunkForwardingIPs", url: "/siptrunks/" + $stateParams.SIPTrunkID + "/SIPTrunkForwardingIPs" },
                        { name: "Advance", id: "Advance", url: "/siptrunks/" + $stateParams.SIPTrunkID + "/Advance" },
                        { name: "charges", id: "charges", url: "/siptrunks/" + $stateParams.SIPTrunkID + "/charges" },

                        // { name: "CLI Rules", id: "CLIRules", url: "/tblsiptrunks/" + $stateParams.SIPTrunkID + "/CLIRules" },
                        // { name: "SIPTrunk Dialing Extension", id: "SIPTrunk Dialing Extension", url: "/tblsiptrunks/" + $stateParams.SIPTrunkID + "/SIPTrunkDialingExtension" },
                        // { name: "ADVANCE", id: "Advance", url: "/tblsiptrunks/" + $stateParams.SIPTrunkID + "/Advance" },
                        // { name: "Charges", id: "charges", url: "/tblsiptrunks/" + $stateParams.SIPTrunkID + "/charges" },
                        // { name: "Deduct Reseller Balance", id: "DeductWalletBalance", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/DeductWalletBalance" },
                        // { name: "Wallet Balance Transfer ", id: "TransactionHistory", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/TransactionHistory" },
                        
                        // { name: "Balance Sale Report", id: "BalanceSalesHistory", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/BalanceSalesHistory" },
                        // { name: "Balance Transfer to Reseller Report", id: "TransferBalanceHistory", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/TransferBalanceHistory" },
                        // // { name: "Wallet Payment History", id: "PaymentHistory", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/PaymentHistory" },

                        // { name: "Balance Transfer to Account Report", id: "RedeemBalanceHistory", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/RedeemBalanceHistory" },

                        // { name: "All Transaction Report", id: "TransactionLedgerHistory", url: "/ResellerDashboard/" + $stateParams.AccNoPrivateIdentityID + "/TransactionLedgerHistory" }


                    ]
                };
                await metaDataService.resolve(viewsObj, $stateParams, $state$);
                console.log("helllo angular");
                console.log("myview", viewsObj.Params[15]);
                //viewsObj.Params[15].shift();



                return viewsObj;
            }]
        },
        template: `
           <div ui-view="topmenu"></div>
           <div ui-view="tabContent" class="tab-content"></div>
       `
    },
    {
        name: "top.gui.operation_siptrunkdashboard.gui",
        url: "siptrunks/:SIPTrunkID",
        views: {
            "topmenu@top": {
                component: "menuComponent"
            }
        },
        deepStateRedirect: { default: "top.gui.operation_siptrunkdashboard.gui.basic.gui", params: ['SIPTrunkID'] },
        // sticky: true
    },
    // {
    //     name: "top.gui.mediation_ResellerAccountDashboard.gui.password.**",
    //     url: "/Password",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_resellerdashboard.gui.password').then(response => {
    //             return response.resellerdashboardBasicInformationState;
    //         });
    //     }
    // },
    {
        name: "top.gui.operation_siptrunkdashboard.gui.basic.**",
        url: "/basic",
        lazyLoad: function () {
            return System.import('./top.gui.operation_siptrunkdashboard.gui.basic').then(response => {
                return response.siptrunkdashboardbasicState;
            });
        }
    },
    {
        name: "top.gui.operation_siptrunkdashboard.gui.popname.**",
        url: "/popname",
        lazyLoad: function () {
            return System.import('./top.gui.operation_siptrunkdashboard.gui.popname').then(response => {
                return response.siptrunkdashboardpopnameState;
            });
        }
    },
    {
        name: "top.gui.operation_siptrunkdashboard.gui.CLIRules.**",
        url: "/CLIRules",
        lazyLoad: function () {
            return System.import('./top.gui.operation_siptrunkdashboard.gui.CLIRules').then(response => {
                return response.siptrunkdashboardCLIRulesState;
            });
        }
    },
    {  
        name: "top.gui.operation_siptrunkdashboard.gui.SIPTrunkDialingExtension.**",
        url: "/SIPTrunkDialingExtension",
        lazyLoad: function () {
            return System.import('./top.gui.operation_siptrunkdashboard.gui.SIPTrunkDialingExtension').then(response => {
                return response.siptrunkdashboardSIPTrunkDialingExtensionState;
            });
        }
    },



    {
        name: "top.gui.operation_siptrunkdashboard.gui.SIPTrunkForwardingIPs.**",
        url: "/SIPTrunkForwardingIPs",
        lazyLoad: function () {
            return System.import('./top.gui.operation_siptrunkdashboard.gui.SIPTrunkForwardingIPs').then(response => {
                return response.siptrunkdashboardSIPTrunkForwardingIPsState;
            });
        }
    },












    {
        name: "top.gui.operation_siptrunkdashboard.gui.Advance.**",
        url: "/Advance",
        lazyLoad: function () {
            return System.import('./top.gui.operation_siptrunkdashboard.gui.Advance').then(response => {
                return response.siptrunkdashboardAdvanceState;
            });
        }
    },
    {
        name: "top.gui.operation_siptrunkdashboard.gui.Charges.**",
        url: "/charges",
        lazyLoad: function () {
            return System.import('./top.gui.operation_siptrunkdashboard.gui.Charges').then(response => {
                return response.siptrunkdashboardChargesState;
            });
        }
    },

    {
        name: "top.gui.mediation_resellerdashboard.gui.vpnsettings.**",
        url: "/VPNSettings",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.vpnsettings').then(response => {
                return response.resellerdashboardVPNSettingsState;
            });
        }
    },
    // {
    //     name: "top.gui.mediation_resellerdashboard.gui.paymentsettings.**",
    //     url: "/PaymentSettings",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_resellerdashboard.gui.paymentsettings').then(response => {
    //             return response.resellerdashboardPaymentSettingsState;
    //         });
    //     }
    // },
    {
        name: "top.gui.mediation_resellerdashboard.gui.traceinfo.**",
        url: "/TraceInfo",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.traceinfo').then(response => {
                return response.resellerdashboardTraceInfoState;
            });
        }
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.getaccountinfo.**",
        url: "/GetAccountInfo",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.resellerdashboard.gui.getaccountinfo').then(response => {

                // alert(JSON.stringify(response));
                return response.resellerdashboardGetAccountinfoState;
            });
        }
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.getresellerRegistrationStatus.**",
        url: "/RegistrationStatus",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.resellerdashboard.gui.getresellerRegistrationStatus').then(response => {
                return response.resellerdashboardgetresellerRegistrationStatus;
            });
        }
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.accountcdrs.**",
        url: "/Accountcdrs",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.accountcdrs').then(response => {
                return response.resellerdashboardAccountcdrsState;
            });
        }
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.getPaymentsList.**",
        url: "/getPaymentsList",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.getPaymentsList').then(response => {
                return response.resellerdashboardgetPaymentsList;
            });
        }
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.paymentbyvoucher.**",
        url: "/PaymentByVoucher",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.paymentbyvoucher').then(response => {
                return response.resellerdashboardPaymentByVoucherState;
            });
        }
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.logs.**",
        url: "/Logs",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.logs').then(response => {
                return response.resellerdashboardLogsState;
            });
        }
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.PaymentHistory.**",
        url: "/PaymentHistory",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.PaymentHistory').then(response => {
                return response.resellerdashboardPaymentHistoryState;
            });
        }
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.TransferBalanceHistory.**",
        url: "/TransferBalanceHistory",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.TransferBalanceHistory').then(response => {
                return response.resellerdashboardTransferBalanceHistoryState;
            });
        }
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.TransactionLedgerHistory.**",
        url: "/TransactionLedgerHistory",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.TransactionLedgerHistory').then(response => {
                return response.resellerdashboardTransactionLedgerHistoryState;
            });
        }
    },

    {
        name: "top.gui.mediation_resellerdashboard.gui.AccountCredit.**",
        url: "/AccountCredit",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.AccountCredit').then(response => {
                return response.resellerdashboardAccountCreditState;
            });
        }
    },

    {
        name: "top.gui.mediation_resellerdashboard.gui.ChangePassword.**",
        url: "/ChangePassword",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.ChangePassword').then(response => {
                return response.resellerdashboardChangePasswordState;
            });
        }
    },
    //     {
    //         name: "top.gui.mediation_ResellerAccountDashboard.gui.ResellerAccount.**",
    //         url: "/ResellerAccount",
    //         lazyLoad: function () {
    //             return System.import('./top.gui.mediation_ResellerAccountDashboard.gui.ResellerAccount').then(response => {
    //                 return response.ResellerAccountDashboardResellerAccountState;
    //             });
    //         }
    //     },
    {
        name: "top.gui.mediation_resellerdashboard.gui.BalanceSalesHistory.**",
        url: "/BalanceSalesHistory",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.BalanceSalesHistory').then(response => {
                return response.resellerdashboardBalanceSalesHistoryState;
            });
        }
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.AddWalletBalance.**",
        url: "/AddWalletBalance",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.AddWalletBalance').then(response => {
                return response.resellerdashboardAddWalletBalanceState;
            });
        }
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.DeductWalletBalance.**",
        url: "/DeductWalletBalance",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.DeductWalletBalance').then(response => {
                return response.resellerdashboardDeductWalletBalanceState;
            });
        }
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.TransactionHistory.**",
        url: "/TransactionHistory",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.TransactionHistory').then(response => {
                return response.resellerdashboardTransactionHistoryState;
            });
        }
    },
    {
        name: "top.gui.mediation_resellerdashboard.gui.RedeemBalanceHistory.**",
        url: "/RedeemBalanceHistory",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.RedeemBalanceHistory').then(response => {
                return response.resellerdashboardRedeemBalanceHistoryState;
            });
        }
    },


    {
        name: "top.gui.mediation_resellerdashboard.gui.AccountDebit.**",
        url: "/AccountDebit",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_resellerdashboard.gui.AccountDebit').then(response => {
                return response.resellerdashboardAccountDebitState;
            });
        }
    }
    ]
};