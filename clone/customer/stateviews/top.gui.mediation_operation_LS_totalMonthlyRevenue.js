export const mediationOperationLS_totalMonthlyRevenueState = {
    states: [{
        name: "top.gui.mediation_operation_LS_totalMonthlyRevenue",
        abstract: true,
        params: {
          },
        resolve: {
            
    },
},
    {
        name: "top.gui.mediation_operation_LS_totalMonthlyRevenue.gui",
        url: "totalMonthlyRevenue",
        views: {
            "tabContent@top": { 
                template:'<html>   <head>     <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>     <script type="text/javascript">       google.charts.load("current", {"packages":["bar"]});       google.charts.setOnLoadCallback(drawChart);        function drawChart() {         var data = google.visualization.arrayToDataTable([           ["Year", "Sales", "Expenses", "Profit"],           ["2014", 1000, 400, 200],           ["2015", 1170, 460, 250],           ["2016", 660, 1120, 300],           ["2017", 1030, 540, 350]         ]);          var options = {           chart: {             title: "Company Performance",             subtitle: "Sales, Expenses, and Profit: 2014-2017",           }         };          var chart = new google.charts.Bar(document.getElementById("columnchart_material"));          chart.draw(data, google.charts.Bar.convertOptions(options));       }     </script>   </head>   <body>     <div id="columnchart_material" style="width: 800px; height: 500px;"></div>   </body> </html>',
                controller:["$scope",function ($scope)
            {
                 $scope.msg="<button type='submit'  value='https://acedial.com/contact/>help</button>";
                    
            }]

            }
        }
    }]

};