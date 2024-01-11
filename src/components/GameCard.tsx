import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';

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
      </CardBody>
    </Card>
  );
};

export default GameCard;
