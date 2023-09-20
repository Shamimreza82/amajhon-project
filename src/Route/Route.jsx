import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Dashboard from '../Pages/Dashboard';
import ProductDetiles from '../Pages/ProductDetiles';

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
            path: '/productDetiles/:productID', 
            loader: ({params})=> fetch (`https://dummyjson.com/products/${params.productID}`), 
            element: <ProductDetiles></ProductDetiles>
        },
        {
            path: '/dashboard', 
            element: <Dashboard></Dashboard>
        }
      ]
    }
    
    ])

export default router;