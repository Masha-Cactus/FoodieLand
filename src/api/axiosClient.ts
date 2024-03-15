/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:3000/',
  // baseURL: 'https://api.spoonacular.com/recipes/',
  // baseURL: '',
  baseURL: 'http://localhost:8080/',
  headers: {
    // 'Autorization': `Bearer ${key}`,
    AccessControlAllowOrigin: '*',
  },
});

export const client = {
  async get<T>(url: string) {
    const response = await instance.get<T>(url);

    return response.data;
  },

  async post<T>(url: string, data: any) {
    const response = await instance.post<T>(url, data);

    return response.data;
  },

  async put<T>(url: string, data: any) {
    const response = await instance.put<T>(url, data);

    return response.data;
  },

  async delete(url: string) {
    return instance.delete(url);
  },
};
