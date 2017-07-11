var React = require("react");
var ReactDOM = require("react-dom");

var routes = require("./config/routes");

// render content depending on routes
ReactDOM.render(routes, document.getElementById("app"));