import React, { useState, createContext, useEffect } from 'react';

export const FileContext = createContext();

export default function FileProvider(props) {
  const { children } = props;

  const [fileId, setFileId] = useState();

  useEffect(() => {}, []);

  return (
    <FileContext.Provider value={[fileId, setFileId]}>
      {children}
    </FileContext.Provider>
  );
}
