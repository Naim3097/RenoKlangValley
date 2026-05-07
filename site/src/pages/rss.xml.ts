import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '../lib/site';

export async function GET(context: APIContext) {
  const articles = (await getCollection('articles', ({ data }) => !data.draft && data.locale === 'en'))
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());

  return rss({
    title: SITE.name,
    description: SITE.tagline,
    site: context.site ?? SITE.url,
    items: articles.map((a) => {
      const slug = a.id.replace(/\.(md|mdx)$/, '').split('/').pop();
      return {
        title: a.data.title,
        description: a.data.description,
        pubDate: a.data.publishedAt,
        link: `/${a.data.category}/${slug}/`,
      };
    }),
  });
}
