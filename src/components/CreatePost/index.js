import React, { useState, useEffect } from 'react';
import Upload from '../Upload';
import { Container, Content } from './styles';

export default function CreatePost() {
  const [create, setCreate] = useState(false);

  function upload(e) {
    console.log(e.target.files[0]);
  }

  return (
    <Container>
      <Content>
        <button type="button" onClick={e => setCreate(!create)}>
          {create ? 'Cancel' : 'Create Post'}
        </button>
        {create ? (
          <div className="create">
            <Upload />
            {/* <div className="file-input-wrapper">
              <button type="button" className="btn-file-input">
                Select File
              </button>
              <input
                type="file"
                name="file"
                accept="image/*"
                id="uploadFile"
                onChange={upload}
              />
            </div> */}
            <textarea name="description" rows="10" />
            <button type="submit" className="sendButton">
              Send
            </button>
          </div>
        ) : null}
      </Content>
    </Container>
  );
}
