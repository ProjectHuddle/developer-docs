# Vue Components

ProjectHuddle has started making a transition to vue.js for all javascript functionality. This gives a more modern, easier to extend method of interacting with ProjectHuddle.

## Extending or Modifying ProjectHuddle Vue Components

To extend or modify Vue components, you'll see a few helper functions included in the `ph.components` object. This lets you extend or modify the ProjectHuddle UI with the API outlined here. This allows anyone to create a custom plugin that can easily change the look of the UI and/or extend its functionality without having to edit core ProjectHuddle code.

### extendComponent

To modify existing components, you can use the extendComponent method. You can access this function like this:

```js
const { extendComponent } = ph.components;
```

Then, modify an existing component by name, and add your own props, data, computed properties, methods, watchers, etc.:

```js
extendComponent("LargeTimeline", {
  mounted() {
    console.log("I will be called too now!");
  }
});
```

More examples:

```js
extendComponent("LargeTimeline", {
  props: {
    newProp: String
  },
  data() {
    return {
      newData: 1
    };
  },
  mounted() {
    console.log("I will be called too now!");
  },
  methods: {
    myCustomMethod() {
      console.log(this.newData);
    }
  }
});
```

## Altering Templates

Although you can completely replace a template using the extendComponent method, it's not recommended due to possible breaking changes. Instead, we've placed named slots throughout our templates so you can add your own components without overwriting anything.

### addToSlot

You can use the addToSlot method to add your own html or vue components to slots in the template:

```js
// import function
const { addToSlot } = ph.components;

// create a component
let component = Vue.component("test", {
  data: function() {
    return {
      count: 0
    };
  },
  template:
    '<button class="el-button el-button--primary" @click="count++">You clicked me {{ count }} times.</button>'
});

// add to a slot
addToSlot("LargeTimeline", "beforeControls", component);
```
