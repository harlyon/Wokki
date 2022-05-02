import type { MovieList } from './types';

export const mockResponse: MovieList = {
  movies: [
    {
      backdrop:
        'https://wookie.codesubmit.io/static/backdrops/b7e23588-8d87-402f-8f13-87cbf8e51812.jpg',
      cast: ['Benedict Cumberbatch', 'Keira Knightley', 'Matthew Goode'],
      classification: '13+',
      director: 'Morten Tyldum',
      genres: ['Biography', 'Drama', 'Thriller'],
      id: 'b7e23588-8d87-402f-8f13-87cbf8e51812',
      imdb_rating: 8.0,
      length: '1h 54min',
      overview:
        "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.",
      poster:
        'https://wookie.codesubmit.io/static/posters/b7e23588-8d87-402f-8f13-87cbf8e51812.jpg',
      released_on: '2014-11-14T00:00:00',
      slug: 'the-imitation-game-2014',
      title: 'The Imitation Game',
    },
  ],
} as MovieList;
