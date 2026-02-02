import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/layout/Container'
import { CTA } from '@/components/sections/CTA'
import { Check, Heart, Sparkles, Cake, PartyPopper } from 'lucide-react'
import { formatPrice, formatPriceRange } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Services & Pricing | Party Girl Events',
  description:
    'Wedding planning, proposals, Bar/Bat Mitzvahs, and social events in Vail, Colorado. Full service planning from $95/person, Wedding Management from $3,000.',
}

const services = [
  {
    id: 'full-service-wedding',
    icon: Heart,
    name: 'Full Service Wedding Planning',
    price: formatPrice(95, true),
    minimum: formatPrice(7500) + ' minimum',
    color: 'var(--accent)',
    description:
      'A hands-on approach to the planning process. Full Service starts immediately.',
    features: [
      'Unlimited planning meetings',
      'Venue and vendor selection',
      'Realistic timeline creation',
      'Complete design services',
      'Budget management',
      'Vendor contract review',
      'Full day-of coordination',
      'Lighting, furnishings, linens coordination',
      'Floral design integration',
    ],
  },
  {
    id: 'wedding-management',
    icon: Heart,
    name: 'Wedding Management',
    price: formatPriceRange(3000, 4500),
    minimum: '',
    color: 'var(--primary)',
    description:
      'Similar to Month of Coordination, but better. Starts immediately with extensive planning support.',
    features: [
      'Immediate extensive planning meeting',
      'Wedding day timeline creation',
      'Personalized vendor recommendations',
      'Full access to online planning tools',
      'Ongoing planning support',
      'Month-of planning meeting',
      'Vendor liaison and confirmations',
      'Full wedding day oversight',
      'Problem-solving on the day',
    ],
  },
  {
    id: 'elopements',
    icon: Sparkles,
    name: 'Elopements & Small Weddings',
    price: formatPriceRange(2500, 4500),
    minimum: 'For weddings of 20 or less',
    color: 'var(--secondary)',
    description:
      'Full service planning for intimate celebrations with personalized attention.',
    features: [
      'Photographer, officiant, hair/makeup selection',
      'Ceremony and reception venue recommendations',
      'Lodging recommendations',
      "Bride's bouquet and groom's boutonniere",
      'Wedding day timeline creation',
      'Ceremony rehearsal guidance',
      'Full wedding day coverage',
    ],
  },
  {
    id: 'proposals',
    icon: Sparkles,
    name: 'Perfect Proposals',
    price: formatPriceRange(1500, 1800),
    minimum: 'Plus photography, decor, extras',
    color: 'var(--luxe-navy)',
    description:
      'Over-the-top custom proposals based on your vision and your special relationship!',
    features: [
      'Custom proposal design',
      'Vendor team hiring',
      'Scene setup on the big day',
      'Hidden coordination (usually in bushes!)',
      'Make sure it goes off without a hitch',
      'Special rose petal turndown',
      'Photography coordination',
    ],
  },
  {
    id: 'bar-bat-mitzvah',
    icon: Cake,
    name: 'Bar/Bat Mitzvahs',
    price: 'Custom Pricing',
    minimum: '',
    color: 'var(--alpine-blue)',
    description:
      'Combining the tradition of the service with the excitement of the party.',
    features: [
      "Work closely with B'nai Vail",
      'Stress-free ceremony planning',
      'Talented Bar/Bat Mitzvah specific vendors',
      'Teen-friendly entertainment',
      'Keep the party going!',
      'No need to bring your own Rabbi or planner',
    ],
  },
  {
    id: 'social-events',
    icon: PartyPopper,
    name: 'Social Parties',
    price: 'Custom Pricing',
    minimum: '',
    color: 'var(--forest)',
    description:
      'Handle the details and production so you can be the host and have fun!',
    features: [
      'Birthday parties',
      'Anniversary celebrations',
      'Bachelor/bachelorette parties',
      'Multi-day event celebrations',
      'Vacation planning for clients',
      'All event types certified',
    ],
  },
]

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer:
      'For weddings, we recommend booking 12-18 months in advance. For proposals and smaller events, 3-6 months is typical. However, we can often accommodate shorter timelines!',
  },
  {
    question: 'Do you travel outside of Vail?',
    answer:
      'Yes! We primarily serve Vail, Beaver Creek, Breckenridge, Keystone, and Aspen, but we love destination events throughout Colorado and beyond.',
  },
  {
    question: 'What is included in your pricing?',
    answer:
      'Our pricing covers professional planning services, unlimited meetings (for full service), vendor coordination, timeline creation, and day-of management. Vendor costs (venue, catering, florals, etc.) are separate.',
  },
  {
    question: 'Can you work with our budget?',
    answer:
      "Absolutely! We're experienced in planning events at all budget levels and will help you maximize your investment to create an unforgettable celebration.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-[var(--bg)] to-[var(--primary-light)]">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
                Services & Pricing
              </h1>
              <p className="text-xl text-[var(--text-secondary)]">
                From full-service wedding planning to intimate proposals, we
                offer personalized services tailored to your unique vision and
                budget.
              </p>
            </div>
          </Container>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-[var(--bg)]">
          <Container>
            <div className="space-y-12">
              {services.map((service, index) => {
                const Icon = service.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={service.id}
                    className={`grid md:grid-cols-2 gap-8 items-center ${
                      !isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Service Info */}
                    <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                        style={{
                          backgroundColor: `${service.color}20`,
                          color: service.color,
                        }}
                      >
                        <Icon size={32} />
                      </div>
                      <h2 className="text-3xl font-bold mb-2 font-serif">
                        {service.name}
                      </h2>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-2xl font-bold text-[var(--primary)]">
                          {service.price}
                        </span>
                        {service.minimum && (
                          <span className="text-sm text-[var(--text-secondary)] self-end mb-1">
                            {service.minimum}
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-[var(--text-secondary)] mb-6">
                        {service.description}
                      </p>
                      <a
                        href="/contact"
                        className="inline-block px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-colors font-medium"
                      >
                        Request Quote
                      </a>
                    </div>

                    {/* Features List */}
                    <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                      <div className="bg-white rounded-xl p-8 shadow-lg">
                        <h3 className="text-xl font-semibold mb-4 font-serif">
                          What&apos;s Included
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex gap-3">
                              <Check
                                size={20}
                                className="text-[var(--primary)] flex-shrink-0 mt-0.5"
                              />
                              <span className="text-[var(--text-secondary)]">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </Container>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-[var(--bg-muted)]">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 font-serif">
                How It Works
              </h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                Our proven process ensures a stress-free planning experience
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Initial Consultation',
                  description: 'Free consultation to discuss your vision',
                },
                {
                  step: '02',
                  title: 'Proposal & Contract',
                  description: 'Custom proposal with detailed pricing',
                },
                {
                  step: '03',
                  title: 'Planning Process',
                  description: 'Regular meetings and vendor coordination',
                },
                {
                  step: '04',
                  title: 'Event Day',
                  description: 'Flawless execution while you enjoy',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 font-serif">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-serif">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[var(--bg)]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 font-serif">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md"
                  >
                    <h3 className="text-xl font-semibold mb-3 font-serif">
                      {faq.question}
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Partner Badge */}
        <section className="py-12 bg-[var(--secondary-light)]">
          <Container>
            <div className="text-center">
              <p className="text-sm text-[var(--text-secondary)] mb-2">
                PROUD PARTNER OF
              </p>
              <h3 className="text-2xl font-semibold text-[var(--text)] font-serif">
                THE HRC
              </h3>
              <p className="text-[var(--text-secondary)] mt-2">
                Supporter of Marriage Equality
              </p>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <CTA
          headline="Ready to Start Planning?"
          description="Book a free consultation to discuss your event and get a custom proposal."
          primaryButtonText="Book Consultation"
          primaryButtonHref="/contact"
          secondaryButtonText="Read Our Blog"
          secondaryButtonHref="/blog"
        />
      </main>
      <Footer />
    </>
  )
}
