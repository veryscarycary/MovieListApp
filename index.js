var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');

var getData = function() { 
	$.ajax({
		url: 'http://www.omdbapi.com/?',
		type: 'GET',
		data: {
			t: 'Frozen'
		},
		success: function (data) {
			console.log('DATA', data);
		},
		error: function (error) {
			console.log('GET request failed', error);
		}
	});
};

ReactDOM.render(<App />, document.getElementById('app'));