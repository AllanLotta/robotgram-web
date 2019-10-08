import React, { useState, useEffect } from 'react';
import Chance from 'chance';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import api from '../../services/api';

function SignUp({ history }) {
  const [urlBaseAvatar] = useState('https://gravatar.com/avatar/');
  const [avatarOptions] = useState('?s=400&d=robohash&r=x');

  async function handleSubmit(data) {
    const random = new Chance();
    const avatarCode = random.string({ pool: 'abcde' });
    const urlMounted = urlBaseAvatar + avatarCode + avatarOptions;
    console.log(urlBaseAvatar);
    console.log(avatarCode);
    console.log(avatarOptions);
    const user = {
      email: data.email,
      fullname: data.fullname,
      username: data.username,
      password: data.password,
      avatar: urlMounted,
    };
    try {
      const res = await api.post('/users', user);
      console.log(user);
      history.push('/');
      return data;
    } catch (error) {
      console.log(error);
      return error;
    }
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
