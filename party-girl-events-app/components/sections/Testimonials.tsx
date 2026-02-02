'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { fadeIn } from '@/lib/animations'

const testimonials = [
  {
    id: 1,
    quote:
      "Stephanie made our mountain wedding absolutely flawless. She thought of every detail we didn't even know to worry about!",
    author: 'Sarah & Jake',
    event: 'Vail Wedding 2025',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'The proposal was beyond our wildest dreams. Stephanie made magic happen on the mountain, and we have the most incredible photos to prove it!',
    author: 'Michael & Samantha',
    event: 'Vail Proposal 2024',
    rating: 5,
  },
  {
    id: 3,
    quote:
      "From start to finish, Party Girl Events took care of everything. Our families had an amazing time, and we actually got to enjoy our own wedding!",
    author: 'Kimmy & Craig',
    event: 'Sonnenalp Wedding 2024',
    rating: 5,
  },
  {
    id: 4,
    quote:
      'Planning a destination Bar Mitzvah seemed impossible until we found Stephanie. She knows everyone in Vail and made it seamless.',
    author: 'The Cohen Family',
    event: 'Bar Mitzvah 2025',
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--bg-alt)] to-[var(--secondary-light)]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Real stories from real couples and families we've had the privilege
            to serve.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-[var(--primary)]/20">
              <Quote size={48} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                variants={fadeIn}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative z-10"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-[var(--primary)] text-[var(--primary)]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-[var(--text)] text-center mb-8 italic font-serif">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <p className="font-semibold text-[var(--text)] text-lg">
                    {currentTestimonial.author}
                  </p>
                  <p className="text-[var(--text-secondary)]">
                    {currentTestimonial.event}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[var(--primary)] w-8'
                      : 'bg-[var(--text-muted)]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Award Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white rounded-lg shadow-md">
              <p className="text-sm font-semibold text-[var(--text)]">
                The Knot
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                Best of Weddings
              </p>
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-md">
              <p className="text-sm font-semibold text-[var(--text)]">
                WeddingWire
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                Couples' Choice
              </p>
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-md">
              <p className="text-sm font-semibold text-[var(--text)]">
                Google Reviews
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                5.0 ★ Rating
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
