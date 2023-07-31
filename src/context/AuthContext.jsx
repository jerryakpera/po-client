import { createContext, useEffect, useState } from 'react';

import { auth, onAuthStateChanged } from '../config/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL, accessToken, uid } = user;

        setAuthUser({
          email,
          displayName,
          photoURL,
          accessToken,
          uid,
        });
        setIsLoggedIn(true);
        return;
      }

      setIsLoggedIn(false);
    });
  });

  return (
    <AuthContext.Provider value={{ authUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
