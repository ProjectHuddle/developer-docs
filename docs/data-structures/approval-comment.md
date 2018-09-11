# Approval Comment
Comments where a user has resolved or approved something. This content is dynamically generated
to use a sentence with the user's name.

## Comment Type
`ph_approval`

### Getting the last approval comment from a thread example:
```php
ph_get_comments(
    array(
        'post_id'       => $thread->ID,
        'ph_force_show' => true,
        'type'          => 'ph_approval',
        'number'        => 1,
        'order'         => 'DESC',
    )
);
	
if ( ! empty( $first_comment) ) :
    echo wpautop( wp_kses_post( $first_comment[0]->comment_content ) );
endif;
```