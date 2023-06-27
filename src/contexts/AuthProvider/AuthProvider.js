import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

const auth=getAuth(app);
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const logIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const updateUser=(userInfo)=>{
    return updateProfile(auth.currentUser,userInfo)
}
const googleSignIn=provider=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
}
const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser); 
        setLoading(false) ;
    })
    return ()=> unsubscribe()
},[])
const authInfo={
    user,
    createUser,
    updateUser,
    logIn,
    loading,
    googleSignIn,
    logOut
    
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;