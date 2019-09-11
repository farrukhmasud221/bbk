import FileSaver from 'file-saver';

/** Service to send REST requests and get responses based on swagger (Open API) schema. Also has methods for logging in and logging out. */
export class httpService {
    constructor($http, $state, usSpinnerService, $stateRegistry, toastService, $window) {
        /* KEEP A COPY OF INJECTED SERVICES AND ANGULAR DEPENDANCIES*/
        this.$http = $http;
        this.$state = $state;
        this.$stateRegistry = $stateRegistry;
        this.usSpinnerService = usSpinnerService;
        this.toastService = toastService;
        this.$window = $window;

        this.username = null;                       //username of logged in user
        this.status = false;                        //authentication status of current user
        this.operations = null;
        this.host = null;


        this.config = null;                         //config object that defines some initial operationIds (like for login and logout)
        this.init = (async () => {                  //get the swagger schema 
            this.swaggerSchema = await fetch('../../customer/schema/swagger.json');
            this.swaggerSchema = await this.swaggerSchema.json();
        })()
    }

    /** Method to send a REST request
     * @param {string} operationId - operationId for the REST path/request - must be in swagger.json
     * @param {object} params - parameter to to send in the request - typically query parameters. MUST be an object of type { param1: value1, param2: value 2}, where param1 and param2 are the parameter names defined in swagger.json for the current operation.
     * @param {string} [toastKey] - optional parameter to display toast message - based on value of toastKey- on success or failure of REST request, where toastKey is defined in config.json. For example, to display a toast message on success of adding a record, pass the toastKey = "insertAlert" - the message for insertAlert is defined within config.json for both success and failure. THIS IS TIED TO CONTROLLER SINCE OPERATIONS ARE DEFINED INSIDE CONTROLLER SO POTENTIALLY !!! MAY NOT NEED THESE DEFINATION INSIDE CONFIG.JSON (TO OVERLOAD DEFAULT MESSAGE MAYBE !!!)
     * @return {[Object, boolean]} - returns an array, the first element being the response object from swaggerClient and the second a boolean depicting success or failure.
     */
    async request(operationId, parameters, toastKey) {
        let params = {}; let data = {}; let url = 'http://' + this.host + this.operations[operationId].path; let isFile = false; let getFile = false;
        let $http = this.$http;
        try {
            for (let param in parameters) {
                if (this.operations[operationId].parameters[param])
                    if (this.operations[operationId].parameters[param].in === 'body') {
                        if (this.operations[operationId].parameters[param].type === 'array' && !Array.isArray(parameters[param]))
                            data[param] = [parameters[param]]
                        else if (this.operations[operationId].parameters[param].type === 'file') {
                            isFile = true;
                            data[param] = parameters[param];
                        } else
                            data[param] = parameters[param];
                    } else if (this.operations[operationId].parameters[param].in === 'query') /* hand case of query being array of premitives only !!! */
                        params[param] = parameters[param];
                    else if (this.operations[operationId].parameters[param].in === 'path') /* !!! handle case of path being array (csv, not []) */
                        url = url.substring(0, url.indexOf(param) - 1) + parameters[param] + url.substring(url.indexOf(param) + param.length + 1);
            }

            if (this.operations[operationId].responses && this.operations[operationId].responses['200'] && this.operations[operationId].responses['200'].schema && this.operations[operationId].responses['200'].schema.type && this.operations[operationId].responses['200'].schema.type === 'file')
                getFile = true;
        } catch (error) {
            this.toastService.createToast('error', 'CLIENT SIDE ERROR', error);     // create toast with error message         
            console.log('ERROR IN HTTP SERVICE:', error);
        }

        /*allowEmptyValue check -default false */
        /* GET MUST not have body, or ignore it!!! */

        /* whenever param is type array in Path, query, header , it must have items property and collectionFormat property - specifies the array format (a single parameter with multiple parameter or multiple parameters with the same name) and the separator for array items.*/
        /*  csv (default) 	Comma-separated values. 	foo,bar,baz
            ssv 	Space-separated values. 	foo bar baz
            tsv 	Tab-separated values. 	"foo\tbar\tbaz"
            pipes 	Pipe-separated values. 	foo|bar|baz
            multi 	Multiple parameter instances rather than multiple values. This is only supported for the in: query and in: formData parameters. 	foo=value&foo=another_value*/

        /*  in: query
            name: color
            required: false
            type: array
            minItems: 1
            maxItems: 5
            uniqueItems: true
            items:
                type: string
                enum: [black, white, gray, red, pink, orange, yellow, green, blue, purple, brown]*/


        /*RESPONSES : An API can respond with various media types. JSON is the most common format for data exchange, but not the only one possible. To specify the response media types, use the 'produces' keyword on the root level or operation level. The global list can be overridden on the operation level:
        paths:
        # This operation returns JSON - as defined globally above
        {
            "paths": {
                "/users": {
                    "get": {
                        "summary": "Gets a list of users.",
                            "responses": {
                            "200": {
                                "description": "OK"
                            }
                        }
                    }
                },
                "/logo": {
                    "get": {
                        "summary": "Gets the logo image.",
                            "produces": [
                                "image/png",
                                "image/gif",
                                "image/jpeg"
                            ],
                                "responses": {
                            "200": {
                                "description": "OK"
                            }
                        }
                    }
                }
            }
        }
        */
        // let headers;
        // if (isFile)
        //     headers = { 'Content-Type': undefined }
        // else
        //     headers = { 'Content-Type': 'application/json' };
        this.usSpinnerService.spin('spinner-1');            //start spinner on REST request
        let response;
        try {
            if (!isFile && !getFile)
                response = await $http({ method: this.operations[operationId].method, url: url, data: data, params: params });
            else if (isFile)
                response = await $http({
                    method: this.operations[operationId].method, url: url, data: data, params: params, headers: { 'Content-Type': undefined }, transformRequest: (data, headersGetter) => {
                        var formData = new FormData();
                        angular.forEach(data, function (value, key) {
                            formData.append(key, value);
                        });
                        return formData;
                    }
                });
            else if (getFile) {
                response = await $http({
                    method: this.operations[operationId].method, url: url, data: data, params: params, responseType: 'arraybuffer'
                });
                FileSaver.saveAs(new Blob([response.data]), JSON.parse(response.headers()['content-disposition'].split(';')[1].split('filename')[1].split('=')[1].trim()), { type: response.headers()['content-type'] });
            }
        } catch (error) {
            response = error;
        }
        response = await handleResponse(response, $http, this.toastService, this.config, toastKey, false);
        this.usSpinnerService.stop('spinner-1');            //stop spinner service on REST response
        /* if 401 unauthorized error on operation that is not a login or a logout => session expire -> log user out */
        if (response.status == 401 && operationId !== this.config.logoutOperationId && operationId !== this.config.loginOperationId)
            this.logout(false);
        return [response, response.status === 200];                       //return response and boolean indicating success
    }

