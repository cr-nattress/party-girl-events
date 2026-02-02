# Epic 1: Foundation & Infrastructure

**Priority:** P0 (Must Have)
**Phase:** 1
**Estimated Duration:** 1-2 weeks

---

## Description

Establish the technical foundation for the Party Girl Events website by setting up the Next.js 16 project structure, implementing the design system, and creating reusable base components following patterns from proven projects (empmdumpsters, westlake-hoa, neuralift).

---

## Goals

- Create production-ready Next.js 16 + React 19 project
- Implement Party Girl Events design system with CSS design tokens
- Build reusable UI component library
- Set up development and deployment infrastructure
- Establish code quality and testing standards

---

## User Stories

### US-1.1: Project Initialization
**As a** developer
**I want** a Next.js 16 project with TypeScript and Tailwind 4 configured
**So that** I have a modern, type-safe foundation to build upon

**Acceptance Criteria:**
- [ ] Next.js 16.1.0+ initialized with TypeScript 5.8+
- [ ] React 19.2.0+ installed
- [ ] Tailwind CSS 4.0+ configured with CSS-first approach
- [ ] ESLint and Prettier configured
- [ ] Git repository initialized with proper .gitignore
- [ ] package.json scripts for dev, build, lint, format

**Technical Notes:**
- Follow empmdumpsters Tailwind 4 setup pattern
- Use CSS-first configuration (@tailwindcss/postcss)

---

### US-1.2: Design System Foundation
**As a** designer/developer
**I want** CSS design tokens for colors, typography, and spacing
**So that** the brand identity is consistent and easily maintainable

**Acceptance Criteria:**
- [ ] CSS variables defined in `app/globals.css`
- [ ] Color palette (champagne gold, sage, dusty rose, neutrals)
- [ ] Typography tokens (Cormorant Garamond, Lato, Pinyon Script)
- [ ] Spacing scale (4px base grid)
- [ ] Shadow and border radius tokens
- [ ] Dark mode tokens (optional for admin)

**Design Tokens:**
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
  --bg: #FDF8F3;
  --bg-alt: #FFFAFA;
  --text: #2C2C2C;
  --text-secondary: #8A8680;
  --text-muted: #B8B4AE;
}
```

---

### US-1.3: Typography Configuration
**As a** developer
**I want** custom fonts loaded and configured properly
**So that** the site matches the luxury brand aesthetic

**Acceptance Criteria:**
- [ ] Cormorant Garamond (headings) loaded via next/font
- [ ] Lato (body) loaded via next/font
- [ ] Pinyon Script (accents) loaded via next/font or CDN
- [ ] Font display: swap for performance
- [ ] Typography utility classes configured in Tailwind
- [ ] Line height and letter spacing optimized

---

### US-1.4: Animation Library
**As a** developer
**I want** reusable Framer Motion animation variants
**So that** animations are consistent and easy to implement

**Acceptance Criteria:**
- [ ] Framer Motion 12+ installed
- [ ] `lib/animations.ts` created with variants
- [ ] fadeUp, fadeIn, staggerContainer variants
- [ ] luxuryTransition with elegant easing
- [ ] Tap and hover scale interactions
- [ ] Parallax scroll utilities
- [ ] Documentation for each animation

**Reference:** empmdumpsters `lib/animations.ts`

---

### US-1.5: Button Component
**As a** developer
**I want** a flexible, accessible Button component
**So that** CTAs are consistent and follow design system

**Acceptance Criteria:**
- [ ] `components/ui/Button.tsx` created
- [ ] Variants: primary, secondary, outline, ghost
- [ ] Sizes: sm, md, lg
- [ ] Loading state with spinner
- [ ] Icon support (left/right)
- [ ] Full width option
- [ ] Disabled state styling
- [ ] Hover and tap animations
- [ ] Accessible (ARIA, keyboard navigation)

**Props Interface:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
  disabled?: boolean
}
```

---

### US-1.6: Card Component
**As a** developer
**I want** a Card component with variants
**So that** content containers are consistent

**Acceptance Criteria:**
- [ ] `components/ui/Card.tsx` created
- [ ] Default card with padding and shadow
- [ ] Hover lift effect (subtle scale + shadow)
- [ ] Variants: default, outlined, elevated
- [ ] Image card variant (overlay text)
- [ ] Clickable card (entire card interactive)
- [ ] Responsive padding

**Reference:** empmdumpsters Card pattern

---

