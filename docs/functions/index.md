# Functions

ProjectHuddle provides a multitude of functions to better help you query and display mockup and website projects. Please use these functions instead of default WordPress queries to ensure future compatibility with code changes.

## Usage
You can use the following to query a users projects. It's recommended you use these functions directly if possible 
instead of WP_Query or get_posts directly. The reason is these functions abstract Queries so if changes are made to how 
a post is stored, you don't need to update your queries.

## Return Values
ProjectHuddle stores custom post information in [Custom Fields](https://codex.wordpress.org/Custom_Fields) (i.e. Assignee, resolve/unresolve status, etc.). Please check out the data structures section to see how data is stored for each type of post type, and how to get the data.

[Data Structures](data-structures)
