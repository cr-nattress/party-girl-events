# Epic 9: Content Integration

**Priority:** High
**Estimated Stories:** 14
**Dependencies:** Epic 2 (Core Pages), Epic 3 (Blog System)

## Overview

Integrate all authentic content from the original partygirl.events website, including real wedding stories, proposal narratives, client testimonials, vendor relationships, and press coverage. This epic transforms the website from a template to a rich, authentic showcase of Party Girl Events work and expertise.

## Goals

- Showcase 4 complete real wedding and proposal stories with full narratives
- Integrate authentic client testimonials throughout the site
- Display comprehensive vendor network and relationships
- Add press coverage and media mentions for credibility
- Enrich portfolio with real event photos and details
- Replace placeholder content with real business information

## Success Metrics

- 4+ full blog posts with real client stories published
- 10+ authentic client testimonials displayed
- 20+ vendor relationships showcased
- 3+ press mentions integrated
- 50+ real event photos in portfolio
- Zero placeholder content remaining

---

## User Stories

### Real Wedding and Proposal Blog Posts

#### Story 9.1: Camp Hale Wedding Blog Post
**As a** prospective client
**I want to** read about a real Camp Hale wedding with all the details
**So that** I can envision my own mountain wedding and see vendor recommendations

**Acceptance Criteria:**
- Full blog post created for Erika and Eric Camp Hale wedding
- Include client testimonial quote from bride
- List all vendors with links (photographer, florist, caterer, venue, etc.)
- Add relevant images from scraped-site
- Include tags: mountain wedding, camp hale, real wedding, vendor guide
- Category: Real Weddings

**Content Source:** `/scraped-site/content/blog/camp-hale-wedding.md`

---

#### Story 9.2: Sonnenalp Wedding Blog Post
**As a** bride researching Vail venues
**I want to** see a real Sonnenalp wedding with pastel florals and design details
**So that** I can understand what is possible at this venue

**Acceptance Criteria:**
- Full blog post created for Kimmy and Craig Sonnenalp wedding
- Highlight deconstructed arch design concept
- Include client testimonial about planning from distance
- List all vendors: Gillespie Photography, Elite DJ, A Secret Garden, BBJ Linens, Weemala
- Mention unique details: After The Tone audio guest book, pastel florals
- Add ceremony and reception photos
- Category: Real Weddings

**Content Source:** `/scraped-site/content/blog/sonnenalp-wedding.md`

---

#### Story 9.3: Arrabelle Proposal Blog Post
**As a** partner planning a proposal
**I want to** see how Party Girl Events executed a romantic candle-lit proposal
**So that** I can understand the proposal planning process and creative solutions

**Acceptance Criteria:**
- Full blog post created for Michael and Samantha Arrabelle proposal
- Include backstory: 5 years together, wanted nighttime proposal
- Describe pivot from ice rink to staircase location
- Detail setup: candles covering staircase, floral arrangements, candelabras, rose petal trail
- Include "happy hour for hotel guests" ruse detail
- Mention rose petal turndown service in room
- List vendors: The Arrabelle, Rose Petals florist, Gabriela Mata Photography
- Category: Proposals

**Content Source:** `/scraped-site/content/blog/arrabelle-proposal.md`

---

#### Story 9.4: Vail Mountain Viral Proposal Blog Post
**As a** potential proposal client
**I want to** read about the viral TikTok proposal with Frenship
**So that** I can see what an over-the-top elevated proposal looks like

**Acceptance Criteria:**
- Full blog post created for Christine and Machi Vail Mountain proposal
- Highlight that it went viral on TikTok
- Detail unique elements: flew in favorite band Frenship, mountain top location
- List all setup details: velvet runner, lanterns, personalized champagne flutes, white fur rug
- Include surprise elements: pretend photo shoot, "brunch" story
- Describe after-proposal activities: FaceTime parents, mini concert, love letter
- Mention custom sapphire ring design
- List all 9 vendors including Frenship, Gold Heart Weddings, Toni Axelrod
- Category: Proposals

**Content Source:** `/scraped-site/content/blog/vail-mountain-proposal.md`

---

### Testimonials Integration

