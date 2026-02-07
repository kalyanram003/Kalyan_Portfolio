import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { pageFade } from './animations/variants'
import Navbar from './components/shared/Navbar'
import ScrollProgress from './components/shared/ScrollProgress'
import CustomCursor from './components/shared/CustomCursor'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './styles/globals.css'

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="app-root"
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={pageFade}
        className="min-h-screen bg-bg-black text-text-primary antialiased"
      >
  <CustomCursor />
  <ScrollProgress />
  <Navbar />

  <Hero />
  <About />
  <Skills />
  <Projects />
  <Experience />
  <Contact />
  <Footer />
      </motion.main>
    </AnimatePresence>
  )
}

export default App
