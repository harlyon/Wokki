import type { MovieList } from './types';

const requestInit = {
  headers: {
    Authorization: 'Bearer Wookie2019',
  },
};

export const fetchMovies = () =>
  fetch(
    'https://wookie.codesubmit.io/movies',
    requestInit,
  ).then(res => res.json() as Promise<MovieList>);

export const searchMovies = (query: string) =>
  fetch(
    'https://wookie.codesubmit.io/movies?q=' + query,
    requestInit,
  ).then(res => res.json() as Promise<MovieList>);
