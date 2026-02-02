import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load and display hero section', async ({ page }) => {
    // Wait for hero to be visible
    await expect(page.locator('section').first()).toBeVisible()

    // Take full page screenshot
    await page.screenshot({
      path: `screenshots/homepage/hero-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display navigation header', async ({ page }) => {
    const header = page.locator('header')
    await expect(header).toBeVisible()

    // Check navigation links in header specifically
    const nav = page.locator('header nav')
    await expect(nav.getByRole('link', { name: /about/i })).toBeVisible()
    await expect(nav.getByRole('link', { name: /services/i })).toBeVisible()
    await expect(nav.getByRole('link', { name: /portfolio/i })).toBeVisible()
    await expect(nav.getByRole('link', { name: /blog/i })).toBeVisible()
    await expect(nav.getByRole('link', { name: /contact/i })).toBeVisible()
  })

  test('should have header change style on scroll', async ({ page }) => {
    // Screenshot before scroll
    await page.screenshot({
      path: `screenshots/homepage/header-top-${test.info().project.name}.png`,
      fullPage: false,
    })

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 100))
    await page.waitForTimeout(500)

    // Screenshot after scroll
    await page.screenshot({
      path: `screenshots/homepage/header-scrolled-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display services preview section', async ({ page }) => {
    const servicesSection = page.locator('text=Our Services').first()
    await servicesSection.scrollIntoViewIfNeeded()
    await page.waitForTimeout(500)

    await page.screenshot({
      path: `screenshots/homepage/services-preview-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display testimonials section', async ({ page }) => {
    // Scroll to testimonials
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.6))
    await page.waitForTimeout(500)

    await page.screenshot({
      path: `screenshots/homepage/testimonials-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display CTA section', async ({ page }) => {
    // Scroll near bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.85))
    await page.waitForTimeout(500)

    await page.screenshot({
      path: `screenshots/homepage/cta-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display footer', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(500)

    const footer = page.locator('footer')
    await expect(footer).toBeVisible()

    await page.screenshot({
      path: `screenshots/homepage/footer-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('full page screenshot', async ({ page }) => {
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: `screenshots/homepage/full-page-${test.info().project.name}.png`,
      fullPage: true,
    })
  })
})
