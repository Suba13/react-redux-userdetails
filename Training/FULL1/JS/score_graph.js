app.controller('score-graph', function($scope,$location) {

        $scope.load=function()
        {
            var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,
  title: {
    text: "Score Chart",
    fontSize:20,
  },
  axisX: {
    title: "Review Date",
    minimum: new Date(2016, 10, 25),
    maximum: new Date(2017, 10, 15),
    valueFormatString: "DD MMM YY"
  },
  axisY: {
    minimum: 0,
    maximum: 10,
    title: "Score",
    titleFontColor: "#4F81BC",
  },
  data: [{
    indexLabelFontColor: "darkSlateGray",
    name: "views",
    type: "area",
    dataPoints: [
      { x: new Date(2016, 10, 26), y: 5},
      { x: new Date(2016, 11, 1), y: 5.8},
      { x: new Date(2016, 12, 1), y: 4.1},
      { x: new Date(2017, 01, 1), y: 6.3},
      { x: new Date(2017, 02, 1), y: 7.2 },
      { x: new Date(2017, 05, 1), y: 8.9},
      { x: new Date(2017, 08, 1), y: 7.1 },
      { x: new Date(2017, 09, 1), y: 6.3 },
      { x: new Date(2017, 10, 1), y: 8.1}
    ]
  }]
});
chart.render();

 var revenueChart = new FusionCharts({
        type: 'doughnut2d',
        renderAt: 'chart-container',
        width: '280',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {

                "caption": "Reviewed percentage",                
                "numberPrefix": "$",
                "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "use3DLighting": "0",
                "showShadow": "0",
                "enableSmartLabels": "0",
                "startingAngle": "310",
                "showLabels": "0",
                "showPercentValues": "1",
                "showLegend": "1",
                "legendShadow": "0",
                "legendBorderAlpha": "0",              
                "centerLabelBold": "1",
                "showTooltip": "0",
                "decimals": "0",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0"
            },
            "data": [
                {
                    "label": "Not Assigned",
                    "value": "28504"
                }, 
                {
                    "label": "Reviewed",
                    "value": "14633"
                }, 
                {
                    "label": "Pending",
                    "value": "10507"
                }, 
                
            ]
        } 
    }).render();

    
};

$scope.add_new_project=function() {
                     $location.path( "/add-new-project" );
};
$scope.reviewed=function() {
                     $location.path( "/reviewer-reviewed" );
};

$scope.notreviewed=function() {
                     $location.path( "/reviewer-notreviewed" );
};

$scope.allproject=function() {
                     $location.path( "/reviewer-home" );
};

$scope.go=function(page) {
                     $location.path('/' + page );
};
});
