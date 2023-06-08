import { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, } from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const LoginUser = (email, password) => {
      
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateProfileUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
         
        });
        return () => {
            return unsubscribe();
        }
    }, [])
   
    const authInfo = {
        user,
        updateProfileUser,
        createUser,
        LoginUser,
      
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;