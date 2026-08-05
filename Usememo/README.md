# MERN Stack Progress 🚀

## Overview
This repository tracks my learning journey and experiments with the MERN stack (MongoDB, Express.js, React.js, Node.js).  
Currently, I am focusing on **React + Vite setup**, exploring **state management**, and experimenting with **large datasets** using `useState` and `useMemo`.

---

## What I Learned
- ✅ How to create and render arrays in React using `.map()`.
- ✅ Difference between `value` and `index` in `.map((value, index) => ...)`.
- ✅ Why objects in React JSX need property access (`magical.index`) instead of rendering the whole object.
- ✅ Using `useMemo` to optimize expensive computations (like `.find()` on large arrays).
- ✅ How state updates (`setCount`, `setnumbers`) trigger re-renders and recomputation.
- ✅ Conditional state changes (e.g., replacing `numbers` when `count == 10`).

---

## Current Demo
- Initial array of **30,000,000 objects** with one "magical" item at index `29,000,000`.
- On button click:
  - Counter increments.
  - When counter reaches `10`, the `numbers` array is replaced with **9,000,000 objects**, and the magical index shifts to `8,000,000`.
- Rendering logic:
  ```jsx
  const magical = useMemo(
    () => numbers.find(item => item.ismagical === true),
    [numbers]
  )
  <div>magical is {magical.index}</div>
