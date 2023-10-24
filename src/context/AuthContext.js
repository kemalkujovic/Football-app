import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect } from "react";
import { auth } from "../firebase";
import React, { useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Postavite currentUser kada korisnik bude prijavljen
        setCurrentUser(user);
      } else {
        // Ako korisnik nije prijavljen, postavite currentUser na null
        setCurrentUser(null);
      }
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
