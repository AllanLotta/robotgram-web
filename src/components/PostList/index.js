import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext';
import { Container, Card } from './styles';
import api from '../../services/api';

export default function PostList() {
  const [posts, setPosts] = useState();
  const [token] = useContext(AuthContext);

  useEffect(() => {
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    async function getPosts() {
      const res = await api.get('/posts', config);
      setPosts(res.data);
      console.log(res.data);
    }
    getPosts();
  }, [token]);

  return (
    <Container>
      {posts ? (
        posts.map(post => (
          <Card key={post.id}>
            <div className="header">
              <img src={post.user.avatar} alt="avatar" />
              <p>{post.user.username}</p>
            </div>
            <div className="image">
              <img src={post.file.url} alt="" width="100%" />
            </div>
            <div className="content">
              <p>
                <span className="name">{post.user.username}</span>{' '}
                {post.description}
              </p>
            </div>
          </Card>
        ))
      ) : (
        <>
          <h3>
            <strong>:( sorry,</strong> there is not to see
          </h3>{' '}
          <br />
          <p>You can follow other robots to see their posts.</p>
        </>
      )}
    </Container>
  );
}
