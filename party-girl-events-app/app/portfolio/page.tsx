'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/layout/Container'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '@/lib/animations'

type Category = 'all' | 'weddings' | 'proposals' | 'mitzvahs' | 'social'

const portfolioEvents = [
  {
    id: 1,
    title: 'Mountain Wedding',
    category: 'weddings' as Category,
    location: 'Vail, CO',
    image: '/images/7B5A1781-1.jpg',
  },
  {
    id: 2,
    title: 'Elegant Celebration',
    category: 'weddings' as Category,
    location: 'Beaver Creek, CO',
    image: '/images/7B5A2883.jpg',
  },
  {
    id: 3,
    title: 'Intimate Ceremony',
    category: 'weddings' as Category,
    location: 'Vail, CO',
    image: '/images/87A5829-1.jpg',
  },
  {
    id: 4,
    title: 'Perfect Proposal',
    category: 'proposals' as Category,
    location: 'Vail Mountain',
    image: '/images/008-AXELPHOTO.jpg',
  },
  {
    id: 5,
    title: 'Romantic Moment',
    category: 'proposals' as Category,
    location: 'Arrabelle Square',
    image: '/images/202-AXELPHOTO-copy.jpg',
  },
  {
    id: 6,
    title: 'Summer Wedding',
    category: 'weddings' as Category,
    location: 'Vail, CO',
    image: '/images/2021-08-28-Wedding-Kolger-C-10017-RESIZED.jpg',
  },
  {
    id: 7,
    title: 'Elegant Reception',
    category: 'weddings' as Category,
    location: 'Vail, CO',
    image: '/images/063-resized-ToniAxelrodStudios-2.jpg',
  },
  {
    id: 8,
    title: 'Special Celebration',
    category: 'social' as Category,
    location: 'Vail, CO',
    image: '/images/2019-04-01-David-Tutera-Bermuda-881-1200x640.jpg',
  },
]

const categories = [
  { id: 'all', label: 'All Events' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'proposals', label: 'Proposals' },
  { id: 'mitzvahs', label: 'Bar/Bat Mitzvahs' },
  { id: 'social', label: 'Social Events' },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredEvents =
    activeCategory === 'all'
      ? portfolioEvents
      : portfolioEvents.filter((event) => event.category === activeCategory)

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-[var(--bg)] to-[var(--accent-light)]">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
                Our Portfolio
              </h1>
              <p className="text-xl text-[var(--text-secondary)]">
                Every event is unique, just like you. Take a look at some of
                our favorite celebrations we&apos;ve had the privilege to
                create.
              </p>
            </div>
          </Container>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-white sticky top-20 z-40 border-b border-[var(--text-muted)]/20">
          <Container>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id as Category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-[var(--primary)] text-white shadow-lg scale-105'
                      : 'bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:bg-[var(--primary-light)]'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-[var(--bg)]">
          <Container>
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={staggerItem}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] cursor-pointer"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110 duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-90 transition-opacity">
                      {event.location}
                    </p>
                    <h3 className="text-xl font-semibold font-serif">
                      {event.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-[var(--text-secondary)]">
                  No events found in this category yet.
                </p>
              </div>
            )}
          </Container>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[var(--primary-light)] to-[var(--accent-light)]">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                Ready to Create Your Own Story?
              </h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                Let&apos;s plan an event that&apos;s uniquely yours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-all hover:scale-105 font-medium text-lg shadow-lg"
                >
                  Book Consultation
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 bg-white text-[var(--primary)] rounded-lg hover:bg-[var(--bg)] transition-all hover:scale-105 font-medium text-lg shadow-lg"
                >
                  View Services
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
