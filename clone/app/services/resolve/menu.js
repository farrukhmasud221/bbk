/** A method to resolve menu component
 * @param {object} viewObj - metadata for the current view object
 * @param {object} stateParams - params from state as well as possibly some data params
 * @param {object} state - state in which menu is being resolved
 * @param {object} httpService - service to execute REST operations
 * @param {object} menuService - service for managing which menus are active at a given time
*/
export let resolveMenu = async (viewObj, stateParams, state, httpService, menuService) => {
    if (viewObj.panelType === 'TreeMenu')               /* if menu is Tree */
        menuService.addMenu(viewObj);                       /* add to menuService as Menu */
    else if (viewObj.panelType === "TabsMenu") {        /* if menu is Tabs */
        menuService.addTabs(viewObj, state.name)            /* add to menuService as Tabs - with state name as key */
        viewObj.state = state.name;                         /* also attach stateName to viewObj for correct identification of tabs on init */
        if (isDefined(viewObj.heading)) {                   /* if heading is defined (this is dashboard heading) */
            if (isDefined(viewObj[viewObj.heading]))
                if (isDefined(viewObj[viewObj.heading].operationId)) {  /* and there is an operationId to get values for heading */
                    /* For any mapping if it exists for the viewObj, populate httpParams from values in stateParams and send REST request */
                    let httpParams = {};
                    let resolveExplicit = false;
                    console.log(copyObject(stateParams));
                    if (isDefined(viewObj[viewObj.heading].mappings))
                        if (isDefined(viewObj[viewObj.heading].mappings))
                            resolveExplicit = true;
                    if (resolveExplicit)                                                /* explicit mapping */
                        for (let mapping in viewObj[viewObj.heading].mappings)
                            httpParams[mapping] = stateParams[viewObj[viewObj.heading].mappings[mapping]];
                    else {                                                              /* implicit mapping */
                        let parameters = httpService.getParameters(viewObj[viewObj.heading].operationId);
                        for (let parameter of parameters)
                            if (isDefined(stateParams[parameter]))
                                httpParams[parameter] = stateParams[parameter];
                    }
                    /* On successfull REST operation - populate heading params with values */
                    console.log(copyObject(httpParams))
                    let [response, isSuccess] = await httpService.request(viewObj[viewObj.heading].operationId, httpParams);
                    if (isSuccess) {
                        for (let param of viewObj[viewObj.heading].Params)
                            param.value = response.data[param.name];
                    }
                }
        }
    }
}