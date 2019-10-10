import axios from 'axios';

const api = axios.create({
  baseURL: 'https://robotgram-back.herokuapp.com',
});

export default api;
