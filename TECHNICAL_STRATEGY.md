# Party Girl Events - Technical Strategy

*Technical architecture derived from analysis of 20+ React/Next.js projects in cr-nattress repos*

---

## Executive Summary

Based on analysis of existing projects including **empmdumpsters**, **eleven-emmons-direct**, **westlake-hoa**, **chris-nattress**, **neuralift**, and **partygirlevents-v1**, this document outlines a technical strategy that leverages proven patterns, components, and architecture.

**Recommendation:** Build on the existing `partygirlevents-v1` foundation but migrate to **Next.js 16** with the modern stack used in westlake-hoa and neuralift projects.

---

## UI Pattern Analysis

### Tech Stack Summary Across Repos

| Project | Framework | React | Tailwind | Motion | UI Library |
|---------|-----------|-------|----------|--------|------------|
| empmdumpsters | Next.js 15 | 19 | v4 | Framer Motion 12 | Custom |
| eleven-emmons-direct | Next.js 14 | 18 | v3 | Framer Motion 12 | Custom |
| westlake-hoa | Next.js 16 | 19 | v4 | - | shadcn/ui |
| neuralift | Next.js 16 | 19 | v4 | Framer Motion 12 | Custom + Glass UI |
| chris-nattress | Next.js 15 | 19 | v3 | Framer Motion 12 | Custom |
| partygirlevents-v1 | Vite | 19 | v3 | Framer Motion 12 | Custom |

### Common Patterns Identified

#### 1. Component Architecture
```
components/
├── ui/              # Base components (Button, Card, Input, etc.)
├── sections/        # Page sections (Hero, CTA, Testimonials, etc.)
├── layout/          # Layout components (Header, Footer, Container)
└── [feature]/       # Feature-specific (chat, gallery, booking)
```

#### 2. CSS Design Tokens (from empmdumpsters)
```css
:root {
  /* Semantic naming for brand flexibility */
  --primary: #...;
  --primary-hover: #...;
  --primary-light: #...;
  
  --text: #...;
  --text-secondary: #...;
  --text-muted: #...;
  
  --bg: #...;
  --bg-alt: #...;
  --bg-muted: #...;
}
```

#### 3. Animation Library (from empmdumpsters)
```typescript
// lib/animations.ts
export const fadeUp: Variants = { ... }
export const staggerContainer: Variants = { ... }
export const springTransition: Transition = { ... }
export const tapScale = { scale: 0.98 }
export const hoverScale = { scale: 1.02 }
```

#### 4. Typography Pattern
```css
--font-sans: 'Inter', system-ui, sans-serif;
--font-serif: 'Playfair Display', Georgia, serif; /* Headers */
```

---

## Recommended Stack

### Core Framework
```json
{
  "next": "^16.1.0",
  "react": "^19.2.0",
  "typescript": "^5.8.0"
}
```

**Rationale:** Next.js 16 is used in the most recent projects (westlake-hoa, neuralift) with React 19 for improved performance and concurrent features.

### Styling
```json
{
  "tailwindcss": "^4.0.0",
  "@tailwindcss/postcss": "^4.0.0",
  "clsx": "^2.1.0",
  "tailwind-merge": "^2.5.0"
}
```

**Rationale:** Tailwind v4 with CSS-first configuration (used in empmdumpsters) provides better performance and simpler setup.

### Animation
```json
{
  "framer-motion": "^12.23.0"
}
```

**Rationale:** Used consistently across all animated projects for smooth, performant animations.

### UI Components
```json
{
  "lucide-react": "^0.562.0",
  "@radix-ui/react-slot": "^1.0.0",
  "class-variance-authority": "^0.7.0"
}
```

**Rationale:** Combine shadcn/ui patterns (from westlake-hoa) with custom components (from empmdumpsters) for maximum flexibility.

### Optional Enhancements
```json
{
  "react-hook-form": "^7.50.0",      // Forms
  "zod": "^3.22.0",                   // Validation
  "@vercel/analytics": "^1.0.0",      // Analytics
  "next-mdx-remote": "^4.4.0"         // Blog content
}
```

