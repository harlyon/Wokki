import type { MovieEntry } from '../shared/types';
import MovieSmallPreview from './MovieSmallPreview';
import styles from './movieList.module.scss';

type Props = {
  movies: MovieEntry[];
};

const MovieList = ({ movies }: Props) => {
  return (
    <div className={styles.wrapper}>
      {movies.map(movie => (
        <MovieSmallPreview key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
