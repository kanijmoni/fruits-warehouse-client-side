import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const NewArrivels = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <div className='products-title'>
                <p><bo><i>"Fresh From Our Farmhouse"</i></bo></p>
                <h1>New Arrivels</h1>
            </div>
            <div className='products-container'>
                {
                    products.slice(6).map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>
                    )}
            </div>
        </div>
    );
};

export default NewArrivels;
