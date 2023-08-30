import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import './index.scss';
const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
   
  },
 
  {
    path: '/about',
    element: <About />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
