// src/axiosConfig.js
import axios from "axios";
import { BASE_URL } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // This ensures cookies are included in requests
});

export default instance;
