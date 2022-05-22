import React from 'react';
import useParts from '../../../hooks/useParts';
import Loading from '../../Shared/Loading/Loading';
import Banner from '../Banner/Banner'
import Business from '../Business/Business';
import Parts from '../Parts/Parts'
import Reviews from '../Reviews/Reviews';
import Served from '../Served/Served';
import ShowMap from '../ShowMap/ShowMap';

const Home = () => {
    const [parts] = useParts();
    if(parts.length === 0){
        return <Loading></Loading>
    }else{
        return (
            <div>
            <Banner></Banner>
            <Business></Business>
            <Parts></Parts>
            <Served></Served>
            <Reviews></Reviews>
            <ShowMap></ShowMap>
            </div>
        );
    }

};

export default Home;