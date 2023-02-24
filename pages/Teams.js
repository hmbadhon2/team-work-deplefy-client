import React from 'react';
import { Protect } from '../Components/PrivateRoute/PrivateRoute';
import Team from '../Components/Team/Team';
import UpdateUserModal from '../Components/UpdateUserModal/UpdateUserModal';

const Teams = () => {

    return (
        <div className='md:max-w-[1140px] md:mx-auto'>
            <Team></Team>
            <UpdateUserModal></UpdateUserModal>
        </div>
    );
};

export default Protect(Teams);