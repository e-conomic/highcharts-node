
var rendering = {};
module.exports = rendering;

rendering.defaultFormatter = {
	code: function() { 
                        return '<b>'+ this.series.name +'</b><br/>' +
                        this.x +': '+ this.y +'';
                },
	toString: "function() {" +
                        "return '<b>'+ this.series.name +'</b><br/>'+" +
                        "this.x +': '+ this.y +'';" + 
                 "}"
}


