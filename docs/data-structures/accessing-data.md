# Accessing Data
ProjectHuddle makes use of [Custom Fields](https://codex.wordpress.org/Custom_Fields) to store it's custom data, 
which should make it more familiar to developers familiar with ProjectHuddle. You can get custom fields in a couple different ways.

## `get_post_meta`
The [get_post_meta](https://developer.wordpress.org/reference/functions/get_post_meta/) gets the post meta for a given post type. 
Here's an example of how you can use it like this to get access settings for a project:

```php
$project_access = get_post_meta( $mockup_id, 'project_access', true );
echo $project_access; 
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