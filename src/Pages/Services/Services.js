import React from 'react';
import flouride from "../../assets/images/fluoride.png"
import caravit from "../../assets/images/cavity.png"

import whiteing from "../../assets/images/whitening.png"
import Service from './Service';

const Services = () => {

    const services = [
        {
            _id: 1,
            img: flouride,
            title: 'Fluoride Treatement',
            description: " Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities"
        },
        {
            _id: 2,
            img: caravit,
            title: 'Cavity Filling',
            description: " Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection. A filling seals a hole, or cavity, in the tooth."
        },
        {
            _id: 3,
            img: whiteing,
            title: 'Teeth Whitening',
            description: "Coffee, tea and red wine are some major staining culprits. What do they have in common? Intense color pigments called chromogens that attach to the white, outer part of your tooth"
        }
    ]

    return (
        <div className='main-services p-20'>
            <div className="services text-center mb-10">
                <h1 className='text-primary text-xl font-bold mb-3 uppercase '>Our Services</h1>
                <p className='text-3xl'>Services We Provide</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {services.map(service => <Service key={service._id} service={service}></Service>)}
            </div>
        </div>
    );
};

export default Services;