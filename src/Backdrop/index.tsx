import { useQuery } from 'react-query';
import { fetchMovies } from '../shared/api';
import useSlug from '../shared/useSlug';
import styles from './backdrop.module.scss';

const Backdrop = () => {
  const { data } = useQuery('movies', fetchMovies);
  // Workaround conditional hook call
  const movie = useSlug(data?.movies ?? []);
  if (!data || !movie) return null;
  // Might be a good idea to prevent backdrop loading for small screens
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.backdrop}
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      ></div>
    </div>
  );
};

export default Backdrop;
