import React, { useState, useContext, createContext, useEffect } from 'react';
import api from './services/api';
import { AuthContext } from './AuthContext';

export const FollowContext = createContext();

export default function FollowProvider(props) {
  const { children } = props;
  // const [token] = useContext(AuthContext);
  const [followsCount, setFollowsCount] = useState();
  const [followingCount, setFollowingCount] = useState();

  useEffect(() => {}, []);

  return (
    <FollowContext.Provider
      value={[followsCount, setFollowsCount, followingCount, setFollowingCount]}
    >
      {children}
    </FollowContext.Provider>
  );
}
