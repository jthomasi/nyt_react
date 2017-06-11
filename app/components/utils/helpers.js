var axios = require("axios");

var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(query,start,end) {

    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

	// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
	// the user hits the search button
	var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
	  authKey + "&q=" + query + "&start_year=" + start + "&end_year=" + end;

    $.ajax({
    	url: queryURL,
    	method: "GET"
    }).done(function(NYTData) {

    	var articles = [];

    	for (let i=0; i<NYTData.length; i++){
    		if (NYTData.response.docs[i].headline !== "null") {
		        let articleObj = {
		        	title: NYTData.response.docs[i].headline.main,
		        	body: NYTData.response.docs[i].body
		        }
		        articles.push(articleObj);
		    }
    	}

    	return articles;

    });

    return articles;

  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    return axios.post("/api", { location: location });
  }
};

module.exports = helper;