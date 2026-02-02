import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/layout/Container'
import { Home, Search, Mail } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen flex items-center">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-20">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-[var(--primary)] font-serif opacity-20">
                404
              </h1>
            </div>

            {/* Message */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Page Not Found
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Oops! The page you&apos;re looking for seems to have wandered off
              the mountain trail.
            </p>

            {/* Suggestions */}
            <div className="bg-[var(--bg-muted)] rounded-xl p-8 mb-8">
              <p className="text-lg text-[var(--text)] mb-4 font-semibold">
                Here&apos;s what you can do:
              </p>
              <ul className="text-left space-y-3 max-w-md mx-auto">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[var(--primary-light)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Home size={14} className="text-[var(--primary)]" />
                  </div>
                  <span className="text-[var(--text-secondary)]">
                    Return to the homepage and start fresh
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[var(--primary-light)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Search size={14} className="text-[var(--primary)]" />
                  </div>
                  <span className="text-[var(--text-secondary)]">
                    Browse our services or portfolio
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[var(--primary-light)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={14} className="text-[var(--primary)]" />
                  </div>
                  <span className="text-[var(--text-secondary)]">
                    Contact us if you need help finding something
                  </span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-8 py-4 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-all hover:scale-105 font-medium text-lg shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Home size={20} />
                Go Home
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary-light)] transition-all hover:scale-105 font-medium text-lg inline-flex items-center justify-center gap-2"
              >
                <Search size={20} />
                View Services
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-[var(--text-muted)]/20">
              <p className="text-[var(--text-secondary)] mb-2">
                Need immediate help?
              </p>
              <a
                href="tel:+19703063381"
                className="text-[var(--primary)] font-semibold text-lg hover:underline"
              >
                Call us: (970) 306-3381
              </a>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  )
}
