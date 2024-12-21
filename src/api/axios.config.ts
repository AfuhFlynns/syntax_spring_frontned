import axios from "axios";
import { baseUrl } from "../utils/constants/constants";

export default axios.create({
  baseURL: baseUrl, // Configure axios to wend cookies and more
  withCredentials: true,
});

export const protectedAxios = axios.create({
  baseURL: baseUrl,
  withCredentials: true, // Configure axios to wend cookies and more
});
