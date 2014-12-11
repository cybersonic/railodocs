var version = require('../model/version.js');
var fun = require('../model/function.js');
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}
exports.list = function(req, res){
	var currentversion = version.current();
	var functions = fun.list(currentversion);
	if(isApi(req)){
		res.json(functions);
		return;
	}
	res.locals.title = "Railo Functions Documentation";
	res.render('functions', {functions:functions});

}

exports.listObjects = function(req, res){
	var currentversion = version.current();
	var objects = fun.listObjects(currentversion);
	if(isApi(req)){
		res.json(objects );
		return;
	}

	res.locals.title = "Railo Object Member Functions Documentation";
	res.render('objects', {objects:objects});

}

exports.get = function(req, res){
	var id = req.params.id;
	var currentversion = version.current();
	var  functionData = fun.get(id, currentversion);


	if(isApi(req)){
		res.json(functionData);
		return;
	}
	res.locals.title = "Railo " + id.capitalize() + " Function Documentation";
	res.render('function', {
		func : functionData,
		version: currentversion,
		tagcode: fun.toTagCode(functionData),
		scriptcode: fun.toTagCode(functionData),
		arginfo : fun.argumentTitles(),
		argumentcode : fun.toArgumentString(functionData)
		
	});

}

exports.getObject = function(req, res){


	var func = req.params.function;
	var type = req.params.type;

	var currentversion = version.current();
	var  functionData = fun.getByTypeAndFunction(type , func, currentversion);



	if(isApi(req)){
		res.json(functionData);
		return;
	}
	res.locals.title = "Railo " + type.capitalize() + "."+ func + "() Function Documentation";

	
	res.render('object', {
		func : functionData,
		version: currentversion,
		tagcode: fun.toTagCode(functionData),
		scriptcode: fun.toTagCode(functionData),
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