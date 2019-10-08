import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';
import AuthProvider from './AuthContext';
import ModalProvider from './ModalContext';

function App() {
  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <Router history={history}>
            <Routes />
            <GlobalStyle />
          </Router>
        </ModalProvider>
      </AuthProvider>
    </>
  );
}

export default App;
