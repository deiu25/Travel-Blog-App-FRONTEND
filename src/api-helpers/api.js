import axios from 'axios';

const api = axios.create({
  baseURL: 'https://travel.syntaxseeker.com',
  withCredentials: true,
});

export default api;