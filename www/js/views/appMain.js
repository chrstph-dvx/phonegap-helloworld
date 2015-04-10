/*
Site specific Main View
Authors: Dr.Velja and Mr.Hju
*/
define([
	'app',
	'views/main'
], function(App) {

	App.Views.AppMain = App.Views.Main.extend({

		changePage: function(viewName){
			var self = this;
			$('.loader').fadeIn(function() {
				App.Views.Main.prototype.renderLayout.apply(self, [viewName]);
			});
		},

		afterRender: function(){
			var self = this;
			$('.loader').fadeOut(function() {
				App.firstInit = false;
			});
		},

		beforeRender: function(){
			var self = this;
			App.Views.Main.prototype.renderLayout.apply(self, ['Home']);
		},

		initialize: function() {
			var self = this;
		}

	});
	
});