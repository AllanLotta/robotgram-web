import React from 'react';

import { Container, Card } from './styles';

export default function PostList() {
  return (
    <Container>
      <Card>
        <div className="header">
          <img
            src="https://api.adorable.io/avatars/100/abott@adorable.png"
            alt="avatar"
          />
        </div>
        <div className="image">
          <img
            src="https://instagram.fmvf5-1.fna.fbcdn.net/vp/9ad683c4136458de39d49eb9eb8035d3/5E290D95/t51.2885-15/e35/71541461_2259166837516006_2419876865501821200_n.jpg?_nc_ht=instagram.fmvf5-1.fna.fbcdn.net&_nc_cat=110&se=7"
            alt=""
            width="100%"
          />
        </div>
        <div className="description">
          <p>allan_lotta</p> <p>description here</p>
        </div>
      </Card>
    </Container>
  );
}
