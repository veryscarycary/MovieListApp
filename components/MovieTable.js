var React = require('react');
var MovieTableRow = require('./MovieTableRow');

var MovieTable = ({updateMovies, movies}) => (
		<div id="movietable">
			{movies.map((movie) => (
				<MovieTableRow movie={movie} />
			))}
		</div>
)

module.exports = MovieTable;