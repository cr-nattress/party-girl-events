# Epic 8: Performance & SEO

**Priority:** P1 (Should Have)
**Phase:** 4 (ongoing)
**Estimated Duration:** 1 week

---

## Description

Optimize the website for maximum performance, search engine visibility, and conversion. Ensure the site loads fast, ranks well in Google for target keywords, and provides excellent user experience across all devices and network conditions.

---

## Goals

- Achieve Lighthouse score > 90 across all metrics
- Rank on page 1 for "Vail wedding planner" and related keywords
- LCP (Largest Contentful Paint) < 2.5s
- Reduce bounce rate by 20%
- Increase organic traffic by 50% in 6 months

---

## User Stories

### US-8.1: Image Optimization
**As a** site visitor on slow internet
**I want** images to load quickly without losing quality
**So that** I can browse the portfolio smoothly

**Acceptance Criteria:**
- [ ] All images converted to WebP format (with PNG/JPG fallbacks)
- [ ] Responsive images with srcset (multiple sizes)
- [ ] Next.js Image component used throughout
- [ ] Lazy loading enabled (images load as you scroll)
- [ ] Blur placeholders while loading (LQIP - Low Quality Image Placeholder)
- [ ] Critical images preloaded (hero, above-fold)
- [ ] Image compression optimized (80-85% quality)
- [ ] Image CDN configured (Netlify Image CDN or Cloudinary)

**Sizes:**
- Thumbnail: 400w, 600w
- Medium: 800w, 1200w
- Large: 1600w, 2400w

**Format Priorities:**
1. AVIF (best compression, limited browser support)
2. WebP (good compression, wide support)
3. JPG/PNG (fallback)

---

### US-8.2: Code Splitting & Lazy Loading
**As a** developer
**I want** optimized JavaScript bundles
**So that** pages load faster with minimal blocking

**Acceptance Criteria:**
- [ ] Dynamic imports for heavy components (Gallery, ChatWidget)
- [ ] Route-based code splitting (automatic with Next.js)
- [ ] Lazy load below-the-fold sections
- [ ] Defer non-critical JavaScript
- [ ] Tree-shaking to remove unused code
- [ ] Bundle analyzer to identify bloat

**Example:**
```typescript
// Lazy load chat widget (not needed immediately)
const ChatWidget = dynamic(() => import('@/components/features/ChatWidget'), {
  loading: () => <ChatWidgetSkeleton />,
  ssr: false
})

// Lazy load gallery lightbox
const Lightbox = dynamic(() => import('@/components/features/Lightbox'))
```

**Bundle Size Targets:**
- First Load JS: < 100KB
- Route chunks: < 50KB each

---

### US-8.3: Font Optimization
**As a** site visitor
**I want** text to display immediately without layout shift
**So that** reading content is smooth

**Acceptance Criteria:**
- [ ] next/font for automatic font optimization
- [ ] Self-hosted fonts (no external requests)
- [ ] font-display: swap for faster rendering
- [ ] Preload critical fonts
- [ ] Subset fonts (only Latin characters needed)
- [ ] Variable fonts if available (single file)

**Fonts:**
- Cormorant Garamond (headings) - serif
- Lato (body) - sans-serif
- Pinyon Script (accents) - script

**next/font Example:**
```typescript
import { Cormorant_Garamond, Lato } from 'next/font/google'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '600', '700'] })
const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'] })
```

---

### US-8.4: Caching Strategy
**As a** repeat visitor
**I want** the site to load instantly on return visits
**So that** browsing is seamless

**Acceptance Criteria:**
- [ ] Static assets cached (1 year)
- [ ] Dynamic routes cached with revalidation
- [ ] Service worker for offline support (optional)
- [ ] CDN caching configured (Netlify Edge)
- [ ] Browser cache headers optimized
- [ ] Stale-while-revalidate for API routes

**Cache Headers:**
- Static assets (images, fonts, CSS, JS): `Cache-Control: public, max-age=31536000, immutable`
- HTML pages: `Cache-Control: public, s-maxage=86400, stale-while-revalidate`
- API routes: `Cache-Control: private, max-age=0, must-revalidate`

---

### US-8.5: SEO Meta Tags
**As a** site owner
**I want** proper meta tags on all pages
**So that** search engines and social media display content correctly

**Acceptance Criteria:**
- [ ] Unique title tag for each page (< 60 chars)
- [ ] Meta description for each page (< 160 chars)
- [ ] Open Graph tags (og:title, og:description, og:image, og:url)
- [ ] Twitter Card tags
- [ ] Canonical URLs (avoid duplicate content)
- [ ] Robots meta tag (index/noindex)
- [ ] Viewport meta tag for mobile

