# Party Girl Events

Research, assets, and planning resources for Party Girl Events website redesign.

## Contents

### `/research`
- **ADJACENT_INDUSTRIES_RESEARCH.md** - Comprehensive analysis of modern approaches from event planning, hospitality, wedding tech, bachelorette apps, nightlife booking, and group travel industries.

### `/scraped-site`
Original website content and assets from partygirl.events:
- **`images/`** - 50 images (logos, badges, portfolio photos) ~16MB
- **`content/`** - Markdown versions of all pages and blog posts
- **`SCRAPED_CONTENT_INDEX.md`** - Complete inventory of scraped assets

## Key Opportunities Identified

1. **Mobile-first group coordination** (shared itineraries, real-time updates)
2. **Integrated payment splitting** (Venmo/CashApp)
3. **AI-powered party visualization**
4. **Immersive, sensory-rich experience design**
5. **VIP concierge personalization**

## Quick Wins

- Shared digital itinerary for each party
- Payment QR codes on invoices
- Group polling for decisions
- Instagram-ready photo moments
- Curated experience gallery

---

## Technical Strategy

See **[TECHNICAL_STRATEGY.md](./TECHNICAL_STRATEGY.md)** for complete technical architecture.

### Stack Summary
| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 |
| UI | React 19 + Tailwind 4 |
| Animation | Framer Motion 12 |
| AI | OpenAI/Anthropic API |
| Hosting | Netlify |

### Architecture Highlights
- Component patterns from `empmdumpsters`, `westlake-hoa`, `neuralift`
- CSS design tokens for brand flexibility
- AI chat assistant "Stella" for 24/7 support
- Vision board generator with image analysis
- Smart booking flow with availability checking

### Key Pages
1. **Home** - Hero, services preview, testimonials, CTA
2. **Services** - Weddings, proposals, events with pricing
3. **Portfolio** - Filterable gallery with lightbox
4. **Quiz** - Lead qualification questionnaire
5. **Contact** - Multi-step form with booking integration

---

## Related Resources

- **Existing v1 prototype:** `~/git/cr-nattress/partygirlevents-v1/`
- **UI patterns from:** empmdumpsters, eleven-emmons-direct, westlake-hoa, neuralift
- **Design system:** See TECHNICAL_STRATEGY.md for color palette and typography

## Contact

Stephanie - stephanie@partygirl.events

---

*Research compiled: February 2026*
