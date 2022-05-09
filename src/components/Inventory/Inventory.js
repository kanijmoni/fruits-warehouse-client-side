import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <div className='container'>
                <div className='products-title'>
                    <h1>All Items</h1>
                </div>
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>
                        )}
                </div>
            </div>

        </div>
    );
};

export default Inventory;