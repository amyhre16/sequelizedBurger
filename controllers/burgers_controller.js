'use strict';

// import /models/burgers.js
var burger = require('./../models');

// export the function with routes
// app is passed in from server.js
// all routes listen to / route
module.exports = function(app) {
	app.get('/', function(req, res) {
		/*
			SELECT * FROM burgers
			results is the array containing results from the query
		*/
		burger.Burger.findAll({}).then(function(results) {
			/*
				burgers is the array that contains the rows from the query
			*/
			var burgers = [];
			for (var i = 0; i < results.length; i++) {
				// push each row to the burgers array
				burgers.push(results[i].dataValues);
			}
			// render burgers to the index.handlebars page 
			res.render('index', {burgers: burgers});
		});
	});

	app.post('/', function(req, res) {
		/*
			INSERT INTO burgers (burger_name) VALUES (req.body.burger_name)
		*/
		burger.Burger.create({
			burger_name: req.body.burger_name
		}).then(function(results) {
			// redirect page to home route
			res.redirect('/');
		});
	});

	/*
		UPDATE burgers SET devoured = 1 WHERE id = req.body.id
	*/
	app.put('/', function(req, res) {
		burger.Burger.update({
			devoured: true
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(results) {
			// redirect page to home route
			res.redirect('/');
		});
	});
};