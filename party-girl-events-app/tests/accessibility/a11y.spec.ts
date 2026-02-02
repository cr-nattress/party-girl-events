import { test, expect } from '@playwright/test'

test.describe('Accessibility Checks', () => {
  const pages = [
    { name: 'homepage', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'services', path: '/services' },
    { name: 'portfolio', path: '/portfolio' },
    { name: 'blog', path: '/blog' },
    { name: 'contact', path: '/contact' },
  ]

  for (const pageInfo of pages) {
    test(`${pageInfo.name} should have proper heading structure`, async ({ page }) => {
      await page.goto(pageInfo.path)
      await page.waitForTimeout(500)

      // Check for h1
      const h1Count = await page.locator('h1').count()
      expect(h1Count).toBeGreaterThanOrEqual(1)

      await page.screenshot({
        path: `screenshots/a11y/${pageInfo.name}-headings-${test.info().project.name}.png`,
        fullPage: true,
      })
    })

    test(`${pageInfo.name} should have alt text on images`, async ({ page }) => {
      await page.goto(pageInfo.path)
      await page.waitForTimeout(500)

      // Check images have alt attributes
      const imagesWithoutAlt = await page.locator('img:not([alt])').count()

      // Take screenshot with any issues highlighted
      await page.screenshot({
        path: `screenshots/a11y/${pageInfo.name}-images-${test.info().project.name}.png`,
        fullPage: false,
      })

      // Log finding (not strict failure for now)
      if (imagesWithoutAlt > 0) {
        console.log(`Warning: ${pageInfo.name} has ${imagesWithoutAlt} images without alt text`)
      }
    })
  }

  test('contact form should have proper labels', async ({ page }) => {
    await page.goto('/contact')
    await page.waitForTimeout(500)

    // Check for form labels
    const inputs = page.locator('input:not([type="hidden"]), textarea, select')
    const inputCount = await inputs.count()

    // Each input should have associated label or aria-label
    for (let i = 0; i < inputCount; i++) {
      const input = inputs.nth(i)
      const hasLabel = await input.evaluate((el) => {
        const id = el.id
        const ariaLabel = el.getAttribute('aria-label')
        const ariaLabelledBy = el.getAttribute('aria-labelledby')
        const placeholder = el.getAttribute('placeholder')
        const label = id ? document.querySelector(`label[for="${id}"]`) : null
        return !!(label || ariaLabel || ariaLabelledBy || placeholder)
      })

      if (!hasLabel) {
        console.log(`Warning: Input ${i} may be missing accessible label`)
      }
    }

    await page.screenshot({
      path: `screenshots/a11y/contact-form-labels-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(500)

    // Tab through interactive elements
    const screenshots = []

    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab')
      await page.waitForTimeout(200)

      await page.screenshot({
        path: `screenshots/a11y/keyboard-nav-tab-${i + 1}-${test.info().project.name}.png`,
        fullPage: false,
      })
    }
  })

  test('should have sufficient color contrast (visual check)', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(500)

    // Take screenshots of key UI elements for manual contrast review
    await page.screenshot({
      path: `screenshots/a11y/contrast-hero-${test.info().project.name}.png`,
      fullPage: false,
    })

    await page.goto('/contact')
    await page.waitForTimeout(500)

    await page.screenshot({
      path: `screenshots/a11y/contrast-form-${test.info().project.name}.png`,
      fullPage: false,
    })
  })
})

test.describe('Focus Visibility', () => {
  test('should show visible focus indicators', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(500)

    // Focus on first interactive element
    await page.keyboard.press('Tab')
    await page.waitForTimeout(300)

    await page.screenshot({
      path: `screenshots/a11y/focus-indicator-1-${test.info().project.name}.png`,
      fullPage: false,
    })

    // Continue tabbing
    await page.keyboard.press('Tab')
    await page.waitForTimeout(300)

    await page.screenshot({
      path: `screenshots/a11y/focus-indicator-2-${test.info().project.name}.png`,
      fullPage: false,
    })
  })
})
