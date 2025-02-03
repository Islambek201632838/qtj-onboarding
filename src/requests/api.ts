import axios from 'axios';
import { getAccessToken, removeAccessToken, getRefreshToken, setAccessToken } from './token.request';

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    return response.config.responseType === 'blob' ? response : response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 || error.response?.status === 403) {
      if (!originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const refreshToken = getRefreshToken();
          if (refreshToken) {
            const response = await axios.post('/api/auth/refresh', { refreshToken });
            const { accessToken } = response.data;

            setAccessToken(accessToken);
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;

            return api(originalRequest);
          }
        } catch (refreshError) {
          removeAccessToken();
          window.location.href = `/auth/sign-in?returnUrl=${window.location.pathname}`;
          return Promise.reject(refreshError);
        }
      }
    }

    return Promise.reject(error);
  },
);

export default api;