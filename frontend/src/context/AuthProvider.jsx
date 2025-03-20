import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const GoogleProvider = new GoogleAuthProvider();


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, GoogleProvider)
    } 

    const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
  }
    const logOut = () => {
      return signOut(auth)
    }

    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        //console.log(currentUser)
        setUser(currentUser)
        setLoading(false);
      });
      return () => {
        return unsubscribe();
      }
    }, [])

    const authInfo = {
        user,
        createUser,
        loginWithGoogle,
        loginUser,
        logOut,
        loading
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider