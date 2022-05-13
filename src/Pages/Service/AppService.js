import React from 'react';

const AppService = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card w-50 bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{slots.length > 0 ?
                    <span>{slots[0]} </span> : <span className='text-rose-400'>No Seat Avabible</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : "no space"}</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length < 1} class="btn btn-primary ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AppService;