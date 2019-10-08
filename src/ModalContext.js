import React, { useState, createContext, useEffect } from 'react';

export const ModalContext = createContext();

export default function AuthProvider(props) {
  const { children } = props;

  const [modal, setModal] = useState(false);
  const [content, setContent] = useState('logout');

  useEffect(() => {}, []);

  return (
    <ModalContext.Provider value={[modal, setModal, content, setContent]}>
      {children}
    </ModalContext.Provider>
  );
}
