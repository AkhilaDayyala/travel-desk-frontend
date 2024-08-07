// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthenticated: false, userRole: '' });

  const onLogin = (role) => {
    setAuth({ isAuthenticated: true, userRole: role });
  };

  const value = {
    auth,
    onLogin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