#### Story 9.5: Homepage Testimonials Update
**As a** website visitor
**I want to** see real client testimonials on the homepage
**So that** I can trust Party Girl Events expertise

**Acceptance Criteria:**
- Replace placeholder testimonials with 3 real quotes from blog posts
- Use Camp Hale bride quote about attention to detail
- Use Sonnenalp bride quote about planning from distance
- Add client names and event types
- Ensure quotes are formatted with proper attribution

**Content Sources:**
- Camp Hale: "WOW – just WOW! Stephanie and her team are experts..."
- Sonnenalp: "Stephanie and her team are a must have for your wedding experience..."
- VoyageDenver: qualities clients mention - Professional, Calming, Sweet, Above and Beyond

---

#### Story 9.6: Dedicated Testimonials Page
**As a** prospective client doing research
**I want to** read a comprehensive collection of client testimonials
**So that** I can evaluate Party Girl Events track record

**Acceptance Criteria:**
- Create `/testimonials` page
- Display all client testimonials from blog posts
- Include context (venue, event type, year)
- Add filter by service type (wedding, proposal, event)
- Include award badges: The Knot Best of Weddings, WeddingWire Couples Choice
- Link to full blog posts for detailed stories

---

### Vendor Network Showcase

#### Story 9.7: Preferred Vendors Page
**As a** bride planning a Vail wedding
**I want to** see Party Girl Events vendor network and recommendations
**So that** I can trust I will work with the best local vendors

**Acceptance Criteria:**
- Create `/vendors` page
- List all vendors by category: Photography, Florals, Entertainment, Rentals, Hair/Makeup, Catering
- Include vendor logos and links where available
- Show which real weddings featured each vendor
- Categories:
  - Photography: Toni Axelrod Studios, Gillespie Photography, Autumn Cutaia, Gabriela Mata, Nate and Jenny Weddings, Gold Heart Weddings (video)
  - Florals: A Secret Garden, Rose Petals
  - Entertainment: Elite DJ, Frenship, The Union Band
  - Rentals: Event Rents, BBJ Linen, The Balloon Bar
  - Hair/Makeup: Weemala
  - Catering: Splendido, Rocky Mountain Raclette
  - Venues: Camp Hale, The Sonnenalp, The Arrabelle, Vail Wedding Island

---

### Press and Media Coverage

#### Story 9.8: Press Coverage Section on About Page
**As a** potential client
**I want to** see that Party Girl Events has been featured in press
**So that** I can trust their credibility and expertise

**Acceptance Criteria:**
- Add "Featured In" section to About page
- Include Vail Daily article reference (Feb 2020)
- Include VoyageDenver interview reference
- Add quotes from press:
  - "Over-the-top creative and personalized engagements are trending now" - Vail Daily
  - "Good customer service/hospitality is a skill...made it the foundation of my business" - VoyageDenver
- Link to full articles if hosted on site

**Content Sources:**
- `/site-updates/vaildaily-vail-marriage-proposals-elevated/content.md`
- `/site-updates/voyagedenver-stephanie-fleck-party-girl-events/content.md`

---

#### Story 9.9: Awards and Recognition Section
**As a** bride researching planners
**I want to** see Party Girl Events awards and certifications
**So that** I can verify their professional credentials

**Acceptance Criteria:**
- Add awards section to About or Services page
- Display: The Knot Best of Weddings (annual winner)
- Display: WeddingWire Couples Choice Award (annual winner)
- Show: Certified Wedding and Event Planner (CWEP)
- Show: 8 years Ritz-Carlton experience
- Show: 11+ years in business (2015-2026)
- Add award badge graphics if available

---

### Portfolio Enhancement

#### Story 9.10: Detailed Event Pages for Portfolio
**As a** potential client
**I want to** click on portfolio images and see full event details
**So that** I can understand the scope and style of Party Girl Events work

**Acceptance Criteria:**
- Create individual pages for each portfolio event
- `/portfolio/camp-hale-wedding` - full details with vendor list
- `/portfolio/sonnenalp-wedding` - design concept and details
- `/portfolio/arrabelle-proposal` - setup and story
- `/portfolio/vail-mountain-proposal` - viral proposal details
- Each page includes: photos, client quote, vendor credits, unique elements
- Link from portfolio gallery to detailed pages

