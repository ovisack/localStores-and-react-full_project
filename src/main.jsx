import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './component/Home'

import Data from './component/Data'


const router=createBrowserRouter([
  {
    path:"/",
    element:<Home ></Home>,
    },
      
           
  
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider  router={router}></RouterProvider>
  </StrictMode>,
)
