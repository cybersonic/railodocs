/*
This generates the dash docs
 */
var fs = require('fs');
var ejs = require('ejs');
var tag = require('./model/tag.js');
var version = require('./model/version.js');

var docset = "railodocs";
var docsetPath = "./export/dash/" + docset + ".docset/Contents/Resources/Documents/";

var currver =version.current();
var tags = tag.list(currver);

var tagsHTML = ejs.renderFile("./views/tag/list.ejs", {tags:tags}, );

console.log(tagsHTML);


