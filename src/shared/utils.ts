import type { Genre, MovieEntry } from './types';

export function uniq<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
export function groupMoviesByGenre(
  movies: MovieEntry[],
): Record<Genre, MovieEntry[]> {
  // Less performant than an imperative solution, but perhaps more readable
  const genres = uniq(movies.flatMap(movie => movie.genres));
  const genreMoviePairs = genres.map(genre => {
    const moviesOfThisGenre = movies.filter(movie =>
      movie.genres.includes(genre),
    );
    return [genre, moviesOfThisGenre] as const;
  });
  return Object.fromEntries(genreMoviePairs);
}
export function sortByName(a: string, b: string) {
  const nameA = a.toUpperCase();
  const nameB = b.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}
export function getYear(d: string) {
  return new Date(d).getFullYear();
}
export function mapRating(rating: number, max: number, newMax: number): number {
  return Math.floor((rating * newMax) / max);
}
export function formatArrayWithComma(arr: string[]): string {
  return arr.join(', ');
}
