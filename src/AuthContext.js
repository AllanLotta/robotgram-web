import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const { children } = props;

  const [token, setToken] = useState('');

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <AuthContext.Provider value={[token, setToken]}>
      {children}
    </AuthContext.Provider>
  );
}
