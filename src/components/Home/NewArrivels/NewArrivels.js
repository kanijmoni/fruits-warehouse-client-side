import React, { useEffect, useState } from 'react';
import NewArrivel from '../NewArrivel/NewArrivel';


const NewArrivels = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div className='container'>
            <div className='products-title'>
                <p><i>"Fresh From Our Farmhouse"</i></p>
                <h1>New Arrivels</h1>
            </div>
            <div className='products-container'>
                {
                    products.map(product => <NewArrivel
                        key={product._id}
                        product={product}
                    ></NewArrivel>
                    )}
            </div>
        </div>
    );
};

export default NewArrivels;
