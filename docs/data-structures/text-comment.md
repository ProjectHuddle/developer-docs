# Text Comments
Comments where a user has typed something into the conversation. This is the most common form of a ProjectHuddle comment.

## Comment Type
`ph_comment`

### Getting the first comment from a thread example:
```php
ph_get_comments(
    array(
        'post_id'       => $thread->ID,
        'ph_force_show' => true,
        'type'          => 'ph_comment',
        'number'        => 1,
        'order'         => 'ASC',
    )
);
	
if ( ! empty( $first_comment) ) :
    echo wpautop( wp_kses_post( $first_comment[0]->comment_content ) );
endif;
```