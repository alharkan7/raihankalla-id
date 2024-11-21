import redirectData from '../../public/redirects.json';

interface Redirect {
  title: string;
  long: string;
  short: string;
}

export function findRedirect(slug: string | undefined): Redirect | undefined {
  if (!slug) return undefined;

  // Debug logging
  console.log('All Redirects:', redirectData);
  console.log('Current Slug:', slug);

  // Find redirect matching the slug
  const redirect = Object.values(redirectData).find(r =>
    (r as any).short === `/${slug}` || (r as any).short.slice(1) === slug
  );

  // Debug logging for redirect matching
  console.log('Matched Redirect:', redirect);
  return redirect as Redirect | undefined;
}

export function getAllRedirects(): Record<string, string> {
  interface RedirectDataRow {
    short: string;
    long: string;
  }

  const redirectMap: Record<string, string> = {};

  (Object.values(redirectData) as RedirectDataRow[]).forEach(redirect => {
    redirectMap[redirect.short] = redirect.long;
  });

  return redirectMap;
}