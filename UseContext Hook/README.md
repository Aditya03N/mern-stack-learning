# React Context + useContext Hook

## 📌 What I Learned
- Context API lets you share state across components without prop drilling.
- `createContext()` creates a context object.
- `Context.Provider` wraps components and provides values.
- `useContext()` allows child components to consume those values directly.

---

## 🛠️ Step-by-Step Usage

### 1. Create Context
```jsx
import { createContext } from "react";

export const CounterContext = createContext();
