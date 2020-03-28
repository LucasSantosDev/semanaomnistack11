import axios from "axios";

const api = axios.create({
  // URL GERADO NO NGROK
  baseURL: "http://24853486.ngrok.io/"
});

export default api;
