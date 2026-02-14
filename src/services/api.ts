import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.zeph.app', // Mock base URL
});

export default api;
