import React, { createContext } from 'react';
import app from '../../firebase/firebase.init';
import {getAuth} from 'firebase/auth'
export const authContext = createContext('');


const AuthProvider = ({children}) => {
    // const user = {name : "showaib bin nasir"}
    const auth = getAuth(app)
    
    const authInfo = {}
    return (
        
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;