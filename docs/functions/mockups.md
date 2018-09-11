# Mockup Functions

You can use the following to query a users mockup Projects. It's recommended you use these functions directly if possible 
instead of WP_Query or get_posts directly. The reason is these functions abstract Queries so if changes are made to how 
a post is stored, you don't need to update your queries.

## `ph_query_users_mockups` <Badge text="3.0.0+" vertical="middle"/>
Utilizes a WordPress query to get projects that a specific user is a member of. Defaults to the current user.

### Default Usage
``` php
// pass the custom arguments
$args = array(
	'numberposts'   => 10,
	'paged'         => get_query_var( 'page' ) ? get_query_var( 'page' ) : 1,
)
$mockups = ph_query_users_mockups( $args );

// do a standard WordPress loop
if ( $mockups->have_posts() ) {
    while( $mockups->have_posts() ) : the_post();
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

## `ph_get_users_mockups` <Badge text="3.0.0+" vertical="middle"/>
Utilizes a WordPress query to get projects that a specific user is a member of that returns data similar to [get_posts](https://codex.wordpress.org/Template_Tags/get_posts). Defaults to the current user.

### Default Usage
``` php
// pass the custom arguments
$args = array(
	'numberposts'   => 10,
	'paged'         => get_query_var( 'page' ) ? get_query_var( 'page' ) : 1,
)
$mockups = ph_get_users_mockups( $args );

// loop through each post object
if ( ! empty( $mockups ) ) :
    foreach( $mockups as $mockup ) :
        echo sanitize_text_field( $mockup->post_title ); // post title
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

## `ph_get_mockup_approval_status` <Badge text="3.0.0+" vertical="middle"/>

### Default Usage
``` php
// pass the mockup id
$status = ph_get_mockup_approval_status( $mockup_id );

echo 'Total Images: ' . (int) $status['total'];
echo 'Approved Images: ' . (int) $status['approved'];
echo 'Progress: ' . (int) $status['approved'] / (int) $status['total'] * 100 . '%';

if ( isset( $status['by'] ) && isset( $status['on'] ) ) {
    echo 'By: ' . sanitize_text_field( $status['by'] );
    echo 'On: ' . sanitize_text_field( $status['on'] );
}
```

#### Parameters
::: tip id
- `null|int` - The mockup project post id
:::

#### Returns 
::: tip An array showing the approval status
| Key | Value | 
|--------|-------------|
| total | `int` Total number of images in the project |
| approved | `int` Total number of approved images in the project |
| by | `string` Display name of user who approved the last image in the project. Will be empty if not approved. |
| on | `string` Date and time of last approval. Will be empty if not approved. |
:::

## `ph_mockup_is_approved` <Badge text="3.0.0+" vertical="middle"/>
Returns true if all the images in the mockup project approved. Otherwise returns false.

### Default Usage
``` php
// pass the mockup id
$approved = ph_mockup_is_approved( $mockup_id );

if ( $approved ) {
    echo 'This project is approved.';
}
```

#### Parameters
::: tip id
- `null|int` - The mockup project post id
:::

#### Returns
::: tip Returns true if all the images in the mockup project approved.
- `boolean` - True if project is approved.
:::