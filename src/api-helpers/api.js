import axios from 'axios';

const api = axios.create({
  baseURL: 'https://travel-backend-shv1.onrender.com',
  // baseURL: 'https://backend.dinhub.ro',
  withCredentials: true,
});

export default api;