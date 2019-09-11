export const privateIdentityDashboardState = {
    states: [{
        name: "top.gui.mediation_privateidentitydashboard",
        abstract: true,
        params: { AccNoPrivateIdentityID: null },
        resolve: {
            viewsObj: ["$stateParams", 'metaDataService', '$state$', async function ($stateParams, metaDataService, $state$) {
                let viewsObj = {
                    name: "PrivateIdentityDashboard",
                    id: "PrivateIdentityDashboard",
                    "panelType": "TabsMenu",
                    "class": "nav nav-tabs",
                    "heading": "Account Dashboard",

                    Params: [
                        { name: "Basic Information", id: "BasicInformation", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/BasicInformation" },
                        { name: "Login Status", id: "getPrivateIdentityRegistrationStatus", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/getPrivateIdentityRegistrationStatus" },
                        { name: "Account Info", id: "GetAccountInfo", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/GetAccountInfo" },
                        { name: "Payments List", id: "getPaymentsList", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/getPaymentsList" },
                        { name: "Payment By Voucher", id: "PaymentByVoucher", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/PaymentByVoucher" },
                        { name: "CDRs", id: "CDRs", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/Accountcdrs" },
                        { name: "Registrar Settings", id: "RegistrarSettings", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/RegistrarSettings" },
                        { name: "Audio Codec", id: "AudioCodec", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/AudioCodec" },                        // { name: "Payment Settings", id: "PaymentSettings", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/PaymentSettings" },
                        { name: "Trace Log Settings", id: "TraceInfo", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/TraceInfo" },
                        { name: "Trace Logs", id: "Logs", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/Logs" },
                        { name: "Account Credit", id: "AccountCredit", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/AccountCredit" },
                        { name: "Account Debit", id: "AccountDebit", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/AccountDebit" },
                        { name: "Change Password", id: "ChangePassword", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/ChangePassword" },
                        { name: "Convert to Reseller Account", id: "ResellerAccount", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/ResellerAccount" },
                        //{ name: "Add Wallet Balance", id: "AddWalletBalance", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/AddWalletBalance" },
                        //{ name: "Deduct Wallet Balance", id: "DeductWalletBalance", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/DeductWalletBalance" },
                        // { name: "Wallet Balance Transfer ", id: "TransactionHistory", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/TransactionHistory" },
			// { name: "Balance Transfer History", id: "TransferBalanceHistory", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/TransferBalanceHistory" },                   
 			//{ name: "Wallet Payment History", id: "PaymentHistory", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/PaymentHistory" },
			//{ name: "Balance Sales History", id: "BalanceSalesHistory", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/BalanceSalesHistory" },
			//{ name: "Transaction Ledger History", id: "TransactionLedgerHistory", url: "/PrivateIdentityDashboard/" + $stateParams.AccNoPrivateIdentityID + "/TransactionLedgerHistory" }

                       
]
                };
                await metaDataService.resolve(viewsObj, $stateParams, $state$);
                console.log("helllo angular");
                console.log("myview",viewsObj.Params[15]);
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
        name: "top.gui.mediation_privateidentitydashboard.gui",
        url: "PrivateIdentityDashboard/:AccNoPrivateIdentityID",
        views: {
            "topmenu@top": {
                component: "menuComponent"
            }
        },
        deepStateRedirect: { default: "top.gui.mediation_privateidentitydashboard.gui.basicinformation.gui", params: ['AccNoPrivateIdentityID'] },
        // sticky: true
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.basicinformation.**",
        url: "/BasicInformation",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.basicinformation').then(response => {
                return response.privateIdentityDashboardBasicInformationState;
            });
        }
    },
    // {
    //     name: "top.gui.mediation_privateidentitydashboard.gui.password.**",
    //     url: "/Password",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_privateidentitydashboard.gui.password').then(response => {
    //             return response.privateIdentityDashboardPasswordState;
    //         });
    //     }
    // },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.registrarsettings.**",
        url: "/RegistrarSettings",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.registrarsettings').then(response => {
                return response.privateIdentityDashboardRegistrarSettingsState;
            });
        }
    },
   {
        name: "top.gui.mediation_privateidentitydashboard.gui.AudioCodec.**",
        url: "/AudioCodec",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.AudioCodec').then(response => {
                return response.privateIdentityDashboardAudioCodecState;
            });
        }
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.vpnsettings.**",
        url: "/VPNSettings",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.vpnsettings').then(response => {
                return response.privateIdentityDashboardVPNSettingsState;
            });
        }
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.paymentsettings.**",
        url: "/PaymentSettings",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.paymentsettings').then(response => {
                return response.privateIdentityDashboardPaymentSettingsState;
            });
        }
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.traceinfo.**",
        url: "/TraceInfo",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.traceinfo').then(response => {
                return response.privateIdentityDashboardTraceInfoState;
            });
        }
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.getaccountinfo.**",
        url: "/GetAccountInfo",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.privateidentitydashboard.gui.getaccountinfo').then(response => {

                // alert(JSON.stringify(response));
                return response.privateidentityDashboardGetAccountinfoState;
            });
        }
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.getPrivateIdentityRegistrationStatus.**",
        url: "/getPrivateIdentityRegistrationStatus",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.privateidentitydashboard.gui.getPrivateIdentityRegistrationStatus').then(response => {
                return response.privateidentityDashboardgetPrivateIdentityRegistrationStatusState;
            });
        }
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.accountcdrs.**",
        url: "/Accountcdrs",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.accountcdrs').then(response => {
                return response.privateidentityDashboardAccountcdrsState;
            });
        }
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.getPaymentsList.**",
        url: "/getPaymentsList",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.getPaymentsList').then(response => {
                return response.privateidentityDashboardgetPaymentsList;
            });
        }
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.paymentbyvoucher.**",
        url: "/PaymentByVoucher",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.paymentbyvoucher').then(response => {
                return response.privateIdentityDashboardPaymentByVoucherState;
            });
        }
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.logs.**",
        url: "/Logs",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.logs').then(response => {
                return response.privateIdentityDashboardLogsState;
            });
        }
    },
	// {
    //     name: "top.gui.mediation_privateidentitydashboard.gui.PaymentHistory.**",
    //     url: "/PaymentHistory",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_privateidentitydashboard.gui.PaymentHistory').then(response => {
    //             return response.privateIdentityDashboardPaymentHistoryState;
    //         });
    //     }
    // },
