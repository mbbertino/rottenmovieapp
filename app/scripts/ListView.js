var ListView = Backbone.View.extend({
	// tagName: 'a',

	className: 'movie-unit',
	
	renderTemplate: _.template($('#list-template').text()),

	events: {
		"click .js-movie-thumbnail": "mainMovieView"
	},

	initialize: function() {
		$('.js-movie-list').append( this.el );
		this.render();
		// this.$el.attr({href: "#movies/main-view/" + this.model.get('title') })
	},

	render: function(){
		this.$el.html(this.renderTemplate(this.model))
		//  need to use something along the lines of this.model.get()
	},

	mainMovieView: function(){
		new MainView({model: this.model})
	}
})