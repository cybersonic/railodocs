 var version = require('../model/version.js');
 var tag = require('../model/tag.js');
 var ejs = require('ejs');

exports.list = function(req, res){
	var currentversion = version.current();
	var taglist = tag.list(currentversion);

	if(req.params.filter){
		res.json(tag.getByFilter(req.params.filter, req.params.value, currentversion));
		return;
	}



	if(isApi(req)){
		res.json(taglist);
		return;	
	}
	res.locals.title = "Railo Tag Documentation";
	res.render('tags', { tags: taglist, version: currentversion });
}


exports.get = function(req, res){

	var id = stripJSONSuffix(req.params.id);
	var currentversion = version.current();

	var cleansedTag = cleanTag(id)

	if (cleansedTag === undefined) {
		return res.render('404', {status: 404, url: req.url});
	}

	var tagdata = tag.get(cleansedTag, currentversion);

	if (tagdata === undefined) {
		return res.render('404', { status: 404, url: req.url });
	}

	if(isApi(req)){
			res.json(tagdata);
			return;	
	}

	res.locals.title = "Railo "+ id +" Tag Documentation";
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
	if(pathParts[pathParts.length-1].toLowerCase() == 'json') {
		return true;
	}
	return false;
}

cleanTag = function(dirtyTagName){
	var cleanTagRE = /(cf[a-zA-Z]*)/;
	var cleanTag = dirtyTagName.match(cleanTagRE);
	if (cleanTag === null || cleanTag.length === 0) {
		return undefined;
	}
	return cleanTag[0];
}

stripJSONSuffix = function(input) {
	input = input.trim().toLowerCase();
	if (input.substr(input.length - 5, 5) == '.json') {
		return input.substring(0, input.length - 5);
	}
	return input;
}