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
// Hub-identifying pre-fill so Najiha can attribute the lead the moment the message lands.
// Plain English to match this hub's editorial voice (Aisyah, Klang Valley homeowner).
const WA_PREFILL = "Hi BINA+! Came across you on Reno Klang Valley — keen to chat about renovating my place.";

export const BINA = {
  url: 'https://binaplusdesign.my/',
  whatsapp: `https://wa.me/60193428981?text=${encodeURIComponent(WA_PREFILL)}`,
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
   * Public-facing package data — mirrors the Renovation tiers BINA+ publishes
   * on binaplusdesign.my/services. Update if the main site revises rates.
   * The /packages/ landing page and the page's JSON-LD OfferCatalog render
   * from this array.
   */
  packages: [
    {
      slug: 'reno-start',
      name: 'Reno Start',
      from: 'RM 100,000',
      idealFor: 'Single-storey rear extension on a Klang Valley terrace',
      timeline: '10–14 weeks',
      includes: [
        'Single-floor extension at the back of the house',
        'Structural & finishing works in the extension envelope',
        'Wet works inside the new footprint (kitchen or bathroom)',
        'Roofing, waterproofing, finishes',
        'PBT (council) submissions and permits handled',
      ],
    },
    {
      slug: 'reno-plus',
      name: 'Reno Plus',
      from: 'RM 200,000',
      idealFor: 'Full two-storey extension — adding both upstairs and downstairs',
      timeline: '14–20 weeks',
      featured: true,
      includes: [
        'Full two-storey extension envelope',
        'Engineered structure, roof, waterproofing',
        'Wet works for new bathrooms and/or kitchen',
        'Finishes throughout the extended area',
        'Council permits + PBT submissions',
        'Defect liability period in writing',
      ],
    },
    {
      slug: 'reno-max',
      name: 'Reno Max',
      from: 'RM 300,000',
      idealFor: 'Corner-lot expansion — wider envelope, both floors',
      timeline: '18–24 weeks',
      includes: [
        'Corner-lot expansion across both floors',
        'Wider building envelope, engineered structure',
        'Full council submissions and side-boundary clearances',
        'Higher-spec finishes and material options',
        'Whole-house repaint where extension meets the existing build',
        'Defect liability period in writing',
      ],
    },
  ] as const,
};

export type Locale = (typeof SITE.locales)[number];
