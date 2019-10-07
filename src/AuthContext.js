import React, { useState, createContext, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const { children } = props;

  const [token, setToken] = useState();
  const [modal, setModal] = useState();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (token != null) {
      localStorage.setItem('token', token);
    } else if (token == null) {
      setToken(localStorage.getItem('token'));
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={[token, setToken, posts, setPosts, modal, setModal]}
    >
      {children}
    </AuthContext.Provider>
  );
}
