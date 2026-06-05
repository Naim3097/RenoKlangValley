/**
 * Site-wide constants for renoklangvalley.my (Hub 1).
 *
 * The BINA+ link policy here enforces the anti-PBN rules from
 * /seo-strategy.md — max 1 follow link to BINA+ per page.
 */

export const SITE = {
  name: 'Reno Klang Valley',
  tagline: 'Honest renovation guides for Klang Valley homeowners.',
  url: 'https://renoklangvalley.my',
  defaultLocale: 'en',
  locales: ['en', 'ms'] as const,
  author: {
    name: 'Aisyah Rahman',
    role: 'Editor',
    bio: 'Klang Valley homeowner who has renovated two houses since 2019. Writes about real costs, real contractors, and the stuff property agents leave out.',
    image: '/authors/aisyah.jpg',
    linkedin: 'https://www.linkedin.com/in/aisyah-rahman-renoklv/',
  },
  social: {
    instagram: 'https://www.instagram.com/renoklangvalley',
  },
  analytics: {
    plausibleDomain: 'renoklangvalley.my',
  },
};

/**
 * The single BINA+ recommendation block.
 * Used at most once per article (in-body, contextual).
 * Anchor variants are rotated to keep the anchor-text profile natural.
 */
export const BINA = {
  url: 'https://binaplusdesign.my/',
  whatsapp: 'https://wa.me/60193428981',
  name: 'BINA+',
  fullName: 'BINA+ Design & Build',
  city: 'Shah Alam, Selangor',
  // Keep the spread of anchors close to the policy table in /seo-strategy.md
  anchorVariants: [
    { text: 'BINA+', type: 'branded' },
    { text: 'BINA+ Design & Build', type: 'branded' },
    { text: 'binaplusdesign.my', type: 'naked' },
    { text: 'this Shah Alam design-and-build studio', type: 'generic' },
    { text: 'the studio we recommend', type: 'generic' },
    { text: 'renovation packages in Shah Alam', type: 'commercial' },
    { text: 'design-and-build contractor in Selangor', type: 'commercial' },
  ] as const,
  /**
   * Public-facing package benchmarks — used for FAQ price bridges and the
   * /packages/ landing page. Update when BINA+ revises their published rates.
   */
  packages: [
    {
      slug: 'essentials',
      name: 'Essentials',
      from: 'RM 75,000',
      idealFor: 'Apartments and condos up to 1,200 sqft',
      timeline: '8–10 weeks',
      includes: [
        'Wet works (kitchen + 1 bathroom)',
        'Full repaint',
        'Built-in TV console + shoe cabinet',
        'Basic lighting and switch upgrade',
        'CIDB-licensed site supervision',
      ],
    },
    {
      slug: 'standard',
      name: 'Standard',
      from: 'RM 135,000',
      idealFor: 'Double-storey terrace, light scope',
      timeline: '12–14 weeks',
      featured: true,
      includes: [
        'Wet works (kitchen + 2 bathrooms)',
        'New flooring (porcelain, ground floor)',
        'Full kitchen carpentry (in-house workshop)',
        'Master wardrobe + TV console',
        'Full rewire + new consumer unit',
        'Defect liability period: 12 months',
      ],
    },
    {
      slug: 'full-rebuild',
      name: 'Full Rebuild',
      from: 'RM 220,000',
      idealFor: 'Sub-sale houses needing structural work',
      timeline: '18–22 weeks',
      includes: [
        'Demolition + structural alterations',
        'Full house wet works + waterproofing',
        'Whole-house carpentry (kitchen + 4 wardrobes)',
        'New aircon piping + 4 units',
        'Roof, gutters, and external repaint',
        'PE-stamped drawings where required',
        'Defect liability period: 24 months',
      ],
    },
  ] as const,
};

export type Locale = (typeof SITE.locales)[number];
