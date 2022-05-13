import React from 'react';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {

    const { product } = useParams();
    return (
        <h2 className='text-center'>Product Detail:{product}</h2>

    );
};

export default ProductDetail;