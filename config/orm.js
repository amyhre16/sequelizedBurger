// import connection.js
var connection = require('./connection.js');

// export object with query methods
// ?? represent table/column names
// ? represent values
module.exports = {
	/*
		method that runs select * from table query
		takes in table name, res from ajax request and callback function
	*/
	selectAll: function(table, res, callback) {
		/*
			string for query parameter
		*/
		var queryString = "SELECT * FROM ??";
		
		/*
			run queryString, the array passes values into ??/?
			runs callback function when finished with query
		*/
		connection.query(queryString, [table], function(err, result) {
			// if there's an error, kill the code and console the error
			if (err) throw err;

			/*
				run the callback function that was passed into this method
				pass in the result from query and res from ajax request as parameters
			*/
			callback(result, res);
		});
	},
	/*
		run an insert query
		takes in table name, columns and values, res from ajax request and callback function as parameters
	*/
	insertOne: function(table, columns, values, res, callback) {
		/*
			string for query parameter
		*/
		var queryString = "INSERT INTO ?? (??) VALUES (?)";

		/*
			run queryString, the array passes table/column names into ??s and values into ?s
			runs callback function when finished with query
		*/
		connection.query(queryString, [table, columns, values], function(err, result) {
			// if there's an error, kill the code and console the error
			if (err) throw err;

			/*
				run the callback function that was passed into this method
				pass res from the ajax request as parameter
			*/
			callback(res);
		});
	},
	/*
		run update query
		takes in table name, objects for set and where clauses, res from ajax request and callback function as parameters
	*/
	updateOne: function(table, setClause, whereClause, res, callback) {
		/*
			string for query parameter
		*/
		var queryString = "UPDATE ?? SET ? WHERE ?";

		/*
			run queryString, array passes table name in to ?? and set/where clauses into ?s
			runs callback function when finished with query
		*/
		connection.query(queryString, [table, setClause, whereClause], function(err, result) {
			// if there's an error, kill the code and console the error
			if (err) throw err;
			
			/*
				run the callback function that was passed into this method
				pass the res from the ajax request as parameter
			*/
			callback(res);
		});
	}
};