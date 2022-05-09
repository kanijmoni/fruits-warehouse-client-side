import React from 'react';
import Banner from '../Banner/Banner';
import NewArrivels from '../NewArrivels/NewArrivels';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <NewArrivels></NewArrivels>
            <Review></Review>
        </div>
    );
};

export default Home;