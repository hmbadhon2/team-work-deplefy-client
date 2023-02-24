import React from 'react';
import { Protect } from '../Components/PrivateRoute/PrivateRoute';
import AddSiteModal from '../Components/Siter/Siter/AddSiteModal';
import Siter from '../Components/Siter/Siter/Siter';

const Sites = () => {
    return (
        <div className='md:max-w-[1140px] md:mx-auto'>
        <Siter></Siter>
        <AddSiteModal></AddSiteModal>
    </div>
    );
};

export default Protect(Sites);