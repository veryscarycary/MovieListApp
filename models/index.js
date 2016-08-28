var db = require('../db/index.js');

module.exports = {
	movies: {
		get: function(callback) {
			db.query("select * from movies", function (err, results) {
				//callback(results);
			});
		},
		post: function(params, callback) {
			db.query("insert into movies(title, director, year) VALUES (?)", params,
			 function (err, result) {
			 	callback(result);
			 })
		}
	},
	directors: {
		get: function (callback) {

		},
		post: function (calback) {

		}
	}
}

module.exports.movies.post(['fight club', 'somebody', 1999], function(){console.log('hi');});