//  {
//         name: "top.gui.mediation_privateidentitydashboard.gui.TransferBalanceHistory.**",
//         url: "/TransferBalanceHistory",
//         lazyLoad: function () {
//             return System.import('./top.gui.mediation_privateidentitydashboard.gui.TransferBalanceHistory').then(response => {
//                 return response.privateIdentityDashboardTransferBalanceHistoryState;
//             });
//         }
//     },
	// {
    //     name: "top.gui.mediation_privateidentitydashboard.gui.TransactionLedgerHistory.**",
    //     url: "/TransactionLedgerHistory",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_privateidentitydashboard.gui.TransactionLedgerHistory').then(response => {
    //             return response.privateIdentityDashboardTransactionLedgerHistoryState;
    //         });
    //     }
    // },

    {
        name: "top.gui.mediation_privateidentitydashboard.gui.AccountCredit.**",
        url: "/AccountCredit",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.AccountCredit').then(response => {
                return response.privateIdentityDashboardAccountCreditState;
            });
        }
    },
	
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.ChangePassword.**",
        url: "/ChangePassword",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.ChangePassword').then(response => {
                return response.privateIdentityDashboardChangePasswordState;
            });
        }
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.ResellerAccount.**",
        url: "/ResellerAccount",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.ResellerAccount').then(response => {
                return response.privateIdentityDashboardResellerAccountState;
            });
        }
    },
	//    {
    //     name: "top.gui.mediation_privateidentitydashboard.gui.BalanceSalesHistory.**",
    //     url: "/BalanceSalesHistory",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_privateidentitydashboard.gui.BalanceSalesHistory').then(response => {
    //             return response.privateIdentityDashboardBalanceSalesHistoryState;
    //         });
    //     }
    // },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.AddWalletBalance.**",
        url: "/AddWalletBalance",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.AddWalletBalance').then(response => {
                return response.privateIdentityDashboardAddWalletBalanceState;
            });
        }
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.DeductWalletBalance.**",
        url: "/DeductWalletBalance",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.DeductWalletBalance').then(response => {
                return response.privateIdentityDashboardDeductWalletBalanceState;
            });
        }
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.gui.TransactionHistory.**",
        url: "/TransactionHistory",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.TransactionHistory').then(response => {
                return response.privateIdentityDashboardTransactionHistoryState;
            });
        }
    },


    {
        name: "top.gui.mediation_privateidentitydashboard.gui.AccountDebit.**",
        url: "/AccountDebit",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_privateidentitydashboard.gui.AccountDebit').then(response => {
                return response.privateIdentityDashboardAccountDebitState;
            });
        }
    }
    ]
};