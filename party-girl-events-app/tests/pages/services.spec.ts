import { test, expect } from '@playwright/test'

test.describe('Services Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/services')
  })

  test('should load services page', async ({ page }) => {
    await expect(page).toHaveURL('/services')

    await page.screenshot({
      path: `screenshots/services/hero-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display service categories', async ({ page }) => {
    await page.waitForTimeout(500)

    // Scroll through service sections
    const scrollPositions = [0.2, 0.4, 0.6, 0.8]

    for (let i = 0; i < scrollPositions.length; i++) {
      await page.evaluate((pos) => window.scrollTo(0, document.body.scrollHeight * pos), scrollPositions[i])
      await page.waitForTimeout(500)

      await page.screenshot({
        path: `screenshots/services/section-${i + 1}-${test.info().project.name}.png`,
        fullPage: false,
      })
    }
  })

  test('should display pricing information', async ({ page }) => {
    // Look for price indicators
    const priceElements = page.locator('text=/\\$[0-9,]+/')
    const count = await priceElements.count()

    expect(count).toBeGreaterThan(0)

    await page.screenshot({
      path: `screenshots/services/pricing-visible-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should navigate to anchor sections', async ({ page }) => {
    // Test anchor navigation for proposals section
    await page.goto('/services#proposals')
    await page.waitForTimeout(500)

    await page.screenshot({
      path: `screenshots/services/anchor-proposals-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('full page screenshot', async ({ page }) => {
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: `screenshots/services/full-page-${test.info().project.name}.png`,
      fullPage: true,
    })
  })
})
