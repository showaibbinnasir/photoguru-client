import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(authContext)
    const location = useLocation();
    if(loading){
        return <div>Loading ..... </div>
    }
    if(!user){
        return <Navigate to='/login' state={{from : location}} replace></Navigate>
     }
     return children;
};

export default PrivateRouter;