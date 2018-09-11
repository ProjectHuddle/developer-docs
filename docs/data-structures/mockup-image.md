---
sidebarDepth: 3
---

# Mockup Images
A Mockup Images post stores all information from a specific image in a mockup project including
approval, display options and more.

## Post Type
`project-image`

## Custom Post Data
To access this data, check out the [Accessing Data](/data-structures/accessing-data.html) 
section of the documentation.

### parent_id
`(int)` The parent ID for the mockup image.

### options
`(array)` Image display options.

| Key | Possible Value | Description |
|--------|-------------|-------------|
| alignment  | `'center'`, `'left'` or `'right'`| The alignment option for the image. |
| size   | `'normal'` or `'scale'` | The behavior option for when a window is resized. |
| background_color |  A hex value string. | The background color for the image. |
| background_image | A url string. | The url to the background image behind the image. |
| background_image_position | `'center'`, `'repeat'`, `'repeat-x'`, or `'cover'` | Image position of the background_image |

### Approval Status
Instead of storing approval in a custom field, you can get approval by using the [ph_post_is_approved]() function