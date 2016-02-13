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

	});

	// here, return an instance of collection, not prototype!
	return new TodoCollection();
});
