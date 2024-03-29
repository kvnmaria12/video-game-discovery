import { GameQuery } from '../App';
import useData from './useData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  // selectedGenre: Genre | null,
  // selectedPlatform: Platform | null
  gameQuery: GameQuery
) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    // [gameQuery.genre?.id, gameQuery.platform?.id]
    [gameQuery]
  );

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState<string>('');
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   useEffect(() => {
//     setIsLoading(true);
//     apiClient
//       .get<FetchGamesResponse>('/games')
//       .then((res) => {
//         setGames(res.data.results);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setIsLoading(false);
//         setError((err as AxiosError).message);
//       });
//   }, []);

//   return { games, isLoading, error } as const;
// };

export default useGames;
