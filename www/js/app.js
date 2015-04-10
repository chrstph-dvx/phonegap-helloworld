/*
App Object
Copyright Kitchen S.R.O. 2014. 
Author: Filip Arneric
*/

define([
    'jquery', 
    'underscore', 
    'backbone',
    'handlebars',
    'layoutmanager',
    'modernizr'
], function ($, _, Backbone, Handlebars) {
    
    // App Object
    // ---------------------------------------------------------------
    var App = {
        Views: {},
        Layouts: {},
        Routers: {},
        Collections: {},
        Models: {},
        Mixins: {},
        segments: {},
        options: {},
        firstInit: true
    };

    App.Colors = {
        colorsdark: "#111",
        blue: "#00abe3",
        lightGrey: "#9dabb0",
        grey: "#4d525a",
        green: "#3eac48",
        white: "#fff"
    };

    App.init = function(){
        App.Router.startHistory();
    };

    Backbone.View.prototype.addView = function(viewname, el, render, options) {
        var self = this,
            view = false;
            
        // Insert a nested View into this View.
        if(_.has(App.Views, viewname)){
            view = this.insertView(el, new App.Views[viewname]);
            // Only trigger render if it not inserted inside `beforeRender`.
            if (render !== false) view.render();
        }

        return view;
    };

    // App event bus
    // ---------------------------------------------------------------
    App.Events = {};
    _.extend(App.Events, Backbone.Events);
    
    return App;
});