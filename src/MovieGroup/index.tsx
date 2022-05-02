import type { Genre, MovieEntry } from '../shared/types';
import styles from './movieGroup.module.scss';
import { sortByName } from '../shared/utils';
import MovieList from '../MovieList';

type Props = {
  groupedMovies: Record<Genre, MovieEntry[]>;
};

const MovieGroup = ({ groupedMovies }: Props) => {
  return (
    <div className={styles.wrapper}>
      {Object.entries(groupedMovies)
        .sort(([genre1], [genre2]) => sortByName(genre1, genre2))
        .map(([genre, movies]) => (
          <div key={genre}>
            <h3 className={styles.genreHeader}>{genre}</h3>
            <MovieList movies={movies} />
          </div>
        ))}
    </div>
  );
};

export default MovieGroup;