**Example (Home Page):**
```typescript
export const metadata: Metadata = {
  title: 'Party Girl Events | Vail Wedding & Event Planning',
  description: 'Modern wedding and event planning in Vail, Colorado. Full service planning, proposals, and Bar/Bat Mitzvahs. 8 years Ritz-Carlton experience.',
  openGraph: {
    title: 'Party Girl Events | Vail Wedding & Event Planning',
    description: 'Modern wedding and event planning in Vail, Colorado.',
    images: ['/og-image.jpg'],
    url: 'https://partygirl.events',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Party Girl Events',
    description: 'Modern wedding and event planning in Vail, Colorado.',
    images: ['/og-image.jpg'],
  }
}
```

---

### US-8.6: Schema Markup
**As a** site owner
**I want** structured data for rich search results
**So that** Google displays enhanced snippets

**Acceptance Criteria:**
- [ ] LocalBusiness schema (name, address, phone, hours)
- [ ] Organization schema (logo, social profiles)
- [ ] Service schema (wedding planning services)
- [ ] Review/Rating schema (testimonials)
- [ ] BlogPosting schema for blog posts
- [ ] Event schema for portfolio items
- [ ] BreadcrumbList schema for navigation
- [ ] JSON-LD format (not microdata)

**LocalBusiness Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  "name": "Party Girl Events",
  "description": "Modern wedding and event planning in Vail, Colorado",
  "url": "https://partygirl.events",
  "telephone": "+1-970-306-3381",
  "email": "stephanie@partygirl.events",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "19 Vail Rd",
    "addressLocality": "Vail",
    "addressRegion": "CO",
    "postalCode": "81657",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "39.6403",
    "longitude": "-106.3742"
  },
  "areaServed": ["Vail", "Beaver Creek", "Breckenridge", "Keystone", "Aspen"],
  "priceRange": "$$$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "47"
  }
}
```

---

### US-8.7: Sitemap & Robots.txt
**As a** search engine crawler
**I want** clear guidance on what to index
**So that** I can properly catalog the site

**Acceptance Criteria:**
- [ ] sitemap.xml generated automatically
- [ ] Include all public pages (home, services, portfolio, blog)
- [ ] Exclude admin/portal pages from sitemap
- [ ] robots.txt configured
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

**sitemap.xml:**
- Homepage
- Service pages
- Portfolio items
- Blog posts
- Static pages (about, contact)

**robots.txt:**
```
User-agent: *
Allow: /
Disallow: /portal/
Disallow: /api/

