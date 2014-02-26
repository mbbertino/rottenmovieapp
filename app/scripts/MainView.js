var MainView = Backbone.View.extedn({
	className: 'main-fadein',

	renderTemplate: _.template($('#main-view-template').text()),

	initialize: function() {
		$('.main-list').empty)();
		this.render();
		$('.main-list').append( this.el );
	},

	render: function() {
		this.$el.html(renderTemplate(this.model))
	},
})