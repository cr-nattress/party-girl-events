import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import './globals.css'

// Serif font for headings - Elegant and luxurious
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

// Sans-serif font for body - Modern and readable
const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Party Girl Events | Vail Wedding & Event Planning',
  description:
    'Modern wedding and event planning in Vail, Colorado. Full service planning, proposals, and Bar/Bat Mitzvahs. 8 years Ritz-Carlton experience by Stephanie Fleck.',
  keywords: [
    'Vail wedding planner',
    'Colorado wedding planner',
    'Beaver Creek event planner',
    'mountain wedding',
    'Vail proposals',
    'event planning Vail',
  ],
  authors: [{ name: 'Stephanie Fleck', url: 'https://partygirl.events' }],
  creator: 'Party Girl Events',
  publisher: 'Party Girl Events',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://partygirl.events',
    title: 'Party Girl Events | Vail Wedding & Event Planning',
    description:
      'Modern wedding and event planning in Vail, Colorado.',
    siteName: 'Party Girl Events',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Party Girl Events',
    description:
      'Modern wedding and event planning in Vail, Colorado.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  )
}
