/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/footer.html'
], function ($, _, Backbone, tpl_footer) {
	'use strict';
	// View_app es el UI principal
	var View_footer = Backbone.View.extend({
		// Elemento del HTML que gestiona este View
		el: '#dom_footer',
		// Underscore recoge la template app
		template: _.template(tpl_footer),
		// Método Constructor
		initialize: function () {
			this.render();
		},
		// Render de view 
		render: function () {
			this.$el.html( this.template() );
		}
	});
	return View_footer;
});
