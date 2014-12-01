var fs = require('fs');

exports.list = function(version){
	//Should check it version IS VALID.

	var functionlist =  JSON.parse(fs.readFileSync("./export/" + version + "/json/functions.json", "utf8"));
	return functionlist;

}


exports.get = function(func, version){
	//Should check it version IS VALID.

	var func =  JSON.parse(fs.readFileSync("./export/" + version + "/json/functions/" + func + ".json", "utf8"));
	return func;

}