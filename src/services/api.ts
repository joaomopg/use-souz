import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000', // ← Back-end rodando aqui
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@use-souz:token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});