import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';
import useToken from '../../hooks/useToken';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        // error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }
    if (token) {
        navigate(from, { replace: true });
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        await createUserWithEmailAndPassword(name, email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
    }


    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }} className="text-primary my-3">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type='text' name="name" id="" placeholder='Your Name' />
                <input type='text' name="email" id="" placeholder='Email Address' required />
                <input type='password' name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type='checkbox' name="terms" id="terms" />
                <label className={agree ? 'ps-2' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms and Conditions</label>
                <input disabled={!agree} className='w-50 mx-auto btn btn-primary mt-2' type='submit' value="Register" />

            </form>
            <p>Already Have an Account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;