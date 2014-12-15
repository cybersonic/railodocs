console.log("Starting export");
var ejs = require('ejs');
var fs = require('fs');
var version = require('./model/version.js');
var currentVersion = version.current();

var tag = require('./model/tag.js');
var func = require('./model/function.js');
var obj = require('./model/object.js');



var versionMarkdownPath = './export/' + currentVersion  + '/markdown';
var tagMarkdownPath = versionMarkdownPath + '/tags/';
var funcMarkdownPath = versionMarkdownPath + '/functions/';
var objMarkdownPath = versionMarkdownPath + '/objects/';



checkAndCreatePath(versionMarkdownPath);
checkAndCreatePath(funcMarkdownPath);
checkAndCreatePath(tagMarkdownPath);
checkAndCreatePath(objMarkdownPath);


renderItems(tag, currentVersion, "tag", tagMarkdownPath);
renderItems(func, currentVersion, "func", funcMarkdownPath);
renderItems(obj, currentVersion, "obj", objMarkdownPath);


console.log("finished export");

function checkAndCreatePath(path){
    if(!fs.existsSync(path)){
        console.log("Creating folder", path);
        fs.mkdirSync(path);
    }
}

function renderItems(model, version, type, exportPath){
    var items = model.list(version);
    for(var i in items){
        var name = items[i];
        var data = model.get(name, version);

        var opts = {};
        opts[type] = data;

        ejs.renderFile('./templates/markdown/' + type + '.ejs',opts , function(err, markdown){
            fs.writeFile(exportPath + name + '.md', markdown, function(){
            });
        });

    }
}



