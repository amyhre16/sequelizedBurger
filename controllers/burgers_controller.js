'use strict';

// import /models/burgers.js
var burger = require('./../models');

// export the function with routes
// app is passed in from server.js
// all routes listen to / route
module.exports = function(app) {
	app.get('/', function(req, res) {
		burger.Burger.findAll({}).then(function(dbBurger) {
			console.log('rendering / route');
			var burgers = [];
			for (var i = 0; i < dbBurger.length; i++) {
				burgers.push(dbBurger[i].dataValues);
			}
			res.render('index', {burgers: burgers});

		});
	});

	app.post('/', function(req, res) {
		burger.Burger.create({
			burger_name: req.body.burger_name
		}).then(function(dbBurger) {
			res.redirect('/');
		});
	});

	app.put('/', function(req, res) {
		burger.Burger.update({
			devoured: true
		}, {
			where: {
				id: req.body.id
			}
		}).then(function(dbBurger) {
			res.redirect('/');
		});
	});
};