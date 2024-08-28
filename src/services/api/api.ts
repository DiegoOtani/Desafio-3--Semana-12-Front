import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

export function createAPI() {
  return axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const api = createAPI();