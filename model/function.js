var fs = require('fs');

exports.list = function(version){

	var funcList = fs.readFileSync("./export/" + version + "/json/functions.json", "utf8");
	return JSON.parse(funcList);
}


exports.get = function(func, version){

	var tagData = fs.readFileSync("./export/" + version + "/json/functions/" + func + ".json", "utf8");

	var fun =  JSON.parse(tagData);
	return fun;

}


exports.toTagCode = function(fun){

	var tagcode = "<cfset " + fun.returnType  +" = ";

		tagcode+= fun.name + "(";
	var optCount =  0;
	var first = true;

		for(var a in fun.arguments ){
			var arg = fun.arguments[a];
			if(arg.status == 'hidden'){
				continue;
			}
			if(!first){
				tagcode+=",";
			}
			if(!arg.required){
				optCount++;
				tagcode+="[";
			}
			tagcode+=arg.type + " ";
			tagcode+=arg.name;
			first = false;

		}

		for(var i=1;i<=optCount;i++){
			tagcode+="]";
		}


		tagcode+= ") >";
	

	return tagcode ;
}

 function toArgumentString(fun) {

	var scriptcode = "";
	var optCount = 0;
	var first = true;

	for (var a in fun.arguments) {
		var arg = fun.arguments[a];
		if (arg.status == 'hidden') {
			continue;
		}
		if (!first) {
			scriptcode += ",";
		}
		if (!arg.required) {
			optCount++;
			scriptcode += "[";
		}
		scriptcode += arg.type + " ";
		scriptcode += arg.name;
		first = false;

	}

	for (var i = 1; i <= optCount; i++) {
		scriptcode += "]";
	}
	return scriptcode;
}
exports.toArgumentString = toArgumentString;

exports.toScriptCode =  function(fun){


	var scriptcode = "<cfscript>\n 	" + fun.returnType  +" = ";

	scriptcode += fun.name + "(";
	scriptcode += toArgumentString(fun);
	scriptcode += "); \n</script>";


	return  scriptcode ;

}

exports.argumentTitles = function(fun){
	return  [];
}