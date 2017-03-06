
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var bodyParser = require('body-parser')

var addTrail = require('./routes/addTrail');
var hikeTrail = require('./routes/hikeTrail');
var favs = require('./routes/favs');
var help = require('./routes/help');
var hikehistory = require('./routes/hikehistory');
var index = require('./routes/index');
var mytrails = require('./routes/mytrails');
var profile = require('./routes/profile');
var settings = require('./routes/settings');
var submitTrail = require('./routes/submitTrail');
var createMyTrail = require('./routes/createMyTrail');
var createMyProfile = require('./routes/createMyProfile');
var login = require('./routes/login');
var review = require('./routes/review');
var updateProfile = require('./routes/updateProfile');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(express.bodyParser());
   


app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.viewA);
app.get('/B', index.viewB);
app.get('/addTrail', addTrail.view);
app.get('/HikeTrail/:trail_id', hikeTrail.view);
app.get('/loadHikingTrail', hikeTrail.loadTrail);
app.get('/favs', favs.view);
app.get('/help', help.view);
app.get('/hikehistory', hikehistory.view);
app.get('/mytrails', mytrails.view);
app.get('/profile', profile.view);
app.get('/settings', settings.view);
app.get('/submitTrail/:trail_id', submitTrail.view);
app.get('/createMyTrail',createMyTrail.addNewTrail);
app.get('/createMyProfile',createMyProfile.addNewProfile);
app.get('/favs/:trail_id/:trail_name/:trail_desc/:trail_diff', favs.addFavorite);
app.get('/hikeTrail/:trail_id/:trail_name/:trail_desc/:trail_diff' , hikeTrail.saveIntoHistory)


// Whether I am logged in or not
loggedOut = false
login['logged'] = loggedOut

app.get('/login', login.view);
app.get('/loadTrails', submitTrail.sendTrails);
app.get('/loadTrailsWithData', submitTrail.sendTrailWithInfo);

app.get('/submitReview', review.saveReview);
app.get('/getReview/:trail_id', review.getReview);

app.get('/updateProfile',updateProfile.updateProfile);
app.get('/logout', login.logout);



app.get('/review/:trail_id', review.viewA);
app.get('/reviewing/:trail_id', review.viewB);

// Example route
// app.get('/users', user.list);


app.post('/addTrail/add', addTrail.addTrailToJSON);
app.post('/addAnnotation', addTrail.addAnnotation);
app.get('/getAnnotations', addTrail.getAnnotations);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
