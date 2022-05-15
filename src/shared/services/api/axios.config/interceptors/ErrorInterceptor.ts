import { AxiosError } from 'axios';

export const errorInterceptor = (error: AxiosError) => {
  if (error.message === 'Network Error') {
    return Promise.reject(new Error('Erro de conexão'));
  }

  if (error.response?.status === 404) {
    console.log(error);
    return Promise.reject(error.response?.data);
  }

  console.log(error);
  return Promise.reject(error);
};
