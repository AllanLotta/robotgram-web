import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../Pages/_layouts/auth';
import DefaultLayout from '../Pages/_layouts/default';

import { AuthContext } from '../AuthContext';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const [signed, setSigned] = useState(true);
  const [token] = useContext(AuthContext);
  useEffect(() => {
    if (token != null) {
      setSigned(token);
    }
    if (token == null) {
      setSigned(localStorage.getItem('token'));
    }
    console.log('TOKEN', token);
  }, [token]);
  // const token = localStorage.getItem('token');

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
