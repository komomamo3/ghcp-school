import ja from './ja.json';
import en from './en.json';

export type Locale = 'ja' | 'en';

export const locales: Locale[] = ['ja', 'en'];
export const defaultLocale: Locale = 'ja';

const dictionaries = { ja, en } as const;

export type Dict = typeof ja;

export function useTranslations(locale: Locale): Dict {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

/**
 * Build a locale-aware path. Astro adds `base` automatically when using
 * relative-to-root paths in `<a href>`, but we keep paths starting with `/`.
 */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  // Strip leading slash for join
  return `/${locale}${clean === '/' ? '/' : clean}`;
}

/**
 * Given the current pathname (without `base`), return the equivalent path in
 * the other locale.
 */
export function alternateLocalePath(currentPath: string, currentLocale: Locale): string {
  // Normalize: ensure leading slash, strip trailing slash for matching except root
  const normalized = currentPath.replace(/\/+$/, '') || '/';
  const target: Locale = currentLocale === 'ja' ? 'en' : 'ja';

  let bare = normalized;
  if (currentLocale === 'en') {
    bare = normalized.replace(/^\/en(\/|$)/, '/');
    if (bare === '') bare = '/';
  }

  if (target === 'ja') return bare === '/' ? '/' : `${bare}/`;
  return bare === '/' ? '/en/' : `/en${bare}/`;
}

export function getLocaleFromPath(pathname: string): Locale {
  return /^\/en(\/|$)/.test(pathname) ? 'en' : 'ja';
}
