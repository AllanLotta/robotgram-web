import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';
import Header from '../../../components/Header';
import Modal from '../../../components/Modal';
import { ModalContext } from '../../../ModalContext';

export default function DefaultLayout({ children }) {
  const [modal, setModal] = useContext(ModalContext);

  return (
    <Wrapper>
      {modal ? <Modal /> : null}
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
