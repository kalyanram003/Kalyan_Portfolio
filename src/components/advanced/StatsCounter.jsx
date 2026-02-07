import React from 'react'
import { motion } from 'framer-motion'
import { useCounter } from '../../animations/hooks'

export default function StatsCounter({ value = 0, label }) {
  const count = useCounter(value, 1200)
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-glass p-4 rounded-lg text-center">
      <div className="text-2xl font-semibold">{count}+</div>
      <div className="text-sm text-text-secondary">{label}</div>
    </motion.div>
  )
}
