import type { MovieEntry } from '../../shared/types';
import { Link } from 'react-router-dom';
import styles from './movieSmallPreview.module.scss';

type Props = {
  movie: MovieEntry;
  width?: number;
};

const MovieSmallPreview = ({ movie, width = 200 }: Props) => {
  return (
    <Link
      className={styles.wrapper}
      key={movie.id}
      to={`details/${movie.slug}`}
    >
      <img width={width} src={movie.poster} alt={movie.title}></img>
    </Link>
  );
};

export default MovieSmallPreview;
