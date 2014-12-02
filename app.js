var express = require("express")
var app = express();
var expressLayouts = require('express-ejs-layouts');
var http = require('http').Server(app);
var ejs = require('ejs');
var fs = require('fs');

var version = require('./controllers/version');
var tag = require('./controllers/tag');
var func = require('./controllers/function');


app.set('view engine', 'ejs');
app.set('layout', "layout");
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));

app.get('/versions*', version.list);
app.get('/tags*', tag.list);
app.get('/tag/:id', tag.get);
app.get('/functions*', func.list);
app.get('/function/:id', func.get);


var port = 80;
if(app.settings.env == 'development'){
	port = 3000;
}

http.listen(port,function(){
	console.log("listening on *:"+ port);
});
