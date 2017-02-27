'use strict';

// export function to burgers_controller.js
module.exports = function(sequelize, DataTypes) {
	/*
		create a model of the burgers table
			has columns:
				burger_name VARCHAR NOT NULL
				devoured BOOLEAN DEFAULT FALSE
	*/
	var Burger = sequelize.define("Burger", {
		burger_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});

	// return the model
	return Burger;
};