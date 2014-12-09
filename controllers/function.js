var version = require('../model/version.js');
var fun = require('../model/function.js');

exports.list = function(req, res){
	var currentversion = version.current();
	var functions = fun.list(currentversion);
	if(isApi(req)){
		res.json(functions );
		return;
	}

	res.render('functions', {functions:functions});

}


exports.get = function(req, res){
	var id = req.params.id;
	var currentversion = version.current();
	var  functionData = fun.get(id, currentversion);


	if(isApi(req)){
		res.json(functionData);
		return;
	}
	res.render('function', {
		func : functionData,
		version: currentversion,
		tagcode: fun.toTagCode(functionData),
		scriptcode: fun.toScriptCode(functionData),
		arginfo : fun.argumentTitles(),
		argumentcode : fun.toArgumentString(functionData)
	});

}

isApi = function(req){

	var pathParts = req._parsedUrl.pathname.split(".");
	if(pathParts[pathParts.length-1] == 'json') {
		return true;
	}
	return false;
}