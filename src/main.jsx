import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import SignUpPage from './components/signup/signup.jsx'
import LoginPage from './components/login/login.jsx'
import Home from './components/Home/home.jsx'
import Dashboard from './components/dashboard/dashboard.jsx'

const router = createBrowserRouter([
  {
   path: '/',
   element: <App/>,
   children : [
     {
       path:"",
       element: <Home/>
     },
     {
      path:"signup",
      element: <SignUpPage/>
     },
     {
      path:"login",
      element: <LoginPage/>
     },
     {
      path:"dashboard",
      element: <Dashboard/>
     },
   ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
 </React.StrictMode>,
)
