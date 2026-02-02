# Epic 2: Core Website Pages

**Priority:** P0 (Must Have)
**Phase:** 2
**Estimated Duration:** 2 weeks

---

## Description

Build the core public-facing pages of the Party Girl Events website including Home, About, Services, and Contact pages. These pages form the foundation of the marketing site and must be live for MVP launch.

---

## Goals

- Create compelling, mobile-first page layouts
- Showcase Stephanie's expertise and services
- Convert visitors to qualified leads
- Establish trust through testimonials and credentials
- Provide clear pathways to contact and booking

---

## User Stories

### US-2.1: Header Component
**As a** visitor
**I want** a clear, sticky navigation header
**So that** I can easily navigate the site from any page

**Acceptance Criteria:**
- [ ] `components/layout/Header.tsx` created
- [ ] Logo (from scraped-site/images/new-logo.png)
- [ ] Navigation links: Home, About, Services, Portfolio, Blog, Contact
- [ ] Mobile hamburger menu (< 768px)
- [ ] Sticky on scroll with subtle background blur
- [ ] CTA button: "Book Consultation" or "Get Started"
- [ ] Smooth scroll to page sections
- [ ] Active link highlighting
- [ ] Accessible (ARIA, keyboard navigation)

**Design Notes:**
- Transparent background on scroll top
- Solid bg (--bg with opacity) when scrolled
- Follow eleven-emmons-direct sticky header pattern

---

### US-2.2: Footer Component
**As a** visitor
**I want** a comprehensive footer with contact info and links
**So that** I can find important information and reach out

**Acceptance Criteria:**
- [ ] `components/layout/Footer.tsx` created
- [ ] Contact information (phone, email, address)
- [ ] Navigation links (duplicated from header)
- [ ] Social media icons (Instagram, Facebook, Pinterest)
- [ ] Award badges (The Knot, WeddingWire, etc.)
- [ ] Service areas list
- [ ] Copyright notice
- [ ] "LGBTQ+ Friendly" badge
- [ ] Newsletter signup (optional)
- [ ] Multi-column layout on desktop, stacked on mobile

**Content:**
- Phone: (970) 306-3381
- Email: stephanie@partygirl.events
- Address: 19 Vail Rd., Vail, CO 81657

**Reference:** empmdumpsters multi-column footer

---

### US-2.3: Home Page - Hero Section
**As a** potential client
**I want** an immediate understanding of what Party Girl Events offers
**So that** I know if this service is right for me

**Acceptance Criteria:**
- [ ] `components/sections/Hero.tsx` created
- [ ] Full-screen hero (min-height: 80vh)
- [ ] Background: High-quality image or video from scraped assets
- [ ] Headline: "Nobody Deserves to Enjoy Your Event More Than You"
- [ ] Subheadline: "Modern Wedding and Event Planning in Vail, Colorado"
- [ ] Primary CTA: "Plan Your Event"
- [ ] Secondary CTA: "View Our Work"
- [ ] Scroll indicator (subtle down arrow)
- [ ] Parallax effect on scroll (optional)
- [ ] Overlay gradient for text readability

**Animation:**
- Fade up headline with stagger
- Scale in CTAs
- Entrance animation on page load

---

### US-2.4: Home Page - Services Preview
**As a** visitor
**I want** a quick overview of available services
**So that** I can determine if my event type is supported

**Acceptance Criteria:**
- [ ] `components/sections/ServicesPreview.tsx` created
- [ ] 4 service cards: Weddings, Proposals, Bar/Bat Mitzvahs, Social Events
- [ ] Each card has: icon, title, brief description, "Learn More" link
- [ ] Grid layout: 2x2 on desktop, stacked on mobile
- [ ] Hover effects (lift and glow)
- [ ] Links to `/services/[slug]` pages
- [ ] Scroll animation (fade in as visible)

**Service Cards:**
1. **Weddings** - "Full service planning to wedding day management"
2. **Perfect Proposals** - "Over-the-top custom proposals that wow"
3. **Bar/Bat Mitzvahs** - "Combining tradition with celebration"
4. **Social Parties** - "Birthdays, anniversaries, bachelor/ette parties"

---

### US-2.5: Home Page - Testimonials Section
**As a** potential client
**I want** to see reviews from past clients
**So that** I can trust Party Girl Events with my event

**Acceptance Criteria:**
- [ ] `components/sections/Testimonials.tsx` created
- [ ] Carousel or grid of 3-5 testimonials
- [ ] Each testimonial: quote, client name, event type, photo (optional)
- [ ] Auto-rotate carousel (optional, 5s interval)
- [ ] Manual navigation (prev/next arrows, dots)
- [ ] Award badges displayed (The Knot Best of Weddings, etc.)
- [ ] Star ratings (5 stars)
- [ ] Mobile swipe support

