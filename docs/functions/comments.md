# Comment Functions
ProjectHuddle purposely excludes it's comment types from all comment queries. 
This is so they don't show up where it's inappropriate (i.e. Comment Widgets, etc.)

Instead of using get_comments or other WordPress functions to get comments, please use the functions outlined in this document.

## `ph_get_comments` <Badge text="3.0.0+" vertical="middle"/>
Gets only ProjectHuddle comment types. Pass the comment thread ID as the `post_id` argument
to get comments from a specific thread.

### Getting the first comment from a thread example:
```php
ph_get_comments(
    array(
        'post_id'       => $thread->ID,
        'ph_force_show' => true,
        'number'        => 1,
        'order'         => 'ASC',
    )
);
	
if ( ! empty( $first_comment) ) :
    echo wpautop( wp_kses_post( $first_comment[0]->comment_content ) );
endif;
```