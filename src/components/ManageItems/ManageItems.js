import React from 'react';
import useProducts from '../hooks/useProducts';

const ManageItems = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://calm-wildwood-37585.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Manage Your Items</h2>
            {
                products.map(product => <div key={product._id}>
                    <h5>{product.name} <button className='btn btn-primary text-white' onClick={() => handleDelete(product._id)}>Delete</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageItems;