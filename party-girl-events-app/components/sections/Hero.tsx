'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations'
import { Container } from '@/components/layout/Container'

export function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/7B5A2883.jpg"
          alt="Elegant mountain wedding reception in Vail, Colorado"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/40" />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif text-white drop-shadow-lg"
          >
            Nobody Deserves to Enjoy Your Event{' '}
            <span className="text-[var(--primary-light)]">More Than You</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-white/90 mb-4 drop-shadow-md"
          >
            Modern Wedding and Event Planning in Vail, Colorado
          </motion.p>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-lg text-white/80 mb-12 max-w-2xl mx-auto drop-shadow-md"
          >
            Since 2015, we have been helping awesome clients plan and execute
            weddings and events that are smooth flowing and memorable.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-all hover:scale-105 font-medium text-lg shadow-lg"
            >
              Plan Your Event
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary-light)] transition-all hover:scale-105 font-medium text-lg"
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Stats or Trust Indicators */}
          <motion.div
            variants={staggerItem}
            className="mt-16 flex flex-wrap justify-center gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-[var(--primary-light)] font-serif drop-shadow-lg">
                11+
              </div>
              <div className="text-sm text-white/80 drop-shadow-md">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--primary-light)] font-serif drop-shadow-lg">
                200+
              </div>
              <div className="text-sm text-white/80 drop-shadow-md">
                Events Planned
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--primary-light)] font-serif drop-shadow-lg">
                5★
              </div>
              <div className="text-sm text-white/80 drop-shadow-md">
                Client Rating
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-[var(--primary-light)] transition-colors drop-shadow-lg z-20"
        aria-label="Scroll to content"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  )
}
