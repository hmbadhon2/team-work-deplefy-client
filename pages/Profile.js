import React from 'react';
import { Protect } from '../Components/PrivateRoute/PrivateRoute';
import UserProfile from '../Components/UserProfile/UserProfile/UserProfile';

const Profile = () => {
    return (
        <div className='md:max-w-[1140px] md:mx-auto my-10'>
            <UserProfile></UserProfile>
        </div>
    );
};

export default Protect(Profile);