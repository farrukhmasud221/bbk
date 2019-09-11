import * as angular from "angular";
import "angular-messages";
/* UI-ROUTER MODULES */
import uiRouter from "@uirouter/angularjs";
import { StickyStatesPlugin } from '@uirouter/sticky-states';
import { DSRPlugin } from '@uirouter/dsr';
//import { visualizer } from "@uirouter/visualizer";
import '@uirouter/angularjs/lib/legacy/resolveService';     /* to set resolve of ui-bootstrap modal to be like UI-router */
/* UI-GRID MODULES */
import uiGrid from 'angular-ui-grid';
//import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
//pdfMake.vfs = pdfFonts.pdfMake.vfs;                      /* import ocLazyLoad from "oclazyload"; removed as system.import does the job !!! */
/* MODAL, TOAST, SPINNER SERVICE MODULES - animate is optional for modal but required for toast */
import 'angular-animate';
import 'angularjs-toaster';
import 'angular-sanitize';
import 'ui-select';
import 'ui-select/dist/select.css';
import modal from 'angular-ui-bootstrap/src/modal';
import dropdown from 'angular-ui-bootstrap/src/dropdown';
// import tooltip from 'angular-ui-bootstrap/src/tooltip';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
//import 'flatpickr/dist/themes/material_blue';
// window.flatpickr = flatpickr;
// console.log(flatpickr)
import 'ng-file-upload';
//import collapse from 'angular-ui-bootstrap/src/collapse';
//import datepickerPopup from 'angular-ui-bootstrap/src/datepickerPopup';
import 'angular-spinner';
/* SERVICES FOR GUIAPP */
import { toastService } from './services/toast';            /* to display toast messages */
import { modalService } from './services/modal';            /* to render a component inside a modal dialog */
import { httpService } from './services/http';        /* send REST requests, login, logout, shows error & warning toasts, shows spinner etc. */
import { metaDataService } from './services/metaData';/* to resolve a viewsObj (metadata) -> filling in select, setting grid column size, fillinf in params from state, scope or elsewhere and hiding them etc. */
import { utilityService } from './services/utility';        /* set labels based on names, other helper methods */
import { menuService } from './services/menu';              /* track fo menu and tabs clicked (needs to be replaced !!!) */
/* COMPONENTS FOR GUIAPP */
import { gridComponent } from './components/grid';          /* renders one or more grids */
import { formComponent } from './components/form';          /* renders a form, optionally with sections */
import { menuComponent } from './components/menu';          /* renders tree menu and tab menu */
import { loginComponent } from './components/login';        /* for handling login - should either be moved within form or else template in top.js !!! */
import { detailComponent } from './components/detail';      /* readonly views, optionally with updateable read only views to open in modals */
import { bulkComponent } from './components/bulk';          /* readonly views, optionally with updateable read only views to open in modals */

import * as JSONfn from 'json-fn';                          /* for converting JSON stateviews to JS objects - make it a service !!! */
window.JSONfn = JSONfn;                                     /* make it global */
window.isDefined = obj => (obj !== undefined && obj !== null && (typeof obj === 'string' ? obj.trim().length !== 0 : true));    /* all checks for defined, must not be defined and null and empty string */
window.isNotDefined = obj => (obj === undefined || obj === null || (typeof obj === 'string' ? obj.trim().length === 0 : false)); /* opposite of above */

window.isDev = false;                                                            /* display info in toasts */
// window.isDefined = obj => (obj !== undefined && obj !== null && obj !== '');    /* all checks for defined, must not be defined and null and empty string */
// window.isNotDefined = obj => (obj === undefined || obj === null || obj === ''); /* opposite of above */
window.copyObject = obj => JSON.parse(JSON.stringify(obj));                     /* copy object without copying by reference */
window.HASH = '#!';                                                             /* setting a constant */
window.rightClickEvent = [];
/* For custom structure of objects defined in some config.json as string, we want to be able to get value. Eg. object is response and we get defination as string from json file, string is "data.rows", and we want response.result.data.row, we can call Object.byString(response,"data.rows") */
Object.byString = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); /* convert indexes to properties */
    s = s.replace(/^\./, '');           /* strip a leading dot */
    let a = s.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
        let k = a[i];
        if (k in o)
            o = o[k];
        else
            return;
    }
    return o;
}
/* DEFINED MAIN MODULE AS guiapp AND INCLUDE DEPENDANCIES */
const MAIN_MODULE = angular.module('guiapp', [uiRouter, uiGrid, modal, dropdown, 'ngSanitize', 'ui.grid.pagination', 'ui.grid.edit', 'ui.grid.rowEdit', 'ui.grid.exporter', 'ui.grid.pinning', 'angularSpinner', 'ui.grid.resizeColumns', 'ui.grid.selection', 'ui.select', 'toaster', 'ngAnimate', 'ngFileUpload', 'ngMessages']);

