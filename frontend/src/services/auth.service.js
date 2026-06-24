import api from '../utils/api';

const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

const logout = async () => {
  try {
    await api.post('/auth/logout');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return { message: 'Logout successful' };
  } catch (error) {
    // Even if the backend call fails, we should still clear client-side data for a better UX.
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    throw new Error(error.response?.data?.message || 'Logout failed');
  }
};

const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

const getToken = () => {
  return localStorage.getItem('token');
};

const AuthService = {
  login,
  logout,
  getCurrentUser,
  getToken,
};

export default AuthService;