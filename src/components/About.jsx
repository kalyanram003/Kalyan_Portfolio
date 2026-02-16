import React from 'react'
import { motion } from 'framer-motion'
import { slideInLeft, slideInRight, cardHover } from '../animations/variants'
import { useCounter } from '../animations/hooks'

function StatsCard({ label, value }) {
  const count = useCounter(value, 1200)
  return (
    <motion.div whileHover="hover" variants={cardHover} className="bg-glass p-3 sm:p-4 rounded-lg w-32 sm:w-40">
      <div className="text-xl sm:text-2xl font-semibold">{count}</div>
      <div className="text-xs sm:text-sm text-text-secondary">{label}</div>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={slideInLeft} className="flex justify-center">
          <div className="w-full max-w-md bg-card-bg p-4 sm:p-6 rounded-xl glass flex flex-col items-center">
            <motion.div 
              className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-cyan-500/30 hover:border-cyan-500/60 transition-colors shadow-lg flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img 
                src="/profile.jpg" 
                alt="Kalyan Ram" 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </motion.div>
            <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-center">Kalyan Ram</h3>
            <p className="mt-2 text-xs sm:text-sm text-text-secondary text-center">Full-Stack developer specializing in Java, Spring Boot, and Cloud.</p>
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <span className="px-2 sm:px-3 py-1 bg-transparent border border-border-color rounded-full text-xs sm:text-sm">Java</span>
              <span className="px-2 sm:px-3 py-1 bg-transparent border border-border-color rounded-full text-xs sm:text-sm">Spring Boot</span>
              <span className="px-2 sm:px-3 py-1 bg-transparent border border-border-color rounded-full text-xs sm:text-sm">AWS</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={slideInRight}>
          <h2 className="text-2xl sm:text-3xl font-semibold">About Me</h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary">I build scalable backend systems and delightful front-end experiences. Currently focusing on microservices, cloud deployments, and polished UI animations.</p>

          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
            <StatsCard label="Projects" value={8} />
            <StatsCard label="Years Experience" value={1} />
            <StatsCard label="Certifications" value={3} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
