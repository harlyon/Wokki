export type Genre = string;

export type MovieEntry = {
  backdrop: string;
  cast: string[];
  classification: string;
  director: string | string[];
  genres: Genre[];
  id: string;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  slug: string;
  title: string;
};
export type MovieList = {
  movies: MovieEntry[];
};
