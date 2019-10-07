import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthContext';
import { Container, Content, Card, Title } from './styles';
import api from '../../services/api';

export default function Recomended() {
  const [users, setUsers] = useState();
  const [token] = useContext(AuthContext);

  useEffect(() => {
    async function getUsers() {
      const config = {
        headers: { Authorization: `bearer ${token}` },
      };
      const res = await api.get('/users', config);
      setUsers(res.data);
    }
    getUsers();
  });
  return (
    <>
      <Title>Suggestions For You: </Title>
      <Container>
        <Content>
          {users ? (
            users.map(user => (
              <Card key={user.id}>
                <div className="avatar">
                  <img
                    src="https://gravatar.com/avatar/3460938ceab7be1fd50c14b59e741ce9?s=400&d=robohash&r=x"
                    alt=""
                    width="100%"
                  />
                </div>
                <p>{user.username}</p>
                <button type="button">Follow</button>
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
