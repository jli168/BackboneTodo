define([
	"underscore",
	"backbone",
	"collections/todos",
], function(_, Backbone, TodoCollection){
	"use strict";

	var TodoView = Backbone.View.extend({
		tagName: "li",

		template: _.template($("#item-template").html()),

		initialize: function(){
			this.listenTo( this.model, "change", this.render);
		},

		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},


	});

	return TodoView;
});