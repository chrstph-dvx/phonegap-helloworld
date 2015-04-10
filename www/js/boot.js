/*
App Boot
Copyright Kitchen S.R.O. 2014. 
Authors: Filip Arneric & Velja Matic
*/
define([
    'app',
    'views/appMain',
    'views/home',
    'views/page2',
    'router'
], function (App) {
    App.Router = new App.MainRouter();
	App.Main = new App.Views.AppMain();
});