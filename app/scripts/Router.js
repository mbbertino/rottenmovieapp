var MainRouter = Backbone.Router.extend({
	routes: {
		'movies/:keyword': 'movieView'
	},

	initialize: function(){
		this.movies = new RottenMoviesCollection;
		this.movies.on('add', function(data){
			// console.log(data)
			new ListView({model: data});
		})
	},

	movieView: function(keyword){
		$('.js-movie-list').empty();
		this.movies.url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/'+ keyword +'.json?apikey=f9xctxenkytzyesfy4f2zsqf&limit=40&callback=?';
		this.movies.fetch();
	}
})
	// make it work > nice > fast
	// can't jsut instantiate the views before fetch is done