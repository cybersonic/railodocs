var express = require("express")
var app = express();
var expressLayouts = require('express-ejs-layouts');
var http = require('http').Server(app);
var ejs = require('ejs');

var version = require('./controllers/version');
var tag = require('./controllers/tag');
var func = require('./controllers/function');



app.set('view engine', 'ejs');
app.set('layout', "layout");
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));


app.get('/api/version', version.current);
app.get('/api/versions', version.list);
app.get('/api/current', version.current);
app.get('/api/tags', tag.list);

app.get('/api/tag/:id', tag.get);
app.get('/api/functions', func.list);
app.get('/api/function/:id', func.get);

app.get('/versions', version.list);
app.get('/tags', tag.list);
app.get('/tag/:id', tag.get);
app.get('/functions', func.list);
app.get('/function/:id', func.get);



http.listen(3000,function(){
	console.log("listening on *:3000");
});
