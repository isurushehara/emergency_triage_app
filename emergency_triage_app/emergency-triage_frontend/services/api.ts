import axios from 'axios';

const API = axios.create({
  baseURL: 'http://10.66.155.10:5000/api',
});

export default API;