import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppService from '../Service/AppService';


const AvabibleAppoinments = ({ date }) => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='pb-10 pt-0'>
            <h1 className='text-center text-2xl'>You picked:{format(date, 'PP')}.</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    services.map(service => <AppService key={service._id} service={service}>></AppService>)
                }
            </div>
        </div>
    );
};

export default AvabibleAppoinments;