MAIN_MODULE.config(['$httpProvider', '$stateProvider', '$uiRouterProvider', '$urlRouterProvider', '$uibResolveProvider', function ($httpProvider, $stateProvider, $uiRouter, $urlRouterProvider, $uibResolveProvider) {
    $uibResolveProvider.setResolver('$resolve')             /* to make modal resolve like UI-router - does not work as of yet !!! */
    $httpProvider.defaults.withCredentials = true;          /* enable cookied i.e. authentication for every http request by default */
    $urlRouterProvider.otherwise('/');                      /* send to default route on route not found */
    $uiRouter.plugin(StickyStatesPlugin);                   /* and sticky state and deep state redirect plugins */
    $uiRouter.plugin(DSRPlugin);


    const $urlService = $uiRouter.urlService;               /*  ??? dont know */
    const $stateRegistry = $uiRouter.stateRegistry;
    //  angular.module('guiapp').$stateRegistry = $stateRegistry;   
    angular.module('guiapp').$stateProvider = $stateProvider;

    $stateProvider.state({                                  /* add login state - should really be in top.js !!! also, next state must be defined in some config */
        name: 'login',
        url: '/login',
        component: 'loginComponent',
        params: {
            nextState: { state: "top.gui.mediation_operation_LS_CallClasses.gui" },
            url: undefined
            //nextState: { state: 'top.gui.createSubscriber.gui' }/*  for Local Use
            // nextState: { state: 'top.gui.test.gui' }/*  for Local Use
            /*  nextState: { state: 'top.gui.aaa_administration_activesessions.gui' } //  for client deployment */

        },
        resolve: {

        }
    });

   $stateRegistry.register({                               /* register states from top.js and lazy load them - code for getting from JSON commented */
        name: 'top.**',
        url: '/',
        //  resolve: {
        //      lazyLoad: ['httpService', async function (httpService) {
        //          console.log("hello", httpService)
        //          return await httpService.getStates();
        //      }]
        //  },
        lazyLoad: async function () {
            //  let temp = await fetch('../customer/jsonFiles/top.json');
            //  temp = await temp.json();
            //  console.log(temp)
            //  temp = JSONfn.parse(JSON.stringify(temp)); return temp;
            return System.import("../customer/stateviews/top").then(response => {
                return response.topState;
            });
        }
    });
}]);

/* REGISTER SERVICES */
MAIN_MODULE.service('menuService', menuService);
MAIN_MODULE.service('toastService', toastService);
MAIN_MODULE.service('httpService', httpService);
MAIN_MODULE.service("metaDataService", metaDataService);
MAIN_MODULE.service('utilityService', utilityService);
MAIN_MODULE.service('modalService', modalService);

