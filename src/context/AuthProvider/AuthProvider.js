import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
export const authContext = createContext('');
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (profile) =>{
        return updateProfile(auth.currentUser , profile);
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('on auth state change' , currentUser);
            setLoading(false)
            setUser(currentUser);
            
        });
        return ()=>{
            unsubscribe();
        }
    }, [])

    const authInfo = {user, loading, createUser, updateUser, loginUser, logOut}
    return (
        
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;