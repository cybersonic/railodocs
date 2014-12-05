var express = require("express")
var app = express();
var expressLayouts = require('express-ejs-layouts');
var favicon = require('serve-favicon');
var http = require('http').Server(app);
var ejs = require('ejs');
var fs = require('fs');

var version = require('./controllers/version');
var tag = require('./controllers/tag');
var func = require('./controllers/function');
var home = require('./controllers/home');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(home.before);
app.set('view engine', 'ejs');
app.set('layout', "layout");
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));

app.get('/', home.index);
app.get('/versions*', version.list);
app.get('/tags/:filter', tag.list);
app.get('/tags/:filter/:value', tag.list);
app.get('/tag/:id', tag.get);
app.get('/functions*', func.list);
app.get('/function/:id', func.get);


app.set('port', (process.env.PORT || 3000));

app.listen(app.get("port"),function(){
	console.log("listening on *:"+ app.get("port"));
});
