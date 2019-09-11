
export const agentDashboardEventLogBitMaskState = {
    states: [{
        name: "top.gui.agentdashboard.gui.eventlogbitmask",
        abstract: true,
        params: {
            reload: true
        },
        resolve: {
            viewsObj: ["metaDataService", "$stateParams", async function (metaDataService, $stateParams) {
                let viewsObj = [{
                    "viewID": "168",
                    "operationId": "UI_agents",
                    "mappings": {
                        "v_AgentID": "AgentID"
                    },
                    "panelType": "ReadOnlyView",
                    "updatePanel": ["TX_UpdAgentEventLogBitMask"],
                    "TX_UpdAgentEventLogBitMask": {
                        "operationId": "TX_UpdAgentEventLogBitMask",
                        "heading": "Event Log BitMask",
                        "panelType": "UpdateableReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_EventLogBitMask", "ctype": "number","max":"61", "paramtype": "varchar", "label": "v_EventLogBitMask", "direction": "inout", "validator": "", "width": "*" },

                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                //console.log("events log", viewsObj);

                function decbin(dec,length){
                    var out = "";
                    while(length--)
                      out += (dec >> length ) & 1;    
                    return out;  
                  }
                var EventBitMask = viewsObj[0].data.v_EventLogBitMask;
                
                var EventBitMaskBny = decbin(EventBitMask,4);

               // console.log("hey", EventBitMaskBny);
                let dataArray = Array.from(EventBitMaskBny.toString());

                  console.log("array",EventBitMaskBny);
                  var arrayLength = dataArray.length;
                  for (var i = 0; i < arrayLength; i++) {
                      console.log(dataArray[i]);
                      
                      //Do something
                  }
                  viewsObj[0].data.BinaryEventLogBitMask=dataArray;
                // var EventBitMaskBnyArr = EventBitMaskBny.toArray();
                // if (viewsObj[0].data.v_EventLogBitMask > 15) {
                //     viewsObj[0].data.v_EventLogBitMask == 15;
                // }
                // else {
                //     viewsObj[0].data.v_EventLogBitMask
                // }
                //console.log("hello", viewsObj[0].data.v_EventLogBitMask);
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.agentdashboard.gui.eventlogbitmask.gui",
        url: "/EventLogBitMask",
        views: {
            "tabContent@top": {
                component: "detailComponent"

            }
        }
    }]

};