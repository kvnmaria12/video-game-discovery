import useData from '../hooks/useData';
import { Genre } from '../hooks/useGeneres';

const GenreList = () => {
  const { data } = useData<Genre>('/genres');

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
