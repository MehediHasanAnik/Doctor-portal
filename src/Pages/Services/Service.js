import React from 'react';

const Service = ({ service }) => {

    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={service.img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{service.title}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;