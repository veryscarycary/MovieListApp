var React = require('react');
var MovieTable = require('./MovieTable');

var MovieTableRow = ({movie}) => (
		<div>
		<img src={movie.poster} />
		<h3>{movie.title}</h3>
		{movie.year}
		</div>
)

module.exports = MovieTableRow;