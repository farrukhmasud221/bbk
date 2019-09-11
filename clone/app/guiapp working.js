import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";
import { StickyStatesPlugin } from '@uirouter/sticky-states';
import { DSRPlugin } from '@uirouter/dsr';
import { visualizer } from "@uirouter/visualizer";
// for UI-GRID PDF EXPORT
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
// import ocLazyLoad from "oclazyload";
import uiGrid from 'angular-ui-grid';
import modal from 'angular-ui-bootstrap/src/modal';
import 'angular-animate';
import 'angularjs-toaster';
import 'angular-spinner';
import * as JSONfn from 'json-fn';
import '@uirouter/angularjs/lib/legacy/resolveService';
import { swaggerService } from './services/swagger';
import { resolveViewsObjService } from './services/resolve';
import { utilityService } from './services/utility';
import { globalVarsService } from './services/global';
import { modalService } from './services/modal';
import { toastService } from './services/toast';
import { gridComponent } from './components/grid';
import { formComponent } from './components/form';
import { menuComponent } from './components/menu';
import { loginComponent } from './components/login';
import { detailComponent } from './components/detail';

window.isDev = false;

window.JSONfn = JSONfn;
window.isDefined = obj => (obj !== undefined && obj !== null && obj !== '');
window.isNotDefined = obj => (obj === undefined || obj === null || obj === '');
Object.byString = function (o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, '');           // strip a leading dot
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}

const MAIN_MODULE = angular.module('guiapp', [uiRouter, uiGrid, modal, 'ui.grid.pagination', 'ui.grid.edit', 'ui.grid.rowEdit', 'ui.grid.exporter', 'angularSpinner', 'ui.grid.resizeColumns', 'ui.grid.selection', 'toaster', 'ngAnimate']);
MAIN_MODULE.constant('URLPART', {
    hash: "#!"
});

MAIN_MODULE.config(['$httpProvider', '$stateProvider', '$uiRouterProvider', '$urlRouterProvider', '$uibResolveProvider', function ($httpProvider, $stateProvider, $uiRouter, $urlRouterProvider, $uibResolveProvider) {
    $uibResolveProvider.setResolver('$resolve')
    $httpProvider.defaults.withCredentials = true;
    $urlRouterProvider.otherwise('/');
    $uiRouter.plugin(StickyStatesPlugin);
    $uiRouter.plugin(DSRPlugin);

    const $urlService = $uiRouter.urlService;
    const $stateRegistry = $uiRouter.stateRegistry;
    // angular.module('guiapp').$stateRegistry = $stateRegistry;   
    angular.module('guiapp').$stateProvider = $stateProvider;

    $stateProvider.state({
        name: 'login',
        url: '/login',
        component: 'loginComponent',
        params: {
            nextState: { state: "top.gui.agentdashboard.gui.billinginformation.gui" },
            // nextState: { state: 'top.gui.aaa_administration_activesessions.gui' } // for client deployment

        },
        resolve: {

        }
    });

    $stateRegistry.register({
        name: 'top.**',
        url: '/',
        // resolve: {
        //     lazyLoad: ['swaggerService', async function (swaggerService) {
        //         console.log("hello", swaggerService)
        //         return await swaggerService.getStates();
        //     }]
        // },
        lazyLoad: async function () {
            // let temp = await fetch('../customer/jsonFiles/top.json');
            // temp = await temp.json();
            // console.log(temp)
            // temp = JSONfn.parse(JSON.stringify(temp)); return temp;////
            return System.import("../customer/stateviews/top").then(response => {
                return response.topState;
            });
        }
    });

}]);

MAIN_MODULE.service('globalVars', globalVarsService);
MAIN_MODULE.service('toastService', toastService);
MAIN_MODULE.service('swaggerService', swaggerService);
MAIN_MODULE.service("resolveViewsObjService", resolveViewsObjService)
MAIN_MODULE.service('utilityService', utilityService);
MAIN_MODULE.service('modalService', modalService);


MAIN_MODULE.run(['$rootScope', '$state', '$stateParams', '$trace', '$transitions', '$uiRouter', 'swaggerService', 'resolveViewsObjService', function ($rootScope, $state, $stateParams, $trace, $transitions, $uiRouter, swaggerService, resolveViewsObjService) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $trace.enable('TRANSITION');
    if (!swaggerService.getStatus())
        $state.go('login');
    $transitions.onStart({ to: 'top.**' }, function (trans) {
        //let url = trans._targetState._definition.url._cache.segments.reduce( (acc, cur) => acc + cur);
        // console.log("URL", url)
        //console.log(trans._targetState._definition.url._cache.weights)
        let auth = trans.injector().get('swaggerService');
        if (!auth.getStatus())
            $state.go('login');
    });

    $transitions.onSuccess({ to: 'top.**' }, (trans) => {
        console.log("success state !!!!!!!!!!!!!!!!!!!!!", $state.current.name, window.location)
       // trans.to().name === 'D'; // true
       // trans.redirectedFrom().to().name === 'C'; // true
        ///trans.originalTransition() === transitionA; // true
       // trans.originalTransition().to().name === 'A'; // true
    });
    
    //let Visualizer = window['ui-router-visualizer'].Visualizer; $uiRouter.plugin(Visualizer);
}]);
MAIN_MODULE.component('menuComponent', menuComponent);
MAIN_MODULE.component('formComponent', formComponent);
MAIN_MODULE.component('gridComponent', gridComponent);
MAIN_MODULE.component('detailComponent', detailComponent);
MAIN_MODULE.component('loginComponent', loginComponent);
