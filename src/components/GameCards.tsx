import { Game } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';

interface Props {
  data: Game[];
}

const GameCards = ({ data }: Props) => {
  // const { data } = useGames();

  return (
    <>
      {data.map((game) => (
        //   <li key={game.id}>{game.name}</li>
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </>
  );
};

export default GameCards;
