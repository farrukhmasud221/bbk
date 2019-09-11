export const mediationOperationLS_TotalCustomersState = {
    states: [{
        name: "top.gui.mediation_operation_LS_TotalCustomers",
        abstract: true,
        params: {
          },
        resolve: {
            
    },
},
    {
        name: "top.gui.mediation_operation_LS_TotalCustomers.gui",
        url: "TotalCustomers",
        views: {
            "tabContent@top": { 
                template:' <html>   <head>     <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>     <script type="text/javascript">       google.charts.load("current", {packages:["corechart"]});       google.charts.setOnLoadCallback(drawChart);       function drawChart() {         var data = google.visualization.arrayToDataTable([           ["User", " (in millions)"],            ["Lahore",42 ], ["Karchi", 38],   ["Islamabad", 20],                        ]);          var options = {           title: "Total Users per city",           legend: "none",           pieSliceText: "label",           slices: {  4: {offset: 0.2},                     12: {offset: 0.3},                     14: {offset: 0.4},                     15: {offset: 0.5},           },         };          var chart = new google.visualization.PieChart(document.getElementById("piechart"));         chart.draw(data, options);       }     </script>   </head>   <body>     <div id="piechart" style="width: 900px; height: 500px;"></div>   </body> </html>',
                controller:["$scope",function ($scope)
            {
                 $scope.msg="<button type='submit'  value='https://acedial.com/contact/>help</button>";
                    
            }]

            }
        }
    }]

};