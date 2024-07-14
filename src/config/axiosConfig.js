import axios from 'axios';
import { Notify } from 'quasar';
import { useRouter } from 'vue-router';

const router = useRouter();

const axiosInstance = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:8000', // ajuste a URL da API conforme necessário
  withCredentials: true, // para enviar cookies
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('csrf_token');
    if (token) {
      config.headers['X-CSRF-TOKEN'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.config.url.includes('/login')) {
      const token = response.headers['x-csrf-token'];
      if (token) {
        localStorage.setItem('csrf_token', token);
      }
    }
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      Notify.create({
        type: 'negative',
        message: 'Sua sessão expirou. Faça login novamente.',
      });
      router.push({ name: 'login' });
    } else if (error.response.status === 419) {
      Notify.create({
        type: 'negative',
        message: 'O token CSRF expirou. Recarregue a página.',
      });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
