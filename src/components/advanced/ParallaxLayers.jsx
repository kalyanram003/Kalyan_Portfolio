import React from 'react'
import { motion } from 'framer-motion'
import { meshFade } from '../../animations/variants'
import { useParallax } from '../../animations/hooks'

export default function ParallaxLayers() {
  const pos = useParallax(0.04)
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <motion.div style={{ translateX: pos.x * 50, translateY: pos.y * 50 }} variants={meshFade} initial="hidden" animate="show" className="absolute inset-0 bg-gradient-to-r from-[rgba(0,217,255,0.03)] to-[rgba(14,165,233,0.02)]" />
    </div>
  )
}
