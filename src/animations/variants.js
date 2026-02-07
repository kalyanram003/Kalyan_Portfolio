export const pageFade = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
}

// Hero-specific variants
export const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.12 }
  }
}

export const heroLetter = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
}

export const floatSlow = {
  animate: { y: [0, -6, 0], opacity: [1, 0.98, 1], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const slideInRight = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const cardHover = {
  hover: { y: -6, boxShadow: '0 10px 30px rgba(0,0,0,0.4)', transition: { type: 'spring', stiffness: 300, damping: 24, duration: 0.4 } }
}

export const gridContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

export const skillCard = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
  hover: { scale: 1.03 }
}

export const projectCard = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
}

export const badgesStagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } }
}

export const badge = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } }
}

// Timeline animations
export const lineGrow = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.8, ease: 'easeOut' } }
}

export const timelineItemLeft = {
  hidden: { opacity: 0, x: -48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const timelineItemRight = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const pulse = {
  hidden: { scale: 0.8, opacity: 0.6 },
  show: { scale: [1, 1.2, 1], opacity: [1, 0.9, 1], transition: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' } }
}

// Footer
export const footerReveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

export const scrollTopBtn = {
  initial: { rotate: 0 },
  hover: { rotate: 90, transition: { type: 'spring', stiffness: 300, damping: 20, duration: 0.5 } }
}

// Advanced layer variants
export const sectionTransition = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.45, ease: 'easeIn' } }
}

export const skeletonPulse = {
  hidden: { opacity: 0.6 },
  show: { opacity: 1, transition: { duration: 0.9, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' } }
}

export const meshFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } }
}
