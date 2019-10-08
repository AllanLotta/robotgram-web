import React, { useState, useEffect } from 'react';

import { Container, Content } from './styles';

export default function CreatePost() {
  const [create, setCreate] = useState(false);

  return (
    <Container>
      <Content>
        <button type="button" onClick={e => setCreate(!create)}>
          {create ? 'Cancel' : 'Create Post'}
        </button>
        {create ? (
          <div className="create">
            <div className="file-input-wrapper">
              <button type="button" className="btn-file-input">
                Select File
              </button>
              <input type="file" name="file" />
            </div>
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
