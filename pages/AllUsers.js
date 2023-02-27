import React from 'react';
import User from '../Components/User/User';
import DashboardLayout from './DashboardLayout';

const AllUsers = () => {
    return (
        <div>
            <DashboardLayout>
                <User></User>
            </DashboardLayout>
        </div>
    );
};

export default AllUsers;