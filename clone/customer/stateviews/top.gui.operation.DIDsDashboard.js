export const DIDsDashboardState = {
    states: [{
        name: "top.gui.operation_DIDsDashboard",
        abstract: true,
        params: {IDID:null},
        resolve: {
            viewsObj: ["$stateParams", 'metaDataService', '$state$', async function ($stateParams, metaDataService, $state$) {
                let viewsObj = {
                    name: "tbldids",
                    id: "tbldids",
                    "panelType": "TabsMenu",
                    "class": "nav nav-tabs",
                    "heading":"DIDs",

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

                        { name: "Basic Information", id: "BasicInformation", url: "/tbldids/" + $stateParams.DIDID + "/Basic" },
                         { name: "Provider Trunk", id: "ProviderTrunk", url: "/tbldids/" + $stateParams.DIDID + "/ProviderTrunk" },
                         { name: "DID Forwarding Number", id: "DIDForwardingNumber", url: "/tbldids/" + $stateParams.DIDID + "/DIDForwardingNumber" },
                         { name: "Purchase Group", id: "PurchaseGroup", url: "/tbldids/" + $stateParams.DIDID + "/PurchaseGroup" },
                        { name: "SIPTrunk Dialing Extension", id: "SIPTrunkDialingExtension", url: "/tbldids/" + $stateParams.DIDID + "/SIPTrunkDialingExtension" },
                        { name: "Sale Group", id: "SaleGroup", url: "/tbldids/" + $stateParams.DIDID + "/SaleGroup" },

                        { name: "CLI Rules", id: "CLIRules", url: "/tbldids/" + $stateParams.DIDID + "/CLIRules" },
                        { name: "DID Pop Name", id: "didPopName", url: "/tbldids/" + $stateParams.DIDID + "/didPopName" },
                        { name: "Check Master SIP Trunk DID", id: "CheckMasterSIPTrunkDID", url: "/tbldids/" + $stateParams.DIDID + "/CheckMasterSIPTrunkDID" },
                        { name: "AccNo Charge Head Line Rent", id: "AccNoChargeHeadLineRent", url: "/tbldids/" + $stateParams.DIDID + "/AccNoChargeHeadLineRent" },
                       { name: "Status", id: "Status", url: "/tbldids/" + $stateParams.DIDID + "/Status" },
                       { name: "Service", id: "Service", url: "/tbldids/" + $stateParams.DIDID + "/Service" },


                       { name: "Hunt Group ", id: "HuntGroup", url: "/tbldids/" + $stateParams.DIDID + "/HuntGroup" },
                       { name: "User Name Password", id: "UserNamePassword", url: "/tbldids/" + $stateParams.DIDID + "/UserNamePassword" },
                       { name: "Domain Name", id: "DomainName", url: "/tbldids/" + $stateParams.DIDID + "/DomainName" },
                      { name: "DID SIP Trunk", id: "DIDSIPTrunk", url: "/tbldids/" + $stateParams.DIDID + "/DIDSIPTrunk" },
                      { name: "DID To AccNo Service Offering", id: "DIDToAccNoServiceOffering", url: "/tbldids/" + $stateParams.DIDID + "/DIDToAccNoServiceOffering" },

                      { name: "Outgoing Calls  ", id: "OutgoingCalls", url: "/tbldids/" + $stateParams.DIDID + "/OutgoingCalls" },
                       { name: "Incomming Calls", id: "IncommingCalls", url: "/tbldids/" + $stateParams.DIDID + "/IncommingCalls" },
                       { name: "Restrict White List UA", id: "RestrictWhiteListUA", url: "/tbldids/" + $stateParams.DIDID + "/RestrictWhiteListUA" },
                       { name: "Incomming Tech Prefix", id: "IncommingTechPrefix", url: "/tbldids/" + $stateParams.DIDID + "/IncommingTechPrefix" },
                      { name: "Schedule Calls", id: "ScheduleCalls", url: "/tbldids/" + $stateParams.DIDID + "/ScheduleCalls" },
                      { name: "ACDs", id: "ACDs", url: "/tbldids/" + $stateParams.DIDID + "/ACDs" },

                      { name: "Call Recording Criteria ", id: "CallRecordingCriteria", url: "/tbldids/" + $stateParams.DIDID + "/CallRecordingCriteria" },
                       { name: "Dialout Campaigns", id: "DialoutCampaigns", url: "/tbldids/" + $stateParams.DIDID + "/DialoutCampaigns" },
                       { name: "DID Based IVRs", id: "DIDBasedIVRs", url: "/tbldids/" + $stateParams.DIDID + "/DIDBasedIVRs" },
                       { name: "DID DOW IVRs", id: "DIDDOWIVRs", url: "/tbldids/" + $stateParams.DIDID + "/DIDDOWIVRs" },
                      { name: "DID Header Rewrite Rules", id: "DIDHeaderRewriteRules", url: "/tbldids/" + $stateParams.DIDID + "/DIDHeaderRewriteRules" },
                      { name: "DID Incoming Block Addresses", id: "DIDIncomingBlockAddresses", url: "/tbldids/" + $stateParams.DIDID + "/DIDIncomingBlockAddresses" },

                     

                      { name: "DID Logins  ", id: "DID Logins", url: "/tbldids/" + $stateParams.DIDID + "/DIDLogins" },
                      { name: "DID Outgoing Block Address", id: "DID Outgoing Block Address", url: "/tbldids/" + $stateParams.DIDID + "/DIDOutgoingBlockAddress" },
                      { name: "DID Profiles", id: "DID Profiles", url: "/tbldids/" + $stateParams.DIDID + "/DIDProfiles" },
                      { name: "DID To DDOW IVRs", id: "DID To DDOW IVRs", url: "/tbldids/" + $stateParams.DIDID + "/DIDToDDOWIVRs" },
                     { name: "DID To D IVRs", id: "DID To D IVRs", url: "/tbldids/" + $stateParams.DIDID + "/DIDToDIVRs" },
                     { name: "DID UAN Number Mappings", id: "DID UAN Number Mappings", url: "/tbldids/" + $stateParams.DIDID + "/DIDUANNumberMappings" },

                     { name: "White List Numbers ", id: "White List Numbers", url: "/tbldids/" + $stateParams.DIDID + "/WhiteListNumbers" },
                      { name: "White List User Agents", id: "White List User Agents", url: "/tbldids/" + $stateParams.DIDID + "/WhiteListUserAgents" },
                      { name: "Voicemail Settings", id: "Voicemail Settings", url: "/tbldids/" + $stateParams.DIDID + "/VoicemailSettings" },
                     



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
        name: "top.gui.operation_DIDsDashboard.gui",
        url: "tbldids/:DIDID",
        views: {
            "topmenu@top": {
                component: "menuComponent"
            }
        },
        deepStateRedirect: { default: "top.gui.operation_DIDsDashboard.gui.Basic.gui", params: ['DIDID'] },
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
        name: "top.gui.operation_DIDsDashboard.gui.Basic.**",
        url: "/Basic",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.Basic').then(response => {
                return response.DIDsDashboardBasicState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.didPopName.**",
        url: "/didPopName",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.didPopName').then(response => {
                return response.DIDsDashboarddidPopNameState;
            });
        }
    },


    {
        name: "top.gui.operation_DIDsDashboard.gui.DIDForwardingNumber.**",
        url: "/DIDForwardingNumber",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DIDForwardingNumber').then(response => {
                return response.DIDsDashboardDIDForwardingNumberState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.PurchaseGroup.**",
        url: "/PurchaseGroup",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.PurchaseGroup').then(response => {
                return response.DIDsDashboardPurchaseGroupState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.SIPTrunkDialingExtension.**",
        url: "/SIPTrunkDialingExtension",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.SIPTrunkDialingExtension').then(response => {
                return response.DIDsDashboardSIPTrunkDialingExtensionState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.SaleGroup.**",
        url: "/SaleGroup",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.SaleGroup').then(response => {
                return response.DIDsDashboardSaleGroupState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.CLIRules.**",
        url: "/CLIRules",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.CLIRules').then(response => {
                return response.DIDsDashboardCLIRulesState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.CheckMasterSIPTrunkDID.**",
        url: "/CheckMasterSIPTrunkDID",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.CheckMasterSIPTrunkDID').then(response => {
                return response.DIDsDashboardCheckMasterSIPTrunkDIDState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.AccNoChargeHeadLineRent.**",
        url: "/AccNoChargeHeadLineRent",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.AccNoChargeHeadLineRent').then(response => {
                return response.DIDsDashboardAccNoChargeHeadLineRentState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.Status.**",
        url: "/Status",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.Status').then(response => {
                return response.DIDsDashboardStatusState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.Service.**",
        url: "/Service",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.Service').then(response => {
                return response.DIDsDashboardServiceState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.ProviderTrunk.**",
        url: "/ProviderTrunk",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.ProviderTrunk').then(response => {
                return response.DIDsDashboardProviderTrunkState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.HuntGroup.**",
        url: "/HuntGroup",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.HuntGroup').then(response => {
                return response.DIDsDashboardHuntGroupState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.UserNamePassword.**",
        url: "/UserNamePassword",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.UserNamePassword').then(response => {
                return response.DIDsDashboardUserNamePasswordState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.DomainName.**",
        url: "/DomainName",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DomainName').then(response => {
                return response.DIDsDashboardDomainNameState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.Region.**",
        url: "/Region",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.Region').then(response => {
                return response.DIDsDashboardRegionState;
            });
        }
    },
  


    {
        name: "top.gui.operation_DIDsDashboard.gui.DIDSIPTrunk.**",
        url: "/DIDSIPTrunk",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DIDSIPTrunk').then(response => {
                return response.DIDsDashboardDIDSIPTrunkState;
            });
        }
    },

    {
        name: "top.gui.operation_DIDsDashboard.gui.DIDToAccNoServiceOffering.**",
        url: "/DIDToAccNoServiceOffering",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DIDToAccNoServiceOffering').then(response => {
                return response.DIDsDashboardDIDToAccNoServiceOfferingState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.OutgoingCalls.**",
        url: "/OutgoingCalls",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.OutgoingCalls').then(response => {
                return response.DIDsDashboardOutgoingCallsState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.IncommingCalls.**",
        url: "/IncommingCalls",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.IncommingCalls').then(response => {
                return response.DIDsDashboardIncommingCallsState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.RestrictWhiteListUA.**",
        url: "/RestrictWhiteListUA",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.RestrictWhiteListUA').then(response => {
                return response.DIDsDashboardRestrictWhiteListUAState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.IncommingTechPrefix.**",
        url: "/IncommingTechPrefix",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.IncommingTechPrefix').then(response => {
                return response.DIDsDashboardIncommingTechPrefixState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.ScheduleCalls.**",
        url: "/ScheduleCalls",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.ScheduleCalls').then(response => {
                return response.DIDsDashboardScheduleCallsState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.ACDs.**",
        url: "/ACDs",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.ACDs').then(response => {
                return response.DIDsDashboardACDsState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.CallRecordingCriteria.**",
        url: "/CallRecordingCriteria",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.CallRecordingCriteria').then(response => {
                return response.DIDsDashboardCallRecordingCriteriaState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.DialoutCampaigns.**",
        url: "/DialoutCampaigns",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DialoutCampaigns').then(response => {
                return response.DIDsDashboardDialoutCampaignsState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.DIDBasedIVRs.**",
        url: "/DIDBasedIVRs",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DIDBasedIVRs').then(response => {
                return response.DIDsDashboardDIDBasedIVRsState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.DIDDOWIVRs.**",
        url: "/DIDDOWIVRs",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DIDDOWIVRs').then(response => {
                return response.DIDsDashboardDIDDOWIVRsState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.DIDHeaderRewriteRules.**",
        url: "/DIDHeaderRewriteRules",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DIDHeaderRewriteRules').then(response => {
                return response.DIDsDashboardDIDHeaderRewriteRulesState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.DIDIncomingBlockAddresses.**",
        url: "/DIDIncomingBlockAddresses",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DIDIncomingBlockAddresses').then(response => {
                return response.DIDsDashboardDIDIncomingBlockAddressesState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.DIDLogins.**",
        url: "/DIDLogins",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DIDLogins').then(response => {
                return response.DIDsDashboardDIDLoginsState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.DIDOutgoingBlockAddress.**",
        url: "/DIDOutgoingBlockAddress",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DIDOutgoingBlockAddress').then(response => {
                return response.DIDsDashboardDIDOutgoingBlockAddressState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.DIDProfiles.**",
        url: "/DIDProfiles",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DIDProfiles').then(response => {
                return response.DIDsDashboardDIDProfilesState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.DIDToDDOWIVRs.**",
        url: "/DIDToDDOWIVRs",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DIDToDDOWIVRs').then(response => {
                return response.DIDsDashboardDIDToDDOWIVRsState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.DIDIncomingBlDIDToDIVRsockAddresses.**",
        url: "/DIDToDIVRs",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DIDToDIVRs').then(response => {
                return response.DIDsDashboardDIDToDIVRsState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.DIDUANNumberMappings.**",
        url: "/DIDUANNumberMappings",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.DIDUANNumberMappings').then(response => {
                return response.DIDsDashboardDIDUANNumberMappingsState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.WhiteListNumbers.**",
        url: "/WhiteListNumbers",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.WhiteListNumbers').then(response => {
                return response.DIDsDashboardWhiteListNumbersState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.WhiteListUserAgents.**",
        url: "/WhiteListUserAgents",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.WhiteListUserAgents').then(response => {
                return response.DIDsDashboardWhiteListUserAgentsState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDsDashboard.gui.VoicemailSettings.**",
        url: "/VoicemailSettings",
        lazyLoad: function () {
            return System.import('./top.gui.operation_DIDsDashboard.gui.VoicemailSettings').then(response => {
                return response.DIDsDashboardVoicemailSettingsState;
            });
        }
    },
]
 };