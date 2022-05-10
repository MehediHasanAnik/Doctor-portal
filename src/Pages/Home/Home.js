import React from 'react';
import Care from '../Care/Care';
import Services from '../Services/Services';
import Banner from './Banner';
import InfoCard from './InfoCard';


const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCard />
            <Services />
            <Care />
        </div>
    );
};

export default Home;