import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

const api = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, { email, password });
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Login failed');
    }
  },

  getUsers: async (page = 1) => {
    try {
      const response = await axios.get(`${BASE_URL}/users?page=${page}`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Failed to fetch users');
    }
  },

  updateUser: async (id, userData) => {
    try {
      const response = await axios.put(`${BASE_URL}/users/${id}`, userData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Update failed');
    }
  },

  deleteUser: async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Delete failed');
    }
  }
};

export default api;