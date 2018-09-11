---
sidebarDepth: 3
---

# Website Projects
A Website Project post stores all information from a specific project include access options,
members, approval option, zoom options, sharing and more. 

## Post Type
`ph-website`

## Custom Post Data
To access this data, check out the [Accessing Data](/data-structures/accessing-data.html) 
section of the documentation.

### project_access
`(array)` Access options for the project. 

| Possible Values | Description |
|--------|-------------|
| login  | Visitor must login to access project |
| link   | Visitor must have the project access link to access the project |
| password |  Visitor must enter a password to access the project |
| public | Anyone can access the project | 

### website_url
`(string)` The url for the website

### toolbar_location
`(string)` The location of the toolbar on the project interface.

| Possible Values | Description |
|--------|-------------|
| bottom-left  | Display the toolbar on the bottom left. |
| bottom-right   | Display the toolbar on the bottom right. |

### project_members
`(array)` A list of user IDs that have access to the project.

### access_token
`(string)` The access token for the project.

## Thread Resolve Status
The thread resolve status is getting the current number of conversation threads on a website project that are resolved. Instead of Conversation Thread resolve status in a custom field, you can get the data by using the [ph_get_website_resolve_status]() function