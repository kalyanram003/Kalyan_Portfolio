import React from 'react'
import { motion } from 'framer-motion'
import { sectionTransition } from '../../animations/variants'

export default function SectionTransition({ children }) {
  return (
    <motion.div initial="initial" animate="enter" exit="exit" variants={sectionTransition}>
      {children}
    </motion.div>
  )
}