Sitemap: https://partygirl.events/sitemap.xml
```

---

### US-8.8: Analytics & Tracking
**As a** business owner
**I want** to understand visitor behavior
**So that** I can optimize the site for conversions

**Acceptance Criteria:**
- [ ] Google Analytics 4 configured
- [ ] Conversion events tracked (form submissions, quiz completions, chat interactions)
- [ ] Custom events: CTA clicks, portfolio views, service page views
- [ ] User journey tracking (funnel analysis)
- [ ] Bounce rate and engagement metrics
- [ ] Traffic sources (organic, social, direct, referral)
- [ ] GDPR-compliant cookie consent (if needed)

**Key Events:**
- `contact_form_submit`
- `quiz_complete`
- `chat_started`
- `chat_lead_captured`
- `portfolio_view`
- `service_inquiry`

**Privacy:**
- Anonymize IP addresses
- Cookie consent banner (EU visitors)
- Opt-out mechanism

---

### US-8.9: Core Web Vitals Optimization
**As a** site visitor
**I want** fast, stable page loads
**So that** browsing is frustration-free

**Acceptance Criteria:**
- [ ] **LCP (Largest Contentful Paint)** < 2.5s
  - Optimize hero images
  - Preload critical resources
  - Minimize render-blocking resources
- [ ] **FID (First Input Delay)** < 100ms
  - Minimize JavaScript execution time
  - Code splitting and lazy loading
  - Defer non-critical scripts
- [ ] **CLS (Cumulative Layout Shift)** < 0.1
  - Set image dimensions (width/height)
  - Reserve space for ads/embeds
  - Use CSS aspect-ratio
  - Avoid inserting content above existing content

**Tools:**
- Lighthouse CI for automated testing
- WebPageTest for detailed analysis
- Chrome DevTools Performance tab

---

### US-8.10: Local SEO
**As a** couple searching "wedding planner near me"
**I want** Party Girl Events to appear in results
**So that** I can find local expertise

**Acceptance Criteria:**
- [ ] Google Business Profile claimed and optimized
- [ ] NAP (Name, Address, Phone) consistent across web
- [ ] Local citations (The Knot, WeddingWire, Yelp)
- [ ] Location pages for service areas (optional)
- [ ] Embed Google Maps on contact page
- [ ] Local keywords in content ("Vail wedding planner", "Beaver Creek event planning")

**Target Keywords:**
- "Vail wedding planner"
- "Beaver Creek event planner"
- "Colorado mountain wedding planner"
- "Vail proposal planner"
- "Aspen wedding coordinator"
- "Breckenridge event planning"

**Google Business Profile:**
- Complete all fields (hours, services, photos)
- Respond to reviews
- Post updates (events, offers)
- Q&A section

---

### US-8.11: Accessibility (A11y)
**As a** user with disabilities
**I want** the site to be fully accessible
**So that** I can browse and book services independently

**Acceptance Criteria:**
- [ ] WCAG 2.1 AA compliance
- [ ] Semantic HTML (headings, landmarks)
- [ ] ARIA labels where needed
- [ ] Keyboard navigation (tab, enter, escape)
- [ ] Focus indicators visible
- [ ] Sufficient color contrast (4.5:1 for text)
- [ ] Alt text for all images
- [ ] Form labels and error messages
- [ ] Skip to main content link
- [ ] Screen reader tested (NVDA, VoiceOver)

**Tools:**
- axe DevTools for automated testing
- Lighthouse accessibility audit
- Manual screen reader testing

---

### US-8.12: Error Monitoring
**As a** developer
**I want** to be alerted to errors in production
**So that** I can fix issues quickly

**Acceptance Criteria:**
- [ ] Error tracking service (Sentry or Vercel Analytics)
- [ ] Client-side error monitoring
- [ ] Server-side error monitoring
- [ ] Email/Slack alerts for critical errors
- [ ] Error rate dashboard
- [ ] Performance regression alerts

**Monitored Errors:**
- JavaScript exceptions
- Failed API calls
- 404 errors
- Slow page loads (> 5s)

---

## Dependencies

### Technical
- **Related:** All epics - performance affects entire site

### External
- Google Analytics account
- Google Search Console account
- Sentry or error monitoring service
- Image CDN (Netlify, Cloudinary)

---

## Definition of Done

- [ ] All user stories completed and acceptance criteria met
- [ ] Lighthouse score > 90 on all metrics (mobile and desktop)
- [ ] Core Web Vitals passing (LCP, FID, CLS)
- [ ] Sitemap submitted to search engines
- [ ] Analytics tracking verified (test events firing)
- [ ] SEO meta tags validated (all pages)
- [ ] Schema markup validated (Google Rich Results Test)
- [ ] Accessibility audit passed (WCAG AA)
- [ ] Google Business Profile optimized
- [ ] Error monitoring configured

---

## Performance Targets

| Metric | Target | Current (Baseline) | Status |
|--------|--------|-------------------|--------|
| **Lighthouse Performance** | > 90 | - | 🔲 |
| **Lighthouse Accessibility** | > 95 | - | 🔲 |
| **Lighthouse Best Practices** | > 95 | - | 🔲 |
| **Lighthouse SEO** | > 95 | - | 🔲 |
| **LCP** | < 2.5s | - | 🔲 |
| **FID** | < 100ms | - | 🔲 |
| **CLS** | < 0.1 | - | 🔲 |
| **Page Load (3G)** | < 5s | - | 🔲 |
| **Bundle Size** | < 200KB | - | 🔲 |

---

## SEO Keyword Targets

### Primary Keywords (Page 1 Ranking Goal)
- "Vail wedding planner" (200 searches/mo)
- "Beaver Creek event planner" (100 searches/mo)
- "Colorado mountain wedding planner" (500 searches/mo)

### Secondary Keywords
- "Vail proposal planner"
- "Aspen wedding coordinator"
- "Breckenridge wedding planning"
- "mountain elopement planner Colorado"
- "Bar Mitzvah planner Vail"

### Long-Tail Keywords
- "how much does a wedding planner cost in Vail"
- "best wedding planner in Vail Colorado"
- "luxury event planner Beaver Creek"

---

## Technical Debt / Future Improvements

- Add PWA for offline support
- Implement AMP pages for blog posts (optional)
- A/B testing platform (Optimizely, VWO)
- Heatmaps and session recordings (Hotjar, Clarity)
- Competitive SEO analysis (Ahrefs, SEMrush)
- International SEO (if expanding to other locations)
- Voice search optimization
- Video SEO (YouTube channel integration)

---

## Related Epics

- **Related:** All epics - performance and SEO affect entire site
- **Blocked By:** Epic 2, Epic 3 - needs content to optimize

---

## References

- [TECHNICAL_STRATEGY.md](../../TECHNICAL_STRATEGY.md) - Performance targets
- Google Core Web Vitals Guide
- Next.js Performance Optimization Docs
- WCAG 2.1 Guidelines
- Schema.org documentation