---

#### Story 9.11: Proposal Portfolio Gallery
**As a** partner planning a proposal
**I want to** see a dedicated gallery of proposal setups and ideas
**So that** I can get inspired for my own proposal

**Acceptance Criteria:**
- Create `/proposals` or `/proposal-gallery` page
- Showcase both completed proposals with photos
- Include details from Vail Daily article proposals:
  - Mariana and Fernando: mountaintop picnic with Splendido catering
  - Sydney and Sam: horseback ride with meadow picnic
  - Kali and Ryan: snowshoe with guitarist and custom "Marry Me" letters
  - Chris and Kristen: tree lighting with Santa
  - Alex and Jenny: Splendido patio winter wonderland
- List proposal package inclusions: planning, props, photography (Toni Axelrod), rose petal turndown, same-day framed photo

**Content Source:** `/site-updates/vaildaily-vail-marriage-proposals-elevated/content.md`

---

### Business Information Updates

#### Story 9.12: Update About Page with VoyageDenver Interview Content
**As a** prospective client
**I want to** learn about Stephanie Fleck backstory and qualifications
**So that** I can connect with her personally and trust her expertise

**Acceptance Criteria:**
- Integrate VoyageDenver interview content into About page
- Include: moved to Vail 2013, Ritz-Carlton manager 8 years (Philly, SF, Tucson, Atlanta)
- Mention: "city girl at heart, but I love Vail"
- Add: CWEP certification
- Include client qualities: Professional, Calming, Sweet, Above and Beyond
- Add team mentions: Lisa (Aspen planner), Nikki (Breckenridge/Keystone planner)
- Emphasize: "above and beyond service" foundation from Ritz-Carlton

**Content Source:** `/site-updates/voyagedenver-stephanie-fleck-party-girl-events/content.md`

---

#### Story 9.13: Contact Information Verification
**As a** potential client
**I want to** see accurate contact information
**So that** I can easily reach Party Girl Events

**Acceptance Criteria:**
- Verify address: 19 Vail Road, Vail, CO 81657
- Phone: 970-306-3381
- Website: http://www.partygirl.events
- Instagram: @partygirl.events
- Facebook: /PartyGirlVail
- Pinterest: /partygirlevents
- Update footer and contact page with verified info
- Ensure all social media links are correct

**Content Source:** `/site-updates/voyagedenver-stephanie-fleck-party-girl-events/content.md`

---

#### Story 9.14: Service Areas and Coverage
**As a** destination client
**I want to** know which mountain resort areas Party Girl Events serves
**So that** I can determine if they cover my venue

**Acceptance Criteria:**
- Update Services page with service area information
- Primary areas: Vail, Beaver Creek, Aspen, Breckenridge, Keystone
- Emphasize local planner advantage
- Mention team structure: Stephanie (Vail), Lisa (Aspen), Nikki (Breckenridge/Keystone)
- Add map or visual showing coverage area
- Include note about destination events outside these areas (contact for details)

---

## Technical Notes

- All blog posts should follow existing BlogPost interface in `/lib/blog.ts`
- Images are already copied to `/public/images/` from scraped-site
- Vendor links should open in new tabs
- Ensure all apostrophes use proper escaping or full words to avoid parsing errors
- Use Next.js Image component for all photos with proper sizing
- Create utility function for vendor data management if needed
- Consider creating separate `/lib/vendors.ts` for vendor directory data

## Content Assets Available

**Blog Posts:** 4 complete stories ready for integration
**Photos:** 50 images in `/public/images/`
**Testimonials:** 2 detailed client quotes + quality descriptors
**Press Articles:** 2 full articles (Vail Daily, VoyageDenver)
**Vendor Relationships:** 20+ identified vendors with specialties
**Proposal Examples:** 7 documented proposals with details

## Dependencies

- Epic 2: Core Website Pages (About, Services, Portfolio, Contact)
- Epic 3: Portfolio and Blog System
- Image assets in public/images
- Blog system in lib/blog.ts
