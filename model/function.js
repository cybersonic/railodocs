var fs = require('fs');

exports.list = function(version){
	//Should check it version IS VALID.

	console.log("Functions.list");
	return fs.readFileSync("./export/" + version + "/json/functions.json", "utf8", function(err, data){
		console.log("Reading Async");
		return  JSON.parse(data);
	});
}


exports.get = function(func, version){
	//Should check it version IS VALID.

	var func =  JSON.parse(fs.readFileSync("./export/" + version + "/json/functions/" + func + ".json", "utf8"));
	return func;

}