**Sample Testimonial:**
> "Stephanie made our mountain wedding absolutely flawless. She thought of every detail we didn't even know to worry about!"
> — Sarah & Jake, Vail Wedding 2025

**Reference:** empmdumpsters testimonial carousel

---

### US-2.6: Home Page - Portfolio Highlights
**As a** engaged couple
**I want** to see stunning photos from past events
**So that** I can visualize what Party Girl Events can create

**Acceptance Criteria:**
- [ ] `components/sections/PortfolioHighlights.tsx` created
- [ ] Masonry grid of 6-8 images
- [ ] Images from scraped-site/images (weddings, proposals)
- [ ] Hover overlay with event name and category
- [ ] Click opens lightbox or navigates to portfolio
- [ ] "View Full Portfolio" CTA button
- [ ] Lazy loading for performance
- [ ] Optimized Next.js Image component

**Images to Feature:**
- Camp Hale wedding
- Sonnenalp wedding
- Arrabelle proposal
- Vail Mountain proposal

---

### US-2.7: Home Page - CTA Section
**As a** visitor ready to take action
**I want** a clear call-to-action to book consultation
**So that** I can easily start the planning process

**Acceptance Criteria:**
- [ ] `components/sections/CTA.tsx` created
- [ ] Compelling headline: "Ready to Plan Your Dream Event?"
- [ ] Supporting text about free consultation
- [ ] Primary button: "Get Started" → /contact
- [ ] Secondary button: "Take the Quiz" → /quiz
- [ ] Background: Accent color or subtle image
- [ ] Full-width section with centered content
- [ ] High contrast for visibility

**Reference:** empmdumpsters CTA patterns

---

### US-2.8: About Page
**As a** potential client
**I want** to learn about Stephanie and her background
**So that** I can feel confident hiring her

**Acceptance Criteria:**
- [ ] `app/about/page.tsx` created
- [ ] Hero section with Stephanie's photo
- [ ] Biography (from scraped-site/content/about.md)
- [ ] Ritz-Carlton background highlighted
- [ ] Certifications and credentials
- [ ] Personal interests (humanize the brand)
- [ ] "Why I Started Party Girl Events" story
- [ ] Awards and recognition section
- [ ] Partner company (Elegant Productions Colorado)
- [ ] CTA: "Let's Work Together"

**Key Points to Emphasize:**
- 8 years at Ritz-Carlton (luxury hospitality expert)
- Wedding MBA Graduate
- Event Industry Certified
- Based in Vail since 2013

---

### US-2.9: Services Overview Page
**As a** visitor
**I want** a comprehensive view of all services and pricing
**So that** I can determine fit and budget

**Acceptance Criteria:**
- [ ] `app/services/page.tsx` created
- [ ] Hero: "Services & Pricing"
- [ ] Service categories with expandable accordions or cards
- [ ] Pricing displayed prominently
- [ ] "What's Included" bullet lists
- [ ] Process overview (How It Works)
- [ ] FAQ section
- [ ] CTA: "Request a Quote"

**Services to Include:**
1. **Full Service Wedding Planning** - $95/person ($7,500 min)
2. **Wedding Management** - $3,000-$4,500
3. **Elopements** - $2,500-$4,500 (≤20 guests)
4. **Perfect Proposals** - $1,500-$1,800 + extras
5. **Bar/Bat Mitzvahs** - Custom pricing
6. **Social Parties** - Custom pricing

**Reference:** scraped-site/content/services.md

---

### US-2.10: Individual Service Pages
**As a** bride-to-be
**I want** detailed information about wedding planning services
**So that** I understand exactly what I'll receive

**Acceptance Criteria:**
- [ ] `app/services/weddings/page.tsx`
- [ ] `app/services/proposals/page.tsx`
- [ ] `app/services/events/page.tsx`
- [ ] Hero with service-specific image
- [ ] Detailed service description
- [ ] Pricing tier table (if applicable)
- [ ] Process timeline visual
- [ ] Sample timeline or checklist
- [ ] Related portfolio items
- [ ] Testimonials specific to service type
- [ ] CTA: "Book This Service"

**Weddings Page Sections:**
- Full Service Planning details
- Wedding Management details
- Elopement packages
- What's included comparison table
- Vendor partner logos

---

### US-2.11: Contact Page - Form
**As a** potential client
**I want** an easy way to reach out with my event details
**So that** I can get a response from Stephanie

