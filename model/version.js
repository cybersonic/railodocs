var fs = require('fs');

exports.current = function(){

	var versionlist = JSON.parse(fs.readFileSync("export/version.json", "utf8"));
	return versionlist[0];
}

exports.list = function(){
	return JSON.parse(fs.readFileSync("export/version.json", "utf8"));
}