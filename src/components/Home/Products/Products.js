import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='container'>
            <div className='products-title'>
                <p><i>"Fresh From Our Farmhouse"</i></p>
                <h1>Inventory Products</h1>
            </div>
            <div className='products-container'>
                {
                    products.slice(2).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='manag-btn'>
                <button className='manage-btn'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Products;