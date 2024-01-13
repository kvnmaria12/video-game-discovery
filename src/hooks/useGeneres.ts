import useData from './useData';

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => useData<Genre>('/genres');

// const useGenres = () => {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState<string>('');
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   useEffect(() => {
//     setIsLoading(true);
//     apiClient
//       .get<FetchGenresResponse>('/genres')
//       .then((res) => {
//         setGenres(res.data.results);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setIsLoading(false);
//         setError((err as AxiosError).message);
//       });
//   }, []);

//   return { genres, isLoading, error } as const;
// };

export default useGenres;