**Acceptance Criteria:**
- [ ] `app/contact/page.tsx` created
- [ ] Multi-step form (3 steps) or single-page form
- [ ] Fields: Name, Email, Phone, Event Date, Event Type, Guest Count, Budget Range, Message
- [ ] Validation (email format, required fields)
- [ ] Success message after submission
- [ ] Error handling (display errors inline)
- [ ] Loading state during submission
- [ ] Form data sent to email (SendGrid/Resend)
- [ ] Optional: Save to database for lead tracking

**Form Steps:**
1. **About You** - Name, email, phone
2. **Your Event** - Type, date, location, guest count
3. **Details** - Budget, vision, how did you hear about us

**Alternative Contact Methods:**
- Direct email link: stephanie@partygirl.events
- Phone: (970) 306-3381
- Office address with embedded map

---

### US-2.12: Contact Page - Map & Info
**As a** visitor
**I want** to see Party Girl Events' location and contact details
**So that** I know they're local to my event area

**Acceptance Criteria:**
- [ ] Embedded Google Map (Vail, CO)
- [ ] Office address displayed
- [ ] Service areas listed (Vail, Beaver Creek, Breckenridge, Keystone, Aspen)
- [ ] Business hours
- [ ] Contact information (phone, email)
- [ ] Social media links
- [ ] "Available for destination events" note

---

### US-2.13: 404 Error Page
**As a** visitor who lands on a broken link
**I want** a helpful error page
**So that** I can navigate back to the site

**Acceptance Criteria:**
- [ ] `app/not-found.tsx` created
- [ ] Friendly error message ("Oops! This page doesn't exist")
- [ ] Suggestions: "Try searching or return home"
- [ ] Link to home page
- [ ] Link to services page
- [ ] Search bar (optional)
- [ ] Maintains header and footer
- [ ] On-brand design (not generic)

---

### US-2.14: Loading States
**As a** visitor
**I want** smooth transitions between pages
**So that** the site feels fast and polished

**Acceptance Criteria:**
- [ ] `app/loading.tsx` created
- [ ] Skeleton loaders for content areas
- [ ] Subtle spinner or progress indicator
- [ ] Maintains layout structure (no layout shift)
- [ ] Branded loading animation (champagne gold)
- [ ] Fast page transitions (< 200ms perceived)

---

### US-2.15: Responsive Design Testing
**As a** mobile user
**I want** the site to work perfectly on my phone
**So that** I can browse and book on-the-go

**Acceptance Criteria:**
- [ ] All pages tested at breakpoints: 375px, 768px, 1024px, 1440px
- [ ] Touch targets minimum 44x44px
- [ ] No horizontal scroll on mobile
- [ ] Images scale appropriately
- [ ] Forms are easy to fill on mobile
- [ ] Hamburger menu works smoothly
- [ ] Font sizes readable on small screens (min 16px body)
- [ ] CTAs prominent and thumb-friendly

**Test Devices:**
- iPhone 13/14 (390px)
- iPad (768px)
- Desktop (1440px)

---

## Dependencies

### Technical
- **Blocks:** Epic 1 (Foundation & Infrastructure) - needs components
- **Related:** Epic 3 (Portfolio & Blog) - shares layout components

### Content
- Migrated content from scraped-site/content/
- High-resolution images from scraped-site/images/
- Award badge images
- Stephanie's bio and photo

### External
- Email service (SendGrid/Resend) for contact form
- Google Maps API key (optional for embedded map)

---

## Definition of Done

- [ ] All user stories completed and acceptance criteria met
- [ ] All pages are mobile-responsive
- [ ] Forms validated and functional
- [ ] Images optimized (WebP, responsive sizes)
- [ ] Lighthouse score > 85 on all pages
- [ ] Accessibility audit passed (WCAG AA)
- [ ] Cross-browser tested (Chrome, Safari, Firefox)
- [ ] Content reviewed and approved by Stephanie
- [ ] Deployed to Netlify staging environment
- [ ] Internal QA completed

---

## Technical Debt / Future Improvements

- Add Google Analytics to contact form
- A/B test different CTA copy
- Add live chat widget (from Epic 6)
- Implement calendar booking integration
- Add schema markup for local business SEO

---

## Related Epics

- **Blocked By:** Epic 1 (Foundation & Infrastructure)
- **Blocks:** Epic 4 (Lead Generation) - needs contact form
- **Related:** Epic 3 (Portfolio & Blog) - shares navigation

---

## References

- [scraped-site/content/home.md](../../scraped-site/content/home.md) - Original content
- [scraped-site/content/about.md](../../scraped-site/content/about.md) - Stephanie's bio
- [scraped-site/content/services.md](../../scraped-site/content/services.md) - Service details
- eleven-emmons-direct: Header patterns
- empmdumpsters: Footer, CTA, Testimonials
- partygirlevents-v1: Hero design
