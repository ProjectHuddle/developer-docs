# Comment Functions
ProjectHuddle purposely excludes it's comment types from all comment queries. 
This is so they don't show up where it's inappropriate (i.e. Comment Widgets, etc.)

Instead of using get_comments or other WordPress functions to get comments, please use the functions outlined in this document.

## `ph_get_comments` <Badge text="3.0.0+" vertical="middle"/>
Gets only ProjectHuddle comment types. Pass the comment thread ID as the `post_id` argument
to get comments from a specific thread.