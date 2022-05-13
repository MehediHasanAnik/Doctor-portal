import React from 'react';

const Card = ({ img, bgClass }) => {
    return (
        <div className={`card lg:card-side bg-primary shadow-xl ${bgClass}`}>
            <figure><img className='ml-5' src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default Card;