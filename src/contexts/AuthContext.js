import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../configFirebase';
import { createUser } from '../helpers/createUser';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(profileData, selectedFile, email, password) {
    return createUser(profileData, selectedFile, email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    setCurrentUser(null);
    return auth.signOut();
  }

  useEffect(() => {
    const checkAuthState = async () => {
      await auth.onAuthStateChanged((user) => {
        if (user) {
          setCurrentUser(user);
        }
      });
    };
    checkAuthState();
  }, [currentUser]);

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
