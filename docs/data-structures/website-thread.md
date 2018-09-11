---
sidebarDepth: 3
---

# Website Threads
A website thread post stores all the comments from a specific conversation point in a website page including
position, browser information, resolution, resolve status and more. 

## Post Type
`phw_comment_loc`

## Custom Post Data
To access this data, check out the [Accessing Data](/data-structures/accessing-data.html) 
section of the documentation.

### parent_id
`(int)` The parent ID for the website image.

### path
`(string)` The CSS path to the original clicked element.

### path
`(string)` The relative horizontal position on the clicked element.

### relativeY
`(float)` The relative vertical position on the clicked element.

### html
`(string)` The inner HTML of the clicked element.

### resX
`(float)` The relative horizontal resolution of the users browser when they clicked.

### resY
`(float)` The relative vertical resolution of the users browser when they clicked.

### browser
`(string)` The browser that was used then the user clicked.

### browserVersion
`(string)` The browser version that was used the the user clicked.

### browserOS
`(string)` The user operating system when the the user clicked.

### assigned
`(int)` ID of the user who is assigned.

### resolved
`(boolean)` Is this website thread resolved?