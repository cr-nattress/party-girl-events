import { test, expect } from '@playwright/test'

test.describe('Blog Listing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog')
  })

  test('should load blog page', async ({ page }) => {
    await expect(page).toHaveURL('/blog')

    await page.screenshot({
      path: `screenshots/blog/listing-hero-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display blog posts', async ({ page }) => {
    await page.waitForTimeout(500)

    // Check for blog post cards/links
    const blogLinks = page.locator('a[href*="/blog/"]')
    const count = await blogLinks.count()
    expect(count).toBeGreaterThan(0)

    await page.screenshot({
      path: `screenshots/blog/posts-grid-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should have category filters', async ({ page }) => {
    // Look for category filter options
    const categories = ['Planning Tips', 'Real Weddings', 'Proposals', 'Trends']

    await page.screenshot({
      path: `screenshots/blog/category-filters-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should filter by category', async ({ page }) => {
    await page.waitForTimeout(500)

    // Try clicking a category filter
    const categoryFilter = page.locator('button, [role="button"]').filter({ hasText: /planning/i }).first()
    if (await categoryFilter.isVisible()) {
      await categoryFilter.click()
      await page.waitForTimeout(500)

      await page.screenshot({
        path: `screenshots/blog/filtered-planning-${test.info().project.name}.png`,
        fullPage: false,
      })
    }
  })

  test('full page screenshot', async ({ page }) => {
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: `screenshots/blog/listing-full-page-${test.info().project.name}.png`,
      fullPage: true,
    })
  })
})

test.describe('Blog Post Pages', () => {
  const blogSlugs = [
    'micro-weddings-minimonies-guide',
    'elopements-destination-feel-local',
    'ai-wedding-planning-tools-2026',
    'sustainable-eco-friendly-weddings',
    'wedding-content-creator-trend',
    'non-traditional-wedding-venues',
    'interactive-guest-experiences',
    'statement-wedding-florals',
    'lab-grown-diamond-engagement-rings',
    'proposal-planning-photography-guide',
  ]

  for (const slug of blogSlugs) {
    test(`should load blog post: ${slug}`, async ({ page }) => {
      await page.goto(`/blog/${slug}`)
      await expect(page).toHaveURL(`/blog/${slug}`)

      await page.waitForTimeout(500)

      // Hero screenshot
      await page.screenshot({
        path: `screenshots/blog/posts/${slug}-hero-${test.info().project.name}.png`,
        fullPage: false,
      })

      // Content screenshot
      await page.evaluate(() => window.scrollTo(0, 400))
      await page.waitForTimeout(300)

      await page.screenshot({
        path: `screenshots/blog/posts/${slug}-content-${test.info().project.name}.png`,
        fullPage: false,
      })
    })
  }

  test('should display article content properly', async ({ page }) => {
    await page.goto('/blog/micro-weddings-minimonies-guide')
    await page.waitForTimeout(500)

    // Check for article elements
    const article = page.locator('article, .article-content, main')
    await expect(article.first()).toBeVisible()

    // Full page screenshot of first article
    await page.screenshot({
      path: `screenshots/blog/posts/article-layout-${test.info().project.name}.png`,
      fullPage: true,
    })
  })
})
