import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inventories from './Inventories';
import '../Home/Products/Products.css';

const Inventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const navigate = useNavigate();
    const navigateToAddItem = _id => {
        navigate('/addItem');
    }
    return (
        <div>
            <div className='container'>
                <div className='products-title'>
                    <h1>All Items</h1>
                </div>
                <div className='mb-10'>
                    <button onClick={() => navigateToAddItem()} className='btn btn-primary mb-10'>Add New Item</button>
                </div>
                <div className='products-container'>
                    {
                        products.map(product => <Inventories
                            key={product._id}
                            product={product}
                        ></Inventories>
                        )}
                </div>
            </div>

        </div>
    );
};

export default Inventory;