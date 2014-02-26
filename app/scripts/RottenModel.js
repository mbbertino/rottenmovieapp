var RottenMovie = Backbone.Model.extend({});

var RottenMoviesCollection = Backbone.Collection.extend({
	model: RottenMovie,
	
	parse: function(data){
		return data.movies
	}
})

	// This is better than doing the manual fetching in my main.js
		// I will still need to run fetch on my collection

	// parse: function(data){
		// return data.movies
	// }
	// need to start working with listenTo events