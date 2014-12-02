 var version = require('../model/version.js');
 var tag = require('../model/tag.js');
 var tag = require('../model/tag.js');



exports.list = function(req, res){
	var currentversion = version.current();
	res.json(tag.list(currentversion));
}


exports.get = function(req, res){

	var isApi = req._parsedUrl.pathname.split("/")[1] === 'api';
	var id = req.params.id;
	var currentversion = version.current();
	var tagdata = tag.get(id, currentversion);
	if(isApi){
			res.json(tagdata);
			return;	
	}
	 res.render('index',
	  { title : 'Home' , tag:tagdata}
	 );
}