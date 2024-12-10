import type { AxiosInstance } from "axios";
import axios from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://cybergarden.leganyst.ru",
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});
