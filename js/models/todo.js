define([
	"underscore",
	"backbone"
], function(_, Backbone){
	"use strict";

	var todo = Backbone.Model.extend({
		// default attributes
		defaults: {
			title: "",
			completed: false
		},

		toggle: function(){
			this.save({
				completed: !this.get("completed")
			});
		}
	});

	return todo;
})