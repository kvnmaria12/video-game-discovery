import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

const GameGrid = () => {
  const [games, isLoading, error] = useGames();

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
