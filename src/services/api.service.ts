import axios, { AxiosResponse } from 'axios';

const ApiService = axios.create({
  baseURL: `/api/`,
  responseType: 'json',
});

ApiService.interceptors.response.use(
  (response: AxiosResponse): any => response.data,
  (error: any) => {
    console.log(error);

    throw error;
  }
);

const kitsuService = axios.create({
  baseURL: 'https://kitsu.io/api/edge/',
  responseType: 'json',
});

kitsuService.interceptors.response.use(
  (response: AxiosResponse): any => response.data,
  (error: any) => {
    throw error;
  }
);

export { ApiService, kitsuService };
