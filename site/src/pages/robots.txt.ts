import type { APIRoute } from 'astro';
import { SITE } from '../lib/site';

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /draft/

Sitemap: ${SITE.url}/sitemap-index.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
};
