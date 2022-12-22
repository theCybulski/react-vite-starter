import axios, { AxiosResponse } from 'axios';
import humps from 'humps';

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-type': 'application/json',
    accept: 'application/json',
  },
});

httpClient.interceptors.response.use((response: AxiosResponse) => {
  if (response.data && response.headers['content-type'] === 'application/json') {
    response.data = humps.camelizeKeys(response.data);
  }

  return response;
});
