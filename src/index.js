import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Resume from './components/Resume'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/resume',
    element: <Resume />
  },
  {
    path: '/links',
    element: <h1>LINKS</h1>
  },
  {
    path: '/contact',
    element: <h1>CONTACT</h1>
  },
  {
    path: '/about',
    element: <h1>ABOUT</h1>
  }
])

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
