import axios from "axios";

const api = axios.create({
  baseURL: "https://travel-explorer-api-v8zt.onrender.com"
});

export default api;