# Relationship Functions
ProjectHuddle makes use of post relationships through parent relationships. A `parent_id` custom field is used to track
the parent relationship of a post much like WordPress uses a "parent" item to identify post relationships. The `parent_id` identifies
the specific conversation thread, project item or project parent by it's ID. 

ProjectHuddle provides some convenience functions to help make these relationships
easier to query, and provides an abstraction layer to ensure code compatibility in case
there are changes to data structures.

::: tip Note
It's recommended you use the built-in functions below instead of WordPress' WP_Query or get_posts in case the post type definitions or custom fields change.
:::

### Structure
Here's how these post type relationships are structured:

```$xslt
Project (Mockup or Website Projects)
   └─ Items (Mockup Images or Website Pages)
      └─ Threads (Conversation Threads)
         └─ Comments (Comments or Resolve Actions)
```

## `ph_get_post_parents_ids` <Badge text="3.0.0+" vertical="middle"/>
Gets the post parent relationships for a given post.

### Default Usage
``` php
// get parents from a thread post object
$parents = ph_get_parents_ids( $comment->comment_ID, 'comment'  );

// get the project id
$project_id = $parents['project'];

// get the image id
$image_id = $parents['item'];

// get the conversation thread id
$image_id = $parents['thread'];
```

### Parameters
Accepts two parameters

::: tip id (null|int)
- The post ID. By default it gets the current global $post ID.
:::
::: tip type (string)
- (optional) The type of post we're querying. Defaults to post. Accepted 
values are `post` or `comment`.
:::

## `ph_query_project_subcollection` <Badge text="3.0.6+" vertical="middle"/>
This function performs the opposite function of `ph_get_parents_ids` as it will
get a posts subcollection. For example, if you have a mockup project and wish to get
the project's images collection, you would use this function.

This function is a lightweight wrapper around WP_Query and provides an abstraction
layer to ensure compatibility in case of data structure changes. Because of this, it 
accepts any parameters from the default WordPress get_posts function in addition to the 
'id' parameter of the post who's collection you want to fetch.

### Default Usage
``` php
// get parents from a thread post object
$images = ph_query_project_subcollection(array(
    'id' => $mockup_id
));

// do a standard WordPress loop
if ( $images->have_posts() ) {
    while( $images->have_posts() ) : the_post();
        the_title();
    endwhile;
    wp_reset_postdata();
}
```

### Parameters
Accepts 1 parameter. The array accepts any parameters from the default WordPress [WP_Query](https://codex.wordpress.org/Class_Reference/WP_Query)

::: tip $args (array)
- Post query args. `$args['id']` is the post ID of the project, image, website page or thread. By default it gets the current global $post ID.
:::