---

## Component Library Design

### Base UI Components (from empmdumpsters pattern)

```typescript
// components/ui/Button.tsx
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}
```

### Recommended Components

#### Core UI (Priority 1)
| Component | Pattern Source | Notes |
|-----------|---------------|-------|
| `Button` | empmdumpsters | Variants + motion |
| `Card` | empmdumpsters | Shadow + hover lift |
| `Input` | westlake-hoa | Floating labels |
| `Container` | empmdumpsters | Max-width wrapper |
| `Badge` | westlake-hoa | Status indicators |

#### Sections (Priority 1)
| Component | Pattern Source | Notes |
|-----------|---------------|-------|
| `Hero` | partygirlevents-v1 | Full-screen, video bg |
| `Header` | eleven-emmons-direct | Sticky, transparent |
| `Footer` | empmdumpsters | Multi-column |
| `CTA` | empmdumpsters | Conversion focused |
| `Testimonials` | empmdumpsters | Carousel |

#### Feature Components (Priority 2)
| Component | Pattern Source | Notes |
|-----------|---------------|-------|
| `ChatWidget` | partygirlevents-v1 | AI assistant "Stella" |
| `Gallery` | eleven-emmons-direct | Masonry + lightbox |
| `BookingWidget` | eleven-emmons-direct | Calendar integration |
| `PricingCard` | partygirlevents-v1 | Service tiers |
| `Quiz` | partygirlevents-v1 | Lead qualification |

---

## Design System

### Color Palette (Party Girl Events)

```css
:root {
  /* Primary - Champagne Gold */
  --primary: #C9A227;
  --primary-hover: #B8911F;
  --primary-light: #F7E7CE;
  
  /* Secondary - Sage */
  --secondary: #9CAF88;
  --secondary-hover: #8A9D77;
  --secondary-light: #E8EDE4;
  
  /* Accent - Dusty Rose */
  --accent: #D4A5A5;
  --accent-light: #F5E1DA;
  
  /* Neutrals */
  --bg: #FDF8F3;           /* Cream */
  --bg-alt: #FFFAFA;       /* Snow */
  --text: #2C2C2C;         /* Charcoal */
  --text-secondary: #8A8680;
  --text-muted: #B8B4AE;
  
  /* Luxury Accents */
  --luxe-navy: #1C2541;
  --luxe-gold: #C9A227;
  --alpine-blue: #6B8E9F;
  --forest: #355E3B;
}
```

### Typography

```css
:root {
  /* Headings - Elegant Serif */
  --font-serif: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  
  /* Body - Modern Sans */
  --font-sans: 'Lato', 'Source Sans Pro', system-ui, sans-serif;
  
  /* Accent - Script (sparingly) */
  --font-script: 'Pinyon Script', cursive;
}
```

### Animation Tokens

```typescript
// lib/animations.ts (extend from empmdumpsters)
export const luxuryTransition: Transition = {
  type: 'tween',
  ease: [0.25, 0.1, 0.25, 1], // Elegant ease
  duration: 0.6,
}

export const parallaxScroll = {
  y: [0, -50],
  transition: { ease: 'linear' }
}
```

---

## Page Architecture

### Route Structure
```
app/
├── page.tsx                    # Home
├── about/page.tsx              # About Stephanie
├── services/
│   ├── page.tsx               # Services overview
│   ├── weddings/page.tsx      # Wedding planning
│   ├── proposals/page.tsx     # Proposal planning
│   └── events/page.tsx        # Social events
├── portfolio/
│   ├── page.tsx               # Gallery grid
│   └── [slug]/page.tsx        # Individual event
├── blog/
│   ├── page.tsx               # Blog listing
│   └── [slug]/page.tsx        # Blog post
├── contact/page.tsx           # Contact form
├── quiz/page.tsx              # Planning quiz
└── book/page.tsx              # Booking flow
```

### Key Pages (from partygirlevents-v1)

