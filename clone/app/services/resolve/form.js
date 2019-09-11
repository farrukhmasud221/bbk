/** A method to resolve form component - there are two distinct type of forms - ones with sections and ones without. Each call their own helper method internally.
 * @param {object} viewObj - metadata for the current view object
 * @param {object} httpParams - params & their values potentially required to execute REST operation for the (submission) of the form
 * @param {object} stateParams - params from state as well as possibly some data params
 * @param {object} httpService - service to execute REST operations
 * @param {function} getParamLabel - method to get label from name if label is not defined
*/
export let resolveForm = async (viewObj, httpParams, stateParams, httpService, getParamLabel) => {
    let sections = viewObj.sections ? viewObj.sections : [viewObj]; /* treat form as having sections (even if it doesnt) so following code will be common for both cases */
    let independantSelects = [];         /* independant dynamic Selects in all sections of the form */
    let staticIndSelects = [];          /* independant static Selects in all sections of the form */
    viewObj.showHidden = {};            /* there may be sections which are displayed on selecting some option - this objects keeps track of such sections & ensures that in form submit only visible section paramters are sent via HTTP */

    let index = 0;
    for (let section of sections) {     /* for each section of form */
        let params = section.Params || [];
        let dependantSelects = [];                /* dependant selects (both static and dynamic) in current section of form */

        if (isDefined(section.id))          /* sections with id's are those sections in which some param controls hidden sections */
            viewObj.showHidden[parseInt(section.id)] = {}; /* create a property with that id on scope's viewObj.showHidden*/

        if (isDefined(section.parentSection)) {
            sections[section.parentSection][section.parentParam] = sections[section.parentSection][section.parentParam] || [];
            sections[section.parentSection][section.parentParam].push(index);
            console.log(sections)
        }
        for (let param of params) {             /* for each param in section */
            param.label = getParamLabel(param);     /* get label of param */
            if (param.ctype === 'select' || param.ctype === 'selectSearch') {         /* if param is a select */
                param.options = param.options || [];    /* create an options array on the param if not already there */
                if (!isDefined(param.parent)) {         /* if select is independant (i.e. no parent) */
                    /* push default select option (either from stateview if defined there or hardcoded) to param and push it to independant select array */
                    param.options.unshift({ display: param.defaultOption ? param.defaultOption : "--- Select " + param.label + " ---", value: '' });
                    independantSelects.push(param);
                } else                                  /* if select is dependant i.e. has parents, push it to dependantSelects array */
                    dependantSelects.push(param);
            }
            if (param.collapse)                  /* param with collapse property is the one which controls hidden section display */
                viewObj.showHidden[parseInt(section.id)][param.name] = '';  /* so attach that property to id too and set it to false */
        }

        for (let depSelect of dependantSelects) {   /* for each dependant select in dependant selects */
            let parent = params.find(element => element.name === depSelect.parent) || {};   /* find its parent select param */
            parent.children = parent.children || [];    /* attach a children property to the parent param if not already defined */
            parent.children.push(depSelect);            /* and push the dependant selct to it */
            /* Add default select option, either from stateview if defined there or hardcoded  and push it to options */
            depSelect.defaultOption = { display: depSelect.defaultOption ? depSelect.defaultOption : "Select " + parent.label + " first!", value: '' };
            depSelect.options.push(depSelect.defaultOption);
        }
        index++;
    }

    let uniqueDataSources = [];                 /* minimize http requests by getting unique operationIds */
    for (let indSelect of independantSelects)   /* get unique dataSources from all independant Selects, filtering by datasource to endure only dynamic selects are considered */
        if (indSelect.operationId && !uniqueDataSources.find((element) => element[0] === indSelect.operationId))
            uniqueDataSources.push([indSelect.operationId, indSelect.mappings]); /*  mappings in select param indicate that their operation needs input(s) from stateParams */

    let dynamicIndependantSelects = [];     /* Array that contains the resolved independant dynamic selects */
    let asyncRequests = [];                 /* create an array of async requests to fire off in parallel but be awaited for all of them to resolve */
    uniqueDataSources.forEach(uniqueDataSource => { /* for each independant select, execute REST to get options, and push aync REST operation to array */
        let requestParams = {};
        if (isDefined(uniqueDataSource[1]))         /* if mappings exist for the select */
            Object.keys(uniqueDataSource[1]).forEach(mapping => {   /* then for each mapping, get the value from state param and push into requestParams */
                let mappingName = uniqueDataSource[1][mapping];
                let value = stateParams[mappingName] ? stateParams[mappingName] : null;
                if (value !== null)
                    requestParams[mapping] = value;
            });
        asyncRequests.push(httpService.request(uniqueDataSource[0], requestParams).then(([response, isSuccess]) => {
            let index = independantSelects.length;
            while (index--)                             /* then for all independantSelects */
                if (independantSelects[index].operationId === uniqueDataSource[0]) {    /* if operationId is same as that of the current unique operationId */
                    if (isSuccess) {
                        if (independantSelects[index].targetParam)  /* if this indSelect has targetParam i.e some param whose value depends on this select */
                            independantSelects[index].data = {};        /* then create a data property on the select and attach the result */
                        for (let row of response.data.rows) {      /* push all results from REST call to options */
                            independantSelects[index].options.push({ display: row[independantSelects[index].displayName], value: row[independantSelects[index].valueName] });
                            if (independantSelects[index].targetParam)
                                independantSelects[index].data[row[independantSelects[index].valueName]] = row[independantSelects[index].targetName];
                        }
                    } else
                        independantSelects[index].options = [{ display: "Record not found" }];
                    dynamicIndependantSelects.push(independantSelects[index]);  /* push the resolved dynamic independent select to array */
                    independantSelects.splice(index, 1);                        /* finally remove the current resolved dynalic select from the independantSelects array */
                }
        }));
    });

    await Promise.all(asyncRequests);       /* await resolution of all promises i.e. async tasks above, before proceeding */
    /* Now, set initial value of all independant selects (if specified in stateview (Or from stateparams), else to 0). Then do the same recursiely for all their children */
    for (let select of independantSelects.concat(dynamicIndependantSelects))
        await resolveDependantSelects(select, stateParams, httpService, true);

    /* For forms, we fill some parameter values with values from stateParams (things like account ID etc and that reside in the state/url) and/or the grid row for which the form is called. These are values which are required by the operation to work, but not necessary for the user to provide (and its not expected that the user will provide these). At the moment, it is assumed that of the type searchview and sectioninsertview may also require input from state or url or row - !!!  ??? BUT THIS MAY NEVER BE TRUE OR PRODUCE ERROR SO HANDLE IN FUTURE 
    Dor URoV forms, we do not change their direction since all params come prepopulated from state Params */
    viewObj.httpParams = httpParams;
    for (let section of sections) {
        section.nColumns = section.nColumns || 2;
        for (let param in viewObj.httpParams) {
            /* Not all params defined in swagger schema will be defined in metadata. Only if the param is defined in metadata & resolved beforehand should we change its direction to filled so that it is not rendered. */
            let viewObjParam = section.Params.find(element => element.name === param);
            if (isDefined(viewObjParam) && viewObj.panelType.toLowerCase() !== 'updateablereadonlyview') {
                viewObjParam.direction = isDefined(viewObjParam.direction) ? viewObjParam.direction === 'in' ? "filled" : viewObjParam.direction : "filled";
                if (viewObjParam.bulkValue)                 /* if bulk edit form type */
                    viewObjParam.value = viewObjParam.bulkValue;
            }
        }
    }

    /* For dynamic sections, we do this part right at the end because we are making a copy of the original paramters of the section, NOT BY REFERENCE. Which means that any changes after this point in the master params won't be reflected in the added section so this part is done at the end */
    for (let section of sections) {
        if (section.dynamic) {   /* if section is dynamic i.e. its fields/params are allowed to be dynmaillcay added*/
            section.masterParams = JSON.parse(JSON.stringify(section.Params));  /* then make a copy of the original parameters defined in the section */
            section.nCopies = 0;                                                /* add a property nCopies on the section and set it to 0 to keep track of dynamic copies */
            for (let i = 0; i < nHidden(section.masterParams.length, section.nColumns); i++)    /* and add hidden elements to improve layout of buttons */
                section.Params.push({ "ViewParamId": null, "name": "", "ctype": "hidden", "paramtype": "bigint", "direction": "in", "validator": "", "width": "*" });
        }
        if (section.apply) {    /* if section is for applying bulk values to a grid, then create a mappings property on the main viewObj & maintain a label-name mapping */
            viewObj.labelNameMappings = {};
            section.Params.forEach(param => { viewObj.labelNameMappings[param.label] = param.name; });
        }
        fillRows(section);      /* create rows on section for rendering of non-hidden and non-filled params according to the number of columsn defined by the user */
    }
}

