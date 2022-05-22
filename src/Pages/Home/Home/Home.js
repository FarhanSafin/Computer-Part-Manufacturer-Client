import React from 'react';
import Banner from '../Banner/Banner'
import Business from '../Business/Business';
import Parts from '../Parts/Parts'
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Business></Business>
        <Parts></Parts>
        <Reviews></Reviews>
        </div>
    );
};

export default Home;