| Page | Sections | Interactive Elements |
|------|----------|---------------------|
| **Home** | Hero, Services, Portfolio preview, Testimonials, CTA | Chat widget, Scroll animations |
| **Services** | Hero, Service cards, Pricing, Process, FAQ | Expandable accordions |
| **Portfolio** | Filterable gallery, Lightbox | Category filters, Lazy load |
| **Contact** | Form, Map, Info | Multi-step form, Validation |
| **Quiz** | Multi-step questionnaire | Progress bar, Conditional logic |

---

## AI Integration Strategy

### Phase 1: Chat Assistant "Stella"
```typescript
// components/ChatWidget.tsx (from partygirlevents-v1)
// Enhance with:
// - OpenAI/Anthropic API backend
// - Conversation memory
// - Lead capture integration
// - Handoff to human
```

### Phase 2: Smart Forms
```typescript
// app/api/quote/route.ts
// - AI-powered budget estimation
// - Venue recommendations
// - Date availability check
```

### Phase 3: Vision Board Generator
```typescript
// app/api/vision-board/route.ts
// - Image analysis with OpenAI Vision
// - Style preference extraction
// - Mood board generation
```

---

## Performance Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP | < 2.5s | Image optimization, priority hints |
| FID | < 100ms | Code splitting, lazy loading |
| CLS | < 0.1 | Skeleton loaders, aspect ratios |
| Lighthouse | > 90 | All optimizations |

### Implementation
- Next.js Image component with blur placeholders
- Dynamic imports for heavy components
- Edge middleware for fast responses
- Vercel/Netlify edge caching

---

## Deployment Strategy

### Recommended: Netlify
**Rationale:** Used for empmdumpsters, eleven-emmons-direct, chris-nattress. Familiar patterns and configuration.

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Alternative: Vercel
Better native Next.js support, but Netlify is the established pattern.

---

## Migration Path from v1

### Phase 1: Foundation (Week 1)
1. Create Next.js 16 project with Tailwind 4
2. Copy design tokens from partygirlevents-v1
3. Set up component library structure (empmdumpsters pattern)
4. Implement base UI components

### Phase 2: Pages (Week 2)
1. Migrate Home page sections
2. Implement Services page
3. Build Portfolio gallery
4. Create Contact form

### Phase 3: Features (Week 3)
1. Add ChatWidget with AI backend
2. Implement booking flow
3. Add quiz functionality
4. Connect analytics

### Phase 4: Polish (Week 4)
1. Animation refinement
2. Performance optimization
3. SEO implementation
4. Testing & QA

---

## File Structure

```
party-girl-events/
├── app/
│   ├── globals.css           # Design tokens + base styles
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home
│   └── [routes]/             # Page routes
├── components/
│   ├── ui/                   # Base components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── index.ts
│   ├── sections/             # Page sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── index.ts
│   ├── layout/               # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   └── features/             # Feature components
│       ├── ChatWidget.tsx
│       ├── Gallery.tsx
│       └── BookingWidget.tsx
├── lib/
│   ├── animations.ts         # Framer Motion variants
│   ├── cn.ts                 # clsx + tailwind-merge
│   ├── data.ts               # Static data
│   └── utils.ts              # Helpers
├── public/
│   ├── images/               # Static images
│   └── fonts/                # Local fonts
├── content/                  # MDX blog posts
├── types/
│   └── index.ts              # TypeScript types
└── config/
    └── site.ts               # Site configuration
```

---

## Summary

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Framework | Next.js 16 | Latest, used in recent projects |
| React | 19 | Server components, concurrent |
| Styling | Tailwind 4 + CSS tokens | Performance, flexibility |
| Animation | Framer Motion 12 | Consistent across repos |
| UI Pattern | empmdumpsters hybrid | Best of both worlds |
| Hosting | Netlify | Established pattern |
| AI | OpenAI/Anthropic API | Chat + vision features |

**Estimated Timeline:** 4 weeks to MVP
**Complexity:** Medium (leveraging existing patterns)
**Risk:** Low (proven architecture)
