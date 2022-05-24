import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import axios from 'axios';


const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId]);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            product: product.name,
            productId: productId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }

        axios.post(`http://localhost:5000/order`, order)
            .then(response => {
                const { data } = response;
                if (data.insertId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            });
    }
    const navigate = useNavigate();

    const navigateToInventory = event => {
        navigate('/inventory');
    };

    return (
        <div className='w-50 mx-auto'>
            <div className='d-flex mt-5'>
                <div>
                    <img className='mx-5' src={product.img} alt='' />
                </div>
                <div>
                    <p><b>Product Detail:{product.name}</b></p>
                    <p>Price:{product.price}</p>
                    <p>Description:{product.description}</p>
                    <p>{product.quantity}</p>
                    <p>Supplier-Name:{product.supplier}</p>
                    <div className='d-flex'>
                        <button className='mx-2 btn btn-info'>Delivered</button>
                        <form><input className='mx-2 btn btn-info' type='number' name='number' placeholder='Restock' /></form>
                    </div>
                </div>
            </div>
            <h3 className='text-primary text-center mt-5'>Please Order:{product.name}</h3>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-3' type="text" value={user?.displayName} name='name' placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-3' type="email" value={user?.email} name='email' placeholder='Email' required readOnly disabled />
                <br />
                <input className='w-100 mb-3' type="text" value={product.name} name='product' placeholder='Product Name' required readOnly disabled />
                <br />
                <input className='w-100 mb-3' type="text" name='address' placeholder='Address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-3' type="text" name='phone' placeholder='phone' autoComplete='off' required />
                <br />
                <input onSubmit={handlePlaceOrder} className='btn btn-primary' type='submit' value="Place Order" />
            </form>

            <div className='text-center mt-20'>
                <button onClick={navigateToInventory} className='btn btn-primary'>Manage Inventories</button>
            </div>
        </div >
    )
};
export default ProductDetail;