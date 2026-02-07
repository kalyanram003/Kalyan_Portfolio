import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const isTouch = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(!isTouch())
  }, [])

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const sx = useSpring(mouseX, { stiffness: 300, damping: 28 })
  const sy = useSpring(mouseY, { stiffness: 300, damping: 28 })

  useEffect(() => {
    if (!enabled) return
    function onMove(e) {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [enabled, mouseX, mouseY])

  if (!enabled) return null

  return (
    <>
      <motion.div
        style={{ translateX: sx, translateY: sy }}
        className="pointer-events-none fixed w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[rgba(0,217,255,0.12)] to-[rgba(14,165,233,0.06)] blur-2xl opacity-80 z-40"
      />
      <motion.div
        style={{ translateX: sx, translateY: sy }}
        className="pointer-events-none fixed w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan z-50"
      />
    </>
  )
}

