import React from 'react';

const Card = ({ img, bgClass }) => {
    return (
        <div class={`card lg:card-side bg-primary shadow-xl ${bgClass}`}>
            <figure><img className='ml-5' src={img} alt="Album" /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default Card;