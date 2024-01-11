import { FetchGamesResponse, Game } from '../components/GameGrid';
import apiClient, { AxiosError } from '../services/apiClient';
import { useEffect, useState } from 'react';

const useFetch = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => setError((err as AxiosError).message));
  }, []);

  return [games, isLoading, error] as const;
};

export default useFetch;
