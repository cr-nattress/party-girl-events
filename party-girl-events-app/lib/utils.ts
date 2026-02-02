/**
 * Party Girl Events - Utility Functions
 * Common helpers for formatting, validation, and data manipulation
 */

// === PRICE FORMATTING ===

/**
 * Format price in USD
 *
 * @example
 * formatPrice(7500) // "$7,500"
 * formatPrice(95, true) // "$95/person"
 */
export function formatPrice(amount: number, perPerson?: boolean): string {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)

  return perPerson ? `${formatted}/person` : formatted
}

/**
 * Format price range
 *
 * @example
 * formatPriceRange(2500, 4500) // "$2,500 - $4,500"
 */
export function formatPriceRange(min: number, max: number): string {
  return `${formatPrice(min)} - ${formatPrice(max)}`
}

// === DATE FORMATTING ===

/**
 * Format date in various styles
 *
 * @example
 * formatDate(new Date(), 'long') // "February 1, 2026"
 * formatDate(new Date(), 'short') // "Feb 1, 2026"
 * formatDate(new Date(), 'day-month') // "Feb 1"
 */
export function formatDate(
  date: Date | string,
  format: 'long' | 'short' | 'day-month' | 'year' = 'long'
): string {
  const d = typeof date === 'string' ? new Date(date) : date

  switch (format) {
    case 'long':
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    case 'short':
      return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    case 'day-month':
      return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })
    case 'year':
      return d.toLocaleDateString('en-US', { year: 'numeric' })
    default:
      return d.toLocaleDateString('en-US')
  }
}

/**
 * Get relative time (e.g., "3 days from now")
 */
export function getRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffMs = d.getTime() - now.getTime()
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffDays < 0) {
    return `${Math.abs(diffDays)} days ago`
  } else if (diffDays === 0) {
    return 'Today'
  } else if (diffDays === 1) {
    return 'Tomorrow'
  } else if (diffDays < 7) {
    return `In ${diffDays} days`
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7)
    return `In ${weeks} week${weeks > 1 ? 's' : ''}`
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return `In ${months} month${months > 1 ? 's' : ''}`
  } else {
    const years = Math.floor(diffDays / 365)
    return `In ${years} year${years > 1 ? 's' : ''}`
  }
}

// === STRING UTILITIES ===

/**
 * Create URL-safe slug from text
 *
 * @example
 * slugify("Erika & Eric's Camp Hale Wedding") // "erika-erics-camp-hale-wedding"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with dashes
    .replace(/--+/g, '-') // Replace multiple dashes with single
    .trim()
}

/**
 * Truncate text to specified length
 *
 * @example
 * truncate("This is a long description", 20) // "This is a long de..."
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

/**
 * Capitalize first letter of each word
 *
 * @example
 * titleCase("party girl events") // "Party Girl Events"
 */
export function titleCase(text: string): string {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

// === VALIDATION ===

/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number (US format)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\(\)]+$/
  const digits = phone.replace(/\D/g, '')
  return phoneRegex.test(phone) && digits.length === 10
}

/**
 * Format phone number to (XXX) XXX-XXXX
 */
export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '')
  if (digits.length !== 10) return phone

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

// === NUMBER UTILITIES ===

/**
 * Clamp number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Get random number between min and max
 */
export function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Round to specified decimal places
 */
export function roundTo(value: number, decimals: number = 2): number {
  const multiplier = Math.pow(10, decimals)
  return Math.round(value * multiplier) / multiplier
}

// === ARRAY UTILITIES ===

/**
 * Shuffle array randomly
 */
export function shuffle<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

/**
 * Get unique items from array
 */
export function unique<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}

/**
 * Chunk array into smaller arrays of specified size
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size))
  }
  return chunks
}

// === DELAY/ASYNC ===

/**
 * Wait for specified milliseconds
 *
 * @example
 * await wait(1000) // Wait 1 second
 */
export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// === LOCAL STORAGE ===

/**
 * Safely get item from localStorage
 */
export function getLocalStorage<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue

  try {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error)
    return defaultValue
  }
}

/**
 * Safely set item in localStorage
 */
export function setLocalStorage<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error(`Error setting localStorage key "${key}":`, error)
  }
}

/**
 * Remove item from localStorage
 */
export function removeLocalStorage(key: string): void {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error)
  }
}
