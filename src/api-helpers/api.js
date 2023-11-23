import axios from 'axios';

const api = axios.create({
  baseURL: 'https://travel-backend-shv1.onrender.com',
  withCredentials: true,
});

export default api;