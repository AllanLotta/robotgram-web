import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';
import AuthProvider from './AuthContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
