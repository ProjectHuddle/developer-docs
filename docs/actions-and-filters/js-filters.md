---
sidebarDepth: 3
---

# Javascript Filters
`ph.api.hooks` is an object that contains all the actions and filters used in the javascript
on the page. For developers familiar with WordPress, they work very similar to WordPress'
PHP hooks, and for developers familiar with Gutenberg, they work almost identically to
Gutenberg's hooks.

You can add a new action using the following:

```js
ph.api.hooks.addFilter( tag, namespace, callback, priority )
```

Here are some specific filters you can access to change/update when data is set/saved.

## `ph_new_comment_data`
When javascript models (Threads, Comments, Pages, etc) are initialized, they broadcast
a model initialization action. Model initializations help you hook into a specific model
on a page and run or add your own functions.

### Model Initialize Formula
Actions follow this formula:

```js
ph.api.{project_type}.{model_name}.initialize
```

Substitute any of the following for `{$project_type}` below:
- `mockup` Mockup Project
- `website` Website Project

Substitute any of the following for `{$type_name}` below:
- `Mockup` (Mockup Project)
- `Website` (Website Project)
- `WebsitePage` (Website Page)
- `MockupImage` (Mockup Image)
- `MockupThread` (Mockup Conversation Thread)
- `WebsiteThread` (Website Conversation Thread)
- `comment` (Individual Comment)

### Parameters
Each action passes the model as a parameter:

| Attribute | Description |
|-----------|-------------|
| model       | Current model. |

### Examples
Here are a few examples of how this formula works:

```js
/**
 * Hook into website thread initialize
 */
ph.api.hooks.addAction(
    // this is the comment action
    "ph.api.models.Comment.initialize",
    
    // this is your custom namespace
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