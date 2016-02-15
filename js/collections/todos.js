define([
	"underscore",
	"backbone",
	"backboneLocalstorage",
	"models/todo"
], function(_, Backbone, Storage, Todo){
	"use strict";

	var TodoCollection = Backbone.Collection.extend({
		model: Todo,

		localStorage: new Storage("todo-backbone"),

		completed: function(){
			return this.where({completed: true}).length;
		},

		remaining: function(){
			return this.where({completed: false}).length;
		}
	});

	// here, return an instance of collection, not prototype!
	return new TodoCollection();
});
