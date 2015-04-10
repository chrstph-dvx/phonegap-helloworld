/*
App Router
Copyright Kitchen S.R.O. 2014. 
Author: Filip Arneric & Velimir Matic
*/
define([
	'app'
], function(App) {
			
	//Router
	App.MainRouter = Backbone.Router.extend({
		routes: {
	    	"*actions": "render"
   		},

   		// routes history
   		history : [],
	    
   	 	render: function(url, params, pageData) {
	   	 	if(App.firstInit){
	   	 		App.Main.render();
	   	 		return;
	   	 	}

		    App.Main.changePage((url||'home').capitalize());
   	 	},

   	 	// fired before every route. 
		execute: function(callback, args, name) {
	   	 	this.storeRouteHistory(name, args);
			if (callback) callback.apply(this, args);
		},

		storeRouteHistory: function(name, args){
            var self = this;
            self.history.push({
                name : name,
                args : args,
                fragment : Backbone.history.fragment
            });
        },
		
		initialize: function(){
			var self = this;
		},

		startHistory : function(){
			var self = this;
			Backbone.history = Backbone.history || new Backbone.History({});

			Backbone.history.start({
                pushState: Modernizr.history,
                hashChange: true,
                root: '/',
                silent: !Modernizr.history
            });

            // handle history for old internet explorer + normal behaviour
			if(!Modernizr.history) {
				var rootLength = Backbone.history.options.root.length;
				var fragment = window.location.pathname.substr(rootLength) || locale;
				self.navigate(fragment, { trigger: true });
			}
		}
	    
	});

});