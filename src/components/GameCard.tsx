import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatFormIconLists from './PlatFormIconLists';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../hooks/image-url';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { background_image, name } = game;
  return (
    <Card width='300px' borderRadius={10} overflow='hidden'>
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <Heading fontSize='2xl'>{name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatFormIconLists
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
