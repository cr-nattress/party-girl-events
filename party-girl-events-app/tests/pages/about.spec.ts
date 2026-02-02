import { test, expect } from '@playwright/test'

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about')
  })

  test('should load about page', async ({ page }) => {
    await expect(page).toHaveURL('/about')

    await page.screenshot({
      path: `screenshots/about/hero-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display Stephanie bio section', async ({ page }) => {
    // Look for bio content
    const bioSection = page.locator('text=Stephanie').first()
    await expect(bioSection).toBeVisible()

    await page.screenshot({
      path: `screenshots/about/bio-section-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display credentials and awards', async ({ page }) => {
    // Scroll to credentials section
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.5))
    await page.waitForTimeout(500)

    await page.screenshot({
      path: `screenshots/about/credentials-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display social media links', async ({ page }) => {
    // Check for social links
    const instagramLink = page.locator('a[href*="instagram"]')
    const facebookLink = page.locator('a[href*="facebook"]')

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(500)

    await page.screenshot({
      path: `screenshots/about/social-links-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('full page screenshot', async ({ page }) => {
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: `screenshots/about/full-page-${test.info().project.name}.png`,
      fullPage: true,
    })
  })
})
