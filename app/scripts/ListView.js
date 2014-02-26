var ListView = Backbone.View.extend({

	className: 'movie-item js-movie-item',

	renderTemplate: _.template($('#list-template').text()),

	// events: {
	// 	'click .js-movie-item': 'makeNewMainView'
	// },


	initialize: function() {
		$('.js-movie-list').append( this.el );
		this.render();
	},

	render: function(){
		this.$el.html(this.renderTemplate(this.model))
		// maybe I need to add attributes to the end of this.model
	}
})