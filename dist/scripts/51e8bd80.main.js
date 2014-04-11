var ListView=Backbone.View.extend({className:"movie-unit",renderTemplate:_.template($("#list-template").text()),events:{"click .js-movie-thumbnail":"mainMovieView"},initialize:function(){$(".js-movie-list").append(this.el),this.render()},render:function(){this.$el.html(this.renderTemplate(this.model))},mainMovieView:function(){new MainView({model:this.model})}}),MainView=Backbone.View.extend({className:"main-fadein",events:{"click .js-close-modal":"remove"},renderTemplate:_.template($("#main-view-template").text()),initialize:function(){this.render(),$(".js-marketing").append(this.el)},render:function(){this.$el.html(this.renderTemplate(this.model))}}),MainRouter=Backbone.Router.extend({routes:{"movies/:keyword":"movieView"},initialize:function(){this.movies=new RottenMoviesCollection,this.movies.on("add",function(a){new ListView({model:a})})},movieView:function(a){$(".js-movie-list").empty(),this.movies.url="http://api.rottentomatoes.com/api/public/v1.0/lists/movies/"+a+".json?apikey=f9xctxenkytzyesfy4f2zsqf&limit=40&callback=?",this.movies.fetch()}}),RottenMovie=Backbone.Model.extend({}),RottenMoviesCollection=Backbone.Collection.extend({model:RottenMovie,parse:function(a){return a.movies}});$(document).ready(function(){router=new MainRouter,Backbone.history.start()});