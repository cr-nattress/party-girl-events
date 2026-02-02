# Party Girl Events Website

Modern wedding and event planning website for Vail, Colorado.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **React:** 19.0.0
- **TypeScript:** 5.8
- **Styling:** Tailwind CSS 4 (CSS-first configuration)
- **Animation:** Framer Motion 12
- **Deployment:** Netlify (planned)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Design system & Tailwind imports
│   ├── layout.tsx         # Root layout with fonts & metadata
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # Base UI components (Button, Card, Input)
│   ├── sections/          # Page sections (Hero, CTA, Testimonials)
│   ├── layout/            # Layout components (Header, Footer)
│   └── features/          # Feature components (ChatWidget, Gallery)
├── lib/
│   ├── animations.ts      # Framer Motion variants
│   ├── cn.ts              # Tailwind class merger
│   └── utils.ts           # Common utilities
├── public/                # Static assets
├── types/                 # TypeScript type definitions
└── config/                # Site configuration
```

## Design System

### Colors

- **Primary (Champagne Gold):** `#C9A227`
- **Secondary (Sage):** `#9CAF88`
- **Accent (Dusty Rose):** `#D4A5A5`
- **Background (Cream):** `#FDF8F3`
- **Text (Charcoal):** `#2C2C2C`

### Typography

- **Headings:** Cormorant Garamond (serif)
- **Body:** Lato (sans-serif)
- **Accent:** Pinyon Script (cursive)

### Spacing

- Base grid: 4px
- Spacing scale: xs (8px), sm (12px), md (16px), lg (24px), xl (32px), 2xl (48px), 3xl (64px)

## Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

## Development

### Adding Components

Components should be organized by type:

- **UI components** (`components/ui/`) - Reusable base components
- **Section components** (`components/sections/`) - Page sections
- **Layout components** (`components/layout/`) - Headers, footers, containers
- **Feature components** (`components/features/`) - Complex features

### Using Animations

Import animations from `lib/animations.ts`:

```tsx
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

<motion.div variants={fadeUp} initial="initial" animate="animate">
  Content here
</motion.div>
```

### Using Utilities

```tsx
import { cn } from '@/lib/cn'
import { formatPrice, formatDate } from '@/lib/utils'

// Conditional classes
<div className={cn('base-class', isActive && 'active-class')}>

// Format price
{formatPrice(7500)} // "$7,500"
{formatPrice(95, true)} // "$95/person"

// Format date
{formatDate(new Date(), 'long')} // "February 1, 2026"
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

- Site URL and metadata
- Email service API keys
- Database credentials
- Authentication secrets
- AI API keys (OpenAI/Anthropic)
- Payment provider keys (Stripe)

## Deployment

### Netlify

1. Connect repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Install plugin: `@netlify/plugin-nextjs`

Configuration is in `netlify.toml` (to be created).

## References

- [Backlog](../backlog/README.md) - Product backlog and user stories
- [Technical Strategy](../TECHNICAL_STRATEGY.md) - Architecture decisions
- [Research](../research/) - Industry research and inspiration

## Contact

**Stephanie Fleck**
- Email: stephanie@partygirl.events
- Phone: (970) 306-3381
- Website: [partygirl.events](https://partygirl.events)

---

*Built with ❤️ in Vail, Colorado*
