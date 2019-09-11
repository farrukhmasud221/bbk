/** menuService is responsible for managing the activation/deactivation of menu elements. This includes both the treeMenu and the tabsMenu. menuService is needed because there may be state transition to and fro without directly activating different menu elements (e.g. manually entering url) - so there is a need to have a central service which can both catch user events/clicks on menu elements and state changes that should effect the view of these elements.
 *  - When a viewsObject of menu panelType is being resolved, menuService is called and keeps a copy of all menu Objects. There is only one treeMenu, so that is stored directly in menuList, whereas tabsList is a list of all tabs by the state in which their viewObject was resolved. 
 *  - Tabs:
 *          tabsList: {
 *                      state1: {
 *                                  tabUrl1: index, 
 *                                  tabUrl2: index, ...
 *                              },
 *                      state2: {} ...
 *                    }
 *  - Menu:
 *          menuList: {
 *                      Params: [{
 *                                  id: someId, 
 *                                  active: true/false,
 *                                  Params: [{ ... }, ...]
 *                               },
 *                               {},...
 *                              ]
 *                    }
 *  Only the last level of menus have urls attached - which redirect to state.
 */
export class menuService {
    constructor($interval, $timeout) {
        this.tabsList = {};
        this.menuList = null;
        this.selectedTab = null;                    /* index of currently selected tab in the current tabsMenu */
        this.selectedMenu = null;                   /* id (unique in DOM) of the currently highlighted menu - must have url */
        this.$interval = $interval;
        this.$timeout = $timeout;
        this.simulatedMouse = { click: false };     /* A variable indicating that there are simulated mouse click events being generated due to state changes, so that the controller of the menuComponent does not act on these events. Set to true just before click events are genreated and set to false after they are done */
    }

    /****** ------------------------------- FOLLOWING 4 METHODS ARE USED BY TABS ------------------------------- *******/
    /** Method to add tabs to the tabsList on resolving of a menuComponent with panel type TabsMenu.
     * @param {object} viewObj - the viewsObject/metadata of the tabsMenu
     * @param {string} state - name of the state in which TabsMenu is being resolved.
     */
    addTabs(viewObj, state) {
        console.log(viewObj, state)
        if (this.tabsList[state] === undefined) {       /* same state may be resolved multiple times - only add once */
            this.tabsList[state] = {};
            viewObj.Params.forEach((param, index) => {
                let tabId = param.url.substring(param.url.lastIndexOf('/'));
                this.tabsList[state][tabId] = index;    /* each tab is identified by the url after the last '/' and placed at index*/
            });
        }
        console.log(this.tabsList)
    }

    /** Method called whenever controller of menuComponent with Tabs is intialized - depending on the url - sets menuService's selcted tab to the index of the appropriate tab
     * @param {string} state - name of state in which TabsMenu is being resolved
     * @param {string} url - url of tab
     */
    setActiveTab(state, url) {
        this.selectedTab = this.tabsList[state][url];
    }

    /** Method which binds the index of selected tab to the view i.e. the template of menuComponent
     * @return {number} - index of selected tab
     */
    getSelectedTab() {
        return this.selectedTab;
    }

    /** Method called on successful state transition if its determined that the final state contains tabs. Based on the final state and the url, sets the selectedTab of menu Service to the index of the tab 
     * @param {string} url - url of tab
     * @param {string} finalState - name of the state to which current transition successfully transitioned to. 
    */
    activateTab(url, finalState) {
        for (let state in this.tabsList) {                          /* for each state which have tabs defined */
            if (finalState.indexOf(state) >= 0) {                   /* if state for which tabs are defined is a substring of the final state */
                this.selectedTab = this.tabsList[state][url];       /* set menuService's selcted tab to the index of the appropriate tab */
                console.log(finalState, state, this.selectedTab);
                break;
            }
        }
    }
    /****** --------------------- END OF METHODS USED BY TABS ---------------------------------------- *******/

    /****** ---------------------- FOLLOWING METHODS ARE USED BY TREEMENU ---------------------------------- *******/
    /** Method which indicates to controller of menuComponent not to act on click event
     * @return {boolean}
    */
    isSimulatedMouseClick() {
        return this.simulatedMouse.click;
    }

    /** Method to add tree to the menuList on resolving of a menuComponent with panel type TreeMenu.
     * @param {object} viewObj - metadata of TreeMenu
    */
    addMenu(viewObj) {
        if (this.menuList === null) {
            this.menuList = viewObj;
            this.populateMenu(viewObj.Params);              /* recursive */
            console.log('menus added', this.menuList)
        }
    }

    /** Method which recursively adds a active property to every menu in the menu tree
     * @param {object[]} menus - array of menus
     */
    populateMenu(menus) {
        for (let menu of menus) {
            menu.active = false;
            if (isDefined(menu.Params))
                this.populateMenu(menu.Params);
        }
        return;
    }

