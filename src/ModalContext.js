import React, { useState, createContext, useEffect } from 'react';

export const ModalContext = createContext();

export default function AuthProvider(props) {
  const { children } = props;

  const [modal, setModal] = useState(false);
  const [content, setContent] = useState('logout');
  const [routerUserId, setRouterUserId] = useState('logout');

  useEffect(() => {}, []);

  return (
    <ModalContext.Provider
      value={[
        modal,
        setModal,
        content,
        setContent,
        routerUserId,
        setRouterUserId,
      ]}
    >
      {children}
    </ModalContext.Provider>
  );
}
