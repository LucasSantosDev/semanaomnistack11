import axios from 'axios';

const api = axios.create({
  // URL GERADO NO NGROK
  baseURL: 'http://70f22daa.ngrok.io/'
});

export default api;
