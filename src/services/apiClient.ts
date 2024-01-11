import axios, { AxiosError } from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'b353715787b04cbd8056cbfd90ef2cf3',
  },
});

export { AxiosError };
