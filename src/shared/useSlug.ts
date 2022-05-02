import type { MovieEntry } from './types';
import { useRouteMatch } from 'react-router-dom';

export default function useSlug(movies: MovieEntry[]): MovieEntry | null {
  const props = useRouteMatch<{ slug?: string }>('/details/:slug');
  if (!props) return null;

  const slug = props.params.slug;
  const movie = movies.find(movie => movie.slug === slug);
  return movie ?? null;
}