    /** Authenticate user 
     * @param {string} username - username
     * @param {string} password - password
     * @return {boolean} - success or failure
    */
    async login(username, password) {   /* - !!! ??? MAYBE HAVE A MORE GENERAL WAY THAT USERNAME & PASSWORD I.E. SHOULD ACCEPT EMAIL, AND OAUTH REDIRECTS ETC. */
        this.config = await fetch('../../customer/schema/config.json');
        this.config = await this.config.json();
        this.config = JSONfn.parse(JSON.stringify(this.config));

        let primitiveTypes = {
            'integer': { "int32": "integer - signed 32 bits", 'int64': "long - signed 64 bits" },
            'number': { 'float': 'float', 'double': 'double' },
            'string': { '': 'string', 'byte': 'byte - base64 encoded characters', 'binary': 'binary - any sequence of octets', 'date': 'date - as defined by RFC3339', 'dateTime': 'date-time - as defined by RFC 3339', 'password': 'password - a hint to obscure pwds' },
            'boolean': {}
        }
        let operations = {}; let swaggerSchema = this.swaggerSchema;
        for (let path in swaggerSchema.paths)
            for (let method in swaggerSchema.paths[path]) {
                let parameters = {};
                for (let param of swaggerSchema.paths[path][method].parameters) {
                    if (param.in === 'body') {
                        if (param.schema.type !== 'object' && param.schema.type !== 'array')
                            parameters[param.name] = { in: 'body', required: param.required || false, type: param.schema.type };
                        else if (param.schema.type === 'object')
                            Object.keys(param.schema.properties).forEach(key => {
                                parameters[key] = param.schema.properties[key];
                                parameters[key].in = 'body';
                                parameters[key].required = param.schema.required ? param.schema.required.find(element => element === key) ? true : false : false;
                            })
                        else if (param.schema.type === 'array')
                            null; /* TO DO !!! ??? */
                    } else
                        parameters[param.name] = param;
                }
                operations[swaggerSchema.paths[path][method].operationId] = { method: method, parameters: parameters, path: path, responses: swaggerSchema.paths[path][method].responses };
            }
        this.operations = operations;
        this.host = swaggerSchema.host;
        let [response, isSuccess] = await this.request(this.config.loginOperationId, { v_UserName: username, v_Password: password }); /*get auth !!! ??? the submit params must be provided by the component and its controllers - TO ADD ONCE LOGIN COMPONENT IS GENERALIZED */

        if (isSuccess) {                /* set username and status on success and return true. commented code is for dynamic fetch of top.js based on user role*/
            // this.states = await fetch('../../customer/jsonFiles/top.json');
            // this.states = await this.states.json(); this.states = JSONfn.parse(JSON.stringify(this.states));
            // let states = this.states;
            // console.log(this.states)
            // this.$stateRegistry.register({
            //     name: 'top.**',
            //     url: '/',
            //     lazyLoad: async function () {
            //        // console.log(this.states.states)
            //         return states;
            //     }
            // });
            // console.log("STATES1", this.$state.get())
            this.username = username;
            this.status = true;
            return true;
        } else
            return false;
    }

