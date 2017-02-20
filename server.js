'use strict';

// import packages
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

// create the server
var app = express();

// if the app is on heroku, use heroku's port; if local, use port 8080
var PORT = process.env.PORT || 8080;

// require models for syncing
var db = require('./models');

// serve static content for the app from the "public/assets" directory
app.use(express.static(__dirname + "/public/assets"));

// set up Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// override with POST having ?_method=
app.use(methodOverride("_method"));

// set up the handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// pass app to the burgers_controller.js so that the file has access to the sever
var routes = require('./controllers/burgers_controller')(app);

// syncing our sequelize models
de.sequelize.sync({}).then(function() {
	// run the server
	app.listen(PORT, function() {
		console.log("App is listening on PORT " + PORT);
	});
});