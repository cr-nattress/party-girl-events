import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Heart, Instagram, Facebook } from 'lucide-react'
import { Container } from './Container'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const serviceAreas = [
  'Vail, CO',
  'Beaver Creek, CO',
  'Breckenridge, CO',
  'Keystone, CO',
  'Aspen, CO',
]

const awardBadges = [
  {
    src: '/images/BOW_2019_Badge_1024.jpg',
    alt: 'The Knot Best of Weddings 2019',
  },
  {
    src: '/images/wedding-wire-e1485150093817-1.jpg',
    alt: 'WeddingWire Couples Choice Award',
  },
  {
    src: '/images/EI-Certification-Badge.jpg',
    alt: 'Event Industry Certified',
  },
  {
    src: '/images/WMBA-Badge.b-2018-Graduate.jpg',
    alt: 'Wedding MBA Graduate',
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--bg-muted)] border-t border-[var(--text-muted)]/20">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[var(--primary)] mb-4">
              Party Girl Events
            </h3>
            <p className="text-[var(--text-secondary)] mb-4 text-sm">
              Modern wedding and event planning in Vail, Colorado. Nobody
              deserves to enjoy your event more than you.
            </p>
            <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
              <Heart size={16} className="text-[var(--accent)]" />
              <span>LGBTQ+ Friendly</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-[var(--text)]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-[var(--text)]">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="text-[var(--text-secondary)] text-sm"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-[var(--text)]">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+19703063381"
                  className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span>(970) 306-3381</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:stephanie@partygirl.events"
                  className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span>stephanie@partygirl.events</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                  <span>19 Vail Rd., Vail, CO 81657</span>
                </div>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/partygirl.events/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/PartyGirlVail"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.pinterest.com/partygirlevents/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors"
                aria-label="Pinterest"
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
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49-.09-.79-.17-2.01.04-2.87.19-.78 1.24-5.24 1.24-5.24s-.32-.63-.32-1.57c0-1.47.85-2.57 1.91-2.57.9 0 1.34.68 1.34 1.49 0 .91-.58 2.27-.88 3.53-.25 1.06.53 1.92 1.58 1.92 1.9 0 3.36-2 3.36-4.89 0-2.56-1.84-4.35-4.46-4.35-3.04 0-4.82 2.28-4.82 4.64 0 .92.35 1.9.79 2.43.09.1.1.19.07.3-.08.32-.26 1.04-.29 1.19-.04.19-.14.23-.33.14-1.33-.62-2.16-2.56-2.16-4.12 0-3.36 2.44-6.45 7.04-6.45 3.7 0 6.57 2.64 6.57 6.16 0 3.67-2.31 6.62-5.52 6.62-1.08 0-2.09-.56-2.44-1.22 0 0-.53 2.03-.66 2.52-.24.93-.89 2.09-1.33 2.8C9.49 21.88 10.73 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Review Platforms */}
        <div className="py-8 border-t border-[var(--text-muted)]/20">
          <h4 className="text-sm font-semibold text-center mb-4 text-[var(--text-secondary)]">
            Find Us On
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a
              href="https://www.theknot.com/marketplace/party-girl-events-vail-co-955170"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors font-medium"
            >
              The Knot
            </a>
            <span className="text-[var(--text-muted)]">•</span>
            <a
              href="https://www.weddingwire.com/biz/party-girl-events-vail/86da6b2759708992.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors font-medium"
            >
              WeddingWire
            </a>
            <span className="text-[var(--text-muted)]">•</span>
            <a
              href="http://www.partygirl.events"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors font-medium"
            >
              Original Website
            </a>
          </div>
        </div>

        {/* Awards Section */}
        <div className="py-8 border-t border-[var(--text-muted)]/20">
          <h4 className="text-sm font-semibold text-center mb-4 text-[var(--text-secondary)]">
            Award-Winning Event Planning
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {awardBadges.map((badge) => (
              <div
                key={badge.alt}
                className="relative h-16 w-20 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
              >
                <Image
                  src={badge.src}
                  alt={badge.alt}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-[var(--text-muted)]/20 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            © {currentYear} Party Girl Events. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-muted)] mt-2">
            Founded 2015 • 8 Years Ritz-Carlton Experience
          </p>
        </div>
      </Container>
    </footer>
  )
}
