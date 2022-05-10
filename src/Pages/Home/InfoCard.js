import React from 'react';
import Card from './Card';
import clock from "../../assets/icons/clock.svg"
import marker from "../../assets/icons/marker.svg"
import phone from "../../assets/icons/phone.svg"

const InfoCard = () => {
    return (
        <div className='grid grid-cols-3 py-20 gap-5 mx-10'>
            <Card bgClass="bg-primary" img={clock} />
            <Card bgClass="bg-accent" img={marker} />
            <Card bgClass="bg-secondary" img={phone} />
        </div>
    );
};

export default InfoCard;