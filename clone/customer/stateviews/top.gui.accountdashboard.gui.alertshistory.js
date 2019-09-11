export const accountDashboardAlertsHistoryState =
{
    states: [{
        name: "top.gui.accountdashboard.gui.alertshistory",
        abstract: true,
        resolve: {
            
        },
        // deepStateRedirect: true,
        // sticky: true
    },
    {
        name: "top.gui.accountdashboard.gui.alertshistory.gui",
        url: "/AlertsHistory",
        views: {
            "tabContent@top": { //gui.accountdashboard": {
                template: `{{msg}}<P>
                AccountID: {{AccountID}}`,
                controller: function($scope, $stateParams){
                    $scope.msg = "AlertsHistory Clicked";
                    $scope.AccountID = $stateParams.AccountID;
                }
            }
        },
        // deepStateRedirect: true,
        // sticky: true
    }
]

};