var RottenMovie = Backbone.Model.extend({

});

var RottenMoviesCollection = Backbone.Collection.extend({
	
	model: RottenMovie,

	// url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=f9xctxenkytzyesfy4f2zsqf&limit=40'
	// parse: function(data){
		// return data.results
	// }
})