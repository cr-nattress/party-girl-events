import type { Transition, Variants } from 'framer-motion'

/**
 * Party Girl Events - Animation Library
 * Consistent, elegant animations throughout the site
 */

// === TRANSITIONS ===

/**
 * Luxury transition - Smooth, elegant easing for high-end feel
 */
export const luxuryTransition: Transition = {
  type: 'tween',
  ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for elegant movement
  duration: 0.6,
}

/**
 * Spring transition - Natural, bouncy feel
 */
export const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
  mass: 1,
}

/**
 * Fast transition - Quick, snappy animations
 */
export const fastTransition: Transition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.2,
}

// === FADE ANIMATIONS ===

/**
 * Fade up - Element fades in while moving up
 * Perfect for hero sections and main content
 */
export const fadeUp: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: luxuryTransition,
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: fastTransition,
  },
}

/**
 * Fade in - Simple opacity animation
 */
export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: luxuryTransition,
  },
  exit: {
    opacity: 0,
    transition: fastTransition,
  },
}

/**
 * Fade down - Element fades in while moving down
 */
export const fadeDown: Variants = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: luxuryTransition,
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: fastTransition,
  },
}

/**
 * Fade left - Element fades in while moving from right
 */
export const fadeLeft: Variants = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: luxuryTransition,
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: fastTransition,
  },
}

/**
 * Fade right - Element fades in while moving from left
 */
export const fadeRight: Variants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: luxuryTransition,
  },
  exit: {
    opacity: 0,
    x: 40,
    transition: fastTransition,
  },
}

// === SCALE ANIMATIONS ===

/**
 * Scale in - Element scales from 0.8 to 1
 */
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: fastTransition,
  },
}

/**
 * Tap scale - For interactive elements
 */
export const tapScale = {
  scale: 0.98,
}

/**
 * Hover scale - Subtle lift effect
 */
export const hoverScale = {
  scale: 1.02,
  transition: fastTransition,
}

/**
 * Hover lift - Lift with shadow increase
 */
export const hoverLift = {
  y: -4,
  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.2)',
  transition: fastTransition,
}

// === STAGGER ANIMATIONS ===

/**
 * Stagger container - Parent element for staggered children
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

/**
 * Stagger item - Child element in stagger container
 */
export const staggerItem: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: fastTransition,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: fastTransition,
  },
}

// === PARALLAX ===

/**
 * Parallax scroll - For background elements
 * Usage: Use with useScroll and useTransform from framer-motion
 */
export const parallaxScroll = {
  y: [0, -50],
  transition: { ease: 'linear' },
}

// === REVEAL ANIMATIONS ===

/**
 * Reveal - Text/content reveal from bottom
 */
export const reveal: Variants = {
  initial: {
    y: '100%',
  },
  animate: {
    y: 0,
    transition: luxuryTransition,
  },
}

/**
 * Slide in left - Full slide from left edge
 */
export const slideInLeft: Variants = {
  initial: {
    x: '-100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: luxuryTransition,
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: fastTransition,
  },
}

/**
 * Slide in right - Full slide from right edge
 */
export const slideInRight: Variants = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: luxuryTransition,
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: fastTransition,
  },
}

// === MODAL/OVERLAY ANIMATIONS ===

/**
 * Backdrop - For modal backgrounds
 */
export const backdrop: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: fastTransition,
  },
  exit: {
    opacity: 0,
    transition: fastTransition,
  },
}

/**
 * Modal - For modal/dialog content
 */
export const modal: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springTransition,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: fastTransition,
  },
}

// === DRAWER ANIMATIONS ===

/**
 * Drawer from bottom - Mobile menu style
 */
export const drawerBottom: Variants = {
  initial: {
    y: '100%',
  },
  animate: {
    y: 0,
    transition: springTransition,
  },
  exit: {
    y: '100%',
    transition: fastTransition,
  },
}

/**
 * Drawer from right - Side panel style
 */
export const drawerRight: Variants = {
  initial: {
    x: '100%',
  },
  animate: {
    x: 0,
    transition: springTransition,
  },
  exit: {
    x: '100%',
    transition: fastTransition,
  },
}
