import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function NavLink({ id, label, onClick }) {
  return (
    <motion.a
      onClick={(e) => {
        e.preventDefault()
        onClick(id)
      }}
      href={`#${id}`}
      className="text-sm text-text-secondary relative"
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.4 }}
    >
      <span className="transition-colors duration-200">{label}</span>
      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-accent-cyan opacity-0 group-hover:opacity-100" />
    </motion.a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <motion.nav
        initial={false}
        animate={{ backdropFilter: scrolled ? 'blur(8px)' : 'none', backgroundColor: scrolled ? 'rgba(10,10,10,0.6)' : 'transparent', translateY: 0 }}
        transition={{ duration: 0.35 }}
        className="fixed top-0 left-0 right-0 z-40"
      >
        <div className={`max-w-6xl mx-auto px-6 py-3 flex items-center justify-between ${scrolled ? 'shadow-sm' : ''}`}>
          <div className="font-display font-semibold text-lg cursor-pointer" onClick={() => scrollToId('home')}>
            Kalyan Ram
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <NavLink key={l.id} id={l.id} label={l.label} onClick={scrollToId} />
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 rounded-md bg-transparent text-text-secondary"
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30, duration: 0.5 }}
            className="fixed inset-y-0 right-0 w-3/4 max-w-sm z-50 bg-dark-gray bg-opacity-95 p-6"
          >
            <nav className="flex flex-col space-y-6 mt-8">
              {links.map((l) => (
                <motion.a
                  key={l.id}
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                    scrollToId(l.id)
                  }}
                  whileHover={{ x: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  href={`#${l.id}`}
                  className="text-lg text-text-secondary"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
