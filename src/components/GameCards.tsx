import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';

const GameCards = () => {
  const { games } = useGames();

  console.log(games);

  return (
    <>
      {games.map((game) => (
        //   <li key={game.id}>{game.name}</li>
        <GameCardContainer>
          <GameCard game={game} key={game.id} />
        </GameCardContainer>
      ))}
    </>
  );
};

export default GameCards;
