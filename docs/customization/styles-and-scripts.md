# Custom Styles and Scripts
You can add custom stylesheets and scripts to ProjectHuddle. 
However, the plugin automatically dequeues all non-plugin scripts and 
styles on the project front end page. The reason for this is to prevent 
conflicts from plugin stylesheets or scripts that aren't needed on ProjectHuddle pages. 

For instance, it's not necessary to have your SEO plugin and Social Sharing plugin scripts 
on the project page since it's a much more private page. This also helps with privacy 
and loading speed for your ProjectHuddle pages.

## Adding Stylesheets
The way to add your own stylesheet to the ProjectHuddle project page is to first enqueue it, 
then also add the handle to the allowed styles filter.

### Example: Including a style on both mockup and website pages.
```php
<?php
/**
 * Add your custom stylesheet
 * Be sure to change 'my' to your own prefix to prevent conflicts
 */
function my_projecthuddle_styles() {
	// bail if not a projecthuddle post type
	if ( ! ( is_singular('ph-project') || is_singular('ph-website') ) ) {
		return;
	}
	wp_enqueue_style( 'my_ph_style', get_stylesheet_directory_uri() . '/path/to/your/stylesheet.css', '', '1.0' );
}
add_action( 'wp_enqueue_scripts', 'my_projecthuddle_styles' );

/**
 * IMPORTANT: Add your stylesheet handle to allowed styles.
 * If we don't do this it will get removed on ProjectHuddle pages.
 */
function my_allowed_ph_styles( $allowed ) {
	$allowed[] = 'my_ph_style';
	return $allowed;
}
// add to mockups
add_filter( 'ph_allowed_styles', 'my_allowed_ph_styles' );

// add to websites
add_filter( 'ph_allowed_website_styles', 'my_allowed_ph_styles' );
```

## Adding Inline Styles
You can also add inline styles to your project page. This works great if you only
have a few style changes and don't want an extra http request to load an additional 
stylesheet. You can use `ph_style_options_output` and `ph_website_style_options_output`
for mockup and website projects respectively. Here's an example:

```php
<?php
/*
 * Quickly add inline css styles to a both mockup and website projects
 */
function ph_add_inline_styles() { ?>
    .postid-3996 .ph-project-image-inner {
        height: 100%;
    }
    .postid-3996 .ph-project-image-inner img {
        max-height: 100%;
    }";
<?php }

// add to mockups
add_action( 'ph_style_options_output', 'ph_add_inline_styles' );

// add to websites
add_action( 'ph_website_style_options_output', 'ph_add_inline_styles' ); 
```

## Adding Scripts
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