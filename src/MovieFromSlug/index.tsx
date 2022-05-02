import type { MovieEntry } from '../shared/types';
import MovieCard from '../MovieCard';
import NothingFound from '../NothingFound';
import useSlug from '../shared/useSlug';

type Props = {
  movies: MovieEntry[];
};

// It is also possible to reuse react-query call to get a list of movies
// like it is done in a Backdrop component
const MovieFromSlug = ({ movies }: Props) => {
  const movie = useSlug(movies);
  if (!movie) return <NothingFound />;

  return <MovieCard movie={movie} />;
};

export default MovieFromSlug;
