import axios from 'axios';

const baseURL = process.env.VITE_PUBLIC_API_URL || 'http://localhost:3000/api';

export function createAPI() {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const api = createAPI();