import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import InfoCard from './InfoCard';


const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCard />
            <Services />
        </div>
    );
};

export default Home;