webpackJsonp([58],{"312152b73e159c381d79":function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.mediationOperationCreateAccountsState={states:[{name:"top.gui.mediation_operation_CreateAccounts",abstract:!0,params:{reload:!1},resolve:{viewsObj:["metaDataService","$stateParams",async function(b,c){var d=[{viewID:"1180",heading:"Insert DID",panelType:"InsertView",type:"insert",buttonLabel:"Insert DID",operationId:"TX_InsertDID",Params:[{ViewParamId:73337,name:"v_DIDNumber",ctype:"label",paramtype:"varchar",label:"v_DIDNumber",direction:"in",validator:"",width:"auto",placeholder:"DID Number",required:"true"},{ViewParamId:73338,name:"v_CityID",ctype:"textbox",paramtype:"varchar",label:"v_CityID",direction:"in",validator:"",width:"auto",placeholder:"Please enter the DIDNumber",required:"true"},{ViewParamId:73338,name:"v_AreaCodeID",ctype:"textbox",paramtype:"varchar",label:"v_AreaCodeID",direction:"in",validator:"",width:"auto",placeholder:"Please enter the AreaCodeID",required:"true"},{ViewParamId:72024,name:"v_DIDType",ctype:"select",paramtype:"bigint",label:"v_DIDType",direction:"inout",validator:"",width:"*",options:[{display:"Standard",value:"Standard"}]}]}];return await b.resolve(d,c),d}]}},{name:"top.gui.mediation_operation_CreateAccounts.gui",url:"CreateDID",views:{"tabContent@top":{component:"formComponent"},"searchResult@top.gui.mediation_operation_CreateAccounts.gui":{component:"gridComponent"}},deepStateRedirect:!0,sticky:!0}]}}});