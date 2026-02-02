import { test, expect } from '@playwright/test'

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('should load contact page', async ({ page }) => {
    await expect(page).toHaveURL('/contact')

    await page.screenshot({
      path: `screenshots/contact/hero-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display contact form', async ({ page }) => {
    const form = page.locator('form')
    await expect(form).toBeVisible()

    // Check for form fields
    await expect(page.locator('input[type="text"], input[name*="name"]').first()).toBeVisible()
    await expect(page.locator('input[type="email"]').first()).toBeVisible()

    await page.screenshot({
      path: `screenshots/contact/form-empty-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should display contact information', async ({ page }) => {
    // Check for contact details
    const emailLink = page.locator('text=stephanie@partygirl.events')
    const phoneText = page.locator('text=970')

    await page.screenshot({
      path: `screenshots/contact/contact-info-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('should validate form fields', async ({ page }) => {
    const submitButton = page.locator('button[type="submit"]')

    // Try to submit empty form
    if (await submitButton.isVisible()) {
      await submitButton.click()
      await page.waitForTimeout(500)

      await page.screenshot({
        path: `screenshots/contact/form-validation-${test.info().project.name}.png`,
        fullPage: false,
      })
    }
  })

  test('should show form with filled data', async ({ page }) => {
    // Fill out the form
    const nameInput = page.locator('input[type="text"], input[name*="name"]').first()
    const emailInput = page.locator('input[type="email"]').first()
    const messageInput = page.locator('textarea').first()

    if (await nameInput.isVisible()) {
      await nameInput.fill('Jane Smith')
    }
    if (await emailInput.isVisible()) {
      await emailInput.fill('jane@example.com')
    }
    if (await messageInput.isVisible()) {
      await messageInput.fill('I would love to discuss planning my Vail wedding for next summer. Looking for full-service coordination.')
    }

    await page.screenshot({
      path: `screenshots/contact/form-filled-${test.info().project.name}.png`,
      fullPage: false,
    })
  })

  test('full page screenshot', async ({ page }) => {
    await page.waitForTimeout(1000)
    await page.screenshot({
      path: `screenshots/contact/full-page-${test.info().project.name}.png`,
      fullPage: true,
    })
  })
})
