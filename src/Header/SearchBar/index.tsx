import { useState } from 'react';
import styles from './searchBar.module.scss';
import { useHistory } from 'react-router-dom';
import { useDebouncedCallback } from 'use-debounce';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const history = useHistory();
  function _historyPush(value: string) {
    if (!value) {
      history.push('');
    } else {
      history.push(`/search?query=${value}`);
    }
  }
  const historyPush = useDebouncedCallback(_historyPush, 500);

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.searchButton}
        onClick={() => historyPush(value)}
      ></button>
      <input
        type="search"
        value={value}
        placeholder="Search"
        aria-label="Search through movies"
        onChange={({ currentTarget: { value } }) => {
          setValue(value);
          historyPush(value);
        }}
        onKeyDown={({ key }) => key === 'Enter' && historyPush(value)}
      />
    </div>
  );
};

export default SearchBar;
