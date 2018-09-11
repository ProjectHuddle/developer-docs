# Adding Custom Scripts
The way to add your own script to the ProjectHuddle project page is to first enqueue it, 
then also add the handle to the allowed scripts filter. Here's an example:

```php
<?php
/**
 * Add your custom script
 * Be sure to change 'my' to your own prefix to prevent conflicts
 */
function my_projecthuddle_scripts() {
	// bail if not a projecthuddle post type
    if ( ! ( is_singular('ph-project') || is_singular('ph-website') ) ) {
        return;
    }
    
	// add a new script using wp_enqueue_script
	wp_enqueue_script( 'my_ph_script',  get_stylesheet_directory_uri() . '/path/to/your/script.js', array(
		'jquery',
		'backbone',
		'underscore',
		'wp-backbone',
	), '1.0', false );
}
add_action( 'wp_enqueue_scripts', 'my_projecthuddle_scripts' );

/**
 * Add your script handle to allowed scripts
 */
function my_allowed_ph_scripts( $scripts = array() ) {
	$scripts[] = 'my_ph_script';
	return $scripts;
}
// add to mockups
add_filter( 'ph_allowed_scripts', 'my_allowed_ph_scripts' ); 

// add to websites
add_filter( 'ph_allowed_website_scripts', 'my_allowed_ph_scripts' ); 
```