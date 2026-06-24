import axios from 'axios';
import AuthService from '../services/auth.service';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Your backend API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = AuthService.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;