import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './product';

const Products = () => {

    const product = useLoaderData(); 
    const products =  product.products
    return (
        <div className='min-h-screen grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-4 px-4'>
            {
                products.map(product=> <Product key={product.id} product={product} ></Product> )
            }
        </div>
    );
};

export default Products;