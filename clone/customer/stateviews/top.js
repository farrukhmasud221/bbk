export const topState = {
    states: [{
        name: "top",
        abstract: true,
        resolve: {
            viewsObj: ['metaDataService', 'httpService', '$state$', async function (metaDataService, httpService, $state$) {
                let viewsObj = {
                    "panelType": "TreeMenu",
                    "class": "menu menuwrapper",
                    "treeClass": "treeview",
                    "direction": "vertically",
                    // "homeUrl": "/#!/Agent",
                    "homeClass": "homemenu",
                    "searchBox": true,
                    "Params": [
                        {
                            name: "Mediation Settings",
                            className: "tempClass",
                            id: "item-0",
                            Params: [{
                                name: "Sip-Trunking",
                                id: "item-0-0",
                                Params: [
                            // { url: "/AgentDashboard/BillingInformation", name: "Mediation Settings", id: "item-0-0-0" },
                                    { url: "/Trunks", name: "Trunks", id: "item-0-0-1" },
                                     { url: "/BlockedCallClasses", name: "Blocked Call Classes", id: "item-0-0-2" },
                                     { url: "/CallClasses", name: "Call Classes", id: "item-0-0-3" },
                                     { url: "/TrunkExtDialingGroups", name: "Trunk Ext Dialing Groups", id: "item-0-0-4" },
                                     { url: "/CustomerInventory", name: "Customer Inventory", id: "item-0-0-5" },
                                     //{ url: "/AddPayment", name: "Account Payment", id: "item-0-0-6" },
                                    { url: "/CreateSipTrunk", name: "Create Sip Trunk", id: "item-0-0-6" },
                                    
                                    { url: "/CreateSipTrunk", name: "Outgoing Blocked Addresses/Prefixes", id: "item-0-0-6" },
                                    { url: "/SIPTrunkForwardingIPs", name: "SIP Trunk Forwarding IPs", id: "item-0-0-7" },
                                    { url: "/SIPTrunkDialingExtension", name: "SIP Trunk Dialing Extension", id: "item-0-0-8" }
                                ]
                            }]
                        },
                        {
                            name: "Mediation Settings",
                            className: "tempClass",
                            id: "item-1",
                            Params: [{
                                name: "Administrator",
                                id: "item-1-0",
                                Params: [
                                    //{ url: "/AgentDashboard/BillingInformation", name: "Mediation Settings", id: "item-1-0-0" },
                                    //{ url: "/AgentDashboard/BillingInformation", name: "Global Settings", id: "item-1-0-1" },
                                    { url: "/LS_siptrunks", name: "DIDs List", id: "item-1-0-2" },
                                   
                                    { url: "/CreateDID", name: "Insert DIDs", id: "item-1-0-3" },
                                    { url: "/AssignDID", name: "Assign DIDs", id: "item-1-0-4" },
                                     { url: "/ProvioningDIDs", name: "Block/UnBlock DIDs", d: "item-1-0-5" },
                                    //   { url: "/customercdrs", name: "CDRs", id: "item-0-0-5" },



                                
                                    
                                    { url: "/AcessIncomingBlockCalls", name: "Acess Incoming Block Calls", id: "item-1-0-6" },
                                    { url: "/AcessBlackListAdresses", name: "Acess BlackList Adresses", id: "item-1-0-7" },
                                    { url: "/MediaCodec", name: "Media Codec", id: "item-1-0-8" },
                                    { url: "/ImportDIDS", name: "Import DID's", id: "item-1-0-9" },
                                    { url: "/DIDs", name: "DIDs", id: "item-1-0-10" },
                                    { url: "/AccountSearch", name: "AccountSearch", id: "item-1-0-11" }
                                    //{ url: "/SignUpAttempts", name: "Signup Attempts", id: "item-1-0-7" },
                                    //{ url: "/Logs", name: "Event logs", id: "item-1-0-8" },
                                    //{ url: "/TransactionHistory", name: "Wallet Balance Transfer", id: "item-0-0-7" },
                                    //{ url: "/BalanceSalesHistory", name: "Sale Balance History", id: "item-1-0-9" },
                                    //              { url: "/BalanceTransfer", name: "Transfer Balance History", id: "item1-0-10" },
                                    // { url: "/PaymentHistory", name: "Wallet Payment History", id: "item-0-0-9" }, 
                                    //{ url: "/RedeemBalanceHistory", name: "Redeem Balance History", id: "item-1-0-11" },
                                    //              { url: "/TransactionLedgerHistory", name: "Transaction Ledger History", id: "item-1-0-12" },


                                ]
                            }]
                        },
                        {
                            name: "Mediation Settings",
                            className: "tempClass",
                            id: "item-2",
                            Params: [{
                                name: "Monitoring",
                                id: "item-2-0",
                                Params: [
                                    //{ url: "/AgentDashboard/BillingInformation", name: "Mediation Settings", id: "item-1-0-0" },
                                    //{ url: "/AgentDashboard/BillingInformation", name: "Global Settings", id: "item-1-0-1" },
                                    // { url: "/PrivateID", name: "Accounts", id: "item-1-0-2" },
                                    { url: "/SBCCDRs", name: "SBC CDRs", id: "item-2-0-1" },
				                    { url: "/SearchSBCCDRs", name: "Search SBC CDRs", id: "item-2-0-2" },
                                    { url: "/SBCSessions", name: "SBC Sessions", id: "item-2-0-3" },
                                    
                                    

                                    //{ url: "/CreateAccounts", name: "Create Account", id: "item-1-0-4" },
                                    //{ url: "/customercdrs", name: "Account CDRs", id: "item-1-0-5" },
                                    //{ url: "/AddPayment", name: "Account Payment", id: "item-1-0-6" },
                                    //{ url: "/Devices", name: "Devices", id: "item-0-0-6" },
                                    //{ url: "/SignUpAttempts", name: "Signup Attempts", id: "item-1-0-7" },
                                    //{ url: "/Logs", name: "Event logs", id: "item-1-0-8" },
                                    //{ url: "/TransactionHistory", name: "Wallet Balance Transfer", id: "item-0-0-7" },
                                    // { url: "/BalanceSalesHistory", name: "Balance Sale Report", id: "item-1-0-9" },
                                    //              { url: "/BalanceTransfer", name: "Balance Transfer to Reseller Report", id: "item1-0-10" },
                                    // // { url: "/PaymentHistory", name: "Wallet Payment History", id: "item-0-0-9" }, 
                                    // { url: "/RedeemBalanceHistory", name: "Balance Transfer to Account Report", id: "item-1-0-11" },
                                    // { url: "/TransactionLedgerHistory", name: " All Transaction Report", id: "item-1-0-12" },


                                ]
                            }]
                        },
                        // {
                        //     name: "Mediation Settings",
                        //     className: "tempClass",
                        //     id: "item-3",
                        //     Params: [{
                        //         name: "Bulk Operation",
                        //         id: "item-3-0",
                        //         Params: [
                        //             //{ url: "/AgentDashboard/BillingInformation", name: "Mediation Settings", id: "item-1-0-0" },
                        //             //{ url: "/AgentDashboard/BillingInformation", name: "Global Settings", id: "item-1-0-1" },
                        //             // { url: "/PrivateID", name: "Accounts", id: "item-1-0-2" },
                        //            // { url: "/FileOperation", name: "File OPeration", id: "item-3-0-1" },
				        //             // { url: "/SearchSBCCDRs", name: "Search SBC CDRs", id: "item-2-0-2" },
                        //             // { url: "/SBCSessions", name: "SBC Sessions", id: "item-2-0-3" },
                                    
                                    

                        //             //{ url: "/CreateAccounts", name: "Create Account", id: "item-1-0-4" },
                        //             //{ url: "/customercdrs", name: "Account CDRs", id: "item-1-0-5" },
                        //             //{ url: "/AddPayment", name: "Account Payment", id: "item-1-0-6" },
                        //             //{ url: "/Devices", name: "Devices", id: "item-0-0-6" },
                        //             //{ url: "/SignUpAttempts", name: "Signup Attempts", id: "item-1-0-7" },
                        //             //{ url: "/Logs", name: "Event logs", id: "item-1-0-8" },
                        //             //{ url: "/TransactionHistory", name: "Wallet Balance Transfer", id: "item-0-0-7" },
                        //             // { url: "/BalanceSalesHistory", name: "Balance Sale Report", id: "item-1-0-9" },
                        //             //              { url: "/BalanceTransfer", name: "Balance Transfer to Reseller Report", id: "item1-0-10" },
                        //             // // { url: "/PaymentHistory", name: "Wallet Payment History", id: "item-0-0-9" }, 
                        //             // { url: "/RedeemBalanceHistory", name: "Balance Transfer to Account Report", id: "item-1-0-11" },
                        //             // { url: "/TransactionLedgerHistory", name: " All Transaction Report", id: "item-1-0-12" },


                        //         ]
                        //     }]
                        // },

                        {
                            name: "Mediation Settings",
                            className: "tempClass",
                            id: "item-3",
                            Params: [{
                                name: "Tasks",
                                id: "item-3-0",
                                Params: [
                                    //{ url: "/AgentDashboard/BillingInformation", name: "Mediation Settings", id: "item-1-0-0" },
                                    //{ url: "/AgentDashboard/BillingInformation", name: "Global Settings", id: "item-1-0-1" },
                                    // { url: "/PrivateID", name: "Accounts", id: "item-1-0-2" },
                                    { url: "/taskOperation", name: "Task Operation", id: "item-3-0-1" },
				                    // { url: "/GridTask", name: "GridTask", id: "item-2-0-2" },
                                    // { url: "/SBCSessions", name: "SBC Sessions", id: "item-2-0-3" },
                                    
                                    

                                    //{ url: "/CreateAccounts", name: "Create Account", id: "item-1-0-4" },
                                    //{ url: "/customercdrs", name: "Account CDRs", id: "item-1-0-5" },
                                    //{ url: "/AddPayment", name: "Account Payment", id: "item-1-0-6" },
                                    //{ url: "/Devices", name: "Devices", id: "item-0-0-6" },
                                    //{ url: "/SignUpAttempts", name: "Signup Attempts", id: "item-1-0-7" },
                                    //{ url: "/Logs", name: "Event logs", id: "item-1-0-8" },
                                    //{ url: "/TransactionHistory", name: "Wallet Balance Transfer", id: "item-0-0-7" },
                                    // { url: "/BalanceSalesHistory", name: "Balance Sale Report", id: "item-1-0-9" },
                                    //              { url: "/BalanceTransfer", name: "Balance Transfer to Reseller Report", id: "item1-0-10" },
                                    // // { url: "/PaymentHistory", name: "Wallet Payment History", id: "item-0-0-9" }, 
                                    // { url: "/RedeemBalanceHistory", name: "Balance Transfer to Account Report", id: "item-1-0-11" },
                                    // { url: "/TransactionLedgerHistory", name: " All Transaction Report", id: "item-1-0-12" },


                                ]
                            }]
                        },



                        // {
                        //     name: "Mediation Settings",
                        //     className: "tempClass",
                        //     id: "item-3",
                        //     Params: [{
                        //         name: "Access SBC",
                        //         id: "item-3-0",
                        //         Params: [
                        //             // { url: "/EmergancyNumbers", name: "Emergancy Numbers", id: "item-3-0-1" },
                        //             { url: "/SIPReturnCodeMappings", name: "SIP Return Code Mappings", id: "item-3-0-2" },
                        //             { url: "/SpecialNumbers", name: "Special Numbers", id: "item-3-0-3" },
                                
                        //             { url: "/AccessIncomingBlockCalls", name: "Access Incoming Block Calls", id: "item-3-0-3" },
                        //              { url: "/AccessBlackListAddresses", name: "Access Black List Addresses", d: "item-3-0-4" },
                        //             //   { url: "/customercdrs", name: "CDRs", id: "item-3-0-7" }



                                
                        //             // { url: "/CDRs", name: "CDRs", id: "item-0-0-6" },
                        //             //{ url: "/SignUpAttempts", name: "Signup Attempts", id: "item-1-0-7" },
                        //             //{ url: "/Logs", name: "Event logs", id: "item-1-0-8" },
                        //             //{ url: "/TransactionHistory", name: "Wallet Balance Transfer", id: "item-0-0-7" },
                        //             //{ url: "/BalanceSalesHistory", name: "Sale Balance History", id: "item-1-0-9" },
                        //             //              { url: "/BalanceTransfer", name: "Transfer Balance History", id: "item1-0-10" },
                        //             // { url: "/PaymentHistory", name: "Wallet Payment History", id: "item-0-0-9" }, 
                        //             //{ url: "/RedeemBalanceHistory", name: "Redeem Balance History", id: "item-1-0-11" },
                        //             //              { url: "/TransactionLedgerHistory", name: "Transaction Ledger History", id: "item-1-0-12" },


                        //         ]
                        //     }]
                        // },








                        {
                            name: "Mediation Settings",
                            className: "tempClass",
                            id: "item-4",
                            Params: [{
                                name: "Configurations",
                                id: "item-4-0",
                                Params: [
                                    { url: "/EmergencyNumbers", name: "Emergency Numbers", id: "item-4-0-0" },
                                    //{ url: "/AgentDashboard/BillingInformation", name: "Global Settings", id: "item-1-0-1" },
                                    // { url: "/PrivateID", name: "Accounts", id: "item-1-0-2" },
                                    ///  { url: "/ResellerAccounts", name: "Reseller Accounts", id: "item-1-0-3" },
                                    // { url: "/CreateAccounts", name: "Create Account", id: "item-1-0-4" },
                                    // { url: "/customercdrs", name: "Account CDRs", id: "item-1-0-5" },
                                    // { url: "/AddPayment", name: "Account Payment", id: "item-1-0-6" },
                                    //{ url: "/Devices", name: "Devices", id: "item-0-0-6" },
                                    { url: "/SipReturnCodeMappings", name: "Sip Return Code Mappings", id: "item-3-0-1" },
                                    { url: "/SpecialNumbers", name: "Special Numbers", id: "item-3-0-2" },
                                    { url: "/SipResponseCodes", name: "Sip Response Codes", id: "item-3-0-3" },
                                   { url: "/TotalCustomers", name: "Total Customers", id: "item-3-0-4" },
                                    { url: "/totalMonthlyRevenue", name: "Total Monthly Revenue", id: "item-3-0-5" },
                                    //{ url: "/PaymentHistory", name: "Wallet Payment History", id: "item-3-0-5" }, 
                                   // { url: "/RedeemBalanceHistory", name: "Redeem Balance History", id: "item-3-0-6" },
                                    //{ url: "/TransactionLedgerHistory", name: "Transaction Ledger History", id: "item-3-0-7" },


                                ]
                            }]
                        },
                        ///////////////////////////////////////////
                        // {
                        //     name: "Mediation Settings",
                        //     className: "tempClass",
                        //     id: "item-5",
                        //     Params: [{
                        //         name: "Total Customers",
                        //         id: "item-5-0",
                        //         Params: [
                        //            // { url: "/EmergencyNumbers", name: "Emergency Numbers", id: "item-4-0-0" },
                        //             //{ url: "/AgentDashboard/BillingInformation", name: "Global Settings", id: "item-1-0-1" },
                        //             // { url: "/PrivateID", name: "Accounts", id: "item-1-0-2" },
                        //             ///  { url: "/ResellerAccounts", name: "Reseller Accounts", id: "item-1-0-3" },
                        //             // { url: "/CreateAccounts", name: "Create Account", id: "item-1-0-4" },
                        //             // { url: "/customercdrs", name: "Account CDRs", id: "item-1-0-5" },
                        //             // { url: "/AddPayment", name: "Account Payment", id: "item-1-0-6" },
                        //             //{ url: "/Devices", name: "Devices", id: "item-0-0-6" },
                        //            // { url: "/SipReturnCodeMappings", name: "Sip Return Code Mappings", id: "item-3-0-1" },
                        //            // { url: "/SpecialNumbers", name: "Special Numbers", id: "item-3-0-2" },
                        //            // { url: "/SipResponseCodes", name: "Sip Response Codes", id: "item-3-0-3" },
                        //            { url: "/TotalCustomers", name: "Total Customers", id: "item-5-0-0" },
                        //            // { url: "/BalanceTransfer", name: "Transfer Balance History", id: "item-3-0-4" },
                        //             //{ url: "/PaymentHistory", name: "Wallet Payment History", id: "item-3-0-5" }, 
                        //            // { url: "/RedeemBalanceHistory", name: "Redeem Balance History", id: "item-3-0-6" },
                        //             //{ url: "/TransactionLedgerHistory", name: "Transaction Ledger History", id: "item-3-0-7" },


                        //         ]
                        //     }]
                        // },












                        

                    ]
                }
                await metaDataService.resolve(viewsObj);
                return viewsObj;
            }]
        },

        
        // deepStateRedirect: true,
        template: `
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-md-12'>
                <div ui-view='header' class='col-md-12'></div>
              </div>
            </div>
            <div class='row'>
              <div class='col-md-12'>
                <div class='row'>
                  <div ui-view='nav' class='menuInnerPan col-md-3 col-sm-4 col-lg-3'></div>
                  <div class='col-md-9 col-sm-8 col-lg-9 mainContainer'>
                    <div ui-view="topmenu" class="topmenu"></div>
                    <div ui-view="tabContent" class="tab-content"></div>
                  </div>
                </div>
                <footer>
                  <div class='poweredBy'>
                    <a ui-sref='#'>Powered By AdvOss</a>
                  </div>
                </footer>
              </div>
            </div>
          </div>
          `

    },
    {
        name: "top.gui",
        url: "/",
        views: {
            header: {
                template: `
                        <div class='container-fluid'>
                        <div class='row'>
                            <div class='col-sm-6 col-xs-6'>
                            <img src="logo.png" alt="Logo" class="logo img-responsive" style="float: left;">
                            </div>
                            <div class='col-sm-6 col-xs-6'><div class='userBox'>
                            <span>Welcome: {{username}} &nbsp; &nbsp; | &nbsp;</span> 
                            <span class='lnkLogout' ng-click='logout()'>Logout</span>
                            </div>
                        </div>
                        </div>
                        `,
                controller: ["$scope", "$state", "httpService", function ($scope, $state, httpService) {
                    $scope.username = httpService.getUsername();
                    $scope.logout = function () {
                        console.log("LOGGIN OUT")
                        httpService.logout(true)
                    }
                }],
            },
            nav: {
                component: 'menuComponent'
            },
           // content: { template: '<div ui-view></div>' }
        },
        deepStateRedirect: { default: "top.gui.mediation_operation_LS_CallClasses.gui" },

        // sticky: true         top.gui.mediation_operation_LS_CallClasses
    },
    // {
    //     name: "top.gui.mediation_operation_agent.**",
    //     url: "Agent",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_operation_agent').then(response => {
    //             return response.mediationOperationAgentState;
    //         });
    //     }
    // },
    // {
    //     name: "top.gui.mediation_RedeemBalanceHistory.**",
    //     url: "RedeemBalanceHistory",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation.RedeemBalanceHistory').then(response => {
    //             return response.RedeemBalanceHistoryState;
    //         });
    //     }
    // },
    // {
    //     name: "top.gui.mediation_operation_account.**",
    //     url: "Account",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_operation_account').then(response => {
    //             return response.mediationOperationAccountState;
    //         });
    //     }
    // },
    // {
    //     name: "top.gui.mediation_operation_publicid.**",
    //     url: "PublicID",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_operation_publicid').then(response => {
    //             return response.mediationOperationPublicIDState;
    //         });
    //     }
    // },
{
        name: "top.gui.operation_Trunks.**",
        url: "Trunks",
        lazyLoad: function () {
            return System.import('./top.gui.operation.Trunks').then(response => {
                return response.Operation_TrunksState;
            });
        }
    },
    {
        name: "top.gui.operation_MediaCodec.**",
        url: "MediaCodec",
        lazyLoad: function () {
            return System.import('./top.gui.operation.MediaCodec').then(response => {
                return response.Operation_MediaCodecState;
            });
        }
    },
    {
        name: "top.gui.operation_DIDs.**",
        url: "DIDs",
        lazyLoad: function () {
            return System.import('./top.gui.operation.DIDs').then(response => {
                return response.Operation_DIDsState;
            });
        }
        
        
    },
    {
        name: "top.gui.operation_AccountSearch.**",
        url: "AccountSearch",
        lazyLoad: function () {
            return System.import('./top.gui.operation.AccountSearch').then(response => {
                return response.Operation_AccountSearchState;
            });
        }
        
        
    },

  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    {
        name: "top.gui.mediation_operation_LS_BlockedCallClasses.**",
        url: "BlockedCallClasses",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_BlockedCallClasses').then(response => {
                return response.mediationOperationLS_BlockedCalClassesState;
            });
        }
    },{
        name: "top.gui.mediation_operation_LS_CallClasses.**",
        url: "CallClasses",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_CallClasses').then(response => {
                return response.mediationOperationLS_CallClassesState ;
            });
        }
    },{
        name: "top.gui.mediation_operation_LS_TrunkExtDialingGroups.**",
        url: "TrunkExtDialingGroups",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_TrunkExtDialingGroups').then(response => {
                return response.mediationOperationLS_TrunkExtDialingGroupsState;
            });
        }
    },{
        name: "top.gui.mediation_operation_LS_CustomerInventory.**",
        url: "CustomerInventory",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_CustomerInventory').then(response => {
                return response.mediationOperationLS_CustomerInventoryState;
            });
        }
    },
    {
        name: "top.gui.mediation_operation_LS_SpecialNumbers.**",
        url: "SpecialNumbers",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_SpecialNumbers').then(response => {
                return response.mediationOperationLS_SpecialNumbersState;
            });
        }
    },
    // {
    //     name: "top.gui.mediation_operation_LS_EmergencyNumbers.**",
    //     url: "EmergencyNumbers",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_operation_LS_EmergencyNumbers').then(response => {
    //             return response.mediationOperationLS_EmergencyNumbersState;
    //         });
    //     }
    // },
      {
        name: "top.gui.mediation_operation_LS_EmergencyNumbers.**",
        url: "EmergencyNumbers",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_EmergencyNumbers').then(response => {
                return response.mediationOperationLS_EmergencyNumbersState;
            });
        }
    },
      {
        name: "top.gui.mediation_operation_LS_SipReturnCodeMappings.**",
        url: "SipReturnCodeMappings",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_SipReturnCodeMappings').then(response => {
                return response.mediationOperationLS_SipReturnCodeMappingsState;
            });
        }
    },
     {
        name: "top.gui.mediation_operation_LS_SBCSessions.**",
        url: "SBCSessions",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_SBCSessions').then(response => {
                return response.mediationOperationLS_SBCSessionsState;
            });
        }
    },
     {
        name: "top.gui.mediation_operation_LS_SBCCDRs.**",
        url: "SBCCDRs",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_SBCCDRs').then(response => {
                return response.mediationOperationLS_SBCCDRsState;
            });
        }
    },
    {
        name: "top.gui.mediation_operation_LS_siptrunks.**",
        url: "LS_siptrunks",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_siptrunks').then(response => {
                return response.mediationOperationLS_siptrunksState;
            });
        }
    },
    //  {
    //     name: "top.gui.mediation_operation_CDRs.**",
    //     url: "CDRs",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_operation_CDRs').then(response => {
    //             return response.mediationOperationCDRsState;
    //         });
    //     }
    // },
    {
        name: "top.gui.mediation_operation_CreateAccounts.**",
        url: "CreateDID",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_CreateAccounts').then(response => {
                return response.mediationOperationCreateAccountsState;
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
        name: "top.gui.operation_siptrunkdashboard.gui.SIPTrunkDialingExtension.**",
        url: "/SIPTrunkDialingExtension",
        lazyLoad: function () {
            return System.import('./top.gui.operation_siptrunkdashboard.gui.SIPTrunkDialingExtension').then(response => {
                return response.siptrunkdashboardSIPTrunkDialingExtensionState;
            });
        }
    },




 {
        name: "top.gui.mediation_operation_CreateResellerAccounts.**",
        url: "AssignDID",   //AssignDID CreateResellerAccounts
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_CreateResellerAccounts').then(response => {
                return response.mediationOperationCreateResellerAccountsState;
            });
        }
    },
     {
        name: "top.gui.mediation_operation_ProvioningDIDs.**",
        url: "ProvioningDIDs",   //AssignDID CreateResellerAccounts
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_ProvioningDIDs').then(response => {
                return response.mediationOperationProvioningDIDsAccountsState;
            });
        }
    },


    // {
    //     name: "top.gui.tblsiptrunkdashboard.**",
    //     url: "tblsiptrunks/:v_SIPTrunkID",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.tblsiptrunkdashboard').then(response => {
    //             return response.tblsiptrunkdashboard;
    //         });
    //     }
    // },
    {
        name: "top.gui.mediation_operation_customercdrs.**",
        url: "customercdrs",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_customercdrs').then(response => {
                return response.mediationOperationcustomercdrsState;
            });
        }
    },
    {
        name: "top.gui.agentdashboard.**",
        url: "AgentDashboard",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.agentdashboard').then(response => {
                return response.agentDashboardState;
            });
        }
    },
    {
        name: "top.gui.mediation_accountdashboard.**",
        url: "AccountDashboard/:AccountID",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.accountdashboard').then(response => {
                return response.accountDashboardState;
            });
        }
    },
    {
        name: "top.gui.mediation_resellerdashboard.**",
        url: "ResellerDashboard/:AccountID",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.resellerdashboard').then(response => {
                return response.resellerDashboardState;
            });
        }
    },
    {
        name: "top.gui.mediation_resellersdashboard.**",
        url: "ResellersDashboard/:AccountID",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.resellersdashboard').then(response => {
                return response.resellersDashboardState;
            });
        }
    },
      {
        name: "top.gui.operation_siptrunkdashboard.**",
        url: "siptrunks/:v_SiptrunkID",
        lazyLoad: function () {
            return System.import('./top.gui.operation.siptrunkdashboard').then(response => {
                return response.siptrunkDashboardState;
            });
        }
    },
    {
        name: "top.gui.operation_MediaCodecDashboard.**",
        url: "tblmedia/:v_MediaCodecID",
        lazyLoad: function () {
            return System.import('./top.gui.operation.MediaCodecDashboard').then(response => {
                return response.MediaCodecDashboardState;
            });
        }
    },


    {
        name: "top.gui.operation_DIDsDashboard.**",
        url: "tbldids/:DIDID",
        lazyLoad: function () {
            return System.import('./top.gui.operation.DIDsDashboard').then(response => {
                return response.DIDsDashboardState;
            });
        }
    },

    
    {
        name: "top.gui.operation_ABMFDashboard.**",
        url: "tblabmf/:v_ABMFID",
        lazyLoad: function () {
            return System.import('./top.gui.operation.ABMFDashboard').then(response => {
                return response.ABMFDashboardState;
            });
        }
    },

    {
        name: "top.gui.operation_EmergencyNumbersDashboard.**",
        url: "tblEmergencyNumbers/:v_EmergencyNumberID",
        lazyLoad: function () {
            return System.import('./top.gui.operation.EmergencyNumbersDashboard').then(response => {
                return response.EmergencyNumbersDashboardState;
            });
        }
    },






    {
        name: "top.gui.mediation_publicidentitydashboard.**",
        url: "PublicIdentityDashboard/:PublicIdentityID",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.publicidentitydashboard').then(response => {
                return response.publicIdentityDashboardState;
            });
        }
    },
    {
        name: "top.gui.mediation_privateidentitydashboard.**",
        url: "PrivateIdentityDashboard/:AccNoPrivateIdentityID",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.privateidentitydashboard').then(response => {
                return response.privateIdentityDashboardState;
            });
        }
    },
    {
        name: "top.gui.mediation_BalanceSalesHistory.**",
        url: "BalanceSalesHistory",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.BalanceSalesHistory').then(response => {
                return response.BalanceSalesHistoryState;
            });
        }
    },
    {
        name: "top.gui.mediation_SignUpAttemptst.**",
        url: "SignUpAttempts",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.SignUpAttempts').then(response => {
                return response.SignUpAttempts;
            });
        }
    },
    {
        name: "top.gui.mediation_paypalpaymentdetail.**",
        url: "PayPalPaymentDetail/:PayPalPaymentID",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.paypalpaymentdetail').then(response => {
                return response.PayPalPaymentDetailState;
            });
        }
    },
    {
        name: "top.gui.mediation_devices.**",
        url: "Devices",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.devices').then(response => {
                return response.DevicesState;
            });
        }
    },
    {
        name: "top.gui.mediation_logs.**",
        url: "provisioningDID",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.logs').then(response => {
                return response.LogsState;
            });
        }
    },
    {
        name: "top.gui.mediation_PaymentHistory.**",
        url: "PaymentHistory",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.PaymentHistory').then(response => {
                return response.PaymentHistoryState;
            });
        }
    },
    {
        name: "top.gui.mediation_BalanceTransfer.**",
        url: "BalanceTransfer",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.BalanceTransfer').then(response => {
                return response.BalanceTransferState;
            });
        }
    },
    {
        name: "top.gui.mediation_TransactionHistory.**",
        url: "TransactionHistory",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.TransactionHistory').then(response => {
                return response.TransactionHistoryState;
            });
        }
    },

    {
        name: "top.gui.mediation_TransactionLedgerHistory.**",
        url: "TransactionLedgerHistory",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.TransactionLedgerHistory').then(response => {
                return response.TransactionLedgerHistoryState;
            });
        }
    },

    {
        name: "top.gui.mediation_ResellerAccounts.**",
        url: "ResellerAccounts",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.ResellerAccounts').then(response => {
                return response.ResellerAccountsState;
            });
        }
    },

    {
        name: "top.gui.mediation_AddPayment.**",
        url: "AddPayment",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.AddPayment').then(response => {
                return response.AddPaymentState;
            });
        }
    },
    {
        name: "top.gui.mediation_devicedetail.**",
        url: "DeviceDetail/:DeviceID",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.devicedetail').then(response => {
                return response.DeviceDetailState;
            });
        }
    },
    {
        name: "top.gui.mediation_UnvarifiedDetail.**",
        url: "UnvarifiedDetail/:PublicIdentity",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.UnvarifiedDetail').then(response => {
                return response.UnvarifiedDetailState;
            });
        }
    },
    {
        name: "top.gui.mediation_EventLogsDetail.**",
        url: "EventLogsDetail/:LogDetail",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.EventLogsDetail').then(response => {
                return response.EventLogsDetailState;
            });
        }
    },
    {
        name: "top.gui.mediation_logdetail.**",
        url: "LogDetail/:PrivateIdentityDebugLogID",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.logdetail').then(response => {
                return response.LogDetailState;
            });
        }
    },
    {
        name: "top.gui.mediation_dashboard.**",
        url: "dashboard",
        lazyLoad: function () {
            return System.import('./top.gui.mediation.dashboard').then(response => {
                return response.dashboard;
            });
        }
    },



