export const auditDetail = {
    states: [{
        name: "top.gui.auditDetail",
        abstract: true,
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "3845",
                    "heading": "Audit Detail",
                    "panelType": "ReadOnlyView",
                    "Params": [
                        { "label": "Transaction ID", "name": "v_ID", ctype: 'label', direction: 'out' },
                        { "label": "API Name", "name": "v_OperationID", ctype: 'label', direction: 'out' },
                        { "label": "Client Request ID", "name": "v_ClientRequestID", ctype: 'label', direction: 'out' },

                        { "label": "Request Data", "name": "v_RequestData", cellTemplate: '<div><a ng-href=\"#!/AuditTrail/{{row.entity.v_TXID}}/RequestData\">View</a></div>', ctype: 'dynamic' },
                        { "label": "Request IP", "name": "v_RequestIP", ctype: 'label', direction: 'out' },
                        { "label": "Request Host", "name": "v_RequestHost", ctype: 'label', direction: 'out' },
                        { "label": "Request Logged At", "name": "v_RequestTimeStamp", ctype: 'label', direction: 'out' },

                        { "label": "Response Data", "name": "v_ResponseData", "cellTemplate": '<div><a ng-href=\"#!/AuditTrail/{{row.entity.v_TXID}}/ResponseData\">View</a></div>', ctype: 'dynamic' },

                        { "label": "Response Logged At", "name": "v_ResponseTimeStamp", ctype: 'label', direction: 'out' },
                        { "label": "Response HTTP Status Code", "name": "v_ResponseStatus", ctype: 'label', direction: 'out' },
                        { "label": "Transaction Status", "name": "v_TxExitStatus", ctype: 'label', direction: 'out' },

                        { "label": "API ID", "name": "v_APIID", ctype: 'label', direction: 'out' },
                        { "label": "Global Transaction ID", "name": "v_GlobalTransactionID", ctype: 'label', direction: 'out' },
                        { "label": "Nesting Level", "name": "v_NestingLevel", ctype: 'label', direction: 'out' },
                        { "label": "Is New State", "name": "v_NewState", ctype: 'label', direction: 'out' },
                        { "label": "Previous State", "name": "v_PreviousState", ctype: 'label', direction: 'out' },

                        { "label": "Request Body Parameters", "name": "v_RequestBody", "cellTemplate": '<div><a ng-href=\"#!/AuditTrail/{{row.entity.v_TXID}}/RequestBody\">View</a></div>', ctype: 'dynamic' },
                        { "label": "Request Query Parameters", "name": "v_RequestQueryParameters", "cellTemplate": '<div><a ng-href=\"#!/AuditTrail/{{row.entity.v_TXID}}/RequestQuery\">View</a></div>', ctype: 'dynamic' },
                        { "label": "Request Path Parameters", "name": "v_RequestPathParameters", "cellTemplate": '<div><a ng-href=\"#!/AuditTrail/{{row.entity.v_TXID}}/RequestPath\">View</a></div>', ctype: 'dynamic' },
                        { "label": "Request Pipeline Parameters", "name": "v_RequestPipelineParameters", "cellTemplate": '<div><a ng-href=\"#!/AuditTrail/{{row.entity.v_TXID}}/RequestPipelineParameters\">View</a></div>', ctype: 'dynamic' },
                        { "label": "Request Platform Parameters", "name": "v_RequestPlatformParameters", "cellTemplate": '<div><a ng-href=\"#!/AuditTrail/{{row.entity.v_TXID}}/RequestPlatformParameters\">View</a></div>', ctype: 'dynamic' },
                        { "label": "Http Method", "name": "v_RequestMethod", ctype: 'label', direction: 'out' },
                        { "label": "Request Protocol", "name": "v_RequestProtocol", ctype: 'label', direction: 'out' },
                        { "label": "Is Request Fresh", "name": "v_RequestFresh", ctype: 'label', direction: 'out' },
                        { "label": "Is Request Secure", "name": "v_RequestSecure", ctype: 'label', direction: 'out' },
                        { "label": "Is Request Stale", "name": "v_RequestStale", ctype: 'label', direction: 'out' },
                        { "label": "Request Header", "name": "v_RequestHeader", "cellTemplate": '<div><a ng-href=\"#!/AuditTrail/{{row.entity.v_TXID}}/RequestHeader\">View</a></div>', ctype: 'dynamic' },
                        { "label": "Request Headers", "name": "v_RequestHeaders", "cellTemplate": '<div><a ng-href=\"#!/AuditTrail/{{row.entity.v_TXID}}/RequestHeaders\">View</a></div>', ctype: 'dynamic' },
                        { "label": "Request Hostname", "name": "v_RequestHostName", ctype: 'label', direction: 'out' },
                        { "label": "Request Href", "name": "v_RequestHref", ctype: 'label', direction: 'out' },
                        { "label": "Request IPs", "name": "v_RequestIPs", ctype: 'label', direction: 'out' },
                        { "label": "Request Origin", "name": "v_RequestOrigin", ctype: 'label', direction: 'out' },
                        { "label": "Request URL", "name": "v_RequestURL", ctype: 'label', direction: 'out' },
                        { "label": "Request Original URL", "name": "v_RequestOriginalURL", ctype: 'label', direction: 'out' },
                        { "label": "Request Path", "name": "v_RequestPath", ctype: 'label', direction: 'out' },
                        { "label": "Request Query String", "name": "v_RequestQueryString", ctype: 'label', direction: 'out' },
                        { "label": "Request Subdomains", "name": "v_RequestSubDomains", ctype: 'label', direction: 'out' },

                        { "label": "Response Header", "name": "v_ResponseHeaderSent", ctype: 'label', direction: 'out' },
                        { "label": "Response Length", "name": "v_ResponseLength", ctype: 'label', direction: 'out' },
                        { "label": "Response Status Message", "name": "v_ResponseMessage", ctype: 'label', direction: 'out' },
                        { "label": "Response Meta Data", "name": "v_ResponseMetaData", "cellTemplate": '<div><a ng-href=\"#!/AuditTrail/{{row.entity.v_TXID}}/ResponseMetaData\">View</a></div>', ctype: 'dynamic' },
                        { "label": "Response Type", "name": "v_ResponseType", ctype: 'label', direction: 'out' },
                        { "label": "Return Code", "name": "v_ReturnCodeOut", ctype: 'label', direction: 'out' },

                        { "label": "Transaction End Status", "name": "v_TransactionEndStatus", ctype: 'label', direction: 'out' },
                        { "label": "Transaction Ended At", "name": "v_TransactionEndTimeStamp", ctype: 'label', direction: 'out' },
                    ],
                    "operationId": "UI_tx",
                    "mappings": {
                        "v_TXID": "TransactionId"
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                console.log(viewsObj)
                return viewsObj;
            }],
        },
    },
    {
        name: "top.gui.auditDetail.gui",
        url: 'AuditTrail/:TransactionId',
        views: {
            "tabContent@top": {
                component: "detailComponent"
            },
            // "grid@top.gui.auditDetail.gui": {
            //     component: 'gridComponent'
            // }
        }
    }]
}
