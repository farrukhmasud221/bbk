export const ResellerAccountsState = {
    states: [{
        name: "top.gui.mediation_ResellerAccounts",
         abstract: true,
        params: { reload: false },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "1180",
                    "heading": "Reseller Accounts",
                    "panelType": "ListView",
                    "operationId": "LS_Resellers",
                    "gridOptions": {
                        enableSorting: true,
                        paginationPageSizes: [10, 20, 50, 100],
                        paginationPageSize: 20,
                        data: null,
                        enableScrollbars: true,
                        enableFiltering: true,
                        enableRowHeaderSelection: false,
                        "columnDefs": [
				            
                            //{ "name": "v_PublicIdentity","cellClass":"text-center", "label": "Account", "cellTemplate": "<div><a ng-href=\"#!/ResellersDashboard/{{row.entity.v_AccNoPrivateIdentityID}}\">{{grid.getCellValue(row, col)}}</a></div>",  "width": "*", enableCellEdit: false },
                            { "name": "v_PrivateIdentity","cellClass":"text-center", "label": "Reseller", "cellTemplate": "<div><a ng-href=\"#!/ResellerDashboard/{{row.entity.v_AccNoPrivateIdentityID}}\">{{grid.getCellValue(row, col)}}</a></div>",  "width": "*", enableCellEdit: false },
                            { "name": "v_CurrentBalance", "cellClass":"text-center","label": "v_WalletBalance","width": "*", enableCellEdit: false },
                            // { "name": "v_DeviceModelChangeCount", "label": "v_DeviceModelChangeCount", "width": "*", enableCellEdit: false },
                            // { "name": "v_IsReseller","cellClass":"text-center", "label": "v_IsReseller", "width": "*", enableCellEdit: false },
                            // { "name": "v_DevicePlatformChangeCount", "label": "v_DevicePlatformChangeCount", "width": "*", enableCellEdit: false },
                            // { "name": "v_DeviceVersionChangeCount", "label": "v_DeviceVersionChangeCount", "width": "*", enableCellEdit: false },
                              //{ "name": "v_AccNoPrivateIdentityID","cellClass":"text-center", "label": "v_AccNoPrivateIdentityID", "width": "*", enableCellEdit: false },
                            // { "name": "v_LastIdentificationAttempt", "label": "v_LastIdentificationAttempt", "width": "*", enableCellEdit: false },
                            // { "name": "v_NoOfFailedVoucherRecharges", "label": "v_NoOfFailedVoucherRecharges", "width": "*", enableCellEdit: false },
                             { "name": "v_DeferredCommission","cellClass":"text-center", "label": "v_DeferredCommission", "width": "*", enableCellEdit: false },
                             
                        ],
                    },
                               }];
                await metaDataService.resolve(viewsObj, $stateParams)
            console.log("hello", "$ "+viewsObj[0].gridOptions.data);
                 //viewsObj[0].gridOptions.data["v_PrivateIdentity"]===0;
                 let respArray=[];
                viewsObj[0].gridOptions.data.forEach(element => {
                    //console.log('$ ' + Number(element["v_CurrentBalance"]).toFixed(2));
                    element["v_CurrentBalance"] ='$ '+ Number(element["v_CurrentBalance"]).toFixed(2);
                    element["v_DeferredCommission"]='$ '+ Number(element["v_DeferredCommission"]).toFixed(2);
                   
                    respArray.push(element);
                });
                viewsObj[0].gridOptions.data=respArray;
                console.log("hello"+ "$ "+viewsObj[0].gridOptions.data); 
                return viewsObj;
            }]
        }
    },
    {
        name: "top.gui.mediation_ResellerAccounts.gui",
        url: "ResellerAccounts",
        views: {
            "tabContent@top": {
                component: "gridComponent"
            }
        },
        deepStateRedirect: false
    }]
};