// http://api.rottentomatoes.com/api/public/v1.0/movies/INSERT HERE.json?apikey=[your_api_key]
// first one is a ? mark 
// after that & can be used as query string peramiter can be in any order. usually put the keys on the end

$(document).ready(function(){
	router = new MainRouter;
	// do I need to invoke MainRouter??

function getMoviesInTheaters(){	
	$.ajax({
		dataType: 'jsonp',
		url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=f9xctxenkytzyesfy4f2zsqf&limit=40',
		// url: moviesSearchUrl + '&q=' + encodeURI(query),
			// what does encodeURI do??
		success: function (data) {
			movies = new RottenMoviesCollection(data.movies);			
			movies.each(function(item) {
			 	new ListView({model: item});
			 })
		}
	});
}

getMoviesInTheaters()
Backbone.history.start();

})


// http vs https 
// 