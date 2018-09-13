---
sidebarDepth: 3
---

# Extending Backbone Models, Views and Collections
You can extend ProjectHuddle's models, views and collections via by extending ProjectHuddle's objects. 
For instance, if you want to add new functions, add additional events, or even add your own UI you can hook 
into the initialize function on any view or model of your choice. 

### Why would you want to extend models, views or collections?
There are many reasons to extend models, views and collections. Here are some of the most common use-cases:
1. You want to add or change functionality.
2. You want to add new UI components.
3. You need to reference model data.
4. You want to listen for changes in model data and run your own functions.

## ph.api.hooks
ph.api.hooks is an object that contains all the actions and filters used in the javascript
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

## Using Hooks
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

## Extending Models
Now let's take things a step further. We can add our own methods, listen to model data changes 
and more. This will help us run functions within the scope of the model.

### Types of Models
Models are stored in the ph.api.models object. Here's some of the models that may be
included on a page:

- `ph.api.models.Comment`
- `ph.api.models.MockupThread`
- `ph.api.models.MockupImage`
- `ph.api.models.Mockup`
- `ph.api.models.WebsiteThread`
- `ph.api.models.WebsitePage`
- `ph.api.models.Website`
- `ph.api.models.User`
- `ph.api.models.UserMe`

### Adding New Functions
Let's begin by adding a new method to a model and calling it on initialize. 

:::tip Prefix Recommended
Whenever you're adding new methods to a model, view or collection, it's always recommended you add
a unique prefix to your function. This will prevent conflicts with existing functions within a model.
:::

#### _.extend
Underscore provides and _.extend method for this reason! This lets us extend an existing model's p
prototype with our own methods. Let's start by extending the comment model from the example above and add our own method. 

We can tell from the source files that the comment model is stored in ph.api.models.Comment. Here we'll
use the extend method and use a hook to call the new method:

```js
/**
 * Hook into comment initialize
 */
ph.api.hooks.addAction(
    // this is the comment action
    "ph.api.models.Comment.initialize",
    
    // this is the namespace
    "myCustomization",
    
    // run our function
    function(model) {
        // run the new method we added
        model.prefixMyFunction();
    }
);

/**
 * Extend model prototype functions with our own
 */
_.extend(ph.api.models.Comment.prototype, {
  prefixMyFunction: function() {
    console.log(this); // log this
    
    // this will log the comment content
    console.log(this.get('content').rendered);
  }
});
```
You can see that by extending a model, we can add new methods and run functions within the 
context of a model.

### Listening for Model Changes
We can also listen for model changes and act accordingly. For example, perhaps we want to perform
another action when a website comment thread is resolved. 

