var fs = require('fs');

exports.list = function(version){
	//Should check it version IS VALID.

	var taglist =  JSON.parse(fs.readFileSync("./export/" + version + "/json/tags.json", "utf8"));
	return taglist;

}


exports.get = function(tag, version){
	//Should check it version IS VALID.

	var taglist =  JSON.parse(fs.readFileSync("./export/" + version + "/json/tags/" + tag + ".json", "utf8"));
	return taglist;

}