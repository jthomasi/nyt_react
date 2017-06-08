// require npm packages
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var mongojs = require("mongojs");

// require Saved schema for mongodb that will be used below in routes section
var Saved = require("./models/Saved");

// create express and create port to listen on
var app = express();
var PORT = process.env.PORT || 3000;

// using morgan for logging purposes (boiler code)
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// set dir to static
app.use(express.static("./public"));

// creating db and connection to local mongodb using mongoose 
mongoose.connect("mongodb://localhost/nyt_react");
var db = mongoose.connection;

db.on("error", function(error){
	console.log("Mongoose Error " + error);
});
db.once("open", function(){
	console.log("Mongoose connection successful.");
});

// ------ ROUTES ------ //

// sending homepage to index.html file which will link to bundle.js
app.get("/", function(req, res){
	res.sendFile(__dirname + "/public/index.html");
});



// listening port for localhost
app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});