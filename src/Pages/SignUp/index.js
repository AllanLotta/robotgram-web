import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import History from '../../services/history';
import api from '../../services/api';

function SignUp() {
  async function handleSubmit(data) {
    console.log(data);
    const res = await api.post('/users', data);
    console.log(res);
    console.log('To dentro');
    History.push('/');
  }
  return (
    <>
      <div className="auth-form">
        <p className="robotgram">Robotgram</p>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Email" name="email" />
          <Input type="text" placeholder="Full Name" name="fullname" />
          <Input type="text" placeholder="Username" name="username" />
          <Input type="password" placeholder="Password" name="password" />

          <button type="submit">Send</button>
        </Form>
      </div>
      <div className="auth-actions">
        <p>Have an account?</p> <Link to="/">Sign In</Link>
      </div>
    </>
  );
}

export default SignUp;
