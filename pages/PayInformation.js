import React from 'react';
import Chart from '../Components/Chart/Chart/Chart';
import PayData from '../Components/PayData/PayData';
import DashboardLayout from './DashboardLayout';

const PayInformation = () => {
    return (
        <div>
            
           <DashboardLayout>
           <PayData></PayData>
            <Chart></Chart>
           </DashboardLayout>
        </div>
    );
};

export default PayInformation;