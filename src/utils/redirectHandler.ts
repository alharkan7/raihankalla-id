import redirectData from '../../vercel.json';

interface Redirect {
  source: string;
  destination: string;
  permanent: boolean;
}

export function findRedirect(slug: string | undefined): Redirect | undefined {
  if (!slug) return undefined;

  // Debug logging
  // console.log('All Redirects:', redirectData.redirects);
  // console.log('Current Slug:', slug);

  // Find redirect matching the slug
  const redirect = redirectData.redirects.find(r => 
    r.source === `/${slug}` || r.source.slice(1) === slug
  );

  // Debug logging for redirect matching
  // console.log('Matched Redirect:', redirect);
  return redirect;
}

export function getAllRedirects(): Record<string, string> {
  const redirectMap: Record<string, string> = {};

  redirectData.redirects.forEach(redirect => {
    redirectMap[redirect.source] = redirect.destination;
  });

  return redirectMap;
}