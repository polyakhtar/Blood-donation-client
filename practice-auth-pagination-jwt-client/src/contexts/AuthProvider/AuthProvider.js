import React from 'react';
import {createUserWithEmailAndPassword,getAuth} from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { createContext } from 'react';
import { useState } from 'react';
const auth=getAuth(app);
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState({});
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

    const authInfo={user,createUser};
    return (
    <AuthContext.Provider value={authInfo}>
{children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;