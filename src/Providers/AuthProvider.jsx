import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Google provider
    const googleProvider = new GoogleAuthProvider();

    // Email Password Authentication
    const createUserWithEmail = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Update a user's profile
    const updateUserProfileName = (displayName)=>{
        return updateProfile(auth.currentUser, {
            displayName: displayName
        })
    }

    // Sign in a user with an email address and password
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign out user
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // Google Authentication
    const createUserWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    // Manage user
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
            // console.log("Current User:", currentUser);
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUserWithEmail,
        updateUserProfileName,
        signIn,
        logOut,
        createUserWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;