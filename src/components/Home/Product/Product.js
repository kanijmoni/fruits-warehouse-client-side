
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, img, price, quantity, description, supplier } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = _id => {
        navigate(`/product/${_id}`);
    }
    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2>Name:{name}</h2>
            <p>Description:{description}</p>
            <p>Price:{price}</p>
            <p>{quantity}</p>
            <p>Supplier-Name:{supplier}</p>
            <button onClick={() => navigateToProductDetail(_id)} className='update-btn'>Stock Update</button>
        </div>
    );
};

export default Product;