    /** Logs the user out 
     * @param {boolean} isUserLogout - true means user has clicked logout button and false means that its a session logout so forcefully log the application out
    */
    async logout(isUserLogout) {        /* !!! ??? AT THE MOMENT, RELOADING WHOLE PAGE ON LOGOUT - CHANGE TO SAVE SOME USER VARIABLES (SESSION) AND JUST RELOAD STATE.*/
        this.username = null;
        this.status = false;
        delete this.$http.defaults.headers.common.Authorization;
        if (isUserLogout !== false) /* !!! ??? ADDED THIS ON NOVEMBER 7 - means wont mrk session for expiry if session already expired */
            await this.request(this.config.logoutOperationId, {});
        this.$window.location.reload();
        // this.$state.go('login', { nextState: { state: null } }, { reload: true })
        //this.$state.go('login', {})
    }

    /* METHODS TO GET CLASS VARS */
    getConfig() {
        return this.config;
    }

    getStatus() {
        return this.status;
    }

    getUsername() {
        return this.username;
    }
    /* */

    /** Returns input swagger parameters for a particular operation ID 
     * @param {string} operationId - operation Id
     * @return {[string]} - array of input parameters
    */
    getOperation(operationId) {
        return this.operations[operationId] ? this.operations[operationId] : {};
    }
    getParameters(operationId) {
        return this.operations[operationId] ? Object.keys(this.operations[operationId].parameters) : [];
    }

    /** Returns the object (the request paramters) to be passed as the second argument of the request method.
     * @param {string} operationId - operation ID
     * @param {object} mappings - an object of mappings for this operation ID. This comes from the views object i.e. the metadata, which defines by what name some parameters required by the operation are placed within the grid or stateParams
     * @param {object} data - conactenation of stateParams and other data (row data, select parent etc.) which maybe required by the operation
     * @return {object} - object of request parameters
    */
    buildRequest(operationId, mappings, data) {
        let parameters = this.getParameters(operationId);
        let paramsObj = {};
        for (let parameter of parameters)
            paramsObj[parameter] = data[mappings[parameter]];
        return paramsObj;
    }

