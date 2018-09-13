---
sidebarDepth: 3
---

# PHP Filters

## CRUD Filters
You can use the following filters to filter REST post type data. You can
substitute any of the following post types for `{$post_type}` below:

- `ph-project` Mockup Project
- `ph-website` Website Project
- `project_image` Mockup Image
- `ph-webpage` Website Image
- `ph_comment_location` Mockup Conversation Thread
- `phw_comment_loc` Website Conversation Thread

### `rest_{$post_type}_query`
Filter the {$post_type} REST query. You can add additional
parameters to a query here. For example, you may want to 
update the query based on $request parameters.

| Attribute | Description |
|-----------|-------------|
| `$args` (array)   | Key value array of query var to query value. |
| `$request` (WP_REST_Request)  | The request used. |

### `rest_pre_insert_{$post_type}`
Filter data right before it's inserted in the database. A common use is to force
a specific post attribute, like status or author.

| Attribute | Description |
|-----------|-------------|
| `$prepared_post` (stdClass)     | An object representing a single post prepared for inserting or updating the database. |
| `$request` (WP_REST_Request)    | Request object. |

### `rest_prepare_{$post_type}`
Filters the post data for a response after it's fetched or saved.
You can use this to change what's sent our javascript interface. 
For example, you may want to simplify or change an attribute for REST API
consumption.

| Attribute | Description |
|-----------|-------------|
| `$response` (WP_REST_Response)      | The response object. |
| `$post` (WP_Post)    | The post object |
| `$request` (WP_REST_Request) | 

### `rest_{$post_type}_collection_params`
 Filter collection parameters for the posts controller. You can add additional
 collection parameters. For instance, if you want a user to be able to sort
 by a specific new piece of data.
 
 This filter registers the collection parameter, but does not map the
 collection parameter to an internal WP_Query parameter.
 
 Often times you will use this in conjunction with `rest_{$post_type}_query` 
 filter to check for this parameter and set WP_Query parameters accordingly.
 
| Attribute | Description |
|-----------|-------------|
| `$query_params` (array)      | JSON Schema-formatted collection parameters. |
| `$post_type` (WP_Post_Type)    | Post type object. |

## Attribute Filters
Sometimes you'll want to filter a specific attribute in a model. 
ProjectHuddle has some fine-grained filters specifically for this data.

### Attribute Get Filter Formula
Attribute filters follow this formula:

```php
ph_{$project_type}_rest_get_{$type_name}_attribute
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
Each filter gives you 3 parameters:

| Attribute | Description |
|-----------|-------------|
| `$value` (mixed) | Attribute value being returned |
| `$attr` (string) | ID of the post |
| `$object` (WP_Post or WP_Comment) | Post or Comment object |

### Examples
Here are a few examples of this formula in action

Filter the resolved attribute:
```php
add_action( 'ph_mockup_rest_get_thread_attribute', 'my_custom_fuction', 10, 3);

function my_custom_function( $value, $attr, $object ) {
    // we're only looking for "resolved" changes
    if ( 'resolved' !== $attr ) {
        return;
    }
    
    // if it is resolved, do something!
    if (  $value ) {
        // Thread is resolved, so we can modify it!
    }
    
    return $value;
}
```

