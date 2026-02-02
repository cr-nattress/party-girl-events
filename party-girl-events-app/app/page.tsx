import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { PortfolioHighlights } from '@/components/sections/PortfolioHighlights'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <PortfolioHighlights />
        <Testimonials />
        <CTA
          secondaryButtonText="View Our Work"
          secondaryButtonHref="/portfolio"
        />
      </main>
      <Footer />
    </>
  )
}
