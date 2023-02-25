import React from 'react';
import { Protect } from '../Components/PrivateRoute/PrivateRoute';
import UserDomain from '../Components/UserDomain/UserDomain';


const Domain = () => {
    return (
        <div className='md:max-w-[1140px] md:mx-auto my-20'>
            <UserDomain></UserDomain>
        </div>
    );
};

export default Protect(Domain);