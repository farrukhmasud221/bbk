export const agentDashboardState = {
    states: [{
        name: "top.gui.agentdashboard",
        abstract: true,
        resolve: {
            viewsObj: ["$stateParams", 'metaDataService', '$state$', async function ($stateParams, metaDataService, $state$) {
                let viewsObj = {
                    name: "AgentDashboard",
                    id: "AgentDashboard",
                    "panelType": "TabsMenu",
                    "class": "nav nav-tabs",
                    "heading": "Global Settings",
                     
                    Params: [ 
                       // { name: "Basic Information", id: "BasicInformation", url: "/AgentDashboard/BasicInformation" },
                        { name: "Billing Information", id: "BillingInformation", url: "/AgentDashboard/BillingInformation" },
                        { name: "SMS Provider", id: "SMSProvider", url: "/AgentDashboard/SMSProvider" },
                        { name: "SIP Registrar", id: "SIPRegistrar", url: "/AgentDashboard/SIPRegistrar" },
                        // { name: "VPN Information", id: "VPNInformation", url: "/AgentDashboard/VPNInformation" },
                        // { name: "Credit Card Setting", id: "CreditCardSetting", url: "/AgentDashboard/CreditCardSetting" },
                        { name: "PayPal Settings", id: "PayPalSettings", url: "/AgentDashboard/PayPalSettings" },
                        { name: "Voucher Settings", id: "VoucherSettings", url: "/AgentDashboard/VoucherSettings" },
                        { name: "Contact Us Information", id: "ContactUsInformation", url: "/AgentDashboard/ContactUsInformation" },
                        { name: "Audio Codecs ", id: "Codecs", url: "/AgentDashboard/Codecs" },
                        { name: "Event Log Setting", id: "EventLogBitMask", url: "/AgentDashboard/EventLogBitMask" },
                        { name: "Terms & Conditions", id: "TermsAndConditions", url: "/AgentDashboard/TermsAndConditions" },
                        // { name: "FAQs", id: "FAQs", url: "/AgentDashboard/FAQs" },
                       
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
        name: "top.gui.agentdashboard.gui",
        url: "AgentDashboard",
        views: {
            "topmenu@top": {
                component: "menuComponent"
            }
        },
        //deepStateRedirect: { default: "top.gui.agentdashboard.gui.billinginformation.gui" },
        // sticky: true
    },
   // {
    //    name: "top.gui.agentdashboard.gui.basicinformation.**",
    //    url: "/BasicInformation",
     //   lazyLoad: function () {
     //       return System.import('./top.gui.mediation.agentdashboard.gui.basicinformation').then(response => {
     //           return response.agentDashboardBasicInformationState;
      //      });
      //  }
  //  },
    // {
    //     name: "top.gui.agentdashboard.gui.billinginformation.**",
    //     url: "/BillingInformation",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation.agentdashboard.gui.billinginformation').then(response => {
    //             return response.agentDashboardBillingInformationState;
    //         });
    //     }
    // },
    {
        name: "top.gui.agentdashboard.gui.smsprovider.**",
        url: "/SMSProvider",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.agentdashboard.gui.smsprovider').then(response => {
                return response.agentDashboardSMSProviderState;
            });
        }
    },
    {
        name: "top.gui.agentdashboard.gui.sipregistrar.**",
        url: "/SIPRegistrar",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.agentdashboard.gui.sipregistrar').then(response => {
                return response.agentDashboardSIPRegistrarState;
            });
        }
    },
    {
        name: "top.gui.agentdashboard.gui.vpninformation.**",
        url: "/VPNInformation",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.agentdashboard.gui.vpninformation').then(response => {
                return response.agentDashboardVPNInformationState;
            });
        }
    },
    {
        name: "top.gui.agentdashboard.gui.creditcardsetting.**",
        url: "/CreditCardSetting",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.agentdashboard.gui.creditcardsetting').then(response => {
                return response.agentDashboardCreditCardSettingState;
            });
        }
    },
    {
        name: "top.gui.agentdashboard.gui.paypalsettings.**",
        url: "/PayPalSettings",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.agentdashboard.gui.paypalsettings').then(response => {
                return response.agentDashboardPayPalSettingsState;
            });
        }
    },
    {
        name: "top.gui.agentdashboard.gui.vouchersettings.**",
        url: "/VoucherSettings",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.agentdashboard.gui.vouchersettings').then(response => {
                return response.agentDashboardVoucherSettingsState;
            });
        }
    },
    {
        name: "top.gui.agentdashboard.gui.contactusinformation.**",
        url: "/ContactUsInformation",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.agentdashboard.gui.contactusinformation').then(response => {
                return response.agentDashboardContactUsInformationState;
            });
        }
    },
    {
        name: "top.gui.agentdashboard.gui.codec.**",
        url: "/Codecs",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.agentdashboard.gui.codecs').then(response => {
                return response.agentDashboardCodecsState;
            });
        }
    },
    {
        name: "top.gui.agentdashboard.gui.eventlogbitmask.**",
        url: "/EventLogBitMask",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.agentdashboard.gui.eventlogbitmask').then(response => {
                return response.agentDashboardEventLogBitMaskState;
            });
        }
    },
    {
        name: "top.gui.agentdashboard.gui.termsandconditions.**",
        url: "/TermsAndConditions",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.agentdashboard.gui.termsandconditions').then(response => {
                return response.agentDashboardTermsAndConditionsState;
            });
        }
    },
    {
        name: "top.gui.agentdashboard.gui.faqs.**",
        url: "/FAQs",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.agentdashboard.gui.faqs').then(response => {
                return response.agentDashboardFAQsState;
            });
        }
    },
    
]};