import React from 'react'
import { motion } from 'framer-motion'
import { footerReveal, scrollTopBtn } from '../animations/variants'
import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12">
      <motion.div initial="hidden" whileInView="show" variants={footerReveal} className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <a aria-label="GitHub" href="https://github.com/kalyanram003" className="text-text-secondary hover:text-white"><FiGithub /></a>
          <a aria-label="LinkedIn" href="https://linkedin.com/in/kalyan-ram-nanduri" className="text-text-secondary hover:text-white"><FiLinkedin /></a>
        </div>

  <div className="text-text-secondary">© {new Date().getFullYear()} Kalyan Ram.  All rights reserved</div>

        <div className="mt-6">
          <motion.button onClick={scrollToTop} variants={scrollTopBtn} initial="initial" whileHover="hover" className="p-3 rounded-full bg-card-bg">
            <FiArrowUp />
          </motion.button>
        </div>
      </motion.div>
    </footer>
  )
}
