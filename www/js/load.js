/*
RequireJS load file
Copyright Kitchen S.R.O. September 2013.
*/

require.config({
	urlArgs: "noCache=" + (new Date).getTime(),
    baseUrl: 'js/',
    waitSeconds: 120,
    paths: {
        // -------------------------------------------------
        // Folder Paths 
        // -------------------------------------------------
        'views' : 'views',
        'mixins' : 'mixins',
        'templates' : '../templates',
        'partials' : '../templates/hbs/partials',
        'models' : 'models',
        'data' : 'data',
        // -------------------------------------------------
        // Scripts Paths 
        // -------------------------------------------------
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'underscore': '../bower_components/underscore/underscore-min',
        'backbone': '../bower_components/backbone/backbone',
        'handlebars': '../bower_components/handlebars/handlebars.min',
        'layoutmanager': '../bower_components/layoutmanager/backbone.layoutmanager',
        'modernizr': '../bower_components/modernizr/modernizr',
        'text': 'libs/text'
    },
 
    shim: {
        Modernizr: {
            exports: "Modernizr"
        }
    }
});