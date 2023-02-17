import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRouter = ({children}) => {
    const{user, loading} = useContext(AuthContext);
    // const location= useLocation();

    if(loading){
        return <div>

        </div>
    }

    if(user){
        return children
    }
    return (
       <Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default PrivateRouter;