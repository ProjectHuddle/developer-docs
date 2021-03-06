# Accessing Data
ProjectHuddle makes use of [Custom Fields](https://codex.wordpress.org/Custom_Fields) to store it's custom data, 
which should make it more familiar to developers familiar with ProjectHuddle. You can get custom fields in a couple different ways.

## `ph_get_data` <Badge text="3.0.6+" vertical="middle"/>
The `ph_get_data` function is a lightweight wrapper for [get_post_meta](https://developer.wordpress.org/reference/functions/get_post_meta/). 
It's a necessary abstraction for get_post_meta in case keys change or are updated. It's recommended you use this function
to ensure future compatibility.

Here's an example of how you can use it like this to get access settings for a project:

```php
$project_access = ph_get_data( $mockup_id, 'project_access', true );
echo $project_access; 
```

## `ph_update_data` <Badge text="3.0.6+" vertical="middle"/>
The `ph_update_data` function is a lightweight wrapper for [update_post_meta](https://developer.wordpress.org/reference/functions/update_post_meta/). 
It's a necessary abstraction for update_post_meta in case keys change or are updated. It's recommended you use this function
to ensure future compatibility.

```php
// update project access programatically to 'login'
$updated = ph_update_data( $mockup_id, 'project_access', 'login' );
```

## Magic Methods
If you already have the post object, you can get the post meta by accessing it through a magic method.
Here's the same example of how to get project access from a specific post using the magic method:

```php
$project_access = $mockup_post_object->project_access;
echo $project_access; 
```

## Types Of Data
Each post type has it's own custom data. Check out each post type on the sidebar on the left for more
information on what types of data are stored in each post.