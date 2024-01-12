import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCards from './GameCards';

const GameGrid = () => {
  const { isLoading, error } = useGames();

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
        <GameCards />
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
