import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Container, Content } from './styles';
import { ModalContext } from '../../ModalContext';

export default function Modal() {
  const [modal, setModal, content, setContent] = useContext(ModalContext);
  function renderContent() {
    if (content == 'logout') {
      return <h1>Logout</h1>;
    }
    if (content == 'follows') {
      return <h1>Follows</h1>;
    }
    if (content == 'following') {
      return <h1>Followin</h1>;
    }
  }
  return (
    <Container>
      <Content>
        <div className="header">
          <FaTimes className="close" onClick={e => setModal(!modal)} />
        </div>
        <div className="content">{renderContent()}</div>
      </Content>
    </Container>
  );
}
