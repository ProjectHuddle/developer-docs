# Approval Functions
ProjectHuddle has some specific functions for getting approval information from images and projects. Many of these functions use built-in transients to store information to make sure this information is cached to keep your site nice and speedy!

## `ph_get_mockup_approval_status` <Badge text="3.0.0+" vertical="middle"/>
Get the current approval status for the mockup. This function returns an array of data, including the total number of images, the total number of approved images, who took the last approval action and when. 

### Getting the approval status example
```php
// pass the mockup id
$approval_status = ph_get_mockup_approval_status( $id ); 

// print
print_r($approval_status);

// this prints an array
array(
    'total'    => 12,
    'approved' => 8,
    'by'       => 'Andre Gagnon',
    'on'       => '6-30-2004',
)     
```

This function is great for quick, shallow information about a project (progress for instance). However, sometimes you'll want more! For instance, getting a list of approved images. 

## `ph_approval_term_taxonomy` <Badge text="3.0.0+" vertical="middle"/>
Gets the taxonomy of the approval term. This is a taxonomy name that we use to store approvals within a post. We've set this to `ph_approval`, but could be modified if needed.

## `ph_approval_completed_status` <Badge text="3.0.0+" vertical="middle"/>
Gets the completed taxonomy slug for the post. This defaults to "approved" but can be filtered to something else. 

## Getting a list of approved images

```php
ph_query_project_subcollection(
    array(
        'id'        => 1971, // mockup id here
        'tax_query' => array(
            array(
                'taxonomy' => ph_approval_term_taxonomy(), // approval taxonomy
                'field'    => 'slug', // query by slug
                'terms'    => ph_approval_completed_status(), // completed status
            ),
        ),
    )
);

if ( $approved_images->have_posts() ) :
    while ( $the_query->have_posts() ) :
        $the_query->the_post();

        the_title(); // echo the title
    endwhile;

    wp_reset_postdata();
endif;
```