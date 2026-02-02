# Epic 10: Image Integration and Visual Enhancement

**Priority:** High
**Estimated Stories:** 12
**Dependencies:** Epic 2 (Core Pages), Epic 3 (Portfolio/Blog)

## Overview

Leverage the 50+ professional images already in `/public/images/` to create a visually stunning website that showcases Party Girl Events work, builds credibility through awards, and introduces Stephanie with authentic photography. Currently, many pages use placeholder or limited images. This epic integrates all available visual assets strategically throughout the site.

## Goals

- Replace all placeholder images with professional photography
- Add compelling hero image to homepage
- Introduce Stephanie with professional headshot/team photo on About page
- Display all award badges for credibility
- Create rich portfolio galleries with categorized images
- Optimize all images for web performance
- Ensure every page has appropriate, high-quality imagery

## Success Metrics

- 100% of pages use professional photography (no placeholders)
- Hero image loads in < 1.5s
- Lighthouse performance score remains > 90
- Portfolio showcases 30+ real event images
- All award badges visible on site
- Image alt text for accessibility (100% coverage)

---

## User Stories

### Homepage Hero Image

#### Story 10.1: Implement Stunning Hero Image
**As a** website visitor
**I want to** see a breathtaking hero image immediately when I land on the homepage
**So that** I am captivated and want to explore the site

**Acceptance Criteria:**
- Use one of the high-resolution wide images as hero background:
  - Option 1: `erikaericwedding0519-scaled.jpg` (943K, highest quality)
  - Option 2: `7B5A2883.jpg` (511K, large scenic shot)
  - Option 3: `7B5A1781-1.jpg` (307K, mountain wedding)
- Implement with Next.js Image component for optimization
- Add subtle overlay (0.2-0.3 opacity dark gradient) for text readability
- Ensure responsive behavior (different crops for mobile/tablet/desktop)
- Lazy load with priority for above-fold placement
- Test on various screen sizes for composition

**Image Selection Criteria:**
- Wide aspect ratio (21:9 or 16:9)
- Mountain or scenic Vail/Beaver Creek backdrop
- Shows event setup or celebration (not just landscape)
- High resolution for retina displays

---

#### Story 10.2: Secondary Hero Images for Other Key Pages
**As a** user browsing the site
**I want to** see beautiful hero images on Services, Portfolio, and About pages
**So that** each page feels premium and immersive

**Acceptance Criteria:**
- **Services page hero**: Use elegant setup or ceremony image
  - Suggested: `008-AXELPHOTO.jpg` or `202-AXELPHOTO-copy.jpg`
- **Portfolio page hero**: Use wide gallery or reception shot
  - Suggested: `Craig_Kimberly_Wdg-Favs-89.jpg` (Sonnenalp wedding)
- **About page hero**: Use team or behind-the-scenes image
  - Suggested: `team-photo-2.jpg` or professional event photo
- Implement consistent overlay pattern across all heroes
- Ensure text contrast passes WCAG AA standards

---

### About Page - Stephanie Introduction

#### Story 10.3: Add Stephanie Professional Photo to About Page
**As a** prospective client
**I want to** see who Stephanie is with a professional photo
**So that** I can connect with her personally and trust her expertise

**Acceptance Criteria:**
- Review `team-photo-2.jpg` and `IMG_0686-1.jpg` to identify if either shows Stephanie
- If suitable image exists:
  - Add to About page in "Meet Stephanie" section
  - Use circular or rounded crop for professional headshot style
  - Position near bio text for visual connection
- If no suitable solo photo exists:
  - Use team photo with caption identifying Stephanie
  - Consider requesting professional headshot for future use
- Add alt text: "Stephanie Fleck, Founder of Party Girl Events"
- Optimize image size (aim for < 100KB after optimization)

---

#### Story 10.4: Behind-the-Scenes and Work Photos on About Page
**As a** potential client
**I want to** see Stephanie in action planning events
**So that** I can visualize what working with her looks like

**Acceptance Criteria:**
- Create "Our Approach" or "How We Work" section on About page
- Use candid event photos showing:
  - Event setup and coordination
  - Vendor collaboration
  - Detail styling
