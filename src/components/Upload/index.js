import React, { useState, useContext } from 'react';
import api from '../../services/api';
import { AuthContext } from '../../AuthContext';
import { FileContext } from '../../FileContext';
import { Container } from './styles';

export default function SimpleReactFileUpload() {
  const [file, setFile] = useState();
  const [token] = useContext(AuthContext);
  const [fileId, setFileId] = useContext(FileContext);

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
    console.log(res);
    setFileId(res.id);
    console.log(fileId);
    return res;
  }
  function onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    console.log('onFormSubmit', e);
    fileUpload(file).then(response => {
      console.log(response.data);
    });
  }

  return (
    <>
      <Container>
        <form onSubmit={onFormSubmit}>
          <p className="filename">Select a photo</p>
          <div className="fileButton">
            <input
              type="file"
              accept="image/*"
              onChange={e => setFile({ file: e.target.files[0] })}
            />
          </div>
          <button className="uploadButton" type="submit">
            Upload
          </button>
        </form>
      </Container>
    </>
  );
}
