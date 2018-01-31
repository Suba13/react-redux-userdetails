/* score graph  */




window.onload = function () {

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

}