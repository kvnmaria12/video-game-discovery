import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatFormIconLists from './PlatFormIconLists';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { background_image, name } = game;
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={background_image} height='200px' />
      <CardBody>
        <Heading fontSize='2xl'>{name}</Heading>
        <PlatFormIconLists
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
