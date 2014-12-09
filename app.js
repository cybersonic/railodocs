require('newrelic');
var express = require("express");
express.Server = express.HTTPServer
var app = express();
require('nodedump');


var expressLayouts = require('express-ejs-layouts');
var favicon = require('serve-favicon');
var http = require('http').Server(app);
var ejs = require('ejs');
var fs = require('fs');



var version = require('./controllers/version');
var tag = require('./controllers/tag');
var func = require('./controllers/function');
var home = require('./controllers/home');
var search = require('./controllers/search');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(home.before);
app.set('view engine', 'ejs');
app.set('layout', "layout");
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));

app.get('/', home.index);
app.get('/versions*', version.list);
app.get('/search/', search.find);
app.get('/search/:term', search.find);
app.get('/tags', tag.list);
app.get('/tags/:filter', tag.list);
app.get('/tags/:filter/:value', tag.list);
app.get('/tag/:id', tag.get);
app.get('/functions', func.list);
//app.get('/objects', func.listObjects);
app.get('/functions/:filter', func.list);
app.get('/function/:id', func.get);

app.use(function(req, res, next){
	// the status option, or res.statusCode = 404
	// are equivalent, however with the option we
	// get the "status" local available as well
	res.render('404', { status: 404, url: req.url });
});

app.use(function(err, req, res, next){
	// we may use properties of the error object
	// here and next(err) appropriately, or if
	// we possibly recovered from the error, simply next().
	res.render('500', {
		status: err.status || 500
		, error: err
	});
});



app.set('port', (process.env.PORT || 3000));

app.listen(app.get("port"),function(){
	console.log("listening on *:"+ app.get("port"));
});
