var version = require('../model/version.js');
var fun = require('../model/function.js');

exports.list = function(req, res){
	var currentversion = version.current();
		res.json(fun.list(currentversion));
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
		function : functionData,
		version: currentversion,
		functionCode: fun.toTagCode(functionData),
		scriptcode: fun.toScriptCode(functionData),
		arginfo : fun.argumentTitles()
	});

}

isApi = function(req){

	var pathParts = req._parsedUrl.pathname.split(".");
	if(pathParts[pathParts.length-1] == 'json') {
		return true;
	}
	return false;
}