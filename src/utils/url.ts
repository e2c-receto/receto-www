/** Prefix a path with the Astro base URL (handles both `/` and `/receto-www/`). */
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function url(path: string): string {
  return base + path.replace(/^\//, '');
}
