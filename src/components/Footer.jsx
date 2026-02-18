import React from 'react'
import { motion } from 'framer-motion'
import { footerReveal, scrollTopBtn } from '../animations/variants'
import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiLeetcode, SiSlack } from 'react-icons/si'

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-8 sm:py-12">
      <motion.div initial="hidden" whileInView="show" variants={footerReveal} className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center space-x-4 mb-4 sm:mb-6">
          <a aria-label="GitHub" href="https://github.com/kalyanram003" className="text-text-secondary hover:text-white text-lg sm:text-xl"><FiGithub /></a>
          <a aria-label="LinkedIn" href="https://linkedin.com/in/kalyan-ram-nanduri" className="text-text-secondary hover:text-white text-lg sm:text-xl"><FiLinkedin /></a>
          <a aria-label="LeetCode" href="https://leetcode.com/u/kalyanram2053/" className="text-text-secondary hover:text-white text-lg sm:text-xl"><SiLeetcode /></a>
          <a aria-label="Slack" href="https://humans-in-the-loop-ai.slack.com/team/U0AE6C0B5HT" className="text-text-secondary hover:text-white text-lg sm:text-xl"><SiSlack /></a>
        </div>

        <div className="text-xs sm:text-sm text-text-secondary">© {new Date().getFullYear()} Kalyan Ram. All rights reserved</div>

        <div className="mt-4 sm:mt-6">
          <motion.button onClick={scrollToTop} variants={scrollTopBtn} initial="initial" whileHover="hover" className="p-2 sm:p-3 rounded-full bg-card-bg text-sm sm:text-base">
            <FiArrowUp />
          </motion.button>
        </div>
      </motion.div>
    </footer>
  )
}
