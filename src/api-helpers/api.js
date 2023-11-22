import axios from 'axios';

const api = axios.create({
  baseURL: 'https://travel-backend-shv1.onrender.com',
  withCredentials: true,
  //baseURL: 'https://travel-backend-shv1.onrender.com'
});

export default api;