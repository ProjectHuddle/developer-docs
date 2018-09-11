# Website Functions

You can use the following to query a users website Projects. It's recommended you use these functions directly if possible 
instead of WP_Query or get_posts directly. The reason is these functions abstract Queries so if changes are made to how 
a post is stored, you don't need to update your queries.

## `ph_query_users_websites` <Badge text="3.0.0+" vertical="middle"/>
Utilizes a WordPress query to get projects that a specific user is a member of. Defaults to the current user.

### Default Usage
``` php
// pass the custom arguments
$args = array(
	'numberposts'   => 10,
	'paged'         => get_query_var( 'page' ) ? get_query_var( 'page' ) : 1,
)
$websites = ph_query_users_websites( $args );

// do a standard WordPress loop
if ( $websites->have_posts() ) {
    while( $websites->have_posts() ) : the_post();
        the_title();
    endwhile;
    wp_reset_postdata();
}
```
#### Parameters
Accepts any parameters from the default WordPress [get_posts](https://codex.wordpress.org/Template_Tags/get_posts) function, with these additional parameters.

::: tip user_id (array)
- `null|int` - The WordPress user's id. By default it gets current user's projects.
:::

#### Returns 
[WP_Query Object](https://codex.wordpress.org/Class_Reference/WP_Query)

## `ph_get_users_websites` <Badge text="3.0.0+" vertical="middle"/>
Utilizes a WordPress query to get projects that a specific user is a member of that returns data similar to [get_posts](https://codex.wordpress.org/Template_Tags/get_posts). Defaults to the current user.

### Default Usage
``` php
// pass the custom arguments
$args = array(
	'numberposts'   => 10,
	'paged'         => get_query_var( 'page' ) ? get_query_var( 'page' ) : 1,
)
$websites = ph_get_users_websites( $args );

// loop through each post object
if ( ! empty( $websites ) ) :
    foreach( $websites as $website ) :
        echo sanitize_text_field( $website->post_title ); // post title
    endforeach;
    wp_reset_postdata();
endif;
```

### Parameters
Accepts any parameters from the default WordPress [get_posts](https://codex.wordpress.org/Template_Tags/get_posts) function, with these additional parameters.

::: tip user_id (array)
- `null|int` - The WordPress user's id. By default it gets current user's projects.
:::

#### Returns 
An array of [WP_Post objects](https://codex.wordpress.org/Class_Reference/WP_Post)