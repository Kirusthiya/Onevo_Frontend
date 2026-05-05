import axios from 'axios';
import { errorInterceptor } from './interceptors/error.interceptor';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

apiClient.interceptors.response.use(
  (response) => response,
  errorInterceptor
);

export default apiClient;
