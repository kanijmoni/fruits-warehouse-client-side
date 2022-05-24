import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getOrders = async () => {
            const email = user?.email;
            const url = `https://calm-wildwood-37585.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch (error) {
                console.log(error);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrders();

    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://calm-wildwood-37585.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    }
    return (
        <div className='text-center'>
            <h2 className='text-center text-primary'>My Items:{orders.length}</h2>
            <div className='d-flex mt-5'>
                <div className='text-center mx-auto'>
                    {
                        orders.map(order => <div key={order._id}>
                            <h5>Email Address:{order.email}</h5>
                            <h4 className='text-primary'>Selected Item:{order.product} <button className='btn btn-info text-white' onClick={() => handleDelete(order._id)}>Delete</button></h4>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;