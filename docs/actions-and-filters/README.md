# Actions and Filters
Hooks are a way for one piece of code to interact/modify another piece of code. There are two types of hooks: 
Actions and Filters. To use either, you need to write a custom function known as a Callback, and then register 
it with the hook for a specific Action or Filter.

[Actions](https://developer.wordpress.org/plugins/hooks/actions/) allow you to add data or change how WordPress operates. 
Callback functions for Actions will run at a specific point in in the execution of ProjectHuddle, and can perform some kind of a task.

[Filters](https://developer.wordpress.org/plugins/hooks/filters/) give you the ability to change data during the 
execution of ProjectHuddle. Callback functions for Filters will accept a variable, modify it, and return it. 
They are meant to work in an isolated manner, and should never have side effects such as affecting global variables and output.

Filters and Actions are available on both the server side (PHP) and in the 
browser (Javascript). Please use the menu to navigate to see many of the available filters and actions throughout the plugin.

## Using Actions and Filters in PHP
To use actions and filters in php, check out WordPress' developer handbook on Actions and Filters here:

[WordPress Hooks on the Plugin Handbook](https://developer.wordpress.org/plugins/hooks/)

## Using Actions and Filters in Javascript
`ph.api.hooks` is an object that contains all the actions and filters used in the javascript
on the page. For developers familiar with WordPress, they work very similar to WordPress'
PHP hooks, and for developers familiar with Gutenberg, they work almost identically to
Gutenberg's hooks.

You can add a new action using the following:

```js
ph.api.hooks.addAction( tag, namespace, callback, priority )
ph.api.hooks.addFilter( tag, namespace, callback, priority );
```

| argument | Description |
|--------|-------------|
| tag `string` | The name of the action or filter |
| namespace `string` | A namespace for your hook. This is so it can be referenced globally. |
| callback `function` | The function to call when the hook occurs |
| priority `int` | (optional) A priority for your hook. Defaults to 10 |

#### Usage
Here's an example of how to use an addAction function. The initialize action is run when each model 
is initialized and populated with data - this is a very common way to add and run your own functions. 
Here's an example of how we would use the initialize function on a comment model: 

```js
/**
 * Hook into website thread initialize
 */
ph.api.hooks.addAction(
    // this is the comment action
    "ph.api.models.Comment.initialize",
    
    // this is the namespace
    "myCustomization",
    
    // the function we're going to run
    'myFunction',
);

/**
 * Hook into comment initialize
 */
function myFunction(model) {
   // this will log the model
   console.log(model); 
   
   // this will run a model's method
   if ( typeof model.setModerate === "function" ) {
      model.setModerate();
   }

   // this will log the comment content
   console.log(model.get('content').rendered);
 }
```
This example doesn't do much, but you can see we can access a model's data, methods, and more. 
