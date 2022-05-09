import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='register-form'>
            <h2 className='text-center'>Please Register</h2>
            <form>
                <input type='text' name="email" id="" placeholder='Email Address' required />
                <input type='password' name="password" id="" placeholder='Password' required />
                <input type='submit' value="Register" />

            </form>
        </div>
    );
};

export default Register;