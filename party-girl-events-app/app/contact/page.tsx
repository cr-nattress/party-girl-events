'use client'

import { useState } from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/layout/Container'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Phone, Mail, MapPin, Send, Instagram, Facebook } from 'lucide-react'
import { isValidEmail, isValidPhone } from '@/lib/utils'

// Note: metadata export doesn't work in client components
// Will need to move this to a separate layout file if needed

const eventTypes = [
  { value: '', label: 'Select Event Type' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'proposal', label: 'Proposal' },
  { value: 'bar-mitzvah', label: 'Bar/Bat Mitzvah' },
  { value: 'social', label: 'Social Event' },
  { value: 'other', label: 'Other' },
]

const budgetRanges = [
  { value: '', label: 'Select Budget Range' },
  { value: 'under-10k', label: 'Under $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-plus', label: '$50,000+' },
  { value: 'flexible', label: 'Flexible' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    budget: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.eventType) {
      newErrors.eventType = 'Please select an event type'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your event'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call - will be replaced with real API later
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Form data:', formData)
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="pt-24 min-h-screen flex items-center">
          <Container>
            <div className="max-w-2xl mx-auto text-center py-20">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={40} className="text-green-600" />
              </div>
              <h1 className="text-4xl font-bold mb-4 font-serif">
                Thank You!
              </h1>
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                We received your inquiry and will get back to you within 24
                hours (usually much sooner!).
              </p>
              <p className="text-[var(--text-secondary)] mb-8">
                In the meantime, feel free to call or text us at{' '}
                <a
                  href="tel:+19703063381"
                  className="text-[var(--primary)] font-semibold"
                >
                  (970) 306-3381
                </a>
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 border-2 border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary-light)] transition-colors font-medium"
              >
                Send Another Message
              </button>
            </div>
          </Container>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-12 bg-gradient-to-br from-[var(--bg)] to-[var(--primary-light)]">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
                Get in Touch
              </h1>
              <p className="text-xl text-[var(--text-secondary)]">
                Ready to plan your dream event? Fill out the form below and
                we&apos;ll get back to you within 24 hours.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20 bg-[var(--bg)]">
          <Container>
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h2 className="text-2xl font-bold mb-6 font-serif">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[var(--primary-light)] rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone size={20} className="text-[var(--primary)]" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <a
                          href="tel:+19703063381"
                          className="text-[var(--text-secondary)] hover:text-[var(--primary)]"
                        >
                          (970) 306-3381
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[var(--primary-light)] rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="text-[var(--primary)]" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a
                          href="mailto:stephanie@partygirl.events"
                          className="text-[var(--text-secondary)] hover:text-[var(--primary)] break-all"
                        >
                          stephanie@partygirl.events
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-[var(--primary-light)] rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-[var(--primary)]" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Office</p>
                        <p className="text-[var(--text-secondary)]">
                          19 Vail Rd.
                          <br />
                          Vail, CO 81657
                        </p>
                      </div>
                    </div>

                    {/* Social Media */}
                    <div className="pt-6 border-t border-[var(--text-muted)]/20">
                      <p className="font-semibold mb-4">Follow Us</p>
                      <div className="flex gap-3">
                        <a
                          href="https://www.instagram.com/partygirl.events/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-[var(--primary-light)] rounded-full flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram size={20} />
                        </a>
                        <a
                          href="https://www.facebook.com/PartyGirlVail"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-[var(--primary-light)] rounded-full flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
                          aria-label="Facebook"
                        >
                          <Facebook size={20} />
                        </a>
                        <a
                          href="https://www.pinterest.com/partygirlevents/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-[var(--primary-light)] rounded-full flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
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
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49-.09-.79-.17-2.01.04-2.87.19-.78 1.24-5.24 1.24-5.24s-.32-.63-.32-1.57c0-1.47.85-2.57 1.91-2.57.9 0 1.34.68 1.34 1.49 0 .91-.58 2.27-.88 3.53-.25 1.06.53 1.92 1.58 1.92 1.9 0 3.36-2 3.36-4.89 0-2.56-1.84-4.35-4.46-4.35-3.04 0-4.82 2.28-4.82 4.64 0 .92.35 1.9.79 2.43.09.1.1.19.07.30-.08.32-.26 1.04-.29 1.19-.04.19-.14.23-.33.14-1.33-.62-2.16-2.56-2.16-4.12 0-3.36 2.44-6.45 7.04-6.45 3.7 0 6.57 2.64 6.57 6.16 0 3.67-2.31 6.62-5.52 6.62-1.08 0-2.09-.56-2.44-1.22 0 0-.53 2.03-.66 2.52-.24.93-.89 2.09-1.33 2.8C9.49 21.88 10.73 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-[var(--primary-light)] rounded-lg">
                    <p className="text-sm text-[var(--text-secondary)]">
                      <strong className="text-[var(--text)] block mb-2">
                        Service Areas
                      </strong>
                      Vail • Beaver Creek • Breckenridge • Keystone • Aspen
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Your Name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      required
                    />
                    <Input
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="(970) 555-1234"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      helperText="Optional but helps us respond faster"
                    />
                    <Select
                      label="Event Type"
                      name="eventType"
                      options={eventTypes}
                      value={formData.eventType}
                      onChange={handleChange}
                      error={errors.eventType}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="Event Date"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      helperText="Approximate date is fine"
                    />
                    <Input
                      label="Guest Count"
                      name="guestCount"
                      type="number"
                      placeholder="e.g., 100"
                      value={formData.guestCount}
                      onChange={handleChange}
                      helperText="Approximate number"
                    />
                  </div>

                  <Select
                    label="Budget Range"
                    name="budget"
                    options={budgetRanges}
                    value={formData.budget}
                    onChange={handleChange}
                    helperText="Helps us recommend the right services"
                  />

                  <Textarea
                    label="Tell Us About Your Event"
                    name="message"
                    placeholder="Share your vision, concerns, questions, or anything else you'd like us to know..."
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    required
                    rows={6}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Inquiry
                      </>
                    )}
                  </button>

                  <p className="text-sm text-[var(--text-muted)] text-center">
                    By submitting this form, you agree to be contacted by Party
                    Girl Events.
                    <br />
                    We typically respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
