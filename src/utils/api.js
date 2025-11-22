import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-backend-api.com/api', // Replace with actual backend URL
  withCredentials: true,
});

export const login = async (credentials) => (await api.post('/auth/login', credentials)).data;
export const signup = async (credentials) => (await api.post('/auth/signup', credentials)).data;
export const logout = async () => await api.post('/auth/logout');
export const getCurrentUser = async () => (await api.get('/auth/user')).data;
export const getInventory = async () => (await api.get('/inventory')).data;
export const addItem = async (item) => (await api.post('/inventory', item)).data;
export const updateItem = async (id, updates) => (await api.put(`/inventory/${id}`, updates)).data;
export const deleteItem = async (id) => await api.delete(`/inventory/${id}`);