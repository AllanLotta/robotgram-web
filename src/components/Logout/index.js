import React, { useContext } from 'react';

import { Container, Content } from './styles';
import { AuthContext } from '../../AuthContext';
import { ModalContext } from '../../ModalContext';

export default function Logout() {
  const [token, setToken] = useContext(AuthContext);
  const [modal, setModal] = useContext(ModalContext);
  function Clear() {
    setToken(null);
    setModal(false);
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
