var assert = require("assert")
var fs = require("fs");
var highCharts = require("../lib/main.js");
describe('HighCharts', function(){
	

		it('loads the chart from default grey template', function(){
			highCharts.loadChart(function (chart){
		    	assert.equal(true, (chart.title.text != false));
		    	assert.equal("Tokyo", chart.series[0].name);
		    });		   
		});

	    if (fs.existsSync("output.js"))
	    {
	    	fs.unlinkSync("output.js");
	    }
	    	    
	    it('dumps the chart to a file', function(){
	    	highCharts.writeToFile( 
	    	{ chart: 
	    		{ title: 
	    			{ text: "testing chart" }
	    		}
	    	}, "output.js");	    	
	    	assert.equal(true,fs.existsSync("output.js"));
	    	fs.unlinkSync("output.js");	
	    });
	});