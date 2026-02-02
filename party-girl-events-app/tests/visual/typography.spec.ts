import { test, expect } from '@playwright/test'

test.describe('Typography and Design System', () => {
  test('should display heading hierarchy correctly', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(500)

    // Capture hero heading
    await page.screenshot({
      path: `screenshots/typography/hero-heading-${test.info().project.name}.png`,
      fullPage: false,
    })

    // Scroll to section headings
    await page.evaluate(() => window.scrollTo(0, 600))
    await page.waitForTimeout(300)

    await page.screenshot({
      path: `screenshots/typography/section-headings-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display body text readability', async ({ page }) => {
    await page.goto('/blog/micro-weddings-minimonies-guide')
    await page.waitForTimeout(500)

    // Scroll to article content
    await page.evaluate(() => window.scrollTo(0, 400))
    await page.waitForTimeout(300)

    await page.screenshot({
      path: `screenshots/typography/article-body-text-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display accent font correctly', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(500)

    // Look for accent/script text (Pinyon Script)
    await page.screenshot({
      path: `screenshots/typography/accent-font-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display form labels and inputs', async ({ page }) => {
    await page.goto('/contact')
    await page.waitForTimeout(500)

    const form = page.locator('form')
    await form.scrollIntoViewIfNeeded()

    await page.screenshot({
      path: `screenshots/typography/form-typography-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display navigation text', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(500)

    const header = page.locator('header')

    await page.screenshot({
      path: `screenshots/typography/nav-text-${test.info().project.name}.png`,
      clip: { x: 0, y: 0, width: 1280, height: 100 },
    })
  })

  test('should display footer text', async ({ page }) => {
    await page.goto('/')
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(500)

    await page.screenshot({
      path: `screenshots/typography/footer-text-${test.info().project.name}.png`,
      fullPage: false,
    })
  })
})

test.describe('Color and Contrast', () => {
  test('should display primary color scheme', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(500)

    // Capture sections with primary colors
    await page.screenshot({
      path: `screenshots/colors/primary-colors-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display button color states', async ({ page }) => {
    await page.goto('/contact')
    await page.waitForTimeout(500)

    const submitButton = page.locator('button[type="submit"]')

    if (await submitButton.isVisible()) {
      await submitButton.scrollIntoViewIfNeeded()

      await page.screenshot({
        path: `screenshots/colors/button-default-${test.info().project.name}.png`,
        fullPage: false,
      })

      await submitButton.hover()
      await page.waitForTimeout(300)

      await page.screenshot({
        path: `screenshots/colors/button-hover-${test.info().project.name}.png`,
        fullPage: false,
      })
    }
  })

  test('should display card backgrounds', async ({ page }) => {
    await page.goto('/services')
    await page.waitForTimeout(500)

    await page.evaluate(() => window.scrollTo(0, 400))
    await page.waitForTimeout(300)

    await page.screenshot({
      path: `screenshots/colors/card-backgrounds-${test.info().project.name}.png`,
      fullPage: false,
    })
  })
})
