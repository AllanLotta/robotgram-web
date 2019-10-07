import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import api from '../../services/api';
import { AuthContext } from '../../AuthContext';

function SignIn() {
  const [token, setToken] = useContext(AuthContext);

  async function handleSubmit(data) {
    console.log(data);

    const res = await api.post('/sessions', data);
    console.log(res);

    setToken(res.data.authorization.token);
  }
  return (
    <>
      <div className="auth-form">
        <p className="robotgram">Robotgram</p>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Username" name="username" />
          <Input type="password" placeholder="Password" name="password" />

          <button type="submit">Log In</button>
        </Form>
      </div>
      <div className="auth-actions">
        <p>Don&apos;t have an account?</p> <Link to="/register">Sign Up</Link>
      </div>
    </>
  );
}

export default SignIn;
