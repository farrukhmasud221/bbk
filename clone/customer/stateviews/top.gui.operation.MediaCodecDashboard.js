export const MediaCodecDashboardState = {
    states: [{
        name: "top.gui.operation_MediaCodecDashboard",
        abstract: true,
        params: { v_MediaCodecID: null },
        resolve: {
            viewsObj: ["$stateParams", 'metaDataService', '$state$', async function ($stateParams, metaDataService, $state$) {
                let viewsObj = {
                    name: "tblmedia",
                    id: "tblmedia",
                    "panelType": "TabsMenu",
                    "class": "nav nav-tabs",
                    "heading":"Media codecs",

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

                        { name: "Basic Information", id: "basic Information", url: "/tblmedia/" + $stateParams.v_MediaCodecID + "/basic" },
                        { name: "Concurrent Sessions", id: "Concurrent Sessions", url: "/tblmedia/" + $stateParams.v_MediaCodecID + "/ConcurrentSessions" },
                        { name: "Access SBC locked", id: "AccessSBCBlocked", url: "/tblmedia/" + $stateParams.v_MediaCodecID + "/AccessSBCBlocked" },
                         { name: "Codec Priority", id: "CodecPriority", url: "/tblmedia/" + $stateParams.v_MediaCodecID + "/CodecPriority" },
                        // { name: "Advance", id: "Advance", url: "/siptrunks/" + $stateParams.SIPTrunkID + "/Advance" },
                        // { name: "charges", id: "charges", url: "/siptrunks/" + $stateParams.SIPTrunkID + "/charges" },

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
        name: "top.gui.operation_MediaCodecDashboard.gui",
        url: "tblmedia/:v_MediaCodecID",
        views: {
            "topmenu@top": {
                component: "menuComponent"
            }
        },
        deepStateRedirect: { default: "top.gui.operation_MediaCodecDashboard.gui.basic.gui", params: ['v_MediaCodecsID'] },
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
        name: "top.gui.operation_MediaCodecDashboard.gui.basic.**",
        url: "/basic",
        lazyLoad: function () {
            return System.import('./top.gui.operation_MediaCodecDashboard.gui.basic').then(response => {
                return response.MediaCodecDashboardbasicState;
            });
        }
    },
    {
        name: "top.gui.operation_MediaCodecDashboard.gui.ConcurrentSessions.**",
        url: "/ConcurrentSessions",
        lazyLoad: function () {
            return System.import('./top.gui.operation_MediaCodecDashboard.gui.ConcurrentSessions').then(response => {
                return response.MediaCodecDashboardConcurrentSessionsState;
            });
        }
    },


    {
        name: "top.gui.operation_MediaCodecDashboard.gui.AccessSBCBlocked.**",
        url: "/AccessSBCBlocked",
        lazyLoad: function () {
            return System.import('./top.gui.operation_MediaCodecDashboard.gui.AccessSBCBlocked').then(response => {
                return response.MediaCodecDashboardAccessSBCBlockedState;
            });
        }
    },
    {
        name: "top.gui.operation_MediaCodecDashboard.gui.CodecPriority.**",
        url: "/CodecPriority",
        lazyLoad: function () {
            return System.import('./top.gui.operation_MediaCodecDashboard.gui.CodecPriority').then(response => {
                return response.MediaCodecDashboardCodecPriorityState;
            });
        }
    },
]
};