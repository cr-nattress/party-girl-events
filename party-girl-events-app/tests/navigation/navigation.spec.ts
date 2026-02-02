import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate through all main pages', async ({ page }) => {
    // Start at homepage
    await page.goto('/')
    await page.screenshot({
      path: `screenshots/navigation/start-home-${test.info().project.name}.png`,
      fullPage: false,
    })

    // Navigate to About
    await page.click('a[href="/about"]')
    await expect(page).toHaveURL('/about')
    await page.screenshot({
      path: `screenshots/navigation/nav-to-about-${test.info().project.name}.png`,
      fullPage: false,
    })

    // Navigate to Services
    await page.click('a[href="/services"]')
    await expect(page).toHaveURL('/services')
    await page.screenshot({
      path: `screenshots/navigation/nav-to-services-${test.info().project.name}.png`,
      fullPage: false,
    })

    // Navigate to Portfolio
    await page.click('a[href="/portfolio"]')
    await expect(page).toHaveURL('/portfolio')
    await page.screenshot({
      path: `screenshots/navigation/nav-to-portfolio-${test.info().project.name}.png`,
      fullPage: false,
    })

    // Navigate to Blog
    await page.click('a[href="/blog"]')
    await expect(page).toHaveURL('/blog')
    await page.screenshot({
      path: `screenshots/navigation/nav-to-blog-${test.info().project.name}.png`,
      fullPage: false,
    })

    // Navigate to Contact
    await page.click('a[href="/contact"]')
    await expect(page).toHaveURL('/contact')
    await page.screenshot({
      path: `screenshots/navigation/nav-to-contact-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('logo should navigate to homepage', async ({ page }) => {
    await page.goto('/about')

    // Click logo/brand link
    const logo = page.locator('header a[href="/"]').first()
    await logo.click()

    await expect(page).toHaveURL('/')
  })
})

test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test('should toggle mobile menu', async ({ page }) => {
    await page.goto('/')
    await page.waitForTimeout(500)

    // Screenshot with menu closed
    await page.screenshot({
      path: `screenshots/navigation/mobile-menu-closed-${test.info().project.name}.png`,
      fullPage: false,
    })

    // Find and click hamburger menu button
    const menuButton = page.locator('button[aria-label*="menu"], button[aria-label*="Menu"], header button').first()

    if (await menuButton.isVisible()) {
      await menuButton.click()
      await page.waitForTimeout(500)

      // Screenshot with menu open
      await page.screenshot({
        path: `screenshots/navigation/mobile-menu-open-${test.info().project.name}.png`,
        fullPage: false,
      })

      // Click a navigation link
      const aboutLink = page.locator('a[href="/about"]').first()
      if (await aboutLink.isVisible()) {
        await aboutLink.click()
        await expect(page).toHaveURL('/about')

        // Menu should close after navigation
        await page.screenshot({
          path: `screenshots/navigation/mobile-after-nav-${test.info().project.name}.png`,
          fullPage: false,
        })
      }
    }
  })
})
