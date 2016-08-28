var React = require('react');
var MovieTable = require('./MovieTable');

class MovieTableRow extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			hidden: true
		}
	}

	render() {
		if (this.state.hidden) {

			return (
				<div className="row">
					<h3 onClick={() => this.setState({hidden: !this.state.hidden}) }>{this.props.movie.title}</h3>
				</div>
			)

		} else {

			return (
				<div className="row" onClick={() => this.setState({hidden: !this.state.hidden}) }>
					<img src={this.props.movie.poster} />
					<h3>{this.props.movie.title}</h3>
					{this.props.movie.year}
				</div>
			)
		}
	}
}

module.exports = MovieTableRow;