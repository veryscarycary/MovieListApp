var React = require('react');
var MovieTable = require('./MovieTable');

class App extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			movies: [],
		}

		console.log(this.state);
	}

	componentDidMount () {
		this.getData('Batman');
		console.log('did mount!!')
	}

	getData (title, cb) {
		var context = this;

		$.ajax({
			url: 'http://www.omdbapi.com/?',
			type: 'GET',
			data: {
				s: title
			},
			success: function (data) {
				console.log(data);
				var movies = data.Search.map(function(movie) {
					return {poster: movie.Poster,
						title: movie.Title,
						year: movie.Year}
				});

				context.setState({movies: movies});
			},
			error: function (error) {
				console.log('GET request failed', error);
			}
		})
	}
	


	render () {
		return (
			<div>
				<h1 id="title">Movie List</h1>
				<MovieTable updateMovies={this.getData.bind(this)} movies={this.state.movies} />
			</div>
		)
	}
}

module.exports = App;