MAIN_MODULE.filter('range', function () {
    return function (val, range) {
        range = parseInt(range);
        for (var i = 0; i < range; i++)
            val.push(i);
        return val;
    };
});
/* INITIALIZE SERVICES AND SOME GLOBALS*/
MAIN_MODULE.run(['$rootScope', '$state', '$stateParams', '$trace', '$transitions', '$uiRouter', 'httpService', 'metaDataService', 'menuService', '$location', '$uibModalStack', '$window', function ($rootScope, $state, $stateParams, $trace, $transitions, $uiRouter, httpService, metaDataService, menuService, $location, $uibModalStack, $window) {
    $rootScope.$state = $state;                     /* probably making it global to be accessible in any state, not sure though ??? */
    $rootScope.$stateParams = $stateParams;
    $trace.enable('TRANSITION');                    /* enable logging of transition of states */

    if (!httpService.getStatus()) {                 /* go to login state if not authenticated */
        if ($location.url() !== '/login') {             /* also, at the moment when checking authentication status, if url is not that of login state */
            //console.log(copyObject($stateParams), copyObject($location.url())); 
            $stateParams.url = $location.url();             /* then pass current url to stateParams -> we will go to this url instead of default one */
            //console.log("yowza", copyObject($stateParams));
        }
        //console.log("unauth, going to login", $location.url(), copyObject($state.params), copyObject($stateParams));
        $state.go('login', $stateParams);
    }

    $transitions.onBefore({ to: 'login' }, () => {  /* if user treis to go to login state manually */
        if (httpService.getStatus())                /* if user is logged in, transition is rejected */
            return false;
        if ($location.url() !== '/login')           /* if not logged in, and url is not that of login state */
            $stateParams.url = $location.url();         /* then pass current url to stateParams -> we will go to this url instead of default one */
        //console.log("ON BEFORE LOGIN", copyObject($location.url()), $state.params.nextState, copyObject($state.params), copyObject($stateParams));
    });

    $transitions.onStart({ to: 'top.**' }, function (trans) {   /* on any transition to any state starting with top. - check for authentication and if not authenticated, send to login. */
        $uibModalStack.dismissAll();

        //let url = trans._targetState._definition.url._cache.segments.reduce( (acc, cur) => acc + cur);
        //console.log("URL", url); console.log(trans._targetState._definition.url._cache.weights)
        let auth = trans.injector().get('httpService');
        if (!auth.getStatus())
            $state.go('login');
    });

    $transitions.onSuccess({ to: 'top.**' }, (trans) => {       /* on successful transition, check if correct menu is enabled. */
        /* url of menu is either the part of the full url before the first / or its the full url if no / is present in the url */
        let menuUrl = $location.url().substring(1).indexOf('/') < 0 ? $location.url() : $location.url().substring(0, $location.url().substring(1).indexOf('/') + 1);
        /* url of tab is the url after the last / in the full url. */
        let tabUrl = $location.url().substring($location.url().lastIndexOf('/'));
        console.log('full url', $location.url(), 'menu url', menuUrl, 'tab url', tabUrl, 'are urls same => no tab exists', tabUrl === menuUrl);
        /* If tab and menu url are the same, it means current view does not have any tabs. */
        if (tabUrl !== menuUrl)             /* If not same, based on the url of the tab and the current state, activate the relevant tab */
            menuService.activateTab(tabUrl, $state.current.name);
        menuService.activateMenu(menuUrl);  /* Activate the relevant menu based on the url of current state */
        window.scroll(0, 0);
    });


    $transitions.onExit({ to: 'top.**' }, trans => {
        console.log('EXITING', $state.current.name)
    });

    window.onbeforeunload = e => {
        //e.preventDefault();
        
       // console.log(e)
        if (httpService.getStatus())
            httpService.logout(true);
       // $rootScope.$digest();
        //setTimeout(() => { console.log("RELOADING.....!"); }, 100)

    };

    // window.onunload = function () {
    //     //logout code here...
    //     if (httpService.getStatus())
    //         httpService.logout(true);
    // }

    //window.onclose = e => {
    // if (httpService.getStatus())
    //     httpService.logout(true);
    //}
    //let Visualizer = window['ui-router-visualizer'].Visualizer; $uiRouter.plugin(Visualizer);  /*  to look at state tree */
}]);

/* REGISTER COMPONENTS */
MAIN_MODULE.component('menuComponent', menuComponent);
MAIN_MODULE.component('formComponent', formComponent);
MAIN_MODULE.component('gridComponent', gridComponent);
MAIN_MODULE.component('detailComponent', detailComponent);
MAIN_MODULE.component('loginComponent', loginComponent);
MAIN_MODULE.component('bulkComponent', bulkComponent);

MAIN_MODULE.directive('ngRightClick', ['$parse',function($parse){
    return function (scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function (event) {
            scope.$apply(function () {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
}]);
// window.onbeforeunload = e => {
//     e.preventDefault();
//     // if (httpService.getStatus())
//     //     httpService.logout(true);
//     console.log("RELOADING.....!")
// };