import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import { AuthContext } from '../../AuthContext';
import { UserContext } from '../../UserContext';
import { ModalContext } from '../../ModalContext';
import { FollowContext } from '../../FollowContext';
import { Container, Content } from './styles';
import api from '../../services/api';

export default function Profile({ match }) {
  const [token, setToken] = useContext(AuthContext);
  const [
    modal,
    setModal,
    content,
    setContent,
    routerUserId,
    setRouterUserId,
  ] = useContext(ModalContext);
  const [
    followsCount,
    setFollowsCount,
    followingCount,
    setFollowingCount,
  ] = useContext(FollowContext);
  const [userId] = useContext(UserContext);
  const [user, setUser] = useState();
  const [follows, setFollows] = useState([]);
  const [following, setFollowing] = useState([]);

  function signOut() {
    setModal(true);
    setContent('logout');
  }
  function callFollows() {
    setModal(true);
    setContent('follows');
  }
  function callFollowing() {
    setModal(true);
    setContent('following');
  }
  useEffect(() => {
    setRouterUserId(match.params.id);
    const config = {
      headers: { Authorization: `bearer ${token}` },
    };
    async function getUser() {
      const res = await api.get(`users/${match.params.id}`, config);
      console.log(res);
      setUser(res.data);
    }
    async function getFollows() {
      const res = await api.get(`/user/${routerUserId}/follows`, config);
      // setFollows(res.data);
      setFollowsCount(res.data.length);
      console.log(res);
    }
    async function getFollowing() {
      const res = await api.get(`/user/${routerUserId}/follower`, config);
      // setFollowing(res.data);
      setFollowingCount(res.data.length);
      console.log(res);
    }
    getFollows();
    getFollowing();
    getUser();
  }, [
    match.params.id,
    routerUserId,
    setFollowingCount,
    setFollowsCount,
    setRouterUserId,
    token,
  ]);
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
                {user.id == userId ? (
                  <>
                    <button type="button">Edit Profile</button>
                    <FaCog onClick={signOut} />
                  </>
                ) : null}
              </div>
              <div className="count">
                <p>
                  <strong>9</strong> posts
                </p>
                <p onClick={callFollows} className="itemCount">
                  <strong>{followsCount}</strong> followers
                </p>
                <p onClick={callFollowing} className="itemCount">
                  <strong>{followingCount}</strong> following
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