- Suggested images:
  - `Proposal-Session-WP-0081-1.jpg` (proposal setup)
  - `Michelle-Dan-Wedding-29.jpg` or `Michelle-Dan-Wedding-94.jpg` (wedding coordination)
- Arrange in 2-3 column grid
- Add captions describing what is happening in each photo

---

### Award Badges and Credibility

#### Story 10.5: Display All Award Badges on About and Footer
**As a** visitor evaluating Party Girl Events
**I want to** see awards and certifications immediately
**So that** I trust their expertise and credibility

**Acceptance Criteria:**
- Create awards section on About page titled "Awards and Recognition"
- Display all award badges in grid layout:
  - The Knot Best of Weddings: `BOW_2018_Badges500x500-e1517675417192.png`, `BOW_2019_Badge_1024.jpg`, `badge-weddingawards_en_US.jpg`
  - WeddingWire: `wedding-wire-e1485150093817-1.jpg`
  - The Knot: `the-knot-web-1.jpg`
  - Wedding Chicks: `WeddingChicksBadge2019.jpg`
  - How They Asked: `HowTheyAsked_Badge_White-1.png`
  - Certified Wedding Planner: `EI-Certification-Badge.jpg`
  - WMBA Graduate: `WMBA-Badge.b-2018-Graduate.jpg`
  - Mitzvah Planning: `Mitzvah-Badge_1.png`
  - Featured Badge: `CO-FEATURED-BADGE-e1494297369340.png`
  - As Seen On: `As-Seen-On-Web-1.jpg`
- Add footer version with 3-4 key badges (The Knot, WeddingWire, CWEP)
- Ensure badges are sized consistently (max 120px height)
- Add alt text for each badge

---

#### Story 10.6: Awards Carousel on Homepage
**As a** first-time visitor
**I want to** see Party Girl Events credentials immediately on the homepage
**So that** I feel confident reaching out

**Acceptance Criteria:**
- Add "Trusted by Couples Since 2015" or "Award-Winning Planning" section to homepage
- Create horizontal auto-scrolling carousel of top 5-6 award badges
- Include: The Knot Best of Weddings, WeddingWire, CWEP, How They Asked
- Subtle animation (slow auto-scroll or fade rotation)
- Mobile-responsive (stack or smaller carousel on mobile)

---

### Portfolio Gallery Enhancement

#### Story 10.7: Categorized Portfolio Galleries
**As a** visitor exploring Party Girl Events work
**I want to** see images organized by event type
**So that** I can find inspiration relevant to my needs

**Acceptance Criteria:**
- Organize images into categories on Portfolio page:
  - **Weddings**: Mountain weddings, elegant receptions, ceremony setups
  - **Proposals**: Romantic setups, scenic locations
  - **Events**: Bar/Bat Mitzvahs, birthday celebrations
- Categorize existing images:
  - **Weddings**: `erikaericwedding0519-scaled.jpg`, `Craig_Kimberly_Wdg-Favs-89.jpg`, `7B5A1781-1.jpg`, `7B5A2883.jpg`, `kelsey-booth-photography-*.jpg`, `Michelle-Dan-Wedding-*.jpg`, `2021-08-28-Wedding-Kolger-*.jpg`
  - **Proposals**: `Proposal-Session-WP-0081-1.jpg`, `008-AXELPHOTO.jpg`, `202-AXELPHOTO-copy.jpg`, `063-resized-ToniAxelrodStudios-2.jpg`
  - **Events**: `2019-04-01-David-Tutera-Bermuda-881-1200x640.jpg`, `banner4.jpg`
- Implement filter buttons or tabs to switch between categories
- Show 12-20 images per category
- Maintain lightbox functionality from Epic 3

---

#### Story 10.8: Portfolio Detail Pages with Full Image Sets
**As a** bride researching real weddings
**I want to** see complete image sets from each event
**So that** I can understand the full scope of Party Girl Events work

**Acceptance Criteria:**
- Create individual portfolio pages for featured events:
  - `/portfolio/camp-hale-erika-eric` - Use `erikaericwedding0519-*.jpg` images
  - `/portfolio/sonnenalp-kimmy-craig` - Use `Craig_Kimberly_Wdg-Favs-89*.jpg` images
  - `/portfolio/vail-mountain-proposal` - Use `008-AXELPHOTO.jpg`, `202-AXELPHOTO-copy.jpg`
- Each page includes:
  - Hero image from the event
  - 6-12 additional images in gallery grid
  - Event details (venue, date, guest count)
  - Client testimonial if available
  - Vendor credits
- Link from main portfolio gallery to detailed pages

---

### Services Page Imagery

#### Story 10.9: Service-Specific Photography
**As a** visitor evaluating specific services
**I want to** see relevant images for each service offering
**So that** I can visualize what that service delivers

**Acceptance Criteria:**
- Update Services page with service-specific imagery:
  - **Full Service Wedding Planning**: Reception setup, ceremony, coordination images
    - Use: `7B5A2883.jpg`, `Craig_Kimberly_Wdg-Favs-89.jpg`
  - **Wedding Management**: Behind-the-scenes setup, timeline coordination
    - Use: `Michelle-Dan-Wedding-29.jpg`, `kelsey-booth-photography-329.jpg`
  - **Elopement Planning**: Intimate ceremony, mountain backdrops
    - Use: `7B5A1781-1.jpg`, `87A5829-1.jpg`
  - **Proposal Planning**: Romantic setups, scenic locations
    - Use: `Proposal-Session-WP-0081-1.jpg`, `008-AXELPHOTO.jpg`
- Each service card or section displays relevant image
- Consistent image aspect ratio across all services (square or 4:3)

---

### Blog Post Featured Images

#### Story 10.10: Assign Relevant Images to All Blog Posts
**As a** blog reader
**I want to** see compelling featured images on each blog post
**So that** I am drawn to read the content

**Acceptance Criteria:**
- Update all 10 blog posts with relevant featured images from `/public/images/`
- Current assignments (verify and update if better options exist):
  - Micro weddings: `7B5A1781-1.jpg` ✓
  - Elopements: `008-AXELPHOTO.jpg` ✓
  - Sustainable weddings: `7B5A1781-1.jpg` (consider alternative)
  - Content creator: `008-AXELPHOTO.jpg` (consider alternative)
  - AI planning: `7B5A2883.jpg` ✓
  - Non-traditional venues: `7B5A2883.jpg` (consider alternative)
  - Interactive experiences: `7B5A1781-1.jpg` (consider alternative)
  - Statement florals: `008-AXELPHOTO.jpg` (consider alternative)
  - Engagement rings: `7B5A2883.jpg` (consider alternative)
  - Proposal planning: `008-AXELPHOTO.jpg` ✓
- Ensure variety across all posts (do not reuse same image excessively)
- Add in-content images where relevant (ceremony setups, detail shots)

---

### Image Optimization

#### Story 10.11: Optimize All Images for Web Performance
**As a** website visitor on mobile or slow connection
**I want to** pages to load quickly despite rich imagery
**So that** I have a smooth browsing experience

**Acceptance Criteria:**
- Audit all images currently in `/public/images/`
- For images > 500KB:
  - Use Next.js Image component with automatic optimization
  - Define appropriate sizes prop for responsive loading
  - Implement blur placeholder for progressive loading
- For smaller images (badges, logos):
  - Ensure PNG images < 50KB
  - Convert to WebP where appropriate
- Implement lazy loading for below-fold images
- Use priority loading only for hero images
- Test with Lighthouse to ensure:
  - LCP remains < 2.5s
  - Performance score > 90
  - Properly sized images (no oversized downloads)

**Technical Implementation:**
```typescript
// Example Next.js Image usage
<Image
  src="/images/7B5A2883.jpg"
  alt="Vail mountain wedding reception"
  width={1920}
  height={1080}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority={false}
  placeholder="blur"
  blurDataURL="..." // Generate with sharp or plaiceholder
/>
```

---

#### Story 10.12: Comprehensive Image Alt Text for Accessibility
**As a** visually impaired user with a screen reader
**I want to** understand what each image represents
**So that** I can fully experience the website content

