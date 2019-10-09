import React, { useState, useContext } from 'react';
import api from '../../services/api';
import { AuthContext } from '../../AuthContext';
import { FileContext } from '../../FileContext';
import { Container } from './styles';

export default function SimpleReactFileUpload() {
  const [file, setFile, fileId, setFileId] = useContext(FileContext);
  const [token] = useContext(AuthContext);
  // const [fileId, setFileId] = useContext(FileContext);

  async function fileUpload(fileData) {
    const formData = new FormData();
    formData.append('file', file.file);
    console.log('FormData', formData);

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `bearer ${token}`,
      },
    };
    const res = await api.post('/files', formData, config);
    // console.log(res);
    // setFileId(res.id);
    // console.log(fileId);
    // return res;
    console.log(res.data.id);
    setFileId(res.data.id);
  }
  function onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    // console.log('onFormSubmit', e);
    fileUpload(file).then(response => {
      // setFileId(response.data.id);
      // console.log('FFFF', response.data);
    });
  }

  return (
    <>
      <Container>
        <form onSubmit={onFormSubmit}>
          <p className="filename">{file ? file.file.name : 'Select a photo'}</p>
          <div className="fileButton">
            <input
              type="file"
              accept="image/*"
              onChange={e => setFile({ file: e.target.files[0] })}
            />
          </div>
          {file ? (
            <button className="uploadButton" type="submit">
              Upload
            </button>
          ) : null}
        </form>
      </Container>
    </>
  );
}
