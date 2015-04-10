/*
Master Main View
Authors: Dr.Velja and Mr.Hju
*/
define([
	'app'
], function(App) {
	
	App.Views.Main = Backbone.View.extend({   
		el: 'body',
		manage: true,
		events: {
			'click .links' : 'changeRoute'
		},

		changeRoute: function(e) {
	    	e.preventDefault();

	    	var self = this,
    			$target = $(e.currentTarget),
    			href = $target.attr("href"),
    			isBlank = $target.attr('target') == '_blank';
    		
    		if(isBlank){
	    		window.open(href, '_blank');
    		}else{
	    		App.Router.navigate(href, true);
    		}
	    },

		renderLayout: function(viewName){
			var self = this;
			App.Layout && self.removeView("#main");
			App.Layout = self.addView(viewName, "#main", true);
			$('.loader').fadeOut();
		}
	
	});		
	
});