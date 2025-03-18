import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000", // Ensure this matches your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
// Compare this snippet from Frontend_Water_supply/src/config/axiosConfig.js:   