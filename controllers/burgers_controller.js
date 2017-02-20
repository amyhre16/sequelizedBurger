'use strict';

// import /models/burgers.js
var burger = require('./../models/burger.js');

// export the function with routes
// app is passed in from server.js
// all routes listen to / route
module.exports = function(app) {
	app.get('/', function(req, res) {
		// run the selectAll method from burger.js and pass in res and renderPage as parameters
		burger.selectAll(res, renderPage);
	});

	app.post('/', function(req, res) {
		// run the insertOne method from burger.js and pass in the burger_name from the POST request, res and redirectPage as parameters
		burger.insertOne(req.body.burger_name, res, redirectPage);
	});

	app.put('/', function(req, res) {
		// run updateOne method from burger.js and pass in id from PUT request, res and redirectPage as parameters
		burger.updateOne(req.body.id, 1, res, redirectPage);
	});
};

/*
	callback function for selectAll. takes result from query and res from ajax request as parameters
*/
function renderPage(result, res) {
	// render index.handlebars and pass in object w/ the query result as a property
	res.render('index', {burgers: result});
}

/*
	callback function for insertOne and updateOne
	takes res from ajax request as parameter
*/
function redirectPage(res) {
	// redirects page to home route without the user having to refresh page
	res.redirect('/');
}