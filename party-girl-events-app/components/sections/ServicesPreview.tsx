'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Sparkles, PartyPopper, Cake } from 'lucide-react'
import { fadeUp, staggerContainer, staggerItem } from '@/lib/animations'
import { Container } from '@/components/layout/Container'

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    description: 'Full service planning to wedding day management',
    href: '/services#full-service-wedding',
    color: 'var(--accent)',
  },
  {
    icon: Sparkles,
    title: 'Perfect Proposals',
    description: 'Over-the-top custom proposals that wow',
    href: '/services#proposals',
    color: 'var(--primary)',
  },
  {
    icon: Cake,
    title: 'Bar/Bat Mitzvahs',
    description: 'Combining tradition with celebration',
    href: '/services#social-events',
    color: 'var(--secondary)',
  },
  {
    icon: PartyPopper,
    title: 'Social Events',
    description: 'Birthdays, anniversaries, bachelor/ette parties',
    href: '/services#social-events',
    color: 'var(--luxe-navy)',
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 bg-[var(--bg)]">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl font-bold mb-4 font-serif"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto"
          >
            From intimate elopements to grand celebrations, we handle every
            detail so you can enjoy your special day.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link href={service.href}>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow h-full border border-[var(--text-muted)]/10">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: `${service.color}20`,
                        color: service.color,
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 font-serif text-[var(--text)]">
                      {service.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm mb-4">
                      {service.description}
                    </p>
                    <span className="text-[var(--primary)] text-sm font-medium hover:underline">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
