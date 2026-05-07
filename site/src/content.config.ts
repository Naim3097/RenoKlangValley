import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(70),
      description: z.string().max(160),
      slug: z.string().optional(),
      locale: z.enum(['en', 'ms']).default('en'),
      // For hreflang pairing — points to the slug of the translated counterpart
      translationOf: z.string().optional(),
      category: z.enum(['contractors', 'townships', 'checklists', 'case-studies']),
      pillar: z.boolean().default(false),
      author: z.string().default('aisyah'),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      hero: image().optional(),
      heroAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      faqs: z
        .array(z.object({ q: z.string(), a: z.string() }))
        .default([]),
      // If true, the BINA+ recommendation block will render in this article
      includeBinaCta: z.boolean().default(true),
      draft: z.boolean().default(false),
    }),
});

const authors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string(),
      image: image().optional(),
      linkedin: z.string().url().optional(),
    }),
});

export const collections = { articles, authors };
