import React from 'react'
import { motion } from 'framer-motion'
import { skeletonPulse } from '../../animations/variants'

export default function SkeletonCard() {
  return (
    <motion.div variants={skeletonPulse} initial="hidden" animate="show" className="w-full h-40 bg-surface rounded-lg" />
  )
}
