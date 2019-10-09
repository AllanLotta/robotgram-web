import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import { UserContext } from '../../UserContext';
import { ModalContext } from '../../ModalContext';
import { Container, Card } from './styles';
import api from '../../services/api';

export default function UserPosts() {
  const [posts, setPosts] = useState();
  const [token] = useContext(AuthContext);
  const [userId, setUserId, postLoad, setPostLoad] = useContext(UserContext);
  const [
    modal,
    setModal,
    content,
    setContent,
    routerUserId,
    setRouterUserId,
  ] = useContext(ModalContext);

  useEffect(() => {
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    async function getPosts() {
      const res = await api.get(`/user/${routerUserId}/posts`, config);
      setPosts(res.data);
      console.log(res.data);
    }
    getPosts();
  }, [token, postLoad, routerUserId]);

  return (
    <Container>
      {posts ? (
        posts.map(post => (
          <Card key={post.id}>
            <div className="header">
              <Link to={`/profile/${post.user.id}`}>
                <img src={post.user.avatar} alt="avatar" />
              </Link>
              <Link to={`/profile/${post.user.id}`}>
                <p>{post.user.username}</p>
              </Link>
            </div>
            <div className="image">
              <img src={post.file.url} alt="" width="100%" />
            </div>
            <div className="content">
              <p>
                <span className="name">
                  <Link to={`/profile/${post.user.id}`}>
                    {post.user.username}
                  </Link>
                </span>{' '}
                {post.description}
              </p>
            </div>
          </Card>
        ))
      ) : (
        <>
          <h3>
            <strong>No posts</strong>
          </h3>
        </>
      )}
    </Container>
  );
}
