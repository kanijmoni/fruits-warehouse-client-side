
import React from 'react';

const Product = ({ product }) => {
    const { name, img, price, quantity,description} = product;
return (
    <div>
        <img src={img} alt="" />
        <h2>Name:{name}</h2>
        <p>Description:{description}</p>
        <p>Price:{price}</p>
        <p>Quantity:{quantity}</p>
    </div>
);
};

export default Product;