var fs = require('fs');

exports.current = function(){
	var versionlist = JSON.parse(fs.readFileSync("export/versions.json", "utf8"));
	return versionlist[0];
};

function list(){
	return JSON.parse(fs.readFileSync("export/versions.json", "utf8"));
}
exports.list = list;

exports.fullList = function(){
	var rets = [];
	var shortindex = list();
		for(var item in shortindex){
			var version = shortindex[item];
			var versionPath = "export/" + version + "/json/version.json";
			if(fs.existsSync(versionPath)){
				var versionData =JSON.parse(fs.readFileSync(versionPath, "utf8"));
				rets.push(versionData);
			}

		}
	return rets;
}