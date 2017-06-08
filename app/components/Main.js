// require React
var React = require("react");

// require all of our children components
var Form = require("./children/Form");
var Results = require("./children/Results");
var Articles = require("./children/Articles");

// require helpers.js to act as ajax requests
var helpers = require("./utils/helpers");

// start the main class component for App.js
var Main = React.createClass({

	//
	getInitialState: function(){
		return { search: [], results: "", articles: [] };
	},

});