 var version = require('../model/version.js');
 var tag = require('../model/tag.js');
 var ejs = require('ejs');




exports.list = function(req, res){
	var currentversion = version.current();
	var taglist = tag.list(currentversion);

	if(isApi(req)){
		res.json(taglist);
		return;	
	}

	res.render('list', { tags: taglist, version: currentversion });

	
	
}


exports.get = function(req, res){

	var id = req.params.id;
	var currentversion = version.current();
	var tagdata = tag.get(id, currentversion);
	console.log(tagdata);
	if(isApi(req)){
			res.json(tagdata);
			return;	
	}
	 res.render('tag', { tag : tagdata,  version: currentversion } );
}


isApi = function(req){
	req._parsedUrl.pathname.split("/")[1] === 'api';
}