export const publicIdentityDashboardState = {
    states: [{
        name: "top.gui.mediation_publicidentitydashboard",
        abstract: true,
        params: { PublicIdentityID: null },
        resolve: {
            viewsObj: ["$stateParams", 'metaDataService', '$state$', async function ($stateParams, metaDataService, $state$) {
                let viewsObj = {
                    name: "PublicIdentityDashboard",
                    id: "PublicIdentityDashboard",
                    "panelType": "TabsMenu",
                    "class": "nav nav-tabs",
                    "heading": "Public Identity Dashboard",
                    
                    Params: [
                        { name: "Basic Information", id: "BasicInformation", url: "/PublicIdentityDashboard/" + $stateParams.PublicIdentityID + "/BasicInformation" },
                        { name: "Random String", id: "RandomString", url: "/PublicIdentityDashboard/" + $stateParams.PublicIdentityID + "/RandomString" },
                        { name: "Random String Approved ", id: "RandomStringApproved ", url: "/PublicIdentityDashboard/" + $stateParams.PublicIdentityID + "/RandomStringApproved" },
                        { name: "Registrar Settings", id: "RegistrarSettings", url: "/PublicIdentityDashboard/" + $stateParams.PublicIdentityID + "/RegistrarSettings" },
                        { name: "Payment Settings", id: "PaymentSettings", url: "/PublicIdentityDashboard/" + $stateParams.PublicIdentityID + "/PaymentSettings" }
                        
                    ]
                };
                await metaDataService.resolve(viewsObj, $stateParams, $state$);
                return viewsObj;
            }]
        },
        template: `
           <div ui-view="topmenu"></div>
           <div ui-view="tabContent" class="tab-content"></div>
       `
    },
    {
        name: "top.gui.mediation_publicidentitydashboard.gui",
        url: "PublicIdentityDashboard/:PublicIdentityID",
        views: {
            "topmenu@top": {
                component: "menuComponent"
            }
        },
        deepStateRedirect: { default: "top.gui.mediation_publicidentitydashboard.gui.basicinformation.gui", params: ['PublicIdentityID'] },
        // sticky: true
    },
    {
        name: "top.gui.mediation_publicidentitydashboard.gui.basicinformation.**",
        url: "/BasicInformation",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_publicidentitydashboard.gui.basicinformation').then(response => {
                return response.publicIdentityDashboardBasicInformationState;
            });
        }
    },
    {
        name: "top.gui.mediation_publicidentitydashboard.gui.randomstring.**",
        url: "/RandomString",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_publicidentitydashboard.gui.randomstring').then(response => {
                return response.publicIdentityDashboardRandomStringState;
            });
        }
    },
    {
        name: "top.gui.mediation_publicidentitydashboard.gui.randomstringapproved.**",
        url: "/RandomStringApproved",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_publicidentitydashboard.gui.randomstringapproved').then(response => {
                return response.publicIdentityDashboardRandomStringApprovedState;
            });
        }
    },
    {
        name: "top.gui.mediation_publicidentitydashboard.gui.registrarsettings.**",
        url: "/RegistrarSettings",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_publicidentitydashboard.gui.registrarsettings').then(response => {
                return response.publicIdentityDashboardRegistrarSettingsState;
            });
        }
    },
    {
        name: "top.gui.mediation_publicidentitydashboard.gui.paymentsettings.**",
        url: "/PaymentSettings",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_publicidentitydashboard.gui.paymentsettings').then(response => {
                return response.publicIdentityDashboardPaymentSettingsState;
            });
        }
    },
    
]};