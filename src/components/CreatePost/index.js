import React, { useState, useContext, useEffect } from 'react';
import Upload from '../Upload';
import { Container, Content } from './styles';
import { FileContext } from '../../FileContext';
import { AuthContext } from '../../AuthContext';
import api from '../../services/api';

export default function CreatePost() {
  const [create, setCreate] = useState(false);
  const [description, setDescription] = useState();
  const [file, setFile, fileId, setFileId] = useContext(FileContext);
  const [token] = useContext(AuthContext);

  async function send() {
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };

    const post = {
      file_id: fileId,
      description,
    };
    console.log(post);

    try {
      const res = await api.post('/posts', post, config);
      setCreate(false);
      console.log(res);
      return res;
    } catch (error) {
      return error;
    }
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

            <textarea
              name="description"
              rows="10"
              onChange={e => setDescription(e.target.value)}
            />
            {fileId ? (
              <button type="submit" className="sendButton" onClick={send}>
                Send
              </button>
            ) : (
              <button type="submit" className="sendButton cantSend">
                Send
              </button>
            )}
          </div>
        ) : null}
      </Content>
    </Container>
  );
}
