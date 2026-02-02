# Epic 3: Portfolio & Blog

**Priority:** P1 (Should Have)
**Phase:** 2
**Estimated Duration:** 1 week

---

## Description

Create a visually stunning portfolio gallery to showcase past events and a blog system for sharing event stories, tips, and SEO content. These features establish credibility and provide ongoing content marketing opportunities.

---

## Goals

- Showcase Party Girl Events' best work with high-quality imagery
- Enable filtering and categorization of events
- Share client success stories through blog posts
- Improve SEO with fresh, relevant content
- Inspire potential clients with real event examples

---

## User Stories

### US-3.1: Portfolio Gallery Page
**As a** potential client
**I want** to browse beautiful photos of past events
**So that** I can see the quality and style of Party Girl Events' work

**Acceptance Criteria:**
- [ ] `app/portfolio/page.tsx` created
- [ ] Hero section with title and subtitle
- [ ] Masonry or grid layout of event thumbnails
- [ ] Category filter tabs: All, Weddings, Proposals, Mitzvahs, Social
- [ ] Lazy loading for images (infinite scroll or pagination)
- [ ] Hover effect shows event name and date
- [ ] Click opens individual event page or lightbox
- [ ] Responsive grid: 3 columns (desktop), 2 (tablet), 1 (mobile)
- [ ] Optimized images with Next.js Image component

**Categories:**
- Weddings (full service, management, elopements)
- Proposals
- Bar/Bat Mitzvahs
- Social Events (birthdays, bachelor/ette, anniversaries)

**Reference:** eleven-emmons-direct gallery patterns

---

### US-3.2: Gallery Component with Lightbox
**As a** visitor
**I want** to view event photos in a full-screen lightbox
**So that** I can appreciate the details and quality

**Acceptance Criteria:**
- [ ] `components/features/Gallery.tsx` created
- [ ] Click thumbnail opens full-screen lightbox
- [ ] Navigation: next/prev arrows, keyboard (arrow keys, ESC)
- [ ] Image counter (3 / 24)
- [ ] Smooth transitions between images
- [ ] Zoom capability (optional)
- [ ] Close button (X) and backdrop click to close
- [ ] Mobile swipe gestures
- [ ] Loading state for large images

**Libraries to Consider:**
- yet-another-react-lightbox
- photoswipe
- Custom implementation with Framer Motion

---

### US-3.3: Individual Event Page
**As a** engaged couple
**I want** to see a full event story with all photos
**So that** I can imagine my own event planned by Party Girl Events

**Acceptance Criteria:**
- [ ] `app/portfolio/[slug]/page.tsx` created
- [ ] Event title and subtitle
- [ ] Event details: date, location, guest count, service type
- [ ] Client testimonial (if available)
- [ ] Full gallery (20-50 photos per event)
- [ ] Photo captions (optional)
- [ ] "Services Used" sidebar (decor, florals, catering, etc.)
- [ ] Related events (3-4 similar events)
- [ ] CTA: "Plan Your Event Like This"
- [ ] Social sharing buttons

**Event Data Structure:**
```typescript
interface PortfolioEvent {
  slug: string
  title: string // "Erika & Eric's Camp Hale Wedding"
  subtitle?: string
  date: string
  location: string
  category: 'wedding' | 'proposal' | 'mitzvah' | 'social'
  serviceType: string // "Full Service Wedding Planning"
  guestCount?: number
  coverImage: string
  gallery: string[]
  testimonial?: {
    quote: string
    author: string
  }
  vendors?: {
    name: string
    category: string
    website?: string
  }[]
}
```

---

### US-3.4: Portfolio Data Management
**As a** site administrator (Stephanie)
**I want** an easy way to add new portfolio entries
**So that** I can keep the portfolio updated with recent work

**Acceptance Criteria:**
- [ ] Portfolio data in `/content/portfolio/` as MDX files
- [ ] Frontmatter for event metadata
- [ ] Image organization: `/public/images/portfolio/[slug]/`
- [ ] Automated slug generation from title
- [ ] Validation for required fields
- [ ] Preview mode for unpublished events

**MDX Frontmatter Example:**
```yaml
---
title: "Erika & Eric's Camp Hale Wedding"
date: 2024-08-15
location: Camp Hale, CO
category: wedding
serviceType: Full Service Planning
guestCount: 120
coverImage: /images/portfolio/camp-hale-wedding/cover.jpg
published: true
---
```

---

### US-3.5: Blog Listing Page
**As a** visitor
**I want** to read event planning tips and real event stories
**So that** I can get inspired and learn from Party Girl Events

**Acceptance Criteria:**
- [ ] `app/blog/page.tsx` created
- [ ] Grid of blog post cards (2 columns desktop, 1 mobile)
- [ ] Each card: featured image, title, excerpt, date, read time
- [ ] Category tags (Real Weddings, Planning Tips, Proposals, Trends)
- [ ] Pagination or infinite scroll (10 posts per page)
- [ ] "Featured Post" highlight at top
- [ ] Search functionality (optional)
- [ ] Filter by category

**Blog Post Types:**
1. **Real Weddings** - Client stories (from scraped blog posts)
2. **Planning Tips** - How-to guides and advice
3. **Proposals** - Engagement stories
4. **Trends** - Current event trends and inspiration

---

