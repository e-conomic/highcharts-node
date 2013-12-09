This module intends to provide ease of generation of charts, using HighCharts API. 
It is highliy recomended to lookup to http://api.highcharts.com/highcharts for a complete reference of highcarts options and possibilities.

This module refferences their online api, and does NOT store the API locally.
Highchart API is free to use for non-comercial use. 
Please have a look for mode details at: http://shop.highsoft.com/highcharts.html


Initially provides only basic functionality.

Requring the charts module:
var charts = require("highcharts-node");

Get a chart template:
var doSomthingWithChart = function(chart){...}
charts.loadChart(doSomthingWithChart);

Save a chart object to a file:
charts.writeToFile(chart,filename);




