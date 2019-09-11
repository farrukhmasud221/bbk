export const siptrunkdashboardAdvanceState = {
    states: [{
            name: "top.gui.operation_siptrunkdashboard.gui.Advance",
            abstract: true,
            params: {
                reload: true
            },
            resolve: {
                viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                    let viewsObj = [{
                       "viewID": "168",
                    "panelType": "ReadOnlyView",
                    "operationId": "UI_siptrunks",
                    "heading": "Support Ext Dialing",
                    "mappings": {
                        "v_SIPTrunkID": "SIPTrunkID"
                    },
                        "panelType": "ReadOnlyView",
                        "updatePanel": [
                            "TX_UpdSIPTrunkTechPrefix", "TX_UpdIsSupportCityWideDialing"
                        ],
    
                        "TX_UpdSIPTrunkTechPrefix": {
                            "viewID": "3899",
                            "mappings": {
                                "v_SIPTrunkID": "SIPTrunkID"
                            },
                            "operationId": "TX_UpdSIPTrunkTechPrefix",
                            "buttonLabel": "update",
                            "heading": "Support Ext Dialing",
                            "panelType": "UpdateableReadOnlyView",
                            "Params": [
                                {
                                    "ViewParamId": 72024,
                                    "name": "v_SIPTrunkID",
                                    "ctype": "readonly",
                                    "paramtype": "varchar",
                                    "label": "v_SIPTrunkID",
                                    "direction": "inout",
                                    "validator": "",
                                    "width": "*"
                                },
                                {
                                    "ViewParamId": 72024,
                                    "name": "v_TechPrefix",
                                    "ctype": "label",
                                    "paramtype": "varchar",
                                    "label": "v_TechPrefix",
                                    "direction": "inout",
                                    "validator": "",
                                    "width": "*"
                                },
                             
    
                            ]
                        },
    
    
                        "TX_UpdIsSupportCityWideDialing": {
                            "viewID": "3899",
                            "mappings": {
                                "v_SIPTrunkID": "SIPTrunkID"
                            },
                            "operationId": "TX_UpdIsSupportCityWideDialing",
                            "buttonLabel": "update",
                            "heading": "Is Support City Wide Dialing",
                            "panelType": "UpdateableReadOnlyView",
                            "Params": [
                                {
                                    "ViewParamId": 72024,
                                    "name": "v_IsSupportCityWideDialing",
                                    "ctype": "select",
                                    "paramtype": "varchar",
                                    "label": "v_IsSupportCityWideDialing",
                                    "direction": "inout",
                                    "validator": "",
                                    "options": [{ "display": "Yes", "value": "Yes" }, { "display": "No", "value": "No" }],
                                    "width": "*"
                                },
    
                            ]
                        },
                        viewsObj: {
                        "viewID": "9669",
                        "heading": "SIP trunk Charges",
                        "panelType": "ListView",
                        "operationId": "TX_UpdIsSupportCityWideDialing",
                        "gridOptions": {
                            enableSorting: true,
                            paginationPageSizes: [10, 20, 50, 100,500,1000,2000,3000,4000,5000,10000,20000],
                            paginationPageSize: 20000,
                            data: null,
                            enableScrollbars: true,
                            enableFiltering: true,
                            enableRowHeaderSelection: false,
                             enableScrollbars: true,
                            exporterCsvFilename: 'SipTrunk.csv',
                            enableGridMenu: true,
                            enableRowSelection: true,
                            multiSelect: true,
                            "columnDefs": [
    
                                
                                   { "ViewColumnDefID": 36388, "name": "v_SIPTrunkID", "cellClass":"text-center","label": "v_SIPTrunkID", "width": "*", enableCellEdit: true },
                                   { "ViewColumnDefID": 36391, "name": "v_InsertTime","cellClass":"text-center", "label": "v_InsertTime", "width": "auto", enableCellEdit: true },
                                      
    
                                     
                            
                                // { "ViewColumnDefID": 36384, "name": "v_UserName", "label": "v_UserName", "cellTemplate": "<div><a ng-href=\"#!/AccountDashboard/{{row.entity.v_AccountID}}\">{{grid.getCellValue(row, col)}}</a></div>", "width": "auto", 
                             
                            ],
                        }
                    }
                    
                        
                    }]
                    
                    
                    await metaDataService.resolve(viewsObj, $stateParams);
                     console.log("viewsObj",viewsObj[0].TX_UpdIsSupportCityWideDialing);
               if(viewsObj[0].TX_UpdIsSupportCityWideDialing.Params[0].value===0)
               {
                  viewsObj[0].TX_UpdIsSupportCityWideDialing.Params[0].value="No"; 
               }
               else
               {
                    viewsObj[0].TX_UpdIsSupportCityWideDialing.Params[0].value="Yes"; 
               }
                    return viewsObj;
                }]
            },
            // template: `<div ui-view="tabContent" class="tab-content-notabs"></div>`
        },
        {
            name: "top.gui.operation_siptrunkdashboard.gui.Advance.gui",
            url: "/Advance",
            views: {
                "tabContent@top": { //gui.servicedetail": {
                    component: "detailComponent"
                }
            }
        }]
    }
    