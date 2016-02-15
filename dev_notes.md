
##### 1. require.js: what's the difference between `define()` and `require()`?
*	`define()` returns a value for future use, as modular pattern, while `require()` does not need to.
*	checkout [this post: when-should-i-use-require-and-when-to-use-define](http://stackoverflow.com/questions/9507606/when-should-i-use-require-and-when-to-use-define), also [basic require.js example](http://www.tuicool.com/articles/jam2Anv)

##### 2. backbone.js: how does the event's callback function know the passing arguments?
*	Take a look at [events category](http://backbonejs.org/#Events-catalog)
*	And look at this `listenTo(todos, "add", callbackFunc)`, the `callbackFunc` will accept arguments as `model, this, options`. [ref](http://stackoverflow.com/questions/21919778/backbone-listento-callback-arguments)

##### 3. backbone.js: how to find set of models with certain attributes in a collection?
*	use `where()` function! [doc](http://backbonejs.org/#Collection-where)
*	example: 

	```javascript		
		completed: function(){
			return this.where({completed: true});
		},
	```

##### 4. backbone.js: remove certain models from a collection:
*	use `where` cause: `people.remove(people.where({name: "joe3"}));` [ref](http://stackoverflow.com/questions/15068036/remove-model-in-collection-and-fire-remove-event-backbone-js)
*	or delete reference of model: 

	```javascript
	var model = new Person({name: "joe3"});
	people.add(model);
	...
	people.remove(model);
	```

##### 5 backbone.js: interesting functions:
*	`collection::create`: create a model with the attributes passed in, add it to the collection, and fire "add" event on the collection.
*	`model::get`: Get the current value of an attribute from the model
*	`view::remove`: Removes a view and its el from the DOM. ususally works together with its model's `destroy` event.

##### 6. backbone.js: template usage basic:
*	Create a template view, like this:

	```html
	<script type="text/template" id="item-template">
		<div class="view">
			<input class="toggle" type="checkbox" <%= completed ? "checked" : "" %> >
			<label><%- title %></label>
			<button class="destroy">X</button>
		</div>
		<input class="edit" type="text" value="<%- title %>">
	</script>
	```
*   In `Backbone.View`, create a template attribute: `template: _.template($("#item-template").html())`
*   Now we can populate the template with model's data for the view's element: `this.$el.html(this.template(this.model.toJSON()));`







