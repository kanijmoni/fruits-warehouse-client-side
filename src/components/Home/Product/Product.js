
import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, price, quantity, description } = product;
    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2>Name:{name}</h2>
            <p>Description:{description}</p>
            <p>Price:{price}</p>
            <p>{quantity}</p>
            <button className='update-btn'>Stok Update</button>
        </div>
    );
};

export default Product;