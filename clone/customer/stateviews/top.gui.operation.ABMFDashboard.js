export const ABMFDashboardState = {
    states: [{
        name: "top.gui.operation_ABMFDashboard",
        abstract: true,
        params: { v_ABMFID: null },
        resolve: {
            viewsObj: ["$stateParams", 'metaDataService', '$state$', async function ($stateParams, metaDataService, $state$) {
                let viewsObj = {
                    name: "tblabmf",
                    id: "tblabmf",
                    "panelType": "TabsMenu",
                    "class": "nav nav-tabs",
                    "heading":"ABMF",

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

                        { name: "ABMF Dashboard", id: "ABMFDashboard", url: "/tblabmf/" + $stateParams.v_ABMFID + "/ABMFDashboard" },
                        { name: "Subscriber", id: "Subscriber", url: "/tblabmf/" + $stateParams.v_ABMFID + "/Subscriber" },
                       { name: "Commercial ", id: "Commercial", url: "/tblabmf/" + $stateParams.v_ABMFID + "/Commercial" },
                       { name: "Accounts", id: "Accounts", url: "/tblabmf/" + $stateParams.v_ABMFID + "/Accounts" },
                       { name: "LifeCycle", id: "LifeCycle", url: "/tblabmf/" + $stateParams.v_ABMFID + "/LifeCycle" },
                       { name: "ABMF Contacts", id: "ABMFContacts", url: "/tblabmf/" + $stateParams.v_ABMFID + "/ABMFContacts" },

                         { name: "Payments", id: "Payments", url: "/tblabmf/" + $stateParams.v_ABMFID + "/Payments" },
                         { name: "Vouchers", id: "Vouchers", url: "/tblabmf/" + $stateParams.v_ABMFID + "/Vouchers" },
                        { name: "Invoices", id: "Invoices", url: "/tblabmf/" + $stateParams.v_ABMFID + "/Invoices" },
                        { name: "Adjustments", id: "Adjustments", url: "/tblabmf/" + $stateParams.v_ABMFID + "/Adjustments" },
                        { name: "Charges", id: "Charges", url: "/tblabmf/" + $stateParams.v_ABMFID + "/Charges" },
                        { name: "ABMF Balance", id: "ABMFBalance", url: "/tblabmf/" + $stateParams.v_ABMFID + "/ABMFBalance" },
                        
                         { name: "Invoice Settings", id: "InvoiceSettings", url: "/tblabmf/" + $stateParams.v_ABMFID + "/InvoiceSettings" },
                        { name: "Invoice Receipt Adjustment", id: "InvoiceReceiptAdjustment", url: "/tblabmf/" + $stateParams.v_ABMFID + "/InvoiceReceiptAdjustment" },
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
        name: "top.gui.operation_ABMFDashboard.gui",
        url: "tblabmf/:v_ABMFID",
        views: {
            "topmenu@top": {
                component: "menuComponent"
            }
        },
        deepStateRedirect: { default: "top.gui.operation_ABMFDashboard.gui.ABMFDashboard.gui", params: ['v_ABMFID'] },
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
        name: "top.gui.operation_ABMFDashboard.gui.ABMFDashboard.**",
        url: "/ABMFDashboard",
        lazyLoad: function () {
            return System.import('./top.gui.operation_ABMFDashboard.gui.ABMFDashboard').then(response => {
                return response.ABMFDashboardABMFDashboardState;
            });
        }
    },
    {
        name: "top.gui.operation_ABMFDashboard.gui.Subscriber.**",
        url: "/Subscriber",
        lazyLoad: function () {
            return System.import('./top.gui.operation_ABMFDashboard.gui.Subscriber').then(response => {
                return response.ABMFDashboardSubscriberState;
            });
        }
    },
    {
        name: "top.gui.operation_ABMFDashboard.gui.Commercial.**",
        url: "/Commercial",
        lazyLoad: function () {
            return System.import('./top.gui.operation_ABMFDashboard.gui.Commercial').then(response => {
                return response.ABMFDashboardCommercialState;
            });
        }
    },
    {  
        name: "top.gui.operation_ABMFDashboard.gui.Accounts.**",
        url: "/Accounts",
        lazyLoad: function () {
            return System.import('./top.gui.operation_ABMFDashboard.gui.Accounts').then(response => {
                return response.ABMFDashboardAccountsState;
            });
        }
    },
    {
        name: "top.gui.operation_ABMFDashboard.gui.LifeCycle.**",
        url: "/LifeCycle",
        lazyLoad: function () {
            return System.import('./top.gui.operation_ABMFDashboard.gui.LifeCycle').then(response => {
                return response.ABMFDashboardLifeCycleState;
            });
        }
    },
    {
        name: "top.gui.operation_ABMFDashboard.gui.ABMFContacts.**",
        url: "/ABMFContacts",
        lazyLoad: function () {
            return System.import('./top.gui.operation_ABMFDashboard.gui.ABMFContacts').then(response => {
                return response.ABMFDashboardABMFContactsState;
            });
        }
    },

    {
        name: "top.gui.operation_ABMFDashboard.gui.Payments.**",
        url: "/Payments",
        lazyLoad: function () {
            return System.import('./top.gui.operation_ABMFDashboard.gui.Payments').then(response => {
                return response.ABMFDashboardPaymentsState;
            });
        }
    },
    {
        name: "top.gui.operation_ABMFDashboard.gui.Vouchers.**",
        url: "/Vouchers",
        lazyLoad: function () {
            return System.import('./top.gui.operation_ABMFDashboard.gui.Vouchers').then(response => {
                return response.ABMFDashboardVouchersState;
            });
        }
    },
    {
        name: "top.gui.operation_ABMFDashboard.gui.Invoices.**",
        url: "/Invoices",
        lazyLoad: function () {
            return System.import('./top.gui.operation_ABMFDashboard.gui.Invoices').then(response => {
                return response.ABMFDashboardInvoicesState;
            });
        }
    },
    {
        name: "top.gui.operation_ABMFDashboard.gui.Adjustments.**",
        url: "/Adjustments",
        lazyLoad: function () {
            return System.import('./top.gui.operation_ABMFDashboard.gui.Adjustments').then(response => {

                return response.ABMFDashboardAdjustmentsState;
            });
        }
    },
    {
        name: "top.gui.operation_ABMFDashboard.gui.Charges.**",
        url: "/Charges",
        lazyLoad: function () {
            return System.import('./top.gui.operation_ABMFDashboard.gui.Charges').then(response => {
                return response.ABMFDashboardChargesState;
            });
        }
    },
    {
        name: "top.gui.operation_ABMFDashboard.gui.ABMFBalance.**",
        url: "/ABMFBalance",
        lazyLoad: function () {
            return System.import('./top.gui.operation_ABMFDashboard.gui.ABMFBalance').then(response => {
                return response.ABMFDashboardABMFBalanceState;
            });
        }
    },
    {
        name: "top.gui.operation_ABMFDashboard.gui.InvoiceSettings.**",
        url: "/InvoiceSettings",
        lazyLoad: function () {
            return System.import('./top.gui.operation_ABMFDashboard.gui.InvoiceSettings').then(response => {
                return response.ABMFDashboardInvoiceSettingsState;
            });
        }
    },
    {
        name: "top.gui.operation_ABMFDashboard.gui.InvoiceReceiptAdjustment.**",
        url: "/InvoiceReceiptAdjustment",
        lazyLoad: function () {
            return System.import('./top.gui.operation_ABMFDashboard.gui.InvoiceReceiptAdjustment').then(response => {
                return response.ABMFDashboardInvoiceReceiptAdjustmentState;
            });
        }
    },
    // {
    //     name: "top.gui.mediation_resellerdashboard.gui.logs.**",
    //     url: "/Logs",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_resellerdashboard.gui.logs').then(response => {
    //             return response.resellerdashboardLogsState;
    //         });
    //     }
    // },
    // {
    //     name: "top.gui.mediation_resellerdashboard.gui.PaymentHistory.**",
    //     url: "/PaymentHistory",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_resellerdashboard.gui.PaymentHistory').then(response => {
    //             return response.resellerdashboardPaymentHistoryState;
    //         });
    //     }
    // },
    // {
    //     name: "top.gui.mediation_resellerdashboard.gui.TransferBalanceHistory.**",
    //     url: "/TransferBalanceHistory",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_resellerdashboard.gui.TransferBalanceHistory').then(response => {
    //             return response.resellerdashboardTransferBalanceHistoryState;
    //         });
    //     }
    // },
    // {
    //     name: "top.gui.mediation_resellerdashboard.gui.TransactionLedgerHistory.**",
    //     url: "/TransactionLedgerHistory",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_resellerdashboard.gui.TransactionLedgerHistory').then(response => {
    //             return response.resellerdashboardTransactionLedgerHistoryState;
    //         });
    //     }
    // },

    // {
    //     name: "top.gui.mediation_resellerdashboard.gui.AccountCredit.**",
    //     url: "/AccountCredit",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_resellerdashboard.gui.AccountCredit').then(response => {
    //             return response.resellerdashboardAccountCreditState;
    //         });
    //     }
    // },

    // {
    //     name: "top.gui.mediation_resellerdashboard.gui.ChangePassword.**",
    //     url: "/ChangePassword",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_resellerdashboard.gui.ChangePassword').then(response => {
    //             return response.resellerdashboardChangePasswordState;
    //         });
    //     }
    // },
    // //     {
    // //         name: "top.gui.mediation_ResellerAccountDashboard.gui.ResellerAccount.**",
    // //         url: "/ResellerAccount",
    // //         lazyLoad: function () {
    // //             return System.import('./top.gui.mediation_ResellerAccountDashboard.gui.ResellerAccount').then(response => {
    // //                 return response.ResellerAccountDashboardResellerAccountState;
    // //             });
    // //         }
    // //     },
    // {
    //     name: "top.gui.mediation_resellerdashboard.gui.BalanceSalesHistory.**",
    //     url: "/BalanceSalesHistory",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_resellerdashboard.gui.BalanceSalesHistory').then(response => {
    //             return response.resellerdashboardBalanceSalesHistoryState;
    //         });
    //     }
    // },
    // {
    //     name: "top.gui.mediation_resellerdashboard.gui.AddWalletBalance.**",
    //     url: "/AddWalletBalance",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_resellerdashboard.gui.AddWalletBalance').then(response => {
    //             return response.resellerdashboardAddWalletBalanceState;
    //         });
    //     }
    // },
    // {
    //     name: "top.gui.mediation_resellerdashboard.gui.DeductWalletBalance.**",
    //     url: "/DeductWalletBalance",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_resellerdashboard.gui.DeductWalletBalance').then(response => {
    //             return response.resellerdashboardDeductWalletBalanceState;
    //         });
    //     }
    // },
    // {
    //     name: "top.gui.mediation_resellerdashboard.gui.TransactionHistory.**",
    //     url: "/TransactionHistory",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_resellerdashboard.gui.TransactionHistory').then(response => {
    //             return response.resellerdashboardTransactionHistoryState;
    //         });
    //     }
    // },
    // {
    //     name: "top.gui.mediation_resellerdashboard.gui.RedeemBalanceHistory.**",
    //     url: "/RedeemBalanceHistory",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_resellerdashboard.gui.RedeemBalanceHistory').then(response => {
    //             return response.resellerdashboardRedeemBalanceHistoryState;
    //         });
    //     }
    // },


    // {
    //     name: "top.gui.mediation_resellerdashboard.gui.AccountDebit.**",
    //     url: "/AccountDebit",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_resellerdashboard.gui.AccountDebit').then(response => {
    //             return response.resellerdashboardAccountDebitState;
    //         });
    //     }
    // }
    ]
};