import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const { children } = props;

  const [token, setToken] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (token === undefined) {
      setToken(localStorage.getItem('token'));
    }
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <AuthContext.Provider value={[token, setToken, posts, setPosts]}>
      {children}
    </AuthContext.Provider>
  );
}
