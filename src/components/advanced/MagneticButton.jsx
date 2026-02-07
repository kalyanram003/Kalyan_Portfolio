import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useMagnetic } from '../../animations/hooks'

export default function MagneticButton({ children, ...props }) {
  const ref = useRef(null)
  useMagnetic(ref, 24)
  return (
    <motion.button ref={ref} whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }} className="px-5 py-3 bg-accent-cyan rounded-md text-black" {...props}>
      {children}
    </motion.button>
  )
}
