import React, { useState, createContext, useEffect } from 'react';

export const FileContext = createContext();

export default function FileProvider(props) {
  const { children } = props;

  const [fileId, setFileId] = useState();
  const [file, setFile] = useState();

  useEffect(() => {
    console.log(fileId);
  }, [fileId]);

  return (
    <FileContext.Provider value={[file, setFile, fileId, setFileId]}>
      {children}
    </FileContext.Provider>
  );
}
