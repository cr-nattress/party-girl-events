# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Party Girl Events is a modern wedding and event planning website for Vail, Colorado. The project consists of:
- **Next.js 16 application** in `party-girl-events-app/` (production codebase)
- **Product backlog** in `backlog/` with 10 epics and 110 user stories
- **Research materials** including scraped original website content and industry analysis

## Development Commands

```bash
# Navigate to app directory first
cd party-girl-events-app

# Development
npm run dev              # Start dev server at http://localhost:3000
npm run build           # Production build
npm start               # Start production server

# Code quality
npm run lint            # Run ESLint
npm run format          # Format with Prettier
npm run type-check      # TypeScript type checking
```

## Architecture Overview

### Tech Stack
- **Framework:** Next.js 16 with App Router (Server/Client Components)
- **React:** 19.0.0 with concurrent features
- **TypeScript:** 5.8 with strict mode
- **Styling:** Tailwind CSS 4 (CSS-first configuration)
- **Animation:** Framer Motion 12
- **Icons:** Lucide React

### Component Architecture

```
components/
├── ui/              # Base components (Input, Textarea, Select)
├── sections/        # Page sections (Hero, CTA, Testimonials, ServicesPreview)
├── layout/          # Layout components (Header, Footer, Container)
└── features/        # Future: complex features (chat, booking, etc.)
```

**Key pattern:** Components use the `cn()` utility from `lib/cn.ts` for conditional Tailwind classes with proper merging.

### Design System (CSS Custom Properties)

Located in `app/globals.css`:
- **Primary (Champagne Gold):** `--primary` (#C9A227)
- **Secondary (Sage):** `--secondary` (#9CAF88)
- **Accent (Dusty Rose):** `--accent` (#D4A5A5)
- **Background (Cream):** `--bg` (#FDF8F3)

Access in components via `var(--primary)`, `var(--bg)`, etc.

### Typography
- **Headings:** Cormorant Garamond (serif) via `--font-serif`
- **Body:** Lato (sans-serif) via `--font-sans`
- **Accent:** Pinyon Script (cursive) via `--font-accent`

Fonts loaded in `app/layout.tsx` using `next/font/google`.

### Animation Library

Reusable Framer Motion variants in `lib/animations.ts`:
- `fadeUp`, `fadeIn`, `fadeOut`
- `staggerContainer`, `staggerItem`
- `slideIn`, `slideOut`
- `springTransition`, `luxuryTransition`

Usage pattern:
```tsx
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

<motion.div variants={staggerContainer} initial="initial" whileInView="animate">
  <motion.h1 variants={fadeUp}>Title</motion.h1>
</motion.div>
```

### Utilities (`lib/utils.ts`)

Key functions:
- `formatPrice(amount: number, perPerson?: boolean)` - Currency formatting
- `formatPriceRange(min: number, max: number)` - Range formatting
- `formatDate(date: Date, format: 'short' | 'long')` - Date formatting
- `isValidEmail(email: string)` - Email validation
- `isValidPhone(phone: string)` - Phone validation

## Critical Implementation Patterns

### Next.js 16 Async Params

**IMPORTANT:** In Next.js 16, route params are Promises and must be awaited:

```tsx
// Correct pattern for dynamic routes
interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  // use slug...
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  // use slug...
}
```

This is already implemented in `app/blog/[slug]/page.tsx`.

### String Literals and Apostrophes

**CRITICAL:** The build parser fails on apostrophes in string literals. Always use full words:
- ✅ `"What is the Difference"`
- ❌ `"What's the Difference"` (causes parse error)

This applies to all TypeScript/TSX files, especially in `lib/blog.ts`.

### Header Text Color by Route

The Header component (`components/layout/Header.tsx`) uses `usePathname()` to conditionally style navigation:
- **Homepage (`/`)**: White text when not scrolled (over dark hero image), dark text when scrolled
- **All other pages**: Always dark text

Implemented with `isHomepage && !isScrolled` logic.

### Blog Post Structure

Blog posts are stored as data in `lib/blog.ts` with interface:
```typescript
interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string  // Full markdown-like content
  date: string
  category: 'Planning Tips' | 'Real Weddings' | 'Proposals' | 'Trends'
  author: string
  readTime: string
  image: string
  tags: string[]
}
```

Content is rendered with `dangerouslySetInnerHTML` after basic markdown parsing. Styles applied via `.article-content` class in `globals.css`.

## Page Structure

Current pages (all in `app/`):
- `/` - Homepage with Hero, ServicesPreview, PortfolioHighlights, Testimonials, CTA
- `/about` - Stephanie bio, credentials, timeline, awards, social links
- `/services` - All service offerings with pricing
- `/portfolio` - Image gallery with filtering
- `/blog` - Blog listing with category filtering
- `/blog/[slug]` - Individual blog posts (10 posts total)
- `/contact` - Contact form with validation

All pages use Header and Footer layout components.

## Image Integration

Images stored in `public/images/` (50+ professional photos):
- Next.js Image component used throughout for optimization
- Hero images sized with priority loading
- Award badges displayed on About page and Footer
- Blog posts use variety of images (no repeats across 10 posts)

## Social Media and External Links

All links open in new tabs with `target="_blank"` and `rel="noopener noreferrer"`:
- **Instagram:** @partygirl.events
- **Facebook:** /PartyGirlVail
- **Pinterest:** /partygirlevents
- **The Knot:** Profile link in Footer and About
- **WeddingWire:** Profile link in Footer and About

## Known Issues and Patterns

1. **Service card links:** Homepage service cards link to anchor IDs on `/services` page (e.g., `/services#proposals`)
2. **CTA secondary buttons:** Default to `/quiz` which doesn't exist yet - override with actual page links
3. **Mobile menu:** Toggles with AnimatePresence, closes on link click
4. **Scroll-based header:** Uses `isScrolled` state triggered at 20px scroll threshold

## Product Backlog Structure

Located in `backlog/`:
- **BACKLOG_INDEX.md:** Overview, phases, personas, metrics
- **epics/01-10:** Individual epic files with user stories

Epic status (as of Feb 2026):
- ✅ Epic 1-3: Complete (Foundation, Core Pages, Blog)
- ✅ Epic 9-10: Complete (Content Integration, Image Integration)
- 📋 Epic 4-8: Planned (Lead Gen, Client Portal, AI, Group Coord, Performance)

## Content Sources

- **Original site content:** `scraped-site/` contains 50 images and blog posts
- **Blog briefs:** `blog/01-10/` contains planning briefs for all blog posts
- **Research:** `research/ADJACENT_INDUSTRIES_RESEARCH.md` for feature inspiration
- **Technical strategy:** `TECHNICAL_STRATEGY.md` for architecture decisions

## Deployment

Configured for Netlify (not yet deployed):
- Build command: `npm run build`
- Publish directory: `.next`
- Framework: Next.js (auto-detected)

Configuration in `netlify.toml` when ready.

## Contact Information

**Business Owner:** Stephanie Fleck
- Email: stephanie@partygirl.events
- Phone: (970) 306-3381
- Office: 19 Vail Rd., Vail, CO 81657
- Service Areas: Vail, Beaver Creek, Aspen, Breckenridge, Keystone
