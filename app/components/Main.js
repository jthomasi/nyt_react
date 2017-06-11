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

	getInitialState: function(){
		return { search: {}, results: [], articles: [] };
	},
	setTerm: function(term) {
	    this.setState({ search: term });
	},
	render: function(){
		return(
			<div className="container">
		        <div className="jumbotron" style="background-color: #20315A ; color: white;">
			        <h1 className="text-center"><strong>New York Times Search</strong></h1>
			    </div>

		        <div className="row">

		            <Form setTerm={this.setTerm} />

		        </div>

		        <div className="row">

		            <Results results={this.state.results} />

		        </div>

		        <div className="row">

		            <Articles articles={this.state.articles} />

		        </div>

		    </div>
		);
	}

});

module.exports = Main;