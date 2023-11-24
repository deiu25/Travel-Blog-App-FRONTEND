import axios from 'axios';

const api = axios.create({
  baseURL: 'http://backend.dinhub.ro',
  withCredentials: true,
});

export default api;