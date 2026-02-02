import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/layout/Container'
import { CTA } from '@/components/sections/CTA'
import { Award, Briefcase, Heart, Mountain, Instagram, Facebook, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Stephanie Fleck | Party Girl Events',
  description:
    '8 years of Ritz-Carlton luxury hospitality experience. Wedding MBA Graduate and Event Industry Certified planner based in Vail, Colorado.',
}

const credentials = [
  {
    icon: Briefcase,
    title: '8 Years Ritz-Carlton',
    description: 'Luxury hospitality management experience',
  },
  {
    icon: Award,
    title: 'Wedding MBA Graduate',
    description: 'Specialized wedding planning education',
  },
  {
    icon: Award,
    title: 'Event Industry Certified',
    description: 'Professional certification and training',
  },
  {
    icon: Mountain,
    title: 'Vail Local Since 2013',
    description: 'Deep knowledge of mountain venues',
  },
]

const timeline = [
  {
    year: '2005-2013',
    title: 'The Ritz-Carlton',
    description:
      'Worked and managed at luxury properties in Philadelphia, San Francisco, Tucson, and Atlanta. Promoted to management position in Vail.',
  },
  {
    year: '2013',
    title: 'Moved to Vail',
    description:
      'Fell in love with the mountain lifestyle and decided to make Vail home instead of transferring to another Ritz-Carlton.',
  },
  {
    year: '2015',
    title: 'Founded Party Girl Events',
    description:
      'Left The Ritz-Carlton to launch my own event planning company, combining luxury hospitality with personal service.',
  },
  {
    year: '2015-Present',
    title: '200+ Events Planned',
    description:
      'From mountain tops to ballrooms, helped couples and families create unforgettable celebrations.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[var(--bg)] to-[var(--primary-light)]">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Stephanie Photo */}
              <div className="relative aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/team-photo-2.jpg"
                  alt="Stephanie Fleck, Founder of Party Girl Events"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Content */}
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
                  Meet Stephanie
                </h1>
                <p className="text-xl text-[var(--text-secondary)] mb-6">
                  For me it&apos;s not all about making things pretty (although
                  that&apos;s a really fun part of my job). Above & beyond
                  personalized service, anticipating even the unexpressed wishes
                  and needs of our clients, and flawless logistics are the key
                  ingredients to every successful event.
                </p>
                <p className="text-lg text-[var(--text-secondary)] mb-6">
                  I&apos;m a hospitality queen! I moved to Vail in 2013 for a
                  promotion with The Ritz-Carlton. I was a manager for The Ritz
                  for 8 years, working in Philadelphia, San Francisco, Tucson,
                  and Atlanta. I&apos;m a city girl at heart, but I love Vail
                  so much, so instead of moving to the next Ritz-Carlton, I
                  collected my severance, left the company, and launched Party
                  Girl Events!
                </p>
                <p className="text-lg text-[var(--text)] font-semibold">
                  It was the best decision I&apos;ve ever made!
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Credentials */}
        <section className="py-20 bg-[var(--bg)]">
          <Container>
            <h2 className="text-4xl font-bold text-center mb-12 font-serif">
              Credentials & Experience
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {credentials.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl p-6 shadow-md text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--primary-light)] flex items-center justify-center">
                      <Icon size={32} className="text-[var(--primary)]" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </Container>
        </section>

        {/* Awards and Recognition */}
        <section className="py-20 bg-white">
          <Container>
            <h2 className="text-4xl font-bold text-center mb-4 font-serif">
              Awards and Recognition
            </h2>
            <p className="text-center text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto">
              Every year, we win The Knot Best of Weddings and WeddingWire
              Couples Choice Award. Our clients consistently describe us as
              professional, calming, sweet, and above and beyond.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
              <div className="relative h-24 w-full max-w-[150px]">
                <Image
                  src="/images/BOW_2019_Badge_1024.jpg"
                  alt="The Knot Best of Weddings 2019"
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
              <div className="relative h-24 w-full max-w-[150px]">
                <Image
                  src="/images/badge-weddingawards_en_US.jpg"
                  alt="The Knot Best of Weddings"
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
              <div className="relative h-24 w-full max-w-[150px]">
                <Image
                  src="/images/wedding-wire-e1485150093817-1.jpg"
                  alt="WeddingWire Couples Choice Award"
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
              <div className="relative h-24 w-full max-w-[150px]">
                <Image
                  src="/images/WeddingChicksBadge2019.jpg"
                  alt="Wedding Chicks Featured 2019"
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
              <div className="relative h-24 w-full max-w-[150px]">
                <Image
                  src="/images/HowTheyAsked_Badge_White-1.png"
                  alt="How They Asked Featured Vendor"
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
              <div className="relative h-24 w-full max-w-[150px]">
                <Image
                  src="/images/EI-Certification-Badge.jpg"
                  alt="Event Industry Certified Wedding Planner"
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
              <div className="relative h-24 w-full max-w-[150px]">
                <Image
                  src="/images/WMBA-Badge.b-2018-Graduate.jpg"
                  alt="Wedding MBA Graduate 2018"
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
              <div className="relative h-24 w-full max-w-[150px]">
                <Image
                  src="/images/Mitzvah-Badge_1.png"
                  alt="Bar and Bat Mitzvah Planning Specialist"
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
              <div className="relative h-24 w-full max-w-[150px]">
                <Image
                  src="/images/CO-FEATURED-BADGE-e1494297369340.png"
                  alt="Colorado Featured Wedding Planner"
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
              <div className="relative h-24 w-full max-w-[150px]">
                <Image
                  src="/images/As-Seen-On-Web-1.jpg"
                  alt="As Seen On Wedding Publications"
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-[var(--bg-muted)]">
          <Container>
            <h2 className="text-4xl font-bold text-center mb-12 font-serif">
              My Journey
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className="flex gap-6 items-start group"
                >
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-[var(--primary)] group-hover:scale-125 transition-transform" />
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-[var(--primary)]/30 mt-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <p className="text-sm font-semibold text-[var(--primary)] mb-1">
                      {item.year}
                    </p>
                    <h3 className="text-xl font-semibold mb-2 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Personal Interests */}
        <section className="py-20 bg-[var(--bg)]">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6 font-serif">
                Beyond Event Planning
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-6">
                I love my mountain lifestyle! In the summer, you&apos;ll find
                me hiking and camping. In the winter, I&apos;m on the slopes
                skiing. I also enjoy crafts, working out at The Westin, going
                to wedding and event conventions, spending time with friends,
                and listening to Taylor Swift.
              </p>
              <p className="text-xl text-[var(--text)] font-semibold">
                Most of all, I love planning events and going above and beyond
                to make my clients happy.
              </p>
            </div>
          </Container>
        </section>

        {/* Connect With Us */}
        <section className="py-16 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 font-serif">
                Connect With Us
              </h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                Follow along for wedding inspiration, real event highlights, and
                planning tips from our Vail team.
              </p>

              {/* Social Media Links */}
              <div className="flex justify-center gap-6 mb-8">
                <a
                  href="https://www.instagram.com/partygirl.events/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[var(--bg)] border border-[var(--primary)]/30 rounded-lg hover:bg-[var(--primary-light)] hover:border-[var(--primary)] transition-all"
                >
                  <Instagram size={20} className="text-[var(--primary)]" />
                  <span className="font-medium">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/PartyGirlVail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[var(--bg)] border border-[var(--primary)]/30 rounded-lg hover:bg-[var(--primary-light)] hover:border-[var(--primary)] transition-all"
                >
                  <Facebook size={20} className="text-[var(--primary)]" />
                  <span className="font-medium">Facebook</span>
                </a>
                <a
                  href="https://www.pinterest.com/partygirlevents/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-[var(--bg)] border border-[var(--primary)]/30 rounded-lg hover:bg-[var(--primary-light)] hover:border-[var(--primary)] transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--primary)]"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49-.09-.79-.17-2.01.04-2.87.19-.78 1.24-5.24 1.24-5.24s-.32-.63-.32-1.57c0-1.47.85-2.57 1.91-2.57.9 0 1.34.68 1.34 1.49 0 .91-.58 2.27-.88 3.53-.25 1.06.53 1.92 1.58 1.92 1.9 0 3.36-2 3.36-4.89 0-2.56-1.84-4.35-4.46-4.35-3.04 0-4.82 2.28-4.82 4.64 0 .92.35 1.9.79 2.43.09.1.1.19.07.3-.08.32-.26 1.04-.29 1.19-.04.19-.14.23-.33.14-1.33-.62-2.16-2.56-2.16-4.12 0-3.36 2.44-6.45 7.04-6.45 3.7 0 6.57 2.64 6.57 6.16 0 3.67-2.31 6.62-5.52 6.62-1.08 0-2.09-.56-2.44-1.22 0 0-.53 2.03-.66 2.52-.24.93-.89 2.09-1.33 2.8C9.49 21.88 10.73 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                  <span className="font-medium">Pinterest</span>
                </a>
              </div>

              {/* Review Platform Links */}
              <div className="pt-6 border-t border-[var(--text-muted)]/20">
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Read our reviews and see why couples love working with us:
                </p>
                <div className="flex justify-center gap-6">
                  <a
                    href="https://www.theknot.com/marketplace/party-girl-events-vail-co-955170"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium"
                  >
                    The Knot
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href="https://www.weddingwire.com/biz/party-girl-events-vail/86da6b2759708992.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-hover)] font-medium"
                  >
                    WeddingWire
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Partner Company */}
        <section className="py-12 bg-[var(--secondary-light)]">
          <Container>
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2 font-serif">
                Partner Company
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                <strong className="text-[var(--text)]">
                  Elegant Productions Colorado
                </strong>{' '}
                - Sister company for production services
              </p>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <CTA
          headline="Let's Work Together"
          description="Ready to plan your dream event with a team that truly cares? Let's create something unforgettable."
          primaryButtonText="Book a Consultation"
          secondaryButtonText="View Services"
          secondaryButtonHref="/services"
        />
      </main>
      <Footer />
    </>
  )
}
