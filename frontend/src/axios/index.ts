import axios from 'axios';

const getBaseUrl = () => {
  return 'http://localhost:5000';
}

export const instance = axios.create({
  baseURL: getBaseUrl()
});

export { LinksApi } from './LinksApi';
