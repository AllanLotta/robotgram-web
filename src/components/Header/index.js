import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { Container, Content } from './styles';
import { UserContext } from '../../UserContext';

export default function Header() {
  const [userId] = useContext(UserContext);

  return (
    <Container>
      <Content>
        <div className="logo">
          <p>Robotgram</p>
        </div>
        <div className="actions">
          <Link to={`/profile/${userId}`}>
            <FaUser />
          </Link>
        </div>
      </Content>
    </Container>
  );
}
