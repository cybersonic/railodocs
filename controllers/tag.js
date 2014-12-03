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

	res.render('tags', { tags: taglist, version: currentversion });
}


exports.get = function(req, res){

	var id = req.params.id;
	var currentversion = version.current();

	var cleansedTag = cleanTag(id)
	var tagdata = tag.get(cleansedTag, currentversion);
	if(isApi(req)){
			res.json(tagdata);
			return;	
	}
	res.render('tag', {
		 tag : tagdata,
		 version: currentversion,
		 tagcode:tag.toTagCode(tagdata),
		 scriptcode:tag.toScriptCode(tagdata),
		 attrinfo : tag.attributeTitles()
		});
}


isApi = function(req){
	
	var pathParts = req._parsedUrl.pathname.split(".");
	if(pathParts[pathParts.length-1] == 'json') {
		return true;
	}
	return false;
}

cleanTag = function(dirtyTagName){
	
	var cleanTagRE = /(cf[a-zA-Z]*)/;
	var cleanTag = dirtyTagName.match(cleanTagRE)[0];
	return cleanTag;
}