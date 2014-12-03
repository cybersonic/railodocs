var version = require('../model/version.js');

exports.index = function(req,res){

	res.render("home");
}

exports.before = function(req,res, next){

	res.locals.version = version.current();
 	next();
}