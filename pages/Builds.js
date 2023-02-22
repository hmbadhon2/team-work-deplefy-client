import React from 'react';
import Builder from '../Components/Builder/Builder/Builder';
import { Protect } from '../Components/PrivateRoute/PrivateRoute';

const Builds = () => {
    return (
        <div className='md:max-w-[1140px] md:mx-auto'>
            <Builder></Builder>
        </div>
    );
};

export default Protect(Builds);