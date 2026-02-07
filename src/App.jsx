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

        <div id="about" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-4 text-text-secondary">About section placeholder.</p>
        </div>

        <div id="projects" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <p className="mt-4 text-text-secondary">Projects section placeholder.</p>
        </div>

        <div id="contact" className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 text-text-secondary">Contact section placeholder.</p>
        </div>
      </motion.main>
    </AnimatePresence>
  )
}

export default App
