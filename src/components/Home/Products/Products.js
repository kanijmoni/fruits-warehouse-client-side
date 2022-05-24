import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const navigate = useNavigate();

    const navigateToInventory = event => {
        navigate(`/inventory`);
    }

    return (
        <div id="inventory" className='container'>
            <div className='products-title'>
                <p><i>"Fresh From Our Farmhouse"</i></p>
                <h1>Inventory Products</h1>
            </div>
            <div className='products-container'>
                {
                    products.slice(3).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='manag-btn'>
                <Link to={`/inventory`}>
                    <button onClick={navigateToInventory} className='manage-btn'>Manage Inventories</button>
                </Link>
            </div>
        </div>
    );
};

export default Products;