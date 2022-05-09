import React from 'react';
import notFound from '../../images/notFound.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notfound'>
            <img src={notFound} alt='' />
        </div>
    );
};

export default NotFound;