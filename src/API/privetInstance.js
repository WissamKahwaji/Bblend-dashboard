import axios from "axios";
import { baseURL } from "./baseURL";

const privetInstance = axios.create({ baseURL });
privetInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
privetInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response.status === 401) {
      window.location.replace("/");
    }
    return Promise.reject(error);
  }
);
export default privetInstance;
