
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var addTrail = require('./routes/addTrail');
var favs = require('./routes/favs');
var help = require('./routes/help');
var hikehistory = require('./routes/hikehistory');
var index = require('./routes/index');
var mytrails = require('./routes/mytrails');
var profile = require('./routes/profile');
var settings = require('./routes/settings');
var submitTrail = require('./routes/submitTrail');
var createMyTrail = require('./routes/createMyTrail');



// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/addTrail', addTrail.view);
app.get('/favs', favs.view);
app.get('/help', help.view);
app.get('/hikehistory', hikehistory.view);
app.get('/mytrails', mytrails.view);
app.get('/profile', profile.view);
app.get('/settings', settings.view);
app.get('/submitTrail', submitTrail.view);
app.get('/createMyTrail',createMyTrail.addNewTrail);

// Example route
// app.get('/users', user.list);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
