import React from 'react';
import { Protect } from '../Components/PrivateRoute/PrivateRoute';
import UserDomain from '../Components/UserDomain/UserDomain';


const Domain = () => {
    return (
        <div>
            <UserDomain></UserDomain>
        </div>
    );
};

export default Protect(Domain);