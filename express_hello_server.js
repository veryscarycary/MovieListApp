var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;

var movies = [];
var directors = [];

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var querySelection = function (query, endpoint) {
	var results = [];
	for (let key in query) {
		endpoint.forEach(function (item) {
		// set key on result to movie value at that key on movies
			// var result = {};
			// result[key] = item[key];
			// console.log(result);
			results.push(item);
		});
	}
	return results;
};


app.get('/movies', function (req, res) {
	if (Object.keys(req.query).length) {
		console.log('REQ QUERY', req.query);
		if (req.query.year) {
			console.log('YEAR', req.query.year);
			var results = [];
			for (let key in req.query) {
				movies.forEach(function (movie) {
				// set key on result to movie value at that key on movies
					if (movie.year > Number(req.query.year)) {
						console.log(movie.year, '>',req.query.year);
						// var result = {};
						// result[key] = item[key];
						// console.log(result);
						results.push(movie);
					}
				});
			}
			res.send(results);
		} else {
			let results = querySelection(req.query, movies);
			res.send(results);
		}
	} else {
		res.send(movies);
	}
});

app.post('/movies', function (req, res) {
	movies.push(req.body);
	res.send('data posted to array');
});



app.get('/directors', function (req, res) {
	if (Object.keys(req.query).length) {
		let results = querySelection(req.query, directors);	
		res.send(results);
	} else {
		res.send(directors);
	}
});

app.post('/directors', function (req, res) {
	console.log(req.body);
	directors.push(req.body);
	res.send(directors);
});



app.listen(port, function (err) {
	if (err) {
		return console.log('Something bad happened');
	}

	console.log('Listening on port ' + port);
});

// app.get('/', function (req, res) {
// 	res.render('./inde');
// });