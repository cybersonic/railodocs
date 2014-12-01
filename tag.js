var version = require('./model/version.js');
var tag = require('./model/tag.js');

exports.list = function(req, res){
	var currentversion = version.current();
	res.json(tag.list(currentversion));
}


exports.get = function(req, res){

	var id = req.params.id;
	var currentversion = version.current();
	res.json(tag.get(id, currentversion))
	
}