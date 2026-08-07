# My First Redux Project 🎉

Today I learned how to set up and use **Redux Toolkit** in a React app.  
This project is a simple counter app where I practiced creating a store, connecting it to React, and using actions with `useSelector` and `useDispatch`.

---

## 🚀 Steps I Learned

1. **Create a Slice**
   - Used `createSlice` to define state and reducers.
   - Example:
     ```js
     import { createSlice } from '@reduxjs/toolkit';

     const initialState = { value: 0 };

     export const counterSlice = createSlice({
       name: 'counter',
       initialState,
       reducers: {
         increment: (state) => { state.value += 1 },
         decrement: (state) => { state.value -= 1 },
         incrementByAmount: (state, action) => { state.value += action.payload },
       },
     });

     export const { increment, decrement, incrementByAmount } = counterSlice.actions;
     export default counterSlice.reducer;
     ```

2. **Configure the Store**
   - Added the slice reducer to the store:
     ```js
     import { configureStore } from '@reduxjs/toolkit';
     import counterReducer from './redux/counter/counterSlice';

     export const store = configureStore({
       reducer: {
         counter: counterReducer,
       },
     });
     ```

3. **Provide the Store**
   - Wrapped the app with `<Provider>` in `main.jsx`:
     ```js
     import { Provider } from 'react-redux';
     import { store } from './redux/store';

     <Provider store={store}>
       <App />
     </Provider>
     ```

4. **Use Redux in Components**
   - Read state with `useSelector`.
   - Update state with `useDispatch`.
   - Example in `App.jsx`:
     ```js
     const count = useSelector((state) => state.counter.value);
     const dispatch = useDispatch();

     <button onClick={() => dispatch(decrement())}>-</button>
     currently count is {count}
     <button onClick={() => dispatch(increment())}>+</button>
     ```

   - Even `Navbar.jsx` can access the same state:
     ```js
     const count = useSelector((state) => state.counter.value);
     ```

---

## 🎯 What This Taught Me
- How to create a Redux store with **Redux Toolkit**
- How to connect the store to React using `<Provider>`
- How to use `useSelector` to read global state
- How to use `useDispatch` to send actions
- How multiple components (App + Navbar) can share the same state without props

---

## ✅ Next Practice
- Add an input field to dispatch `incrementByAmount`
- Try creating another slice (like `todoSlice`)
- Explore async actions with `createAsyncThunk`

---

Made while learning Redux for the first time ✨
