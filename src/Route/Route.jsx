import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Dashboard from '../Pages/Dashboard';

const router = createBrowserRouter ([
    {
      path: '/', 
      element: <MainLayout></MainLayout>, 
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/products', 
            loader: ()=> fetch('https://dummyjson.com/products'),
            element: <Products></Products>
        }, 
        {
            path: '/dashboard', 
            element: <Dashboard></Dashboard>
        }
      ]
    }
    
    ])

export default router;