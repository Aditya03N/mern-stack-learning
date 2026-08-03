# React Router Learning

This folder contains my practice with **React Router v6**.

## 📚 Key Learnings
- Installed `react-router-dom@latest` to enable routing.
- Used `createBrowserRouter` + `RouterProvider` for route management.
- Defined routes:
  - `/` → Home
  - `/login` → Login
  - `/about` → About
  - `*` → NotFound (fallback route).
- Learned how to use `NavLink` for navigation:
  - `className={({ isActive }) => isActive ? "active-link" : "nav-link"}`
  - Active link styling for better UX.

## ▶️ Run
```bash
cd client
npm install
npm start
