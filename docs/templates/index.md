# Templates

Project Huddle template files contain the markup and template structure for front-end and admin of your project interface. There are two different methods for changing the output of Project Huddle in the admin and front end of your site. 

## Use Built-In Hooks <Badge text="Recommended" vertical="bottom"/>
This method protects against upgrade issues, as the template files can be 
left completely untouched. [Actions and Filters](/actions-and-filters/) can be used to filter output or add additional code to your project or admin page. You can find the many hooks by looking at the ProjectHuddle source code.

[View The Actions and Filters Documentation](/actions-and-filters/)

## Use The Child Template System
This gives you more control over the layout of the template files. Any of the template files can be customized via a theme or child theme. 

1. First, create a folder in your theme or child theme called **project-huddle**. 
2. Copy the individual template files located in the templates folder of the plugin.
3. Make edits to the template files you've placed in your theme or child theme's **project-huddle** folder.

::: tip Note
The folder structure in your theme or child theme must match the folder structure of the plugin. For instance, if you move a template file from the **projects** folder of the plugin, you must place it in a **projects** subfolder in your theme's **project-huddle** folder.
:::