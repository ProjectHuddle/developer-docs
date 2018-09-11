# Mockup Projects
A Mockup Project post stores all information from a specific project include access options,
members, approval option, zoom options, sharing and more. 

To access this data, check out the [Accessing Data](/data-structures/accessing-data.html) 
section of the documentation.

## project_access
`(array)` Access options for the project. 

| Possible Values | Description |
|--------|-------------|
| login  | Visitor must login to access project |
| link   | Visitor must have the project access link to access the project |
| password |  Visitor must enter a password to access the project |
| public | Anyone can access the project | 

## retina
`(boolean)` Access options for the project. 

| Possible Values | Description |
|--------|-------------|
| true  | The images in the project will scale down to 50%. |
| false   | The images in the project will display at 100%. |

## sharing
`(boolean)` Sharing options for the project. 

| Possible Values | Description |
|--------|-------------|
| true  | The sharing interface is turned on for the project. |
| false   | The sharing interface is turned off for the project. |

## zoom
`(boolean)` Zoom options for the project. 

| Possible Values | Description |
|--------|-------------|
| true  | The zoom interface is turned on for the project. |
| false   | The zoom interface is turned off for the project. |

## project_comments
`(boolean)` Are non-users allowed to make comments?

| Possible Values | Description |
|--------|-------------|
| true  | Non-users can make comments. |
| false   | Non-users cannot make comments. |

## project_approval
`(boolean)` Are project image approvals allowed?

| Possible Values | Description |
|--------|-------------|
| true  | Users can approve project images. |
| false   | Users cannot approve project images |

## project_unapproval
`(boolean)` Are project image unapprovals allowed?

| Possible Values | Description |
|--------|-------------|
| true  | Users can unapprove project images. |
| false   | Users cannot unapprove project images |

## project_members
`(array)` A list of user IDs that have access to the project.

| Possible Values | Description |
|--------|-------------|
| array|empty  | A list of user ids. |

## access_token
`(string)` The access token for the project.

| Possible Values | Description |
|--------|-------------|
| string  | The access token. |

## Getting The Approval Status
Instead of storing approval in a custom field, you can get approval by using the [ph_post_is_approved]() function