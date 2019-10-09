import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Container, Content } from './styles';
import { ModalContext } from '../../ModalContext';
import Logout from '../Logout';
import Follows from '../Follows';
import Following from '../Following';

export default function Modal() {
  const [modal, setModal, content, setContent] = useContext(ModalContext);
  function renderContent() {
    if (content == 'logout') {
      return <Logout />;
    }
    if (content == 'follows') {
      return <Follows />;
    }
    if (content == 'following') {
      return <Following />;
    }
    return null;
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
