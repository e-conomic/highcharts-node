var fs = require('fs');
var rendering = require('./rendering-functions');

var highCharts = {};
module.exports = highCharts;

highCharts.loadChart = function(template, callback) {
	
	if (!callback){
		callback = template;
		template =  __dirname + '/templates/lineChart.js';
	}
	else
	{	
		template =   __dirname + '/templates/' + template;
	}
	
	fs.readFile(template,'utf8', function(err,data){
		if (err){
			console.log(err);
			return null;
		}
		data = data.replace(/([a-zA-Z0-9]+)\:/gi,'"$1":');		
		callback(JSON.parse(data));
	});

}

highCharts.writeToFile = function(chart, path){
	fs.writeFile(path,JSON.stringify(chart),function(err){
		if (err)
			console.log(err);
	});
}