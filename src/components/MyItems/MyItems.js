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
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
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
            const url = `http://localhost:5000/order/${id}`;
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
                <div>
                    <img className='mx-3 w-50' src={orders.img} alt='' />
                </div>
                <div>
                    <h5>Name:{orders.name}</h5>
                    {
                        orders.map(order => <div key={order._id}>
                            <h5>{order.name} <button className='btn btn-primary text-white' onClick={() => handleDelete(order._id)}>Delete</button></h5>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyItems;