import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Container } from '@/components/layout/Container'
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'
import { getBlogPost, getRecentBlogPosts } from '@/lib/blog'
import { formatDate } from '@/lib/utils'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Party Girl Events Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const recentPosts = getRecentBlogPosts(3).filter(
    (p) => p.slug !== post.slug
  )

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Article Header */}
        <article>
          <section className="py-12 bg-gradient-to-br from-[var(--bg)] to-[var(--primary-light)]">
            <Container size="lg">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-hover)] mb-6 font-medium"
              >
                <ArrowLeft size={20} />
                Back to Blog
              </Link>

              <div className="mb-6">
                <span className="px-4 py-2 bg-[var(--primary)] text-white text-sm font-medium rounded-full">
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif max-w-4xl">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center text-white font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>

                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {formatDate(new Date(post.date), 'long')}
                </span>

                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {post.readTime}
                </span>
              </div>
            </Container>
          </section>

          {/* Featured Image */}
          <section className="relative aspect-[21/9] max-h-[500px] bg-[var(--bg-muted)]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </section>

          {/* Article Content */}
          <section className="py-16 bg-white">
            <Container size="md">
              <div className="prose prose-lg max-w-none">
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      .split('\n')
                      .map((line) => {
                        // Convert markdown headers
                        if (line.startsWith('# '))
                          return `<h1>${line.slice(2)}</h1>`
                        if (line.startsWith('## '))
                          return `<h2>${line.slice(3)}</h2>`
                        if (line.startsWith('### '))
                          return `<h3>${line.slice(4)}</h3>`
                        if (line.startsWith('#### '))
                          return `<h4>${line.slice(5)}</h4>`
                        // Convert bold
                        line = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                        // Convert italic
                        line = line.replace(/\*(.+?)\*/g, '<em>$1</em>')
                        // Convert links
                        line = line.replace(
                          /\[(.+?)\]\((.+?)\)/g,
                          '<a href="$2">$1</a>'
                        )
                        // Convert list items
                        if (line.startsWith('- '))
                          return `<li>${line.slice(2)}</li>`
                        if (line.startsWith('1. '))
                          return `<li>${line.slice(3)}</li>`
                        // Paragraphs
                        if (line.trim() === '') return '<br>'
                        if (!line.startsWith('<'))
                          return `<p>${line}</p>`
                        return line
                      })
                      .join('\n'),
                  }}
                />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-[var(--text-muted)]/20">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag size={20} className="text-[var(--primary)]" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-[var(--bg-muted)] rounded-full text-sm text-[var(--text-secondary)] hover:bg-[var(--primary-light)] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-[var(--bg-muted)] rounded-xl">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-serif">
                      {post.author}
                    </h3>
                    <p className="text-[var(--text-secondary)] mb-3">
                      Founder of Party Girl Events. 8 years of Ritz-Carlton
                      experience bringing luxury hospitality to Vail weddings
                      and events since 2015.
                    </p>
                    <Link
                      href="/about"
                      className="text-[var(--primary)] font-medium hover:underline"
                    >
                      Read full bio →
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </article>

        {/* Related Posts */}
        {recentPosts.length > 0 && (
          <section className="py-20 bg-[var(--bg)]">
            <Container>
              <h2 className="text-3xl font-bold mb-8 font-serif text-center">
                More from the Blog
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {recentPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-[var(--primary)] font-semibold">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-semibold mt-2 mb-2 font-serif group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {relatedPost.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-[var(--primary-light)] to-[var(--accent-light)]">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                Ready to Start Planning?
              </h2>
              <p className="text-xl text-[var(--text-secondary)] mb-8">
                Let's bring your vision to life. Book a consultation to discuss
                your event.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary-hover)] transition-all hover:scale-105 font-medium text-lg shadow-lg"
              >
                Book Consultation
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
