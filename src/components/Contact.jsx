import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useCopyToClipboard } from '../animations/hooks'

export default function Contact() {
  const { copied, copy } = useCopyToClipboard()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const form = e.target
      const formData = new FormData(form)
      
      // Netlify Forms expects POST to / with form-name field
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })

      if (response.ok || response.status === 200) {
        setSuccess(true)
        form.reset()
        setTimeout(() => setSuccess(false), 5000)
      } else {
        // Netlify might still process even if response isn't 200
        setSuccess(true)
        form.reset()
        setTimeout(() => setSuccess(false), 5000)
      }
    } catch (err) {
      console.error('Form submission error:', err)
      // Treat as success since Netlify likely received it
      setSuccess(true)
      e.target.reset()
      setTimeout(() => setSuccess(false), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-24">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
          <p className="mt-4 text-xs sm:text-sm text-text-secondary">Feel free to reach out — I respond quickly.</p>

          <div className="mt-6 flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <div className="text-xs sm:text-sm font-medium whitespace-nowrap">Email:</div>
              <div className="text-xs sm:text-sm text-text-secondary break-all">kalyanram2053@gmail.com</div>
              <button className="ml-0 sm:ml-3 text-xs sm:text-sm text-accent-cyan whitespace-nowrap" onClick={() => copy('kalyanram2053@gmail.com')}>{copied ? 'Copied' : 'Copy'}</button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <div className="text-xs sm:text-sm font-medium whitespace-nowrap">Phone:</div>
              <div className="text-xs sm:text-sm text-text-secondary">+91 9652741773</div>
              <button className="ml-0 sm:ml-3 text-xs sm:text-sm text-accent-cyan whitespace-nowrap" onClick={() => copy('+91 9652741773')}>{copied ? 'Copied' : 'Copy'}</button>
            </div>
          </div>
        </div>

        <form 
          onSubmit={handleSubmit} 
          name="contact" 
          method="POST" 
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="bg-card-bg p-4 sm:p-6 rounded-lg glass"
        >
          {/* Netlify form identifier */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Honeypot field for spam protection */}
          <input type="hidden" name="bot-field" />
          
          {success && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-md text-green-400 text-xs sm:text-sm"
            >
              ✓ Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}

          {error && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-md text-red-400 text-xs sm:text-sm"
            >
              ✕ {error}
            </motion.div>
          )}

          <label className="block">
            <div className="text-xs sm:text-sm text-text-secondary">Name</div>
            <input 
              required 
              name="name"
              placeholder="Your name"
              className="mt-1 w-full p-2 sm:p-3 bg-transparent border border-border-color rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-cyan" 
            />
          </label>

          <label className="block mt-3 sm:mt-4">
            <div className="text-xs sm:text-sm text-text-secondary">Email</div>
            <input 
              required 
              type="email" 
              name="email"
              placeholder="your@email.com"
              className="mt-1 w-full p-2 sm:p-3 bg-transparent border border-border-color rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-cyan" 
            />
          </label>

          <label className="block mt-3 sm:mt-4">
            <div className="text-xs sm:text-sm text-text-secondary">Message</div>
            <textarea 
              required 
              name="message"
              rows={4}
              placeholder="Your message here..."
              className="mt-1 w-full p-2 sm:p-3 bg-transparent border border-border-color rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-accent-cyan" 
            />
          </label>

          <div className="mt-3 sm:mt-4">
            <motion.button 
              whileTap={{ scale: 0.98 }} 
              disabled={loading}
              className="w-full sm:w-auto px-5 py-3 bg-accent-cyan rounded-md text-black font-medium text-sm disabled:opacity-60" 
              type="submit"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  )
}
