# Vue Components

ProjectHuddle has started making a transition to vue.js for all javascript functionality. This gives a more modern, easier to extend method of interacting with ProjectHuddle.

## Extending or Modifying ProjectHuddle Vue Components

To extend or modify Vue components, you'll see a few helper functions included in the `ph.components` object. This lets you extend or modify the ProjectHuddle UI with the API outlined here. This allows anyone to create a custom plugin that can easily change the look of the UI and/or extend its functionality without having to edit core ProjectHuddle code.

### List Components
To list all components to extend on the page, you can import the componentsList function:

```js
const { componentsList } = ph.components;
console.log(componentsList);
```
This will show all the names of the components you can modify on the page:

```js
threadTemplate: {name: "threadTemplate", rawComponent: {…}, hocs: Array(0)}
thread.resolve: {name: "thread.resolve", rawComponent: {…}, hocs: Array(0)}
shared.button: {name: "shared.button", rawComponent: {…}, hocs: Array(0)}
shared.dropdown: {name: "shared.dropdown", rawComponent: {…}, hocs: Array(0)}
thread.detailsDrop: {name: "thread.detailsDrop", rawComponent: {…}, hocs: Array(0)}
shared.userAvatar: {name: "shared.userAvatar", rawComponent: {…}, hocs: Array(0)}
shared.tooltip: {name: "shared.tooltip", rawComponent: {…}, hocs: Array(0)}
shared.assign: {name: "shared.assign", rawComponent: {…}, hocs: Array(0)}
shared.editor: {name: "shared.editor", rawComponent: {…}, hocs: Array(0)}
shared.comment: {name: "shared.comment", rawComponent: {…}, hocs: Array(0)}
shared.commentMinimal: {name: "shared.commentMinimal", rawComponent: {…}, hocs: Array(0)}
shared.members: {name: "shared.members", rawComponent: {…}, hocs: Array(0)}
thread.membersSelect: {name: "thread.membersSelect", rawComponent: {…}, hocs: Array(0)}
shared.commentsList: {name: "shared.commentsList", rawComponent: {…}, hocs: Array(0)}
thread.commentsList: {name: "thread.commentsList", rawComponent: {…}, hocs: Array(0)}
thread.body: {name: "thread.body", rawComponent: {…}, hocs: Array(0)}
```
You can look at the source files included with ProjectHuddle - the component names match up with component vue files. I.E `thread.body` is located in the `app/components/websites/threads/parts/Body.vue`.

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

### this.insertIntoSlot

You can use the global insertIntoSlot method in the mounted hooks of your extended component to add your own html or vue components to **slots** in the template. We've enriched the components we use with a bunch of empty slots so you can add your components to different parts. Think of them sort of like WordPress' `do_action` hooks, but in javascript.

```js
// create a component
let Component = Vue.component("test", {
  props: {
    id: Number
  },
  data: function() {
    return {
      count: 0
    };
  },
  template:
    '<button class="el-button el-button--primary" @click="count++">You clicked me {{ count }} times.</button>'
});

// extend the timeline component and add our component into the 'slot-name' slot!
extendComponent("LargeTimeline", {
  mounted() {
    this.insertIntoSlot("slot-name", Component, {
      props: {
        id: this.thread.id
      }
    });
  }
});
```

insertIntoSlot requires a slot name, a component, and an options object. The options object is identical to `createElements` options, which are documented here:

[createElement Arguments](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth)

### this.insertComponent

You can use the global insertComponent method in the mounted hooks of your extended component to append your own html or vue components to **refs** in the template. 

```js
// create a component
let Component = Vue.component("test", {
  props: {
    id: Number
  },
  data: function() {
    return {
      count: 0
    };
  },
  template:
    '<button class="el-button el-button--primary" @click="count++">You clicked me {{ count }} times.</button>'
});

// extend the timeline component and append our component into the 'content' ref element!
extendComponent("LargeTimeline", {
  mounted() {
    this.insertComponent({
      ref: "content",
      component: Component,
      data: {
        propsData: {
          id: this.comment.id
        }
      },
      key: `attachments-${this.comment.id}`
    });
  }
});

```

You'll notice in the `this.insertComponent` will require a `key` attribute. This is much like how v-for requires a unique key so our component extendor can keep track of the node's identity. This method requires a single options object with the a `ref`, `component`, `data`, and `key` attributes. The `data` attribute takes the same options as a Vue instance, since we're essentially creating a new Vue instance behind the scenes:

[Creating a new Vue Instance](https://vuejs.org/v2/guide/instance.html)
