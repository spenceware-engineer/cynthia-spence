import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { createTheme } from '@mui/material'
import { routes } from './shared/routes'
import themeObject from './shared/themeObject'

const theme = createTheme(themeObject)
const router = createBrowserRouter(routes)

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
