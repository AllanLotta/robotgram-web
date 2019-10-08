import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';
import AuthProvider from './AuthContext';
import ModalProvider from './ModalContext';
import UserProvider from './UserContext';

function App() {
  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <UserProvider>
            <Router history={history}>
              <Routes />
              <GlobalStyle />
            </Router>
          </UserProvider>
        </ModalProvider>
      </AuthProvider>
    </>
  );
}

export default App;
