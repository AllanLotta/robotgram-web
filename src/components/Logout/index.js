import React, { useContext } from 'react';

import { Container, Content } from './styles';
import { AuthContext } from '../../AuthContext';

export default function Logout() {
  const [token, setToken] = useContext(AuthContext);
  function Clear() {
    setToken(null);
    localStorage.clear();
  }

  return (
    <Container>
      <Content>
        <button type="button" onClick={Clear}>
          Log Out
        </button>
      </Content>
    </Container>
  );
}
