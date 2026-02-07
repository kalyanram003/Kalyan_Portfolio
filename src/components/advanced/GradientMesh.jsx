import React from 'react'
import { motion } from 'framer-motion'
import { meshFade } from '../../animations/variants'

export default function GradientMesh() {
  return (
    <motion.div variants={meshFade} initial="hidden" animate="show" className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_10%_20%,rgba(0,217,255,0.04),transparent 20%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.03),transparent 25%)]" />
  )
}
