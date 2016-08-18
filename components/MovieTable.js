var React = require('react');
var MovieTableRow = require('./MovieTableRow');

var MovieTable = ({updateMovies, movies}) => (
		<div>
			MovieTable
			{movies.map((movie) => (
				<MovieTableRow movie={movie} class="movietablerow" />
			))}
		</div>
)

module.exports = MovieTable;