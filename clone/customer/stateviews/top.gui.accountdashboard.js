export const accountDashboardState = {
    states: [{
        name: "top.gui.accountdashboard",
        abstract: true,
        params: { AccountID: null },
        resolve: {
            viewsObj: ["$stateParams", 'metaDataService', '$state$', async function ($stateParams, metaDataService, $state$) {
                let viewsObj = {
                    name: "AccountDashbaord",
                    id: "AccountDashbaord",
                    "panelType": "TabsMenu",
                    "class": "nav nav-tabs",
                    heading: "Account Dashboard",
                    "Account Dashboard": {
                        "panelType": "DashBoardHeading",
                        "Params": [
                            { "ViewParamId": 73850, "name": "v_CustomerName", "ctype": "label", "paramtype": "varchar", "label": "v_CustomerName", "direction": "out", "validator": "", "width": "*" },
                            { "ViewParamId": 73849, "name": "v_UserName", "ctype": "label", "paramtype": "varchar", "label": "v_UserName", "direction": "out", "validator": "", "width": "*" },
                            { "ViewParamId": 73852, "name": "v_SubscriberStateName", "ctype": "label", "paramtype": "varchar", "label": "v_SubscriberStateName", "direction": "out", "validator": "", "width": "*" },
                            { "ViewParamId": 73852, "name": "v_ABMFID", "ctype": "label", "paramtype": "bigint", "label": "v_ABMFID", "direction": "out", "validator": "", "width": "*" },
                            { "ViewParamId": 73852, "name": "v_CustomerID", "ctype": "label", "paramtype": "bigint", "label": "v_CustomerID", "direction": "out", "validator": "", "width": "*" },
                        ],
                        "operationId": "GU_AccNoHeadingInfo",
                        "mappings": {
                            "v_AccountID": "AccountID"
                        }
                    },
                    Params: [
                        { name: "Basic Info", id: "BasicInfo", url: "/AccountDashboard/" + $stateParams.AccountID + "/BasicInfo" },
                        // { name: "Activate Billing", id: "ActivateBilling", url: "/AccountDashboard/" + $stateParams.AccountID + "/ActivateBilling" },
                        { name: "Contact Detail", id: "ContactDetail", url: "/AccountDashboard/" + $stateParams.AccountID + "/ContactDetail" },
                        { name: "Customer", id: "Customer", url: "" },
                        { name: "OTC", id: "OTC", url: "/AccountDashboard/" + $stateParams.AccountID + "/OTC" },
                        { name: "Package", id: "Package", url: "/AccountDashboard/" + $stateParams.AccountID + "/Package" },
                        { name: "VAS", id: "VAS", url: "/AccountDashboard/" + $stateParams.AccountID + "/VAS" },
                        { name: "Hardware Detail", id: "HardwareDetail", url: "/AccountDashboard/" + $stateParams.AccountID + "/HardwareDetail" },
                        // { name: "Selfcare Settings", id: "SelfcareSettings", url: "/AccountDashboard/" + $stateParams.AccountID + "/SelfcareSettings" },
                        { name: "Finance", id: "Finance", url: ""},
                        { name: "Trouble Tickets", id: "TroubleTickets", url: "/AccountDashboard/" + $stateParams.AccountID + "/TroubleTickets" },
                        // { name: "Service Identification", id: "ServiceIdentification", url: "/AccountDashboard/" + $stateParams.AccountID + "/ServiceIdentification" },
                        { name: "Bill Cycle Usage", id: "BillCycleUsage", url: "/AccountDashboard/" + $stateParams.AccountID + "/BillCycleUsage" },
                        { name: "Customer Documents", id: "CustomerDocuments", url: "/AccountDashboard/" + + $stateParams.AccountID + "/CustomerDocuments" }
                        // { name: "Active Session", id: "ActiveSession", url: "/AccountDashboard/" + $stateParams.AccountID + "/ActiveSession" },
                        // { name: "Authorization Failure", id: "AuthorizationFailure", url: "/AccountDashboard/" + $stateParams.AccountID + "/AuthorizationFailure" },
                        // { name: "CDRs", id: "CDRs", url: "/AccountDashboard/" + $stateParams.AccountID + "/CDRs" },
                        // { name: "Alert Settings", id: "AlertSettings", url: "/AccountDashboard/" + $stateParams.AccountID + "/AlertSettings" },
                        // { name: "Alerts History", id: "AlertsHistory", url: "/AccountDashboard/" + $stateParams.AccountID + "/AlertsHistory" },

                    ]
                };
                await metaDataService.resolve(viewsObj, $stateParams, $state$);
                viewsObj.Params[2].url = "/CustomerDashboard/" + viewsObj["Account Dashboard"].Params[4].value;
                viewsObj.Params[7].url = "/ABMFDashboard/" + viewsObj["Account Dashboard"].Params[3].value;
                return viewsObj;
            }]
        },
        // template: `
        //            <div ui-view="topmenu"></div>
        //            <div ui-view="tabContent" class="tab-content"></div>
        //        `
    },
    {
        name: "top.gui.accountdashboard.gui",
        url: "AccountDashboard/:AccountID",
        views: {
            "topmenu@top": {
                component: "menuComponent"
            }
        },
        deepStateRedirect: {
            default: "top.gui.accountdashboard.gui.basicinfo.gui", params: ['AccountID']
        },

        // sticky: true
    },
    {
        name: "top.gui.accountdashboard.gui.basicinfo.**",
        url: "/BasicInfo",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.basicinfo').then(response => {
                return response.accountDashboardBasicInfoState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.abmf.**",
        url: "/ABMF",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.abmf').then(response => {
                return response.accountDashboardABMFState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.customer.**",
        url: "/Customer",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.customer').then(response => {
                return response.accountDashboardCustomerState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.package.**",
        url: "/Package",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.package').then(response => {
                return response.accountDashboardPackageState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.activatebilling.**",
        url: "/ActivateBilling",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.activatebilling').then(response => {
                return response.accountDashboardActivateBillingState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.vas.**",
        url: "/VAS",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.vas').then(response => {
                return response.accountDashboardVASState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.serviceidentification.**",
        url: "/ServiceIdentification",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.serviceidentification').then(response => {
                return response.accountDashboardServiceIdentificationState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.hardwaredetail.**",
        url: "/HardwareDetail",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.hardwaredetail').then(response => {
                return response.accountDashboardHardwareDetailState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.cdrs.**",
        url: "/CDRs",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.cdrs').then(response => {
                return response.accountDashboardCDRsState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.billcycleusage.**",
        url: "/BillCycleUsage",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.billcycleusage').then(response => {
                return response.accountDashboardBillCycleUsageState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.activesession.**",
        url: "/ActiveSession",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.activesession').then(response => {
                return response.accountDashboardActiveSessionState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.authorizationfailure.**",
        url: "/AuthorizationFailure",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.authorizationfailure').then(response => {
                return response.accountDashboardAuthorizationFailureState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.troubletickets.**",
        url: "/TroubleTickets",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.troubletickets').then(response => {
                return response.accountDashboardTroubleTicketsState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.selfcaresettings.**",
        url: "/SelfcareSettings",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.selfcaresettings').then(response => {
                return response.accountDashboardSelfcareSettingsState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.contactdetail.**",
        url: "/ContactDetail",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.contactdetail').then(response => {
                return response.accountDashboardContactDetailState;
            });
        }
    },
    {
        name: "top.gui.accountdashboard.gui.customerdocuments.**",
        url: "/CustomerDocuments",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.customerdocuments').then(response => {
                return response;
            });
        }
    },
    // {
    //     name: "top.gui.accountdashboard.gui.alertsettings.**",
    //     url: "/AlertSettings",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.accountdashboard.gui.alertsettings').then(response => {
    //             return response.accountDashboardAlertSettingsState;
    //         });
    //     }
    // },
    // {
    //     name: "top.gui.accountdashboard.gui.alertshistory.**",
    //     url: "/AlertsHistory",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.accountdashboard.gui.alertshistory').then(response => {
    //             return response.accountDashboardAlertsHistoryState;
    //         });
    //     }
    // },
    {
        name: "top.gui.accountdashboard.gui.otc.**",
        url: "/OTC",
        lazyLoad: function () {
            return System.import('./top.gui.accountdashboard.gui.otc').then(response => {
                return response.accountDashboardOTCState;
            });
        }
    }]

};