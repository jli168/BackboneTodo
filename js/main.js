"use strict";

require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		backboneLocalstorage: {
			deps: ['backbone'],
			exports: 'Store' // here i am wondering if we can remove this 
		}
	},
	paths: {
		jquery: '../vendor/jquery-1.12.0',
		underscore: '../vendor/underscore',
		backbone: '../vendor/backbone',
		backboneLocalstorage: '../vendor/backbone.localStorage'
	}
});

require([
	"views/app"
], function(AppView){
	var appView = new AppView();
});