import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/Product/Product.css';

const Inventories = ({ product }) => {
    const { _id, name, img, price, description } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div className='product'>
            <img className='w-100 h-50' src={img} alt="" />
            <h2>Name:{name}</h2>
            <p>Description:{description}</p>
            <p>Price:{price}</p>
            <button onClick={() => navigateToProductDetail(_id)} className='update-btn'>Stock Update</button>
        </div>
    );
};

export default Inventories;