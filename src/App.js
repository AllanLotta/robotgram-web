import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';
import AuthProvider from './AuthContext';
import ModalProvider from './ModalContext';
import UserProvider from './UserContext';
import FileProvider from './FileContext';
import FollowProvider from './FollowContext';

function App() {
  return (
    <>
      <AuthProvider>
        <ModalProvider>
          <UserProvider>
            <FileProvider>
              <FollowProvider>
                <Router history={history}>
                  <Routes />
                  <GlobalStyle />
                </Router>
              </FollowProvider>
            </FileProvider>
          </UserProvider>
        </ModalProvider>
      </AuthProvider>
    </>
  );
}

export default App;
