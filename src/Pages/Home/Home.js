import React from 'react';
import AppointmentHome from '../AppointmentHome/AppointmentHome';
import Care from '../Care/Care';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';

import Banner from './Banner';
import InfoCard from './InfoCard';


const Home = () => {
    return (
        <div>
            <Banner />
            <InfoCard />
            <Services />
            <Care />
            <AppointmentHome />
            <Footer />
        </div>
    );
};

export default Home;