    /** Method which recursively searches for a menu item in menuList based on a url 
     * @param {object[]} menu - array of menus
     * @param {string} url - potential url of menu
     * @return {object} - returns menu item if found or null (not all states have menu items)
    */
    findMenu(menu, url) {
        if (isDefined(menu.url)) {
            if (menu.url === url)
                return menu;
        } else if (isDefined(menu.Params)) {
            let result = null;
            for (let param of menu.Params) {
                result = this.findMenu(param, url);
                if (result !== null)
                    return result;
            }
            return result;
        }
        return null;
    }

    /** Method called on successful state transition to determine whether to open any menus in MenuTree or not, and wheter to highlight any menu items which correspond to a state
     * @param {string} url - potential url of menu
    */
    activateMenu(url) {
        let menu = this.findMenu({ Params: this.menuList.Params }, url);    /* find menu */
        let menuService = this;                                 /* make local copies of some class variablies */
        let menuList = this.menuList.Params;
        if (menu !== null && menu.id !== this.selectedMenu) {   /* if menu is found, and not already selected */
            console.log(menu);
            menuService.simulatedMouse.click = true;            /* indicate to menuComponent that click events will be simulated */
            let timer = menuService.$interval(() => {           /* sometime DOM/template is not loaded - keep polling till we get element*/
                let element = document.getElementById(menu.id);
                if (element !== null) {
                    menuService.$interval.cancel(timer);
                    let menuItems = menu.id.substring(5).split('-');    /* get indexes of all menu items */
                    let menuId = 'item';                                    /* for construction of id of menus in the current menu branch */
                    menuItems.forEach((item, index) => {                    /* for each item in menus branch */
                        menuService.$timeout(() => {                        /* to avoid $digest messages, wrap in a timeout */
                            console.log('menu item click', item, menuService.simulatedMouse.click)
                            menuId += '-' + item;                           /* begin menuId contruction */
                            if (isDefined(menuList[parseInt(item)].url)) {  /* if menu item has url - don't click (avoids state reload) */
                                if (menuList[parseInt(item)].active === false) {
                                    menuService.highlightMenu(menuId);          /* hightlight item */
                                    menuList[parseInt(item)].active = true;     /* set active property to true */
                                }
                            } else {                                        /* if menu item does not have url - part of tree */
                                if (menuList[parseInt(item)].active === false) {    /* if menu item is not already active */
                                    let element = document.getElementById(menuId);  /* get DOM element by ID */
                                    element.click();
                                    menuList[parseInt(item)].active = true;         /* make it active */
                                }
                            }
                            menuList = menuList[parseInt(item)].Params;     /* go to next level of menu tree */
                            if (menuItems.length === (index + 1))           /* once done, set indicator of simulated clicks to false */
                                menuService.simulatedMouse.click = false;
                        }, 0);
                    })
                }
            }, 50, 600);                                           /* poll every 50ms till we get element for a maximum of 30s */

        } else if (menu === null) {                                 /* if menu is not found, then reset highlighted menu */
            this.resetHighlightedMenu();                            /* since not all states or views are directly accessible from menu */
        }
    }

    /** Method called by menuComponent's controller on a direct click from the user - simply toggles the active property of non-url (non state directing) menu elements. We don't do this for a url menu because on that click states changes and that is handled by activateMenu method
     * @param {object} menu - object of the currenct selected menu item
    */
    menuClick(menu) {
        let menuItems = menu.id.substring(5).split('-');
        let menuList = this.menuList.Params;
        for (let item of menuItems) {
            if (menuList[parseInt(item)].id === menu.id) {
                if (menuList[parseInt(item)].url === undefined)
                    menuList[parseInt(item)].active = !menuList[parseInt(item)].active;
                else {
                    this.highlightMenu(menu.id);          /* hightlight item */
                    menuList[parseInt(item)].active = true;     /* set active property to true */
                }
            }
            menuList = menuList[parseInt(item)].Params;
        }
    }

    /** Method to highlight the menu item which corresponds to the currently activated state 
     * @param {string} menuId - id of the menu for the current state
    */
    highlightMenu(menuId) {
        this.resetHighlightedMenu();
        document.getElementById(menuId).classList.add("activated");
        this.selectedMenu = menuId;
    }

    /** Method to remove highlighting on a menu item when we are no longer in the state for that menu item */
    resetHighlightedMenu() {
        if (this.selectedMenu !== null) {
            document.getElementById(this.selectedMenu).classList.remove("activated");
            let menuItems = this.selectedMenu.substring(5).split('-');
            let menuList = this.menuList.Params;
            for (let item of menuItems) {
                if (menuList[parseInt(item)].id === this.selectedMenu)
                    menuList[parseInt(item)].active = false;
                menuList = menuList[parseInt(item)].Params;
            }
            this.selectedMenu = null;
        }
    }
}
menuService.$inject = ['$interval', '$timeout'];

/* !!! MAYBE MOVE HIGLIGHT OF URL CLICK TO MENU CLICK !!! MAYBE ALSO COMBINE COMMON FUNCTIONALITY */