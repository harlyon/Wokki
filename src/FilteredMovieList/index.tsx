import { useEffect } from 'react';
import MovieList from '../MovieList';
import useQueryParams from '../shared/useQueryParams';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';
import { searchMovies } from '../shared/api';

import PageLoader from '../PageLoader';
import PageError from '../PageError';
import NothingFound from '../NothingFound';

const FilteredMovieList = () => {
  const query = useQueryParams();
  const history = useHistory();
  const searchTerm = query.get('query') ?? '';
  const { isLoading, data } = useQuery(
    ['search', searchTerm],
    () => searchMovies(searchTerm),
    // Prevent query when search field is empty
    { enabled: searchTerm !== '' },
  );
  useEffect(() => {
    if (!searchTerm) {
      history.push('/');
    }
  }, [searchTerm, history]);

  if (isLoading) {
    return <PageLoader />;
  } else if (data && data.movies.length) {
    return <MovieList movies={data.movies} />;
  } else if (data) {
    return <NothingFound />
  } else {
    return <PageError />;
  }
};

export default FilteredMovieList;
