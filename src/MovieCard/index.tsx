import Stars from './Stars';
import type { MovieEntry } from '../shared/types';
import { getYear, mapRating, formatArrayWithComma } from '../shared/utils';
import styles from './movieCard.module.scss';

type Props = {
  movie: MovieEntry;
};
const MovieCard = ({ movie }: Props) => {
  const rating = mapRating(movie.imdb_rating, 10, 5);
  const directors = Array.isArray(movie.director)
    ? movie.director
    : [movie.director];
  const formattedDirectors = formatArrayWithComma(directors);
  return (
    <div className={styles.wrapper} style={{}}>
      <img className={styles.poster} src={movie.poster} alt={movie.title}></img>

      <div className={styles.textColumn}>
        <div className={styles.titleRating}>
          <h2 className={styles.title}>
            {movie.title} (IMDb: {movie.imdb_rating})
          </h2>
          <Stars rating={rating} />
        </div>
        <div>
          {getYear(movie.released_on)} | {movie.length} | {formattedDirectors}
        </div>
        <div>cast: {formatArrayWithComma(movie.cast)}</div>
        <div className={styles.description}>{movie.overview}</div>
      </div>
    </div>
  );
};

export default MovieCard;
