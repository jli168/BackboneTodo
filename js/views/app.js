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
			"keypress .new-todo": "createOnEnter",
			"click #toggle-all": "toggleAll",
			"click #clear-completed": "clearCompleted"
		},

		template: _.template($("#stats-template").html()),

		initialize: function(){
			this.$input = this.$(".new-todo");
			this.$footer = this.$(".footer");
			this.$toggleAllCheckbox = this.$("#toggle-all")[0];

			this.listenTo(Todos, "add", this.addOne);
			this.listenTo(Todos, "change", this.render);
		},

		render: function(){
			var completed = Todos.completed();
			var remaining = Todos.remaining();

			if(Todos.length){
				this.$footer.html(this.template({
					completed: completed,
					remaining: remaining
				}));
				$(".main").show();
				$(".footer").show();
			}else{
				$(".main").hide();
				$(".footer").hide();
			}

			if(Todos.length === completed && Todos.length > 0){
				this.$toggleAllCheckbox.checked = true;
			}else{
				this.$toggleAllCheckbox.checked = false;
			}
		},

		createOnEnter: function(e){
			var code = e.keyCode || e.which;
			var inputVal = this.$input.val().trim();

			if( code === 13 && inputVal ) {
				Todos.create({title: inputVal, completed: false});
				this.$input.val("");
				this.render();
			}
		},

		addOne: function(todoModel){
			var todoView = new TodoView({model: todoModel});

			this.$("#todo-list").append(todoView.render().el);
		},

		toggleAll: function(){
			var checked = this.$toggleAllCheckbox.checked;

			Todos.each( function(todo){
				todo.save({completed: checked});
			});
		},

		clearCompleted: function(){
			Todos.each(function(todo){
				if(todo.get("completed")){
					todo.destroy();
				}
			});
		}
	});

	return AppView;
});