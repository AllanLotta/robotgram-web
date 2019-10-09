import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import { AuthContext } from '../../AuthContext';
import { ModalContext } from '../../ModalContext';
import { UserContext } from '../../UserContext';
import { FollowContext } from '../../FollowContext';
import api from '../../services/api';

export default function Follows() {
  const [
    modal,
    setModal,
    content,
    setContent,
    routerUserId,
    setRouterUserId,
  ] = useContext(ModalContext);

  const [token, setToken] = useContext(AuthContext);
  const [
    followsCount,
    setFollowsCount,
    followingCount,
    setFollowingCount,
  ] = useContext(FollowContext);
  const [userId] = useContext(UserContext);
  const [follows, setFollows] = useState([]);

  useEffect(() => {
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    async function getFollows() {
      const res = await api.get(`/user/${routerUserId}/follows`, config);
      setFollows(res.data);
      setFollowsCount(res.data.length);
      console.log(res);
    }
    getFollows();
  }, [routerUserId, setFollowsCount, token, userId]);

  return (
    <Container>
      <Content>
        {follows ? (
          <>
            {follows.map(user => (
              <div className="card" key={user.id}>
                <div className="avatar">
                  <Link
                    onClick={() => setModal(!modal)}
                    to={`/profile/${user.userFollowed.id}`}
                  >
                    <img src={user.userFollowed.avatar} alt="" width="100%" />
                  </Link>
                </div>
                <Link
                  onClick={() => setModal(!modal)}
                  to={`/profile/${user.userFollowed.id}`}
                >
                  <p>{user.userFollowed.username}</p>
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
