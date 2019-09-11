
export const agentDashboardCodecsState = {
    states: [{
        name: "top.gui.agentdashboard.gui.codec",
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
                    "updatePanel": ["TX_UpdDMASupportedAudioCodec"],
                    "TX_UpdDMASupportedAudioCodec": {
                        "operationId": "TX_UpdDMASupportedAudioCodec",
                        "heading": "Codec",
                        "panelType": "ReadOnlyView",
                        "Params": [
                            { "ViewParamId": 72024, "name": "v_SupportedAudioCodec", "ctype": "textarea", "paramtype": "varchar", "label": "SupportedAudioCodec", "direction": "inout", "validator": "", "width": "*" },
                        ]
                    }
                }];
                await metaDataService.resolve(viewsObj, $stateParams);
                console.log(viewsObj["0"].TX_UpdDMASupportedAudioCodec.Params["0"]);
            //     console.log(viewsObj["0"].TX_UpdDMASupportedAudioCodec.Params["0"].value);
            //     console.log(JSON.stringify(viewsObj["0"].TX_UpdDMASupportedAudioCodec.Params["0"].value.split(',')));

              var Codec= viewsObj["0"].TX_UpdDMASupportedAudioCodec.Params["0"].value.split(',');
            
          var obj ={
            "ViewParamId":72024,
            "ctype":"textarea",
            "direction" :"inout",
            "label":"GGGG",
            "name":"v_gggg",
            "paramtype":"varchar",
            "validator":"",
            "value": "G729,PCMA,PCMU,opus",
            "width": "*"
          };
          //viewsObj["0"].TX_UpdDMASupportedAudioCodec.Params.push(obj);
          viewsObj["0"].TX_UpdDMASupportedAudioCodec.Params.pop();
               Codec.forEach(element => {
                console.log(element);
                var _codec ={
                    "ViewParamId":72024,
                    "ctype":"textarea",
                    "direction" :"inout",
                    "label":element,
                    "name":"v_"+element,
                    "paramtype":"varchar",
                    "validator":"",
                    "value": "Enabled",
                    "width": "*"
                  };

                  viewsObj["0"].TX_UpdDMASupportedAudioCodec.Params.push(_codec);

               // let element=element.concat("Enalbed");
                //console.log("codec",element.concate("Enabbled"));
                   
                    
                });
            
          
                return viewsObj;
            }]
        },
    },
    {
        name: "top.gui.agentdashboard.gui.codec.gui",
        url: "/Codecs",
        views: {
            "tabContent@top": { 
                component: "detailComponent"

            }
        }
    }]

};