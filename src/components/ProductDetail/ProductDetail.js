import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const ProductDetail = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])

    const navigate = useNavigate();

    const navigateToInventory = event => {
        navigate('/inventory');
    }

    return (
        <div>
            <h2 className='text-center'>Product Detail:{product.name}</h2>


            <div className='text-center'>
                <button onClick={navigateToInventory} className='btn btn-primary'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default ProductDetail;