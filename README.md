# React Learning Log



Today I learned about the `useEffect` hook in React.

### What is useEffect?

`useEffect` is a React Hook that allows us to perform side effects in functional components. It runs after the component renders.

### Common Uses

* Fetching data from an API
* Updating the document title
* Setting up timers
* Handling subscriptions and event listeners

### Basic Syntax

```jsx
useEffect(() => {
  // Side effect code here
}, []);
```

### What I Learned

* `useEffect` runs after rendering.
* The dependency array controls when the effect runs.
* An empty dependency array (`[]`) makes the effect run only once after the initial render.
* Dependencies inside the array cause the effect to run whenever those values change.

### Example

```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h1>Hello React</h1>;
}
```

### Today's Progress

✅ Learned the basics of `useEffect`
✅ Understood dependency arrays
✅ Created a simple example using `useEffect`

---

Learning React one step at a time 🚀
