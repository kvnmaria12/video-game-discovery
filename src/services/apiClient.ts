import axios, { AxiosError } from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_GAME_API_KEY,
  },
});

export { AxiosError };
