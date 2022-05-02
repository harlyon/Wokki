import { Route, Switch } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchMovies } from '../shared/api';
import { groupMoviesByGenre } from '../shared/utils';
import Header from '../Header';
import Wrapper from '../Wrapper';
import MovieGroup from '../MovieGroup';
import FilteredMovieList from '../FilteredMovieList';
import MovieFromSlug from '../MovieFromSlug';
import Backdrop from '../Backdrop';

import PageLoader from '../PageLoader';
import PageError from '../PageError';
import PageNotFound from '../PageNotFound';

const App = () => {
  const { isLoading, data } = useQuery('movies', fetchMovies);

  if (isLoading) return <PageLoader />;
  if (!data) return <PageError />;

  const groupedMovies = groupMoviesByGenre(data.movies);

  return (
    <Wrapper>
      <Header />
      <Switch>
        <Route exact path="/">
          <MovieGroup groupedMovies={groupedMovies} />
        </Route>
        <Route path="/search">
          <FilteredMovieList />
        </Route>
        <Route path="/details">
          <MovieFromSlug movies={data.movies} />
          <Backdrop />
        </Route>
        <Route path="">
          <PageNotFound />
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default App;
