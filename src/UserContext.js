import React, { useState, createContext, useEffect } from 'react';

export const UserContext = createContext();

export default function UserProvider(props) {
  const { children } = props;

  const [userId, setUserId] = useState();
  const [postLoad, setPostLoad] = useState(false);

  useEffect(() => {
    const userIdLocal = localStorage.getItem('userId');
    if (userIdLocal) {
      setUserId(userIdLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userId', userId);
  }, [userId]);

  return (
    <UserContext.Provider value={[userId, setUserId, postLoad, setPostLoad]}>
      {children}
    </UserContext.Provider>
  );
}