///for testing purpose

    // {
    //         name: "top.gui.mediation_operation_LS_EmergancyNumbers.**",
    //         url: "EmergancyNumbers",
    //         lazyLoad: function () {
    //             return System.import('./top.gui.mediation_operation_LS_EmergancyNumbers').then(response => {
    //                 return response.mediationOperationLS_EmergencyNumbersState;
    //             });
    //         }
    //     }


    {
        name: "top.gui.mediation_operation_LS_accesssbcincblockcalls.**",
        url: "AcessIncomingBlockCalls",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_accesssbcincblockcalls').then(response => {
                return response.mediationOperationLS_accesssbcincblockcallsState;
            });
        }
    },
    {
        name: "top.gui.mediation_operation_LS_SipResponseCodes.**",
        url: "SipResponseCodes",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_SipResponseCodes').then(response => {
                return response.mediationOperationLS_SipResponseCodesState;
            });
        }
    },




    // {
    //     name: "top.gui.mediation_operation_LS_SearchSBCCDRs.**",
    //     url: "SearchSBCCDRs",
    //     lazyLoad: function () {
    //         return System.import('./top.gui.mediation_operation_LS_SearchSBCCDRs').then(response => {
    //             return response.mediationOperation_LS_SearchSBCCDRsState;
    //         });
    //     }
    // },


    {
        name: "top.gui.mediation_operation_LS_blacklistaddresses.**",
        url: "AcessBlackListAdresses",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_blacklistaddresses').then(response => {
                return response.mediationOperationLS_blacklistaddressesState;
            });
        }
    },





    {
        name: "top.gui.mediation_operation_LS_mediacodecs.**",
        url: "MediaCodecs",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_mediacodecs').then(response => {
                return response.mediationOperationLS_mediacodecsState;
            });
        }
    },
    {
        name: "top.gui.mediation_operation_LS_bulkdids.**",
        url: "ImportDIDS",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_bulkdids').then(response => {
                return response.mediationOperationLS_bulkdidsState;
            });
        }
    },



    {
        name: "top.gui.mediation_operation_LS_SearchSBCCDRs.**",
        url: "SearchSBCCDRs",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_SearchSBCCDRs').then(response => {
                return response.mediationOperationLS_SearchSBCCDRsState;
            });
        }
    },
   
    {
        name: "top.gui.mediation_operation_LS_TotalCustomers.**",
        url: "TotalCustomers",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_TotalCustomers').then(response => {
                return response.mediationOperationLS_TotalCustomersState;
            });
        }
    },

    {
        name: "top.gui.mediation_operation_LS_totalMonthlyRevenue.**",
        url: "totalMonthlyRevenue",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_totalMonthlyRevenue').then(response => {
                return response.mediationOperationLS_totalMonthlyRevenueState;
            });
        }
    },
    {
        name: "top.gui.mediation_operation_LS_CreateSipTrunk.**",
        url: "CreateSipTrunk",
        lazyLoad: function () {
            return System.import('./top.gui.mediation_operation_LS_CreateSipTrunk').then(response => {
                return response.mediationOperationLS_CreateSipTrunkState;
            });
        }
    },



    {
        name: "top.gui.fileOperationsDashboard.**",
        url: "FileOperations",
        lazyLoad: function () {
            return System.import('./top.gui.fileOperationsDashboard').then(response => {
                return response;
            });
        }
    },
    {
        name: "top.gui.fileOperationsBatchResultsDashboard.**",
        url: "SubmittedFileDetails/BatchID=:BatchID",
        lazyLoad: function () {
            return System.import('./top.gui.fileOperationsBatchResultsDashboard').then(response => {
                return response;
            });
        }
    },
    {
        name: "top.gui.fileOperationsAttemptHistory.**",
        url: "?AttemptHistory",
        lazyLoad: function () {
            return System.import('./top.gui.fileOperationsAttemptHistory').then(response => {
                return response;
            });
        }
    },
    {
        name: "top.gui.operation_taskOperation.**",
        url: "taskOperation",
        lazyLoad: function () {
            return System.import('./top.gui.operation.taskOperation').then(response => {
                return response.Operation_taskOperationState;
            });
        }
        
        
    },
   






///////////////////////////lol




    ]
};

