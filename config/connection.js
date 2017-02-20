'use strict'

// import the mysql package
var mysql = require('mysql');

// set up the connection object for local use
var connectInfo = {
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'burgers_db'
};

// if the app is being used on heroku, then JAWSDB_URL will be defined
if (process.env.JAWSDB_URL) {
	// if JAWSDB_URL is defined, assign it to the connection object
	connectInfo = process.env.JAWSDB_URL;
}

// create the connection to the database
var connection = mysql.createConnection(connectInfo);

// connect to the database
connection.connect();

// export the connection
module.exports = connection;