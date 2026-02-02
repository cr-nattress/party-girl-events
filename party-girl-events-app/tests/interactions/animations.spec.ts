import { test, expect } from '@playwright/test'

test.describe('Animations and Interactions', () => {
  test('should animate elements on scroll (homepage)', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(500)

    // Capture initial state
    await page.screenshot({
      path: `screenshots/animations/homepage-initial-${test.info().project.name}.png`,
      fullPage: false,
    })

    // Scroll incrementally and capture animation states
    const scrollPositions = [200, 500, 800, 1200, 1600]

    for (let i = 0; i < scrollPositions.length; i++) {
      await page.evaluate((pos) => window.scrollTo({ top: pos, behavior: 'smooth' }), scrollPositions[i])
      await page.waitForTimeout(800)

      await page.screenshot({
        path: `screenshots/animations/scroll-${scrollPositions[i]}px-${test.info().project.name}.png`,
        fullPage: false,
      })
    }
  })

  test('should show hover states on buttons', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(500)

    // Find CTA buttons
    const ctaButton = page.locator('a, button').filter({ hasText: /contact|get started|book|schedule/i }).first()

    if (await ctaButton.isVisible()) {
      // Screenshot before hover
      await page.screenshot({
        path: `screenshots/interactions/button-normal-${test.info().project.name}.png`,
        fullPage: false,
      })

      // Hover and screenshot
      await ctaButton.hover()
      await page.waitForTimeout(300)

      await page.screenshot({
        path: `screenshots/interactions/button-hover-${test.info().project.name}.png`,
        fullPage: false,
      })
    }
  })

  test('should show hover states on service cards', async ({ page }) => {
    await page.goto('/services')
    await page.waitForTimeout(500)

    // Find service cards
    const serviceCard = page.locator('[class*="card"], article, section > div > div').first()

    if (await serviceCard.isVisible()) {
      await serviceCard.scrollIntoViewIfNeeded()
      await page.waitForTimeout(300)

      // Screenshot before hover
      await page.screenshot({
        path: `screenshots/interactions/card-normal-${test.info().project.name}.png`,
        fullPage: false,
      })

      // Hover
      await serviceCard.hover()
      await page.waitForTimeout(300)

      await page.screenshot({
        path: `screenshots/interactions/card-hover-${test.info().project.name}.png`,
        fullPage: false,
      })
    }
  })

  test('should show focus states on form inputs', async ({ page }) => {
    await page.goto('/contact')
    await page.waitForTimeout(500)

    const input = page.locator('input[type="text"], input[type="email"]').first()

    if (await input.isVisible()) {
      // Screenshot before focus
      await page.screenshot({
        path: `screenshots/interactions/input-normal-${test.info().project.name}.png`,
        fullPage: false,
      })

      // Focus and screenshot
      await input.focus()
      await page.waitForTimeout(300)

      await page.screenshot({
        path: `screenshots/interactions/input-focused-${test.info().project.name}.png`,
        fullPage: false,
      })
    }
  })
})
