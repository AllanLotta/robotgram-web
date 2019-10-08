import React from 'react';
import { Container } from './styles';
import PostList from '../../components/PostList';
import Recomended from '../../components/Recomended';
import CreatePost from '../../components/CreatePost';

function Main() {
  return (
    <>
      <Container>
        <CreatePost />
        <Recomended />
        <PostList />
      </Container>
    </>
  );
}

export default Main;
