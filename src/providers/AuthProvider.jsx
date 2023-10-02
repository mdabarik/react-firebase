import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (currUser) => {
    //         setUser(currUser);
    //         console.log('observing curr user inside use effect authProvider', currUser);
    //     });
    //     return () => {
    //         unsubscribe();
    //     }
    // }, [])

    const logOut = () => {
        return signOut(auth);
    }

    // observe auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currUser => {
            setUser(currUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = { 
        user, 
        createUser, 
        signInUser, 
        logOut 
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;