var React = require('react');
var MovieTable = require('./MovieTable');

class App extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			movies: [{poster: "http://ia.media-imdb.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_SX300.jpg",
			title: "Rocky",
			year: "1976"},
			{poster: "http://ia.media-imdb.com/images/M/MV5BMTM2OTUzNDE3NV5BMl5BanBnXkFtZTcwODczMzkzMQ@@._V1_SX300.jpg",
			title: "Rocky Balboa",
			year: "2006"},
			{poster: "http://ia.media-imdb.com/images/M/MV5BNDIwNzgzMTUwN15BMl5BanBnXkFtZTcwMjA0NzE1NA@@._V1_SX300.jpg",
			title: "Rocky II",
			year: "1779"}]
		}

		this.getData('Rocky');
		console.log(this.state);
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
				context.setState({movies: data});
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
				<MovieTable updateMovies={this.getData.bind(this)} movies={this.state.movies} id="movietable"/>
			</div>
		)
	}
}

module.exports = App;