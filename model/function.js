var fs = require('fs');

exports.list = function(version){

	var funcList = fs.readFileSync("./export/" + version + "/json/functions.json", "utf8");
	return JSON.parse(funcList);
}


exports.get = function(func, version){

	var tagData = fs.readFileSync("./export/" + version + "/json/functions/" + func + ".json", "utf8");

	var fun =  JSON.parse(tagData);
	return fun;

}


exports.toTagCode = function(fun){
	return "";
}

exports.toScriptCode =  function(fun){
	return  "";
}

exports.argumentTitles = function(fun){
	return  [];
}