import React from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const provideLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state changed', currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const githubLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }


    const authInfo = { user, provideLogin, githubLogin };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;