var version = require("../model/version.js");

 exports.list = function(req, res){
 	res.json(version.list());
 }
 exports.current = function(req, res){
	res.json(version.current());
 }

