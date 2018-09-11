# ProjectHuddle Data Structures

ProjectHuddle makes use of [Custom Post Types](https://codex.wordpress.org/Post_Types) and [Custom Fields](https://codex.wordpress.org/Custom_Fields) to store it's data, which should make it more familiar to developers familiar with ProjectHuddle.

::: tip Note
It's recommended you use the [built-in functions](/functions/) instead of querying post types in case the post type definitions or custom fields change.
:::

## Post relationships
ProjectHuddle makes use of post relationships through a `parent_id` custom field. 
Much like WordPress uses a "parent" item to identify post relationships, the `parent_id` identifies
the specific conversation thread, project item or project parent. 

Here's how these post type relationships are structured:

```$xslt
Project (Mockup or Website Projects)
   └─ Items (Mockup Images or Website Pages)
      └─ Threads (Conversation Threads)
         └─ Comments (Comments or Resolve Actions)
```

## Getting Parent Posts
ProjectHuddle makes use of the [ph_get_parents_ids](/functions/relationships.html#ph-get-post-parents-ids) function to get all the parent ids from
a specific post. Here's an example of how you can get the mockup image and mockup project from a conversation thread:

``` php
// get parents from a thread post object
$parents = ph_get_parents_ids( $thread->ID );

// get the project id
$project_id = $parents['project'];

// get the image id
$image_id = $parents['item'];
```
[ph_get_parents_ids](/functions/relationships.html#ph-get-post-parents-ids)

## Getting Child Posts
ProjectHuddle makes use of the custom functions to get child posts. We recommend you use these functions 
to maintain compatibility in case of a change in data structure. The [ph_query_project_subcollection](/functions/relationships.html#ph-query-project-subcollection) 
function will let you get a child collection from a specific post. Here's an example of how you can get 
the mockup images collection from a mockup project:

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
[ph_query_project_subcollection](/functions/relationships.html#ph-query-project-subcollection) 

## Built-In Functions
ProjectHuddle has many built-in functions to get these relationships. Be sure to check out the relationship functions section for more information on getting post relationships.

[Relationship Functions](/functions/relationships.html)