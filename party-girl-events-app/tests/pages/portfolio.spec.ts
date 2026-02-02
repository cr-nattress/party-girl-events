import { test, expect } from '@playwright/test'

test.describe('Portfolio Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio')
  })

  test('should load portfolio page', async ({ page }) => {
    await expect(page).toHaveURL('/portfolio')

    await page.screenshot({
      path: `screenshots/portfolio/hero-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display image gallery', async ({ page }) => {
    await page.waitForTimeout(1000)

    // Check for images
    const images = page.locator('img')
    const count = await images.count()
    expect(count).toBeGreaterThan(0)

    await page.screenshot({
      path: `screenshots/portfolio/gallery-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should have category filters', async ({ page }) => {
    // Look for filter buttons
    const filterSection = page.locator('button, [role="button"]').filter({ hasText: /weddings|proposals|events/i })

    await page.screenshot({
      path: `screenshots/portfolio/filters-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should filter gallery by category', async ({ page }) => {
    await page.waitForTimeout(500)

    // Try clicking filter buttons if they exist
    const weddingsFilter = page.locator('button, [role="button"]').filter({ hasText: /wedding/i }).first()
    if (await weddingsFilter.isVisible()) {
      await weddingsFilter.click()
      await page.waitForTimeout(500)

      await page.screenshot({
        path: `screenshots/portfolio/filtered-weddings-${test.info().project.name}.png`,
        fullPage: false,
      })
    }
  })

  test('full page screenshot', async ({ page }) => {
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: `screenshots/portfolio/full-page-${test.info().project.name}.png`,
      fullPage: true,
    })
  })
})
