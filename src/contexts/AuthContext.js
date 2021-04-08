import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../configFirebase';
import { createUser } from '../helpers/createUser';
import { getUserById } from '../helpers/getUserById';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(profileData, selectedFile, email, password) {
    return createUser(profileData, selectedFile, email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  //   function resetPassword(email) {
  //     return auth.sendPasswordResetEmail(email)
  //   }

  //   function updateEmail(email) {
  //     return currentUser.updateEmail(email)
  //   }

  //   function updatePassword(password) {
  //     return currentUser.updatePassword(password)
  //   }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      if (user) {
        const userProfileDoc = await getUserById(user.uid);
        const userProfile = userProfileDoc.data();
        setCurrentUser({ uid: user.uid, email: user.email, ...userProfile });
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
