import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, isLoading, error } = useGames();

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
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding='10px'
      >
        {games.map((game) => (
          //   <li key={game.id}>{game.name}</li>
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
