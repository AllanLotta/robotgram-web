import React from 'react';
import { Container } from './styles';
import PostList from '../../components/PostList';
import Recomended from '../../components/Recomended';

function Main() {
  return (
    <Container>
      <Recomended />
      <PostList />
    </Container>
  );
}

export default Main;
