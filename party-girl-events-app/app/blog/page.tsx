'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/layout/Container'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { blogPosts, getBlogPostsByCategory } from '@/lib/blog'
import { staggerContainer, staggerItem } from '@/lib/animations'
import { formatDate } from '@/lib/utils'

const categories = [
  'all',
  'Planning Tips',
  'Real Weddings',
  'Proposals',
  'Trends',
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const filteredPosts = getBlogPostsByCategory(activeCategory)

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-[var(--bg)] to-[var(--secondary-light)]">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
                Wedding Planning Blog
              </h1>
              <p className="text-xl text-[var(--text-secondary)]">
                Expert tips, real wedding stories, and insider knowledge from
                Vail's top event planner.
              </p>
            </div>
          </Container>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white sticky top-20 z-40 border-b border-[var(--text-muted)]/20">
          <Container>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-[var(--primary)] text-white shadow-lg scale-105'
                      : 'bg-[var(--bg-muted)] text-[var(--text-secondary)] hover:bg-[var(--primary-light)]'
                  }`}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </Container>
        </section>

        {/* Blog Grid */}
        <section className="py-20 bg-[var(--bg)]">
          <Container>
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="grid md:grid-cols-2 gap-8"
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.slug}
                  variants={staggerItem}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[var(--primary)] text-white text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {formatDate(new Date(post.date), 'short')}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold mb-3 font-serif group-hover:text-[var(--primary)] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-[var(--text-secondary)] mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 bg-[var(--bg-muted)] rounded-full text-[var(--text-secondary)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <span className="text-[var(--primary)] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-[var(--text-secondary)]">
                  No posts found in this category yet.
                </p>
              </div>
            )}
          </Container>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-br from-[var(--primary-light)] to-[var(--accent-light)]">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-4 font-serif">
                Get Wedding Planning Tips
              </h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                Subscribe to receive expert advice, local insights, and special
                offers from Party Girl Events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-[var(--text-muted)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
                <button className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-colors font-medium whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-[var(--text-muted)] mt-4">
                No spam, unsubscribe anytime
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
