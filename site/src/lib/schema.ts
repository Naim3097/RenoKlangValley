import { SITE, BINA } from './site';

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  sameAs: [SITE.social.instagram].filter(Boolean),
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': SITE_ID,
  name: SITE.name,
  url: SITE.url,
  publisher: { '@id': ORG_ID },
  inLanguage: ['en-MY', 'ms-MY'],
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE.url}/search/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

interface ArticleSchemaInput {
  url: string;
  title: string;
  description: string;
  image?: string;
  datePublished: Date;
  dateModified?: Date;
  authorName: string;
  locale: 'en' | 'ms';
}

export const articleSchema = (a: ArticleSchemaInput) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  mainEntityOfPage: { '@type': 'WebPage', '@id': a.url },
  headline: a.title,
  description: a.description,
  image: a.image,
  datePublished: a.datePublished.toISOString(),
  dateModified: (a.dateModified ?? a.datePublished).toISOString(),
  inLanguage: a.locale === 'ms' ? 'ms-MY' : 'en-MY',
  author: { '@type': 'Person', name: a.authorName },
  publisher: { '@id': ORG_ID },
});

export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: it.url,
  })),
});

export const faqSchema = (faqs: Array<{ q: string; a: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

/**
 * LocalBusiness schema for BINA+ — embedded on Local Hub pages where
 * BINA+ is contextually recommended. This is a single source of truth.
 */
export const binaLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  name: BINA.fullName,
  url: BINA.url,
  telephone: '+60193428981',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '24-1, Jalan Matahari Aa U5/Aa, Pinggiran Subang',
    addressLocality: 'Shah Alam',
    addressRegion: 'Selangor',
    postalCode: '40150',
    addressCountry: 'MY',
  },
  areaServed: { '@type': 'AdministrativeArea', name: 'Klang Valley' },
});
