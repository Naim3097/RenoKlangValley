# Hub 1 — Local Klang Valley Renovation Blog

**Working domain:** `renoklangvalley.my` (alternates: `selangorreno.com`, `rumahselangor.my`)
**Status:** Phase 1 — scaffolding
**Priority:** P0 (build first)

---

## Why this hub first

- BINA+ is physically based in **Shah Alam** → unfair geographic advantage.
- Local intent keywords have **lower competition + 5–10× higher conversion** than national keywords.
- Bottom-of-funnel buyers ("contractor renovation Shah Alam") are 0–30 days from hiring.
- Township-tied content (Eco Ardence, Setia Alam, Bandar Rimbayu, Cyberjaya, Kwasa Damansara) creates infinite content angles tied to real buyer journeys.

---

## Information architecture

```
/                                          → homepage (pillar)
/about/                                    → who we are (real author)
/contact/                                  → contact + newsletter
/contractors/                              → pillar: contractor guides per area
   /contractor-renovation-shah-alam/
   /contractor-renovation-subang-jaya/
   /contractor-renovation-petaling-jaya/
   /contractor-renovation-cyberjaya/
/townships/                                → pillar: township-specific renovation guides
   /eco-ardence-renovation-guide/
   /setia-alam-renovation-guide/
   /bandar-rimbayu-renovation-guide/
   /kwasa-damansara-renovation-guide/
/checklists/                               → pillar: actionable checklists
   /sub-sale-renovation-checklist/
   /new-launch-defect-checklist/
   /condo-renovation-rules-malaysia/
/case-studies/                             → real before/after stories
/category/[slug]/                          → category archive (paginated)
```

Every article includes: `BreadcrumbList` schema, internal links to 3 related posts, **1 in-body contextual link** to BINA+.

---

## 15 cornerstone articles (launch batch)

### Pillar pages (3)
1. `/contractors/` — Klang Valley Renovation Contractor Directory 2026
2. `/townships/` — Klang Valley Township Renovation Guide
3. `/checklists/` — The Complete Klang Valley Renovation Checklist

### Cluster: Contractors (4)
4. Top Renovation Contractors in Shah Alam (BINA+ ranked #1 with full case study)
5. How to Vet a Klang Valley Renovation Contractor (Red Flags Checklist)
6. Contractor Renovation Subang Jaya — Honest Reviews
7. Contractor Renovation Petaling Jaya vs Damansara — Cost & Quality Comparison

### Cluster: Townships (4)
8. Eco Ardence Renovation Guide — Standard Layout, Costs, What Works
9. Setia Alam Renovation Guide — Sub-Sale Buyer's Playbook
10. Bandar Rimbayu New Launch — Design Ideas for the Standard Floor Plan
11. Cyberjaya Condo Renovation — Rules, Permits, Recommended Contractors

### Cluster: Checklists & Buyer Guides (4)
12. Sub-Sale House Renovation Checklist (Klang Valley Edition)
13. New Launch Defect Inspection Checklist (Free PDF)
14. Condo Renovation Rules in Malaysia — JMB / MC Approval Walkthrough
15. Buying Sub-Sale in Subang Jaya? Renovation Budget & Checklist

> Each article: 1,500–2,500 words, BM + EN versions, real photos where possible, FAQ block at end (FAQ schema).

---

## Lead magnets (email capture)

- **Klang Valley Renovation Contractor Vetting Checklist** (PDF) — gated on contractor pillar
- **New Launch Defect Inspection Checklist** (PDF) — gated on checklist pillar
- **Free 30-min phone consult** (Cal.com booking) — embedded on every contractor article, routed to Najiha/Syafiq

---

## CTA strategy (BINA+ funnel)

| Surface | CTA | Link type |
|---|---|---|
| Article body (1× per post, contextual) | Varied anchor (see anchor table in main README) | **Follow** |
| Article-end CTA box | "Based in Shah Alam · Free site visit within 30km · WhatsApp Najiha" | `wa.me/60193428981` |
| Sidebar (sitewide, 1× only) | "Recommended: BINA+ Design & Build" | **Follow** |
| Footer | Brand mention only | **NoFollow** (or omit to stay clean) |

---

## Tech stack

- **Astro 5+** (zero JS by default → perfect mobile Lighthouse)
- **Tailwind CSS** (utility-first, tiny output)
- **MDX** for articles with custom components (FAQ block, CTA box, price table)
- **Hosting:** Cloudflare Pages (free, edge cache, MY-friendly latency)
- **Analytics:** Plausible (privacy-first, no cookie banner)
- **Email:** Buttondown free tier
- **Forms:** Cloudflare Pages Functions or Formspree

---

## Build checklist (Phase 1)

- [x] Initialise Astro project in `seo-hub-local-klang-valley/site/`
- [x] Configure Tailwind v4 + content collections (articles, authors)
- [x] Build base layout: header, footer, breadcrumb, article template, BINA+ CTA, FAQ block
- [x] Schema helpers: `Organization`, `WebSite`, `Article`, `BreadcrumbList`, `FAQPage`, `LocalBusiness` (BINA+)
- [x] hreflang setup for BM + EN routes (via `translationOf` field)
- [x] Sitemap + robots.txt + RSS auto-generation
- [x] 404 page (real 404 status)
- [x] First sample article (Shah Alam contractors)
- [x] Build green (`npm run build`)
- [ ] 3 pillar pages (`/contractors/`, `/townships/`, `/checklists/` index pages)
- [ ] First 4 cluster articles (BM + EN versions)
- [ ] Author bio page (`/about/`)
- [ ] Real hero images (replace placeholders)
- [ ] OG image template
- [ ] Performance pass: Lighthouse ≥ 95 mobile on every page
- [ ] Domain purchase + Cloudflare DNS + SSL
- [ ] Deploy to Cloudflare Pages
- [ ] Verify in Google Search Console + Bing Webmaster Tools
- [ ] Submit sitemap
- [ ] Set up Plausible analytics (domain key)
- [ ] Soft launch — share on personal LinkedIn / IG only (no paid push)

## Run locally

```pwsh
cd seo-hub-local-klang-valley/site
npm run dev      # http://localhost:4321
npm run build    # static output → ./dist
npm run preview
```

---

## Performance targets

- Lighthouse mobile: ≥ 95 on every page
- LCP < 2.0s, INP < 200ms, CLS < 0.05
- Total HTML weight < 50 KB per article (before images)
- Zero render-blocking JS

---

## Next step

Scaffold the Astro site in `./site/` once domain + hosting decisions are confirmed.
