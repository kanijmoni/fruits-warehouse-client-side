import React from 'react';

const NewArrivel = ({ product }) => {
    const { name, img, description } = product;
    return (
        <div className='product'>
            <img className='w-100 h-50' src={img} alt="" />
            <h2>Name:{name}</h2>
            <p>Description:{description}</p>
        </div>
    );
}
    ;

export default NewArrivel;