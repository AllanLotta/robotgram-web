import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Main from '../Pages/Main';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';

import Profile from '../Pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/home" component={Main} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
