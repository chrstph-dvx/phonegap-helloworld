/*
Basic Page View
Authors: Dr.Velja and Mr.Hju
*/
define([
	'app',
	'handlebars',
	'text!templates/hbs/home.hbs'
], function(App, Handlebars, Template) {

	App.Views.Home = Backbone.View.extend({
		manage: true,
		template: Handlebars.compile(Template), 

	    cleanup: function(){
	    	var self = this;
	    	self.undelegateEvents();
		},

		beforeRender: function(){},

		afterRender: function(){
			var self = this;

			self.rendered = true;
			
			self.setSizes();
			self.delegateEvents();
		},

		setSizes: function(){
			var self = this;

			// call setSize on subviews
			self.getViews().each(function(view){
	    		view.setSizes && view.setSizes();
	    	});
		},
		
		initialize: function(){
			var self = this;
			self.rendered = false;
		},

		serialize : function(){
			var self = this;
		}

	});		
	
});