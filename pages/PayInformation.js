import React from 'react';
import Chart from '../Components/Chart/Chart/Chart';
import PayData from '../Components/PayData/PayData';

const PayInformation = () => {
    return (
        <div className='md:max-w-[1140px] md:mx-auto my-16'>
           
            <PayData></PayData>
            <Chart></Chart>
        </div>
    );
};

export default PayInformation;