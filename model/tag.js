var fs = require('fs');

exports.list = function(version){
	var taglist =  JSON.parse(fs.readFileSync("./export/" + version + "/json/tags.json", "utf8"));
	return taglist;

}


exports.get = function(tag, version){

	var taglist =  JSON.parse(fs.readFileSync("./export/" + version + "/json/tags/" + tag + ".json", "utf8"));
	return taglist;

}