/** A method that returns the number of hidden elements to be added to a section to improve layout. Returns 0 if number of elements is divisible by number of columns
 * @param {number} length - number of non-hidden (ctype) params in a sections
 * @param {number} n - number of columns in a section
 * @return {number}
 */
export let nHidden = (length, n) => { let x = n - length % n; return x === n ? 0 : x; }

/** Method that creates a rows array on the section for rendering of elements whose direction is not hidden ir filled. Creates rows based on number of in params and number of colums in the sections. rows is a 2d array, each array represent a row, and each element in a row is the index of the param to be rendered  with respect to the section.Params array
 * @param {object} section - section of form 
 */
export let fillRows = section => {
    let nRows = 0;
    section.rows = [[]];
    section.Params.forEach((param, index) => {
        if (param.direction !== 'hidden' && param.direction !== "filled" && param.direction !== "out") {
            section.rows[nRows].push(index);
            if (section.rows[nRows].length === section.nColumns) {
                nRows++;
                section.rows.push([]);
            }
        }
    });
    section.colClass = "col-md-" + 12 / section.nColumns + " col-sm-" + 12 / section.nColumns;  /* determine bootstrap grid class based on number of columns */
}

/** Recursive method that resolves a select param and all its children. i.e. it resets all children (and children of children) & fetches the options for the immediate children. If isInit is set to true, also sets the initial value of a select param (based on either an initial value/display provided by the stateview or from matches in state params (e.g. opening a form from a relevant RoV) - stateParam takes precedence over any initial value set in stateview) and all its children. 
 * @param {object} param - select param to be (possibly initialized) and resolved 
 * @param {object} stateParams - $stateParams
 * @param {object} httpService - httpService for REST
 * @param {boolean} isInit - identifies if value is to be initialized.
 */
