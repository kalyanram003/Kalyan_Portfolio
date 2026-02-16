import React from 'react'
import { motion } from 'framer-motion'
import { heroContainer, heroLetter, floatSlow } from '../animations/variants'
import { useTypewriter, useReducedMotionOnMobile } from '../animations/hooks'
import CodeTerminalScene from './advanced/CodeTerminalScene'

function NameReveal({ name }) {
  return (
    <motion.h1 className="text-5xl md:text-8xl font-display font-bold leading-tight" variants={heroContainer} initial="hidden" animate="show">
      {name.split(' ').map((part, i) => (
        <motion.span key={i} className="inline-block mr-3" variants={heroLetter}>
          {part}
        </motion.span>
      ))}
    </motion.h1>
  )
}

function Hero() {
  const tagline = 'Full-Stack Developer | Java & Spring Boot Expert | Cloud Enthusiast'
  const typed = useTypewriter(tagline, 28)
  const reduceMotion = useReducedMotionOnMobile()

  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.div {...(reduceMotion ? {} : floatSlow)}>
              <NameReveal name={'Kalyan Ram'} />
            </motion.div>

            <motion.p className="mt-6 text-lg text-text-secondary max-w-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              {typed}
            </motion.p>

            <div className="mt-8 flex items-center space-x-4">
              <motion.a whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }} href="#projects" className="px-5 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue text-black rounded-md font-medium">
                View Projects
              </motion.a>
              <motion.a whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }} href="#contact" className="px-5 py-3 border border-border-color rounded-md text-text-secondary">
                Contact Me
              </motion.a>
            </div>
          </div>

          <div className="hidden md:block">
            <CodeTerminalScene />
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Hero)
