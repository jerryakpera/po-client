import axios from 'axios';

const apiEndpoint = import.meta.env.PROD
  ? import.meta.env.VITE_API_ENDPOINT_PROD
  : import.meta.env.VITE_API_ENDPOINT;

const api = axios.create({
  baseURL: apiEndpoint,
});

api.interceptors.response.use(
  (response) => {
    if (response?.status === 200 || response.data) {
      const { data } = response;

      return {
        ...data,
        status: 200,
      };
    }

    return response;
  },

  (error) => {
    const { response, message } = error;
    const { data } = response;

    if (message && !response) {
      return Promise.reject(message);
    }

    return Promise.reject(data);
  }
);

export { api };
