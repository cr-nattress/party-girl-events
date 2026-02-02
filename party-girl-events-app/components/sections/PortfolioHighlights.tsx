'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { staggerContainer, staggerItem } from '@/lib/animations'

// Real portfolio items from scraped site
const portfolioItems = [
  {
    id: 1,
    title: 'Mountain Wedding',
    category: 'Wedding',
    image: '/images/7B5A1781-1.jpg',
    color: 'var(--accent)',
  },
  {
    id: 2,
    title: 'Elegant Celebration',
    category: 'Wedding',
    image: '/images/7B5A2883.jpg',
    color: 'var(--secondary)',
  },
  {
    id: 3,
    title: 'Intimate Ceremony',
    category: 'Wedding',
    image: '/images/87A5829-1.jpg',
    color: 'var(--primary)',
  },
  {
    id: 4,
    title: 'Perfect Proposal',
    category: 'Proposal',
    image: '/images/008-AXELPHOTO.jpg',
    color: 'var(--luxe-navy)',
  },
  {
    id: 5,
    title: 'Romantic Moment',
    category: 'Proposal',
    image: '/images/202-AXELPHOTO-copy.jpg',
    color: 'var(--alpine-blue)',
  },
  {
    id: 6,
    title: 'Special Event',
    category: 'Wedding',
    image: '/images/2021-08-28-Wedding-Kolger-C-10017-RESIZED.jpg',
    color: 'var(--forest)',
  },
]

export function PortfolioHighlights() {
  return (
    <section className="py-20 bg-[var(--bg)]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Recent Events
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Every event is unique, just like you. Take a look at some of our
            favorite moments.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {portfolioItems.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]"
            >
              {/* Real Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform group-hover:scale-110 duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2 opacity-90">
                    {item.category}
                  </p>
                  <h3 className="text-lg font-semibold font-serif mb-2">
                    {item.title}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm flex items-center gap-1">
                      View Event <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-all hover:scale-105 font-medium text-lg shadow-lg"
          >
            View Full Portfolio
            <ArrowRight size={20} />
          </Link>
        </div>
      </Container>
    </section>
  )
}
