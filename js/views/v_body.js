/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/app.html'
], function ($, _, Backbone, tpl_body) {
	'use strict';
	// View_app es el UI principal
	var View_app = Backbone.View.extend({
		// Elemento del HTML que gestiona este View
		el: '#dom_body',
		// Underscore recoge la template app
		template: _.template(tpl_body),
		// Método Constructor
		initialize: function () {
			this.render();
		},
		// Render de view 
		render: function () {
			this.$el.html( this.template() );
		}
	});
	return View_app;
});
