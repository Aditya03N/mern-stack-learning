# Learning useCallback in React

## 📌 What is useCallback?
`useCallback` is a React Hook that returns a **memoized version of a callback function**.  
It helps prevent unnecessary re-renders by ensuring the same function reference is reused unless its dependencies change.

---

## 🔧 Syntax
```jsx
const memoizedCallback = useCallback(
  () => {
    // your function logic
  },
  [dependency1, dependency2]
)
