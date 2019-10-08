import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import { AuthContext } from '../../AuthContext';

export default function Follows() {
  const [token, setToken] = useContext(AuthContext);

  return (
    <Container>
      <Content>
        <div className="card">
          <div className="avatar">
            <Link to={`/profile/${27}`}>
              <img
                src="https://gravatar.com/avatar/cdbed?s=400&d=robohash&r=x"
                alt=""
                width="100%"
              />
            </Link>
          </div>
          <Link to={`/profile/${27}`}>
            <p>Allan_Lotta</p>
          </Link>
          <button type="button">Follow</button>
        </div>
      </Content>
    </Container>
  );
}
