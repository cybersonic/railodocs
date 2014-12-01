var ver = require('./model/version.js');

exports.list = function(req, res){
	res.json(ver.list());
}


exports.current = function(req, res){
	
	res.json(ver.current());
}
