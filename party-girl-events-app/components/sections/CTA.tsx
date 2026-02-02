'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeUp } from '@/lib/animations'
import { Container } from '@/components/layout/Container'

interface CTAProps {
  headline?: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export function CTA({
  headline = 'Ready to Plan Your Dream Event?',
  description = "Let us create something unforgettable together. Book a free consultation and start planning today.",
  primaryButtonText = 'Get Started',
  primaryButtonHref = '/contact',
  secondaryButtonText = 'Take the Quiz',
  secondaryButtonHref = '/quiz',
}: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[var(--primary-light)] to-[var(--accent-light)]">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-[var(--text)]">
            {headline}
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryButtonHref}
              className="px-8 py-4 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-all hover:scale-105 font-medium text-lg shadow-lg"
            >
              {primaryButtonText}
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link
                href={secondaryButtonHref}
                className="px-8 py-4 bg-white text-[var(--primary)] rounded-lg hover:bg-[var(--bg)] transition-all hover:scale-105 font-medium text-lg shadow-lg"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
