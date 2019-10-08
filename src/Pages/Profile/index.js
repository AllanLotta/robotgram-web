import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from '../../AuthContext';
import { Container, Content } from './styles';
import api from '../../services/api';

export default function Profile({ match }) {
  const [token, setToken] = useContext(AuthContext);
  const [user, setUser] = useState();

  function signOut() {
    localStorage.setItem('token', '');
    setToken(null);
    return <Redirect to="/" />;
  }

  useEffect(() => {
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    async function getUser() {
      const res = await api.get(`users/${match.params.id}`, config);
      console.log(res);
      setUser(res.data);
    }
    getUser();
  }, [match.params.id, token]);
  return (
    <Container>
      <Content>
        {user ? (
          <>
            <div className="avatar">
              <img src={user.avatar} alt="" width="100%" />
            </div>
            <div className="info">
              <div className="username">
                <p>{user.username}</p>
                <button type="button">Edit Profile</button>
                <FaSignOutAlt onClick={signOut} />
              </div>
              <div className="count">
                <p>
                  <strong>9</strong> posts
                </p>
                <p>
                  <strong>870000</strong> followers
                </p>
                <p>
                  <strong>57</strong> following
                </p>
              </div>
              <div className="name">
                <p>{user.fullname}</p>
              </div>
              <div className="bio">{user.bio}</div>
            </div>
          </>
        ) : (
          <h3>Carregando...</h3>
        )}
      </Content>
    </Container>
  );
}
