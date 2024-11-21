import * as redirects from '../data/redirects.json';

interface Redirect {
  title: string;
  long: string;
  short: string;
}

export function findRedirect(slug: string): Redirect | undefined {
  return Object.values(redirects).find(r => r.short === `/${slug}`);
}

export function getAllRedirects(): Record<string, string> {
  const redirectMap: Record<string, string> = {};
  
  Object.values(redirects).forEach(redirect => {
    redirectMap[redirect.short] = redirect.long;
  });
  
  return redirectMap;
}

