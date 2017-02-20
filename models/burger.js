// import orm.js
var orm = require('./../config/orm.js');

// exports to burgers_controller.js
module.exports = {
	// takes in res from ajax request and a callback function as parameters
	selectAll: function(res, callback) {
		// run the select all query from orm.js and pass in "burgers" to the table parameter, res and the callback function
		orm.selectAll("burgers", res, callback);
	},
	// takes in the burgername and res from ajax request and callback function as parameters
	insertOne: function (burger_name, res, callback) {
		/*
			run the insertOne query from orm.js
			pass in parameters "burgers" for table name, "burger_name" for column name, burger_name for the value, res from ajax request and callback function
		*/
		orm.insertOne("burgers", "burger_name", burger_name, res, callback);
	},
	// takes in id and res from ajax request and callback function as parameters
	updateOne: function(id, devoured, res, callback) {
		/*
			run update query from orm.js
			pass in "burgers" for table name, devoured obj for the set clause, id object for where clause, res from ajax request and callback function
		*/
		orm.updateOne("burgers", {devoured: devoured}, {id: id}, res, callback);
	}
};