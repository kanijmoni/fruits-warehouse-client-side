import React from 'react';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {

    const { productId } = useParams();
    return (
        <h2 className='text-center'>Product Detail:{productId}</h2>
       
    );
};

export default ProductDetail;