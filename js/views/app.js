define([
	"underscore",
	"backbone",
	"collections/todos",
	"views/todo"
], function(_, Backbone, Todos, TodoView){
	"use strict";

	var AppView = Backbone.View.extend({
		el: ".todoapp",

		events: {
			"keypress .new-todo": "createOnEnter"
		},

		initialize: function(){
			this.$input = this.$(".new-todo");

			this.listenTo(Todos, "add", this.addOne);
		},

		createOnEnter: function(e){
			console.log(e.keyCode);

			var code = e.keyCode || e.which;
			var inputVal = this.$input.val().trim();

			if( code === 13 && inputVal ) {
				Todos.create({title: inputVal, completed: false});
				this.$input.val("");
			}
		},

		addOne: function(todoModel){
			var todoView = new TodoView({model: todoModel});

			this.$el.append(todoView.render().el);
		}
	});

	return AppView;
});