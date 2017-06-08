// require react and reactDOM
var React = require("react");
var ReactDOM = require("react-dom");

// require the Main.js from components dir
var Main = require("./components/Main");

// allows us to render what is in the Main
ReactDOM.render(<Main />, document.getElementById("app"));