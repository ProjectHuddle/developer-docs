---
sidebarDepth: 3
---

# PHP Actions
You can use the following actions to run callbacks based on ProjectHuddle
actions. 

## CUD Actions
Create, Update and Destroy actions follow a formula with the aim to standardize
and simplify the actions in the plugin. This way you don't necessarily need to memorize
a specific action - if you know the formula you can extrapolate the necessary action.

### CUD Actions Formula
Actions follow this formula:

```php
ph_{$project_type}_{$action}_{$type_name}
```

Substitute any of the following for `{$project_type}` below:
- `mockup` Mockup Project
- `website` Website Project

Substitute any of the following for `{$type_name}` below:
- `project` (Mockup or Website Project)
- `image` (Mockup Image)
- `page` (Website Page)
- `thread` (Mockup or Website Thread)
- `comment` (Individual Comment)
- `approval` (Individual Approval Comment)

Substitute any of the following for `{$action}` below:
- `publish` When a post is published
- `edit` When a post is edited
- `delete` When a post is deleted.

### Parameters
Each action gives you two parameters:

| Attribute | Description |
|-----------|-------------|
| $id       | ID of the post |
| $object     |  Post or Comment object |


### Examples
Here are a few examples of how this formula works:

Trigger an action when a **new comment** is created on a **mockup project**:
```php
add_action( 'ph_mockup_publish_comment', 'my_custom_fuction', 10, 2 );

function my_custom_function( $id, $object ) {
    // make API call, run additional functions, etc
    // I have the comment $id and WP_Comment $object to use!
}
```

Trigger an action when a **new conversation thread** is created on a **website project**:
```php
add_action( 'ph_website_publish_thread', 'my_custom_fuction', 10, 2 );

function my_custom_function( $id, $object ) {
    // make API call, run additional functions, etc
    // I have the post $id and WP_Post $object to use!
}
```

## Attribute Update Actions
Sometimes you'll only want to run actions when a specific attribute is updated. ProjectHuddle
has some fine-grained actions that only run when this happens. 

### Attribute Update Actions Formula
Action is run before an attribute is updated:
```php
ph_{$project_type}_rest_update_{$type_name}_attribute
```
Action is run after an attribute is updated:
```php
ph_{$project_type}_pre_rest_update_{$type_name}_attribute
```

Substitute any of the following for `{$project_type}` below:
- `mockup` Mockup Project
- `website` Website Project

Substitute any of the following for `{$type_name}` below:
- `project` (Mockup or Website Project)
- `image` (Mockup Image)
- `page` (Website Page)
- `thread` (Mockup or Website Thread)
- `comment` (Individual Comment)
- `approval` (Individual Approval Comment)

### Parameters
Each action gives you three parameters:

| Attribute | Description |
|-----------|-------------|
| `$attr` (string)  | The attribute name. |
| `$value` (mixed) |  The value being saved. |
| `$object` (WP_Post or WP_Comment) | The object the attribute is saved to |

### Examples
Here are a few examples of how this formula works:

Trigger an action when a **mockup thread** is resolved:
```php
add_action( 'ph_mockup_rest_update_thread_attribute', 'my_custom_fuction', 10, 3);

function my_custom_function( $attr, $value, $object ) {
    // we're only looking for "resolved" changes
    if ( 'resolved' !== $attr ) {
        return;
    }
    
    // if it is resolved, do something!
    if (  $value ) {
        // Thread is resolved!
        // Make API call, run additional functions, etc
        // I have the WP_Comment or WP_Post $object to use!
    }
}
```

Trigger an action when a is created on a **website project**:
```php
add_action( 'ph_website_publish_thread', 'my_custom_fuction');

function my_custom_function( $id, $object ) {
    // make API call, run additional functions, etc
    // I have the post $id and WP_Post $object to use!
}
```