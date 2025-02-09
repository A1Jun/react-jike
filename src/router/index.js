import { createBrowserRouter } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Login from '@/pages/Login'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  }
])

export default router
