import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function ScrollProgress() {
  const y = useMotionValue(0)
  const scaleX = useSpring(0, { stiffness: 200, damping: 30 })

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement
      const scroll = h.scrollTop || document.body.scrollTop
      const total = h.scrollHeight - h.clientHeight
      const pct = total > 0 ? scroll / total : 0
      y.set(pct)
      scaleX.set(pct)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [y, scaleX])

  return (
    <div aria-hidden className="fixed top-0 left-0 w-full h-1 pointer-events-none z-50">
      <motion.div
        style={{ scaleX }}
        className="origin-left h-1 bg-gradient-to-r from-accent-cyan to-accent-blue"
      />
    </div>
  )
}