#### listenTo
You can do this with backbones [listenTo](http://backbonejs.org/#Events-listenTo)
function. The advantage of using this form, instead of `other.on(event, callback, object)`, is that 
`listenTo` allows the backbone object to keep track of the events, and they can be removed all at once later on.
This prevents listening to items if models are removed, for instance.

```js
/**
 * Hook into comment thread initialize
 */
ph.api.hooks.addAction(
    // this is the comment action
    "ph.api.models.WebsiteThread.initialize",
    
    // this is the namespace
    "myCustomization",
    
    // run our function
    function(model) {
        // run the new method we added
        model.prefixMyInitFunction();
    }
);

/**
 * Extend model prototype functions with our own
 */
_.extend(ph.api.models.WebsiteThread.prototype, {
  
  // our init function
  prefixMyInitFunction: function() {
    
    // listen to when the resolved attribute changes
    this.listenTo(this, 'change:resolved', this.prefixShowAlert);
    
  },
  
  // this function runs when the assigned
  prefixShowAlert: function() {
    
      // show alert on page 
      if ( this.get('resolved') ) {
        alert('The comment was resolved');
      } else {
        alert('The comment was unresolved');
      }
      
  }
  
});
```
In the above example we are listening to the models "resolved" attribute and running our own function
when the value changes.

## Extending Views
Extending models is awesome for adding new data and functionality, but extending views will let you
add your own subviews or events to a specific view. A view can be anything from a single button to a 
comment container.

Views work a little differently from models in that you don't need to use a hook or filter to extend them
necessarily. Views can utilize the __super__ method to extend the initialize function, 
instead of using a hook:

```js
ph.api.views.Comment = ph.api.views.Comment.extend({
  initialize: function() {
    this.constructor.__super__.initialize.apply(this, arguments);
    
    console.log(this); // log to check if initialize is called
  }
});
```

### Adding New Functions
You can add new functions to your views using underscore's `extend` function 

```js
ph.api.views.Comment = ph.api.views.Comment.extend({
  initialize: function() {
    this.constructor.__super__.initialize.apply(this, arguments);
    
    this.prefixMyFunction();
  },
  
  prefixMyFunction() {
    console.log(this.model);
  }
});
```

### Adding New UI Event Listeners
You can also use Backbone's "events" object to add your own even listeners scoped to the model
and it's child views. The object property in the view looks like this:

```js
var ParentView = Backbone.View.extend({
   events: {
      'click': 'onclick',
      'click .something': 'somethingClicked'
   },
   
   onClick: function(e) {
      console.log('This view is clicked!');
   },
   
   somethingClicked: function(e) {
      console.log('The .something element in this view was clicked!');
   }
});
```

It follows this notation:

`'{action} {selector (optional)}': '{function}'`

You can extend this events object when you extend the view like this:

```js
// store original events
var originalEvents = ph.api.views.Comment.prototype.events;

// extend our view
ph.api.views.Comment = ph.api.views.Comment.extend({
   events: function(){
      return _.extend({}, originalEvents,{
          'click' : 'prefixOnClick'
      });
   }
});
```
Since you're overwriting the view, you'll want to store the original events before you extend them
Otherwise you'll remove them entirely. 

### Creating New Views
To create a new view, we recommend that you extend ProjectHuddle's `ph.api.View` base view. The base view
provides some additional functionality to ensure you can use subviews and more. 

You can set your views template classnames and tag when you create your view. Use the `className` attribute
in your view to set the classname. Use the `tagName` attribute to set what tag to use.

Here's an example:

```js
var myView = ph.api.View.extend({
  events: {
    'click': 'alert'
  },
  
  alert: function() {
    alert('clicked');
  }
});
```

### Creating A New Underscore Template
You can set a custom underscore template to use for your view. First, 
create the underscore template in php. Here I'll create a new file and call it 
`my-custom-view.tmpl.php`, then add this inside:

#### 1. Create a new underscore template

```js
<script type="text/template" id="tmpl-my-underscore-template">
  <div class="inside-class">
    {{ data.content.rendered}}
  </div>
</script>
```
You must include the template in a `script` tag with `type="text/template"`. The most 
important part is the id, which must use the format `tmpl-{template-name}`. You will
reference the template name later in the view.

#### 2. Output Your Underscore Template
Once you've created this file, and added it to your plugin, theme or child theme, you'll
want to output it on the page for your javascript to use. You can do that with a couple actions.

- `ph_underscore_templates` Outputs underscore templates for the Mockup Interface.
- `ph_website_header` Outputs underscore templates for the Website Interface
- `admin_footer` Outputs underscore templates on the admin pages.

```php
<?php
/**
 * Output backbone templates.
 *
 * @return void
 */
function my_underscore_templates() {
	// if we've placed in the project-huddle directory
    ph_get_template( 'my-custom-view.tmpl.php' );
    
	// or we could load from a custom folder
	ph_get_template( 'custom-views/my-custom-view.tmpl.php', '', '', get_theme_file_uri('custom-folder') );
}
// output on website interface
add_action( 'ph_website_header', 'my_underscore_templates', 20 );

// output on mockup interface
add_action( 'ph_underscore_templates', 'my_underscore_templates', 20 );
```

#### 3. Use the template for your view
To use the template for your view, you can use the `template` attribute and the `wp.template()` 
method. Here's an example:

```js
// A custom view you create
var myView = ph.api.View.extend({
  // the ID of our template is tmpl-my-underscore-template
  // notice how we don't use the tmpl part here
  template: wp.template('my-underscore-template'),
});
```

### Adding Child Views
ProjectHuddle makes use of WordPress' backbone subview manager, which ships with all WordPress installations.
You can add new subviews to a view using the `this.views.add` or `this.views.set` notation. 

- `set` with replace all subviews for a given view. 
- `add` adds additional subviews for a given view.

`this.views.add(selector, views, options)`<br>
`this.views.set(selector, views, options)`

#### Parameters
| Parameter | Description | 
|--------|-------------|
| `selector` | (string) (optional) A jQuery selector. |
| `view`  | (object) The subviews for the main view. |
| `options`  | (object) Options for call.  To insert `views` at a specific index, use `options.at`. If `options.silent` is true, no DOM modifications will be made. |

#### Example
```js
// A custom view you create
var myView = ph.api.View.extend({
  template: wp.template('my-underscore-template'),
  className: 'my-view-classname',
  tagName: 'span',
});

ph.api.views.Comment = ph.api.views.Comment.extend({
  initialize: function() {
    this.constructor.__super__.initialize.apply(this, arguments);
    
    // add a subview
    this.views.add(".ph-item-controls", new myView({
      model: this.model
    }));
  },
});
```
In the above example we are adding our view to the '.ph-item-controls' selector, 
and using the comment model also for the subview. The benefit of this is we can listen
to model events from within our subview to keep track of everything that's going on
in the model.