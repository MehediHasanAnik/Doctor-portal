import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppoinmentBanner from './AppoinmentBanner';

import AvabibleAppoinments from './AvabibleAppoinments';


const Appoinment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate} />
            <AvabibleAppoinments date={date}></AvabibleAppoinments>
            <Footer></Footer>

        </div>
    );
};

export default Appoinment;