var React = require('react');

class Search extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			value: '',
			buttonClicked: true
		}
	}

	inputHandler (event) {
		this.props.updateMovies(this.state.value);
	}

	setStateSearch (e) {
		this.setState({
			value: e.target.value
		});
	}

	render () {
		return (
			<div>
			  <input type="text" onChange={this.setStateSearch.bind(this)} Value={this.state.value} />
			  <button onClick={this.inputHandler.bind(this)}>Go</button>
			</div>
		)
	}
}

module.exports = Search;