### US-1.7: Input & Form Components
**As a** developer
**I want** form components (Input, Textarea, Select)
**So that** forms are accessible and visually consistent

**Acceptance Criteria:**
- [ ] `components/ui/Input.tsx` with floating label
- [ ] `components/ui/Textarea.tsx`
- [ ] `components/ui/Select.tsx`
- [ ] Error state styling
- [ ] Success state styling
- [ ] Disabled state
- [ ] Required indicator
- [ ] Help text support
- [ ] Accessible labels and ARIA

**Reference:** westlake-hoa floating label pattern

---

### US-1.8: Container & Layout Components
**As a** developer
**I want** layout components (Container, Section, Grid)
**So that** page structure is consistent

**Acceptance Criteria:**
- [ ] `components/layout/Container.tsx` - max-width wrapper
- [ ] `components/layout/Section.tsx` - section spacing
- [ ] `components/layout/Grid.tsx` - responsive grid
- [ ] Breakpoint-aware padding and margins
- [ ] Full-width and contained variants
- [ ] Vertical rhythm utilities

**Container Max Widths:**
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- content: 1440px (default)

---

### US-1.9: Badge Component
**As a** developer
**I want** a Badge component for status and labels
**So that** I can highlight awards and categories

**Acceptance Criteria:**
- [ ] `components/ui/Badge.tsx` created
- [ ] Variants: default, success, warning, accent
- [ ] Sizes: sm, md, lg
- [ ] Pill and rounded variants
- [ ] Icon support
- [ ] Semantic colors for accessibility

**Use Cases:**
- Award badges (The Knot, WeddingWire)
- Service categories
- Blog post tags
- Status indicators

---

### US-1.10: Utility Functions
**As a** developer
**I want** common utility functions centralized
**So that** code is DRY and maintainable

**Acceptance Criteria:**
- [ ] `lib/cn.ts` - clsx + tailwind-merge helper
- [ ] `lib/utils.ts` - common helpers
- [ ] Date formatting utilities
- [ ] Price formatting utilities ($95/person)
- [ ] String truncation/slugify
- [ ] Validation helpers

**Key Functions:**
- `cn(...classes)` - conditional class merging
- `formatPrice(amount, perPerson?)` - currency formatting
- `formatDate(date, format)` - consistent date display
- `slugify(text)` - URL-safe slugs

---

### US-1.11: Development Tools
**As a** developer
**I want** development tools and scripts configured
**So that** development workflow is efficient

**Acceptance Criteria:**
- [ ] Hot reload working in dev mode
- [ ] TypeScript strict mode enabled
- [ ] Path aliases configured (@/components, @/lib, etc.)
- [ ] Environment variable setup (.env.local template)
- [ ] npm scripts for common tasks
- [ ] VS Code settings recommended (optional)

**Scripts:**
```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write .",
  "type-check": "tsc --noEmit"
}
```

---

### US-1.12: Deployment Configuration
**As a** developer
**I want** Netlify deployment configured
**So that** the site can be deployed to production

**Acceptance Criteria:**
- [ ] `netlify.toml` configuration file
- [ ] Build command and publish directory set
- [ ] @netlify/plugin-nextjs installed
- [ ] Environment variables documented
- [ ] Redirect rules configured (if needed)
- [ ] Custom domain setup (partygirl.events)

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## Dependencies

### External
- Node.js 18+
- npm or pnpm
- Netlify account
- Git repository

### Technical
- None (first epic)

---

## Definition of Done

- [ ] All user stories completed and acceptance criteria met
- [ ] Component library documented (Storybook optional)
- [ ] Code reviewed and merged to main
- [ ] Design system documented in README or separate doc
- [ ] Deployed to Netlify dev environment
- [ ] No TypeScript errors
- [ ] No accessibility violations (axe-core)
- [ ] Responsive at all breakpoints (mobile, tablet, desktop)

---

## Technical Debt / Future Improvements

- Add Storybook for component documentation
- Set up automated visual regression testing
- Add Husky pre-commit hooks for linting
- Create Figma-to-code workflow

---

## Related Epics

- **Blocks:** Epic 2 (Core Website Pages) - needs components
- **Blocks:** Epic 3 (Portfolio & Blog) - needs components
- **Related:** Epic 8 (Performance & SEO) - uses foundation

---

## References

- [TECHNICAL_STRATEGY.md](../../TECHNICAL_STRATEGY.md) - Stack and architecture
- empmdumpsters: `components/ui/` patterns
- westlake-hoa: shadcn/ui integration
- neuralift: Glass UI effects
