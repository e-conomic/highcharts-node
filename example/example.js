#!/usr/bin/env node
var highCharts = require("../lib/main.js");

var processChart = function (chart){
	chart.xAxis.categories = ["a","B","c"];
	chart.title.text = "Testing chart";
	chart.subtitle.text ="";
	highCharts.writeToFile(chart, "C:\\Users\\eap\\Dropbox\\Public\\chart.js");	
};

highCharts.loadChart(processChart);