**Acceptance Criteria:**
- Add descriptive alt text to all images site-wide
- Alt text guidelines:
  - **Event photos**: "Mountain wedding ceremony at Camp Hale with aspen grove backdrop"
  - **Detail shots**: "Blush and white floral centerpiece with gold candlesticks"
  - **Award badges**: "The Knot Best of Weddings 2019 award badge"
  - **Stephanie photo**: "Stephanie Fleck, founder of Party Girl Events"
  - **Decorative images**: Use empty alt="" if purely decorative
- Audit all `<Image>` components for alt text
- Test with screen reader (macOS VoiceOver or NVDA)
- Document alt text standards in component documentation

---

## Image Inventory by Category

### Hero/Banner Images (Wide Format)
- `erikaericwedding0519-scaled.jpg` (943K) - Premium quality
- `7B5A2883.jpg` (511K) - Mountain reception
- `7B5A1781-1.jpg` (307K) - Ceremony setup
- `erikaericwedding0519-1280x640.jpg` (249K) - Pre-cropped hero
- `2019-04-01-David-Tutera-Bermuda-881-1200x640.jpg` (152K)

### Wedding Photography
- `Craig_Kimberly_Wdg-Favs-89.jpg` (144K) - Sonnenalp reception
- `Michelle-Dan-Wedding-29.jpg`, `Michelle-Dan-Wedding-94.jpg`
- `2021-08-28-Wedding-Kolger-C-10017-RESIZED.jpg` (94K)
- `kelsey-booth-photography-329.jpg`, `kelsey-booth-photography-339.jpg`, `kelsey-booth-photography-719.jpg`
- `87A5829-1.jpg` (137K) - Intimate ceremony

### Proposal Photography
- `008-AXELPHOTO.jpg` (228K) - Proposal setup
- `202-AXELPHOTO-copy.jpg` (222K) - Romantic moment
- `Proposal-Session-WP-0081-1.jpg`
- `063-resized-ToniAxelrodStudios-2.jpg` (70K)

### Team/About Photos
- `team-photo-2.jpg` (review for Stephanie)
- `IMG_0686-1.jpg` (review for headshot)

### Award Badges
- The Knot: `BOW_2018_Badges500x500-e1517675417192.png`, `BOW_2019_Badge_1024.jpg`, `badge-weddingawards_en_US.jpg`, `the-knot-web-1.jpg`
- WeddingWire: `wedding-wire-e1485150093817-1.jpg`
- Wedding Chicks: `WeddingChicksBadge2019.jpg`
- How They Asked: `HowTheyAsked_Badge_White-1.png`
- Certifications: `EI-Certification-Badge.jpg`, `WMBA-Badge.b-2018-Graduate.jpg`
- Featured: `As-Seen-On-Web-1.jpg`, `CO-FEATURED-BADGE-e1494297369340.png`
- Mitzvah: `Mitzvah-Badge_1.png`

### Logos
- `new-logo.png` (already in use in Header)
- `header-logo-3-2.png` (alternative)
- `favicon.png` (site favicon)

### Other Event Photos
- `2019-04-01-David-Tutera-Bermuda-881-1200x640.jpg` (event/mitzvah)
- `banner4.jpg` (75K) - Event banner
- `Sydney-2.png`, `Sydney-2-1024x678.png` - Proposal or event

---

## Technical Notes

- Use Next.js Image component for all images (automatic optimization)
- Implement responsive images with sizes prop
- Use blur placeholders for progressive loading
- Lazy load all below-fold images
- Priority load only hero images
- Consider creating `lib/images.ts` for centralized image metadata
- Store image alt text and descriptions in constants for consistency
- Use WebP format where supported (Next.js handles automatically)

---

## Dependencies

- Epic 2: Core Website Pages (About, Services, Contact)
- Epic 3: Portfolio & Blog (gallery structure)
- All images already available in `/public/images/`

---

## Success Criteria

- Homepage hero image loads < 1.5s on 3G
- All pages have professional photography (no placeholders)
- Portfolio showcases 30+ categorized images
- All 11 award badges visible on site
- Stephanie professional photo on About page
- 100% image alt text coverage
- Lighthouse performance score > 90
- Visual consistency across all pages