export let resolveDependantSelects = async (param, stateParams, httpService, isInit) => {
    if (isInit) {   /* set initial value of this param and all its children if this is true. Else uses component passed value to resolve children of param */
        let initIndex = (isDefined(param.initValue) || isDefined(param.initDisplay)) ? param.options.findIndex(option => (option.display === param.initDisplay || option.value === param.initValue)) : -1;      /* if initial value or display is defined in stateview, then look for that value/display in options array, and get index */

        /* look for display/value name match in stateparams, and if found, look for value/display in options array, and get index*/
        let stateParam = Object.keys(stateParams).find(stateParam => stateParam === (param.displayName || param.valueName));
        if (stateParam) initIndex = param.options.findIndex(option => (option.display === stateParams[stateParam] || option.value === stateParams[stateParam]));

        initIndex = initIndex ? initIndex === -1 ? 0 : initIndex : 0;   /* set index to 0 if no inital match found, else let it remain index */
        param.value = param.options[initIndex].value;                   /* and now set the param's initial value */
    }

    for (let child of param.children || []) {                       /* resolve all children of this select param */
        child.options = [child.defaultOption];                          /* reset the options array to default option */
        child.value = child.options[0].value;                           /* set the default value that is viewed */
        if (isDefined(param.value)) {                                   /* if parent's initial value is defined (means something is selected from options) */
            /* then change default option/message of child and fetch its options */
            child.options[0] = { display: child.onChangeDefaultOption ? child.onChangeDefaultOption : "--- Select " + child.label + " ---", value: ' ' };
            child.value = child.options[0].value;
            if (child.operationId) {                                         /* if child is dynamic , fetch options via HTTP */
                let [response, isSuccess] = await httpService.request(child.operationId, { [Object.keys(child.mappings)[0]]: param.value });
                if (isSuccess)
                    for (let row of response.data.rows)
                        child.options.push({ display: row[child.displayName], value: row[child.valueName] });
            } else                                                          /* else fethc them from static source */
                child.options = child.options.concat(child.dataSource[param.value]);
        }
        /* finally, call the same method on the child to set its initial value (if specified in stateview or from stateparams), and do the same for all its children */
        await resolveDependantSelects(child, stateParams, httpService, isInit);
    }
    return;
}