    /** This method directly executes the request by automatically bulding the request object based on data passed and mapppings, & returns the results. Typically called be a row operation on grid */
    async buildAndSendRequest(operationId, mappings, data) {
        let httpParams = this.buildRequest(operationId, mappings, data);
        return this.request(operationId, httpParams);
    }

    /** This method executes bulk requests on an array of data and builds request as well - all requests are sent simultaneously and waits for all results before reqtuning an array of successes/failures */
    async buildAndSendBulkRequests(operationId, mappings, bulkData, stateParams) {
        let asyncRequests = [];
        let resultSets = new Array(bulkData.length);
        bulkData.forEach((row, index) => {
            let combinedData = Object.assign({}, copyObject(row), copyObject(stateParams));
            asyncRequests.push(this.buildAndSendRequest(operationId, mappings, combinedData).then(([response, isSuccess]) => {
                resultSets[index] = isSuccess;
            }));
        });
        await Promise.all(asyncRequests);
        return resultSets;
    }

    async requestMenus(stateName, viewName) {
        return await this.request(this.config.fetchMenuOperationId, { "v_GuiStateFullyQualifiedName": stateName, "v_GuiStateViewName": viewName });
    }

    getPath(operationId) {
        return 'http://' + this.host + this.operations[operationId].path;
    }
}
httpService.$inject = ["$http", "$state", "usSpinnerService", "$stateRegistry", 'toastService', '$window']; //inject these angular dependancies

let handleResponse = async (response, $http, toastService, config, toastKey, retry) => {
    console.log(response.status);
    console.log(response);
   // alert("asdasd"+JSON.stringify(response.data.rows));

    if(response.status === 200  && response.data.v_ID===0)
    {
        toastService.createToast('info', "Record Not Found !!!"); 
        return; 
    } 
    else{


    if (response.status === 200 ) {    
        //toastService.createToast('success', "Data Found");
       // return;
        //create a success toast message if toastKey given and success
        if (toastKey)
            toastService.createToast('success', response.statusText, config[toastKey].success);
    }
    
    else if (response.status === 202) {
        if (!retry)
            toastService.createToast('success', response.status + ' - ' + response.statusText);
        if (response.headers().location)
            await new Promise((resolve1, reject1) => {
                setTimeout(async () => {
                    console.log('timeout');
                    try {
                        response = await $http({ method: 'get', url: response.headers().location });
                    } catch (error) {
                        response = error;
                    }
                    response = await handleResponse(response, $http, toastService, config, toastKey, true);
                    resolve1(response);
                }, 5000);
            });
    } else if (response.status < 200 && response.status > 0)
        toastService.createToast('info', response.status, response.statusText);
    // else if (response.status < 300)
    //     this.toastService.createToast('success', response.status, response.statusText);
    else if (response.status === 303) {
        toastService.createToast('info', response.status, response.statusText);
        if (response.headers().location) {
            try {
                response = await $http({ method: 'get', url: response.headers().location });
            } catch (error) {
                response = error;
            }
            response = await handleResponse(response, $http, toastService, config, toastKey, true);
        }
    } else if (response.status < 400 && response.status >= 300)
        toastService.createToast('wait', response.status, response.statusText);
    else if (response.status >= 400) {
        toastService.createToast(response.status < 500 ? 'warning' : 'error', response.status + ' - ' + response.statusText, response.data);
        /* if 401 unauthorized error on operation that is a login or a logout => invalid login or loggin out when session already expired */
        // else if (response.status == 401 && (operationId === config.logoutOperationId || operationId === config.loginOperationId))
        //     return [response, false];
    } else {
        console.log('Else while handling response', response)
    }
}
    return response;
}