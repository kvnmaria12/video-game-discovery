import { useEffect, useState } from 'react';
import apiClient, { AxiosError } from '../services/apiClient';
import { Text } from '@chakra-ui/react';
import useFetch from '../hooks/useFetch';

export interface Game {
  id: number;
  name: string;
}

export interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, isLoading, error] = useFetch();

  //   const [games, setGames] = useState<Game[]>([]);
  //   const [error, setError] = useState('');

  //   useEffect(() => {
  //     apiClient
  //       .get<FetchGamesResponse>('/games')
  //       .then((res) => {
  //         setGames(res.data.results);
  //       })
  //       .catch((err) => {
  //         setError((err as AxiosError).message);
  //       });
  //   }, []);

  return (
    <>
      {error && (
        <Text color='red' fontSize='large'>
          {error}
        </Text>
      )}
      {isLoading && (
        <Text color='blue' fontSize='xx-large'>
          Loading...
        </Text>
      )}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
