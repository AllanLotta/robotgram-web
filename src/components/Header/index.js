import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <div className="logo">
          <p>Robotogram</p>
        </div>
        <div className="actions">
          <FaUser />
        </div>
      </Content>
    </Container>
  );
}
