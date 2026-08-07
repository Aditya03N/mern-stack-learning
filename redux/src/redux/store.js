import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"   // ✅ default import

export const store = configureStore({
  reducer: {
    counter: counterReducer,   // ✅ key name "counter"
  },
})

// store le liya kiraye pe