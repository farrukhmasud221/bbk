export const accountDashboardState = {
    states: [{
        name: "top.gui.accountdashboard",
        abstract: true,
        params: { AccountID: null },
        resolve: {
            viewsObj: ["$stateParams", 'metaDataService', '$state$', async function ($stateParams, metaDataService, $state$) {
                let viewsObj = {
                    name: "AccountDashboard",
                    id: "AccountDashboard",
                    "panelType": "TabsMenu",
                    "class": "nav nav-tabs",
                    "heading": "Account Dashboard",
                    
                    Params: [
                        { name: "Basic Information", id: "BasicInformation", url: "/AccountDashboard/" + $stateParams.AccountID + "/BasicInformation" },
                        { name: "Account Identification", id: "AccountIdentification", url: "/AccountDashboard/" + $stateParams.AccountID + "/AccountIdentification" },
                        { name: "User Name", id: "UserName", url: "/AccountDashboard/" + $stateParams.AccountID + "/UserName" },
                        { name: "Email", id: "Email", url: "/AccountDashboard/" + $stateParams.AccountID + "/Email" },
                        { name: "Registrar", id: "Registrar", url: "/AccountDashboard/" + $stateParams.AccountID + "/Registrar" },
                        { name: "VPN Settings", id: "VPNSettings", url: "/AccountDashboard/" + $stateParams.AccountID + "/VPNSettings" },
                        { name: "Payment Settings", id: "PaymentSettings", url: "/AccountDashboard/" + $stateParams.AccountID + "/PaymentSettings" },
                        { name: "Trace Info", id: "TraceInfo", url: "/AccountDashboard/" + $stateParams.AccountID + "/TraceInfo" },
                        { name: "Logs", id: "Logs", url: "/AccountDashboard/" + $stateParams.AccountID + "/Logs" },
                        { name: "PayPal Payments", id: "PayPalPayments", url: "/AccountDashboard/" + $stateParams.AccountID + "/PayPalPayments" },
						{ name: "Devices", id: "Devices", url: "/AccountDashboard/" + $stateParams.AccountID + "/Devices" },
                    ]
                };
                await metaDataService.resolve(viewsObj, $stateParams, $state$);
                return viewsObj;
            }]
        },
    //     template: `
    //        <div ui-view="topmenu"></div>
    //        <div ui-view="tabContent" class="tab-content"></div>
    //    `
    },
    {
        name: "top.gui.accountdashboard.gui",
        url: "AccountDashboard/:AccountID",
        views: {
            "topmenu@top": {
                component: "menuComponent"
            }
        },
        deepStateRedirect: { default: "top.gui.accountdashboard.gui.basicinformation.gui", params: ['AccountID'] },
        // sticky: true
    },
    {
        name: "top.gui.accountdashboard.gui.basicinformation.**",
        url: "/BasicInformation",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.accountdashboard.gui.basicinformation').then(response => {
                return response.accountDashboardBasicInformationState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.accountidentification.**",
        url: "/AccountIdentification",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.accountdashboard.gui.accountidentification').then(response => {
                return response.accountDashboardAccountIdentificationState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.username.**",
        url: "/UserName",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.accountdashboard.gui.username').then(response => {
                return response.accountDashboardUserNameState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.devices.**",
        url: "/Devices",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.devices').then(response => {
                return response.accountDashboardDevicesState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.email.**",
        url: "/Email",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.accountdashboard.gui.email').then(response => {
                return response.accountDashboardEmailState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.registrar.**",
        url: "/Registrar",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.accountdashboard.gui.registrar').then(response => {
                return response.accountDashboardRegistrarState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.vpnsettings.**",
        url: "/VPNSettings",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.accountdashboard.gui.vpnsettings').then(response => {
                return response.accountDashboardVPNSettingsState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.paymentsettings.**",
        url: "/PaymentSettings",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.accountdashboard.gui.paymentsettings').then(response => {
                return response.accountDashboardPaymentSettingsState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.password.**",
        url: "/Password",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.accountdashboard.gui.password').then(response => {
                return response.accountDashboardPasswordState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.traceinfo.**",
        url: "/TraceInfo",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.traceinfo').then(response => {
                return response.privateIdentityDashboardTraceInfoState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.logs.**",
        url: "/Logs",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.logs').then(response => {
                return response.accountDashboardLogsState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.paypalpayments.**",
        url: "/PayPalPayments",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.accountdashboard.gui.paypalpayments').then(response => {
                return response.accountDashboardPayPalPaymentsState;
            });
        }
    }
]};