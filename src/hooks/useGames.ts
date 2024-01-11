import { CanceledError } from 'axios';
import apiClient, { AxiosError } from '../services/apiClient';
import { useEffect, useState } from 'react';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const controller = new AbortController();

  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError((err as AxiosError).message);
      });
  }, []);

  return { games, isLoading, error } as const;
};

export default useGames;
