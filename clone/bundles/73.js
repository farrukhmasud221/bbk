webpackJsonp([73],{bf52ea15734614e9271e:function(b,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.DeviceDetailState={states:[{name:"top.gui.mediation_devicedetail",abstract:!0,params:{reload:!0},resolve:{viewsObj:["metaDataService","$stateParams",async function(b,c){var a=[{viewID:"1229",heading:"Device Detail",panelType:"ReadOnlyView",operationId:"UI_devices",mappings:{v_DeviceID:"DeviceID"},Params:[{ViewParamId:57791,name:"v_DeviceIdentification",ctype:"label",paramtype:"varchar",label:"v_DeviceIdentification",direction:"out",validator:"",width:"auto"},{ViewParamId:57773,name:"v_DevicePlatform",ctype:"label",paramtype:"varchar",label:"v_DevicePlatform",direction:"out",validator:"",width:"auto"},{ViewParamId:57774,name:"v_DeviceModel",ctype:"label",paramtype:"varchar",label:"v_DeviceModel",direction:"out",validator:"",width:"auto"},{ViewParamId:57775,name:"v_DeviceVersion",ctype:"label",paramtype:"varchar",label:"v_DeviceVersion",direction:"out",validator:"",width:"auto"},{ViewParamId:79851,name:"v_NoOfIdentificationAttempts",ctype:"label",paramtype:"bigint",label:"v_NoOfIdentificationAttempts",direction:"out",validator:"",width:"auto"},{ViewParamId:57789,name:"v_LastIdentificationAttempt",ctype:"label",paramtype:"varchar",label:"v_LastIdentificationAttempt",direction:"out",validator:"",width:"auto"},{ViewParamId:57790,name:"v_NoOfFailedVoucherRecharges",ctype:"label",paramtype:"varchar",label:"v_NoOfFailedVoucherRecharges",direction:"out",validator:"",width:"auto"},{ViewParamId:79016,name:"v_LastFailedVoucherAttempt",ctype:"label",paramtype:"varchar",label:"v_LastFailedVoucherAttempt",direction:"out",validator:"",width:"auto"},{ViewParamId:57789,name:"v_DevicePlatformChangeCount",ctype:"label",paramtype:"varchar",label:"v_DevicePlatformChangeCount",direction:"out",validator:"",width:"auto"},{ViewParamId:57790,name:"v_DeviceModelChangeCount",ctype:"label",paramtype:"varchar",label:"v_DeviceModelChangeCount",direction:"out",validator:"",width:"auto"},{ViewParamId:79016,name:"v_DeviceVersionChangeCount",ctype:"label",paramtype:"varchar",label:"v_DeviceVersionChangeCount",direction:"out",validator:"",width:"auto"}]}];return await b.resolve(a,c),a}]}},{name:"top.gui.mediation_devicedetail.gui",url:"DeviceDetail/:DeviceID",views:{"tabContent@top":{component:"detailComponent"}}}]}}});