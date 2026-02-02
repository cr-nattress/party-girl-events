import { test, expect } from '@playwright/test'

const pages = [
  { name: 'homepage', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'services', path: '/services' },
  { name: 'portfolio', path: '/portfolio' },
  { name: 'blog', path: '/blog' },
  { name: 'contact', path: '/contact' },
]

const viewports = [
  { name: 'mobile-sm', width: 320, height: 568 },
  { name: 'mobile-md', width: 375, height: 812 },
  { name: 'mobile-lg', width: 428, height: 926 },
  { name: 'tablet-portrait', width: 768, height: 1024 },
  { name: 'tablet-landscape', width: 1024, height: 768 },
  { name: 'desktop-sm', width: 1280, height: 800 },
  { name: 'desktop-md', width: 1440, height: 900 },
  { name: 'desktop-lg', width: 1920, height: 1080 },
  { name: 'desktop-xl', width: 2560, height: 1440 },
]

test.describe('Responsive Design Screenshots', () => {
  for (const pageInfo of pages) {
    for (const viewport of viewports) {
      test(`${pageInfo.name} at ${viewport.name} (${viewport.width}x${viewport.height})`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height })
        await page.goto(pageInfo.path)
        await page.waitForTimeout(500)

        // Above the fold screenshot
        await page.screenshot({
          path: `screenshots/responsive/${pageInfo.name}/${viewport.name}-above-fold.png`,
          fullPage: false,
        })

        // Full page screenshot
        await page.screenshot({
          path: `screenshots/responsive/${pageInfo.name}/${viewport.name}-full.png`,
          fullPage: true,
        })
      })
    }
  }
})

test.describe('Critical Breakpoint Comparisons', () => {
  const breakpoints = [
    { name: 'xs', width: 320 },
    { name: 'sm', width: 640 },
    { name: 'md', width: 768 },
    { name: 'lg', width: 1024 },
    { name: 'xl', width: 1280 },
    { name: '2xl', width: 1536 },
  ]

  test('homepage at all breakpoints', async ({ page }) => {
    for (const bp of breakpoints) {
      await page.setViewportSize({ width: bp.width, height: 800 })
      await page.goto('/')
      await page.waitForTimeout(500)

      await page.screenshot({
        path: `screenshots/breakpoints/homepage-${bp.name}-${bp.width}px.png`,
        fullPage: true,
      })
    }
  })

  test('services page at all breakpoints', async ({ page }) => {
    for (const bp of breakpoints) {
      await page.setViewportSize({ width: bp.width, height: 800 })
      await page.goto('/services')
      await page.waitForTimeout(500)

      await page.screenshot({
        path: `screenshots/breakpoints/services-${bp.name}-${bp.width}px.png`,
        fullPage: true,
      })
    }
  })
})
