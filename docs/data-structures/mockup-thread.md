---
sidebarDepth: 3
---

# Mockup Threads
A mockup thread post stores all the comments from a specific conversation point in a mockup image including
position, resolve status and more. 

## Post Type
`ph_comment_location`

## Custom Post Data
To access this data, check out the [Accessing Data](/data-structures/accessing-data.html) 
section of the documentation.

### parent_id
`(int)` The parent ID for the mockup image.

### relativeX
`(float)` The relative horizontal position of the mockup thread point.

### relativeY
`(float)` The relative vertical position of the mockup thread point.

### resolved
`(boolean)` Is this mockup thread resolved?