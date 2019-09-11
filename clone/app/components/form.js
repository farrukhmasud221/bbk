import { nHidden, fillRows, resolveDependantSelects } from '../services/resolve/form';
import { resolveGridColumnLengths } from '../services/resolve/grid';
export const formComponent = {
    bindings: {
        viewsObj: "<",
        resolve: "<",
        close: '&',
        dismiss: '&'
    },
    controller: ["$scope", "$state", "$filter", "httpService", "$stateParams", 'metaDataService', 'toastService', '$timeout', 'utilityService', '$interval', 'modalService', function ($scope, $state, $filter, httpService, $stateParams, metaDataService, toastService, $timeout, utilityService, $interval, modalService) {
        let vm = this;

        /* ON CONTROLLER INITIALIZTION */
        vm.$onInit = () => {
            vm.isDefined = isDefined;
            /* either form is resolved from state resolve or modal resolve - latter get passed to resolve property - so get it to scope properly */
            vm.viewsObj = vm.resolve ? vm.resolve.viewsObj : vm.viewsObj;

            /* form CANNOT be an array - if array - only 1st element is valid !*/
            vm.viewsObj = !Array.isArray(vm.viewsObj) ? vm.viewsObj : vm.viewsObj.length === 1 ? vm.viewsObj[0] : null;

            /* Apply class flatpickr when form (DOM) is loadead */
            let timer = $interval(() => {
                if (document.getElementsByTagName('form')[0] !== null) {
                    $interval.cancel(timer);
                    vm.viewsObj.dateTimeConfig = { enableTime: true, enableSeconds: true, minuteIncrement: 1, defaultHour: 0 };
                    flatpickr(".flatpickr", vm.viewsObj.dateTimeConfig);
                }
            }, 10, 2500);                                           /* poll every 10ms second till we get element for a maximum of 25s */

            vm.buttonLabel = vm.viewsObj.buttonLabel || (vm.viewsObj.panelType.toLowerCase().indexOf("update") !== -1 ? "Update" : vm.viewsObj.panelType.toLowerCase().indexOf("search") !== -1 ? "Search" : vm.viewsObj.panelType.toLowerCase().indexOf("insert") !== -1 ? "Insert" : "Submit");   /* Put button label depending on form type */
            vm.showResult = false;          /* variable which controls whether to show grid search result or not */
            vm.lockSelectChange = false;    /* when changing a select param with dependants, we change options for those depenandats, which causes the callback to be fired again. To prevent this, we locks the function from being fired till the original select param is done by setting this variable to true */

            /* for each section, check if targetParam needs to be filled or hidden secion to be shown based on initialized parent */
            for (let section of vm.viewsObj.sections || [vm.viewsObj])
                section.Params.forEach(param => {
                    if ((param.ctype === 'select' || param.ctype === 'searchSelect') && isDefined(param.value) && (param.collapse || param.targetParam))
                        vm.resolveTargetParamsAndHiddenSections(param, section);
                });
        }

        vm.rightClick = row => {
            console.log("FORM:", row);
        };

        /** This method does inline validation of form inputs */
        let checkValidity = vm.checkValidity = (param) => {
            //if (param.ctype === 'textbox' || param.ctype === 'label' || param.ctype === 'textarea')
            //console.log(angular.element('input.ng-invalid'))
            //console.log(param)
        }

        let fileValidator = vm.fileValidator = async param => {
             if (!param.value && document.getElementById(param.id || param.name).files.item(0) !== null) {
                toastService.createToast('error', 'Error', 'Invalid File Type');
             } else if (param.value) {

             }
        }

        /** This method fills dateTime param boxes that form ranges with some dates based on the the selected option
         * @param {string} param - the param of the dateTime (could be start or end)
         * @param {number} dateOffset - days in integer that you want to offset today's date (both positive/negative)
         * @param {number, boolean} option - what time to put in range -> false means current time, else if integer from 0 to 23, that is added
         */
        let fillDate = vm.fillDate = (param, dateOffset, option) => {
            let useMonth = dateOffset % 30 === 0 && (dateOffset > 30 || dateOffset < - 30);     /* if offset divisible by 30 and more than 30, set date by setting month */
            let useDays = dateOffset >= 1 || dateOffset <= -1 || dateOffset === 0;              /* if offset is more than 1 or 0, set date by setting days */
            let useHours = dateOffset > 1 / 24 || dateOffset < - 1 / 24;                        /* if offset is more than 1/24 (i.e more than 1 hr), set hours */
            param.value = $filter('date')(useMonth ? new Date().setMonth(new Date().getMonth() + dateOffset / 30) : useDays ? new Date().setDate(new Date().getDate() + dateOffset) : useHours ? new Date().setHours(new Date().getHours() + dateOffset * 24) : new Date().setMinutes(new Date().getMinutes() + dateOffset * 24 * 60), 'yyyy-MM-dd ' + (option !== false ? (parseInt(option) < 10 ? "0" + option : option) + ":00:00" : 'HH:mm:ss'));
            //console.log(JSON.stringify(param.value))
            let config = JSON.parse(JSON.stringify(vm.viewsObj.dateTimeConfig));
            config.defaultDate = param.value;
            flatpickr(document.getElementById(param.name), config);
        }

        /**This method fills TargetParams or shows hidden sections based on change in select option
         * @param {object} selectParam - param that has its selected value changed
         * @param {object} section - section to which the select param belongs
         */
        let resolveTargetParamsAndHiddenSections = vm.resolveTargetParamsAndHiddenSections = (selectParam, section) => {
            /* if select param has targetParam i.e. some other param has to be filled after change in this param's selected value, update its value accordingly */
            if (selectParam.targetParam)
                $timeout(() => section.Params.find(element => element.name === selectParam.targetParam).value = selectParam.data[selectParam.value], 0);
            console.log(copyObject(vm.viewsObj.showHidden))
            if (selectParam.collapse) /* if select param is collapse i.e. it has hidden sections associated with it, then show appropriate section */
                $timeout(() => {
                    vm.viewsObj.showHidden[section.id][selectParam.name] = selectParam.value; console.log(section.id, selectParam.name, selectParam.value, copyObject(vm.viewsObj.showHidden));
                    console.log(section)
                    section[selectParam.name].forEach(targetSection => {
                        if (vm.viewsObj.sections[targetSection].hasDynamicParams) {
                            vm.viewsObj.sections[targetSection].Params = [];
                            if (isDefined(selectParam.value)) {
                                let display = selectParam.options.find(option => option.value === selectParam.value).display;
                                if (isDefined(display)) {
                                    httpService.getParameters(display).forEach(param => {
                                        vm.viewsObj.sections[targetSection].rowSignature.forEach(rowParam => {
                                            vm.viewsObj.sections[targetSection].Params.push({ name: rowParam.name + (rowParam.dynamicName ? param : ''), label: rowParam.label + (rowParam.dynamicLabel ? param : ''), ctype: rowParam.ctype, direction: rowParam.direction, stripDynamic: rowParam.stripDynamic, isPrimary: rowParam.dynamicLabel && rowParam.dynamicName, dynamicString: param });
                                            if (vm.viewsObj.sections[targetSection].Params[vm.viewsObj.sections[targetSection].Params.length - 1].ctype === 'checkbox')
                                                vm.viewsObj.sections[targetSection].Params[vm.viewsObj.sections[targetSection].Params.length - 1].value = false;
                                        });
                                        // vm.viewsObj.sections[targetSection].nColumns = 3;
                                        // vm.viewsObj.sections[targetSection].Params.push({ name: param, label: param, direction: 'in', ctype: 'text' }, { name: param + 'allowOverwrite', label: 'Bulk Overwrite', direction: 'in', ctype: 'checkbox' }, { name: param + 'defaultValue', label: 'Default Bulk Value', direction: 'in', ctype: 'text' });
                                        // fillRows(vm.viewsObj.sections[targetSection]);
                                    });
                                    fillRows(vm.viewsObj.sections[targetSection]);
                                }
                            }
                        }
                    });
                    console.log(vm.viewsObj.showHidden[section.id][selectParam.name])
                    console.log(vm.viewsObj.showHidden[0]['API'], isDefined(vm.viewsObj.showHidden[0]['API']));
                }, 0);

            if (selectParam.name === 'API') {
                $timeout(() => vm.viewsObj.sections[1].Params[0].value = null, 0);
            }

            if (selectParam.name.indexOf("v_DateTimeRange") >= 0) {
                section.Params.forEach(param => {
                    if (param.name === selectParam.start || param.name === selectParam.end) {
                        if (isDefined(selectParam.value))
                            fillDate(param, param.name === selectParam.start ? selectParam.value[0] : selectParam.value[1], selectParam.value[2]);
                        else {
                            param.value = "";
                            let config = JSON.parse(JSON.stringify(vm.viewsObj.dateTimeConfig));
                            config.defaultDate = param.value;
                            flatpickr(document.getElementById(param.name), config);
                        }
                    }
                });
            }
        }

        vm.sectionChange = section => {
            console.log('heelo section change')
        }

        /** This method is called whenever there is a change in the value or options of any select select param in any section of the form
         * @param {object} selectParam - param that has its selected value changed
         * @param {object} section - section to which the select param belongs
         * @todo CASE MISSING/POSSIBLE ??? !!! SHOW HIDDEN ON SELECT, AND THEN HIDDEN HAS SELECT WHICH SHOWS SOME OTHER HIDDEN 
         */
        let onSelectionChangeEvent = vm.onSelectionChangeEvent = async (selectParam, section) => {
            console.log(selectParam.name, selectParam.value);
            if (!vm.lockSelectChange) {                                     /* only fire if not locked */
                resolveTargetParamsAndHiddenSections(selectParam, section);                     /* first look if this param fills some other param or shows a hidden section */
                vm.lockSelectChange = true;                                                     /* now set lock so that chnages in child params do not call this funcion again */
                await resolveDependantSelects(selectParam, $stateParams, httpService, false);   /* now resolve children of select i.e. fetch options etc */
                $timeout(() => { }, 0);                                                         /* timeout to ensure digest cycle and update of UI */
                //console.log("inlock", new Date());
                vm.lockSelectChange = false;                                                    /* release lock */
                /* CASE MISSING/POSSIBLE ??? !!! SHOW HIDDEN ON SELECT, AND THEN HIDDEN HAS SELECT WHICH SHOWS SOME OTHER HIDDEN */
            }
        }

        /** This method copies a section from another section on the checking of checkbox
         * @param {object} checkBox - checkbox param
         * @param {object[]} params - params for the section in which checkbox ticked
        */
        let copySection = vm.copySection = (checkBox, params) => {
            if (checkBox.value)                                     /* if checkBox is checked */
                for (let section of vm.viewsObj.sections)               /* then for all sections */
                    if (section.heading === checkBox.source) {              /* find section from which to copy current section from */
                        for (let param of params)                                /* then for each param in current section */
                            if (param.ctype !== "copyCheckbox" && param.source)      /* for those params who have to be copied */
                                for (let sectionParam of section.Params)                 /* find, among matched section */
                                    if (sectionParam.name === param.source) {                 /* the param from which to copy */
                                        if (sectionParam.ctype === 'select' || sectionParam.ctype === 'selectSearch')                     /* if param is select then copy options as well */
                                            param.options = sectionParam.options;
                                        param.value = sectionParam.value;                        /* copy value */
                                        break;
                                    }
                        break;
                    }
        }

        /** This method is called on the click of the search button & shows/updates the search grid based on search paramters
         * @param {object} viewObj - view object for the search form
         */
        let search = vm.search = async viewObj => {
            let searchParams = JSON.parse(JSON.stringify(vm.viewsObj.httpParams));
            // let searchParams = {};
            viewObj.Params.forEach((param, key) => {    /* for each param */
                if (isDefined(param.value))                 /* if value is defined only then put it in search params */
                    searchParams[param.name] = param.value;
            });

            if (isDev)
                toastService.createToast('info', "Parameters Searched", searchParams, 5000);

            /* execute REST query based on search params and update grid based on respinse - also show grid if hidden */
            let [response, isSuccess] = await httpService.request(viewObj.operationId, searchParams);
            viewObj.gridOptions.data = isSuccess ? response.data.rows : [];
            vm.showResult = true;
            viewObj.gridApi.core.refresh();
        }


        /** This method is called on the click of the insert/update/create/add/submit button - basically submits the forms for submission
         * @param {object} viewObj - view object for the form
         * @todo CASE MISSING/POSSIBLE ??? !!! AT THE MOMENT a section can be dynamic or hidden, not both !
         */
        let submit = vm.submit = async viewObj => {
            if (!vm.form.$valid) {                                  /* if form is invalid, then set submitted to false and scroll to first invalid element */
                vm.form.$submitted = false;
                angular.element('input.ng-invalid').first().focus();
            } else {
                /* treat form as having sections - so even if form doesn't have sections, following code will be common for both */
                let sections = viewObj.panelType.toLowerCase() === "sectioninsertview" ? viewObj.sections : [viewObj];
                let requestParams = JSON.parse(JSON.stringify(vm.viewsObj.httpParams));
                for (let section of sections) {                     /* for each section */
                    if (section.dynamic && section.nCopies > 0) {       /* if section is dynamic & there are copies */
                        section.masterParams.forEach(param => {             /* then for each param in the copy of master params (original array) of this section */
                            requestParams[param.name] = [];                     /* create an empty array on http Params */
                        })
                        section.Params.forEach(param => {                   /* then for each param is this section other than buttons and hiddens params */
                            if (param.ctype !== 'hidden' && param.ctype !== 'removeButton') /* push value on array declared above */
                                requestParams[section.masterParams.find(element => param.name.indexOf(element.name) >= 0).name].push(isDefined(param.value) ? param.value : null);
                        });
                    } else if (section.parentSection === undefined || vm.viewsObj.showHidden[section.parentSection][section.parentParam] === section.parentParamValue || (section.notParentParamValue === true && isDefined(vm.viewsObj.showHidden[section.parentSection][section.parentParam]))) { /* if section does not have a parent section i.e. its not hidden section or if its a hidden section and that hidden section is currently shown */
                        //console.log(section.Params)
                        if (section.hasDynamicParams) {
                            if (isDefined(section.submitAs)) {
                                requestParams[section.submitAs] = Array.isArray(section.rowSignature) ? [] : {};
                                let row = {}; let isPrimary = false;
                                section.Params.forEach((param, index) => {        /* for each param */
                                    if (index % section.rowSignature.length === 0 && index > 0) {
                                        //let keys = Object.keys(row)
                                        if (Object.keys(row).length && isPrimary)
                                            requestParams[section.submitAs].push(row);
                                        row = {};
                                        isPrimary = false;
                                    }
                                    if (isDefined(param.value)) {                     /* if param value is defined, attach value to http Params */
                                        if (param.isPrimary)
                                            isPrimary = true
                                        let key = param.stripDynamic ? param.name.replace(param.dynamicString, '') : param.name;
                                        row[key] = param.value;
                                    }
                                });
                                requestParams[section.submitAs].push(row);
                                console.log(requestParams)
                            } else {

                            }
                        } else
                            section.Params.forEach((param, key) => {        /* for each param */
                                if (isDefined(param.value))                     /* if param value is defined, attach value to http Params */
                                    requestParams[param.name] = param.value;
                            });
                    } else {
                        //toastService.createToast('error', "ELSE IN SUBMITTING FORM!", 'condition not being checked', 5000);
                        console.log("THIS IS A HIDDEN SECTION NOT BEING SUBMITTED", section);
                    }
                }
                /* CASE MISSING/POSSIBLE ??? !!! AT THE MOMENT a section can be dynamic or hidden, not both ! */
                let toastKey = viewObj.panelType.toLowerCase().indexOf("insert") < 0 ? "updateAlert" : "insertAlert";       /* set toast message */

                if (isNotDefined(viewObj.confirmSubmission) || !viewObj.confirmSubmission) {                            /* if form doesn't require confimation to submit */
                    let [response, isSuccess] = await httpService.request(viewObj.operationId, requestParams, toastKey);    /* execute REST request */
                    let result = isSuccess ? "success" : "failure";                                                         /* key for success/failure */
                    if (isDefined(viewObj.nextState) && isDefined(viewObj.nextState[result])) {                                 /* if next state defined */
                        let stateParams = {};
                        if (isDefined(viewObj.nextState[result].params))                                                            /* populate state params if needed */
                            for (let param in viewObj.nextState[result].params)
                                stateParams[param] = response.data[viewObj.nextState[result].params[param]];
                        console.log("STATE PARAMS SUBMITTED TO NEXT STATE", stateParams, response);

                        /* !!! IF WE WANT TO SEND BY URL, UNCOMMENT THIS AND HAVE URL DEFINED IN YOUR STATEVIEW. BUT NEED TO CHECK HOW TO SEND MULTIPLE STATE PARAMS WITHTHIS METHOD (MULTIPLE ARE SENT WITH STATE.GO!) */
                        // let url = viewObj.nextState[result].url;
                        // for (let param in viewObj.nextState[result].params) {
                        //     url = url.replace(':' + param, response.data[viewObj.nextState[result].params[param]]);
                        //     if (url.indexOf(':' + param) < 0) $stateParams[param] = response.data[viewObj.nextState[result].params[param]];
                        // }
                        // console.log(url, copyObject($stateParams))
                        // $timeout(() => { window.location.href = HASH + url }, 0);

                        /* go to next state -> wrapped in $timeout b/c otherwise state is only transitioned to once, other times it get rejected. E.g. if not wrapped in $timeout, and create subscribers, for the 1st created subscriber it would take us to dashboard but for any subsequent ones it wont! */
                        $timeout(() => { $state.go(viewObj.nextState[result].state, stateParams); /*window.location.href = HASH + url; */ }, 0);
                    }
                    if (isSuccess) {        /* if REST wast success and there was no next state, reload parent state and close modal, else remain here */
                        /* This is a work around to reload:true reloading all parent states. Having a state param defined for the state you want to reload and flipping it is enough to cause the state to be reloaded (and only that state) when yo go directly to it. */
                        $stateParams.reload = !$stateParams.reload;
                        $state.go($state.current.name, $stateParams);
                        //vm.close();
                    }
                } else {                            /* if form requires confimation to submit */
                    let detailViewObj = {};             /* create a viewObject for depicting submitted paramters in a detail panel inside a modal */
                    detailViewObj.sections = [];
                    detailViewObj.heading = "Confirmation Page - " + viewObj.heading;
                    sections.forEach(section => {       /* for each section of the form - if the section is independeant or if dependent section is not hidden */
                        if (section.parentSection === undefined || vm.viewsObj.showHidden[section.parentSection][section.parentParam] === section.parentParamValue) {
                            let currentSectionObj = {};     /* create an object for the section, copy the heading from the section, and create an emty Params array*/
                            currentSectionObj.heading = section.heading;
                            currentSectionObj.Params = [];
                            section.rows.forEach(row => {   /* Then for each row in this section (i.e. visible/rendered params) */
                                row.forEach(index => {          /* for each index in the row, get the param in section Params on that row index */
                                    let param = JSON.parse(JSON.stringify(section.Params[index]));
                                    if (param.ctype !== 'hidden' && param.ctype !== 'removeButton') {   /* if param is not hidden or removed button */
                                        param.direction = "out";                                            /* set its direction to out */
                                        if (param.ctype === 'select' || param.ctype === 'searchSelect')     /* and if its type is select, set value equal to display */
                                            param.value = isDefined(param.value) ? param.options.find(option => option.value === param.value).display : "";
                                        currentSectionObj.Params.push(param);                               /* and then push this mutated param into the section params array*/
                                    }
                                });
                            });
                            detailViewObj.sections.push(currentSectionObj); /* Finally push this sectionObj to the viewObject for the detail panel */
                        }
                    });
                    detailViewObj.requestParams = JSON.parse(JSON.stringify(requestParams));    /* copy the request params already parsed to the detail view object */
                    detailViewObj.operationId = viewObj.operationId;                            /* and copy other needed view Object information */
                    detailViewObj.toastKey = toastKey;
                    detailViewObj.buttonLabel = "Confirm " + viewObj.buttonLabel;
                    detailViewObj.panelType = 'FormDetail';
                    detailViewObj.nextState = viewObj.nextState;
                    modalService.createModal(detailViewObj, $stateParams);                      /* finally render detail panel in modal */
                }
            }
        }

        /** This methods dynamically adds a copy of the params in the section to the section.Params array, initializing their values as well, and adding padded params (like hidden or remove button) for proper layout.
         * @param {object} section - sections whose parameters are to be dynamically added
         * @todo - !!! ??? even in the case of setting the parent correctly, since new method relying on children is used for chain of dependant dropdows, this is likely to fail when dynamically adding a section with dependent dropdowns. Since we broke any referencing by making a shallow copy of the master params, even setting name of children correct won't work for us since reference is broken. UNLESS THIS USE CASE POPS UP< WE WILL LEAVE THIS UNIMPLEMENTED ELSE CONTROLLER WILL HAVE TO MANAGE COMPLEX CHILD PARENT RELATIONSHIPS
         */
        let addSection = vm.addSection = section => {
            /* get a copy of the master Params (original definition of the Params array) for this section*/
            let paramsCopy = JSON.parse(JSON.stringify(section.masterParams));
            for (let param of paramsCopy)   /* initialize value of each COPIED param so it does not have the same value as original */
                param.value = (param.ctype === 'select' || param.ctype === 'searchSelect') ? param.options[0].value : '';

            section.nCopies++;              /* increment nCopies which keep tracks of how many times params have been added dynamically */
            for (let param of paramsCopy) { /* for each COPIED param */
                param.name += section.nCopies;  /* add a unique identifier to its param name */
                if (param.parent)               /* if it has a parent */
                    param.parent += section.nCopies;/* correct its name so that its associated with its parent copy, not the original's parent */
                if (param.targetParam)          /* if it has a target param */
                    param.targetParam += section.nCopies;   /* correct its name so that its associated with its target param, not the original's target */
                // if (param.children)
                //     param.children.forEach(child => { child.name += section.nCopies });
            }

            /* For the newly added section, add some hidden elements for layout purposes */
            let hiddenElementsToBePlaced = nHidden(section.masterParams.length, section.nColumns);
            hiddenElementsToBePlaced = hiddenElementsToBePlaced === 0 ? section.nColumns - 1 : hiddenElementsToBePlaced - 1;
            for (let i = 0; i < hiddenElementsToBePlaced; i++)
                paramsCopy.push({ "ViewParamId": null, "name": "", "ctype": "hidden", "paramtype": "bigint", "direction": "in", "validator": "", "width": "*" });

            /* add button for removing this section. put an index property to correctly identify which set of copies is to be removed */
            paramsCopy.push({ "ViewParamId": null, "name": "", index: section.nCopies, "ctype": "removeButton", "direction": "in", "validator": "", "width": "*" });
            section.Params = section.Params.concat(paramsCopy); /* add the copy to the params array of the section - view will now update */
            fillRows(section);
        }

        /** This method removes the dynamically created copy of the params for the section 
         * @param {object} section - the section for which we are removing params
         * @param {number} index - identifies which dynamically added copy is to be removed
        */
        let removeSection = vm.removeSection = (section, index) => {
            //console.log("section before splicing", JSON.parse(JSON.stringify(section.Params)));

            /* Depending on whether the number of parameters that we dynamically copied were odd or even, we had added some padding (hidden elements) and remove buttons to maintain layout. Now we want to properly remove them. So we need to get the total number of elements in the dynamic section, which is equal to the number of hidden elements (including button) plus number of params actually there. This is stored in spliceSize - the # of elemenets to be removed from the section.Params array (including remove button & hidden element). */
            let hiddenElementsAdded = nHidden(section.masterParams.length, section.nColumns);
            let spliceSize = (hiddenElementsAdded === 0 ? section.nColumns : hiddenElementsAdded) + section.masterParams.length;

            /* startIndex is the index of the section.Params array from which we will start removing this dynamic copy of the parameters */
            let startIndex = section.masterParams.length + hiddenElementsAdded + (index - 1) * spliceSize;
            section.Params.splice(startIndex, spliceSize);      /* remove this copy of paramters from the array*/
            section.Params.forEach((param, i) => {              /* from all the remaining params */
                if (param.ctype === 'removeButton' && param.index > index) {    /* look for copied sections after the removed section, identified by removeButton presence */
                    for (let j = 1; j <= spliceSize - 1; j++) {                     /* then for each param in the copied section (we are going back from the remove button) */
                        let sectionParam = section.Params[i - j];
                        if (sectionParam.ctype !== 'hidden') {                      /* rename their name, parent, and target accordingly */
                            sectionParam.name = sectionParam.name.substring(0, sectionParam.name.lastIndexOf(param.index)) + (param.index - 1);
                            if (sectionParam.parent)
                                sectionParam.parent = sectionParam.parent.substring(0, sectionParam.parent.lastIndexOf(param.index)) + (param.index - 1);
                            if (sectionParam.targetParam)
                                sectionParam.targetParam = sectionParam.targetParam.substring(0, sectionParam.targetParam.lastIndexOf(param.index)) + (param.index - 1);
                            // if (sectionParam.children)
                            //     sectionParam.children.forEach( child => { child.name = })
                        }
                    }
                    param.index = param.index - 1;
                }
            })
            //console.log("section after splicing", section.Params)
            section.nCopies--;
            fillRows(section);
        }
    }],
    templateUrl: 'app/templates/form.html'
}