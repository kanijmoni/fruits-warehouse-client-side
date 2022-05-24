import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/google-icon.png';
import github from '../../../images/github.png';
import Loading from '../Loading/Loading';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [token] = useToken(user || user1);
    const navigate = useNavigate();

    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;
    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message}{error1?.message}</p>
        </div>
    }

    if (token) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'>
                </div>
            </div>
            {errorElement}
            <div className='text-center'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 my-2 text-center'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
            <div className='text-center'>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 text-center'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;