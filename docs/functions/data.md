# Updating Post Data

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

### Types Of Data
Each post type has it's own custom data. Check out each post type on the [data structures](/data-structures/) 
section of the documentation.

[Data Structures](/data-structures/) 