var MainView = Backbone.View.extend({
	
	className: 'main-fadein',

	events: {
		"click .js-close-modal": "remove"
	},

	renderTemplate: _.template($('#main-view-template').text()),

	initialize: function() {
		this.render();
		$('.js-marketing').append( this.el );
	},

	render: function() {
		this.$el.html(this.renderTemplate(this.model))
	},


})