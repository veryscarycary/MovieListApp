var mysql = require('mysql');
var express = require('express');


var connection = mysql.createConnection({
  user: 'root',
  password: 'cary',
  database: 'cinema'
});

connection.connect();


var insert = function(params, callback) {
	connection.query("INSERT INTO movies(title, director, year) VALUES (?, ?, ?)", params,
	 function (err, result) {
	 	callback(result);
	 })
};

// "1; drop database movies;"

insert(['fight c', 'somebody', 1999], function(){console.log('hi');});

module.exports = connection;