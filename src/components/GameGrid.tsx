import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCards from './GameCards';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const { isLoading, error } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error && (
        <Text color='red' fontSize='large'>
          {error}
        </Text>
      )}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding='10px'
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        <GameCards />
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
