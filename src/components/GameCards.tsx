import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameCards = () => {
  const { games } = useGames();

  console.log(games);

  return (
    <>
      {games.map((game) => (
        //   <li key={game.id}>{game.name}</li>
        <GameCard game={game} key={game.id} />
      ))}
    </>
  );
};

export default GameCards;
