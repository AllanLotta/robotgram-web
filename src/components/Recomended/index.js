import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import { Container, Content, Card, Title } from './styles';
import api from '../../services/api';

export default function Recomended() {
  const [users, setUsers] = useState();
  const [token] = useContext(AuthContext);
  async function follow(id) {
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    const res = await api.post(
      `/user/${27}/follower`,
      { follower_id: id },
      config
    );
    console.log(res);
  }
  useEffect(() => {
    async function getUsers() {
      const config = {
        headers: { Authorization: `bearer ${token}` },
      };
      const res = await api.get('/users', config);
      setUsers(res.data);
    }
    getUsers();
  }, [token]);
  return (
    <>
      <Title>Suggestions For You: </Title>
      <Container>
        <Content>
          {users ? (
            users.map(user => (
              <Card key={user.id}>
                <div className="avatar">
                  <Link to={`/profile/${user.id}`}>
                    <img src={user.avatar} alt="" width="100%" />
                  </Link>
                </div>
                <Link to={`/profile/${user.id}`}>
                  <p>{user.username}</p>
                </Link>
                <button type="button" onClick={() => follow(user.id)}>
                  Follow
                </button>
              </Card>
            ))
          ) : (
            <h1>there is nothing to see here</h1>
          )}
        </Content>
      </Container>
    </>
  );
}