### US-3.6: Individual Blog Post Page
**As a** reader
**I want** a clean, readable blog post layout
**So that** I can enjoy the content and photos

**Acceptance Criteria:**
- [ ] `app/blog/[slug]/page.tsx` created
- [ ] Hero image (full-width or contained)
- [ ] Post title and metadata (date, read time, author)
- [ ] Rich text content with MDX support
- [ ] Embedded images within content
- [ ] Image captions
- [ ] Pull quotes or callouts
- [ ] Related posts (3-4 at bottom)
- [ ] Social sharing buttons
- [ ] "Work With Us" CTA at end

**MDX Components:**
- Image with caption
- Quote block
- Service callout box
- Gallery embed
- Video embed (YouTube/Vimeo)

---

### US-3.7: Blog Content Migration
**As a** developer
**I want** existing blog posts migrated from scraped site
**So that** we preserve SEO value and content

**Acceptance Criteria:**
- [ ] 4 blog posts from scraped-site/content/blog/ converted to MDX
- [ ] Images copied to `/public/images/blog/[slug]/`
- [ ] URLs preserved or redirects configured
- [ ] Metadata extracted (date, title, categories)
- [ ] Formatting cleaned up and styled
- [ ] Links verified and updated

**Posts to Migrate:**
1. Camp Hale Wedding (Erika & Eric)
2. Sonnenalp Wedding (Kimmy & Craig)
3. Arrabelle Proposal (Michael & Samantha)
4. Vail Mountain Proposal (Christine & Machi - viral TikTok)

---

### US-3.8: Category & Tag System
**As a** visitor
**I want** to filter blog posts by topic
**So that** I can find relevant content quickly

**Acceptance Criteria:**
- [ ] Categories defined: Real Weddings, Planning Tips, Proposals, Trends
- [ ] Tag system for finer filtering (mountain weddings, winter events, etc.)
- [ ] Category archive pages (`/blog/category/[slug]`)
- [ ] Tag archive pages (`/blog/tag/[slug]`)
- [ ] Breadcrumb navigation
- [ ] Post count per category/tag

---

### US-3.9: Featured Image Optimization
**As a** site visitor
**I want** images to load quickly without sacrificing quality
**So that** I have a smooth browsing experience

**Acceptance Criteria:**
- [ ] All images converted to WebP format
- [ ] Responsive image sizes generated (small, medium, large)
- [ ] Lazy loading implemented
- [ ] Blur placeholder while loading
- [ ] Next.js Image component used throughout
- [ ] Image CDN optimization (Netlify Image CDN or Cloudinary)
- [ ] Aspect ratios preserved (no layout shift)

**Image Sizes:**
- Thumbnail: 400x300px
- Medium: 800x600px
- Large: 1600x1200px
- Full: 2400x1800px (for lightbox)

---

### US-3.10: SEO for Portfolio & Blog
**As a** site owner
**I want** portfolio and blog content optimized for search engines
**So that** we attract organic traffic

**Acceptance Criteria:**
- [ ] Meta titles and descriptions for all pages
- [ ] Open Graph tags for social sharing
- [ ] Twitter Card tags
- [ ] Schema.org markup (BlogPosting, Article)
- [ ] Image alt text (descriptive and keyword-rich)
- [ ] Sitemap includes portfolio and blog URLs
- [ ] Canonical URLs configured
- [ ] Internal linking between related posts/events

**SEO Keywords to Target:**
- "Vail wedding planner"
- "Colorado mountain wedding"
- "Beaver Creek proposal planner"
- "Bar Mitzvah planner Vail"
- "Destination event planner Colorado"

---

## Dependencies

### Technical
- **Blocks:** Epic 1 (Foundation & Infrastructure) - needs components
- **Blocks:** Epic 2 (Core Website Pages) - needs header/footer

### Content
- Images from scraped-site/images/
- Blog posts from scraped-site/content/blog/
- Event photos from Stephanie (new content)

### External
- MDX support (next-mdx-remote or @next/mdx)
- Image optimization service (Netlify Image CDN or Cloudinary)

---

## Definition of Done

- [ ] All user stories completed and acceptance criteria met
- [ ] Portfolio has at least 8-10 events
- [ ] Blog has at least 4 posts (migrated)
- [ ] Images optimized and loading fast (LCP < 2.5s)
- [ ] Lightbox works on mobile and desktop
- [ ] SEO meta tags validated
- [ ] Social sharing tested (OG images display correctly)
- [ ] Content approved by Stephanie
- [ ] Deployed to Netlify staging

---

## Technical Debt / Future Improvements

- Add CMS integration (Sanity, Contentful) for easier updates
- Add blog comments (Disqus or custom)
- Add RSS feed for blog
- Add email subscription for new posts
- Create Instagram feed integration for real-time portfolio updates
- Add "Save to Pinterest" button on images

---

## Related Epics

- **Blocked By:** Epic 1, Epic 2
- **Related:** Epic 8 (Performance & SEO) - image optimization
- **Related:** Epic 4 (Lead Generation) - CTAs in content

---

## References

- [scraped-site/content/blog/](../../scraped-site/content/blog/) - Existing blog posts
- [scraped-site/images/](../../scraped-site/images/) - Event photos
- eleven-emmons-direct: Gallery and lightbox implementation
- empmdumpsters: Blog layout and typography
- partygirlevents-v1: Portfolio filtering
