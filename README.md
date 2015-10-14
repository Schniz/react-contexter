React contexter
===============

Use [context](https://facebook.github.io/react/docs/context.html) with [Higher Order Components](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750) for better testing and reuse.

The logic is simple: put the `context` you want as `props`.

```js
import contexter from 'react-contexter';

function MyComponent({ fromParent }) {
  return <button onClick={ fromParent }>Click Me!</button>;
};

var ContextedComponent = contexter({
  fromParent: React.PropTypes.func.isRequired,
}, MyComponent);
```

And that's it. `MyComponent` can be tester with your favorite testing tools, just inject the right `prop` and you're ready to go.

Install
-------

just `npm install --save react-contexter` as you normally do.

API
---

### `createContexter(contextTypes)`
creates a wrapper function for creating context containers:

```js
import { createContexter } from 'react-contexter';
var contexter = createContexter({
  fromParent: React.PropTypes.func.isRequired,
});

var ContextedComponentOne = contexter(ComponentOne);
var ContextedComponentTwo = contexter(ComponentTwo);
```

this can help you creating custom utility functions for your applications.

### `contexter(contextTypes, Component)`
creates a contexter that injects `contextTypes` and executes it with `Component`.

```js
import contexter from 'react-contexter';

function MyComponent({ fromParent }) {
  return <button onClick={ fromParent }>Click Me!</button>;
};

var ContextedComponent = contexter({
  fromParent: React.PropTypes.func.isRequired,
}, MyComponent);
```

