import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <p><bo><i>"Fresh From Our Farmhouse"</i></bo></p>
            <h1>Inventory Products</h1>
            {
                products.slice(2).map(product => <Product
                    key={product.id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;