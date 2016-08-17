var React = require('react');
var MovieTable = require('./MovieTable');

class App extends React.Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div>
				<h1>Movie List</h1>
				<MovieTable />
			</div>
		)
	}
}

module.exports = App;