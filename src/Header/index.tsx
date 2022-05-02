import SearchBar from './SearchBar';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <h1>Wookie<br />Movies</h1>
      </Link>
      <SearchBar />
    </div>
  );
};

export default Header;
