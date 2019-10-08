import React, { useContext } from 'react';

import { Container, Content } from './styles';
import { AuthContext } from '../../AuthContext';

export default function Follows() {
  const [token, setToken] = useContext(AuthContext);

  return (
    <Container>
      <Content>
        <div className="card">
          <div className="avatar">
            <img src="" alt="" />
          </div>
          <p>Name</p>
          <button type="button">Follow</button>
        </div>
      </Content>
    </Container>
  );
}
