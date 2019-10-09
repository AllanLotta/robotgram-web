import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import { AuthContext } from '../../AuthContext';
import { ModalContext } from '../../ModalContext';
import { UserContext } from '../../UserContext';
import api from '../../services/api';

export default function Following() {
  const [
    modal,
    setModal,
    content,
    setContent,
    routerUserId,
    setRouterUserId,
  ] = useContext(ModalContext);

  const [token, setToken] = useContext(AuthContext);
  const [userId] = useContext(UserContext);
  const [follows, setFollows] = useState([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    async function getFollows() {
      const res = await api.get(`/user/${routerUserId}/follower`, config);
      setFollows(res.data);
      console.log(res);
    }
    getFollows();
  }, [routerUserId, token, userId]);

  return (
    <Container>
      <Content>
        {follows ? (
          <>
            {follows.map(user => (
              <div className="card" key={user.id}>
                <div className="avatar">
                  <Link to={`/profile/${user.user.id}`}>
                    <img src={user.user.avatar} alt="" width="100%" />
                  </Link>
                </div>
                <Link to={`/profile/${user.user.id}`}>
                  <p>{user.user.username}</p>
                </Link>
                {/* <button type="button">Follow</button> */}
              </div>
            ))}
          </>
        ) : (
          <h3>You don`&apos;`t have follows</h3>
        )}
      </Content>
    </Container>
  );
}
