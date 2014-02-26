/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/header.html'
], function ($, _, Backbone, tpl_header) {
	'use strict';
	// View_app es el UI principal
	var View_header = Backbone.View.extend({
		// Elemento del HTML que gestiona este View
		el: '#dom_header',
		// Underscore recoge la template app
		template: _.template(tpl_header),
		// Método Constructor
		initialize: function () {
			this.render();
		},
		// Render de view 
		render: function () {
			this.$el.html( this.template() );
		}
	});
	return View_header;
});
