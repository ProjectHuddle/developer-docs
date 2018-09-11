# Underscore Templates
ProjectHuddle uses Backbone and Underscore to power it's javascript functionality. However, you don't 
necessarily need to make javascript changes to alter the UI of the ProjectHuddle interface. The underscore templates
used by ProjectHuddle work in the [Child Template System](/templates/#use-the-child-template-system), so you can copy these
into your Theme or Child theme's directly to modify the templates

Underscore template files are identified using this naming convention:

```
{template-name}.tmpl.php
```

## Underscore Data
To access data javascript model data from a template file, you can use the `data` object. Model data includes
data associated with a specific model. For example a conversation thread will have resolved or assignment data.

The data object only contains data that's in the current view's model. For example, you can't access a project id
from a comment threads data object.

To output underscore data on the page, you can use `{{` and `}}`. By default `{{` and `}}` will provide an 
escape functionality, so no malicious code can be injected. However, sometimes you need to output raw data.
You can do so with triple brackets `{{{` and `}}}`. 
                                                                  
For example:

```js
<script type="text/template">
  The browser used is {{ data.browser }}.
  This is raw {{{ data.browser }}}. 
</script>
```

