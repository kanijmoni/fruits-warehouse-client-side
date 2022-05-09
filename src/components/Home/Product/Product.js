
import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, price, quantity, description, supplier } = product;
    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2>Name:{name}</h2>
            <p>Description:{description}</p>
            <p>Price:{price}</p>
            <p>{quantity}</p>
            <p>Supplier-Name:{supplier}</p>
            <button className='update-btn'>Stock Update</button>
        </div>
    );
};

export default Product;