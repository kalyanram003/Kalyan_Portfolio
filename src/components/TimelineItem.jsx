import React from 'react'
import { motion } from 'framer-motion'

export default function TimelineItem({ side = 'left', date, title, children, variants }) {
  return (
    <div className="relative w-full">
      <div className={`md:absolute md:top-0 ${side === 'left' ? 'md:left-0' : 'md:right-0'}`}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={variants} className="bg-glass p-4 rounded-lg">
          <div className="text-sm text-text-secondary">{date}</div>
          <h4 className="mt-2 font-semibold">{title}</h4>
          <div className="mt-1 text-text-secondary text-sm">{children}</div>
        </motion.div>
      </div>
    </div>
  )
}
