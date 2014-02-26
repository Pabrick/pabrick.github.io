/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
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
			exports: 'Store'
		}
	},
	paths: {
		jquery: '../bower_components/jquery/jquery',
		underscore: '../bower_components/underscore/underscore',
		backbone: '../bower_components/backbone/backbone',
		backboneLocalstorage: '../bower_components/backbone.localStorage/backbone.localStorage',
		text: '../bower_components/requirejs-text/text'
	}
});

require([
	'backbone',
	'views/v_header',
	'views/v_body',
	'views/v_footer',
	'routers/router'
], function (Backbone, View_header, View_body, View_footer, Workspace) {

	/*jshint nonew:false*/
	// Initialize routing and start Backbone.history()
	new Workspace();

	Backbone.history.start();

	// Initialize the application view
	// Initialize sections
	new View_header();
	new View_body();
	//new View_footer();
});
