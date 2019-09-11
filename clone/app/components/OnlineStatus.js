
export const OnlineStatusComponent = {
    bindings: {
        viewsObj: '<'
    },
    controller: ['menuService', '$location', '$scope', function (menuService, $location, $scope) {
        let vm = this;

        // Searching the menu
        jQuery.expr[':'].icontains = function(a, i, m) {
            return jQuery(a).text().toUpperCase()
                .indexOf(m[3].toUpperCase()) >= 0;
        };
        vm.SearchMenu = function (str) {
            $('.menu-body li:not(:icontains(' + str + '))').hide();
            // $('.menu-body li:icontains(' + str + ')').show();
        }
        $(document).ready(function () {
            $("#strSearch").on("keyup", function () {
                vm.SearchMenu($(this).val());
            });
            $(window).on('resize', function(){
                let menuObj = $("#treeview");
                if(window.innerWidth > 767){
                    if($(menuObj).css("display")=="block"){
                        $(menuObj).show(500);
                    }
                } else {
                    $(menuObj).hide(500);
                }
            })
        });
        // end search

       


        vm.$onInit = () => {
            vm.searchText = null;

            /* for TabsMenu, highlighting of tabs relies on a variable within menuService that is bound to html of tabs menu. So attach menuService to scope. Look at corresponding menu.html */
            vm.menuService = menuService;

            /* if viewsObject is of type TabsMenu - call menuService and set its copy of active tab to the current tab - which is defined by the state in which the viewsObject was resolved (this state is attached to viewsObject) and the url of the tab (which will always be part of full url after the last '/' */
            if (vm.viewsObj.panelType === 'TabsMenu')
                menuService.setActiveTab(vm.viewsObj.state, $location.url().substring($location.url().lastIndexOf('/')));
        }

        /* on click of tab - since tab respresents a state - change the url of the window. This will call a state change which will then call menuService to set the active tab automatically */
        vm.tabClick = (tab) => {
            window.location.href = HASH + tab.url;
        }

        /* function is called when a menuClick event is detected. This may be a proper mouse click or a simulated mouse click on automatic change of state. If its not a simulated click event, then call menuService's menuClick method and pass current menu in it. If will take care of activating/deactivating menus */
        vm.menuClick = function (menu) {
            if (!menuService.isSimulatedMouseClick()) {
                console.log('menu click', menu)
                menuService.menuClick(menu);
            }
        }

        // vm.toggleMenu = function(clas){
        //     let menuObj = $("#treeview");
        //     if($(menuObj).css("display") == "block"){
        //         $(menuObj).hide(500);
        //     } else {
        //         $(menuObj).show(500);
        //     }

        // }

        vm.rightClick = (menu, event) => {
            console.log("Event:", event.screenX, event.screenY);
            rightClickEvent.push(event);
            // console.log("rightClickEvent", rightClickEvent);
        };
    }],
    templateUrl: 'app/templates/menu.html'
}
